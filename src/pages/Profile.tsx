import { motion } from "motion/react";
import AudioPlayer from "../components/AudioPlayer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Profile() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-serif text-[#3c3c3c]">
      <main className="max-w-3xl mx-auto px-6 py-20">

        {/* ── ヘッダー ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-stone-400 uppercase mb-6">Profile</p>

          {/* 写真 */}
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md mb-8">
            <img
              src="/profile.jpg"
              alt="松本 龍児 近影"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-light mb-2 tracking-wider">松本 龍児</h1>
          <p className="text-stone-500 text-sm md:text-base tracking-wide mb-6">
            公認心理師｜構造整理型カウンセラー／支援者支援専門
          </p>

          {/* 実績バッジ */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["障害福祉15年", "累計300名以上", "6,000時間以上"].map((badge) => (
              <span
                key={badge}
                className="px-4 py-1.5 bg-stone-100 text-stone-600 text-xs rounded-full tracking-wide"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── 音声プレイヤー ── */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mb-16">
          <AudioPlayer src="/audio/Profile.mp3" />
        </motion.div>

        {/* ── ストーリー ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="mb-16 space-y-6 text-lg leading-relaxed"
        >
          <p>
            15年間、障害福祉の現場で支援者として働いてきました。
            300名以上、6,000時間を超える支援の中で、ずっと気になっていたことがあります。
          </p>
          <blockquote className="border-l-4 border-stone-300 pl-6 py-1 text-xl font-medium text-stone-900">
            支援者自身が、誰にも頼れていない。
          </blockquote>
          <p>
            責任を抱え、感情を押し込め、疲弊しながらも「自分が弱いから」と思い込んでいる人を、
            何度も見てきました。それは弱さではなく、構造の問題です。
          </p>
          <p>
            この相談室は、支援する人が安心して立ち止まれる場所として作りました。
            公認心理師として、CBT・ACT・MIなどを用いながら、
            あなたの思考・役割・感情を一緒に整理します。
          </p>
        </motion.section>

        {/* ── 主な相談テーマ ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="mb-16"
        >
          <h2 className="text-2xl mb-8 font-medium tracking-wider">主な相談テーマ</h2>
          <ul className="space-y-3">
            {[
              "支援職の燃え尽き（バーンアウト）",
              "感情労働による疲労",
              "支援者の境界線（バウンダリー）",
              "二次受傷（支援者のトラウマ）",
              "対人援助職のストレス・消耗",
              "役割過剰・責任の抱え込み",
              "不安・抑うつ傾向・対人関係の悩み",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4 text-lg text-stone-700">
                <span className="w-1.5 h-1.5 bg-stone-300 rounded-full shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* ── カウンセリング姿勢 ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
          className="mb-16 space-y-6 text-lg leading-relaxed"
        >
          <h2 className="text-2xl mb-4 font-medium tracking-wider">カウンセリングで大切にしていること</h2>
          <p>
            感情の共感だけで終わらせません。思考の癖、役割過多、責任の抱え込み、
            期待とのズレなどを整理し、「消耗を減らす設計」に立ち戻る支援を行っています。
          </p>
          <div className="bg-stone-50 border border-stone-100 rounded-2xl p-6 md:p-8 space-y-2 text-base text-stone-600">
            <p className="font-medium text-stone-800 mb-3">支援の理論的背景</p>
            <p>BPSモデル・トラウマインフォームドケアを基盤に、個人責任化を避けた視点を大切にしています。</p>
            <p>CBT・ACT・動機づけ面接（MI）を統合的に用い、感情と認知を整理しながら不快感情を排除せずに扱います。</p>
            <p>セルフ・コンパッションを促し、相談者の決定権を尊重する姿勢を一貫して重視しています。</p>
          </div>
          <p>
            「うまく話せないかもしれない」という状態でも大丈夫です。
            安心して話せる時間を、一緒に作っていきます。
          </p>
        </motion.section>

        {/* ── 資格・経歴 ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={5}
          className="mb-16"
        >
          <h2 className="text-2xl mb-8 font-medium tracking-wider">資格・経歴</h2>
          <ul className="space-y-4">
            {[
              { label: "資格", value: "公認心理師" },
              { label: "経験年数", value: "障害福祉分野での相談支援業務　15年" },
              { label: "支援実績", value: "個別カウンセリング　累計300名以上／6,000時間以上" },
              { label: "活動領域", value: "医療・福祉・教育領域での実務経験" },
            ].map((row) => (
              <li key={row.label} className="grid grid-cols-[96px_1fr] gap-4 text-sm md:text-base border-b border-stone-100 pb-4">
                <span className="text-stone-400 font-medium shrink-0">{row.label}</span>
                <span className="text-stone-700">{row.value}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* ── 締めコピー ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={6}
          className="text-center py-12 border-t border-stone-100 space-y-4 mb-16"
        >
          <p className="text-stone-500 text-lg">強くなることを目指すのではなく、</p>
          <p className="text-2xl md:text-3xl font-medium text-stone-900">持続可能な状態に戻すこと。</p>
          <p className="text-stone-500 mt-4">支援を続けられる土台を整えることが、私の役割です。</p>
        </motion.div>

        {/* ── CTA ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={7}
          className="text-center"
        >
          <p className="text-lg mb-8 text-stone-600 leading-relaxed">
            一人で抱え込まず、気持ちを整理する場として<br />
            カウンセリングをご利用ください。
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-10 py-4 rounded-full text-sm tracking-[0.2em] hover:bg-stone-800 transition-all shadow-lg"
          >
            相談について問い合わせる
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>

      </main>
    </div>
  );
}
