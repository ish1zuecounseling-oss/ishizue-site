/**
 * ClosingSection.tsx — 感情的な締め
 * 改修(2026-06):
 * - 配置をFAQ後・CurrentStatus直前に移動(Home.tsx側)。締めを最終CVの直前へ
 * - accepting prop対応: 停止中はCTAを「LINEで再開通知」に自動切替
 */
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { fadeUp, CtaButton } from "./homeShared";

const LINE_URL = "https://lin.ee/6H8Pzo6";
declare function gtag(...args: unknown[]): void;

export default function ClosingSection({ accepting = false }: { accepting?: boolean }) {
  return (
    <section className="py-14 px-5 bg-white border-y border-stone-100">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl mx-auto text-center space-y-5">
        <p className="text-stone-800 text-lg md:text-2xl font-light leading-[1.9]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          「もう少し耐えれば」と思いながら、<br /><span className="text-[#8FAF9F]">もう何ヶ月経ちましたか?</span>
        </p>
        {accepting ? (
          <>
            <p className="text-stone-500 text-sm leading-[1.9]">
              限界まで耐えてから動くより、予兆のうちに整理する方が、ずっと楽です。<br />今日が、そのタイミングかもしれません。
            </p>
            <CtaButton label="今日、話してみる(初回メール無料)" sub="勧誘なし / 1回のみでもOK / 送った後もキャンセル可" />
          </>
        ) : (
          <>
            <p className="text-stone-500 text-sm leading-[1.9]">
              限界まで耐えてから動くより、予兆のうちに準備しておく方が、ずっと楽です。<br />
              現在、新規受付は休止中ですが——再開の知らせを受け取っておくことが、その準備になります。
            </p>
            <div className="space-y-2.5">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { try { gtag("event", "closing_line_click"); } catch (_) { /* noop */ } }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-md"
                style={{ background: "#06C755" }}
              >
                <MessageCircle className="w-4 h-4" />
                LINEで再開通知を受け取る
              </a>
              <p className="text-stone-400 text-xs">読むだけOK ／ 勧誘なし ／ いつでも解除できます</p>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
}
