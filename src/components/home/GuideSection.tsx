/**
 * GuideSection.tsx — 料金・ご利用案内
 * cotreeメールカウンセリング対応版
 */

import { motion } from "motion/react";
import { Monitor, Mail, Minus } from "lucide-react";
import { SectionLabel, stagger, fadeUp } from "./homeShared";
import { flowItems, notes } from "./homeData";

export default function GuideSection() {
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

            {/* 無料バッジ */}
            <div className="p-5 rounded-2xl border border-emerald-900/40 bg-emerald-950/30 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-emerald-500 mb-1">まずはここから</p>
                <p className="text-base font-medium text-stone-100" style={{ fontFamily: "'Noto Serif JP', serif" }}>初回メール相談</p>
                <p className="text-stone-500 text-xs mt-1">1往復・状況整理 ／ 返信目安 2営業日以内</p>
              </div>
              <span className="text-3xl font-light text-emerald-400">無料</span>
            </div>

            {/* cotree導線バナー */}
            <div className="p-4 rounded-xl border border-stone-800 bg-stone-900/30 flex items-center justify-between gap-3">
              <div className="text-xs text-stone-500 leading-relaxed">
                <p className="text-stone-400 font-medium mb-0.5">まず文章で試したい方</p>
                <p>cotreeのメールカウンセリング（お試し2週間）も選択肢の一つです</p>
              </div>
              <a
                href="https://cotree.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-3 py-1.5 rounded-full text-[10px] font-medium whitespace-nowrap"
                style={{ background: "rgba(143,175,159,0.15)", color: "#8FAF9F", border: "1px solid rgba(143,175,159,0.25)" }}
              >
                見てみる →
              </a>
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

              {/* メールカウンセリング（cotree） */}
              <div className="p-5 md:p-7 rounded-2xl border border-stone-800 bg-[#2C1F14]/50 space-y-4">
                <div className="flex items-center gap-3 text-stone-300">
                  <Mail className="w-5 h-5 text-stone-500" />
                  <h3 className="text-sm md:text-base font-medium tracking-wider">メールカウンセリング（cotree）</h3>
                </div>
                <p className="text-stone-500 text-xs leading-relaxed">
                  いきなり話すのが不安な方へ。文章を書いて送るだけ。自分のペースでやりとりできます。
                </p>
                <div className="divide-y divide-stone-800">
                  {[
                    { label: "お試しプラン（初回）", sub: "2週間 ／ 最大週5往復", price: "8,800円" },
                    { label: "継続プラン",           sub: "2〜4週間 ／ 週1〜5往復", price: "5,500円〜" },
                    { label: "形式",                sub: "",                      price: "cotreeメッセージ" },
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
                <a
                  href="https://cotree.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 rounded-lg text-xs font-medium transition-colors"
                  style={{ background: "rgba(143,175,159,0.15)", color: "#8FAF9F", border: "1px solid rgba(143,175,159,0.3)" }}
                >
                  cotreeでメールカウンセリングを見る →
                </a>
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
