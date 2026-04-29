/**
 * LineCta.tsx
 * 記事内LINE登録バナー（共通コンポーネント）
 */

const LINE_URL = "https://lin.ee/NL0PnYR";

/**
 * LineCtaSmall — 冒頭・中盤用（感情直撃型・コンパクト）
 */
export function LineCtaSmall() {
  return (
    <div
      style={{
        borderLeft: "3px solid #8FAF9F",
        paddingLeft: "1rem",
        margin: "1.5rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          color: "#2C1F14",
          lineHeight: 1.7,
          fontFamily: "'Noto Serif JP', serif",
          margin: 0,
        }}
      >
        「休んでも回復しない状態」を<br />
        一人で整理しようとしなくて大丈夫です。
      </p>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          background: "#06C755",
          color: "#fff",
          borderRadius: "5px",
          padding: "9px 16px",
          fontSize: "13px",
          fontWeight: 700,
          textDecoration: "none",
          fontFamily: "sans-serif",
          alignSelf: "flex-start",
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
        </svg>
        PDF特典をLINEで受け取る（無料）
      </a>
      <p
        style={{
          fontSize: "11px",
          color: "rgba(44,31,20,0.35)",
          fontFamily: "sans-serif",
          margin: 0,
        }}
      >
        勧誘なし ／ いつでも解除OK
      </p>
    </div>
  );
}

/**
 * LineCta — CV前用（フル版）
 */
export default function LineCta() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f0f7f4 0%, #ffffff 60%, #e8f4ef 100%)",
        border: "1.5px solid rgba(143,175,159,0.4)",
        borderRadius: "14px",
        padding: "1.4rem",
        margin: "2rem 0",
      }}
    >
      <p
        style={{
          fontSize: "11px",
          letterSpacing: "0.14em",
          color: "#8FAF9F",
          fontFamily: "sans-serif",
          marginBottom: "6px",
          textTransform: "uppercase",
        }}
      >
        無料LINE登録特典
      </p>
      <p
        style={{
          fontSize: "15px",
          fontWeight: 500,
          color: "#2C1F14",
          marginBottom: "6px",
          lineHeight: 1.6,
          fontFamily: "'Noto Serif JP', serif",
        }}
      >
        共感疲労チェック完全版PDFを<br />無料でお届けします
      </p>
      <p
        style={{
          fontSize: "12px",
          color: "rgba(44,31,20,0.55)",
          fontFamily: "sans-serif",
          marginBottom: "14px",
          lineHeight: 1.75,
        }}
      >
        20項目で消耗度を判定・4タイプ別アドバイス付き。
        登録後すぐにお届けします。
      </p>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          background: "#06C755",
          color: "#fff",
          borderRadius: "6px",
          padding: "12px 20px",
          fontSize: "14px",
          fontWeight: 700,
          textDecoration: "none",
          fontFamily: "sans-serif",
          boxShadow: "0 3px 10px rgba(6,199,85,0.3)",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
        </svg>
        LINEで無料で受け取る
      </a>
      <p
        style={{
          fontSize: "11px",
          color: "rgba(44,31,20,0.35)",
          fontFamily: "sans-serif",
          textAlign: "center",
          marginTop: "8px",
        }}
      >
        勧誘なし ／ いつでも解除OK ／ 登録30秒
      </p>
    </div>
  );
}
