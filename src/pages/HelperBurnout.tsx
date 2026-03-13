import React from 'react';
import { motion } from 'motion/react';
import { Heart, AlertCircle, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';

export default function HelperBurnout() {
  return (
    <div className="bg-[#fdfcfb] min-h-screen font-serif text-[#3c3c3c]">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto pt-20 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#8a8a7a] font-sans font-semibold mb-4 block">
            Professional Well-being
          </span>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-[#2a2a2a]">
            支援職の燃え尽き<br />
            <span className="italic font-normal text-[#5a5a40]">（バーンアウト）</span>
          </h1>
          <p className="text-lg text-[#6a6a5a] max-w-2xl mx-auto leading-relaxed">
            支援職（対人援助職）は、福祉・医療・教育などの現場で
            利用者やクライアントの人生に深く関わる仕事です。
            そのため責任の重さや感情労働の負担が大きく、
            知らないうちに心身の疲労が蓄積してしまうことがあります。
          </p>
        </motion.div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[32px] shadow-sm border border-[#f0eee8] p-8 md:p-16"
        >
          {/* Section: What is Burnout */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6 text-[#5a5a40]">
              <Heart size={24} strokeWidth={1.5} />
              <h2 className="text-2xl font-medium">燃え尽き（バーンアウト）とは</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-[#4a4a4a]">
              <p>
                燃え尽きとは、仕事に強い使命感や責任感を持つ人ほど
                起こりやすい心理的な疲労状態のことを指します。
              </p>
              <p>
                支援職では利用者の感情や問題に長く向き合うため、
                共感疲労や慢性的なストレスが蓄積しやすいとされています。
              </p>
            </div>
          </section>

          {/* Section: Signs */}
          <section className="mb-16 bg-[#f9f8f4] -mx-8 md:-mx-16 px-8 md:px-16 py-12">
            <div className="flex items-center gap-3 mb-8 text-[#5a5a40]">
              <AlertCircle size={24} strokeWidth={1.5} />
              <h2 className="text-2xl font-medium">よく見られるサイン</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "仕事への意欲が低下する",
                "慢性的な疲労感が続く",
                "利用者との距離を感じる",
                "仕事の意味を感じにくくなる",
                "休んでも回復しない疲れ"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5a5a40] shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Why it happens */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6 text-[#5a5a40]">
              <ShieldCheck size={24} strokeWidth={1.5} />
              <h2 className="text-2xl font-medium">支援職で燃え尽きが起きやすい理由</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-[#4a4a4a]">
              <p>
                支援職では「人の役に立ちたい」という思いが強い人ほど、
                自分の負担を後回しにしてしまうことがあります。
              </p>
              <p>
                また制度や組織の制約の中で思うような支援ができないことが、
                無力感やストレスにつながることもあります。
              </p>
            </div>
          </section>

          <div className="h-px bg-[#f0eee8] w-full mb-16" />

          {/* Section: Counseling */}
          <section className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-[#f5f5f0] rounded-full mb-6 text-[#5a5a40]">
              <MessageCircle size={28} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-medium mb-4">支援職の悩みについて相談する</h2>
            <p className="text-lg text-[#6a6a5a] mb-10 max-w-xl mx-auto">
              支援職の仕事には外からは見えにくい負担や葛藤があります。
              一人で抱え込まず、整理する場としてカウンセリングを利用することもできます。
            </p>

<Link to="/#contact">
  <button className="group inline-flex items-center gap-2 bg-[#5a5a40] hover:bg-[#4a4a30] text-white px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-lg">
    支援職の悩みを相談する
    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
  </button>
</Link>
</section>

{/* Footer */}
<footer className="text-center text-sm text-gray-500 py-10">
  <p>© 2026 Helper Burnout Support. All rights reserved.</p>
</footer>

</main>
</motion.div>
);
}
