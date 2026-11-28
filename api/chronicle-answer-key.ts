/**
 * api/chronicle-answer-key.ts — 成長の書の模範解答・対応例(管理者・採点者用)を返す Vercel 関数
 *
 * 呼び出し: GET /api/chronicle-answer-key?level=lv1   ヘッダー x-admin-key: <閲覧キー>
 * 閲覧キーは /admin/views・/admin/dashboard と共通(環境変数 ADMIN_VIEW_KEY)。
 *
 * 模範解答の本文は api/_chronicle/ にだけ置き、画面の JavaScript には入れない。
 * 受験者の画面(/admin/chronicle)と試験官プロンプトからは、読み込みも参照もしない。
 */

import { timingSafeEqual } from "node:crypto"
import { LV1_ANSWER_KEY, type AnswerKey } from "./_chronicle/lv1AnswerKey"

type Req = { method?: string; query: Record<string, string | string[] | undefined>; headers: Record<string, string | string[] | undefined> }
type Res = { status: (code: number) => Res; json: (body: unknown) => void; setHeader: (k: string, v: string) => void }

const KEYS: Record<string, AnswerKey> = { lv1: LV1_ANSWER_KEY }

function keyMatches(given: string, expected: string): boolean {
  const a = Buffer.from(given)
  const b = Buffer.from(expected)
  return a.length === b.length && timingSafeEqual(a, b)
}

export default function handler(req: Req, res: Res) {
  res.setHeader("Cache-Control", "no-store")
  res.setHeader("X-Robots-Tag", "noindex, nofollow")

  if (req.method && req.method !== "GET") {
    res.status(405).json({ error: "method_not_allowed" })
    return
  }
  const { ADMIN_VIEW_KEY } = process.env
  if (!ADMIN_VIEW_KEY) {
    res.status(500).json({ error: "not_configured", message: "環境変数が設定されていません" })
    return
  }
  const given = req.headers["x-admin-key"]
  if (typeof given !== "string" || !keyMatches(given, ADMIN_VIEW_KEY)) {
    res.status(401).json({ error: "unauthorized", message: "閲覧キーが違います" })
    return
  }
  const level = typeof req.query.level === "string" ? req.query.level : "lv1"
  const key = KEYS[level]
  if (!key) {
    res.status(404).json({ error: "not_found", message: "この等級の資料はありません" })
    return
  }
  res.status(200).json(key)
}
