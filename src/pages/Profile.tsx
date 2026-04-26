/**
 * Profile.tsx — いしずえカウンセリング
 * CTAコピー統一・cotree導線追加・FV明示・こんな方強化版
 */

import { type ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, ShieldCheck, BookOpen, Heart, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import AudioPlayer from "../components/AudioPlayer";

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const consultThemes = [
  { icon: <ShieldCheck className="w-4 h-4" />, label: "支援職の燃え尽き（バーンアウト）" },
  { icon: <Heart className="w-4 h-4" />,        label: "感情労働による疲労・二次受傷" },
  { icon: <Users className="w-4 h-4" />,        label: "支援者の境界線（バウンダリー）" },
  { icon: <Minus className="w-3 h-3" />,        label: "役割過剰・責任の抱え込み" },
  { icon: <Minus className="w-3 h-3" />,        label: "対人援助職のストレス・消耗" },
  { icon: <Minus className="w-3 h-3" />,        label: "不安・抑うつ傾向・対人関係の悩み" },
  { icon: <Minus className="w-3 h-3" />,        label: "継続して支援に携わるための土台作り" },
] as const;

const qualifications = [
  { label: "資格",       value: "公認心理師" },
  { label: "経験年数",   value: "障害福祉分野での相談支援業務　15年" },
  { label: "支援実績",   value: "個別カウンセリング　累計300名以上 ／ 6,000時間以上" },
  { label: "活動領域",   value: "医療・福祉・教育領域での実務経験" },
  { label: "理論的背景", value: "CBT・ACT・動機づけ面接（MI）・BPSモデル・トラウマインフォームドケア・セルフコンパッション・SDT" },
] as const;

const approachPoints = [
  {
    title: "感情の共感だけで終わらせない",
    desc:  "思考の癖、役割過多、責任の抱え込みを整理し、「消耗を減らす設計」に立ち戻る支援を行っています。",
  },
  {
    title: "構造として見る",
    desc:  "BPSモデル・トラウマインフォームドケアを基盤に、個人責任化を避けた視点を大切にしています。",
  },
  {
    title: "あなたの決定権を尊重する",
    desc:  "CBT・ACT・動機づけ面接（MI）を統合的に用い、相談者が自分のペースで選択できる支援を一貫して重視しています。",
  },
  {
    title: "うまく話せなくても大丈夫",
    desc:  "整理されていない状態のままで来てください。何が負担なのかを一緒に言葉にすることが、この時間の目的です。",
  },
] as const;

function SectionLabel({ en, ja, light = false }: { en: string; ja: string; light?: boolean }) {
  return (
    <div className="space-y-2">
      <span className={`block text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium ${light ? "text-stone-500" : "text-[#8FAF9F]"}`}>
        {en}
      </span>
      <h2
        className={`text-xl md:text-3xl font-light tracking-wide md:tracking-wider leading-snug ${light ? "text-stone-100" : "text-stone-900"}`}
        style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}
      >
        {ja}
      </h2>
    </div>
  );
}

function BlockQuote({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-[#8FAF9F] pl-4 md:pl-6 py-1 text-stone-700">
      {children}
    </div>
  );
}

function SafeImg({ src, alt, className, fallbackBg = "bg-stone-200", ...rest }: React.ImgHTMLAttributes<HTMLImageElement> & { fallbackBg?: string }) {
  return (
    <img
      src={src} alt={alt} className={className}
      onError={(e) => {
        const el = e.currentTarget;
        el.style.display = "none";
        const parent = el.parentElement;
        if (parent) parent.classList.add(fallbackBg);
      }}
      {...rest}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Helmet>
        <title>プロフィール｜松本 龍児（公認心理師）｜こころの相談室 いしずえ</title>
        <meta
          name="description"
          content="障害福祉15年・累計300名以上6,000時間以上の支援経験を持つ公認心理師・松本龍児のプロフィール。支援職の燃え尽きに特化した構造整理型カウンセリング。"
        />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "松本 龍児",
            "alternateName": "まつもと りゅうじ",
            "jobTitle": "公認心理師",
            "description": "障害福祉分野15年・累計300名以上6,000時間以上の支援経験を持つ公認心理師。支援職の燃え尽き・消耗に特化した構造整理型カウンセリングを提供。",
            "url": "https://www.ishizue-counseling.jp/profile",
            "image": "https://www.ishizue-counseling.jp/profile.jpg",
            "sameAs": [
              "https://x.com/ish1zue",
              "https://www.instagram.com/ishizue_counseling/"
            ],
            "worksFor": {
              "@type": "ProfessionalService",
              "name": "こころの相談室 いしずえ",
              "url": "https://www.ishizue-counseling.jp"
            },
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "国家資格",
              "name": "公認心理師"
            }
          }
        `}</script>
      </Helmet>

      <div className="bg-white min-h-screen text-stone-800">

        {/* HERO */}
        <section className="relative bg-[#1A110A] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950" />
          <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-28">
            <motion.div
              initial="hidden" animate="visible" variants={stagger}
              className="flex flex-col md:flex-row md:items-center md:gap-14 lg:gap-20"
            >
              <div className="space-y-5 flex-1 min-w-0">
                <motion.div variants={fadeUp}>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#8FAF9F] font-medium">Profile</span>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-3">
                  {/* ③ FV：誰向けか明示 */}
                  <p className="text-stone-400 text-xs md:text-sm leading-relaxed">
                    休んでも回復しない支援職の方へ
                  </p>
                  <h1
                    className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide leading-[1.4]"
                    style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}
                  >
                    松本 龍児
                  </h1>
                  <p className="text-stone-400 text-sm md:text-base tracking-wide">
                    公認心理師 ／ 構造整理型カウンセラー・支援者支援専門
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                  {["障害福祉15年", "累計300名以上", "6,000時間以上"].map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md text-[11px] tracking-[0.1em] text-white/75"
                    >
                      {b}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-3">
                  <p className="text-stone-300 text-sm md:text-base leading-[2] max-w-lg">
                    支援職という役割の構造が、消耗を生み出しています。<br />
                    感情を吐き出す場所ではなく、<span className="text-stone-100">整理して、持続可能な状態に戻す</span>ための時間を作ること。それがこのカウンセリングです。
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(143,175,159,0.15)", border: "1px solid rgba(143,175,159,0.35)" }}>
                    <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-stone-400">Method</span>
                    <span className="text-sm font-medium text-white" style={{ fontFamily: "'Noto Serif JP', serif" }}>構造整理型カウンセリング</span>
                  </div>
                </motion.div>

                {/* ① CTA統一 */}
                <motion.div variants={fadeUp} className="space-y-2">
                  <Link
                    to="/#contact"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-stone-900 text-sm font-medium tracking-[0.06em] rounded-full hover:bg-stone-100 transition-all shadow-lg"
                  >
                    今の状態を整理してみる（初回無料）
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-stone-500 text-xs">まだ、辞めるかどうか決める必要はありません</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:flex flex-col items-center gap-4 flex-shrink-0 mt-8 md:mt-0"
              >
                <div className="w-52 h-52 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl ring-1 ring-white/10">
                  <SafeImg
                    src="/profile.jpg"
                    alt="松本 龍児 — 公認心理師"
                    className="w-full h-full object-cover object-top"
                    fallbackBg="bg-stone-700"
                    fetchPriority="high"
                  />
                </div>
                <div className="text-center space-y-1">
                  <p className="text-white text-sm font-medium tracking-wider" style={{ fontFamily: "'Noto Serif JP', serif" }}>松本 龍児</p>
                  <p className="text-stone-400 text-xs">公認心理師 ／ 構造整理型カウンセラー</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AUDIO */}
        <section className="py-12 md:py-14 px-5 md:px-6 bg-[#F7F6F3] border-b border-stone-200">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-[#8FAF9F]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-medium">音声で聴く — プロフィール紹介</span>
              </motion.div>
              <motion.div variants={fadeUp}><AudioPlayer src="/audio/Profile.mp3" /></motion.div>
              <motion.p variants={fadeUp} className="text-stone-400 text-xs">※ テキストと同じ内容を音声でお届けしています</motion.p>
            </motion.div>
          </div>
        </section>

        {/* STORY */}
        <section className="py-16 md:py-24 px-5 md:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="space-y-10 md:space-y-14">
              <motion.div variants={fadeUp}>
                <SectionLabel en="Story" ja="なぜ、支援職の支援をしているのか" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <div className="flex flex-col md:grid md:grid-cols-[160px_1fr] gap-8 md:gap-12 items-start">
                  <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
                      <SafeImg src="/profile.jpg" alt="松本 龍児" className="w-full h-full object-cover object-top" loading="lazy" fallbackBg="bg-stone-200" />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-base font-medium text-stone-900 tracking-wider" style={{ fontFamily: "'Noto Serif JP', serif" }}>松本 龍児</p>
                      <p className="text-stone-400 text-xs mt-1">公認心理師</p>
                    </div>
                  </div>
                  <div className="text-stone-600 leading-[2.1] text-sm md:text-base space-y-6" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    <p>15年間、障害福祉の現場で支援者として働いてきました。300名以上、6,000時間を超える支援の中でずっと気になっていたことがあります。</p>
                    <BlockQuote>
                      <p className="text-stone-800 font-medium text-base md:text-lg leading-[1.8]">支援者自身が、誰にも頼れていない。</p>
                    </BlockQuote>
                    <p>責任を抱え、感情を押し込め、疲弊しながらも「自分が弱いから」と思い込んでいる人を、何度も目の前で見てきました。</p>
                    <p>正直に言えば、かつての私自身もそうでした。「支援する側が頼ってはいけない」という無言の圧力を感じながら、気づかないふりをしていた時期があります。支援者が消耗するのは弱さではなく、構造の問題だと気づくまでに、私自身も長い時間がかかりました。</p>
                    <p>それは弱さではなく、<strong className="text-stone-900 font-medium">構造の問題</strong>です。支援職という役割の構造が、消耗を生み出している。そう気づいたとき、私が次にやるべきことが見えました。</p>
                    <div className="pt-4 border-t border-stone-200">
                      <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100">
                        <p className="text-stone-700 text-sm md:text-base leading-[2]">
                          セッション後に多くの方から聞く言葉があります。<br />
                          <strong className="text-stone-900">「なぜしんどいのかが、やっとわかった」</strong><br />
                          原因が見えると、自分を責めるのをやめられます。<br />
                          それが、持続可能な支援者に戻るための最初の一歩です。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* THEMES */}
        <section className="py-16 md:py-24 px-5 md:px-6 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="space-y-10 md:space-y-12">
              <motion.div variants={fadeUp}>
                <SectionLabel en="Themes" ja="主な相談テーマ" />
                <p className="text-stone-500 text-sm mt-3 leading-relaxed">以下に限らず、支援職に携わる方からのご相談はすべてお受けしています。</p>
              </motion.div>
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {consultThemes.map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white border border-stone-100 text-stone-700 text-sm">
                    <span className="text-[#8FAF9F] flex-shrink-0">{icon}</span>
                    {label}
                  </div>
                ))}
              </motion.div>
              {/* ① CTA統一 */}
              <motion.div variants={fadeUp} className="text-center pt-2 space-y-2">
                <Link
                  to="/#contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#2C1F14] text-stone-50 text-sm font-medium tracking-[0.08em] rounded-full hover:bg-[#3D2B1F] transition-all shadow-md"
                >
                  今の状態を整理してみる（初回無料）
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <p className="text-stone-400 text-xs">まだ決めなくていい ／ 1回のみでもOK ／ 勧誘なし</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="py-16 md:py-24 px-5 md:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="space-y-10 md:space-y-12">
              <motion.div variants={fadeUp}>
                <SectionLabel en="Approach" ja="カウンセリングで大切にしていること" />
              </motion.div>
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {approachPoints.map(({ title, desc }) => (
                  <div key={title} className="p-5 md:p-6 rounded-2xl border border-stone-100 bg-stone-50 space-y-2">
                    <p className="text-stone-800 font-medium text-sm md:text-base leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>{title}</p>
                    <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}>
                <div className="p-5 md:p-7 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-medium">理論的背景</p>
                  <div className="flex flex-wrap gap-2">
                    {["BPSモデル","トラウマインフォームドケア","CBT（認知行動療法）","ACT","動機づけ面接（MI）","セルフコンパッション","SDT（自己決定理論）"].map((t) => (
                      <span key={t} className="px-3 py-1 bg-white border border-stone-200 text-stone-600 text-xs rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* QUALIFICATIONS */}
        <section className="py-16 md:py-24 px-5 md:px-6 bg-[#1A110A]">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="space-y-10 md:space-y-12">
              <motion.div variants={fadeUp}>
                <SectionLabel en="Qualifications" ja="資格・経歴" light />
              </motion.div>
              <motion.div variants={fadeUp}>
                <dl className="divide-y divide-stone-800">
                  {qualifications.map(({ label, value }) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:gap-10 py-5">
                      <dt className="text-stone-500 text-xs tracking-[0.15em] uppercase font-medium shrink-0 w-28 mb-1 sm:mb-0 pt-0.5">{label}</dt>
                      <dd className="text-stone-200 text-sm leading-relaxed">{value}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* METHOD */}
        <section className="py-16 md:py-24 px-5 md:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="space-y-10 md:space-y-12">
              <motion.div variants={fadeUp}>
                <SectionLabel en="Method" ja="構造整理型カウンセリングとは" />
                <p className="text-stone-500 text-sm mt-3 leading-relaxed max-w-xl">
                  「話してすっきりした」で終わらない。しんどさの<strong className="text-stone-700 font-medium">原因の構造</strong>を一緒に整理して、消耗を減らす設計に戻すことを目的にしています。
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { step: "01", title: "現状を言語化する",    desc: "何がしんどいのかを整理することから始めます。まとまっていなくても大丈夫です。" },
                  { step: "02", title: "消耗の構造を見る",    desc: "感情労働・共感疲労・バウンダリーの曖昧さなど、消耗を生み出している仕組みを一緒に確認します。" },
                  { step: "03", title: "持続可能な状態に戻す", desc: "強くなることを目指すのではなく、長く続けられる状態に戻すための整理と選択を一緒に行います。" },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="p-5 rounded-2xl border border-stone-100 bg-stone-50 space-y-3">
                    <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#8FAF9F]">{step}</span>
                    <p className="text-stone-800 font-medium text-sm leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>{title}</p>
                    <p className="text-stone-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </motion.div>

              {/* ④ こんな方が来ています — 強化版 */}
              <motion.div variants={fadeUp}>
                <div className="p-5 md:p-7 rounded-2xl border border-stone-200 bg-stone-50 space-y-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-medium">こんな方が来ています</p>
                  <div className="space-y-2">
                    {[
                      "介護職10年目で、初めて「もう無理かも」と感じた方",
                      "休みたいと思っても、周りに言えなかった方",
                      "「支援職なのに情けない」と感じていた方",
                      "仕事はできているのに、内側だけが限界だった方",
                      "「相談するほどじゃないかも」と迷いながら問い合わせてくれた方",
                      "断れない・抱え込みすぎで、誰にも話せなかった方",
                    ].map((text) => (
                      <div key={text} className="flex items-start gap-2.5 text-sm text-stone-600">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#8FAF9F" }} />
                        {text}
                      </div>
                    ))}
                  </div>
                  <p className="text-stone-500 text-xs leading-relaxed border-t border-stone-200 pt-4">
                    整理されていない状態のまま来てください。「何が負担なのか」を一緒に言葉にすることが、この時間の目的です。
                  </p>
                </div>
              </motion.div>

              {/* ② cotree導線 */}
              <motion.div variants={fadeUp}>
                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-medium">いきなり話すのが不安な方へ</p>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    まずは文章で整理したい方は、オンラインカウンセリングサービス「cotree」も選択肢の一つです。<br />
                    自分のペースでやり取りができるため、「まだ話すほどではないかも」と感じている方にも向いています。
                  </p>
                  <a
                    href="https://cotree.jp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-700 underline underline-offset-2 transition-colors"
                  >
                    cotreeでメールカウンセリングを見る →
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="py-16 md:py-20 px-5 md:px-6 bg-white border-t border-stone-100">
          <div className="max-w-xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-xl mx-auto text-center space-y-8">
              <motion.div variants={fadeUp} className="space-y-3">
                <p className="text-stone-800 text-xl md:text-2xl font-light leading-[1.9]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  強くなることを目指すのではなく、<br />
                  <span className="text-[#8FAF9F]">持続可能な状態に戻すこと。</span>
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">支援を続けられる土台を整えることが、私の役割です。</p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <BlockQuote>
                  <p className="text-stone-700 text-sm md:text-base leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    限界まで耐えてから動くより、<br />
                    予兆を感じているうちに整理する方が、ずっと楽です。<br />
                    <span className="text-stone-900 font-medium">今日が、そのタイミングかもしれません。</span>
                  </p>
                </BlockQuote>
              </motion.div>
              {/* ① CTA統一 — クロージング */}
              <motion.div variants={fadeUp} className="space-y-2">
                <Link
                  to="/#contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#2C1F14] text-stone-50 text-sm font-medium tracking-[0.08em] rounded-full hover:bg-[#3D2B1F] transition-all shadow-md"
                >
                  今の状態を整理してみる（初回無料）
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <p className="text-stone-400 text-xs">まだ決めなくていい ／ 1回のみでもOK ／ 勧誘なし ／ 送った後もキャンセル可</p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link to="/" className="text-xs text-stone-400 hover:text-stone-600 transition-colors underline underline-offset-2">
                  ← トップページに戻る
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
