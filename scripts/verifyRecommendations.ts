/**
 * scripts/verifyRecommendations.ts
 *
 * build の最後に、dist の記事ページの静的HTMLを確かめる(回遊再設計 フェーズ1。計画書 7-7・8-9)。
 * 問題があれば終了コード 1 で build を失敗させる。
 *
 * - パイロット記事:新しい推薦エリア(new_3layer)が1つ。第1層の本数がデータと一致。
 *   旧構造の推薦(legacy の領域・ArticleFooterLinks のリンク部分・手書きの推薦欄)が出ていない。
 *   推薦エリアの中に、受付休止中の案内・LINE へのリンクがない。
 * - 非パイロット記事:新しい推薦エリアがない。legacy の領域(前後の記事・他の記事)がある。
 *   legacy の領域の中に、受付休止中の案内・LINE へのリンクがない。
 * - すべての記事:受付状態に連動する末尾の案内カードが残っている。
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { recommendations } from "../src/data/recommendations";
import { REC_PHASE1_ENABLED } from "../src/data/recFlags";

const __filename = fileURLToPath(import.meta.url);
const DIST = path.resolve(path.dirname(__filename), "../dist");

const errors: string[] = [];
const count = (s: string, needle: string) => s.split(needle).length - 1;
const escapeHtml = (t: string) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");

/* 手書きの推薦欄の見出し(パイロットで消えているべきもの) */
const HANDWRITTEN_MARKERS = [">関連する記事", "共感疲労クラスター——あわせて読む", ">あわせて読む<", ">共感疲労を深く知る<"];
/* ArticleFooterLinks のリンク部分にだけある文言 */
const FOOTER_LINK_MARKERS = [">初めての方へ<"];
/* 受付状態に連動する末尾のカード(ACCEPTING_NEW_CLIENTS のどちらか) */
const SERVICE_CARD_MARKERS = ["受付を再開したら、", "整理する時間をつくりませんか"];

function regionHtml(html: string, attr: string): string[] {
  const out: string[] = [];
  const re = new RegExp(`<(section|div)[^>]*data-rec-region="${attr}"[^>]*>`, "g");
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    // 同じタグの入れ子を数えて、対応する閉じタグまでを取り出す
    const tag = m[1];
    let depth = 1;
    const tagRe = new RegExp(`<${tag}[\\s>]|</${tag}>`, "g");
    tagRe.lastIndex = m.index + m[0].length;
    let t: RegExpExecArray | null;
    let end = html.length;
    while ((t = tagRe.exec(html))) {
      depth += t[0].startsWith("</") ? -1 : 1;
      if (depth === 0) { end = t.index; break; }
    }
    out.push(html.slice(m.index, end));
  }
  return out;
}

let pilotPages = 0;
let legacyPages = 0;
for (const [p, entry] of Object.entries(recommendations)) {
  const file = path.join(DIST, p, "index.html");
  if (!fs.existsSync(file)) { errors.push(`${p}: dist に HTML がありません`); continue; }
  const html = fs.readFileSync(file, "utf-8");
  const label = `${entry.id} ${p}`;

  if (!SERVICE_CARD_MARKERS.some((m) => html.includes(m))) errors.push(`${label}: 受付状態の案内カードがありません`);

  if (REC_PHASE1_ENABLED && entry.pilot) {
    pilotPages++;
    const areas = regionHtml(html, "new_3layer");
    if (areas.length !== 1) errors.push(`${label}: 新しい推薦エリアが ${areas.length} 個あります(1が正しい)`);
    if (count(html, 'data-rec-region="legacy_') > 0) errors.push(`${label}: 旧構造の推薦が残っています`);
    for (const m of [...HANDWRITTEN_MARKERS, ...FOOTER_LINK_MARKERS]) {
      if (html.includes(m)) errors.push(`${label}: 旧構造の推薦の文言が残っています: ${m}`);
    }
    const area = areas[0] ?? "";
    const layer1 = count(area, 'data-rec-layer="1"');
    if (layer1 !== entry.recs.length) errors.push(`${label}: 第1層が ${layer1} 本です(データは ${entry.recs.length} 本)`);
    for (const r of entry.recs) {
      if (!area.includes(`href="${r.path}"`)) errors.push(`${label}: 推薦先へのリンクがありません: ${r.path}`);
      // 推薦理由:そのリンクの中に、データと同じ文が1文で出ていること
      const link = area.slice(area.indexOf(`href="${r.path}"`));
      const shown = /data-rec-reason=""[^>]*>([^<]*)</.exec(link.slice(0, link.indexOf("</a>")))?.[1];
      if (shown !== escapeHtml(r.reason)) errors.push(`${label}: 推薦理由がデータと一致しません(${r.slot}): ${shown}`);
    }
    if (count(area, "data-rec-reason") !== entry.recs.length) errors.push(`${label}: 推薦理由の数が第1層の本数と一致しません`);
    if (html.includes("どれにも当てはまらない場合は")) errors.push(`${label}: 参照先のない「どれにも当てはまらない場合は」が残っています`);
    if (count(area, 'data-rec-layer="3"') !== 3) errors.push(`${label}: 第3層のリンクが3本ではありません`);
    if (/lin\.ee|受付/.test(area)) errors.push(`${label}: 推薦エリアの中に受付・LINE の案内があります`);
  } else {
    legacyPages++;
    if (count(html, 'data-rec-region="new_3layer"') > 0) errors.push(`${label}: 非パイロットに新しい推薦エリアがあります`);
    if (regionHtml(html, "legacy_random").length !== 1) errors.push(`${label}: 「他の記事」の領域がありません`);
    if (regionHtml(html, "legacy_prev_next").length !== 1) errors.push(`${label}: 「前後の記事」の領域がありません`);
    for (const attr of ["legacy_pillar", "legacy_prev_next", "legacy_random"]) {
      for (const r of regionHtml(html, attr)) {
        if (/lin\.ee|受付/.test(r)) errors.push(`${label}: ${attr} の中に受付・LINE の案内があります`);
      }
    }
  }
}

if (errors.length) {
  for (const e of errors) console.error(`[verifyRecommendations] ${e}`);
  console.error(`[verifyRecommendations] 問題 ${errors.length} 件`);
  process.exit(1);
}
console.log(`[verifyRecommendations] OK(パイロット ${pilotPages} ページ、旧構造 ${legacyPages} ページ、切り替えスイッチ ${REC_PHASE1_ENABLED ? "オン" : "オフ"})`);
