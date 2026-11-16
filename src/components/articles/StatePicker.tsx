import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { articles } from "../../data/articles";

const SAGE = "#8FAF9F";

type StateKey = "fatigue" | "carry" | "quit" | "lost";

type StateDef = {
  key: StateKey;
  name: string;
  desc: string;
  ex: string;
  lead: string;
  text: string;
  paths: string[]; // 先頭3本=いま整える / 後ろ2本=理由を知る
};

// おすすめは実在する記事のみ。1〜3本目は「いま整える」、4〜5本目は「理由を知る」
const STATES: StateDef[] = [
  {
    key: "fatigue",
    name: "疲れ",
    desc: "休んでも抜けない",
    ex: "寝ても頭が休まらない／休日に回復できない／体が重い",
    lead: "まず「整える」ことから。理由探しはそのあとで大丈夫です。",
    text: "休んでも疲れが抜けないのは、休み方が足りないのではなく、回復を妨げるものが残っているからかもしれません。最初の3本で今できることを、残りの2本で理由を整理します。",
    paths: [
      "/articles/helper-status-check",
      "/articles/compassion-fatigue-coping",
      "/articles/helper-rest-types",
      "/articles/brain-fatigue-mechanism",
      "/articles/burnout-not-recovering",
    ],
  },
  {
    key: "carry",
    name: "抱え込み",
    desc: "頼れず、一人で背負ってしまう",
    ex: "相談できない／自分がやらなきゃと思う／断れない",
    lead: "性格の問題というより、抱え込みやすい構造の問題かもしれません。",
    text: "抱え込みは、役割の重なりや、境界線の曖昧さから起きやすくなります。最初の3本で引き方・断り方・頼り方を、残りの2本で構造そのものを見ていきます。",
    paths: [
      "/articles/helper-boundary-how-to",
      "/articles/helper-cannot-say-no",
      "/articles/why-support-workers-cannot-ask-for-help",
      "/articles/helper-carrying-clients",
      "/articles/helper-responsibility-burnout",
    ],
  },
  {
    key: "quit",
    name: "辞めたい",
    desc: "続けるかどうかで迷っている",
    ex: "辞めたいが決めきれない／逃げだと思ってしまう／先が見えない",
    lead: "結論を急がず、まず「何が限界なのか」を分けてみましょう。",
    text: "辞めたい気持ちは、職場そのものへの限界なのか、働き方や役割への限界なのかで、次の一手が変わることがあります。判断の軸をそろえるための5本です。",
    paths: [
      "/articles/helper-want-to-quit-landing",
      "/articles/helper-quit-timing-check",
      "/articles/helper-leave-of-absence-hesitation",
      "/articles/helper-guilt-about-leaving",
      "/articles/quit-job-timing",
    ],
  },
  {
    key: "lost",
    name: "迷い",
    desc: "何がしんどいのか、言葉にできない",
    ex: "モヤモヤする／自分のせいにしてしまう／整理したい",
    lead: "答えを出す前に、いまの状態を整理することから始めます。",
    text: "言葉にできないのは、考えが足りないからではなく、見る枠組みがまだないだけかもしれません。状態を振り返るチェックから、構造で理解する記事へと順に案内します。",
    paths: [
      "/articles/helper-wellbeing-check",
      "/articles/helper-self-blame-landing",
      "/articles/emotion-unknown",
      "/articles/thinking-feeling-gap",
      "/articles/helper-stress-coping",
    ],
  },
];

const clean = (t: string) => t.replace(/【[^】]*】/g, "").trim();

type Props = { onPick?: (state: string) => void; onAiClick?: () => void };

export default function StatePicker({ onPick, onAiClick }: Props) {
  const [current, setCurrent] = useState<StateKey | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const def = STATES.find((s) => s.key === current) ?? null;

  const pick = (key: StateKey) => {
    setCurrent(key);
    onPick?.(key);
    const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }), 50);
  };

  const list = def
    ? def.paths
        .map((p) => articles.find((a) => a.path === p))
        .filter((a): a is NonNullable<typeof a> => !!a)
    : [];

  return (
    <section id="state-picker" className="mb-10 rounded-2xl border border-stone-200 bg-stone-50 p-5 md:p-7" aria-labelledby="state-picker-title">
      <p className="text-[11px] tracking-[0.2em] font-medium" style={{ color: SAGE }}>274本から探さなくて大丈夫です</p>
      <h2 id="state-picker-title" className="text-lg md:text-xl font-medium text-stone-800 mt-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>
        いまの状態から、読む記事を決めましょう
      </h2>
      <p className="text-sm text-stone-500 leading-[1.9] mt-2">
        一番近い状態を1つ選ぶと、読む順番つきで5本だけご案内します。「なんとなく近い」で選んでください。あとから選び直せます。目的が決まっている方は、下の検索からも探せます。
      </p>

      <div className="mt-5">
        <span className="inline-block text-[11px] font-bold tracking-[0.1em] text-white rounded px-2.5 py-0.5" style={{ background: SAGE }}>STEP 1</span>
        <p className="text-base font-medium text-stone-800 mt-1.5">いま、一番近い状態は？</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        {STATES.map((s) => {
          const on = current === s.key;
          return (
            <button
              key={s.key}
              type="button"
              aria-pressed={on}
              onClick={() => pick(s.key)}
              className={`text-left rounded-xl border-2 px-4 py-4 flex flex-col gap-1 min-h-[44px] transition-colors ${on ? "bg-white" : "bg-white hover:border-[#8FAF9F]/60"}`}
              style={{ borderColor: on ? SAGE : "#e7e5e4" }}
            >
              <span className="text-xl font-bold text-stone-800" style={{ fontFamily: "'Noto Serif JP', serif" }}>{s.name}</span>
              <span className="text-sm font-bold text-stone-600">{s.desc}</span>
              <span className="text-xs text-stone-500 leading-relaxed">{s.ex}</span>
              <span className="text-xs font-bold mt-2" style={{ color: SAGE }}>{on ? "この状態で探しています ✓" : "この状態で探す →"}</span>
            </button>
          );
        })}
      </div>

      <div ref={resultRef} className="mt-6 scroll-mt-20" aria-live="polite">
        {!def ? (
          <p className="text-sm text-stone-400 border border-dashed border-stone-300 rounded-xl px-4 py-5 text-center">
            状態を選ぶと、ここにおすすめの5本が出ます。
          </p>
        ) : (
          <div data-track-section="state-picker">
            <span className="inline-block text-[11px] font-bold tracking-[0.1em] text-white rounded px-2.5 py-0.5" style={{ background: SAGE }}>STEP 2</span>
            <p className="text-base font-medium text-stone-800 mt-1.5">あなたへの{list.length}本</p>
            <div className="mt-3 rounded-xl bg-white border border-stone-200 px-4 py-4">
              <p className="text-[11px] tracking-[0.1em] text-stone-500">いまの状態の見方（診断ではありません）</p>
              <p className="text-sm font-medium text-stone-800 leading-[1.8] mt-1">{def.lead}</p>
              <p className="text-sm text-stone-500 leading-[1.9] mt-1">{def.text}</p>
            </div>
            <p className="text-xs text-stone-500 mt-3">1〜3本目:いま整える ／ 4〜5本目:理由を知る　<span className="text-stone-400">全部読まなくて大丈夫です</span></p>
            <ol className="mt-2 space-y-2">
              {list.map((a, i) => (
                <li key={a.path}>
                  <Link to={a.path} className="flex gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3.5 hover:border-[#8FAF9F] transition-colors">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full grid place-items-center text-xs font-bold" style={{ background: `${SAGE}28`, color: "#4a6a5a" }}>{i + 1}</span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-stone-800 leading-snug">{clean(a.title)}</span>
                      <span className="block text-xs text-stone-500 leading-relaxed mt-1 line-clamp-2">{a.description}</span>
                      <span className="inline-block text-[11px] mt-1.5 px-2 py-0.5 rounded-full" style={{ background: `${SAGE}22`, color: "#4a6a5a" }}>{i < 3 ? "いま整える" : "理由を知る"}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
            <div className="mt-4 rounded-xl border border-stone-200 bg-white px-4 py-4">
              <p className="text-sm font-medium text-stone-800">5本でも決めきれないときは、AI整理アシスタントへ</p>
              <p className="text-xs text-stone-500 leading-relaxed mt-1">今の状態を言葉にして、最初に読む1本を絞ります。無料・登録不要。会話内容は保存されません。</p>
              <Link
                to="/ai-assistant"
                onClick={onAiClick}
                className="inline-flex items-center mt-3 min-h-[44px] px-5 rounded-full text-sm font-bold text-white"
                style={{ background: "#2C1F14" }}
              >
                AIで今の状態を整理する（無料）
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
