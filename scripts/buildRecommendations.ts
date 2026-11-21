/**
 * scripts/buildRecommendations.ts
 *
 * data/recommendations.csv(推薦データの正本・275行×16列)と
 * data/article-ids.csv(記事ID ↔ path の対応。2026-11-20 時点の main 932e765 で固定)から
 * src/data/recommendations.ts を作る。
 *
 * - 記事IDはファイルの並びから計算しない(ファイルが増えると番号がずれるため)。
 * - パイロットの判定は「パイロット50対象」列が「対象（フェーズ1）」と完全に一致するときだけ。
 *   推薦の本数は判定に使わない。
 * - パイロット行は推薦先まで厳しく確かめ、問題があれば失敗させる。
 *   非パイロット行(フェーズ2)の推薦先の不備は、フェーズ1では使わないので警告にとどめる。
 *
 * 実行: npx tsx scripts/buildRecommendations.ts
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const DATA_CSV = path.join(ROOT, "data/recommendations.csv");
const IDS_CSV = path.join(ROOT, "data/article-ids.csv");
const ARTICLES_DIR = path.join(ROOT, "src/pages/Articles");
const OUTPUT_FILE = path.join(ROOT, "src/data/recommendations.ts");

const PILOT_VALUE = "対象（フェーズ1）";
const NON_PILOT_VALUE = "対象外（フェーズ2）";
const EXPECTED_PILOT_COUNT = 50;
const NONE = "なし";

const HEADER = [
  "記事ID", "パイロット50対象", "フェーズ2切替種別", "推薦合計本数",
  "本命推薦ID", "本命推薦_path", "本命推薦_target_type", "本命推薦の理由",
  "補助推薦1_ID", "補助推薦1_path", "補助推薦1_target_type", "補助推薦1_理由",
  "補助推薦2_ID", "補助推薦2_path", "補助推薦2_target_type", "補助推薦2_理由",
];
const SLOTS = [
  { slot: "primary", id: "本命推薦ID", path: "本命推薦_path", type: "本命推薦_target_type", reason: "本命推薦の理由" },
  { slot: "aux1", id: "補助推薦1_ID", path: "補助推薦1_path", type: "補助推薦1_target_type", reason: "補助推薦1_理由" },
  { slot: "aux2", id: "補助推薦2_ID", path: "補助推薦2_path", type: "補助推薦2_target_type", reason: "補助推薦2_理由" },
] as const;

/* RFC 4180 の CSV を読む(ダブルクォート・改行入りの値に対応) */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  const src = text.replace(/^﻿/, "");
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (inQuotes) {
      if (c === '"') {
        if (src[i + 1] === '"') { field += '"'; i++; } else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && src[i + 1] === "\n") i++;
      row.push(field); field = "";
      if (row.length > 1 || row[0] !== "") rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function fileNameToSlug(fileName: string): string {
  return fileName.replace(/\.tsx$/, "")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();
}

export function pageTypeOfPath(p: string): "article" | "self_check" {
  const slug = p.split("/articles/")[1] ?? "";
  return /-check(-|$)/.test(slug) ? "self_check" : "article";
}

const errors: string[] = [];
const warnings: string[] = [];

/* ---------- 記事ID ↔ path ---------- */
const articlePaths = new Set(
  fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".tsx")).map((f) => `/articles/${fileNameToSlug(f)}`),
);
const idRows = parseCsv(fs.readFileSync(IDS_CSV, "utf-8"));
if (idRows[0].join(",") !== "記事ID,path") errors.push(`article-ids.csv の見出しが違います: ${idRows[0].join(",")}`);
const pathById = new Map<string, string>();
const idByPath = new Map<string, string>();
for (const [id, p] of idRows.slice(1)) {
  if (pathById.has(id)) errors.push(`article-ids.csv: 記事IDが重複しています: ${id}`);
  if (idByPath.has(p)) errors.push(`article-ids.csv: path が重複しています: ${p}`);
  if (!articlePaths.has(p)) errors.push(`article-ids.csv: 記事ファイルがありません: ${id} ${p}`);
  pathById.set(id, p);
  idByPath.set(p, id);
}
for (const p of articlePaths) {
  if (!idByPath.has(p)) warnings.push(`記事IDがない記事(非パイロットとして扱う): ${p}`);
}

/* ---------- 推薦データ ---------- */
const rows = parseCsv(fs.readFileSync(DATA_CSV, "utf-8"));
const header = rows[0];
if (header.join(",") !== HEADER.join(",")) errors.push(`recommendations.csv の見出しが違います`);
const seen = new Set<string>();
type Rec = { slot: "primary" | "aux1" | "aux2"; id: string; path: string; targetType: "article" | "self_check"; reason: string };
type Entry = { id: string; pilot: boolean; recs: Rec[]; hub: null };
const out: Record<string, Entry> = {};
let pilotCount = 0;
let phase2Problems = 0;

for (const [n, cells] of rows.slice(1).entries()) {
  const line = n + 2;
  if (cells.length !== HEADER.length) { errors.push(`${line}行目: 列の数が ${cells.length} です(16が正しい)`); continue; }
  const r = Object.fromEntries(HEADER.map((h, i) => [h, cells[i]])) as Record<string, string>;
  const id = r["記事ID"];
  if (seen.has(id)) errors.push(`記事IDが重複しています: ${id}`);
  seen.add(id);
  const src = pathById.get(id);
  if (!src) { errors.push(`article-ids.csv にない記事ID: ${id}`); continue; }
  const flag = r["パイロット50対象"];
  if (flag !== PILOT_VALUE && flag !== NON_PILOT_VALUE) errors.push(`${id}: パイロットのフラグの値が違います: ${flag}`);
  const pilot = flag === PILOT_VALUE;
  if (pilot) pilotCount++;

  const problems: string[] = [];
  const recs: Rec[] = [];
  let primaryMissing = false;
  for (const s of SLOTS) {
    const rid = r[s.id], rp = r[s.path], rt = r[s.type], rr = r[s.reason].trim();
    if (rp === NONE) {
      if (rid !== NONE || rt !== NONE) problems.push(`${s.slot}: path が「なし」なのに ID か種別が入っています`);
      if (s.slot === "primary") primaryMissing = true;
      continue;
    }
    if (primaryMissing) problems.push(`${s.slot}: 本命推薦がないのに補助推薦があります`);
    if (!articlePaths.has(rp)) problems.push(`${s.slot}: 推薦先の記事がありません: ${rp}`);
    if (pathById.get(rid) !== rp) problems.push(`${s.slot}: ID(${rid})と path(${rp})が一致しません`);
    if (rp === src) problems.push(`${s.slot}: 自分自身を推薦しています`);
    if (recs.some((x) => x.path === rp)) problems.push(`${s.slot}: 同じ推薦先が重複しています: ${rp}`);
    if (rt !== "article" && rt !== "self_check") problems.push(`${s.slot}: 種別の値が違います: ${rt}`);
    else if (pageTypeOfPath(rp) !== rt) problems.push(`${s.slot}: 種別(${rt})と推薦先のページの種類が一致しません: ${rp}`);
    if (!rr || rr === NONE) problems.push(`${s.slot}: 推薦理由がありません`);
    else if (rr.length > 60) problems.push(`${s.slot}: 推薦理由が長すぎます(${rr.length}字。60字まで)`);
    recs.push({ slot: s.slot, id: rid, path: rp, targetType: rt as Rec["targetType"], reason: rr });
  }
  if (String(recs.length) !== r["推薦合計本数"]) problems.push(`推薦合計本数(${r["推薦合計本数"]})と実際の本数(${recs.length})が一致しません`);

  if (problems.length) {
    if (pilot) for (const p of problems) errors.push(`${id}(パイロット): ${p}`);
    else phase2Problems += problems.length;
  }
  // フェーズ1では非パイロットの推薦先は使わないので、出力には入れない
  out[src] = { id, pilot, recs: pilot ? recs : [], hub: null };
}
for (const id of pathById.keys()) if (!seen.has(id)) errors.push(`recommendations.csv に行がない記事ID: ${id}`);
if (pilotCount !== EXPECTED_PILOT_COUNT) errors.push(`パイロットの行数が ${pilotCount} です(${EXPECTED_PILOT_COUNT}が正しい)`);
if (phase2Problems) warnings.push(`フェーズ2の行の推薦先に不備が ${phase2Problems} 件あります(フェーズ1では使わない)`);

for (const w of warnings) console.warn(`[buildRecommendations] 警告: ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`[buildRecommendations] エラー: ${e}`);
  process.exit(1);
}

const sorted = Object.keys(out).sort((a, b) => out[a].id.localeCompare(out[b].id));
const body = sorted.map((p) => `  ${JSON.stringify(p)}: ${JSON.stringify(out[p])},`).join("\n");
const ts = `/**
 * このファイルは scripts/buildRecommendations.ts が自動生成しています。直接編集しないでください。
 * 正本: data/recommendations.csv(275行×16列。石川さんのチャット出力から再構成したデータ)
 * 記事IDの対応: data/article-ids.csv
 */

export type RecSlot = "primary" | "aux1" | "aux2";
export type RecTargetPageType = "article" | "self_check";
export type RecItem = { slot: RecSlot; id: string; path: string; targetType: RecTargetPageType; reason: string };
export type RecEntry = { id: string; pilot: boolean; recs: RecItem[]; hub: null };

export const recommendations: Record<string, RecEntry> = {
${body}
};
`;
fs.writeFileSync(OUTPUT_FILE, ts);
console.log(`[buildRecommendations] ${sorted.length}件(パイロット ${pilotCount}件)を書き出しました`);
