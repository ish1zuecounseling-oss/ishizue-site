/**
 * useCheckCompleteOnView
 *
 * 結果がリアルタイムに表示されるタイプのチェック用。
 * 結果ボックスが画面に入り、2秒以上表示されたときに、1回だけ check_complete を送信する。
 * (項目をタップするたびに送信されて、完了数が水増しされるのを防ぐ)
 *
 * 使い方: const resultRef = useCheckCompleteOnView(CHECK_NAME, score, level, 15)
 *         <div ref={resultRef}> …結果… </div>
 */
import { useCallback, useEffect, useRef } from "react"
import { trackCheckComplete } from "./analytics"

const DWELL_MS = 2000

export function useCheckCompleteOnView(
  checkName: string,
  score: number,
  level: string | null,
  maxScore: number
) {
  // 送信時点の最新スコアを使うため、毎レンダーで更新しておく
  const latest = useRef({ score, level })
  latest.current = { score, level }

  const sent = useRef(false)
  const observer = useRef<IntersectionObserver | null>(null)
  const timer = useRef<number | null>(null)

  const clearTimer = () => {
    if (timer.current !== null) {
      window.clearTimeout(timer.current)
      timer.current = null
    }
  }

  const ref = useCallback(
    (el: HTMLElement | null) => {
      observer.current?.disconnect()
      observer.current = null
      clearTimer()
      if (!el || sent.current || typeof IntersectionObserver === "undefined") return

      observer.current = new IntersectionObserver((entries) => {
        if (sent.current) return
        const visible = entries.some((e) => e.isIntersecting)
        if (visible && timer.current === null) {
          timer.current = window.setTimeout(() => {
            timer.current = null
            const { score: s, level: lv } = latest.current
            if (!lv || sent.current) return
            sent.current = true
            trackCheckComplete(checkName, s, lv, maxScore)
            observer.current?.disconnect()
          }, DWELL_MS)
        } else if (!visible) {
          clearTimer()
        }
      })
      observer.current.observe(el)
    },
    [checkName, maxScore]
  )

  useEffect(() => () => {
    observer.current?.disconnect()
    clearTimer()
  }, [])

  return ref
}
