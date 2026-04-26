import { motion } from "motion/react";
import { Minus } from "lucide-react";
import { SectionLabel, BlockQuote, ProfileExpand, SafeImg, stagger, fadeUp } from "./homeShared";
import { qualifications } from "./homeData";

export default function ProfileSection() {
  return (
    <section id="profile" className="py-16 md:py-24 px-5 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="space-y-10 md:space-y-14">
          <motion.div variants={fadeUp}><SectionLabel en="Profile" ja="なぜ、支援職の支援をしているのか" /></motion.div>
          <motion.div variants={fadeUp}>
            <div className="flex flex-col md:grid md:grid-cols-[180px_1fr] gap-8 md:gap-10 items-start">
              <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
                <div className="w-28 h-28 md:w-44 md:h-44 rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
                  <SafeImg src="/profile.jpg" alt="松本 龍児 近影" className="w-full h-full object-cover" loading="lazy" fallbackBg="bg-stone-200" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-lg font-medium text-stone-900 tracking-wider" style={{ fontFamily: "'Noto Serif JP', serif" }}>松本 龍児</p>
                  <p className="text-stone-500 text-xs mt-1">公認心理師 ／ 構造整理型カウンセラー</p>
                </div>
                <div className="flex flex-row flex-wrap md:flex-col gap-2 justify-center md:justify-start">
                  {["公認心理師", "障害福祉 15年", "累計 300名以上", "6,000時間以上"].map((b) => (
                    <span key={b} className="px-3 py-1 bg-stone-50 border border-stone-200 text-stone-600 text-xs rounded-full tracking-wide text-center">{b}</span>
                  ))}
                </div>
              </div>
              <div className="text-stone-600 leading-[2.1] text-sm md:text-base space-y-6" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                <p>15年間、障害福祉の現場で支援者として働いてきました。300名以上、6,000時間を超える支援の中でずっと気になっていたことがあります。</p>
                <BlockQuote><p className="text-stone-800 font-medium text-base md:text-lg leading-[1.8]">支援者自身が、誰にも頼れていない。</p></BlockQuote>
                <ProfileExpand>
                  <p>責任を抱え、感情を押し込め、疲弊しながらも「自分が弱いから」と思い込んでいる人を、何度も目の前で見てきました。</p>
                  <p>正直に言えば、かつての私自身もそうでした。「支援する側が頼ってはいけない」という無言の圧力を感じながら、気づかないふりをしていた時期があります。</p>
                  <p>感情を吐き出す場所ではなく、<strong className="text-stone-800 font-medium">整理して、持続可能な状態に戻す</strong>ための時間を作ること。それがこのカウンセリングです。</p>
                </ProfileExpand>
                <div className="pt-4 border-t border-stone-200">
                  <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">資格・経歴</p>
                  <ul className="space-y-2 text-xs text-stone-500">
                    {qualifications.map((q) => (
                      <li key={q} className="flex items-start gap-2.5">
                        <Minus className="w-3 h-3 text-stone-300 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-5 border-t border-stone-200">
                  <div className="p-5 rounded-2xl bg-stone-50">
                    <p className="text-stone-700 text-sm md:text-base leading-[2]">
                      セッション後に多くの方から聞く言葉があります。<br />
                      <strong className="text-stone-900">「なぜしんどいのかが、やっとわかった」</strong><br />
                      原因が見えると、自分を責めるのをやめられます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
