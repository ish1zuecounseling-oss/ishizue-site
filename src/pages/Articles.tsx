/**
 * Articles.tsx — いしずえ心理記事一覧
 * UI改善・情報整理版
 *
 * 改修ポイント:
 * - HEROを「3つの入口」に集約(状態を知る/構造を知る/言葉にできない)
 * - タブを「いま整える / 知る / すべて見る」の3グループに再編、内部にサブタブ
 * - お悩みカードはモバイルで縦1列に切り替え可能
 * - LINE誘導の中段帯CTA + モバイルでフローティングLINEボタン
 * - AIアシスタント入口セクション追加
 * - スクロール深度に応じた上部スティッキーミニナビ(モバイル)
 */

import { useState, useRef, useEffect } from "react";
import { motion, type Variants, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight, BookOpen, ClipboardList, ChevronRight,
  BatteryLow, LogOut, Layers, Users, Moon, RotateCcw, FlaskConical,
  Search, X as XIcon, MessageCircle, Sparkles, Compass,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { articles } from "../data/articles";

const SAGE = "#8FAF9F";
const LINE_URL = "https://lin.ee/6H8Pzo6";

// GA4 gtag型宣言
declare function gtag(...args: unknown[]): void;

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const STARTER_PATHS = [
  "/articles/helper-empathy-check",
  "/articles/helper-empathy-fatigue",
  "/articles/helper-rest-types",
];

/* -------------------------------------------------------------------------- */
/*  新着順 — pathリスト(新しい順に手動管理)                                     */
/* -------------------------------------------------------------------------- */
const NEW_ARTICLE_PATHS: string[] = [
  "/articles/quit-job-how-to-tell-boss",
  "/articles/quit-job-not-quit",
  "/articles/quit-job-timing",
  "/articles/quit-job-fear-retention",
  "/articles/quit-job-cannot-say",
  "/articles/quit-job-no-next",
  "/articles/quit-job-counseling",
  "/articles/acting-fatigue",
  "/articles/communication-fatigue",
  "/articles/impostor-check-20",
  "/articles/impostor-syndrome",
  "/articles/why-support-workers-lose-themselves",
  "/articles/kind-people-break-down",
  "/articles/living-by-expectations",
  "/articles/always-tense",
  "/articles/safety-makes-sleepy",
  "/articles/body-sensation-unknown",
  "/articles/safe-base",
  "/articles/why-self-care-doesnt-work",
  "/articles/recovering-feeling",
  "/articles/why-support-workers-cannot-ask-for-help",
  "/articles/not-enough-for-counseling",
  "/articles/afraid-to-leave-role",
  "/articles/other-centered-living",
  "/articles/self-function-decline",
  "/articles/self-function-what",
  "/articles/self-complexity",
  "/articles/self-value-unknown",
  "/articles/working-model",
  "/articles/anxious-attachment",
  "/articles/avoidant-attachment",
  "/articles/over-adaptation",
  "/articles/infj-living",
  "/articles/ni-ti-loop",
  "/articles/empathy-brain-fatigue",
  "/articles/beyond-mbti",
  "/articles/helper-brain-fatigue",
  "/articles/emotion-unknown",
  "/articles/feeling-nothing",
  "/articles/tired-but-cannot-rest",
  "/articles/what-do-i-want",
  "/articles/overthinking-needs-sensation",
  "/articles/hsp-compassion-fatigue",
  "/articles/too-considerate",
  "/articles/trying-too-hard",
];

const NEW_BADGE_PATHS = new Set(NEW_ARTICLE_PATHS.slice(0, 20));

function getSortedByNew() {
  // updatedAt の新しい順に自動ソート（手動管理不要）
  // 同日付の場合：手動リスト（NEW_ARTICLE_PATHS）の順序を優先
  // 手動リストにない場合：path のアルファベット順
  const pathToIndex = new Map(NEW_ARTICLE_PATHS.map((p, i) => [p, i]));
  return [...articles].sort((a, b) => {
    // 1. updatedAt で比較（新しい順）
    const dateA = (a as { updatedAt?: string }).updatedAt || "";
    const dateB = (b as { updatedAt?: string }).updatedAt || "";
    if (dateA !== dateB) {
      return dateB.localeCompare(dateA); // 降順（新しい日付が先）
    }
    // 2. updatedAt が同じ場合、手動リストの順序を優先
    const ia = pathToIndex.has(a.path) ? pathToIndex.get(a.path)! : NEW_ARTICLE_PATHS.length;
    const ib = pathToIndex.has(b.path) ? pathToIndex.get(b.path)! : NEW_ARTICLE_PATHS.length;
    if (ia !== ib) return ia - ib;
    // 3. それでも同じ場合、path のアルファベット順
    return a.path.localeCompare(b.path);
  });
}

const RESEARCH_PATHS = [
  "helper-benefit-finding", "helper-contrast-avoidance", "helper-goal-adjustment",
  "helper-implicit-theory", "helper-mind-wandering", "helper-naive-realism",
  "helper-organization-unsafe", "helper-reality-shock", "helper-reframing-caring",
  "helper-retelling-memory", "helper-self-complexity", "helper-self-criticism-culture",
  "helper-self-effacement-family", "helper-supervision-compassion", "helper-team-communication",
  "helper-wellbeing-not-from", "helper-stress-mindset", "helper-burnout-scale-validity",
  "helper-burnout-occupation", "helper-self-compassion-burnout", "helper-nurse-self-compassion",
  "helper-attachment-self-compassion", "helper-self-compassion-resistance",
  "helper-self-compassion-behavior", "helper-msc-program", "helper-self-care-ability",
  "helper-emotional-labor-what", "helper-helplessness", "helper-brain-fatigue",
];

function isResearchArticle(path: string): boolean {
  return RESEARCH_PATHS.some((p) => path.includes(p));
}

type WorryCategory = {
  id: string; phase: string; label: string; desc: string;
  keywords: string[]; exitPath: string; exitLabel: string;
};

const WORRY_CATEGORIES: WorryCategory[] = [
  {
    id: "check", phase: "フェーズ1", label: "まず自分の状態を知りたい",
    desc: "共感疲労チェック・バーンアウト診断・消耗度の確認",
    keywords: ["empathy", "check", "burnout", "fatigue", "compassion", "diagnosis", "brain"],
    exitPath: "/articles/helper-empathy-check", exitLabel: "共感疲労チェック(20項目・3分)",
  },
  {
    id: "fatigue", phase: "フェーズ1", label: "疲れ・消耗をどうにかしたい",
    desc: "休んでも回復しない、疲れが抜けない",
    keywords: ["fatigue", "burnout", "feels-tired", "case-overload", "night-shift", "brain", "emotional-labor-fatigue"],
    exitPath: "/articles/helper-fatigue-diagnosis", exitLabel: "その疲れ、3タイプのどれ?(10問診断)",
  },
  {
    id: "emotion", phase: "フェーズ2", label: "感情がしんどい・コントロールできない",
    desc: "イライラ・無感情・感情の波が大きい",
    keywords: ["emotional-labor", "labor", "rumination", "irritab", "emotional-labor-fatigue", "decision-fatigue"],
    exitPath: "/articles/helper-emotional-labor-what", exitLabel: "感情労働が消耗させている理由を知る",
  },
  {
    id: "boundary", phase: "フェーズ2", label: "抱え込み・断れないがつらい",
    desc: "バウンダリーとは?NOが言えない、いつも我慢",
    keywords: ["boundary", "sacrifice", "cannot-say-no", "pulled-by-client", "perfectionism", "boundary-how-to"],
    exitPath: "/articles/helper-cannot-say-no", exitLabel: "断れない人の特徴7つ｜なぜNOが言えないのか",
  },
  {
    id: "quit", phase: "フェーズ3", label: "仕事が限界・辞めたい",
    desc: "辞めていいのか、休職すべきか迷っている",
    keywords: ["quit", "want-to-quit", "resign", "guilty-leave", "guilt-about-leaving", "job-hopping", "complaint-damage", "acting-fatigue", "communication-fatigue", "quit-job"],
    exitPath: "/articles/quit-job-timing", exitLabel: "辞めるタイミングがわからないとき——判断の軸を整理する",
  },
  {
    id: "selfblame", phase: "フェーズ3", label: "自分を責めてしまう",
    desc: "インポスター症候群・自己否定・無力感",
    keywords: ["self-compassion", "helplessness", "self-criticism", "guilt", "self-blame", "impostor"],
    exitPath: "/articles/helper-self-blame-landing", exitLabel: "自分を責めてしまう理由を知る",
  },
  {
    id: "career", phase: "フェーズ4", label: "続けるか・離れるか迷っている",
    desc: "復職・転職・このままでいいのか",
    keywords: ["return", "absence", "consider-leave", "career-stagnation", "aptitude-doubt", "burnout-recovery", "signs-to-rest"],
    exitPath: "/articles/helper-career-decision", exitLabel: "続けるか・離れるかで迷っているときに読む",
  },
  {
    id: "counseling", phase: "フェーズ4", label: "カウンセリングを考えている",
    desc: "相談したいけど迷っている、どんな時間になるか",
    keywords: ["counseling", "counselling", "cannot-seek", "resistance-to-counseling", "receiving-counseling"],
    exitPath: "/articles/helper-counseling-landing", exitLabel: "受ける前に知っておきたいこと",
  },
];

type ShindoCard = { label: string; icon: string; keywords: string[] };

const SHINDO_CARDS: ShindoCard[] = [
  { label: "疲れが取れない",          icon: "BatteryLow",   keywords: ["fatigue", "empathy", "rest", "recovery", "burnout"] },
  { label: "辞めたい",                icon: "LogOut",       keywords: ["quit", "resign", "guilty-leave", "career", "closure", "acting-fatigue", "communication-fatigue", "quit-job"] },
  { label: "利用者を抱え込みすぎる",   icon: "Layers",       keywords: ["overwork", "boundary", "sacrifice", "involve"] },
  { label: "人間関係がつらい",         icon: "Users",        keywords: ["workplace", "team", "boss", "harassment", "human", "boss-stress"] },
  { label: "休みたいのに休めない",     icon: "Moon",         keywords: ["rest", "absence", "leave", "return", "guilt"] },
  { label: "復職・続けるか迷う",       icon: "RotateCcw",    keywords: ["return", "transfer", "repeat", "suitable", "absence", "career-stagnation", "job-hopping", "aptitude-doubt", "consider-leave", "want-to-quit", "counseling-when-quitting", "burnout-vs-depression", "burnout-recovery", "signs-to-rest", "guilt-about-leaving", "social-worker-dilem", "burnout-what-to-do"] },
  { label: "なぜこうなるか理解したい", icon: "FlaskConical",  keywords: ["research"] },
];

type Category = { id: string; label: string; keywords: string[]; isCheck?: boolean; isResearch?: boolean };

const CATEGORIES: Category[] = [
  { id: "research",   label: "研究から読む",   keywords: ["research"],                                        isResearch: true },
  { id: "check",      label: "セルフチェック", keywords: ["check"],                                           isCheck: true },
  { id: "compassion", label: "共感疲労",       keywords: ["empathy", "compassion", "secondary", "fatigue"] },
  { id: "burnout",    label: "バーンアウト",   keywords: ["burnout", "burn-out", "signs"] },
  { id: "labor",      label: "感情労働",       keywords: ["emotional-labor", "labor"] },
  { id: "boundary",   label: "境界線",         keywords: ["boundary", "overwork", "sacrifice"] },
  { id: "workplace",  label: "人間関係",       keywords: ["workplace", "team", "boss", "harassment", "human", "boss-stress"] },
  { id: "quit",       label: "辞めたい",       keywords: ["quit", "resign", "guilty-leave", "quit-job", "acting-fatigue", "communication-fatigue"] },
  { id: "absence",    label: "休職・復職",     keywords: ["absence", "return", "leave"] },
  { id: "career",     label: "キャリア",       keywords: ["career", "closure", "repeat", "suitable"] },
  { id: "recovery",   label: "回復・ケア",     keywords: ["recovery", "rest", "self-care", "coping"] },
  { id: "job",        label: "職種別",         keywords: ["nurse", "caregiver", "teacher", "school", "nursery", "welfare"] },
  { id: "counseling", label: "カウンセリング", keywords: ["counseling", "counselling"] },
];

function getCategoryForArticle(path: string): Category {
  const p = path.toLowerCase();
  if (isResearchArticle(p)) return { id: "research", label: "しんどさの正体", keywords: [], isResearch: true };
  for (const cat of CATEGORIES) {
    if (cat.keywords.some((kw) => p.includes(kw))) return cat;
  }
  return { id: "other", label: "支援職", keywords: [] };
}

const TOOLS = [
  { path: "/articles/self-value-check",            title: "自己価値の置き場所診断｜あなたの「存在許可証」を可視化する",                          desc: "「何者かにならないと不安」「役に立たないと罪悪感」——あなたが自分に課している存在の条件を4軸24問で可視化。",              tag: "4軸・24問",       color: "#f59e0b" },
  { path: "/articles/big-five-check",              title: "ビッグファイブ診断｜あなたの「消耗パターン」を知る",                                  desc: "協調性・誠実性・開放性・外向性・感受性の5因子から、今の消耗の構造を解析。10問・レーダーチャート・7タイプ対応。",    tag: "5因子・10問",     color: "#c084fc" },
  { path: "/articles/helper-status-check",         title: "支援職のための現在地チェック",                                                        desc: "感情・抱え込み・職場・体の4軸12項目でトグル式に確認。今の自分の状態をそっと言語化できます。",                      tag: "4軸・12問",       color: "#7EB8A4" },
  { path: "/articles/helper-boundary-board",       title: "境界線・脱フュージョンボード",                                                        desc: "感情の巻き込まれ度と自責・罪悪感をスライダーで調整。ベン図で境界線の状態をリアルタイム可視化。",                    tag: "スライダー式",     color: "#c084fc" },
  { path: "/articles/helper-jdr-balance",          title: "JD-Rバランスシミュレーター",                                                          desc: "仕事の要求と資源のバランスをシーソーで可視化。バーンアウトリスクと具体的な対処法を確認できます。",                  tag: "JD-Rモデル",      color: "#fb923c" },
  { path: "/articles/helper-mabi-radar",           title: "MABI-HPレーダーアセスメント",                                                         desc: "共感疲労・過剰適応・組織葛藤・身体消耗の4軸をレーダーチャートで可視化。消耗の震源地を特定します。",                tag: "レーダーチャート", color: "#60a5fa" },
  { path: "/articles/helper-thinking-check",       title: "「考え方のクセ」現在地チェック",                                                      desc: "完璧主義・すべき思考・自己関連づけなど、支援職に多い8つの認知のクセを24項目で確認。リフレーミング付き。",            tag: "8カテゴリ・24問",  color: "#a78bfa" },
  { path: "/articles/helper-impostor-check",       title: "「自分の頑張りを認められない」現在地チェック",                                        desc: "「いつかバレる」「運が良かっただけ」——支援職に多いインポスター現象の8つのパターンを24項目でチェック。",            tag: "インポスター現象", color: "#c084fc" },
  { path: "/articles/helper-attachment-check",     title: "「人との距離感」現在地チェック",                                                      desc: "見捨てられ不安・自己犠牲・回避・境界線の曖昧さ——支援職に多い愛着スタイルの8パターンを24項目でチェック。",          tag: "愛着スタイル",     color: "#f472b6" },
  { path: "/articles/helper-self-compassion-check",title: "セルフ・コンパッション反応チェック｜8場面で「自分への思いやり」を確認する",           desc: "つらい場面で自分をどう扱うか——8つの困難場面で4択2つ選ぶ形式で、自然な反応パターンを確認。SCRI-Jをもとに作成。", tag: "8場面・選択式",    color: "#8FAF9F" },
  { path: "/articles/helper-empathy-check",        title: "共感疲労チェック｜支援職のための20項目診断",                                          desc: "利用者のことが頭から離れない、仕事後も気持ちが切り替わらない——20項目から共感疲労の消耗度を3分で確認。",                tag: "20問・3分",        color: "#8FAF9F" },
  { path: "/articles/helper-brain-fatigue-check",  title: "脳疲労セルフチェック｜支援職のための20項目診断",                                      desc: "「頭が回らない」「休んでも疲れが抜けない」——脳疲労の症状20項目から今の状態を3分で確認できます。",                      tag: "20問・3分",        color: "#7EB8A4" },
  { path: "/articles/working-os-check",            title: "「働き方のOS」診断",                                                                  desc: "なぜ働いているのに満たされないのか。ライス・ライフ・ライトの3軸で消耗の構造を可視化。レーダーチャート付き・全12問。",  tag: "3軸・12問",        color: "#7EB8A4" },
] as const;

/* -------------------------------------------------------------------------- */
/*  タブ構造を再編:3つの大グループに整理                                        */
/*  - 整える(action指向): しんどさ / ツール / 新着                              */
/*  - 知る(learning指向): テーマ / 研究                                         */
/*  - 全部見る: 一覧                                                            */
/* -------------------------------------------------------------------------- */
type TabGroup = "action" | "learn" | "all";
type TabId = "shindo" | "tools" | "new" | "theme" | "research" | "all";

const TAB_GROUPS: { id: TabGroup; label: string; desc: string; subs: { id: TabId; label: string }[] }[] = [
  {
    id: "action",
    label: "いま整える",
    desc: "今のしんどさから探す・診断ツールで状態を可視化",
    subs: [
      { id: "shindo", label: "しんどさから" },
      { id: "tools",  label: "診断ツール" },
      { id: "new",    label: "新着" },
    ],
  },
  {
    id: "learn",
    label: "知る・理解する",
    desc: "テーマ別の解説・心理学研究から構造を理解する",
    subs: [
      { id: "theme",    label: "テーマ別" },
      { id: "research", label: "心理学から" },
    ],
  },
  {
    id: "all",
    label: "すべて見る",
    desc: "記事一覧",
    subs: [
      { id: "all", label: "すべての記事" },
    ],
  },
];

type ThemeSection = { label: string; keywords: string[] };
type ThemeLayer   = { id: string; label: string; desc: string; sections: ThemeSection[] };

const THEME_LAYERS: ThemeLayer[] = [
  {
    id: "exhaustion", label: "消耗を理解する", desc: "なぜ疲れるのか、消耗の構造を整理した記事",
    sections: [
      { label: "セルフチェック",    keywords: ["check"] },
      { label: "共感疲労・二次受傷",keywords: ["empathy", "secondary", "compassion", "fatigue", "feels-tired", "counselor-exhaustion", "aptitude-doubt"] },
      { label: "バーンアウト",      keywords: ["burnout", "burn-out", "signs"] },
      { label: "感情労働・過重負担", keywords: ["emotional-labor", "labor", "case-overload", "case-manager", "night-shift", "overwork", "emotional-labor-fatigue"] },
      { label: "休息・回復・思考",  keywords: ["rest", "recovery", "self-care", "coping", "rumination", "thinking-patterns", "jdr-balance", "rest-importance", "rest-types"] },
    ],
  },
  {
    id: "relationship", label: "抱え込み・境界線・職場", desc: "断れない、職場の人間関係による消耗を整理した記事",
    sections: [
      { label: "境界線・抱え込み",  keywords: ["boundary", "overwork", "sacrifice", "cannot-say-no", "pulled-by-client", "guilt-about-suffering", "perfectionism", "social-worker-dilem", "boundary-how-to", "helper-cannot-say-no"] },
      { label: "職場・人間関係",    keywords: ["workplace", "team", "boss", "harassment", "human", "boss-stress"] },
      { label: "職種別",            keywords: ["nurse", "caregiver", "teacher", "school", "nursery", "welfare"] },
      { label: "カウンセリング活用", keywords: ["counseling", "counselling", "cannot-seek"] },
    ],
  },
  {
    id: "career", label: "辞めたい・続けられない", desc: "辞めたい・休職・復職の葛藤に向き合う記事",
    sections: [
      { label: "辞めたい・退職",   keywords: ["quit", "resign", "guilty-leave", "guilt-about-leaving", "job-hopping", "complaint-damage", "want-to-quit", "acting-fatigue", "communication-fatigue", "quit-job"] },
      { label: "休職・復職",       keywords: ["absence", "return", "leave", "consider-leave", "signs-to-rest", "counseling-when-quitting", "burnout-recovery", "burnout-what-to-do"] },
      { label: "キャリア・閉塞感", keywords: ["career", "closure", "repeat", "suitable"] },
    ],
  },
];

type ResearchSection = { label: string; desc: string; paths: string[] };

const RESEARCH_SECTIONS: ResearchSection[] = [
  { label: "消耗の正体｜なぜ疲れるのか", desc: "「なぜこんなに疲れるのか」——消耗が起きる構造を心理学から解説した記事", paths: ["helper-organization-unsafe", "helper-self-complexity", "helper-mind-wandering", "helper-stress-mindset", "helper-team-communication", "helper-emotional-labor-what", "helper-helplessness", "helper-brain-fatigue", "helper-empathy-fatigue", "helper-secondary-trauma", "helper-decision-fatigue", "helper-overwork", "helper-night-shift-mental-health", "helper-case-overload", "emotional-labor-fatigue", "care-worker-mental-fatigue", "empathy-fatigue-vs-secondary-trauma"] },
  { label: "抜け出せない思考｜やめられない・考えすぎ", desc: "「頭から離れない」「自分を責めてしまう」——抜け出せない思考パターンの正体", paths: ["helper-contrast-avoidance", "helper-self-criticism-culture", "helper-implicit-theory", "helper-naive-realism", "helper-self-effacement-family", "helper-wellbeing-not-from"] },
  { label: "辞めたい・休職を考えたとき", desc: "「もう限界かもしれない」「休んでいいのか」——判断を整理するための記事", paths: ["helper-want-to-quit", "helper-consider-leave", "helper-caregiver-burnout", "helper-guilt-about-leaving", "helper-leave-of-absence-hesitation", "helper-signs-to-rest", "helper-return-to-work-fear", "helper-counseling-when-quitting", "helper-career-stagnation"] },
  { label: "回復と立て直し｜どう戻るか", desc: "つらい経験から回復し、意味を見出し、立て直していくプロセス", paths: ["helper-benefit-finding", "helper-retelling-memory", "helper-reframing-caring", "helper-supervision-compassion", "helper-goal-adjustment", "helper-reality-shock", "helper-burnout-scale-validity", "helper-burnout-occupation", "helper-self-compassion-burnout", "helper-nurse-self-compassion", "helper-attachment-self-compassion", "helper-self-compassion-resistance", "helper-self-compassion-behavior", "helper-msc-program", "helper-self-care-ability", "helper-burnout-recovery", "helper-mental-recovery", "helper-rest-types", "helper-rest-importance", "helper-stress-coping", "helper-compassion-fatigue-practice", "empathy-fatigue-recovery", "helper-burnout-what-to-do", "helper-burnout-signs", "compassion-fatigue-coping", "care-worker-burnout"] },
  { label: "抱え込み・境界線", desc: "「断れない」「巻き込まれすぎる」——境界線が曖昧になる構造と、抜け出すための方法", paths: ["helper-pulled-by-client", "helper-cannot-say-no", "helper-boundary", "helper-boundary-how-to", "empathy-fatigue-boundary", "helper-guilt-about-suffering", "helper-perfectionism", "helper-social-worker-dilem", "helper-stop-self-sacrifice"] },
  { label: "人間関係・職場ストレス", desc: "上司・同僚・組織との関係で消耗しているとき", paths: ["helper-boss-stress", "helper-complaint-damage", "helper-harassment-gray-zone", "helper-workplace-stress", "helper-team-fatigue", "nursery-teacher-relationship-stress", "welfare-worker-relationship-counseling"] },
  { label: "職種別｜看護師・介護・保育・教師", desc: "職種特有の消耗と、それぞれに合った対処を解説した記事", paths: ["nurse-compassion-fatigue", "nurse-emotional-exhaustion", "nurse-emotional-labor-hard", "nursery-teacher-limit", "school-counselor-loneliness", "teacher-mental-health", "teacher-mental-health-limit", "empathy-fatigue-by-job-type", "compassion-fatigue-diagnosis", "helper-aptitude-doubt", "helper-burnout-vs-depression", "compassion-fatigue-vs-depression"] },
  { label: "カウンセリング・相談を考えているとき", desc: "「相談してもいいのか」「どこに行けばいいか」——一歩を踏み出すための記事", paths: ["helper-counseling", "helper-online-counseling", "teacher-online-counseling", "helper-receiving-counseling", "helper-resistance-to-counseling", "helper-cannot-seek"] },
];

function getArticlesForSection(keywords: string[]) {
  return articles.filter((a) => !isResearchArticle(a.path) && keywords.some((kw) => a.path.toLowerCase().includes(kw)));
}
function getResearchArticlesForSection(paths: string[]) {
  return articles.filter((a) => paths.some((p) => a.path.includes(p)));
}
function getUnclassified() {
  const all = THEME_LAYERS.flatMap((l) => l.sections.flatMap((s) => s.keywords));
  return articles.filter((a) => !all.some((kw) => a.path.toLowerCase().includes(kw)) && !isResearchArticle(a.path));
}

function ArticleCard({ article, showNew }: { article: typeof articles[0]; showNew?: boolean }) {
  const cat = getCategoryForArticle(article.path);
  const isNew = showNew && NEW_BADGE_PATHS.has(article.path);
  return (
    <motion.div variants={fadeUp}>
      <Link
        to={article.path}
        className="group flex items-start gap-3 bg-white border border-stone-100 rounded-xl p-4 hover:shadow-sm transition-all duration-200"
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = cat.isResearch ? "#7dd3fc" : `${SAGE}65`; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = ""; }}
        itemScope itemType="https://schema.org/Article"
      >
        <div
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
          style={{ background: cat.isResearch ? "#e0f2fe" : cat.isCheck ? `${SAGE}20` : `${SAGE}0d`, color: cat.isResearch ? "#0369a1" : SAGE }}
          aria-hidden="true"
        >
          {cat.isResearch ? <FlaskConical className="w-4 h-4" /> : cat.isCheck ? <ClipboardList className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
        </div>
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="inline-block text-[10px] tracking-[0.15em] font-medium px-2 py-0.5 rounded-full" style={{ color: cat.isResearch ? "#0369a1" : SAGE, background: cat.isResearch ? "#e0f2fe" : `${SAGE}12` }}>
              {cat.label}
            </span>
            {isNew && (
              <span className="inline-block text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ background: `${SAGE}25`, color: SAGE }}>NEW</span>
            )}
          </div>
          <p className="text-sm font-medium text-stone-800 group-hover:text-stone-900 leading-snug transition-colors" style={{ fontFamily: "'Noto Serif JP', serif" }} itemProp="name">
            {article.title}
          </p>
          <p className="text-xs text-stone-400 leading-relaxed line-clamp-2" itemProp="description">{article.description}</p>
        </div>
        <ChevronRight className="flex-shrink-0 w-4 h-4 text-stone-300 group-hover:text-[#8FAF9F] mt-1 transition-colors" />
      </Link>
    </motion.div>
  );
}

export default function Articles() {
  // タブ状態:グループ+サブタブの2階層
  const [activeGroup, setActiveGroup] = useState<TabGroup>("action");
  const [activeTab, setActiveTab] = useState<TabId>("shindo");
  const [activeShindo, setActiveShindo] = useState<ShindoCard | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [worryViewMode, setWorryViewMode] = useState<"grid" | "list">("grid");
  const [showFloatingLine, setShowFloatingLine] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // スクロール監視:フローティングLINE・スティッキーナビ
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowFloatingLine(y > 600 && y < document.body.scrollHeight - 800);
      setShowStickyNav(y > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // グループ切替時のサブタブ初期化
  const switchGroup = (g: TabGroup) => {
    setActiveGroup(g);
    const firstSub = TAB_GROUPS.find((tg) => tg.id === g)?.subs[0]?.id;
    if (firstSub) setActiveTab(firstSub);
    setActiveShindo(null);
  };

  const starterArticles = STARTER_PATHS
    .map((p) => articles.find((a) => a.path === p))
    .filter((a): a is NonNullable<typeof a> => !!a);

  const shindoArticles = activeShindo
    ? activeShindo.icon === "FlaskConical"
      ? articles.filter((a) => isResearchArticle(a.path))
      : articles.filter((a) => activeShindo.keywords.some((kw) => a.path.toLowerCase().includes(kw)))
    : [];

  const sortedByNew = getSortedByNew();
  const currentGroup = TAB_GROUPS.find((tg) => tg.id === activeGroup)!;

  return (
    <>
      <Helmet>
        <title>心理記事｜支援職のメンタル・共感疲労・バーンアウト対策｜こころの相談室 いしずえ</title>
        <meta name="description" content="看護師・介護士・福祉職・心理職など支援職向けの心理記事一覧。共感疲労・バーンアウト・境界線・休職判断を構造的に整理。無料セルフチェック・診断ツール多数。公認心理師・松本龍児監修。" />
        <link rel="canonical" href="https://www.ishizue-counseling.jp/articles" />
      </Helmet>

      <div className="bg-white min-h-screen">

        {/* ========== HERO:3つの入口に集約 ========== */}
        <section className="relative bg-[#1A110A] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/50 to-stone-950" />
          <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 max-w-3xl">
              <motion.div variants={fadeUp}>
                <span className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: SAGE }}>Articles</span>
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-light text-white tracking-wide leading-[1.5]" style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}>
                  心理記事
                </h1>
                <p className="text-stone-300 text-sm md:text-base leading-[2]">
                  支援職のための心理記事を、3つの入口から探せます。<br className="hidden md:block" />
                  今の自分に合った入口を選んでください。
                </p>
              </motion.div>

              {/* 3つの入口カード */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mt-2">
                {/* 入口1:状態を知る */}
                <a
                  href="#group-action"
                  onClick={() => switchGroup("action")}
                  className="group flex flex-col gap-2 p-4 rounded-xl transition-all"
                  style={{ background: `${SAGE}18`, border: `1px solid ${SAGE}40` }}
                >
                  <div className="flex items-center gap-2">
                    <ClipboardList className="w-4 h-4" style={{ color: SAGE }} />
                    <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: SAGE }}>01 状態を知る</span>
                  </div>
                  <p className="text-white text-sm font-medium leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    まず今の自分を可視化
                  </p>
                  <p className="text-stone-400 text-[11px] leading-relaxed">
                    チェック・診断ツール・しんどさ別の入口
                  </p>
                  <span className="text-[11px] mt-auto pt-1 flex items-center gap-1" style={{ color: SAGE }}>
                    入口を開く <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>

                {/* 入口2:構造を知る */}
                <a
                  href="#group-learn"
                  onClick={() => switchGroup("learn")}
                  className="group flex flex-col gap-2 p-4 rounded-xl transition-all"
                  style={{ background: "rgba(125,211,252,0.12)", border: "1px solid rgba(125,211,252,0.3)" }}
                >
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-sky-300" />
                    <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-sky-300">02 構造を知る</span>
                  </div>
                  <p className="text-white text-sm font-medium leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    なぜこうなるのか理解する
                  </p>
                  <p className="text-stone-400 text-[11px] leading-relaxed">
                    テーマ別・心理学研究からの解説記事
                  </p>
                  <span className="text-[11px] text-sky-300 mt-auto pt-1 flex items-center gap-1">
                    入口を開く <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>

                {/* 入口3:言葉にできない */}
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 p-4 rounded-xl transition-all"
                  style={{ background: "rgba(6,199,85,0.15)", border: "1px solid rgba(6,199,85,0.4)" }}
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#06C755]" />
                    <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#06C755]">03 言葉にできない</span>
                  </div>
                  <p className="text-white text-sm font-medium leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    まず話を聞いてもらう
                  </p>
                  <p className="text-stone-400 text-[11px] leading-relaxed">
                    LINEで状態タイプを送ります(無料・読むだけOK)
                  </p>
                  <span className="text-[11px] text-[#06C755] mt-auto pt-1 flex items-center gap-1">
                    LINEで受け取る <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              </motion.div>

              {/* 補足説明 */}
              <motion.div variants={fadeUp}>
                <p className="text-[11px] text-stone-400 leading-relaxed mt-1">
                  ※ 全記事・全ツールは無料で読めます。今のしんどさを整理するための入口としてご活用ください。
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========== スティッキーミニナビ(モバイル) ========== */}
        <AnimatePresence>
          {showStickyNav && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-b border-stone-100"
            >
              <div className="flex items-center gap-1 px-3 py-2 overflow-x-auto">
                {TAB_GROUPS.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => {
                      switchGroup(g.id);
                      document.getElementById(`group-${g.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                      activeGroup === g.id ? "text-white" : "text-stone-500 bg-stone-100"
                    }`}
                    style={activeGroup === g.id ? { background: SAGE } : {}}
                  >
                    {g.label}
                  </button>
                ))}
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 ml-auto px-3 py-1.5 rounded-full text-xs font-bold text-white inline-flex items-center gap-1"
                  style={{ background: "#06C755" }}
                >
                  <MessageCircle className="w-3 h-3" />LINE
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========== メインコンテンツ ========== */}
        <section className="py-8 md:py-12 px-5 md:px-6" itemScope itemType="https://schema.org/CollectionPage">
          <div className="max-w-4xl mx-auto">

            {/* 検索ボックス */}
            <div className="relative mb-5">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300 pointer-events-none" aria-hidden="true" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchQuery(val);
                  if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
                  if (val.trim().length >= 2) {
                    searchTimerRef.current = setTimeout(() => {
                      try { gtag("event", "site_search", { search_term: val.trim() }); } catch (_) { /* noop */ }
                    }, 500);
                  }
                }}
                placeholder="記事を検索(例:共感疲労、境界線、辞めたい)"
                className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-700 placeholder-stone-300 bg-white focus:outline-none focus:border-stone-400 transition-colors"
                aria-label="記事を検索"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-300 hover:text-stone-600 transition-colors"
                  aria-label="検索をクリア"
                  type="button"
                >
                  <XIcon className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* グループタブ(大カテゴリ) */}
            {!searchQuery.trim() && (
              <div className="mb-3">
                <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-stone-50 border border-stone-100">
                  {TAB_GROUPS.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => switchGroup(g.id)}
                      id={`group-${g.id}`}
                      className={`px-3 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all ${
                        activeGroup === g.id ? "text-white shadow-sm" : "text-stone-500 hover:text-stone-700"
                      }`}
                      style={activeGroup === g.id ? { background: SAGE } : {}}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-stone-400 mt-2 text-center md:text-left leading-relaxed">
                  {currentGroup.desc}
                </p>
              </div>
            )}

            {/* サブタブ(2階層目) */}
            {!searchQuery.trim() && currentGroup.subs.length > 1 && (
              <div className="flex gap-0 mb-6 border-b border-stone-100 overflow-x-auto">
                {currentGroup.subs.map((tab) => {
                  const count =
                    tab.id === "all"      ? articles.length :
                    tab.id === "new"      ? articles.length :
                    tab.id === "tools"    ? TOOLS.length :
                    tab.id === "research" ? articles.filter((a) => isResearchArticle(a.path)).length :
                    tab.id === "shindo"   ? articles.length :
                    articles.filter((a) => !isResearchArticle(a.path)).length;
                  return (
                    <button key={tab.id} onClick={() => { setActiveTab(tab.id); setActiveShindo(null); }}
                      className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-all border-b-2 -mb-px whitespace-nowrap ${activeTab === tab.id ? "text-stone-900" : "border-transparent text-stone-400 hover:text-stone-600"}`}
                      style={activeTab === tab.id ? { borderBottomColor: tab.id === "research" ? "#0369a1" : SAGE } : {}}
                    >
                      {tab.label}
                      {tab.id !== "shindo" && (
                        <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full"
                          style={{ background: activeTab === tab.id ? (tab.id === "research" ? "#e0f2fe" : `${SAGE}18`) : "rgb(245,244,243)", color: activeTab === tab.id ? (tab.id === "research" ? "#0369a1" : SAGE) : "rgb(168,162,158)" }}>
                          {count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* ============ いま整える:しんどさから探す ============ */}
            {!searchQuery.trim() && activeTab === "shindo" && !activeShindo && (
              <div className="mb-8">
                {/* お悩みから探す セクション */}
                <div className="mb-7">
                  <div className="flex items-end justify-between mb-3">
                    <div>
                      <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-1" style={{ color: SAGE }}>STEP 1 ｜ お悩みから探す</p>
                      <p className="text-xs text-stone-500">フェーズ別に、今の状態に近いものを選んでください</p>
                    </div>
                    {/* 表示切替(モバイルで見やすく) */}
                    <button
                      onClick={() => setWorryViewMode(worryViewMode === "grid" ? "list" : "grid")}
                      className="md:hidden text-[10px] px-2.5 py-1 rounded-full border border-stone-200 text-stone-500"
                    >
                      {worryViewMode === "grid" ? "リスト表示" : "グリッド表示"}
                    </button>
                  </div>
                  <div className={
                    worryViewMode === "grid"
                      ? "grid grid-cols-2 gap-2.5 sm:grid-cols-4"
                      : "flex flex-col gap-2 md:grid md:grid-cols-4"
                  }>
                    {WORRY_CATEGORIES.map((cat) => (
                      <a key={cat.id} href={cat.exitPath}
                        className="flex flex-col gap-1.5 p-3.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:border-stone-300 hover:shadow-sm transition-all text-left"
                      >
                        <p className="text-[9px] tracking-[0.15em] uppercase font-medium" style={{ color: SAGE }}>{cat.phase}</p>
                        <p className="text-xs font-medium text-stone-800 leading-snug">{cat.label}</p>
                        <p className="text-[10px] text-stone-500 leading-relaxed">{cat.desc}</p>
                        <p className="text-[10px] font-medium mt-auto pt-1 border-t border-stone-200" style={{ color: SAGE }}>{cat.exitLabel} →</p>
                      </a>
                    ))}
                  </div>
                </div>

                {/* はじめての方へ */}
                {starterArticles.length > 0 && (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                    className="mb-7 p-5 rounded-2xl" style={{ background: `${SAGE}07`, border: `1px solid ${SAGE}40` }}
                  >
                    <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-3" style={{ color: SAGE }}>STEP 2 ｜ はじめての方へ・まず読んでほしい記事</p>
                    <div className="space-y-2">
                      {starterArticles.map((a, i) => (
                        <Link key={a.path} to={a.path} className="flex items-center gap-3 group">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold" style={{ background: SAGE, color: "white" }}>{i + 1}</span>
                          <span className="text-sm text-stone-700 group-hover:text-stone-900 group-hover:underline underline-offset-2 transition-colors" style={{ fontFamily: "'Noto Serif JP', serif" }}>{a.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 中段LINE誘導帯(常時表示) */}
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
                  className="mb-7 p-4 rounded-2xl flex flex-col md:flex-row md:items-center gap-3 md:gap-5"
                  style={{ background: "linear-gradient(135deg, rgba(6,199,85,0.08) 0%, rgba(143,175,159,0.08) 100%)", border: "1px solid rgba(6,199,85,0.25)" }}
                >
                  <div className="flex-1">
                    <p className="text-xs font-medium text-stone-700 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" style={{ color: "#06C755" }} />
                      記事を読むより先に、今の状態を整理したい方へ
                    </p>
                    <p className="text-[11px] text-stone-500 leading-relaxed">
                      4つの状態タイプ(疲れ/抱え込み/辞めたい/迷い)別の解説をLINEで送っています。読むだけOK。
                    </p>
                  </div>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-bold text-white whitespace-nowrap"
                    style={{ background: "#06C755" }}
                  >
                    <MessageCircle className="w-4 h-4" />LINEで受け取る(無料)
                  </a>
                </motion.div>

                {/* AIアシスタント枠(新規追加) */}
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
                  className="mb-7 p-5 rounded-2xl relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #2C1F14 0%, #3D2B1F 100%)" }}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-amber-200" />
                      <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-amber-200">AI Assistant ｜ β版</span>
                    </div>
                    <p className="text-base text-stone-50 font-light leading-relaxed mb-1.5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                      「何がしんどいか、言葉にできない」あなたへ
                    </p>
                    <p className="text-stone-300 text-xs leading-relaxed mb-4">
                      AIと簡単な対話で、今の状態に合う記事・チェック・対処法を整理します。<br />
                      会話内容は保存されません。誰にも見られません。
                    </p>
                    <Link to="/ai-assistant"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-100 text-stone-900 rounded-lg text-sm font-medium transition-all hover:bg-amber-50"
                    >
                      <MessageCircle className="w-4 h-4" />AIに整理してもらう
                    </Link>
                  </div>
                  <div className="absolute right-0 top-0 w-32 h-32 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #fbbf24 0%, transparent 70%)" }} />
                </motion.div>

                {/* 新着・注目記事 */}
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
                  className="mb-7 p-5 rounded-2xl border border-stone-200 bg-stone-50"
                >
                  <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-3" style={{ color: SAGE }}>新着・注目記事</p>
                  <div className="space-y-2">
                    {[
                      { path: "/articles/impostor-check-20",                  label: "インポスター症候群チェック(20項目)｜できているのに自信がない状態を確認" },
                      { path: "/articles/why-support-workers-lose-themselves", label: "なぜ支援職は自分を見失うのか(総合ピラー)" },
                      { path: "/articles/quit-job-timing",                    label: "仕事を辞めるタイミングがわからない｜限界サインと判断の軸" },
                      { path: "/articles/communication-fatigue",              label: "コミュニケーションで疲れるのはなぜ?｜消耗の構造と回復" },
                      { path: "/articles/safe-base",                          label: "安全基地とは何か｜回復に必要な「安心できる場所」" },
                    ].map((item) => (
                      <Link key={item.path} to={item.path} className="flex items-center gap-2 group">
                        <span className="flex-shrink-0 text-[10px] px-1.5 py-0.5 rounded font-bold" style={{ background: `${SAGE}25`, color: SAGE }}>NEW</span>
                        <span className="text-xs text-stone-600 group-hover:text-stone-900 group-hover:underline underline-offset-2 transition-colors leading-snug">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* しんどさカード(より深く絞り込みたい人向け) */}
                <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-1" style={{ color: SAGE }}>STEP 3 ｜ さらに絞り込む</p>
                <p className="text-xs text-stone-500 mb-3">具体的な悩みのキーワードから記事を探す</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {SHINDO_CARDS.map((card) => {
                    const isActive = activeShindo?.label === card.label;
                    const isResearch = card.icon === "FlaskConical";
                    return (
                      <button key={card.label} onClick={() => setActiveShindo(isActive ? null : card)}
                        className="flex flex-col items-start gap-2 p-4 rounded-xl border text-left transition-all"
                        style={{ borderColor: isActive ? (isResearch ? "#0369a1" : SAGE) : "rgb(231,229,228)", background: isActive ? (isResearch ? "#e0f2fe" : `${SAGE}0e`) : "white" }}
                      >
                        {card.icon === "BatteryLow"  && <BatteryLow  className="w-5 h-5" style={{ color: SAGE }} aria-hidden="true" />}
                        {card.icon === "LogOut"       && <LogOut       className="w-5 h-5" style={{ color: SAGE }} aria-hidden="true" />}
                        {card.icon === "Layers"       && <Layers       className="w-5 h-5" style={{ color: SAGE }} aria-hidden="true" />}
                        {card.icon === "Users"        && <Users        className="w-5 h-5" style={{ color: SAGE }} aria-hidden="true" />}
                        {card.icon === "Moon"         && <Moon         className="w-5 h-5" style={{ color: SAGE }} aria-hidden="true" />}
                        {card.icon === "RotateCcw"    && <RotateCcw    className="w-5 h-5" style={{ color: SAGE }} aria-hidden="true" />}
                        {card.icon === "FlaskConical" && <FlaskConical className="w-5 h-5" style={{ color: "#0369a1" }} aria-hidden="true" />}
                        <span className="text-sm font-medium text-stone-700 leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>{card.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* しんどさカード結果表示 */}
            {!searchQuery.trim() && activeTab === "shindo" && activeShindo && (
              <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-2 mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-stone-700">
                    「{activeShindo.label}」に関連する記事
                    <span className="ml-2 text-xs text-stone-400">{shindoArticles.length}本</span>
                  </p>
                  <button onClick={() => setActiveShindo(null)} className="text-xs text-stone-400 hover:text-stone-600 transition-colors">✕ 閉じる</button>
                </div>
                {shindoArticles.length > 0
                  ? shindoArticles.map((a) => <ArticleCard key={a.path} article={a} showNew />)
                  : <p className="text-sm text-stone-400 py-4">関連記事を準備中です。</p>
                }
              </motion.div>
            )}

            {/* ============ いま整える:診断ツール ============ */}
            {!searchQuery.trim() && activeTab === "tools" && (
              <div>
                <p className="text-xs text-stone-400 mb-6 leading-relaxed">スライダー・チェック・レーダーチャートなど、インタラクティブな形式で今の状態を可視化できるツールです。</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {TOOLS.map((tool) => (
                    <Link key={tool.path} to={tool.path}
                      className="group flex flex-col gap-3 p-5 rounded-2xl border border-stone-100 bg-white hover:shadow-md transition-all duration-200"
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = tool.color + "80"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = ""; }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: tool.color + "18", border: `1.5px solid ${tool.color}30` }}>
                          <div style={{ width: "18px", height: "18px", borderRadius: "4px", background: tool.color, opacity: 0.85 }} />
                        </div>
                        <span className="text-[10px] tracking-[0.15em] font-medium px-2 py-0.5 rounded-full" style={{ color: tool.color, background: tool.color + "15" }}>{tool.tag}</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-stone-800 group-hover:text-stone-900 leading-snug transition-colors" style={{ fontFamily: "'Noto Serif JP', serif" }}>{tool.title}</p>
                        <p className="text-xs text-stone-400 leading-relaxed">{tool.desc}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-medium mt-auto pt-2 border-t border-stone-50" style={{ color: tool.color }}>
                        ツールを使う <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ============ いま整える:新着順 ============ */}
            {!searchQuery.trim() && activeTab === "new" && (
              <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-2">
                <p className="text-xs text-stone-400 mb-4">最近追加・更新された記事を新しい順に表示しています</p>
                {sortedByNew.map((a) => <ArticleCard key={a.path} article={a} showNew />)}
              </motion.div>
            )}

            {/* ============ 知る:テーマ別 ============ */}
            {!searchQuery.trim() && activeTab === "theme" && (
              <div>
                {THEME_LAYERS.map((layer) => {
                  const layerArticles = layer.sections.flatMap((s) => getArticlesForSection(s.keywords));
                  const unique = Array.from(new Map(layerArticles.map((a) => [a.path, a])).values());
                  if (unique.length === 0) return null;
                  return (
                    <div key={layer.id} id={`layer-${layer.id}`} className="mb-14 scroll-mt-20">
                      <div className="mb-5 pb-3 border-b border-stone-100">
                        <div className="flex items-baseline gap-2 mb-0.5">
                          <h2 className="text-base md:text-lg font-medium text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>{layer.label}</h2>
                          <span className="text-xs text-stone-400">{unique.length}本</span>
                        </div>
                        <p className="text-xs text-stone-400">{layer.desc}</p>
                      </div>
                      {layer.sections.map((section) => {
                        const items = getArticlesForSection(section.keywords);
                        if (items.length === 0) return null;
                        return (
                          <div key={section.label} className="mb-7">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-[10px] tracking-[0.2em] uppercase font-medium px-2.5 py-1 rounded-full" style={{ color: SAGE, background: `${SAGE}10`, border: `1px solid ${SAGE}30` }}>{section.label}</span>
                              <span className="text-xs text-stone-400">{items.length}本</span>
                            </div>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger} className="space-y-2">
                              {items.map((a) => <ArticleCard key={a.path} article={a} showNew />)}
                            </motion.div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
                {(() => {
                  const u = getUnclassified();
                  if (u.length === 0) return null;
                  return (
                    <div className="mb-14">
                      <div className="mb-5 pb-3 border-b border-stone-100">
                        <div className="flex items-baseline gap-2">
                          <h2 className="text-base font-medium text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>その他</h2>
                          <span className="text-xs text-stone-400">{u.length}本</span>
                        </div>
                      </div>
                      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger} className="space-y-2">
                        {u.map((a) => <ArticleCard key={a.path} article={a} showNew />)}
                      </motion.div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* ============ 知る:心理学から ============ */}
            {!searchQuery.trim() && activeTab === "research" && (
              <div>
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
                  className="mb-5 p-5 rounded-2xl" style={{ background: "#2C1F14" }}
                >
                  <p className="text-xs text-stone-400 mb-1">原因より、今すぐどうにかしたい方へ</p>
                  <p className="text-sm text-stone-200 leading-relaxed mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>まず対処法を知りたい方は、こちらをご覧ください。</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: "共感疲労の対処法を見る",              path: "/articles/helper-compassion-fatigue-practice" },
                      { label: "バウンダリー(境界線)の作り方を見る", path: "/articles/helper-boundary-how-to" },
                      { label: "今の状態をチェックする",               path: "/articles/helper-empathy-check" },
                    ].map(({ label, path }) => (
                      <Link key={path} to={path} className="group inline-flex items-center gap-1.5 text-sm text-[#7EB8A4] hover:text-[#9fcfbf] transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />{label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                  className="mb-8 p-5 rounded-2xl" style={{ background: "#e0f2fe", border: "1px solid #bae6fd" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <FlaskConical className="w-4 h-4 text-sky-700" />
                    <p className="text-[10px] tracking-[0.25em] uppercase font-medium text-sky-700">心理学研究から読む</p>
                  </div>
                  <p className="text-sm text-sky-900 leading-relaxed">「なぜこうなるのか」を心理学の研究から解説した記事です。<br />現場の感覚を、エビデンスで言語化します。</p>
                </motion.div>
                {RESEARCH_SECTIONS.map((section) => {
                  const items = getResearchArticlesForSection(section.paths);
                  if (items.length === 0) return null;
                  return (
                    <div key={section.label} className="mb-10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] tracking-[0.2em] uppercase font-medium px-2.5 py-1 rounded-full" style={{ color: "#0369a1", background: "#e0f2fe", border: "1px solid #bae6fd" }}>{section.label}</span>
                        <span className="text-xs text-stone-400">{items.length}本</span>
                      </div>
                      <p className="text-xs text-stone-400 mb-3 ml-1">{section.desc}</p>
                      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger} className="space-y-2">
                        {items.map((a) => <ArticleCard key={a.path} article={a} />)}
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ============ すべて見る ============ */}
            {!searchQuery.trim() && activeTab === "all" && (
              <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-2">
                {articles.map((a) => <ArticleCard key={a.path} article={a} showNew />)}
              </motion.div>
            )}

            {/* 検索結果 */}
            {searchQuery.trim() && (() => {
              const q = searchQuery.trim().toLowerCase();
              const results = articles.filter((a) =>
                a.title.toLowerCase().includes(q) ||
                a.description.toLowerCase().includes(q)
              );
              return (
                <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-2">
                  <p className="text-xs text-stone-400 mb-4">
                    「{searchQuery}」の検索結果:<span className="font-medium text-stone-600">{results.length}件</span>
                  </p>
                  {results.length > 0
                    ? results.map((a) => <ArticleCard key={a.path} article={a} showNew />)
                    : (
                      <div className="text-center py-16 space-y-3">
                        <Search className="w-8 h-8 text-stone-200 mx-auto" />
                        <p className="text-stone-400 text-sm">「{searchQuery}」に一致する記事が見つかりませんでした。</p>
                        <p className="text-stone-300 text-xs">別のキーワードをお試しください</p>
                        <button
                          onClick={() => setSearchQuery("")}
                          className="text-xs underline underline-offset-2 transition-colors mt-2"
                          style={{ color: SAGE }}
                          type="button"
                        >
                          検索をクリア
                        </button>
                      </div>
                    )
                  }
                </motion.div>
              );
            })()}

            {!searchQuery.trim() && articles.length === 0 && (
              <div className="text-center py-20 text-stone-400 text-sm">記事は準備中です。</div>
            )}
          </div>
        </section>

        {/* 下部CTA */}
        <section className="py-14 px-5 md:px-6 bg-stone-50 border-t border-stone-100">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-lg mx-auto text-center space-y-5">
            <motion.div variants={fadeUp} className="space-y-2">
              <p className="text-stone-800 text-lg md:text-xl font-light leading-[1.9]" style={{ fontFamily: "'Noto Serif JP', serif" }}>記事を読んで、自分のことかもしれないと思ったら。</p>
              <p className="text-stone-500 text-sm leading-relaxed">言葉にならなくても大丈夫です。今のしんどさを一緒に整理できます。</p>
              <p className="text-stone-400 text-xs">話す内容がまとまっていなくても大丈夫です。</p>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-3">
              <Link to="/#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#2C1F14] text-stone-50 text-sm font-medium tracking-[0.08em] rounded-full hover:bg-[#3D2B1F] transition-all shadow-md">
                初回無料で相談する <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <p className="text-stone-400 text-xs">1回のみでもOK ／ 勧誘なし ／ 送った後もキャンセル可</p>
              {/* LINE副CTA */}
              <div className="pt-2">
                <p className="text-stone-400 text-xs mb-2">あるいは、まず読むだけから</p>
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium text-white"
                  style={{ background: "#06C755" }}
                >
                  <MessageCircle className="w-4 h-4" />LINEで状態タイプを受け取る
                </a>
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link to="/" className="text-xs text-stone-400 hover:text-stone-600 transition-colors underline underline-offset-2">← トップページに戻る</Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
