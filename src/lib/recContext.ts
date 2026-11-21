/**
 * 推薦のクリックから移動先までの情報を、sessionStorage で受け渡す(計画書 8-5)。
 * sessionStorage が使えない環境では何もしない(例外は外に出さない)。
 */

import {
  trackRecClick,
  type RecSlotType, type RecStructure, type RecTargetType,
} from "./analytics";
import { normalizeRecPath } from "./recUrl";

export const REC_CONTEXT_KEY = "ishizue_rec_context";
const MAX_AGE_MS = 30 * 60 * 1000;

export type RecContext = {
  source_id: string;
  target_id: string;
  target_path: string;
  target_type: RecTargetType;
  slot_type: RecSlotType;
  rec_structure: RecStructure;
  clicked_at: number;
};

export type RecClickInfo = Omit<RecContext, "clicked_at" | "target_path"> & { href: string };

/** 推薦ユニットの中のリンクを押したときに呼ぶ。イベントを送り、移動先のための情報を保存する */
export function handleRecLinkClick(info: RecClickInfo): void {
  trackRecClick(info.source_id, info.target_id, info.target_type, info.slot_type);
  const ctx: RecContext = {
    source_id: info.source_id,
    target_id: info.target_id,
    target_path: normalizeRecPath(info.href),
    target_type: info.target_type,
    slot_type: info.slot_type,
    rec_structure: info.rec_structure,
    clicked_at: Date.now(),
  };
  try {
    window.sessionStorage.setItem(REC_CONTEXT_KEY, JSON.stringify(ctx));
  } catch { /* 保存できない環境では post_rec_engagement を送らないだけ */ }
}

/**
 * 移動先で呼ぶ。読んだら、一致しても しなくても すぐに消す。
 * 30分以内・URL が一致・計測の対象のリンク の3つを満たすときだけ返す。
 */
export function consumeRecContext(currentUrl: string): RecContext | null {
  let raw: string | null = null;
  try {
    raw = window.sessionStorage.getItem(REC_CONTEXT_KEY);
    window.sessionStorage.removeItem(REC_CONTEXT_KEY);
  } catch {
    return null;
  }
  if (!raw) return null;
  let ctx: RecContext;
  try {
    ctx = JSON.parse(raw) as RecContext;
  } catch {
    return null;
  }
  if (!ctx || typeof ctx.clicked_at !== "number") return null;
  if (Date.now() - ctx.clicked_at > MAX_AGE_MS || Date.now() < ctx.clicked_at) return null;
  if (normalizeRecPath(currentUrl) !== ctx.target_path) return null;
  if (ctx.target_type === "article_list" || ctx.target_id === "tools_list") return null;
  return ctx;
}
