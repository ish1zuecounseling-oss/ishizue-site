import { Helmet } from "react-helmet-async"

export default function TokushoPage() {
  return (
    <>
      <Helmet>
        <title>特定商取引法に基づく表記｜こころの相談室 いしずえ</title>
        <meta name="description" content="こころの相談室 いしずえの特定商取引法に基づく表記です。" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-xl font-bold text-stone-800 mb-8">特定商取引法に基づく表記</h1>

        <div className="space-y-4">
          {[
            { label: "事業者名", value: "こころの相談室 いしずえ" },
            { label: "運営責任者", value: "松本龍児（公認心理師）" },
            { label: "所在地", value: "請求があった場合、遅滞なく開示します" },
            { label: "電話番号", value: "請求があった場合、遅滞なく開示します" },
            { label: "メールアドレス", value: "サイト内お問い合わせフォームよりご連絡ください" },
            { label: "サービス名", value: "オンラインカウンセリング（メール相談・ビデオ面談）" },
            {
              label: "料金",
              value: "初回メール相談：無料\nメールカウンセリング（3往復）：8,000円\nオンライン面談（50分）：8,000円\n※料金は税込表記。詳細はサービスページをご確認ください"
            },
            { label: "お支払い方法", value: "銀行振込・クレジットカード（PayPal経由）" },
            { label: "サービス提供時期", value: "お支払い確認後、原則3営業日以内にご案内します" },
            {
              label: "キャンセルポリシー",
              value: "ビデオ面談：24時間前までのキャンセルは料金不要。24時間以内のキャンセルは料金の50%、当日キャンセル・無断キャンセルは料金の100%を申し受けます\nメールカウンセリング：返信前のキャンセルは料金不要。返信開始後のキャンセルは使用回数分を申し受けます\n通信トラブル等の不測の事態については個別対応いたします"
            },
            { label: "返品・返金", value: "サービスの特性上、原則として返金は承っておりません。ただし、当方の都合によるサービス提供不可の場合は全額返金いたします" },
            {
              label: "サービス提供方法",
              value: "オンライン（Google Meet・メール）\n※対面カウンセリングは行っておりません"
            },
            { label: "領収書・明細", value: "ご希望の方には発行いたします。お問い合わせフォームよりご依頼ください" },
          ].map(({ label, value }) => (
            <div key={label} className="grid grid-cols-[160px_1fr] gap-4 py-3 border-b border-stone-100">
              <span className="text-sm font-medium text-stone-600">{label}</span>
              <span className="text-sm text-stone-700 whitespace-pre-line">{value}</span>
            </div>
          ))}
        </div>

        <p className="text-stone-400 text-xs mt-8">
          制定日：2026年4月　最終更新：2026年5月
        </p>
      </div>
    </>
  )
}
