import { motion } from "motion/react";
import { fadeUp, SafeImg } from "./homeShared";

export default function TrustBarSection() {
  return (
    <section className="py-10 md:py-12 px-5 md:px-6 bg-[#F7F6F3] border-y border-stone-200">
      <div className="max-w-3xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 border-white shadow-md">
            <SafeImg src="/profile.jpg" alt="松本 龍児" className="w-full h-full object-cover" fallbackBg="bg-stone-300" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <p className="text-stone-800 text-sm font-medium" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              松本 龍児（公認心理師）— 障害福祉15年・300名以上6,000時間以上の支援経験
            </p>
            <p className="text-stone-500 text-xs mt-1 leading-relaxed">
              「支援する側が頼ってはいけない」という構造を、自らの経験から理解しています。
              <a href="#profile" className="ml-1 text-[#8FAF9F] underline underline-offset-2 hover:text-stone-700 transition-colors">詳しいプロフィールを見る</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
