import { motion } from "motion/react";
import { fadeUp } from "./homeShared";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-5 md:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8 text-center">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8FAF9F] font-medium">Contact</span>
            <h2 className="text-xl md:text-2xl font-light text-stone-900 tracking-wide" style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}>
              新規受付の一時停止について
            </h2>
          </div>
          <div className="p-8 rounded-2xl border border-stone-200 bg-stone-50 space-y-4 text-left">
            <p className="text-stone-700 text-sm leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              現在、サービス内容の見直し・準備期間につき新規受付を一時停止しております。
            </p>
            <p className="text-stone-500 text-sm leading-[2]">
              再開まで、記事・診断ツールはご利用いただけます。
            </p>
            <p className="text-stone-400 text-xs leading-relaxed border-t border-stone-200 pt-4">
              再開時期は改めてこちらでお知らせします。
            </p>
          </div>
          <div className="pt-2">
            <a href="/articles" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-200 text-stone-600 text-sm hover:bg-stone-50 transition-colors">
              記事・診断ツールを見る →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
