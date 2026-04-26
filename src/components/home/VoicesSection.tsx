import { useState } from "react";
import { motion } from "motion/react";
import { SectionLabel, stagger, fadeUp, VoiceCard, CtaButton } from "./homeShared";
import { voices } from "./homeData";

function VoicesGrid() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? voices : voices.slice(0, 2);
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visible.map((v) => <VoiceCard key={v.role} v={v} />)}
        <motion.div variants={fadeUp} className="hidden md:flex flex-col items-center justify-center bg-[#2C1F14] rounded-2xl p-6 text-center space-y-4">
          <p className="text-stone-300 text-sm leading-[1.9]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            「相談するほどじゃない」と思っている方ほど、実は一番必要としていることが多いです。
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm text-[#8FAF9F] hover:text-white transition-colors underline underline-offset-4">
            まず話してみる
          </a>
        </motion.div>
      </div>
      {!expanded && (
        <button onClick={() => setExpanded(true)} className="md:hidden w-full py-3 rounded-2xl border border-stone-200 text-stone-500 text-sm flex items-center justify-center gap-2 hover:bg-stone-50 transition-colors">
          残り{voices.length - 2}件の声を見る<span className="text-stone-300">+</span>
        </button>
      )}
    </div>
  );
}

export default function VoicesSection() {
  return (
    <section id="voices" className="py-16 md:py-20 px-5 md:px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="space-y-10">
          <motion.div variants={fadeUp}>
            <SectionLabel en="Voices" ja="相談された方の声" />
            <p className="text-stone-400 text-xs mt-2">※ 掲載にあたりご本人の同意を得ています。個人が特定されないよう一部を変更しています。</p>
          </motion.div>
          <VoicesGrid />
          <motion.div variants={fadeUp} className="text-center space-y-6">
            <p className="text-stone-600 text-sm md:text-base leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              みなさんに共通しているのは、<strong className="text-stone-800">「相談するほどじゃないかも」と思いながら来た</strong>ことです。<br />
              その迷いは、あなただけのものではありません。
            </p>
            <CtaButton label="同じ立場の人が話せた場所で、話してみる" sub="職種・経験年数は問いません ／ 初回無料" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
