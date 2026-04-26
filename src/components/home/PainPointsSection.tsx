import { motion } from "motion/react";
import { stagger, fadeUp, ExpandableCard, CtaButton } from "./homeShared";
import { painPoints } from "./homeData";

export default function PainPointsSection() {
  return (
    <section id="services" className="py-16 md:py-24 px-5 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-10 md:space-y-14">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.div variants={fadeUp} className="space-y-3 max-w-xl">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8FAF9F] font-medium">あなたの話ではないですか</span>
            <h2 className="text-xl md:text-3xl font-light text-stone-900 leading-[1.65] tracking-wide" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              支援職ほど、<br /><span className="text-stone-500">自分の消耗に一番気づきにくい。</span>
            </h2>
            <p className="hidden md:block text-stone-400 text-sm italic leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              なぜこんなに疲れているのか、わからないまま今日も出勤した。
            </p>
            <p className="hidden md:block text-stone-500 text-sm leading-[1.9]">
              他者の痛みに寄り添うことが仕事だからこそ、自分自身の疲れは「たいしたことない」と後回しにしてしまう。
            </p>
            <p className="md:hidden text-stone-400 text-xs leading-[1.8]">当てはまるものをタップして確認してみてください。</p>
          </motion.div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
          {painPoints.map((item) => <ExpandableCard key={item.feeling} {...item} />)}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="p-6 md:p-8 rounded-2xl bg-[#2C1F14] space-y-5">
            <p className="text-stone-100 text-base md:text-xl font-light leading-[1.9] text-center" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              それは、あなたが弱いからではありません。
            </p>
            <p className="text-stone-400 text-sm leading-[1.9] text-center">
              支援職という役割の構造が、消耗を生み出しているのです。構造がわかれば、変えられます。
            </p>
            <div className="pt-3 border-t border-stone-800">
              <CtaButton label="今の状態を整理してみる（初回無料）" sub="まとまっていなくても大丈夫です" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
