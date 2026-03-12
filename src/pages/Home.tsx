import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, ArrowRight, CheckCircle2, ShieldCheck, Monitor, Clock, X } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {

  const [activeModal, setActiveModal] = useState<string | null>(null)

  return (
    <>

      <nav className="px-6 py-4 border-b border-stone-100 bg-white">

        <div className="max-w-5xl mx-auto flex justify-between items-center">

          {/* ロゴ */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/favicon.png"
              alt="いしずえ ロゴ"
              className="h-8 w-8"
            />
            <div className="text-lg font-medium tracking-wider text-stone-900">
              こころの相談室（いしずえ）
            </div>
          </Link>

          {/* ナビゲーション */}
          <div className="hidden md:flex space-x-8 text-sm tracking-widest text-stone-500">

            <a
              href="#about"
              className="hover:text-stone-900 transition-colors"
            >
              当相談室について
            </a>

            <a
              href="#services"
              className="hover:text-stone-900 transition-colors"
            >
              ご相談
            </a>

            <Link
              to="/emotional-labor"
              className="hover:text-stone-900 transition-colors"
            >
              心理記事
            </Link>

            <a
              href="#guide"
              className="hover:text-stone-900 transition-colors"
            >
              ご利用案内
            </a>

            <a
              href="#contact"
              className="hover:text-stone-900 transition-colors"
            >
              お問い合わせ
            </a>

          </div>
        </div>
        </nav>

{/* Hero Section */}
<section className="relative pt-40 pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 -z-10">
    <img 
      src="/hero.jpg"
      alt="カウンセリングをイメージした静かな空間"
      className="w-full h-full object-cover"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-stone-100/85 backdrop-blur-[1px]" />
  </div>

  {/* Hero contents（← これをHeroの中へ） */}
  <div className="max-w-4xl mx-auto text-center relative w-full">
    <motion.div>
      <div className="mb-12">
        <div className="inline-block px-4 py-1 border border-stone-300 rounded-full mb-8 bg-white/50 backdrop-blur-sm">
          <span className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-stone-600 uppercase font-medium">
            公認心理師による支援者支援
          </span>
        </div>

        <h1 className="text-3xl md:text-6xl font-medium tracking-[0.1em] md:tracking-[0.2em] mb-8 text-stone-900 leading-tight">
          支援職のためのカウンセリング<br />
          こころの相談室 いしずえ
        </h1>

        <p className="text-stone-600 tracking-[0.15em] md:tracking-[0.3em] mb-12 text-base md:text-xl italic font-light">
          ― 支援する人の、土台を整える ―
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6 text-left text-stone-700 leading-relaxed text-base md:text-lg bg-white/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/20 shadow-sm">
        <p>
          礎（いしずえ）とは、土台のこと。支援する立場にいる人は、感情労働の中で知らず知らずのうちに自分自身を後回しにしてしまうことがあります。
        </p>
        <p>
          ここは「弱さを吐き出す場所」ではなく、思考・役割・負荷を構造的に整理し、持続可能な状態へ整え直すための時間です。
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

{/* SEO導線 */}
<section className="py-16 px-6 bg-stone-50 text-center">
  <p className="text-stone-600 mb-6">
    福祉・医療・教育などの対人援助職で起こりやすい
    「バーンアウト（燃え尽き）」について解説しています。
  </p>

  <h2 className="text-xl font-medium mb-4">
    支援職の燃え尽きについて
  </h2>

  <a
    href="/helper-burnout"
    className="text-stone-800 underline hover:text-stone-900"
  >
    支援職のバーンアウトについて詳しく読む
  </a>
</section>

  <div className="max-w-4xl mx-auto text-center relative">
          <motion.div>
            <div className="mb-12">
              <div className="inline-block px-4 py-1 border border-stone-300 rounded-full mb-8 bg-white/50 backdrop-blur-sm">
                <span className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-stone-600 uppercase font-medium">公認心理師による支援者支援</span>
              </div>
              <h1 className="text-3xl md:text-6xl font-medium tracking-[0.1em] md:tracking-[0.2em] mb-8 text-stone-900 leading-tight">
                支援職のためのカウンセリング<br />
                こころの相談室 いしずえ
                </h1>
              <p className="text-stone-600 tracking-[0.15em] md:tracking-[0.3em] mb-12 text-base md:text-xl italic font-light">
                ― 支援する人の、土台を整える ―
              </p>
            </div>
            
<div className="max-w-2xl mx-auto space-y-6 text-left text-stone-700 leading-relaxed text-base md:text-lg bg-white/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/20 shadow-sm">
  <p>
    礎（いしずえ）とは、土台のこと。支援する立場にいる人は、感情労働の中で知らず知らずのうちに自分自身を後回しにしてしまうことがあります。
  </p>
  <p>
    ここは「弱さを吐き出す場所」ではなく、思考・役割・負荷を構造的に整理し、持続可能な状態へ整え直すための時間です。
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
          <motion.div className="space-y-12">
            <div>
              <span className="text-xs tracking-[0.4em] text-stone-400 uppercase">About</span>
              <h2 className="text-2xl font-medium mt-4 tracking-wider">当相談室について</h2>
            </div>
            <div className="space-y-8 text-stone-600 leading-loose text-base md:text-lg">
              <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl mb-12">
                <img 
                  src="/concept.jpg" 
                  alt="積み上げられた石（土台の象徴）" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
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
          <motion.div className="space-y-16">
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
          <motion.div className="space-y-16">
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
                <div key={i} className="p-6 md:p-8 rounded-2xl border border-stone-100 hover:border-stone-200 transition-colors">
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
          <motion.div className="space-y-10">
            <h2 className="text-2xl font-medium tracking-wider text-center">
              構造整理型カウンセリングとは
            </h2>
            <div className="text-stone-600 leading-loose text-base md:text-lg space-y-8">
              <div className="space-y-6">
                <p>
                  感情の共感だけで終わらせません。
                </p>
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-100 space-y-2">
                  <p>・役割の過剰化</p>
                  <p>・責任の抱え込み</p>
                  <p>・思考のループ</p>
                  <p>・境界の曖昧さ</p>
                </div>
                <div className="bg-stone-100/50 p-6 rounded-xl border border-stone-200 text-sm md:text-base">
                  <p className="font-medium text-stone-800 mb-2">例）「管理職として部下を支えながら、自分は誰にも相談できない状態」</p>
                  <p className="text-stone-500">→ 役割過剰 × 責任の抱え込み × 境界の曖昧さ</p>
                  <p className="text-stone-500">→ 優先順位再設計</p>
                </div>
                <p>
                  これらを言語化・可視化し、負荷の構造を整理します。
                </p>
              </div>

              <div className="pt-8 border-t border-stone-200">
                <h3 className="text-sm font-medium text-stone-900 mb-6 tracking-widest uppercase text-center">支援の進め方</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { text: "面談は1回60分", icon: <Clock className="w-4 h-4" /> },
                    { text: "2週間単位のサイクル", icon: <Clock className="w-4 h-4" /> },
                    { text: "オンライン完結", icon: <Monitor className="w-4 h-4" /> },
                    { text: "文字起こし活用（同意の上）", icon: <ShieldCheck className="w-4 h-4" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 bg-white/50 p-4 rounded-xl border border-stone-100">
                      <span className="text-stone-400">{item.icon}</span>
                      <span className="text-sm text-stone-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-medium text-stone-800 text-center pt-4">
                目的は「強くなること」ではなく、消耗を減らすこと。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operator Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div className="space-y-12">
            <div className="text-center">
              <span className="text-xs tracking-[0.4em] text-stone-400 uppercase">Profile</span>
              <h2 className="text-2xl font-medium mt-4 tracking-wider">運営者プロフィール</h2>
            </div>
            
            <div className="bg-stone-50/30 p-6 md:p-16 rounded-3xl border border-stone-100 space-y-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-stone-100 pb-10">
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-sm">
                  <img 
                    src="/profile.jpg" 
                    alt="松本 龍児 近影" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center md:text-left pt-4">
                  <h3 className="text-2xl font-medium text-stone-900 mb-2">松本 龍児</h3>
                  <p className="text-stone-500 tracking-normal md:tracking-wide text-sm">構造整理型カウンセラー｜支援者支援特化</p>
                </div>
              </div>

              <div className="text-stone-700 leading-loose space-y-8 text-base md:text-lg">
                <p>
                  現場で出会った支援者の疲弊や孤立を目の当たりにし、<br className="hidden md:block" />
                  支援する側が立ち止まれる場の必要性を感じました。
                </p>
                <p>
                  対人援助職として現場に携わる中で、<br className="hidden md:block" />
                  「支援する側が疲弊し、土台から崩れていく構造」に強い問題意識を持つようになりました。
                </p>
                <p>
                  支援者は、責任・役割・感情労働を日常的に抱えています。<br className="hidden md:block" />
                  その負荷は、本人の努力不足ではなく、構造上の問題であることが多くあります。
                </p>
                <p>
                  私は感情の共感だけで終わらせるのではなく、<br className="hidden md:block" />
                  思考の癖、役割過多、責任の抱え込み、期待とのズレなどを整理し、<br className="hidden md:block" />
                  「消耗を減らす設計」に立ち戻る支援を行っています。
                </p>
                
                <div className="pt-8 border-t border-stone-100">
                  <h4 className="text-xs font-medium text-stone-400 mb-4 tracking-[0.3em] uppercase">活動歴</h4>
                  <p className="text-stone-600 text-sm md:text-base">
                    医療・福祉・教育領域での実務経験を経て、個別面談・ケース支援・支援者支援に従事。現在はオンラインを中心に活動。
                  </p>
                </div>

                <div className="pt-6 border-t border-stone-100 text-center">
                  <p className="font-medium text-stone-900 mb-2">強くなることを目指すのではなく、</p>
                  <p className="text-xl text-stone-900">持続可能な状態に戻すこと。</p>
                  <p className="mt-6 text-stone-600">支援を続けられる土台を整えることが、私の役割です。</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-24 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-4xl mx-auto">
          <motion.div className="space-y-16">
            <div className="text-center">
              <span className="text-xs tracking-[0.4em] text-stone-500 uppercase">Guide</span>
              <h2 className="text-2xl font-medium mt-4 tracking-wider">ご利用案内</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 md:p-10 border border-stone-800 rounded-2xl space-y-8">
                <div className="flex items-center space-x-4">
                  <Monitor className="w-6 h-6 text-stone-500" />
                  <h3 className="text-xl font-medium tracking-wider">オンラインカウンセリング</h3>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                      <span className="text-stone-500 text-[10px] md:text-xs tracking-widest uppercase">初回体験 (30分)</span>
                      <span className="text-base md:text-lg text-emerald-400 whitespace-nowrap">5,000円 (税込)</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                      <span className="text-stone-500 text-[10px] md:text-xs tracking-widest uppercase">通常 30分</span>
                      <span className="text-base md:text-lg whitespace-nowrap">8,000円 (税込)</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                      <span className="text-stone-500 text-[10px] md:text-xs tracking-widest uppercase">通常 60分</span>
                      <span className="text-base md:text-lg whitespace-nowrap">12,000円 (税込)</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline pb-2">
                    <span className="text-stone-500 text-[10px] md:text-xs tracking-widest uppercase">形式</span>
                    <span className="text-base md:text-lg">Google Meet</span>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-10 border border-stone-800 rounded-2xl space-y-8">
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
                ※ キャンセルは24時間前まで無料です。それ以降は所定のキャンセル料を申し受けます。
              </p>
              <p className="text-stone-400 text-sm tracking-widest">
                ※ 継続的なサポートをご希望の方には、お得な継続コースもご案内しております。
              </p>
              <p className="text-stone-400 text-sm tracking-widest">
                ※ 守秘義務を厳守いたします。安心してご相談ください。
              </p>
              <p className="text-stone-400 text-sm tracking-widest">
                ※ 医療行為は行っておりません。緊急性の高い場合は専門機関をご案内いたします。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div className="space-y-16">
            <div className="text-center">
              <span className="text-xs tracking-[0.4em] text-stone-400 uppercase">Contact</span>
              <h2 className="text-2xl font-medium mt-4 tracking-wider">お問い合わせ</h2>
            </div>

            <div className="text-center bg-stone-50/50 p-6 md:p-12 rounded-3xl border border-stone-100">
              <p className="text-stone-800 mb-8 text-base md:text-lg leading-relaxed">
                小さな違和感の段階でも構いません。<br className="hidden md:block" />
                まずは一度、整理の時間を持ってみませんか。
              </p>
              <p className="text-stone-500 mb-6 text-sm md:text-base">
                現在フォーム調整中のため、恐れ入りますが<br className="hidden md:block" />下記メールアドレスまで直接ご連絡ください。
              </p>

              <a 
                href="mailto:ish1zue.counseling@gmail.com" 
                className="text-sm md:text-2xl text-stone-800 underline underline-offset-8 hover:text-stone-900 transition-colors font-medium whitespace-nowrap"
              >
                ish1zue.counseling@gmail.com
              </a>

              <p className="text-xs md:text-sm text-stone-400 mt-8 tracking-widest">
                通常24時間以内に返信いたします。守秘義務を厳守いたします。
              </p>
            </div>
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
                      <span>24時間前までのキャンセル</span>
                      <span className="font-medium text-stone-900">無料</span>
                    </li>
                    <li className="flex justify-between border-b border-stone-50 pb-2">
                      <span>24時間以内のキャンセル</span>
                      <span className="font-medium text-stone-900">料金の50%</span>
                    </li>
                    <li className="flex justify-between border-b border-stone-50 pb-2">
                      <span>当日・無断キャンセル</span>
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
</>
)
}
