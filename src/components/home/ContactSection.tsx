import { motion } from "motion/react";
import { fadeUp } from "./homeShared";

// LINE URL統一(2026-06): lin.ee/NL0PnYR → lin.ee/6H8Pzo6 (Home.tsx・記事内CTAと同一に)
const LINE_URL = "https://lin.ee/6H8Pzo6";

declare function gtag(...args: unknown[]): void;

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
          {/* LINE導線 */}
          <div className="p-6 rounded-2xl border border-[#06C755]/20 bg-[#06C755]/[0.04] space-y-4 text-left">
            <div className="space-y-1">
              <p className="text-stone-800 text-sm font-medium" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                新規受付停止中でも、LINEでつながれます
              </p>
              <p className="text-stone-500 text-sm leading-[1.9]">
                再開のお知らせやご案内はLINEから受け取れます。<br />
                「まだ申し込むほどではないかも」という段階でも大丈夫です。
              </p>
            </div>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                try { gtag("event", "contact_line_click"); } catch (_) { /* noop */ }
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-sm font-medium transition-opacity hover:opacity-90"
              style={{ background: "#06C755" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
              </svg>
              LINEでつながる
            </a>
            <p className="text-stone-400 text-xs text-center">
              登録のみでもOK ／ 無理なご案内はありません
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
