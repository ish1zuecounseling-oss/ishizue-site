import { useState } from "react";
import { motion } from "motion/react";
import { stagger, fadeUp, CtaButton } from "./homeShared";
import { painPoints } from "./homeData";
import { ACCEPTING_NEW_CLIENTS } from "../../data/siteStatus";

function resultMessage(n: number) {
  if (n === 0) return null;
  if (n <= 2) return `${n}つ当てはまりました。下の「4つの構造」で、どれが近いか見てみてください。`;
  return `${n}つ当てはまりました。「相談するほどじゃない」と感じる方ほど、整理で変わる部分が大きいことがあります。`;
}

export default function PainPointsSection() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const toggle = (k: string) =>
    setSelected((prev) => { const n = new Set(prev); if (n.has(k)) n.delete(k); else n.add(k); return n; });
  const msg = resultMessage(selected.size);
  return (
    <section id="services" className="py-16 md:py-24 px-5 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-10 md:space-y-14">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.div variants={fadeUp} className="space-y-3 max-w-xl">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8FAF9F] font-medium">あなたの話ではないですか</span>
            <h2 className="text-xl md:text-3xl font-light text-stone-900 leading-[1.65] tracking-wide" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              支援職ほど、<br /><span className="text-stone-500">自分の消耗に一番気づきにくい。</span>
            </h2>
            <p className="hidden md:block text-stone-400 text-sm italic leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              なぜこんなに疲れているのか、わからないまま今日も出勤した。
            </p>
            <p className="hidden md:block text-stone-500 text-sm leading-[1.9]">
              他者の痛みに寄り添うことが仕事だからこそ、自分自身の疲れは「たいしたことない」と後回しにしてしまう。
            </p>
            <p className="text-stone-400 text-xs leading-[1.8]">当てはまるものをタップして確認してみてください。</p>
          </motion.div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
          {painPoints.map((item) => {
            const on = selected.has(item.feeling);
            return (
              <motion.button
                key={item.feeling}
                type="button"
                variants={fadeUp}
                aria-pressed={on}
                onClick={() => toggle(item.feeling)}
                className={`text-left rounded-2xl border px-4 py-4 md:p-5 flex items-start gap-3.5 min-h-[56px] transition-colors ${on ? "border-[#8FAF9F] bg-[#8FAF9F]/10" : "border-stone-100 bg-stone-50 hover:border-[#8FAF9F]/40"}`}
              >
                <span aria-hidden="true" className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-md border-2 grid place-items-center text-xs leading-none ${on ? "bg-[#8FAF9F] border-[#8FAF9F] text-white" : "border-stone-300 text-transparent"}`}>✓</span>
                <span className="min-w-0">
                  <span className="block text-stone-800 font-medium text-sm md:text-base leading-snug">{item.feeling}</span>
                  {on && <span className="block text-stone-500 text-xs md:text-sm leading-[1.8] mt-1.5">{item.detail}</span>}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="p-6 md:p-8 rounded-2xl bg-[#2C1F14] space-y-5">
            <p className="text-stone-100 text-base md:text-xl font-light leading-[1.9] text-center" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              それは、あなたが弱いからではありません。
            </p>
            {msg && <p className="text-[#8FAF9F] text-sm leading-[1.9] text-center" role="status" aria-live="polite">{msg}</p>}
            <p className="text-stone-400 text-sm leading-[1.9] text-center">
              支援職という役割の構造が、消耗を生み出しているのです。構造がわかれば、変えられます。
            </p>
            <div className="pt-3 border-t border-stone-800">
              <CtaButton label={ACCEPTING_NEW_CLIENTS ? "今の状態を整理してみる（初回メール相談無料）" : "今の状態をAIで整理してみる"} href={ACCEPTING_NEW_CLIENTS ? "#contact" : "/ai-assistant"} sub={ACCEPTING_NEW_CLIENTS ? "まとまっていなくても大丈夫です" : "無料・登録不要 ／ 新規のご相談は休止中です"} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
