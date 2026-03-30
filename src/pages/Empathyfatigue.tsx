/**
 * EmpathyFatigue.tsx
 * 共感疲労専用ランディングページ
 * URL: /empathy-fatigue
 */

import { useCallback } from "react"
import { motion, type Variants } from "motion/react"
import { Link, useNavigate } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Helmet } from "react-helmet-async"

const SAGE = "#8FAF9F"

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}

function scrollToContact(navigate: ReturnType<typeof useNavigate>) {
  navigate("/")
  const timeout = window.setTimeout(() => observer.disconnect(), 2000)
  const observer = new MutationObserver(() => {
    const el = document.getElementById("contact")
    if (el) { el.scrollIntoView({ behavior: "smooth" }); observer.disconnect(); clearTimeout(timeout) }
  })
  observer.observe(document.body, { childList: true, subtree: true })
}

const symptoms = [
  { label: "頭が休まらない",            detail: "仕事が終わっても利用者のことが頭から離れない。夜も考え続けてしまう。" },
  { label: "感情が動かなくなった",       detail: "以前は感じていたやりがいが薄れた。利用者の話を聞いても何も感じない。" },
  { label: "以前より疲れが抜けにくい",   detail: "休んでも休んだ気がしない。慢性的なだるさが続いている。" },
  { label: "イライラしやすくなった",     detail: "小さなことで感情が乱れる。自分でも理由がわからない。" },
  { label: "断ることへの罪悪感",         detail: "頼まれると断れない。断ったときの罪悪感が強い。" },
  { label: "誰にも相談できない",         detail: "同僚には弱みを見せられない。家族に話しても伝わらない。" },
]

const voices = [
  {
    role: "社会福祉士・30代",
    text: "整理してみたら、利用者の感情を全部自分が引き受けていたとわかった。「私が弱いんじゃなかった」と初めて思えました。",
  },
  {
    role: "介護福祉士・40代",
    text: "1回のセッションで「共感疲労」という言葉がぴったりはまった。名前がついただけで、少し楽になりました。",
  },
]

export default function EmpathyFatigue() {
  const navigate = useNavigate()

  const handleCV = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    scrollToContact(navigate)
  }, [navigate])

  return (
    <>
      <Helmet>
        <title>共感疲労とは｜支援職のための専門カウンセリング｜こころの相談室 いしずえ</title>
        <meta
          name="description"
          content="介護・福祉・医療・教育職に多い共感疲労（Compassion Fatigue）。「頭が休まらない」「感情が動かない」…それは弱さではなく、真剣に向き合ってきた証です。公認心理師による支援職専門カウンセリング。初回無料。"
        />
        <link rel="canonical" href="https://ishizue-site-ker9.vercel.app/empathy-fatigue" />
      </Helmet>

      <div className="bg-white min-h-screen">

        {/* ================================================================
            HERO
        ================================================================ */}
        <section className="relative bg-stone-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950" />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">

              <motion.div variants={fadeUp}>
                <span className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: SAGE }}>
                  Compassion Fatigue
                </span>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-4">
                <h1
                  className="text-2xl md:text-4xl font-light text-white tracking-wide leading-[1.6]"
                  style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}
                >
                  「仕事が終わっても頭が休まらない」<br />
                  <span className="text-stone-300">それは、共感疲労かもしれません。</span>
                </h1>
                <p className="text-stone-400 text-sm md:text-base leading-[2] max-w-xl">
                  支援職として真剣に向き合ってきたからこそ起こる消耗です。
                  あなたが弱いからではありません。
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/#contact"
                  onClick={handleCV}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-stone-900 text-sm font-medium tracking-[0.06em] rounded-full hover:bg-stone-100 transition-all shadow-lg"
                >
                  今の状態を整理する（初回無料）
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <Link
                  to="/articles/helper-empathy-check"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white/80 text-sm rounded-full hover:bg-white/10 transition-all"
                >
                  セルフチェックをする
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
                {["公認心理師", "障害福祉15年", "初回無料", "オンライン対応"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1 rounded-full border border-white/15 text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ================================================================
            症状チェック
        ================================================================ */}
        <section className="py-16 md:py-20 px-5 md:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-10">

              <motion.div variants={fadeUp} className="space-y-3">
                <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: SAGE }}>
                  こんな症状はありませんか
                </span>
                <h2
                  className="text-xl md:text-2xl font-light text-stone-900 leading-[1.7]"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  支援職ほど、自分の消耗に<br className="hidden md:block" />気づきにくい。
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {symptoms.map((s) => (
                  <motion.div
                    key={s.label}
                    variants={fadeUp}
                    className="p-5 rounded-2xl border border-stone-100 bg-stone-50 hover:border-stone-200 transition-all"
                  >
                    <p className="font-medium text-stone-800 text-sm mb-1.5">{s.label}</p>
                    <p className="text-stone-500 text-xs leading-relaxed">{s.detail}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-stone-900 text-center space-y-4">
                <p
                  className="text-stone-100 text-base md:text-lg font-light leading-[1.9]"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  それは、あなたが弱いからではありません。<br />
                  <span className="text-stone-300">支援職という構造が、消耗を生み出しているのです。</span>
                </p>
                <a
                  href="/#contact"
                  onClick={handleCV}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-stone-900 text-sm font-medium rounded-full hover:bg-stone-100 transition-all group"
                >
                  構造を整理してみる（初回無料）
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ================================================================
            共感疲労とは
        ================================================================ */}
        <section className="py-16 md:py-20 px-5 md:px-6 bg-stone-50">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">

              <motion.div variants={fadeUp} className="space-y-3">
                <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: SAGE }}>
                  What is Compassion Fatigue
                </span>
                <h2
                  className="text-xl md:text-2xl font-light text-stone-900 leading-[1.7]"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  共感疲労とは何か
                </h2>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-5 text-stone-600 text-sm md:text-base leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                <p>
                  共感疲労（Compassion Fatigue）とは、他者の苦しみや痛みに共感し続けることで生じる
                  心理的・身体的な消耗状態です。介護・福祉・医療・教育など、
                  対人援助を職業とする人に特に起こりやすいとされています。
                </p>
                <div
                  className="border-l-2 pl-5 py-1 text-stone-700"
                  style={{ borderColor: SAGE }}
                >
                  <p className="font-medium">
                    「燃え尽き症候群」との違いは、<br />
                    利用者への共感そのものが消耗の源になっている点です。
                  </p>
                </div>
                <p>
                  真剣に利用者と向き合い、感情を尽くして支援してきたからこそ起こります。
                  意志の弱さや能力の問題ではありません。
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="bg-white rounded-2xl border border-stone-100 p-6 space-y-4">
                  <p className="text-xs tracking-[0.2em] uppercase text-stone-400 font-medium">共感疲労が起こる構造</p>
                  <div className="space-y-3">
                    {[
                      "利用者の苦しみを自分のこととして引き受ける",
                      "感情労働による継続的な消耗",
                      "境界線（バウンダリー）が曖昧になりやすい職場環境",
                      "「弱音を言えない」という無言のプレッシャー",
                      "自分のケアを後回しにする習慣",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: SAGE }} />
                        <p className="text-stone-600 text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ================================================================
            声
        ================================================================ */}
        <section className="py-16 md:py-20 px-5 md:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">

              <motion.div variants={fadeUp}>
                <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: SAGE }}>
                  Voices
                </span>
                <h2
                  className="text-xl md:text-2xl font-light text-stone-900 leading-[1.7] mt-2"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  相談された方の声
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {voices.map((v) => (
                  <motion.div
                    key={v.role}
                    variants={fadeUp}
                    className="bg-stone-50 border border-stone-100 rounded-2xl p-5 space-y-3"
                  >
                    <div className="text-stone-300 opacity-60">
                      <svg width="18" height="14" viewBox="0 0 24 18" fill="currentColor" aria-hidden="true">
                        <path d="M0 18V11.5C0 8.167 .833 5.417 2.5 3.25 4.167 1.083 6.5 0 9.5 0L10.5 1.5C8.833 1.833 7.458 2.625 6.375 3.875 5.292 5.125 4.75 6.5 4.75 8H9V18H0ZM14 18V11.5C14 8.167 14.833 5.417 16.5 3.25 18.167 1.083 20.5 0 23.5 0L24.5 1.5C22.833 1.833 21.458 2.625 20.375 3.875 19.292 5.125 18.75 6.5 18.75 8H23V18H14Z" />
                      </svg>
                    </div>
                    <p
                      className="text-stone-700 text-sm leading-[1.9]"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {v.text}
                    </p>
                    <p className="text-stone-400 text-xs">{v.role}</p>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </section>

        {/* ================================================================
            CTA
        ================================================================ */}
        <section className="py-16 md:py-20 px-5 md:px-6 bg-stone-50 border-t border-stone-100">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-xl mx-auto text-center space-y-6"
          >
            <motion.div variants={fadeUp} className="space-y-3">
              <p
                className="text-stone-800 text-lg md:text-xl font-light leading-[1.9]"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                「相談するほどじゃないかも」<br />
                <span style={{ color: SAGE }}>その感覚自体が、共感疲労のサインです。</span>
              </p>
              <p className="text-stone-500 text-sm leading-relaxed">
                言葉にならなくていい。うまく話せなくていい。<br />
                「なんとなくしんどい」だけで、十分です。
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-3">
              <a
                href="/#contact"
                onClick={handleCV}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-stone-900 text-stone-50 text-sm font-medium tracking-[0.08em] rounded-full hover:bg-stone-800 transition-all shadow-md"
              >
                松本に、今の状態を整理してもらう（初回無料）
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-stone-400 text-xs">
                公認心理師・支援職専門 ／ 勧誘なし ／ 1回のみでもOK
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-2 space-y-2">
              <p className="text-stone-400 text-xs">まずセルフチェックから始めたい方はこちら</p>
              <Link
                to="/articles/helper-empathy-check"
                className="inline-flex items-center gap-1.5 text-sm underline underline-offset-2 transition-colors text-stone-500 hover:text-stone-800"
              >
                共感疲労セルフチェック（20項目）
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

          </motion.div>
        </section>

      </div>
    </>
  )
}
