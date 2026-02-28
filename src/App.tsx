/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, ArrowRight, CheckCircle2, ShieldCheck, Monitor, Clock, CreditCard, X } from "lucide-react";

export default function App() {
  const [method, setMethod] = useState("");
  const [plan, setPlan] = useState("");
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen selection:bg-stone-200 selection:text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-lg font-medium tracking-wider text-stone-900">
              いしずえ
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm tracking-widest text-stone-500">
            <a href="#about" className="hover:text-stone-900 transition-colors">当相談室について</a>
            <a href="#services" className="hover:text-stone-900 transition-colors">ご相談</a>
            <a href="#guide" className="hover:text-stone-900 transition-colors">ご利用案内</a>
            <a href="#contact" className="hover:text-stone-900 transition-colors">お問い合わせ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1516589174184-c685266e430c?q=80&w=2574&auto=format&fit=crop" 
            alt="穏やかなカウンセリングルームの風景" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-100/80 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div {...fadeIn}>
            <div className="mb-12">
              <div className="inline-block px-4 py-1 border border-stone-300 rounded-full mb-8 bg-white/50 backdrop-blur-sm">
                <span className="text-xs tracking-[0.3em] text-stone-600 uppercase font-medium">公認心理師による支援者支援</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-medium tracking-[0.2em] mb-8 text-stone-900 leading-tight">
                こころの相談室<br className="md:hidden" /> いしずえ
              </h1>
              <p className="text-stone-600 tracking-[0.3em] mb-12 text-lg md:text-xl italic font-light">
                ― 支援する人の、土台を整える ―
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-8 text-stone-700 leading-loose text-lg bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-sm">
              <p>
                礎（いしずえ）とは、土台のこと。<br />
                支援する立場にいる人は、感情労働の中で知らず知らずのうちに自分自身を後回しにしてしまうことがあります。
              </p>
              <p>
                ここは「弱さを吐き出す場所」ではなく、<br />
                思考・役割・負荷を構造的に整理し、持続可能な状態へ整え直すための時間です。
              </p>
              <p className="font-medium text-stone-900">
                消耗を減らし、支援を続けられる土台を再設計します。
              </p>
            </div>
            <div className="mt-16">
              <a 
                href="#contact"
                className="inline-flex items-center px-12 py-5 bg-stone-900 text-stone-50 text-sm tracking-[0.2em] hover:bg-stone-800 transition-all rounded-full shadow-xl shadow-stone-200/50"
              >
                お問い合わせ
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn} className="space-y-12">
            <div>
              <span className="text-xs tracking-[0.4em] text-stone-400 uppercase">About</span>
              <h2 className="text-2xl font-medium mt-4 tracking-wider">当相談室について</h2>
            </div>
            <div className="space-y-8 text-stone-600 leading-loose text-lg">
              <p>
                支援する立場にいる人ほど、自分のことは後回しに、そして孤独になりがちです。<br />
                教育、医療、福祉、心理職。誰かの人生に伴走する方々が、自分自身の「いしずえ」を疎かにしてしまうと、支援そのものが揺らいでしまいます。
              </p>
              <p>
                当相談室では、支援者支援に特化したオンラインカウンセリングを行っています。
              </p>
              <p className="border-l-2 border-stone-200 pl-6 italic">
                持続可能であるための整理の時間を提供します。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultations Section */}
      <section id="services" className="py-24 px-6 bg-stone-50/50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="space-y-16">
            <div className="text-center">
              <span className="text-xs tracking-[0.4em] text-stone-400 uppercase">Consultation</span>
              <h2 className="text-2xl font-medium mt-4 tracking-wider">このようなご相談</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <ul className="space-y-4">
                  {[
                    "頭が休まらない",
                    "役割と本音のズレを感じる",
                    "自己否定が強くなっている",
                    "燃え尽きの予兆がある",
                    "責任感が強く頼れない"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-stone-600">
                      <div className="w-1.5 h-1.5 bg-stone-300 rounded-full mr-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-lg font-medium mb-4 text-stone-800">構造整理型アプローチ</h3>
                <p className="text-stone-600 leading-relaxed">
                  感情の整理だけでなく、思考・役割・負荷の「見える化」を重視します。
                  現状を構造的に捉え直すことで、漠然とした不安や疲弊の正体を明らかにしていきます。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="space-y-16">
            <div className="text-center">
              <span className="text-xs tracking-[0.4em] text-stone-400 uppercase">Features</span>
              <h2 className="text-2xl font-medium mt-4 tracking-wider">カウンセリングの特徴</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "支援者支援に特化",
                  desc: "対人援助職特有の葛藤や、二次受傷、燃え尽きのリスクを理解した専門的なサポートを提供します。",
                  icon: <ShieldCheck className="w-6 h-6 text-stone-400" />
                },
                {
                  title: "オンライン対応（透明性重視）",
                  desc: "Google Meetを使用します。必要に応じて思考整理の補助としてリアルタイム字幕機能を活用することがあります（事前同意制・保存は要約のみ）。",
                  icon: <Monitor className="w-6 h-6 text-stone-400" />
                },
                {
                  title: "消耗を減らす優先",
                  desc: "無理な自己改善よりも、まずは「消耗を減らすこと」を最優先に、持続可能な働き方を考えます。",
                  icon: <CheckCircle2 className="w-6 h-6 text-stone-400" />
                }
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl border border-stone-100 hover:border-stone-200 transition-colors">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-lg font-medium mb-4">{feature.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto space-y-10">
          <motion.div {...fadeIn} className="space-y-10">
            <h2 className="text-2xl font-medium tracking-wider text-center">
              構造整理型カウンセリングとは
            </h2>
            <div className="text-stone-600 leading-loose text-lg space-y-6">
              <p>
                感情の共感だけで終わらせません。
              </p>
              <div className="bg-white p-8 rounded-2xl border border-stone-100 space-y-2">
                <p>・役割の過剰化</p>
                <p>・責任の抱え込み</p>
                <p>・思考のループ</p>
                <p>・境界の曖昧さ</p>
              </div>
              <p>
                これらを言語化・可視化し、負荷の構造を整理します。
              </p>
              <p className="font-medium text-stone-800 text-center pt-4">
                目的は「強くなること」ではなく、消耗を減らすこと。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operator Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-16">
          <motion.div {...fadeIn} className="space-y-12">
            <div className="text-center">
              <span className="text-xs tracking-[0.4em] text-stone-400 uppercase">Profile</span>
              <h2 className="text-2xl font-medium mt-4 tracking-wider">運営者プロフィール</h2>
            </div>
            
            <div className="space-y-8">
              <div className="border-b border-stone-100 pb-8 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4 mb-2">
                  <h3 className="text-2xl font-medium text-stone-900">松本 龍児</h3>
                  <span className="text-stone-500 text-sm tracking-widest font-medium">公認心理師</span>
                </div>
                <p className="text-stone-500 tracking-widest text-sm">こころの相談室 いしずえ 代表</p>
              </div>

              <div className="text-stone-600 leading-loose space-y-6">
                <p>
                  これまで約15年にわたり、障害分野を中心とした支援業務に従事してきました。<br />
                  心理カウンセリング、メンタル支援、キャリア支援を専門とし、個別面談の累計は300名以上、総対応時間は約6,000時間を超えます。
                </p>
                <p>
                  私の支援は、「問題を個人の責任にしない」ことを大切にしています。<br />
                  人は環境・身体・人間関係・これまでの経験など、さまざまな要因の中で生きています。その全体像を丁寧に整理しながら、感情や思考を一緒に見つめ直していきます。
                </p>
                <p>
                  不安や抑うつ傾向、対人関係の悩み、就労不安、自己理解の課題などに幅広く対応してきました。感情を無理に消すのではなく、「どう扱うか」を共に考え、相談者のペースと決定権を尊重することを重視しています。
                </p>
                <p>
                  また、キャリア支援においては、人生全体の文脈や価値観を大切にしながら、自律性を保てる選択ができる状態を目指します。
                </p>
                <p>
                  オンラインカウンセリングにおいても、安心して話せる構造づくりを重視し、対面と同等の安全性と質を担保できるよう努めています。
                </p>
                <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 text-center italic">
                  <p className="text-stone-800 font-medium mb-2">目指しているのは、</p>
                  <p className="text-stone-900 text-xl">「支えられる状態」から「自分の力で進める状態」へと移行していくこと。</p>
                </div>
                <p className="text-center pt-4">
                  安心を土台に、主体性が回復していくプロセスを伴走します。
                </p>
              </div>

              <div className="pt-12 border-t border-stone-100">
                <h4 className="text-sm font-medium tracking-[0.2em] text-stone-400 uppercase mb-6">経歴・資格</h4>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-stone-400 rounded-full mr-3" />
                    福祉職として15年勤務
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-stone-400 rounded-full mr-3" />
                    公認心理師
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-24 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="space-y-16">
            <div className="text-center">
              <span className="text-xs tracking-[0.4em] text-stone-500 uppercase">Guide</span>
              <h2 className="text-2xl font-medium mt-4 tracking-wider">ご利用案内</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 border border-stone-800 rounded-2xl space-y-8">
                <div className="flex items-center space-x-4">
                  <Monitor className="w-6 h-6 text-stone-500" />
                  <h3 className="text-xl font-medium tracking-wider">オンラインカウンセリング</h3>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                      <span className="text-stone-500 text-xs tracking-widest uppercase">30分</span>
                      <span className="text-lg">8,000円 (税込)</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                      <span className="text-stone-500 text-xs tracking-widest uppercase">60分</span>
                      <span className="text-lg">12,000円 (税込)</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline pb-2">
                    <span className="text-stone-500 text-xs tracking-widest uppercase">形式</span>
                    <span className="text-lg">Google Meet</span>
                  </div>
                </div>
              </div>

              <div className="p-10 border border-stone-800 rounded-2xl space-y-8">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-stone-500" />
                  <h3 className="text-xl font-medium tracking-wider">メールカウンセリング</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                    <span className="text-stone-500 text-xs tracking-widest uppercase">回数</span>
                    <span className="text-lg">3往復</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                    <span className="text-stone-500 text-xs tracking-widest uppercase">料金</span>
                    <span className="text-lg">3,000円 (税込)</span>
                  </div>
                  <div className="flex justify-between items-baseline pb-2">
                    <span className="text-stone-500 text-xs tracking-widest uppercase">形式</span>
                    <span className="text-lg">メール</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-stone-800 space-y-3">
              <p className="text-stone-400 text-sm tracking-widest">
                ※ 守秘義務を厳守いたします。安心してご相談ください。
              </p>
              <p className="text-stone-400 text-sm tracking-widest">
                ※ 医療行為は行っておりません。
              </p>
              <p className="text-stone-400 text-sm tracking-widest">
                ※ 緊急性の高い場合は専門機関をご案内いたします。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeIn} className="space-y-16">
            <div className="text-center">
              <span className="text-xs tracking-[0.4em] text-stone-400 uppercase">Contact</span>
              <h2 className="text-2xl font-medium mt-4 tracking-wider">お問い合わせ</h2>
              <p className="mt-4 text-stone-500 text-sm">
                ご予約やご質問は、以下のフォームよりお気軽にご連絡ください。
              </p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-stone-500 uppercase font-medium">お名前 (必須)</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-0 py-3 border-b border-stone-200 focus:border-stone-900 outline-none transition-colors bg-transparent font-sans"
                    placeholder="山田 太郎"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-stone-500 uppercase font-medium">メールアドレス (必須)</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-0 py-3 border-b border-stone-200 focus:border-stone-900 outline-none transition-colors bg-transparent font-sans"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-stone-500 uppercase font-medium">相談方法 (必須)</label>
                  <select 
                    required
                    value={method}
                    onChange={(e) => {
                      setMethod(e.target.value);
                      setPlan(""); // Reset plan when method changes
                    }}
                    className="w-full px-0 py-3 border-b border-stone-200 focus:border-stone-900 outline-none transition-colors bg-transparent font-sans appearance-none cursor-pointer"
                  >
                    <option value="">選択してください</option>
                    <option value="online">オンラインカウンセリング</option>
                    <option value="email">メールカウンセリング</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-widest text-stone-500 uppercase font-medium">希望プラン (必須)</label>
                  <select 
                    required
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full px-0 py-3 border-b border-stone-200 focus:border-stone-900 outline-none transition-colors bg-transparent font-sans appearance-none cursor-pointer"
                  >
                    <option value="">選択してください</option>
                    {(!method || method === "online") && (
                      <>
                        <option value="online_30">オンライン 30分 (8,000円)</option>
                        <option value="online_60">オンライン 60分 (12,000円)</option>
                      </>
                    )}
                    {(!method || method === "email") && (
                      <option value="email_3">メール 3往復 (3,000円)</option>
                    )}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs tracking-widest text-stone-500 uppercase font-medium">現在の症状・状態 (任意)</label>
                <textarea 
                  rows={4}
                  className="w-full px-0 py-3 border-b border-stone-200 focus:border-stone-900 outline-none transition-colors bg-transparent resize-none font-sans"
                  placeholder="現在お困りのことや、心身の状態について差し支えない範囲でご記入ください。"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs tracking-widest text-stone-500 uppercase font-medium">その他ご相談内容 (任意)</label>
                <textarea 
                  rows={2}
                  className="w-full px-0 py-3 border-b border-stone-200 focus:border-stone-900 outline-none transition-colors bg-transparent resize-none font-sans"
                  placeholder="ご希望の日時などがあればご記入ください。"
                />
              </div>

              <div className="flex items-start space-x-3 pt-4">
                <input 
                  type="checkbox" 
                  id="terms" 
                  required
                  className="mt-1 w-4 h-4 border-stone-300 rounded text-stone-900 focus:ring-stone-900 cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-stone-500 leading-relaxed cursor-pointer">
                  <button 
                    type="button" 
                    onClick={() => setActiveModal("privacy")}
                    className="text-stone-800 underline underline-offset-4 hover:text-stone-900 transition-colors"
                  >
                    プライバシーポリシー
                  </button>
                  および
                  <button 
                    type="button" 
                    onClick={() => setActiveModal("cancel")}
                    className="text-stone-800 underline underline-offset-4 hover:text-stone-900 transition-colors"
                  >
                    キャンセルポリシー
                  </button>
                  に同意しました
                </label>
              </div>

              <div className="pt-8">
                <button 
                  type="submit"
                  className="w-full py-4 bg-stone-900 text-stone-50 text-sm tracking-[0.2em] hover:bg-stone-800 transition-all rounded-full flex items-center justify-center group"
                >
                  <Mail className="w-4 h-4 mr-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  送信する
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone-100 bg-stone-50/30">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-stone-400 text-sm tracking-widest">
            © 2026 こころの相談室 いしずえ
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs tracking-widest text-stone-400">
            <button onClick={() => setActiveModal("privacy")} className="hover:text-stone-900 transition-colors">プライバシーポリシー</button>
            <button onClick={() => setActiveModal("tokusho")} className="hover:text-stone-900 transition-colors">特定商取引法表記</button>
            <button onClick={() => setActiveModal("cancel")} className="hover:text-stone-900 transition-colors">キャンセルポリシー</button>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-stone-900/40 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {activeModal === "privacy" && (
                <div className="space-y-8 text-stone-600 leading-loose">
                  <h2 className="text-2xl font-medium text-stone-900 tracking-wider border-b border-stone-100 pb-6">プライバシーポリシー</h2>
                  <p>こころの相談室 いしずえ（以下「当相談室」）は、利用者の個人情報の重要性を認識し、以下のとおり適切に取り扱います。</p>
                  
                  <section className="space-y-4">
                    <h3 className="text-lg font-medium text-stone-900">1. 取得する情報</h3>
                    <p>当相談室では、以下の情報を取得する場合があります。</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>氏名</li>
                      <li>メールアドレス</li>
                      <li>相談内容</li>
                      <li>予約情報</li>
                      <li>決済情報</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-lg font-medium text-stone-900">2. 利用目的</h3>
                    <p>取得した情報は、以下の目的に利用します。</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>カウンセリングサービスの提供</li>
                      <li>予約管理および連絡対応</li>
                      <li>サービス向上のための分析</li>
                      <li>法令に基づく対応</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-lg font-medium text-stone-900">3. 第三者提供</h3>
                    <p>法令に基づく場合を除き、本人の同意なく第三者へ提供することはありません。</p>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-lg font-medium text-stone-900">4. 情報管理</h3>
                    <p>取得した情報は適切に管理し、不正アクセス・漏えい・改ざん防止に努めます。</p>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-lg font-medium text-stone-900">5. オンラインツールの利用</h3>
                    <p>オンラインカウンセリングでは Google Meet を使用します。各ツールのセキュリティポリシーは提供元の規定に準じます。</p>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-lg font-medium text-stone-900">6. 開示・訂正・削除</h3>
                    <p>ご本人からの請求があった場合、法令に従い対応いたします。</p>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-lg font-medium text-stone-900">7. 改定</h3>
                    <p>本ポリシーは必要に応じて改定されます。</p>
                  </section>

                  <div className="pt-8 border-t border-stone-100 text-sm space-y-1">
                    <p>事業者名：こころの相談室 いしずえ</p>
                    <p>代表：松本 龍児</p>
                    <p>所在地：大阪府大阪市</p>
                    <p>お問い合わせ：ish1zue.counseling@gmail.com</p>
                  </div>
                </div>
              )}

              {activeModal === "tokusho" && (
                <div className="space-y-8 text-stone-600 leading-loose">
                  <h2 className="text-2xl font-medium text-stone-900 tracking-wider border-b border-stone-100 pb-6">特定商取引法に基づく表記</h2>
                  
                  <div className="grid grid-cols-[120px_1fr] gap-y-6 text-sm md:text-base">
                    <div className="text-stone-400 font-medium">事業者名</div>
                    <div>こころの相談室 いしずえ</div>
                    
                    <div className="text-stone-400 font-medium">代表者名</div>
                    <div>松本 龍児</div>
                    
                    <div className="text-stone-400 font-medium">所在地</div>
                    <div>大阪府大阪市<br /><span className="text-xs text-stone-400">※詳細な所在地については、ご請求があった場合に遅滞なく開示いたします。</span></div>
                    
                    <div className="text-stone-400 font-medium">連絡先</div>
                    <div>ish1zue.counseling@gmail.com<br /><span className="text-xs text-stone-400">※お問い合わせはメールにてお願いいたします。</span></div>
                    
                    <div className="text-stone-400 font-medium">販売価格</div>
                    <div className="space-y-2">
                      <p>オンラインカウンセリング<br />・30分 8,000円（税込）<br />・60分 12,000円（税込）</p>
                      <p>メールカウンセリング<br />・3往復 3,000円（税込）</p>
                    </div>
                    
                    <div className="text-stone-400 font-medium">支払方法</div>
                    <div>銀行振込</div>
                    
                    <div className="text-stone-400 font-medium">支払時期</div>
                    <div>予約確定後、指定期日までにお支払いください。</div>
                    
                    <div className="text-stone-400 font-medium">提供時期</div>
                    <div>入金確認後、予約日時に提供いたします。</div>
                    
                    <div className="text-stone-400 font-medium">返品・返金</div>
                    <div>下記キャンセルポリシーをご確認ください。</div>
                  </div>
                </div>
              )}

              {activeModal === "cancel" && (
                <div className="space-y-8 text-stone-600 leading-loose">
                  <h2 className="text-2xl font-medium text-stone-900 tracking-wider border-b border-stone-100 pb-6">キャンセルポリシー</h2>
                  <p>ご予約後のキャンセルについては、以下の通りといたします。</p>
                  
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b border-stone-50 pb-2">
                      <span>前日までのキャンセル</span>
                      <span className="font-medium text-stone-900">無料</span>
                    </li>
                    <li className="flex justify-between border-b border-stone-50 pb-2">
                      <span>当日キャンセル</span>
                      <span className="font-medium text-stone-900">料金の50%</span>
                    </li>
                    <li className="flex justify-between border-b border-stone-50 pb-2">
                      <span>無断キャンセル</span>
                      <span className="font-medium text-stone-900">料金の100%</span>
                    </li>
                  </ul>

                  <p className="text-sm">やむを得ない事情がある場合は個別にご相談ください。返金が発生する場合、振込手数料をご負担いただくことがあります。</p>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 text-sm">
                    <p>なお、本サービスは医療行為ではありません。診断・投薬・緊急対応は行っておりません。</p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
