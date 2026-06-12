/**
 * GuideSection.tsx — 料金・ご利用案内
 * いしずえメールカウンセリング直接受付版
 * 改修(2026-06):
 * - accepting prop対応: 停止中は「再開時の料金」と明示+申込CTAをLINEに切替
 */

import { motion } from "motion/react";
import { Monitor, Mail, Minus, Info, MessageCircle } from "lucide-react";
import { SectionLabel, stagger, fadeUp } from "./homeShared";
import { flowItems, notes } from "./homeData";

const LINE_URL = "https://lin.ee/6H8Pzo6";
declare function gtag(...args: unknown[]): void;

export default function GuideSection({ accepting = false }: { accepting?: boolean }) {
  return (
    <section id="guide" className="py-16 md:py-24 px-5 md:px-6 bg-[#1A110A]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} variants={stagger}
          className="space-y-14 md:space-y-20"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel en="Guide" ja="ご利用案内" light />
          </motion.div>

          {/* 料金 */}
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-stone-500">料金</p>

            {/* 停止中の注記 */}
            {!accepting && (
              <div className="flex items-start gap-2.5 p-4 rounded-xl border border-stone-800 bg-[#2C1F14]/40">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#8FAF9F" }} />
                <p className="text-stone-400 text-xs leading-relaxed">
                  現在、新規ご相談の受付を一時休止しております。以下は<span className="text-stone-300">受付再開時</span>の料金・流れのご案内です。再開はLINEで先行してお知らせします。
                </p>
              </div>
            )}

            {/* 無料バッジ */}
            <div className="p-5 rounded-2xl border border-emerald-900/40 bg-emerald-950/30 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-emerald-500 mb-1">{accepting ? "まずはここから" : "再開時は、ここから"}</p>
                <p className="text-base font-medium text-stone-100" style={{ fontFamily: "'Noto Serif JP', serif" }}>初回メール相談</p>
                <p className="text-stone-500 text-xs mt-1">1往復・状況整理 ／ 返信目安 2営業日以内</p>
              </div>
              <span className="text-3xl font-light text-emerald-400">無料</span>
            </div>

            {/* 2カード */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

              {/* オンライン面談 */}
              <div className="p-5 md:p-7 rounded-2xl border border-stone-800 bg-[#2C1F14]/50 space-y-4">
                <div className="flex items-center gap-3 text-stone-300">
                  <Monitor className="w-5 h-5 text-stone-500" />
                  <h3 className="text-sm md:text-base font-medium tracking-wider">オンライン面談</h3>
                </div>
                <div className="divide-y divide-stone-800">
                  {[
                    { label: "初回体験 30分", price: "5,000円（税込）" },
                    { label: "通常 30分",     price: "8,000円（税込）" },
                    { label: "通常 60分",     price: "12,000円（税込）" },
                    { label: "形式",          price: "Google Meet" },
                  ].map(({ label, price }) => (
                    <div key={label} className="flex justify-between items-baseline py-2.5">
                      <span className="text-stone-500 text-xs">{label}</span>
                      <span className="text-stone-200 text-sm">{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* メールカウンセリング（いしずえ） */}
              <div className="p-5 md:p-7 rounded-2xl border border-stone-800 bg-[#2C1F14]/50 space-y-4">
                <div className="flex items-center gap-3 text-stone-300">
                  <Mail className="w-5 h-5 text-stone-500" />
                  <h3 className="text-sm md:text-base font-medium tracking-wider">メールカウンセリング</h3>
                </div>
                <p className="text-stone-500 text-xs leading-relaxed">
                  いきなり話すのが不安な方へ。文章を書いて送るだけ。自分のペースで整理できます。
                </p>
                <div className="divide-y divide-stone-800">
                  {[
                    { label: "2週間プラン",  sub: "最大週5往復", price: "8,000円（税込）" },
                    { label: "4週間プラン",  sub: "最大週5往復", price: "15,000円（税込）" },
                    { label: "形式",        sub: "",            price: "メール" },
                  ].map(({ label, sub, price }) => (
                    <div key={label} className="flex justify-between items-start gap-2 py-2.5">
                      <div>
                        <span className="text-stone-400 text-xs">{label}</span>
                        {sub && <p className="text-stone-600 text-[10px] mt-0.5">{sub}</p>}
                      </div>
                      <span className="text-stone-200 text-sm flex-shrink-0">{price}</span>
                    </div>
                  ))}
                </div>
                {accepting ? (
                  <a
                    href="#contact"
                    className="block text-center py-2 rounded-lg text-xs font-medium transition-colors"
                    style={{ background: "rgba(143,175,159,0.15)", color: "#8FAF9F", border: "1px solid rgba(143,175,159,0.3)" }}
                  >
                    メールカウンセリングを申し込む →
                  </a>
                ) : (
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { try { gtag("event", "guide_line_click"); } catch (_) { /* noop */ } }}
                    className="flex items-center justify-center gap-1.5 text-center py-2 rounded-lg text-xs font-bold text-white transition-opacity hover:opacity-90"
                    style={{ background: "#06C755" }}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    再開通知をLINEで受け取る →
                  </a>
                )}
              </div>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed">※ お支払いは銀行振込にてお願いしております。予約確定後にご案内いたします。</p>
          </motion.div>

          {/* 流れ */}
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-stone-500">ご利用の流れ</p>
            <ol>
              {flowItems.map((item) => (
                <li key={item.step} className="flex gap-5 items-start group">
                  <span className="text-stone-600 font-light text-xs tabular-nums shrink-0 pt-4 w-6">{item.step}</span>
                  <div className="flex-1 py-4 border-b border-stone-900 group-last:border-b-0">
                    <p className="text-stone-200 text-sm font-medium mb-0.5">{item.title}</p>
                    <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                    <p className="text-[#8FAF9F]/60 text-[11px] mt-1 italic">{item.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* 注意事項 */}
          <motion.div variants={fadeUp} className="p-5 rounded-2xl border border-stone-800 bg-[#2C1F14]/30 space-y-3">
            <p className="text-[10px] tracking-[0.2em] uppercase text-stone-500">対象・ご注意</p>
            <ul className="space-y-2.5 text-stone-500 text-xs leading-relaxed">
              {notes.map((text) => (
                <li key={text} className="flex gap-2.5">
                  <Minus className="w-3 h-3 text-stone-700 shrink-0 mt-0.5" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
