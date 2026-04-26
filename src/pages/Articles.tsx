/**
 * Articles.tsx — いしずえ心理記事一覧
 * SEO・回遊率・CV を同時に高める"顧客目線UI"版
 */

import { useState } from "react";
import { motion, type Variants } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, ClipboardList, ChevronRight, BatteryLow, LogOut, Layers, Users, Moon, RotateCcw, FlaskConical } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { articles } from "../data/articles";

const SAGE = "#8FAF9F";

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

// 論文系記事のパスパターン
const RESEARCH_PATHS = [
  "helper-benefit-finding",
  "helper-contrast-avoidance",
  "helper-goal-adjustment",
  "helper-implicit-theory",
  "helper-mind-wandering",
  "helper-naive-realism",
  "helper-organization-unsafe",
  "helper-reality-shock",
  "helper-reframing-caring",
  "helper-retelling-memory",
  "helper-self-complexity",
  "helper-self-criticism-culture",
  "helper-self-effacement-family",
  "helper-supervision-compassion",
  "helper-team-communication",
  "helper-wellbeing-not-from",
  "helper-stress-mindset",
  "helper-burnout-scale-validity",
  "helper-burnout-occupation",
  "helper-self-compassion-burnout",
  "helper-nurse-self-compassion",
  "helper-attachment-self-compassion",
  "helper-self-compassion-resistance",
  "helper-self-compassion-behavior",
  "helper-msc-program",
  "helper-self-care-ability",
  "helper-emotional-labor-what",
  "helper-helplessness",
  "helper-brain-fatigue",
];

function isResearchArticle(path: string): boolean {
  return RESEARCH_PATHS.some((p) => path.includes(p));
}


type WorryCategory = {
  id: string;
  phase: string;
  label: string;       // 一般語（入口）
  desc: string;
  icon: string;
  keywords: string[];  // THEME_LAYERSと同じキーワードマッチ
  exitPath: string;    // 出口：1つだけ
  exitLabel: string;
};

const WORRY_CATEGORIES: WorryCategory[] = [
  // フェーズ1：崩壊初期（気づいてない）
  {
    id: "fatigue",
    phase: "フェーズ1",
    label: "疲れが取れない・ずっとしんどい",
    desc: "休んでも回復しない、何をしても疲れが抜けない",
    icon: "BatteryLow",
    keywords: ["fatigue", "burnout", "empathy", "brain", "feels-tired", "case-overload", "night-shift"],
    exitPath: "/articles/helper-empathy-check",
    exitLabel: "まず今の消耗度を確認する（3分）",
  },
  {
    id: "emotion",
    phase: "フェーズ1",
    label: "感情がコントロールできない",
    desc: "イライラが止まらない、何も感じなくなった、感情が不安定",
    icon: "Waves",
    keywords: ["emotional-labor", "labor", "rumination", "irritab", "emotional-labor-fatigue", "decision-fatigue"],
    exitPath: "/articles/helper-emotional-labor-what",
    exitLabel: "感情労働が消耗させている理由を知る",
  },
  // フェーズ2：中期（自覚し始める）
  {
    id: "boundary",
    phase: "フェーズ2",
    label: "断れない・抱え込んでしまう",
    desc: "NOが言えない、いつも自分が我慢している",
    icon: "Layers",
    keywords: ["boundary", "sacrifice", "cannot-say-no", "pulled-by-client", "perfectionism", "boundary-how-to"],
    exitPath: "/articles/helper-boundary-how-to",
    exitLabel: "罪悪感なく断るための方法を見る",
  },
  {
    id: "workplace",
    phase: "フェーズ2",
    label: "職場の人間関係がつらい",
    desc: "上司・同僚との関係、ハラスメント、職場の空気",
    icon: "Users",
    keywords: ["workplace", "team", "boss", "harassment", "complaint", "human", "boss-stress"],
    exitPath: "/articles/helper-empathy-check",
    exitLabel: "今の消耗度を確認する（3分）",
  },
  // フェーズ3：後期（限界）
  {
    id: "selfblame",
    phase: "フェーズ3",
    label: "自分を責めてしまう",
    desc: "もっとできたはず、自分が弱い、無力感が続く",
    icon: "Heart",
    keywords: ["self-compassion", "helplessness", "self-criticism", "guilt", "self-blame"],
    exitPath: "/articles/helper-self-blame-landing",
    exitLabel: "自分を責めてしまう理由を知る",
  },
  {
    id: "quit",
    phase: "フェーズ3",
    label: "仕事を辞めたい・続けられない",
    desc: "限界かもしれない、辞めていいのかわからない",
    icon: "LogOut",
    keywords: ["quit", "want-to-quit", "resign", "guilty-leave", "guilt-about-leaving", "job-hopping", "complaint-damage"],
    exitPath: "/articles/helper-want-to-quit-landing",
    exitLabel: "辞めたいと思ったとき、最初に読むページ",
  },
  // フェーズ4：意思決定
  {
    id: "career",
    phase: "フェーズ4",
    label: "復職・転職を考えている",
    desc: "戻るべきか、別の道を探すべきか迷っている",
    icon: "RotateCcw",
    keywords: ["return", "absence", "consider-leave", "career-stagnation", "aptitude-doubt", "burnout-recovery", "signs-to-rest"],
    exitPath: "/articles/helper-consider-leave",
    exitLabel: "休職・復職を考えたときの判断ポイント",
  },
  {
    id: "counseling",
    phase: "フェーズ4",
    label: "カウンセリングを考えている",
    desc: "相談してみたいけど迷っている、どこに行けばいいか",
    icon: "MessageCircle",
    keywords: ["counseling", "counselling", "cannot-seek", "resistance-to-counseling", "receiving-counseling"],
    exitPath: "/articles/helper-counseling",
    exitLabel: "カウンセリングを検討している方へ",
  },
];

type ShindoCard = { label: string; icon: string; keywords: string[] };

const SHINDO_CARDS: ShindoCard[] = [
  { label: "疲れが取れない",          icon: "BatteryLow",  keywords: ["fatigue", "empathy", "rest", "recovery", "burnout"] },
  { label: "辞めたい",                icon: "LogOut",      keywords: ["quit", "resign", "guilty-leave", "career", "closure"] },
  { label: "利用者を抱え込みすぎる",   icon: "Layers",      keywords: ["overwork", "boundary", "sacrifice", "involve"] },
  { label: "人間関係がつらい",         icon: "Users",       keywords: ["workplace", "team", "boss", "harassment", "human", "boss-stress"] },
  { label: "休みたいのに休めない",     icon: "Moon",        keywords: ["rest", "absence", "leave", "return", "guilt"] },
  { label: "復職・続けるか迷う",       icon: "RotateCcw",   keywords: ["return", "transfer", "repeat", "suitable", "absence", "career-stagnation", "job-hopping", "aptitude-doubt", "consider-leave", "want-to-quit", "counseling-when-quitting", "burnout-vs-depression", "burnout-recovery", "signs-to-rest", "guilt-about-leaving", "social-worker-dilem", "burnout-what-to-do"] },
  { label: "なぜこうなるか理解したい", icon: "FlaskConical", keywords: ["research"] },
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
  { id: "quit",       label: "辞めたい",       keywords: ["quit", "resign", "guilty-leave"] },
  { id: "absence",    label: "休職・復職",      keywords: ["absence", "return", "leave"] },
  { id: "career",     label: "キャリア",       keywords: ["career", "closure", "repeat", "suitable"] },
  { id: "recovery",   label: "回復・ケア",      keywords: ["recovery", "rest", "self-care", "coping"] },
  { id: "job",        label: "職種別",         keywords: ["nurse", "caregiver", "teacher", "school", "nursery", "welfare"] },
  { id: "counseling", label: "カウンセリング",  keywords: ["counseling", "counselling"] },
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
  { path: "/articles/self-value-check",      title: "自己価値の置き場所診断｜あなたの「存在許可証」を可視化する",        desc: "「何者かにならないと不安」「役に立たないと罪悪感」——あなたが自分に課している存在の条件を4軸24問で可視化。",              tag: "4軸・24問",       color: "#f59e0b" },
  { path: "/articles/big-five-check",        title: "ビッグファイブ診断｜あなたの「消耗パターン」を知る",                desc: "協調性・誠実性・開放性・外向性・感受性の5因子から、今の消耗の構造を解析。10問・レーダーチャート・7タイプ対応。",    tag: "5因子・10問",     color: "#c084fc" },
  { path: "/articles/helper-status-check",   title: "支援職のための現在地チェック",                                    desc: "感情・抱え込み・職場・体の4軸12項目でトグル式に確認。今の自分の状態をそっと言語化できます。",                      tag: "4軸・12問",       color: "#7EB8A4" },
  { path: "/articles/helper-boundary-board", title: "境界線・脱フュージョンボード",                                    desc: "感情の巻き込まれ度と自責・罪悪感をスライダーで調整。ベン図で境界線の状態をリアルタイム可視化。",                    tag: "スライダー式",     color: "#c084fc" },
  { path: "/articles/helper-jdr-balance",    title: "JD-Rバランスシミュレーター",                                      desc: "仕事の要求と資源のバランスをシーソーで可視化。バーンアウトリスクと具体的な対処法を確認できます。",                  tag: "JD-Rモデル",      color: "#fb923c" },
  { path: "/articles/helper-mabi-radar",     title: "MABI-HPレーダーアセスメント",                                     desc: "共感疲労・過剰適応・組織葛藤・身体消耗の4軸をレーダーチャートで可視化。消耗の震源地を特定します。",                tag: "レーダーチャート", color: "#60a5fa" },
  { path: "/articles/helper-thinking-check", title: "「考え方のクセ」現在地チェック",                                  desc: "完璧主義・すべき思考・自己関連づけなど、支援職に多い8つの認知のクセを24項目で確認。リフレーミング付き。",            tag: "8カテゴリ・24問",  color: "#a78bfa" },
  { path: "/articles/helper-impostor-check", title: "「自分の頑張りを認められない」現在地チェック",                    desc: "「いつかバレる」「運が良かっただけ」——支援職に多いインポスター現象の8つのパターンを24項目でチェック。",            tag: "インポスター現象", color: "#c084fc" },
  { path: "/articles/helper-attachment-check", title: "「人との距離感」現在地チェック",                               desc: "見捨てられ不安・自己犠牲・回避・境界線の曖昧さ——支援職に多い愛着スタイルの8パターンを24項目でチェック。",          tag: "愛着スタイル",     color: "#f472b6" },
  { path: "/articles/helper-self-compassion-check", title: "セルフ・コンパッション反応チェック｜8場面で「自分への思いやり」を確認する", desc: "つらい場面で自分をどう扱うか——8つの困難場面で4択2つ選ぶ形式で、自然な反応パターンを確認。SCRI-Jをもとに作成。", tag: "8場面・選択式", color: "#8FAF9F" },
  { path: "/articles/helper-empathy-check",      title: "共感疲労チェック｜支援職のための20項目診断",                      desc: "利用者のことが頭から離れない、仕事後も気持ちが切り替わらない——20項目から共感疲労の消耗度を3分で確認。",                tag: "20問・3分",       color: "#8FAF9F" },
  { path: "/articles/helper-brain-fatigue-check",   title: "脳疲労セルフチェック｜支援職のための20項目診断",                    desc: "「頭が回らない」「休んでも疲れが抜けない」——脳疲労の症状20項目から今の状態を3分で確認できます。",                      tag: "20問・3分",       color: "#7EB8A4" },
  { path: "/articles/working-os-check",      title: "「働き方のOS」診断",                                             desc: "なぜ働いているのに満たされないのか。ライス・ライフ・ライトの3軸で消耗の構造を可視化。レーダーチャート付き・全12問。",  tag: "3軸・12問",       color: "#7EB8A4" },
] as const;

const TABS = [
  { id: "shindo",   label: "今のしんどさから探す" },
  { id: "tools",    label: "診断ツール" },
  { id: "theme",    label: "テーマ別" },
  { id: "research", label: "心理学から読む" },
  { id: "all",      label: "すべて" },
] as const;
type TabId = typeof TABS[number]["id"];

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
      { label: "境界線・抱え込み",  keywords: ["boundary", "overwork", "sacrifice", "cannot-say-no", "pulled-by-client", "guilt-about-suffering", "perfectionism", "social-worker-dilem", "boundary-how-to"] },
      { label: "職場・人間関係",    keywords: ["workplace", "team", "boss", "harassment", "human", "boss-stress"] },
      { label: "職種別",            keywords: ["nurse", "caregiver", "teacher", "school", "nursery", "welfare"] },
      { label: "カウンセリング活用", keywords: ["counseling", "counselling", "cannot-seek"] },
    ],
  },
  {
    id: "career", label: "辞めたい・続けられない", desc: "辞めたい・休職・復職の葛藤に向き合う記事",
    sections: [
      { label: "辞めたい・退職",   keywords: ["quit", "resign", "guilty-leave", "guilt-about-leaving", "job-hopping", "complaint-damage", "want-to-quit"] },
      { label: "休職・復職",       keywords: ["absence", "return", "leave", "consider-leave", "signs-to-rest", "guilt-about-leaving", "counseling-when-quitting", "burnout-recovery", "burnout-what-to-do"] },
      { label: "キャリア・閉塞感", keywords: ["career", "closure", "repeat", "suitable"] },
    ],
  },
];

type ResearchSection = { label: string; desc: string; paths: string[] };

const RESEARCH_SECTIONS: ResearchSection[] = [
  {
    label: "消耗の正体｜なぜ疲れるのか",
    desc:  "「なぜこんなに疲れるのか」——消耗が起きる構造を心理学から解説した記事",
    paths: ["helper-organization-unsafe", "helper-self-complexity", "helper-mind-wandering", "helper-stress-mindset", "helper-team-communication", "helper-emotional-labor-what", "helper-helplessness", "helper-brain-fatigue", "helper-empathy-fatigue", "helper-secondary-trauma", "helper-decision-fatigue", "helper-overwork", "helper-night-shift-mental-health", "helper-case-overload", "emotional-labor-fatigue", "care-worker-mental-fatigue", "empathy-fatigue-vs-secondary-trauma"],
  },
  {
    label: "抜け出せない思考｜やめられない・考えすぎ",
    desc:  "「頭から離れない」「自分を責めてしまう」——抜け出せない思考パターンの正体",
    paths: ["helper-contrast-avoidance", "helper-self-criticism-culture", "helper-implicit-theory", "helper-naive-realism", "helper-self-effacement-family", "helper-wellbeing-not-from"],
  },
  {
    label: "辞めたい・休職を考えたとき",
    desc:  "「もう限界かもしれない」「休んでいいのか」——判断を整理するための記事",
    paths: ["helper-want-to-quit", "helper-consider-leave", "helper-caregiver-burnout", "helper-guilt-about-leaving", "helper-leave-of-absence-hesitation", "helper-signs-to-rest", "helper-return-to-work-fear", "helper-counseling-when-quitting", "helper-career-stagnation"],
  },
  {
    label: "回復と立て直し｜どう戻るか",
    desc:  "つらい経験から回復し、意味を見出し、立て直していくプロセス",
    paths: ["helper-benefit-finding", "helper-retelling-memory", "helper-reframing-caring", "helper-supervision-compassion", "helper-goal-adjustment", "helper-reality-shock", "helper-burnout-scale-validity", "helper-burnout-occupation", "helper-self-compassion-burnout", "helper-nurse-self-compassion", "helper-attachment-self-compassion", "helper-self-compassion-resistance", "helper-self-compassion-behavior", "helper-msc-program", "helper-self-care-ability", "helper-burnout-recovery", "helper-mental-recovery", "helper-rest-types", "helper-rest-importance", "helper-stress-coping", "helper-compassion-fatigue-practice", "empathy-fatigue-recovery", "helper-burnout-what-to-do", "helper-burnout-signs", "compassion-fatigue-coping", "care-worker-burnout"],
  },
  {
    label: "抱え込み・境界線",
    desc:  "「断れない」「巻き込まれすぎる」——境界線が曖昧になる構造と、抜け出すための方法",
    paths: ["helper-pulled-by-client", "helper-cannot-say-no", "helper-boundary",
            "helper-boundary-how-to", "empathy-fatigue-boundary", "helper-guilt-about-suffering",
            "helper-perfectionism", "helper-social-worker-dilem", "helper-stop-self-sacrifice"],
  },
  {
    label: "人間関係・職場ストレス",
    desc:  "上司・同僚・組織との関係で消耗しているとき",
    paths: ["helper-boss-stress", "helper-complaint-damage", "helper-harassment-gray-zone",
            "helper-workplace-stress", "helper-team-fatigue",
            "nursery-teacher-relationship-stress", "welfare-worker-relationship-counseling"],
  },
  {
    label: "職種別｜看護師・介護・保育・教師",
    desc:  "職種特有の消耗と、それぞれに合った対処を解説した記事",
    paths: ["nurse-compassion-fatigue", "nurse-emotional-exhaustion", "nurse-emotional-labor-hard",
            "nursery-teacher-limit", "school-counselor-loneliness",
            "teacher-mental-health", "teacher-mental-health-limit",
            "empathy-fatigue-by-job-type", "compassion-fatigue-diagnosis",
            "helper-aptitude-doubt", "helper-burnout-vs-depression",
            "compassion-fatigue-vs-depression"],
  },
  {
    label: "カウンセリング・相談を考えているとき",
    desc:  "「相談してもいいのか」「どこに行けばいいか」——一歩を踏み出すための記事",
    paths: ["helper-counseling", "helper-online-counseling", "teacher-online-counseling",
            "helper-receiving-counseling", "helper-resistance-to-counseling", "helper-cannot-seek"],
  },

  {
    label: "研究から読む｜心理学・論文ベースの解説",
    desc:  "バーンアウト・感情労働・セルフコンパッションなど、研究論文をもとに消耗の構造を深く解説した記事",
    paths: [
      "helper-burnout-scale-validity", "helper-burnout-occupation",
      "helper-emotional-labor-what", "helper-helplessness",
      "helper-self-compassion-burnout", "helper-self-compassion-resistance",
      "helper-self-compassion-behavior", "helper-attachment-self-compassion",
      "helper-nurse-self-compassion", "helper-msc-program",
      "helper-self-care-ability", "helper-brain-fatigue",
      "helper-organization-unsafe", "helper-self-complexity",
      "helper-mind-wandering", "helper-stress-mindset",
      "helper-team-communication", "helper-self-criticism-culture",
      "helper-self-effacement-family", "helper-contrast-avoidance",
      "helper-implicit-theory", "helper-goal-adjustment",
      "helper-benefit-finding", "helper-reality-shock",
      "helper-reframing-caring", "helper-retelling-memory",
      "helper-wellbeing-not-from", "helper-supervision-compassion",
      "helper-naive-realism-conflict",
    ],
  },
];
function getArticlesForSection(keywords: string[]) {
  return articles.filter((a) => !isResearchArticle(a.path) && keywords.some((kw) => a.path.toLowerCase().includes(kw)));
}

function getResearchArticlesForSection(paths: string[]) {
  return articles.filter((a) => paths.some((p) => a.path.includes(p)));
}

function getUnclassified() {
  const all = THEME_LAYERS.flatMap((l) => l.sections.flatMap((s) => s.keywords));
  return articles.filter((a) =>
    !all.some((kw) => a.path.toLowerCase().includes(kw)) && !isResearchArticle(a.path)
  );
}

function ArticleCard({ article }: { article: typeof articles[0] }) {
  const cat = getCategoryForArticle(article.path);
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
          <span
            className="inline-block text-[10px] tracking-[0.15em] font-medium px-2 py-0.5 rounded-full"
            style={{ color: cat.isResearch ? "#0369a1" : SAGE, background: cat.isResearch ? "#e0f2fe" : `${SAGE}12` }}
          >
            {cat.label}
          </span>
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
  const [activeTab, setActiveTab] = useState<TabId>("shindo");
  const [activeShindo, setActiveShindo] = useState<ShindoCard | null>(null);

  const starterArticles = STARTER_PATHS
    .map((p) => articles.find((a) => a.path === p))
    .filter((a): a is NonNullable<typeof a> => !!a);

  const shindoArticles = activeShindo
    ? activeShindo.icon === "FlaskConical"
      ? articles.filter((a) => isResearchArticle(a.path))
      : articles.filter((a) => activeShindo.keywords.some((kw) => a.path.toLowerCase().includes(kw)))
    : [];

  return (
    <>
      <Helmet>
        <title>心理記事｜支援職のための構造的な視点｜こころの相談室 いしずえ</title>
        <meta name="description" content="共感疲労・バーンアウト・境界線・休職判断まで、支援職が抱えやすい心理的負担を構造的に整理した記事一覧。公認心理師・松本龍児。" />
      </Helmet>

      <div className="bg-white min-h-screen">

        {/* HERO */}
        <section className="relative bg-[#1A110A] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/50 to-stone-950" />
          <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-24">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 max-w-2xl">
              <motion.div variants={fadeUp}>
                <span className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: SAGE }}>Articles</span>
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-light text-white tracking-wide leading-[1.5]" style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}>
                  心理記事
                </h1>
                <p className="text-stone-300 text-sm md:text-base leading-[2]">
                  支援職・対人援助職が抱えやすい心理的負担を、<br className="hidden md:block" />
                  共感疲労・バーンアウト・境界線・休職判断まで構造的に整理しています。
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-2">
                <p className="text-[11px] text-white/50 tracking-wide">まず今の状態を確認したい方はこちら</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "共感疲労チェック",    path: "/articles/helper-empathy-check" },
                    { label: "脳疲労チェック",      path: "/articles/helper-brain-fatigue-check" },
                    { label: "バーンアウトチェック", path: "/articles/helper-burnout-check" },
                    { label: "辞め時チェック",      path: "/articles/helper-quit-timing-check" },
                  ].map(({ label, path }) => (
                    <Link key={path} to={path}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-all"
                      style={{ background: `${SAGE}22`, color: "rgba(255,255,255,0.85)", border: `1px solid ${SAGE}50` }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = `${SAGE}40`; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = `${SAGE}22`; }}
                    >
                      <ClipboardList className="w-3.5 h-3.5" />{label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ARTICLES SECTION */}
        <section className="py-10 md:py-16 px-5 md:px-6" itemScope itemType="https://schema.org/CollectionPage">
          <div className="max-w-4xl mx-auto">

            {/* タブ */}
            <div className="flex gap-0 mb-8 border-b border-stone-100 overflow-x-auto">
              {TABS.map((tab) => {
                const count =
                  tab.id === "all" ? articles.length :
                  tab.id === "tools" ? TOOLS.length :
                  tab.id === "research" ? articles.filter((a) => isResearchArticle(a.path)).length :
                  tab.id === "shindo" ? articles.length :
                  articles.filter((a) => !isResearchArticle(a.path)).length;
                return (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)}
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


            {/* お悩みから探す（WORRY_CATEGORIES） */}
            {activeTab === "shindo" && !activeShindo && (
              <div className="mb-10">
                <div className="mb-4">
                  <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-1" style={{ color: SAGE }}>
                    お悩みから探す
                  </p>
                  <p className="text-xs text-stone-500">今の状態に近いものを選んでください</p>
                </div>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {WORRY_CATEGORIES.map((cat) => (
                    <a
                      key={cat.id}
                      href={cat.exitPath}
                      className="flex flex-col gap-1.5 p-3.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:border-stone-300 hover:shadow-sm transition-all text-left"
                    >
                      <p className="text-[9px] tracking-[0.15em] uppercase font-medium" style={{ color: SAGE }}>
                        {cat.phase}
                      </p>
                      <p className="text-xs font-medium text-stone-800 leading-snug">{cat.label}</p>
                      <p className="text-[10px] text-stone-500 leading-relaxed">{cat.desc}</p>
                      <p className="text-[10px] font-medium mt-auto pt-1 border-t border-stone-200" style={{ color: SAGE }}>
                        {cat.exitLabel} →
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* 今のしんどさから探す */}
            {activeTab === "shindo" && (
              <div>
                {!activeShindo && starterArticles.length > 0 && (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                    className="mb-8 p-5 rounded-2xl" style={{ background: `${SAGE}07`, border: `1px solid ${SAGE}40` }}
                  >
                    <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-3" style={{ color: SAGE }}>
                      はじめての方へ｜まず読んでほしい記事
                    </p>
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

                <p className="text-xs text-stone-400 mb-3 tracking-wide">今のしんどさから記事を探す</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {SHINDO_CARDS.map((card) => {
                    const isActive = activeShindo?.label === card.label;
                    const isResearch = card.icon === "FlaskConical";
                    return (
                      <button key={card.label} onClick={() => setActiveShindo(isActive ? null : card)}
                        className="flex flex-col items-start gap-2 p-4 rounded-xl border text-left transition-all"
                        style={{
                          borderColor: isActive ? (isResearch ? "#0369a1" : SAGE) : "rgb(231,229,228)",
                          background:  isActive ? (isResearch ? "#e0f2fe" : `${SAGE}0e`) : "white",
                        }}
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

                {activeShindo && (
                  <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-2">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium text-stone-700">
                        「{activeShindo.label}」に関連する記事
                        <span className="ml-2 text-xs text-stone-400">{shindoArticles.length}本</span>
                      </p>
                      <button onClick={() => setActiveShindo(null)} className="text-xs text-stone-400 hover:text-stone-600 transition-colors">✕ 閉じる</button>
                    </div>
                    {shindoArticles.length > 0
                      ? shindoArticles.map((a) => <ArticleCard key={a.path} article={a} />)
                      : <p className="text-sm text-stone-400 py-4">関連記事を準備中です。</p>
                    }
                  </motion.div>
                )}
              </div>
            )}

            {/* テーマ別 */}
            {activeTab === "theme" && (
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
                              {items.map((a) => <ArticleCard key={a.path} article={a} />)}
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
                        {u.map((a) => <ArticleCard key={a.path} article={a} />)}
                      </motion.div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 診断ツール */}
            {activeTab === "tools" && (
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

            {/* 心理学から読む */}
            {activeTab === "research" && (
              <div>
                {/* 対処優先ユーザー向け露骨導線 */}
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
                  className="mb-5 p-5 rounded-2xl" style={{ background: "#2C1F14" }}
                >
                  <p className="text-xs text-stone-400 mb-1">原因より、今すぐどうにかしたい方へ</p>
                  <p className="text-sm text-stone-200 leading-relaxed mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    まず対処法を知りたい方は、こちらをご覧ください。
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: "共感疲労の対処法を見る",              path: "/articles/helper-compassion-fatigue-practice" },
                      { label: "バウンダリー（境界線）の作り方を見る", path: "/articles/helper-boundary-how-to" },
                      { label: "今の状態をチェックする",               path: "/articles/helper-empathy-check" },
                    ].map(({ label, path }) => (
                      <Link key={path} to={path}
                        className="group inline-flex items-center gap-1.5 text-sm text-[#7EB8A4] hover:text-[#9fcfbf] transition-colors"
                      >
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                        {label}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* 研究記事イントロ */}
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                  className="mb-8 p-5 rounded-2xl" style={{ background: "#e0f2fe", border: "1px solid #bae6fd" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <FlaskConical className="w-4 h-4 text-sky-700" />
                    <p className="text-[10px] tracking-[0.25em] uppercase font-medium text-sky-700">心理学研究から読む</p>
                  </div>
                  <p className="text-sm text-sky-900 leading-relaxed">
                    「なぜこうなるのか」を心理学の研究から解説した記事です。<br />
                    現場の感覚を、エビデンスで言語化します。
                  </p>
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

            {/* すべて */}
            {activeTab === "all" && (
              <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-2">
                {articles.map((a) => <ArticleCard key={a.path} article={a} />)}
              </motion.div>
            )}

            {articles.length === 0 && (
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
            <motion.div variants={fadeUp} className="space-y-2">
              <Link to="/#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#2C1F14] text-stone-50 text-sm font-medium tracking-[0.08em] rounded-full hover:bg-[#3D2B1F] transition-all shadow-md">
                初回無料で相談する <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <p className="text-stone-400 text-xs">1回のみでもOK ／ 勧誘なし ／ 送った後もキャンセル可</p>
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
