/**
 * ApproachSection.tsx — 構造整理型カウンセリングとは
 * 改修(2026-06):
 * - 旧FeaturesSection(3カード)を「変わること」として統合(セクション数削減)
 * - accepting prop対応: 停止中はCTAを「LINEで再開通知」に自動切替
 */
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { SectionLabel, BlockQuote, CtaButton, stagger, fadeUp } from "./homeShared";
import { features, sessionGuideItems } from "./homeData";

const LINE_URL = "https://lin.ee/6H8Pzo6";
declare function gtag(...args: unknown[]): void;

export default function ApproachSection({ accepting = false }: { accepting?: boolean }) {
  return (
    <section className="py-16 md:py-24 px-5 md:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="space-y-10 md:space-y-12">
          <motion.div variants={fadeUp}><SectionLabel en="Approach" ja="構造整理型カウンセリングとは" /></motion.div>

          <motion.div variants={fadeUp} className="space-y-7 text-stone-600 text-sm md:text-base leading-[2]">
            <BlockQuote><p className="text-stone-800 font-medium">なぜ消耗するのかを、構造として解きほぐす。</p></BlockQuote>
            <p>役割の過剰化、責任の抱え込み、思考のループ、境界の曖昧さ——これらを言語化・可視化し、負荷の構造を整理します。</p>
          </motion.div>

          {/* ▼ 旧Featuresを統合: このカウンセリングで変わること */}
          <motion.div variants={fadeUp} className="space-y-4">
            <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-medium">このカウンセリングで変わること</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {features.map((f) => (
                <div key={f.title} className="group relative flex md:block gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-100 hover:border-[#8FAF9F]/50 hover:shadow-md transition-all duration-300">
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8FAF9F] to-[#C4B5A5] group-hover:w-full transition-all duration-500 rounded-full" />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 md:mb-4 text-[#8FAF9F]" style={{ background: "rgba(143,175,159,0.12)" }}>{f.icon}</div>
                  <div>
                    <span className="text-[10px] text-[#8FAF9F] font-medium tracking-[0.15em] uppercase mb-1.5 block">{f.benefit}</span>
                    <h3 className="text-sm font-medium mb-2 text-stone-800 leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>{f.title}</h3>
                    <p className="text-stone-500 text-xs md:text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-7 text-stone-600 text-sm md:text-base leading-[2]">
            <div className="space-y-3">
              {[
                { case: "現場で利用者を直接支援している方", before: "「仕事が終わっても頭が切れない。誰にも言えない」", after: "→ 二次受傷 × 思考のループ × 「相談してはいけない」という内在化された禁止" },
                { case: "チームや部下を持つ立場の方", before: "「部下を支えながら、自分は誰にも相談できない」", after: "→ 役割過剰 × 責任の抱え込み × 境界の曖昧さ" },
              ].map((ex) => (
                <div key={ex.case} className="bg-stone-50 rounded-2xl border border-stone-100 p-5 space-y-2.5 text-sm">
                  <p className="text-stone-400 text-xs tracking-[0.1em] uppercase">{ex.case}</p>
                  <p className="text-stone-700 font-medium leading-relaxed">{ex.before}</p>
                  <div className="text-stone-500 text-xs leading-relaxed pl-3 border-l border-stone-200">
                    <p>{ex.after}</p>
                    <p className="mt-1">→ 構造が見えると、「自分のせいではなかった」とわかる。それが、消耗を減らす最初の一歩になります。</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {sessionGuideItems.map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl border border-stone-100 bg-stone-50 text-sm text-stone-600">
                  <span className="text-[#8FAF9F] flex-shrink-0">{item.icon}</span>
                  <span className="text-xs md:text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-100 text-center space-y-5">
              <p className="text-base md:text-xl text-stone-800 font-light leading-[1.8]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                目的は「強くなること」ではなく、消耗を減らすこと。
              </p>
              {accepting ? (
                <CtaButton label="構造を整理してみる(初回無料)" sub="1回のみでもOK / 勧誘なし" />
              ) : (
                <div className="space-y-2.5">
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { try { gtag("event", "approach_line_click"); } catch (_) { /* noop */ } }}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-md"
                    style={{ background: "#06C755" }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    LINEで再開通知を受け取る
                  </a>
                  <p className="text-stone-400 text-xs">現在、新規受付は休止中です ／ 再開はLINEで先行ご案内</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
