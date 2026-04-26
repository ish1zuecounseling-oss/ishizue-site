import { motion } from "motion/react";
import { fadeUp, CtaButton } from "./homeShared";

export default function ClosingSection() {
  return (
    <section className="py-14 px-5 bg-white border-y border-stone-100">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl mx-auto text-center space-y-5">
        <p className="text-stone-800 text-lg md:text-2xl font-light leading-[1.9]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「もう少し耐えれば」と思いながら、<br /><span className="text-[#8FAF9F]">もう何ヶ月経ちましたか？</span>
        </p>
        <p className="text-stone-500 text-sm leading-[1.9]">
          限界まで耐えてから動くより、予兆のうちに整理する方が、ずっと楽です。<br />今日が、そのタイミングかもしれません。
        </p>
        <CtaButton label="今日、話してみる（初回メール無料）" sub="勧誘なし ／ 1回のみでもOK ／ 送った後もキャンセル可" />
      </motion.div>
    </section>
  );
}
