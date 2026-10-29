/**
 * api/line-webhook.ts — LINE公式アカウントの Webhook(「待つ」の返信を数える)
 *
 * やること
 *   - メッセージが「待つ」などに完全一致したら、その人のユーザーIDと日時を記録する(開業待ちの人数)
 *   - ブロック(unfollow)されたら、その人の記録を消す
 *   - 返信はしない(自動返信は LINE 公式アカウントの「応答メッセージ」で行う)
 *   - メッセージ本文は保存しない
 *
 * 必要な環境変数
 *   LINE_CHANNEL_SECRET                      … 署名の確認用(LINE Developers の「チャネル基本設定」)
 *   KV_REST_API_URL / KV_REST_API_TOKEN      … 記録の保存先(Upstash Redis。ダッシュボードと共通)
 *
 * LINE Developers の Webhook URL: https://www.ishizue-counseling.jp/api/line-webhook
 */

import { createHmac, timingSafeEqual } from "node:crypto"

export const config = { api: { bodyParser: false } }

type Req = AsyncIterable<Uint8Array> & { method?: string; headers: Record<string, string | string[] | undefined>; body?: unknown }
type Res = { status: (code: number) => Res; json: (body: unknown) => void; end: () => void }

export const WAITING_KEY = "ishizue:waiting"

/** 「待つ」として数える言い方(前後の空白・記号は取り除いてから完全一致で判定) */
const WAIT_WORDS = new Set(["待つ", "まつ", "マツ", "待ちます", "待ってます", "待っています"])

function normalize(text: string): string {
  return text.normalize("NFKC").replace(/[\s「」『』。、.,!！?？~〜ー…・]/g, "")
}

async function readRaw(req: Req): Promise<string> {
  const chunks: Uint8Array[] = []
  for await (const c of req) chunks.push(typeof c === "string" ? Buffer.from(c) : c)
  return Buffer.concat(chunks).toString("utf8")
}

function verify(raw: string, signature: string, secret: string): boolean {
  const expected = createHmac("sha256", secret).update(raw).digest()
  let given: Buffer
  try { given = Buffer.from(signature, "base64") } catch { return false }
  return given.length === expected.length && timingSafeEqual(given, expected)
}

async function redis(cmd: (string | number)[]) {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) throw new Error("Upstash が未接続です")
  const r = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmd),
  })
  if (!r.ok) throw new Error("Upstash " + r.status)
  return r.json()
}

type LineEvent = {
  type: string
  source?: { type?: string; userId?: string }
  message?: { type?: string; text?: string }
}

export default async function handler(req: Req, res: Res) {
  if (req.method !== "POST") { res.status(200).json({ ok: true }); return }

  const secret = process.env.LINE_CHANNEL_SECRET
  if (!secret) { res.status(500).json({ error: "LINE_CHANNEL_SECRET が未設定です" }); return }

  const raw = await readRaw(req)
  const sig = req.headers["x-line-signature"]
  if (typeof sig !== "string" || !verify(raw, sig, secret)) {
    res.status(401).json({ error: "invalid signature" })
    return
  }

  let events: LineEvent[] = []
  try { events = (JSON.parse(raw) as { events?: LineEvent[] }).events ?? [] } catch { /* 空の検証リクエストなど */ }

  for (const ev of events) {
    const userId = ev.source?.type === "user" ? ev.source.userId : undefined
    if (!userId) continue
    try {
      if (ev.type === "message" && ev.message?.type === "text" && WAIT_WORDS.has(normalize(ev.message.text ?? ""))) {
        // 初回の日時だけ残す(何度送っても1人として数える)
        await redis(["HSETNX", WAITING_KEY, userId, new Date().toISOString()])
      } else if (ev.type === "unfollow") {
        await redis(["HDEL", WAITING_KEY, userId])
      }
    } catch {
      // 記録に失敗しても LINE には 200 を返す(再送の連鎖を避ける)
    }
  }

  res.status(200).json({ ok: true })
}
