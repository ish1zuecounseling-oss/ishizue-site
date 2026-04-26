import { type FormEvent } from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { SectionLabel, BlockQuote, stagger, fadeUp } from "./homeShared";
import type { FormStatus } from "./homeShared";

type Props = {
  formStatus: FormStatus;
  formError: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function ContactSection({ formStatus, formError, handleSubmit }: Props) {
  return (
    <section id="contact" className="py-16 md:py-24 px-5 md:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="space-y-10 md:space-y-12">
          <motion.div variants={fadeUp} className="space-y-6">
            <SectionLabel en="Contact" ja="まず、話してみてください" />
            <div className="space-y-4 text-stone-500 text-sm leading-[2.1]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              <p>「もう少し耐えれば大丈夫」と思いながら、何ヶ月も過ぎていませんか？</p>
              <BlockQuote>
                <p className="text-stone-700 font-medium leading-[1.8]">
                  限界まで耐えてから動くより、<br />予兆を感じているうちに整理する方が、ずっと楽です。
                </p>
              </BlockQuote>
              <p>今の状態がひどくなくてもいい。うまく言葉にできなくてもいい。<br />
                「なんとなくしんどい」という感覚だけで、十分です。<br />
                <span className="text-stone-700 font-medium">今日が、そのタイミングかもしれません。</span>
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {[
                { step: "1", label: "フォームを送る",  sub: "2分・キャンセル可" },
                { step: "2", label: "メールが届く",    sub: "2営業日以内" },
                { step: "3", label: "状況を整理する",  sub: "初回・無料" },
              ].map(({ step, label, sub }) => (
                <div key={step} className="p-3 md:p-4 rounded-xl bg-stone-50 border border-stone-100 text-center">
                  <span className="text-[10px] text-[#8FAF9F] tracking-widest font-medium">{step}</span>
                  <p className="text-stone-700 text-xs font-medium mt-1 leading-tight">{label}</p>
                  <p className="text-stone-400 text-[11px] mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form variants={fadeUp} className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="space-y-1.5">
              <label htmlFor="job" className="flex items-center gap-1 text-[10px] tracking-[0.2em] uppercase text-stone-400">ご職種</label>
              <input id="job" name="job" type="text" autoComplete="organization-title" placeholder="社会福祉士、看護師 など"
                className="w-full px-4 py-3.5 border border-stone-200 rounded-xl text-stone-800 text-base md:text-sm focus:outline-none focus:ring-1 focus:ring-[#8FAF9F] bg-stone-50 placeholder-stone-300 transition-colors" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="name" className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-stone-400">
                お名前<span className="text-red-400 font-semibold not-italic">* 必須</span>
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" placeholder="山田 花子"
                className="w-full px-4 py-3.5 border border-stone-200 rounded-xl text-stone-800 text-base md:text-sm focus:outline-none focus:ring-1 focus:ring-[#8FAF9F] bg-stone-50 placeholder-stone-300 transition-colors" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-stone-400">
                メールアドレス<span className="text-red-400 font-semibold not-italic">* 必須</span>
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="example@email.com"
                className="w-full px-4 py-3.5 border border-stone-200 rounded-xl text-stone-800 text-base md:text-sm focus:outline-none focus:ring-1 focus:ring-[#8FAF9F] bg-stone-50 placeholder-stone-300 transition-colors" />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-stone-400">ご相談内容</label>
                <span className="text-[10px] text-stone-300">任意 — 一言でも大丈夫です</span>
              </div>
              <textarea id="message" name="message" rows={4} placeholder="例：「最近頭が休まらない」「誰にも言えない」など"
                className="w-full px-4 py-3.5 border border-stone-200 rounded-xl text-stone-800 text-base md:text-sm focus:outline-none focus:ring-1 focus:ring-[#8FAF9F] bg-stone-50 placeholder-stone-300 resize-none transition-colors" />
              <p className="text-stone-400 text-xs">まとまっていなくて大丈夫。送った後にお伺いします。</p>
            </div>
            {formStatus === "error" && formError && (
              <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">{formError}</div>
            )}
            <div className="space-y-3 pt-1">
              <button type="submit" disabled={formStatus === "submitting"}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#2C1F14] text-stone-50 text-sm tracking-[0.08em] font-medium hover:bg-[#3D2B1F] active:scale-[0.99] transition-all rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                {formStatus === "submitting" ? "送信中..." : "松本に、今の状態を整理してもらう（無料）"}
              </button>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-stone-400">
                {["無理な継続案内なし", "1回のみでもOK", "送った後もキャンセル可"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-stone-300 flex-shrink-0" />{item}
                  </span>
                ))}
              </div>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
