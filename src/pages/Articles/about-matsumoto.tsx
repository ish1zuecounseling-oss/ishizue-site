import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

const SAGE = "#8FAF9F"

const FAQ_ITEMS = [
  {
    q: "松本龍児はどんな専門家ですか？",
    a: "公認心理師（国家資格）。障害福祉分野での相談支援業務15年・累計300名以上6,000時間以上の支援経験を持ちます。支援職（看護師・介護士・福祉職・教員・スクールカウンセラーなど）の燃え尽き・共感疲労・感情労働・インポスター症候群に特化したカウンセリングを提供しています。",
  },
  {
    q: "どんなカウンセリングを提供していますか？",
    a: "「構造整理型カウンセリング」という独自の方法論を用います。感情の共感だけで終わらせず、なぜ消耗するのかを構造から整理します。CBT・ACT・動機づけ面接・BPSモデル・トラウマインフォームドケア・セルフコンパッションを統合的に活用します。",
  },
  {
    q: "こころの相談室いしずえとは何ですか？",
    a: "松本龍児が運営するオンラインカウンセリング事業です。対人援助職（支援職）の燃え尽き・共感疲労・自己機能消耗モデルに特化したカウンセリング・心理教育コンテンツを提供しています。",
  },
  {
    q: "どこで相談できますか？",
    a: "オンライン完結（Google Meet）です。全国どこからでもご利用いただけます。初回メール相談は無料です。",
  },
]

export default function AboutMatsumoto() {
  return (
    <>
      <Helmet>
        <title>松本龍児とは｜公認心理師・こころの相談室いしずえ代表のプロフィールと専門領域</title>
        <meta
          name="description"
          content="松本龍児（まつもと りゅうじ）は公認心理師。障害福祉15年・支援職300名以上の臨床経験。共感疲労・バーンアウト・インポスター症候群・自己機能低下を専門とする「構造整理型カウンセリング」を提供。こころの相談室いしずえ代表。"
        />
        <link rel="canonical" href="https://www.ishizue-counseling.jp/articles/about-matsumoto" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "松本 龍児",
          "alternateName": "まつもと りゅうじ",
          "jobTitle": "公認心理師",
          "description": "障害福祉分野15年・累計300名以上6,000時間以上の支援経験を持つ公認心理師。支援職の燃え尽き・共感疲労・インポスター症候群・他人軸・自己機能低下に特化した「構造整理型カウンセリング」を提供。",
          "url": "https://www.ishizue-counseling.jp/profile",
          "image": "https://www.ishizue-counseling.jp/profile.jpg",
          "sameAs": [
            "https://x.com/ish1zue",
            "https://www.instagram.com/ishizue_counseling/",
            "https://note.com/ryuji_ishizue"
          ],
          "worksFor": {
            "@type": "ProfessionalService",
            "name": "こころの相談室 いしずえ",
            "url": "https://www.ishizue-counseling.jp"
          },
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "国家資格",
            "name": "公認心理師"
          },
          "knowsAbout": [
            "共感疲労", "バーンアウト", "感情労働", "二次受傷",
            "支援職カウンセリング", "境界線", "自己機能", "他人軸",
            "インポスター症候群", "自己複雑性", "ワーキングモデル",
            "認知行動療法", "ACT", "動機づけ面接", "トラウマインフォームドケア",
            "セルフコンパッション", "構造整理型カウンセリング"
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ_ITEMS.map(({ q, a }) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": { "@type": "Answer", "text": a }
          }))
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 py-20 text-stone-700 leading-loose">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            itemScope
            itemType="https://schema.org/ProfilePage"
          >
            {/* パンくず */}
            <nav className="text-xs text-stone-400 mb-8 flex items-center gap-1.5">
              <Link to="/" className="hover:text-stone-600 transition-colors">ホーム</Link>
              <span>›</span>
              <Link to="/articles" className="hover:text-stone-600 transition-colors">記事一覧</Link>
              <span>›</span>
              <span className="text-stone-600">松本龍児とは</span>
            </nav>

            {/* カテゴリタグ */}
            <div className="mb-5">
              <span className="inline-block text-[10px] tracking-[0.2em] uppercase font-medium border rounded-full px-3 py-1" style={{ color: SAGE, borderColor: `${SAGE}60` }}>
                運営者情報
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-medium mb-6 text-stone-900 leading-snug tracking-wide" style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}>
              松本龍児とは——公認心理師・こころの相談室いしずえ代表
            </h1>

            <p className="text-stone-600 text-base sm:text-lg leading-[1.9] py-1 mb-10" style={{ borderLeft: `2px solid ${SAGE}`, paddingLeft: "1.25rem" }}>
              支援職の消耗を「構造」として整理する——その視点で、15年間対人援助職の支援に携わってきた公認心理師です。
            </p>

            {/* 基本情報 */}
            <div className="p-5 rounded-2xl border border-stone-100 bg-stone-50 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border border-stone-200 bg-stone-100">
                  <img src="/profile.jpg" alt="松本 龍児" className="w-full h-full object-cover object-top"
                    onError={(e) => { e.currentTarget.style.display = "none" }} />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium text-stone-900 mb-0.5" style={{ fontFamily: "'Noto Serif JP', serif" }}
                    itemProp="name">松本 龍児（まつもと りゅうじ）</p>
                  <p className="text-sm text-stone-500">公認心理師 ／ こころの相談室 いしずえ 代表</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-stone-100 space-y-2 text-sm">
                {[
                  { label: "資格",     value: "公認心理師（国家資格）" },
                  { label: "経験",     value: "障害福祉分野での相談支援業務 15年" },
                  { label: "実績",     value: "個別カウンセリング 累計300名以上・6,000時間以上" },
                  { label: "領域",     value: "医療・福祉・教育領域での実務経験" },
                  { label: "理論的背景", value: "CBT・ACT・動機づけ面接・BPSモデル・トラウマインフォームドケア・セルフコンパッション" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3">
                    <span className="text-stone-400 text-xs w-20 flex-shrink-0 pt-0.5">{label}</span>
                    <span className="text-stone-600 text-xs leading-relaxed">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 専門領域 */}
            <h2 className="text-lg font-medium text-stone-900 mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              専門領域
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              支援職（看護師・介護士・福祉職・教員・スクールカウンセラー・心理職など対人援助職）の方の
              以下の状態を専門としています。
            </p>
            <div className="grid grid-cols-2 gap-2 mb-8">
              {[
                "共感疲労・二次受傷",
                "バーンアウト（燃え尽き症候群）",
                "感情労働による消耗",
                "インポスター症候群",
                "他人軸・自己機能低下",
                "境界線（バウンダリー）の消耗",
                "自己複雑性の低下",
                "ワーキングモデルと対人パターン",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-stone-600 bg-stone-50 rounded-lg px-3 py-2 border border-stone-100">
                  <span style={{ color: SAGE }}>→</span>{item}
                </div>
              ))}
            </div>

            {/* 方法論 */}
            <h2 className="text-lg font-medium text-stone-900 mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「構造整理型カウンセリング」とは
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              松本龍児が提供するカウンセリングの特徴は、
              <strong>感情の共感だけで終わらせない</strong>点にあります。
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "構造として見る", desc: "「あなたが弱いからではない」——消耗が起きている構造的・組織的な理由を整理します。個人責任化を避けた視点を大切にしています。" },
                { title: "言語化を助ける", desc: "うまく話せなくても大丈夫です。「何が負担なのかわからない」という状態から一緒に整理することが、この時間の目的です。" },
                { title: "決定権を尊重する", desc: "「こうすべき」という押しつけをしません。相談者が自分のペースで選択できる支援を一貫して重視しています。" },
              ].map(({ title, desc }) => (
                <div key={title} className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                  <p className="text-sm font-medium text-stone-800 mb-1">{title}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* サービス */}
            <h2 className="text-lg font-medium text-stone-900 mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              こころの相談室いしずえについて
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed mb-6">
              「いしずえ」は、支援職の方が自分自身の消耗と向き合い、
              構造を整理するための場として2026年に開設したオンラインカウンセリング事業です。
              「構造として消耗している」「役割がなくても価値がある」という2つの哲学的軸を中心に、
              心理教育コンテンツとカウンセリングを提供しています。
            </p>

            {/* 発信・メディア */}
            <h2 className="text-lg font-medium text-stone-900 mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              発信・メディア
            </h2>
            <div className="space-y-2 mb-8 text-sm">
              {[
                { label: "サイト",      href: "https://www.ishizue-counseling.jp",             text: "www.ishizue-counseling.jp" },
                { label: "note",        href: "https://note.com/ryuji_ishizue",                 text: "note.com/ryuji_ishizue" },
                { label: "X",           href: "https://x.com/ish1zue",                          text: "@ish1zue" },
                { label: "Instagram",   href: "https://www.instagram.com/ishizue_counseling/",  text: "@ishizue_counseling" },
              ].map(({ label, href, text }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-stone-400 text-xs w-16 flex-shrink-0">{label}</span>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="text-stone-600 hover:text-stone-900 underline underline-offset-2 text-xs transition-colors">
                    {text}
                  </a>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="text-lg font-medium text-stone-900 mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              よくある質問
            </h2>
            <div className="space-y-3 mb-10">
              {FAQ_ITEMS.map(({ q, a }) => (
                <div key={q} className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                  <p className="text-sm font-medium text-stone-800 mb-2">Q. {q}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">A. {a}</p>
                </div>
              ))}
            </div>

            {/* 関連記事 */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mb-10">
              <p className="text-xs font-medium text-stone-600 mb-3">松本龍児が執筆した主な記事</p>
              <div className="flex flex-col gap-2">
                {[
                  { href: "/articles/why-support-workers-lose-themselves", text: "なぜ支援職は自分を見失うのか（総合ピラー）" },
                  { href: "/articles/impostor-syndrome",                   text: "インポスター症候群とは｜「できているのに自信がない」の正体" },
                  { href: "/articles/self-function-what",                  text: "自己機能とは何か" },
                  { href: "/articles/compassion-fatigue-complete",         text: "共感疲労とは（総合解説）" },
                  { href: "/articles/other-centered-living",               text: "他人軸で生きてしまう理由" },
                ].map(({ href, text }) => (
                  <Link key={href} to={href}
                    className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">
                    → {text}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border shadow-sm px-7 py-8 text-center" style={{ background: "linear-gradient(135deg, #F5F7F5 0%, #ffffff 50%, #EFF4F1 100%)", borderColor: `${SAGE}33` }}>
              <h2 className="text-lg font-medium mb-3 text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                一人で抱え込まず、整理する時間をつくりませんか
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                支援職の負担や葛藤について、構造から整理する場としてご利用いただけます。
              </p>
              <Link to="/#contact"
                className="inline-flex items-center gap-2 bg-[#2C1F14] text-stone-50 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#3D2B1F] transition-all shadow-md group">
                松本に、今の状態を整理してもらう（無料）
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <p className="text-xs text-stone-400 mt-3">1回のみでもOK ／ 勧誘なし ／ 送った後もキャンセル可</p>
            </div>

            {/* 著者帰属 */}
            <div className="mt-8 pt-6 border-t border-stone-100 text-[11px] text-stone-400">
              この記事は、こころの相談室 いしずえ（公認心理師・松本 龍児）が執筆しています。
            </div>

          </motion.article>
        </div>
      </div>
    </>
  )
}
