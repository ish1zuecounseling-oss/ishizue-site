import HelperFatigue from "../pages/HelperFatigue"
import EmotionalLabor from "../pages/EmotionalLabor"
import HelperTrauma from "../pages/HelperTrauma"
import HelperFatigueCheck from "../pages/HelperFatigueCheck"
import HelperBoundary from "../pages/HelperBoundary"
import HelperBurnout from "../pages/HelperBurnout"
import HelperCounseling from "../pages/HelperCounseling"

export const articles = [
  {
    title: "支援職が疲れる理由とは",
    path: "/articles/helper-fatigue",
    description: "対人援助職が疲れやすい背景にある心理的構造について解説します。",
    component: HelperFatigue
  },
  {
    title: "感情労働とは",
    path: "/articles/emotional-labor",
    description: "支援職で求められる感情のコントロールについて解説します。",
    component: EmotionalLabor
  },
  {
    title: "二次受傷（共感疲労）とは",
    path: "/articles/helper-trauma",
    description: "他者の苦しみに触れ続けることで起こる心理的影響について。",
    component: HelperTrauma
  },
  {
    title: "共感疲労セルフチェック",
    path: "/articles/helper-fatigue-check",
    description: "支援職の共感疲労を確認する20項目チェックリスト。",
    component: HelperFatigueCheck
  },
  {
    title: "支援職の境界線（バウンダリー）とは",
    path: "/articles/helper-boundary",
    description: "支援関係の中で重要になる心理的な境界線について。",
    component: HelperBoundary
  },
  {
    title: "支援職のバーンアウトとは",
    path: "/articles/helper-burnout",
    description: "長期的な心理的疲労としてのバーンアウトについて。",
    component: HelperBurnout
  },
  {
    title: "支援職カウンセリング",
    path: "/articles/helper-counseling",
    description: "支援職向けのカウンセリングについて。",
    component: HelperCounseling
  }
]
