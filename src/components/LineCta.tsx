/**
 * LineCta.tsx
 * 記事内LINE登録バナー（共通コンポーネント）
 */

const LINE_URL = "https://lin.ee/NL0PnYR";

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
