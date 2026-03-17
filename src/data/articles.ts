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
  }
];
