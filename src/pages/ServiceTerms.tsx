import { Helmet } from "react-helmet-async"

export default function ServiceTerms() {
  return (
    <>
      <Helmet>
        <title>ご利用規約・緊急時対応について｜こころの相談室 いしずえ</title>
        <meta name="description" content="こころの相談室 いしずえのご利用規約・守秘義務・緊急時対応についての説明です。" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-xl font-bold text-stone-800 mb-8">ご利用規約・緊急時対応について</h1>

        <div className="space-y-8 text-sm text-stone-600 leading-[1.9]">

          {/* 緊急時対応 - 最初に目立たせる */}
          <div className="p-4 rounded-xl border-2 border-stone-200 bg-stone-50">
            <h2 className="text-base font-medium text-stone-800 mb-3">⚠️ 本サービスが対応できないケース</h2>
            <p className="mb-2">以下の状態の方は、本サービスよりも先に医療機関または緊急相談窓口にご連絡ください。</p>
            <ul className="list-disc pl-5 space-y-1 text-stone-600">
              <li>死にたい・消えてしまいたいという気持ちが強く、今すぐ行動しそうな状態</li>
              <li>急性の精神症状（強い幻覚・幻聴・混乱状態など）がある</li>
              <li>自傷・他害の危険性が今すぐある状態</li>
            </ul>
            <div className="mt-3 pt-3 border-t border-stone-200 space-y-1 text-xs text-stone-500">
              <p>🆘 よりそいホットライン：0120-279-338（24時間）</p>
              <p>🆘 いのちの電話：0120-783-556（16時〜21時）</p>
              <p>🆘 救急：119 ／ 警察：110</p>
            </div>
            <p className="mt-3 text-xs text-stone-400">
              ※本サービスはカウンセリングサービスであり、医療機関ではありません。精神科的な診断・処方は行いません。
            </p>
          </div>

          <section>
            <h2 className="text-base font-medium text-stone-800 mb-3">1. 守秘義務</h2>
            <p>
              ご相談内容は、守秘義務のもと厳重に管理いたします。
              ご本人の同意なく第三者に開示することはありません。
            </p>
            <p className="mt-2">ただし、以下の場合は安全確保を優先して例外対応をとる場合があります。</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>ご本人や第三者の生命・身体に危険が及ぶと判断される場合</li>
              <li>法令に基づく情報開示要請があった場合</li>
              <li>児童虐待等、通告義務が生じる場合</li>
            </ul>
            <p className="mt-2 text-stone-500">
              ※守秘義務の範囲・例外については、初回相談時にご説明します。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-stone-800 mb-3">2. サービスの性質</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>本サービスはカウンセリング（心理相談）であり、医療行為ではありません</li>
              <li>精神科的診断・薬の処方・病状の診断は行いません</li>
              <li>症状の改善を保証するものではありません</li>
              <li>医療機関との並行利用を妨げるものではありません</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-stone-800 mb-3">3. 対象外となる方</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>現在、急性期の精神疾患の治療中の方（主治医にご相談ください）</li>
              <li>未成年の方（18歳未満）</li>
              <li>カウンセリングを目的としない方（ハラスメント目的等）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-stone-800 mb-3">4. 面談環境について</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>オンライン面談にはGoogle Meetを使用します</li>
              <li>プライバシーが確保できる環境でのご参加をお願いします</li>
              <li>通信トラブルが発生した場合は、日程調整または一部返金で対応します</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-stone-800 mb-3">5. 反社会的勢力の排除</h2>
            <p>
              当事業者は、暴力団等の反社会的勢力との関係を一切持たないことを宣言します。
              反社会的勢力に該当すると判断した場合、サービスの提供を中止し、支払い済み料金を返金することがあります。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-stone-800 mb-3">6. 規約の変更</h2>
            <p>本規約は、必要に応じて変更することがあります。変更後はサイト上に掲載します。</p>
          </section>

          <p className="text-stone-400 text-xs pt-6 border-t border-stone-100">
            制定日：2026年4月　最終更新：2026年5月
          </p>
        </div>
      </div>
    </>
  )
}
