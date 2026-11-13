/**
 * 管理者ページ(/admin/dashboard・/admin/views)から GA4 を使う API を呼ぶときの共通関数。
 *
 * GA4 Data API は、同時に処理できるリクエストが10本までです。
 * 管理者ページは複数のタブ(ダッシュボード本体・ユーザー・閲覧数)が別々に API を呼ぶため、
 * 重なると上限を超えます。そこで、このブラウザからの GA4 系の呼び出しは
 *   1. 1本ずつ順番に実行する(待ち行列)
 *   2. 同じ URL を同時に呼んだときは1本にまとめる(StrictMode の二重実行・連打を含む)
 *   3. 待ち行列にいるあいだに、同じ系統で新しい URL が呼ばれたら、古いものは取りやめる
 *      (期間ボタンを続けて押したときに、使わない問い合わせを飛ばさない)
 *   4. 429、またはクォータ超過の応答(502)は、待ち時間を倍にしながら最大3回やり直す
 * 結果の一時保存は、サーバー側(api/ops-dashboard.ts・api/article-views.ts)で行っています。
 * ここでは保存しないので、手入力の保存直後の再取得などに古い値が混ざりません。
 */

const RETRIES = 3
const inflight = new Map<string, Promise<Response>>()
const latestByChannel = new Map<string, string>()
let tail: Promise<unknown> = Promise.resolve()

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

async function isQuotaResponse(r: Response): Promise<boolean> {
  if (r.status === 429) return true
  if (r.status !== 502 && r.status !== 503) return false
  const body = (await r.clone().json().catch(() => ({}))) as { message?: string }
  return /quota|exhausted|concurrent|rate.?limit|too many/i.test(body.message ?? "")
}

async function run(url: string, init: RequestInit): Promise<Response> {
  for (let attempt = 0; ; attempt++) {
    const r = await fetch(url, init)
    if (attempt < RETRIES && (await isQuotaResponse(r))) {
      await sleep(1000 * 2 ** attempt + Math.random() * 400)
      continue
    }
    return r
  }
}

/** fetch と同じ使い方。channel は「同じ画面の同じ種類のデータ」を表す名前(新しい呼び出しが古いものに取って代わる) */
export function adminFetch(url: string, init: RequestInit = {}, channel = url): Promise<Response> {
  const dedupeKey = url + "|" + String((init.headers as Record<string, string> | undefined)?.["x-admin-key"] ?? "")
  latestByChannel.set(channel, url)

  let p = inflight.get(dedupeKey)
  if (!p) {
    p = new Promise<Response>((resolve, reject) => {
      tail = tail.then(async () => {
        // 順番が来たとき、同じ系統でもっと新しい呼び出しがあれば、これは取りやめる
        if (latestByChannel.get(channel) !== url) {
          reject(new DOMException("superseded", "AbortError"))
          return
        }
        try { resolve(await run(url, init)) } catch (e) { reject(e) }
      })
    }).finally(() => { inflight.delete(dedupeKey) })
    inflight.set(dedupeKey, p)
  }
  // 本文は一度しか読めないので、呼び出しごとに複製を渡す
  return p.then((r) => r.clone())
}
