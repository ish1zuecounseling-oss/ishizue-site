/**
 * AIAssistant.tsx — いしずえ「AI構造整理アシスタント」
 *
 * Phase 1: API不使用・完全クライアントサイド定型出力
 */

import { useState, useRef } from "react";
import { motion, type Variants } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, MessageCircle, RotateCcw, Lock, Compass } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SAGE = "#8FAF9F";
const LINE_BASE = "https://lin.ee/6H8Pzo6";

declare function gtag(...args: unknown[]): void;

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.05 } },
};

type StateType = "compassion" | "boundary" | "other-axis" | "impostor" | "quit" | "complex";

type CheckItem = {
  text: string;
  weights: Partial<Record<StateType, number>>;
};

type CheckCategory = {
  id: string;
  label: string;
  description: string;
  items: CheckItem[];
};

const CATEGORIES: CheckCategory[] = [
  {
    id: "fatigue",
    label: "疲れ・消耗",
    description: "今、体や心にどんな疲れがありますか？",
    items: [
      { text: "休んでも疲れが取れない",                    weights: { compassion: 2, quit: 1 } },
      { text: "利用者・相手のことが頭から離れない",        weights: { compassion: 3, boundary: 1 } },
      { text: "感情が麻痺している・以前のように感じない",  weights: { compassion: 2, quit: 2 } },
      { text: "仕事のことを考えると眠れない",              weights: { compassion: 2, quit: 1 } },
      { text: "もう仕事を続けられないかもしれない",        weights: { quit: 3 } },
    ],
  },
  {
    id: "boundary",
    label: "抱え込み・断れない",
    description: "他者との関係でどう感じていますか？",
    items: [
      { text: "頼まれると断れない・NOが言えない",                weights: { boundary: 3, "other-axis": 1 } },
      { text: "相手の感情をそのまま受け取ってしまう",            weights: { boundary: 3, compassion: 1 } },
      { text: "「自分が何とかしなければ」という感覚が強い",      weights: { boundary: 2, impostor: 1 } },
      { text: "相手の問題を自分の責任のように感じる",            weights: { boundary: 3, compassion: 1 } },
      { text: "断った後、強い罪悪感が残る",                      weights: { boundary: 2, "other-axis": 2 } },
    ],
  },
  {
    id: "self-loss",
    label: "自分がわからない",
    description: "自分自身についてどう感じていますか？",
    items: [
      { text: "自分が本当はどうしたいのかわからない",            weights: { "other-axis": 3 } },
      { text: "人に合わせすぎて自分の本音が見えない",            weights: { "other-axis": 3, boundary: 1 } },
      { text: "相手の機嫌で自分の気分が決まる",                  weights: { "other-axis": 3 } },
      { text: "「これでいいのか」が常に気になる",                weights: { "other-axis": 2, impostor: 2 } },
      { text: "休んでも何かしなければと焦る",                    weights: { "other-axis": 2, compassion: 1 } },
    ],
  },
  {
    id: "self-doubt",
    label: "自分への不信・自己否定",
    description: "自分の能力や価値について感じていることは？",
    items: [
      { text: "「いつかバレる」「実力がない」と感じる",          weights: { impostor: 3 } },
      { text: "成功しても「運が良かっただけ」と思う",            weights: { impostor: 3 } },
      { text: "褒められても素直に受け取れない",                  weights: { impostor: 2, "other-axis": 1 } },
      { text: "自分だけ「できていない」気がする",                weights: { impostor: 3, quit: 1 } },
      { text: "失敗するたびに「全部ダメな自分」と感じる",        weights: { impostor: 2, quit: 1 } },
    ],
  },
  {
    id: "career",
    label: "仕事・将来",
    description: "仕事や将来についての気持ちは？",
    items: [
      { text: "仕事を辞めたいけど踏み切れない",                  weights: { quit: 3 } },
      { text: "辞めたら次がないという不安が強い",                weights: { quit: 2, impostor: 1 } },
      { text: "辞めるのは「逃げ」のような気がする",              weights: { quit: 2, impostor: 2 } },
      { text: "続けるか辞めるかで頭がいっぱい",                  weights: { quit: 3 } },
      { text: "周りに迷惑をかけるから言えない",                  weights: { quit: 2, boundary: 2 } },
    ],
  },
  {
    id: "relational",
    label: "人間関係・職場",
    description: "職場や周りの人との関係は？",
    items: [
      { text: "上司や同僚の機嫌に振り回される",                  weights: { "other-axis": 2, boundary: 1 } },
      { text: "本音を言える人がいない",                          weights: { "other-axis": 2, boundary: 1 } },
      { text: "職場で孤立している・浮いている感覚",              weights: { boundary: 1, quit: 1 } },
      { text: "誰にも頼れない・弱音を吐けない",                  weights: { boundary: 2, impostor: 1 } },
    ],
  },
];

type TypeResult = {
  badge: string;
  title: string;
  summary: string;
  cause: string;
  current: string;
  nextStep: string;
  relatedArticles: { path: string; label: string }[];
  lineType: string;
  lineMessage: string;
};

const TYPE_RESULTS: Record<StateType, TypeResult> = {
  compassion: {
    badge: "共感疲労タイプ",
    title: "利用者の感情を引き受けすぎている状態",
    summary: "他者の痛みを「自分ごと」として抱え込み続けることで、心理的・身体的に消耗が深まっている状態です。",
    cause: "共感疲労（compassion fatigue）は、支援職に起こりやすい心理的消耗です。1995年にチャールズ・フィグレーが提唱した概念で、英語では「cost of caring（ケアすることの代償）」とも呼ばれます。真剣に利用者と向き合ってきたからこそ起こるもので、性格や能力の問題ではありません。背景には「感情労働」「共感的引き受け」「境界線の曖昧化」という3つの構造が重なっています。",
    current: "今は「休んでも回復しない」「利用者のことが頭から離れない」「感情が麻痺してきた」など、ケアの蓄積が限界に近づいているサインが出ている状態かもしれません。この段階で気づけたことは、消耗をこれ以上深めないための大きな分岐点になります。",
    nextStep: "まず、「自分はもう十分にやっている」と認める時間を作ってください。次に、利用者の感情と自分の感情を意識的に分ける練習を始めます。①一日の終わりに「今日引き受けすぎた感情は何か」を書き出す、②「これは私の感情／これは相手の感情」と区別する習慣をつける、③休日に仕事の話を一切しない時間を確保する、の3つから始めるのが現実的です。",
    relatedArticles: [
      { path: "/articles/helper-empathy-check", label: "共感疲労チェック（20項目）で今の状態を確認" },
      { path: "/articles/helper-empathy-fatigue", label: "共感疲労とは｜なぜ優しい人ほど消耗するのか" },
      { path: "/articles/why-self-care-doesnt-work", label: "セルフケアが効かない理由｜休んでも回復しない構造" },
    ],
    lineType: "compassion",
    lineMessage: "共感疲労タイプの方向けに、回復の段階ごとの整理をLINEで送っています（無料・読むだけOK）",
  },
  boundary: {
    badge: "抱え込み・境界線タイプ",
    title: "「自分と他者の境界線」が薄くなっている状態",
    summary: "自分の責任とそうでないものの区別が曖昧になり、相手の問題まで引き受けてしまう状態です。",
    cause: "境界線（バウンダリー）の薄さは、意志や性格の問題ではありません。背景には「ワーキングモデル（内的作業モデル）」という、幼少期から繰り返し強化されてきた無意識の前提があります。「断ると嫌われる」「相手に合わせないと関係が壊れる」という感覚が自動的に作動し、境界線を引くことへの強い抵抗を生みます。",
    current: "今は「断れない」「相手の感情まで引き受けてしまう」「自分と相手の責任の区別がつかない」という状態が起きているかもしれません。これが続くと、慢性的な消耗・人間関係の疲れにつながっていきます。",
    nextStep: "まず「断る練習」のような行動レベルではなく、構造の理解から始めるのが順序として正しいです。①4種類の境界線（身体的／感情的／時間的／責任の境界線）のうち、自分はどれが薄いかを見極める、②「これは私の問題か、相手の問題か」と日常的に問い直す習慣を作る、③「断ったら関係が壊れる」という前提が本当に正しいか、小さな場面で検証してみる、の3つです。",
    relatedArticles: [
      { path: "/articles/boundary-check", label: "境界線チェック（15項目）で今の状態を確認" },
      { path: "/articles/boundary-what", label: "境界線とは｜バウンダリーの基本と4つの種類" },
      { path: "/articles/working-model", label: "ワーキングモデルとは｜断れない構造の根本原因" },
    ],
    lineType: "boundary",
    lineMessage: "抱え込みタイプの方向けに、境界線の整理をLINEで段階的に送っています（無料・読むだけOK）",
  },
  "other-axis": {
    badge: "他人軸・自己喪失タイプ",
    title: "自分の判断基準が外側にある状態",
    summary: "自分の感覚や本音より、相手の反応や評価が判断の軸になっている状態です。",
    cause: "他人軸の状態は「気が利く」「優しい」と評価されるため、表面的には問題に見えにくいのが特徴です。背景には、幼少期に「自分の感情より、相手の感情を読むこと」が生存戦略として強化されてきた歴史があります。これは個人の性格ではなく、適応のために身につけた無意識のパターンです。",
    current: "今は「人に合わせすぎて自分の本音が見えない」「相手の機嫌で自分の気分が決まる」という状態かもしれません。「自分軸を持とう」と言われても動けないのは意志の問題ではなく、まだ自分の感覚へのアクセスが回復していないからです。",
    nextStep: "他人軸からの回復は、行動を変えるより先に「自分の身体感覚に気づく」ことから始まります。①一日に何度か「今、自分は何を感じているか」を身体感覚レベルで確認する、②「相手はどう思うか」より先に「自分はどうしたいか」と問う順序を意識する、③小さなことで「自分の選択をする」練習（昼食を自分で選ぶなど）から始める、の3つです。",
    relatedArticles: [
      { path: "/articles/other-axis-check", label: "他人軸チェック（15項目）で今の状態を確認" },
      { path: "/articles/other-axis-what", label: "他人軸とは｜抜け出せない理由と原因" },
      { path: "/articles/body-sensation-unknown", label: "身体感覚がわからない｜他人軸から抜ける入口" },
    ],
    lineType: "other-axis",
    lineMessage: "他人軸タイプの方向けに、自分軸を取り戻す段階別ガイドをLINEで送っています（無料・読むだけOK）",
  },
  impostor: {
    badge: "インポスター・自己否定タイプ",
    title: "「自分には実力がない」と感じ続けている状態",
    summary: "客観的にできているのに「いつかバレる」「過大評価されている」と感じる状態です。",
    cause: "インポスター症候群（impostor syndrome）は1978年に心理学者ポーリン・クランスらが提唱した概念です。背景には「役割依存」「自己複雑性の低下」「他人軸」という3つの構造があります。能力が高い人ほど起こりやすいのが特徴です。",
    current: "今は「いつかバレる」「成功しても運が良かっただけ」という感覚が出ている状態かもしれません。この感覚は自信の問題ではなく、「自己価値の置き場所」が役割や評価に偏っていることから来ています。さらに頑張ろうとしても解決しません。",
    nextStep: "「自信をつけよう」という方向ではなく、「自己複雑性を増やす」方向が本質的です。①支援者としての自分以外の自己側面（趣味・関係性・身体感覚など）を意識的に増やす、②「役立てない自分」にも価値があるという感覚を小さな場面で体験する、③「成功は実力ではない」という解釈パターンに気づいたら「もう一つの解釈」を並べる練習をする、の3つです。",
    relatedArticles: [
      { path: "/articles/impostor-check-20", label: "インポスター症候群チェック（20項目）で今の状態を確認" },
      { path: "/articles/impostor-syndrome", label: "インポスター症候群とは｜構造から理解する" },
      { path: "/articles/self-complexity", label: "自己複雑性とは｜役割に自己が集中すると何が起きるか" },
    ],
    lineType: "impostor",
    lineMessage: "インポスタータイプの方向けに、自己価値の置き場所を整える段階別ガイドをLINEで送っています（無料・読むだけOK）",
  },
  quit: {
    badge: "辞めたい・限界タイプ",
    title: "「もう続けられないかもしれない」と感じている状態",
    summary: "仕事を辞めたい・休みたいという気持ちが強くなっている状態です。",
    cause: "「辞めたい」という気持ちが強くなるのは、意志の弱さではなく消耗が限界に近づいているサインです。背景には、長期間続いた共感疲労・抱え込み・自己否定の積み重ねがあります。「辞めるのは逃げ」「次がない」という思いが重なり、辞めたいのに辞められない状態に入ります。",
    current: "今は「判断が難しい状態」にあると考えるのが現実的です。極度の消耗状態では、辞めても辞めなくても後悔しやすいため、まず消耗を緩和することが優先順位として上です。",
    nextStep: "「辞めるかどうか」より先に、3つの判断軸を整理することが有効です。①今は「判断できる状態」にあるか（極度の疲労時には判断しない）、②辞めたい理由は「仕事そのもの」か「今の状態」か、③辞めた後の現実的な選択肢があるか。休職・転職・継続の3つを並列の選択肢として置いてみてください。",
    relatedArticles: [
      { path: "/articles/quit-job-timing", label: "仕事を辞めるタイミングがわからない｜限界サインと判断の軸" },
      { path: "/articles/quit-job-fear-retention", label: "辞めるのが怖い｜次がないという不安の正体" },
      { path: "/articles/quit-job-counseling", label: "辞めたいときのカウンセリング活用法" },
    ],
    lineType: "quit",
    lineMessage: "辞めたいタイプの方向けに、判断の段階別ガイドをLINEで送っています（無料・読むだけOK）",
  },
  complex: {
    badge: "複合タイプ",
    title: "複数の状態が重なっている状態",
    summary: "複数の要素（消耗・抱え込み・自己否定など）が重なって絡み合っている状態です。",
    cause: "複数の状態が重なっているとき、「どこから手をつけていいかわからない」という感覚になりがちです。共感疲労が他人軸を強化し、他人軸が抱え込みを生み、抱え込みが自己否定を深める、というように、それぞれが互いを強化し合います。",
    current: "今は「あれもこれもしんどい」「何が一番つらいのかわからない」という状態かもしれません。複合的な状態の人ほど、外から構造を整理してもらうことで一気に楽になることが多い段階です。",
    nextStep: "一人で全部解決しようとしないのが、複合タイプの最も現実的な打ち手です。①最もつらい一つの要素だけを特定して、そこから取り組む、②信頼できる第三者と一緒に状態を言語化する、③「全部解決しなくていい」「順番に整理していい」と自分に許可を出す、の3つです。",
    relatedArticles: [
      { path: "/articles/why-support-workers-lose-themselves", label: "なぜ支援職は自分を見失うのか（総合ピラー）" },
      { path: "/articles/why-self-care-doesnt-work", label: "セルフケアが効かない理由｜休んでも回復しない構造" },
      { path: "/articles/not-enough-for-counseling", label: "「カウンセリングするほどじゃない」と感じる方へ" },
    ],
    lineType: "complex",
    lineMessage: "複数の状態が重なっている方向けに、整理の順序のガイドをLINEで送っています（無料・読むだけOK）",
  },
};

function determineType(checkedItems: CheckItem[]): StateType {
  const scores: Record<StateType, number> = {
    compassion: 0, boundary: 0, "other-axis": 0,
    impostor: 0, quit: 0, complex: 0,
  };
  for (const item of checkedItems) {
    for (const [type, weight] of Object.entries(item.weights)) {
      scores[type as StateType] += weight ?? 0;
    }
  }
  const sorted = (Object.entries(scores) as [StateType, number][])
    .filter(([t]) => t !== "complex")
    .sort((a, b) => b[1] - a[1]);
  const [first, second] = sorted;
  if (checkedItems.length >= 8 && first[1] - second[1] <= 2) return "complex";
  return first[0];
}

export default function AIAssistant() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [freeText, setFreeText] = useState("");
  const [analyzed, setAnalyzed] = useState(false);
  const [result, setResult] = useState<TypeResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const toggleCheck = (key: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  const analyze = () => {
    if (checked.size === 0) return;
    setIsAnalyzing(true);
    try {
      gtag("event", "ai_assistant_analyze", {
        check_count: checked.size,
        has_free_text: freeText.trim().length > 0,
      });
    } catch (_) { /* noop */ }

    const checkedItems: CheckItem[] = [];
    for (const cat of CATEGORIES) {
      for (let i = 0; i < cat.items.length; i++) {
        if (checked.has(`${cat.id}-${i}`)) checkedItems.push(cat.items[i]);
      }
    }
    setTimeout(() => {
      const type = determineType(checkedItems);
      setResult(TYPE_RESULTS[type]);
      setAnalyzed(true);
      setIsAnalyzing(false);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }, 1500);
  };

  const reset = () => {
    setChecked(new Set()); setFreeText(""); setAnalyzed(false); setResult(null);
  };

  const totalChecked = checked.size;
  const lineUrl = result ? `${LINE_BASE}?type=${result.lineType}` : LINE_BASE;

  return (
    <>
      <Helmet>
        <title>AI構造整理アシスタント｜今の状態をAIが3点セットで整理｜こころの相談室 いしずえ</title>
        <meta name="description" content="「何がしんどいか言葉にできない」あなたへ。チェック+自由記述から、今の状態の原因・現状・次の一歩を整理します。完全無料・登録不要・会話内容は保存されません。公認心理師・松本龍児監修。" />
        <link rel="canonical" href="https://www.ishizue-counseling.jp/ai-assistant" />
      </Helmet>

      <div className="bg-white min-h-screen">

        {/* HERO */}
        <section className="relative bg-[#1A110A] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/50 to-stone-950" />
          <div className="absolute right-0 top-0 w-64 h-64 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #fbbf24 0%, transparent 70%)" }} />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-5">
              <motion.div variants={fadeUp} className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-amber-200">AI Assistant ｜ β版</span>
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-3">
                <h1 className="text-2xl md:text-3xl font-light text-white tracking-wide leading-[1.5]" style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}>
                  「何がしんどいか、言葉にできない」あなたへ
                </h1>
                <p className="text-stone-300 text-sm md:text-base leading-[2]">
                  今の状態をいくつかの項目から選ぶだけで、<br className="hidden md:block" />
                  <strong className="text-amber-100">原因 ／ 現状 ／ 次の一歩</strong>の3点に整理します。
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
                {[
                  { icon: Lock, text: "会話内容は保存されません" },
                  { icon: Sparkles, text: "完全無料・登録不要" },
                  { icon: Compass, text: "公認心理師の臨床知見から作成" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] text-stone-300" style={{ background: `${SAGE}15`, border: `1px solid ${SAGE}30` }}>
                      <Icon className="w-3 h-3" style={{ color: SAGE }} />{item.text}
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* メインコンテンツ */}
        <section className="py-8 md:py-12 px-5 md:px-6">
          <div className="max-w-2xl mx-auto">

            {!analyzed && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl border border-stone-200 bg-stone-50"
              >
                <p className="text-xs font-medium text-stone-700 mb-2">使い方</p>
                <ol className="space-y-1.5 text-xs text-stone-600 leading-relaxed">
                  <li>① 6つのカテゴリから、今当てはまるものをタップ（複数選択可）</li>
                  <li>② 任意で、自由記述に状況を追記（空欄でもOK）</li>
                  <li>③ 「分析する」をタップすると、3点セットで整理されます</li>
                </ol>
              </motion.div>
            )}

            {!analyzed && (
              <div className="space-y-6 mb-6">
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} className="space-y-2">
                    <div>
                      <h2 className="text-sm font-medium text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>{cat.label}</h2>
                      <p className="text-[11px] text-stone-400 mt-0.5">{cat.description}</p>
                    </div>
                    <div className="space-y-1.5">
                      {cat.items.map((item, i) => {
                        const key = `${cat.id}-${i}`;
                        const isChecked = checked.has(key);
                        return (
                          <button key={key} onClick={() => toggleCheck(key)} type="button"
                            className={`w-full flex items-start gap-3 p-3 rounded-xl border text-left transition-all ${isChecked ? "bg-stone-50 border-stone-300" : "bg-white border-stone-100 hover:border-stone-200"}`}
                          >
                            <div className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${isChecked ? "border-stone-600 bg-stone-700" : "border-stone-200"}`}>
                              {isChecked && (
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                            </div>
                            <p className={`text-sm leading-[1.7] ${isChecked ? "text-stone-800" : "text-stone-500"}`}>{item.text}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <div className="space-y-2 pt-2">
                  <div>
                    <h2 className="text-sm font-medium text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>もう少し詳しく（任意）</h2>
                    <p className="text-[11px] text-stone-400 mt-0.5">今の状況や気持ちを自由に書いてください。空欄でも大丈夫です。</p>
                  </div>
                  <textarea
                    value={freeText}
                    onChange={(e) => setFreeText(e.target.value)}
                    placeholder="例：利用者の対応が頭から離れず、休日も気が休まらない。同僚にも本音を言えず…"
                    rows={4}
                    className="w-full p-3 rounded-xl border border-stone-200 text-sm text-stone-700 placeholder-stone-300 bg-white focus:outline-none focus:border-stone-400 transition-colors leading-relaxed"
                    maxLength={500}
                  />
                  <p className="text-[10px] text-stone-300 text-right">{freeText.length} / 500</p>
                </div>

                <div className="pt-2">
                  <button onClick={analyze} disabled={totalChecked === 0 || isAnalyzing} type="button"
                    className={`w-full py-3.5 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${totalChecked === 0 || isAnalyzing ? "bg-stone-200 text-stone-400 cursor-not-allowed" : "text-white shadow-md"}`}
                    style={totalChecked > 0 && !isAnalyzing ? { background: "#2C1F14" } : {}}
                  >
                    {isAnalyzing ? (
                      <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />構造を整理しています...</>
                    ) : totalChecked === 0 ? "項目を選んでください" : (
                      <><Sparkles className="w-4 h-4" />{totalChecked}項目から分析する</>
                    )}
                  </button>
                  {totalChecked > 0 && !isAnalyzing && (
                    <p className="text-[10px] text-stone-400 text-center mt-2">※ 個人情報・会話内容は一切保存されません</p>
                  )}
                </div>
              </div>
            )}

            {analyzed && result && (
              <motion.div ref={resultRef} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                {/* 結果ヘッダー */}
                <div className="p-5 rounded-2xl text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2C1F14 0%, #3D2B1F 100%)" }}>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-amber-200" />
                      <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-amber-200">分析結果</span>
                    </div>
                    <p className="text-xs text-amber-100 mb-1.5 font-medium">{result.badge}</p>
                    <p className="text-lg font-light leading-[1.6]" style={{ fontFamily: "'Noto Serif JP', serif" }}>{result.title}</p>
                    <p className="text-stone-300 text-xs leading-relaxed mt-3">{result.summary}</p>
                  </div>
                  <div className="absolute right-0 top-0 w-32 h-32 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #fbbf24 0%, transparent 70%)" }} />
                </div>

                {/* 3点セット */}
                <div className="space-y-3">
                  <div className="p-5 rounded-2xl border border-stone-200 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: SAGE }}>①</span>
                      <h3 className="text-sm font-medium text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>原因｜なぜこうなっているか</h3>
                    </div>
                    <p className="text-sm text-stone-600 leading-[1.95]">{result.cause}</p>
                  </div>
                  <div className="p-5 rounded-2xl border border-stone-200 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: SAGE }}>②</span>
                      <h3 className="text-sm font-medium text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>現状｜今どんな状態か</h3>
                    </div>
                    <p className="text-sm text-stone-600 leading-[1.95]">{result.current}</p>
                  </div>
                  <div className="p-5 rounded-2xl border" style={{ background: `${SAGE}07`, borderColor: `${SAGE}40` }}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: SAGE }}>③</span>
                      <h3 className="text-sm font-medium text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>次の一歩｜具体的に何ができるか</h3>
                    </div>
                    <p className="text-sm text-stone-700 leading-[1.95]">{result.nextStep}</p>
                  </div>
                </div>

                {freeText.trim().length > 0 && (
                  <div className="p-4 rounded-2xl border border-stone-100 bg-stone-50">
                    <p className="text-[11px] font-medium text-stone-500 mb-1">あなたが書かれた状況について</p>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      「{freeText.length > 100 ? freeText.slice(0, 100) + "..." : freeText}」という状況も、上記の構造の中で起きている可能性があります。
                      具体的な状況を一緒に整理したい場合は、下記のLINEまたは個別相談をご利用ください。
                    </p>
                  </div>
                )}

                {/* LINE誘導 */}
                <div className="p-5 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(6,199,85,0.08) 0%, rgba(143,175,159,0.08) 100%)", border: "1px solid rgba(6,199,85,0.3)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-[#06C755]" />
                    <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-[#06C755]">LINE で続きを受け取る</span>
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>{result.lineMessage}</p>
                  <a href={lineUrl} target="_blank" rel="noopener noreferrer"
                    onClick={() => { try { gtag("event", "ai_assistant_line_click", { type: result.lineType }); } catch (_) { /* noop */ } }}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-bold text-white"
                    style={{ background: "#06C755" }}
                  >
                    <MessageCircle className="w-4 h-4" />LINEで続きを受け取る
                  </a>
                  <p className="text-[10px] text-stone-400 mt-2">読むだけOK ／ 勧誘なし ／ いつでも解除OK</p>
                </div>

                {/* 関連記事 */}
                <div className="p-5 rounded-2xl border border-stone-100 bg-white">
                  <p className="text-xs font-medium text-stone-500 mb-3">この状態について詳しく読む</p>
                  <div className="space-y-2">
                    {result.relatedArticles.map((article) => (
                      <Link key={article.path} to={article.path} className="flex items-start gap-2 group">
                        <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#8FAF9F] mt-1 flex-shrink-0 transition-colors" />
                        <span className="text-sm text-stone-600 group-hover:text-stone-900 group-hover:underline underline-offset-2 transition-colors leading-snug">{article.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {(result.lineType === "complex" || result.lineType === "quit") && (
                  <div className="p-5 rounded-2xl" style={{ background: "linear-gradient(135deg, #F5F7F5 0%, #ffffff 50%, #EFF4F1 100%)", border: "1.5px solid rgba(143,175,159,0.35)" }}>
                    <p className="text-sm font-medium text-stone-800 mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>一人で整理するのが難しいと感じたら</p>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">今の状態は、外から構造を整理してもらうことで早く楽になることが多い段階です。初回相談は無料です。</p>
                    <Link to="/#contact" className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium text-white" style={{ background: "#2C1F14" }}>
                      初回無料で相談する <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <p className="text-[10px] text-stone-400 mt-2">支援職15年・公認心理師 ／ 勧誘なし ／ 1回のみでもOK</p>
                  </div>
                )}

                <div className="pt-2">
                  <button onClick={reset} type="button"
                    className="w-full py-3 rounded-xl border border-stone-200 text-sm text-stone-500 hover:bg-stone-50 transition-all flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />もう一度、最初から
                  </button>
                </div>

                <div className="pt-3">
                  <p className="text-[10px] text-stone-400 leading-relaxed text-center">
                    ※ この分析は診断ではなく、自分の状態を整理するための目安です。<br />
                    医学的・心理学的な判断が必要な場合は専門家への相談をおすすめします。
                  </p>
                </div>
              </motion.div>
            )}

          </div>
        </section>

        <section className="py-10 px-5 md:px-6 bg-stone-50 border-t border-stone-100">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <p className="text-stone-500 text-xs leading-relaxed">
              このアシスタントは、公認心理師の臨床知見をもとに作成された定型分析です。<br />
              AIとの自由対話ではありませんが、構造的な整理に特化しています。
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/articles" className="text-xs text-stone-500 hover:text-stone-800 underline underline-offset-2 transition-colors">心理記事一覧に戻る</Link>
              <Link to="/" className="text-xs text-stone-500 hover:text-stone-800 underline underline-offset-2 transition-colors">トップページへ</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
