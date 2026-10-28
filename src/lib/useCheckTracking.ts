/**
 * useCheckTracking — チェック記事の計測をそろえるためのフック
 *
 * useLineClickFromCheck
 *   結果が出たあと(level が入っているあいだ)に、ページ内のLINEリンク(lin.ee)が押されたら
 *   line_click_from_check を1回送る。結果画面のボタン・記事末尾のLINE案内・受付状況バーのどれでも数える。
 *   ※ ボタンごとに trackLineClickFromCheck を書いているチェックでは使わない(二重送信を避ける)
 *
 * useCheckCompleteOnSubmit
 *   「結果を見る」ボタンや全問回答で結果が出るタイプのチェック用。
 *   done が true になった瞬間に check_complete を1回送る(やり直して再度結果を出したら、また1回)。
 *
 * ratioLevel
 *   レベル分けのないチェック用に、当てはまった割合から low / mid / high を返す。
 */
import { useEffect, useRef } from "react"
import { trackCheckComplete, trackLineClickFromCheck } from "./analytics"

export function useLineClickFromCheck(checkName: string, level: string | null) {
  const latest = useRef(level)
  latest.current = level

  useEffect(() => {
    if (typeof document === "undefined") return
    const onClick = (e: MouseEvent) => {
      const lv = latest.current
      if (!lv) return
      const target = e.target as Element | null
      const a = target?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!a || !a.href.includes("lin.ee")) return
      trackLineClickFromCheck(checkName, lv)
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [checkName])
}

export function useCheckCompleteOnSubmit(
  checkName: string,
  done: boolean,
  score: number,
  level: string | null,
  maxScore: number
) {
  const sent = useRef(false)
  useEffect(() => {
    if (!done) { sent.current = false; return }
    if (sent.current || !level) return
    sent.current = true
    trackCheckComplete(checkName, score, level, maxScore)
  }, [done, checkName, score, level, maxScore])
}

export function ratioLevel(score: number, max: number): string {
  if (max <= 0) return "low"
  const r = score / max
  return r >= 2 / 3 ? "high" : r >= 1 / 3 ? "mid" : "low"
}
