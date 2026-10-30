/**
 * api/feedback.ts — サイトの不具合・ご意見を受け付ける(読者が送る)
 *
 * 保存するもの:種類・本文(500字まで)・送信元のページ・端末の種類(スマホ/パソコンなど)・日時
 * 保存しないもの:名前・メールアドレス・IPアドレス(連続送信の制限には、IPを元にした使い捨ての値を10分だけ使う)
 * 一覧はダッシュボード(api/ops-dashboard.ts の ?view=feedback)で、閲覧キーのある人だけが見られる
 *
 * 必要な環境変数:KV_REST_API_URL / KV_REST_API_TOKEN(ダッシュボードと共通の Upstash Redis)
 */

import { createHash, randomUUID } from "node:crypto"

type Req = { method?: string; body?: unknown; headers: Record<string, string | string[] | undefined> }
type Res = { status: (code: number) => Res; json: (body: unknown) => void }

export const FEEDBACK_KEY = "ishizue:feedback"
const MAX_KEEP = 500
const RATE_LIMIT = 5 // 同じ端末から10分あたり
const CATEGORIES = ["display", "link", "content", "other"]

async function redis(cmd: (string | number)[]) {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) throw new Error("保存先が未接続です")
  const r = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmd),
  })
  if (!r.ok) throw new Error("保存に失敗しました")
  return ((await r.json()) as { result?: unknown }).result
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, max) : ""

export default async function handler(req: Req, res: Res) {
  if (req.method !== "POST") { res.status(405).json({ ok: false }); return }

  let body: Record<string, unknown> = {}
  try {
    body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body ?? {}) as Record<string, unknown>
  } catch { res.status(400).json({ ok: false, message: "送信内容を読み取れませんでした" }); return }

  // 機械による自動送信の見分け:見えない欄に何か入っている/開いてから2秒未満の送信は、受け取ったふりをして捨てる
  const hp = clean(body.website, 200)
  const elapsed = Number(body.elapsed)
  if (hp || !Number.isFinite(elapsed) || elapsed < 2000) { res.status(200).json({ ok: true }); return }

  const text = clean(body.text, 500)
  const category = CATEGORIES.includes(String(body.category)) ? String(body.category) : "other"
  const page = clean(body.page, 200).replace(/[?#].*$/, "")
  const device = ["mobile", "tablet", "desktop"].includes(String(body.device)) ? String(body.device) : "unknown"
  if (text.length < 2) { res.status(400).json({ ok: false, message: "内容を入力してください" }); return }
  if (!page.startsWith("/")) { res.status(400).json({ ok: false, message: "送信元のページがわかりませんでした" }); return }

  try {
    // 連続送信の制限(IPそのものは保存しない)
    const fwd = req.headers["x-forwarded-for"]
    const ip = (Array.isArray(fwd) ? fwd[0] : fwd ?? "").split(",")[0].trim()
    const salt = new Date().toISOString().slice(0, 10)
    const rateKey = "ishizue:fb-rate:" + createHash("sha256").update(ip + salt).digest("hex").slice(0, 16)
    const n = Number(await redis(["INCR", rateKey]))
    if (n === 1) await redis(["EXPIRE", rateKey, 600])
    if (n > RATE_LIMIT) { res.status(429).json({ ok: false, message: "短い時間に何度も送信されています。少し時間をおいてください" }); return }

    const item = { id: randomUUID().slice(0, 8), at: new Date().toISOString(), category, text, page, device }
    await redis(["LPUSH", FEEDBACK_KEY, JSON.stringify(item)])
    await redis(["LTRIM", FEEDBACK_KEY, 0, MAX_KEEP - 1])
    res.status(200).json({ ok: true })
  } catch {
    res.status(500).json({ ok: false, message: "送信に失敗しました。時間をおいてもう一度お試しください" })
  }
}
