import { Helmet } from "react-helmet-async";

const T = {
  brown:      "#2C1F14",
  brownMid:   "#5C3D2E",
  cream:      "#FDFCFB",
  creamDark:  "#F5F0EB",
  creamDeep:  "#EDE4D8",
  accent:     "#7A4F2F",
  accentLight:"#C4956A",
  sage:       "#8FAF9F",
  border:     "rgba(44,31,20,0.12)",
  borderMid:  "rgba(44,31,20,0.22)",
  muted:      "rgba(44,31,20,0.55)",
  faint:      "rgba(44,31,20,0.35)",
};

const LINE_URL = "https://lin.ee/NL0PnYR";

function Label({ text }: { text: string }) {
  return (
    <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", color: T.accentLight, textTransform: "uppercase", marginBottom: "8px", fontFamily: "sans-serif" }}>
      {text}
    </p>
  );
}

function Check({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
      <span style={{ color: T.sage, fontSize: "16px", flexShrink: 0, marginTop: "1px" }}>✓</span>
      <p style={{ fontSize: "14px", color: T.brownMid, lineHeight: 1.7, fontFamily: "sans-serif", margin: 0 }}>{text}</p>
    </div>
  );
}

function CtaButton({ label = "LINEで無料で受け取る" }: { label?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
        background: "#06C755", color: "#fff",
        borderRadius: "6px", padding: "16px 28px",
        fontSize: "15px", fontWeight: 700,
        textDecoration: "none", fontFamily: "sans-serif",
        letterSpacing: "0.03em", width: "100%", boxSizing: "border-box",
        boxShadow: "0 4px 14px rgba(6,199,85,0.35)",
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
      </svg>
      {label}
    </a>
  );
}

export default function LineRegisterLP() {
  return (
    <>
      <Helmet>
        <title>共感疲労を整理して回復するLINE｜こころの相談室 いしずえ</title>
        <meta name="description" content="支援職のための共感疲労回復LINE。登録特典：共感疲労チェック完全版PDF（20項目・タイプ別解説）を無料でお届けします。" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div style={{ background: T.cream, color: T.brown, fontFamily: "'Noto Serif JP', serif", lineHeight: 1.8, minHeight: "100vh" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>

          {/* ① HERO */}
          <section style={{ padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.14em", color: T.accentLight, fontFamily: "sans-serif", marginBottom: "1.2rem", textTransform: "uppercase" }}>
              支援職専門カウンセラーからのLINE
            </p>
            <h1 style={{ fontSize: "clamp(20px,4vw,28px)", fontWeight: 400, lineHeight: 1.7, color: T.brown, marginBottom: "1.4rem" }}>
              支援職のための<br />
              <span style={{ color: T.accent, fontWeight: 500 }}>「共感疲労を整理して<br />回復するLINE」</span>
            </h1>

            {/* 共感ポイント */}
            <div style={{ background: T.creamDark, border: `0.5px solid ${T.border}`, borderRadius: "8px", padding: "1.2rem 1.4rem", marginBottom: "2rem", textAlign: "left" }}>
              {[
                "休んでも疲れが回復しない",
                "仕事のことが頭から離れない",
                "セルフケアしようとしても続かない",
                "「自分が弱いのかも」と感じてしまう",
              ].map(t => <Check key={t} text={t} />)}
              <p style={{ fontSize: "13px", color: T.muted, marginTop: "1rem", paddingTop: "1rem", borderTop: `0.5px solid ${T.border}`, fontFamily: "sans-serif" }}>
                そんな状態を、構造から整理します。
              </p>
            </div>

            <CtaButton />
            <p style={{ fontSize: "11px", color: T.faint, marginTop: "10px", fontFamily: "sans-serif" }}>
              勧誘なし ／ いつでも解除OK ／ 無料
            </p>
          </section>

          {/* ② このLINEでできること */}
          <section style={{ padding: "2.5rem 1.5rem", borderTop: `0.5px solid ${T.border}` }}>
            <Label text="このLINEでは" />
            <h2 style={{ fontSize: "clamp(17px,3vw,21px)", fontWeight: 400, color: T.brown, marginBottom: "1.2rem", lineHeight: 1.65 }}>
              共感疲労の整理から回復まで、<br />順番にお届けします
            </h2>
            <p style={{ fontSize: "14px", color: T.muted, marginBottom: "1.6rem", fontFamily: "sans-serif" }}>
              記事を読んで「なるほど」で終わるのではなく、
              自分の状態を整理して、回復の入口を見つけることを目的にしています。
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { step: "01", title: "共感疲労の状態チェック（完全版）", body: "20項目で今の消耗度を可視化。4タイプで判定し、回復の優先順位がわかります。" },
                { step: "02", title: "回復できる人・できない人の違い", body: "意志の強さではなく「回復の入口の形を知っているかどうか」の違いを解説します。" },
                { step: "03", title: "セルフケアが続かない理由と対処", body: "「わかっているのにできない」の構造的な理由と、小さく始める方法をお届けします。" },
              ].map(item => (
                <div key={item.step} style={{ display: "flex", gap: "14px", background: T.creamDark, borderRadius: "6px", padding: "1rem 1.2rem", border: `0.5px solid ${T.border}` }}>
                  <p style={{ fontSize: "11px", color: T.accentLight, letterSpacing: "0.15em", flexShrink: 0, paddingTop: "2px", fontFamily: "sans-serif" }}>{item.step}</p>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 500, color: T.brown, marginBottom: "4px" }}>{item.title}</p>
                    <p style={{ fontSize: "13px", color: T.muted, lineHeight: 1.75, fontFamily: "sans-serif", margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ③ 特典 */}
          <section style={{ padding: "2.5rem 1.5rem", background: T.creamDeep, borderTop: `0.5px solid ${T.border}` }}>
            <Label text="登録特典" />
            <h2 style={{ fontSize: "clamp(17px,3vw,21px)", fontWeight: 400, color: T.brown, marginBottom: "1.6rem", lineHeight: 1.65 }}>
              登録するだけで、2つのPDFを<br />無料でお届けします
            </h2>

            {/* 特典① */}
            <div style={{ background: T.cream, border: `1px solid ${T.sage}`, borderRadius: "8px", padding: "1.4rem", marginBottom: "12px" }}>
              <p style={{ fontSize: "11px", color: T.sage, fontFamily: "sans-serif", letterSpacing: "0.12em", marginBottom: "6px" }}>特典① メイン</p>
              <p style={{ fontSize: "16px", fontWeight: 500, color: T.brown, marginBottom: "8px", lineHeight: 1.5 }}>
                共感疲労チェック完全版PDF
              </p>
              <p style={{ fontSize: "13px", color: T.muted, marginBottom: "12px", fontFamily: "sans-serif" }}>
                20項目で消耗度を判定。4タイプに分類して、タイプ別の回復アドバイスをお届けします。
              </p>
              {[
                "あなたの状態を4タイプで判定",
                "タイプ別の回復の優先順位がわかる",
                "「何をすればいいか」が明確になる",
              ].map(t => <Check key={t} text={t} />)}
            </div>

            {/* 特典② */}
            <div style={{ background: T.cream, border: `0.5px solid ${T.borderMid}`, borderRadius: "8px", padding: "1.4rem", marginBottom: "1.6rem" }}>
              <p style={{ fontSize: "11px", color: T.accentLight, fontFamily: "sans-serif", letterSpacing: "0.12em", marginBottom: "6px" }}>特典② 追加</p>
              <p style={{ fontSize: "16px", fontWeight: 500, color: T.brown, marginBottom: "8px", lineHeight: 1.5 }}>
                回復できる人・できない人の違いPDF
              </p>
              <p style={{ fontSize: "13px", color: T.muted, fontFamily: "sans-serif" }}>
                意志の強さではなく「回復の入口の形を知っているかどうか」の違いを5つの分岐点で解説します。
              </p>
            </div>

            <CtaButton />
            <p style={{ fontSize: "11px", color: T.faint, marginTop: "10px", textAlign: "center", fontFamily: "sans-serif" }}>
              勧誘なし ／ いつでも解除OK ／ 無料
            </p>
          </section>

          {/* ④ 誰が配信しているか */}
          <section style={{ padding: "2.5rem 1.5rem", borderTop: `0.5px solid ${T.border}` }}>
            <Label text="配信者について" />
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "50%", overflow: "hidden", border: `0.5px solid ${T.borderMid}`, flexShrink: 0 }}>
                <img src="/profile.jpg" alt="松本龍児" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div>
                <p style={{ fontSize: "15px", fontWeight: 500, color: T.brown, marginBottom: "4px" }}>松本 龍児</p>
                <p style={{ fontSize: "12px", color: T.accentLight, fontFamily: "sans-serif", marginBottom: "8px" }}>公認心理師 ／ 支援職専門カウンセラー</p>
                <p style={{ fontSize: "13px", color: T.muted, lineHeight: 1.8, fontFamily: "sans-serif" }}>
                  障害福祉分野15年・累計300名以上6,000時間以上の支援経験。共感疲労・バーンアウトを専門に、支援職の消耗を構造から整理するカウンセリングを行っています。
                </p>
              </div>
            </div>
          </section>

          {/* ⑤ よくある質問 */}
          <section style={{ padding: "2.5rem 1.5rem", background: T.creamDark, borderTop: `0.5px solid ${T.border}` }}>
            <Label text="よくある質問" />
            {[
              { q: "勧誘や営業はありますか？", a: "ありません。カウンセリングへの誘導も、必要な方が自分で選んでいただく形にしています。" },
              { q: "いつでも解除できますか？", a: "はい。LINEの「ブロック」または「友だち削除」でいつでも解除できます。" },
              { q: "個人情報は必要ですか？", a: "LINE登録のみでOKです。名前・メールアドレスなどの入力は不要です。" },
              { q: "支援職以外でも登録できますか？", a: "どなたでも登録いただけます。ただし内容は支援職向けに特化しています。" },
            ].map((faq, i) => (
              <div key={i} style={{ borderBottom: `0.5px solid ${T.border}`, paddingBottom: "1rem", marginBottom: "1rem" }}>
                <p style={{ fontSize: "14px", fontWeight: 500, color: T.brown, marginBottom: "4px" }}>Q. {faq.q}</p>
                <p style={{ fontSize: "13px", color: T.muted, fontFamily: "sans-serif" }}>A. {faq.a}</p>
              </div>
            ))}
          </section>

          {/* ⑥ 最終CTA */}
          <section style={{ padding: "3rem 1.5rem", textAlign: "center" }}>
            <p style={{ fontSize: "18px", fontWeight: 400, color: T.brown, marginBottom: "0.6rem", lineHeight: 1.7 }}>
              まず、自分の状態を<br />整理することから始めませんか。
            </p>
            <p style={{ fontSize: "13px", color: T.muted, marginBottom: "1.8rem", fontFamily: "sans-serif" }}>
              特典PDFは登録後すぐにお届けします。
            </p>
            <CtaButton label="LINEで無料で受け取る（登録30秒）" />
            <p style={{ fontSize: "11px", color: T.faint, marginTop: "10px", fontFamily: "sans-serif" }}>
              勧誘なし ／ いつでも解除OK ／ 支援職専門カウンセラーが配信
            </p>
          </section>

        </div>
      </div>
    </>
  );
}
