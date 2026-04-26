import { motion } from "motion/react";
import { SectionLabel, stagger, fadeUp } from "./homeShared";
import { features } from "./homeData";

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="space-y-10 md:space-y-14">
          <motion.div variants={fadeUp}><SectionLabel en="Features" ja="このカウンセリングで変わること" /></motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp}>
                <div className="group relative flex md:block gap-4 p-5 md:p-7 rounded-2xl bg-white border border-stone-100 hover:border-[#8FAF9F]/50 hover:shadow-md transition-all duration-300">
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8FAF9F] to-[#C4B5A5] group-hover:w-full transition-all duration-500 rounded-full" />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 md:mb-4 text-[#8FAF9F]" style={{ background: "rgba(143,175,159,0.1)" }}>{f.icon}</div>
                  <div>
                    <span className="text-[10px] text-[#8FAF9F] font-medium tracking-[0.15em] uppercase mb-1.5 block">{f.benefit}</span>
                    <h3 className="text-sm md:text-base font-medium mb-2 text-stone-800 leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>{f.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
