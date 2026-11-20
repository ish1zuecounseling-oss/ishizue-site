import type { ReactNode } from "react"
import { ACCEPTING_NEW_CLIENTS } from "../data/siteStatus"

/**
 * CounselingServiceNotice
 * 記事本文の中にある「このサイトのカウンセリングサービスの案内」だけを囲む部品。
 *
 * - 受付中（siteStatus.ts の ACCEPTING_NEW_CLIENTS が true）のときだけ中身を表示する。
 * - 受付休止中は何も表示しない（休止中の案内は記事下の共通部品が出している）。
 *
 * 読者に必要な一般的な説明や安全上の注意は、この部品で囲まないこと。
 * 受付状態に関係なく表示する必要があるため、本文の段落として外に置く。
 */
export default function CounselingServiceNotice({ children }: { children: ReactNode }) {
  if (!ACCEPTING_NEW_CLIENTS) return null
  return <>{children}</>
}
