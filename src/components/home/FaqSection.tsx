import { motion } from "motion/react";
import { CtaButton, stagger, fadeUp } from "./homeShared";
import { faqItems } from "./homeData";

export default function FaqSection() {
  return (
    <section className="py-16 md:py-20 px-5 md:px-6 bg-stone-50">
      <div className="max-w-2xl mx-auto space-y-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-2 mb-6">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#8FAF9F] font-medium">FAQ</span>
          <h2 className="text-xl font-light text-stone-800 tracking-wide" style={{ fontFamily: "'Noto Serif JP', serif" }}>申し込む前の、よくあるご不安</h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-2.5">
          {faqItems.map(({ q, a, emphasis }) => (
            <motion.div key={q} variants={fadeUp}>
              <details className={`group rounded-2xl border overflow-hidden ${emphasis ? "bg-[#8FAF9F]/5 border-[#8FAF9F]/20" : "bg-white border-stone-100"}`}>
                <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none text-stone-700 text-sm font-medium hover:bg-stone-50 transition-colors">
                  <span className={`leading-snug ${emphasis ? "text-stone-800" : ""}`}>{q}</span>
                  <span className="text-stone-300 group-open:rotate-45 transition-transform duration-200 text-xl flex-shrink-0 leading-none">+</span>
                </summary>
                <div className="px-5 pb-5 pt-2 text-stone-500 text-sm leading-[1.9] border-t border-stone-100">{a}</div>
              </details>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-4">
          <CtaButton label="不安が解消されたら、話してみてください" sub="フォームを送った後もキャンセル可 ／ 1回のみでもOK" />
        </motion.div>
      </div>
    </section>
  );
}
