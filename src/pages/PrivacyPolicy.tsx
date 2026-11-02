import { Helmet } from "react-helmet-async"

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>プライバシーポリシー｜こころの相談室 いしずえ</title>
        <meta name="description" content="こころの相談室 いしずえのプライバシーポリシーです。個人情報の取り扱い・守秘義務・情報管理方針を定めています。" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-xl font-bold text-stone-800 mb-8">プライバシーポリシー</h1>

        <div className="space-y-8 text-sm text-stone-600 leading-[1.9]">

          <section>
            <h2 className="text-base font-medium text-stone-800 mb-3">1. 事業者情報</h2>
            <p>こころの相談室 いしずえ<br />
            公認心理師 松本龍児<br />
            お問い合わせ：サイト内お問い合わせフォームよりご連絡ください</p>
          </section>

          <section>
            <h2 className="text-base font-medium text-stone-800 mb-3">2. 収集する個人情報</h2>
            <p>当サービスでは、以下の情報をご提供いただく場合があります。</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>お名前（ニックネーム可）</li>
              <li>メールアドレス</li>
              <li>ご住所（建物名・部屋番号まで）、電話番号、緊急連絡先（任意）</li>
              <li>ご相談内容</li>
              <li>ご使用のデバイス・アクセス情報（Google Analyticsによる匿名集計）</li>
              <li>LINE公式アカウントのユーザー識別子（LINEで「待つ」と返信された場合のみ。お名前やメッセージの内容は保存しません）</li>
              <li>「サイトの不具合・ご意見を送る」から送信された内容（種類・本文・送信元のページ・端末の種類・日時。お名前や連絡先、IPアドレスは保存しません）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-stone-800 mb-3">3. 個人情報の利用目的</h2>
            <p>収集した個人情報は、以下の目的にのみ使用します。</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>カウンセリングサービスの提供・予約管理</li>
              <li>お問い合わせへの返答</li>
              <li>緊急時の安全確保のための連絡（ご住所と電話番号は、面談中に通信が切れたときと緊急時にのみ使用します）</li>
              <li>サービス品質の向上</li>
              <li>サイトのアクセス解析（匿名・統計データ）</li>
              <li>受付再開のご案内（LINEで「待つ」と返信された方へのお知らせ。LINEをブロックされた時点で記録を削除します）</li>
              <li>サイトの不具合の修正・改善（「サイトの不具合・ご意見を送る」から届いた内容。新しいものから500件まで保存し、それより古いものは自動で削除します）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-stone-800 mb-3">4. 第三者への提供</h2>
            <p>
              ご相談内容を、ご本人の同意なく第三者に開示することはありません。<br />
              ただし、以下の場合は例外といたします。
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>ご本人の生命・身体・財産の保護のため緊急かつ必要な場合</li>
              <li>公衆衛生の向上または児童の健全な育成のために必要な場合</li>
              <li>法令に基づく要請がある場合</li>
            </ul>
            <p className="mt-2">
              ※自傷他害の危険性が高い状態にある場合、安全確保を最優先として関係機関と連携する場合があります。この点については初回相談時にご説明します。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-stone-800 mb-3">5. 面談の記録について</h2>
            <p>
              ご同意をいただいた場合に限り、面談の録画・文字起こしを行い、記録の整理や面談レポートの作成に、AIを含むツールを活用することがあります。
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>同意は任意です。同意しなくても面談はご利用いただけ、面談の内容も変わりません</li>
              <li>面談レポートは録画・文字起こしをもとに作成するため、ご同意いただいた方にお送りします</li>
              <li>AIサービスに入れる前に、お名前など個人が特定できる情報を取り除きます</li>
              <li>録画・文字起こし・AIサービスに入れたデータは、記録を作成したあとに消去します</li>
              <li>ご同意いただかない場合は、録画・録音は行わず、記録は当事業者が自分で作成します</li>
              <li>記録は当事業者のみが管理し、第三者への提供は行いません</li>
              <li>不要になった時点で削除いただけます。削除ご依頼はフォームよりご連絡ください</li>
              <li>お申し込み時の事前シート（ご住所・電話番号・緊急連絡先を含む）の回答は、当事業者のパソコンの記録に移したあと、フォームからは消去します。閲覧できるのは当事業者のみです</li>
              <li>ご相談の記録は、最後のご利用から5年間保管し、その後は復元できない方法で消去します</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-stone-800 mb-3">6. Googleアナリティクスについて</h2>
            <p>
              当サイトでは、アクセス解析のためGoogleアナリティクスを利用しています。
              Googleアナリティクスはクッキー（Cookie）を使用して情報を収集しますが、
              個人を特定する情報は収集しておりません。
              詳細は<a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline">Googleのプライバシーポリシー</a>をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-stone-800 mb-3">7. お問い合わせ・開示請求</h2>
            <p>
              ご自身の個人情報の開示・訂正・削除をご希望の場合は、サイト内のお問い合わせフォームよりご連絡ください。
              本人確認の上、合理的な期間内に対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-stone-800 mb-3">8. プライバシーポリシーの変更</h2>
            <p>本ポリシーは、必要に応じて変更することがあります。変更後はサイト上に掲載します。</p>
          </section>

          <p className="text-stone-400 text-xs pt-6 border-t border-stone-100">
            制定日：2026年4月　最終更新：2026年11月
          </p>
        </div>
      </div>
    </>
  )
}
