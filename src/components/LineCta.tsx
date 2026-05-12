/**
 * LineCta.tsx
 * 記事内LINE登録バナー（共通コンポーネント）
 * 信頼構築フェーズ最適化版
 * - 状態別CTA対応
 * - 「まだ相談じゃなくていい」心理ハードル最小化
 */

const LINE_URL = "https://lin.ee/NL0PnYR";

const LINE_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
  </svg>
);

function trackClick(label: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "line_cta_click", {
      event_category: "CTA",
      event_label: label,
    });
  }
}

/* -------------------------------------------------------------------------- */
/*  LineCtaSmall — 記事冒頭・中盤用（コンパクト）                               */
/* -------------------------------------------------------------------------- */

export function LineCtaSmall() {
  return (
    <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.5rem 0", display: "flex", flexDirection: "column", gap: "10px" }}>
      <p style={{ fontSize: "13px", color: "#57534e", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
        まだ相談じゃなくていいです。<br />
        しんどいとき、整理のヒントを受け取る場所として使ってください。
      </p>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick("LineCtaSmall")}
        style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#06C755", color: "#fff", borderRadius: "5px", padding: "9px 16px", fontSize: "13px", fontWeight: 700, textDecoration: "none", fontFamily: "sans-serif", alignSelf: "flex-start" }}
      >
        {LINE_ICON}
        LINEで受け取る（無料・読むだけOK）
      </a>
      <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.35)", fontFamily: "sans-serif", margin: 0 }}>
        勧誘なし ／ いつでも解除OK
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  LineCtaFatigue — 疲れ・回復しない系記事用                                   */
/* -------------------------------------------------------------------------- */

export function LineCtaFatigue() {
  return (
    <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.5rem 0", display: "flex", flexDirection: "column", gap: "10px" }}>
      <p style={{ fontSize: "13px", color: "#57534e", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
        「休んでも回復しない」状態が続いているなら、<br />
        少しずつ整理できる情報をLINEで送っています。
      </p>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick("LineCtaFatigue")}
        style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#06C755", color: "#fff", borderRadius: "5px", padding: "9px 16px", fontSize: "13px", fontWeight: 700, textDecoration: "none", fontFamily: "sans-serif", alignSelf: "flex-start" }}
      >
        {LINE_ICON}
        LINEで受け取る（無料・読むだけOK）
      </a>
      <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.35)", fontFamily: "sans-serif", margin: 0 }}>
        勧誘なし ／ いつでも解除OK
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  LineCtaQuit — 辞めたい・仕事限界系記事用                                    */
/* -------------------------------------------------------------------------- */

export function LineCtaQuit() {
  return (
    <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.5rem 0", display: "flex", flexDirection: "column", gap: "10px" }}>
      <p style={{ fontSize: "13px", color: "#57534e", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
        「辞めるべきか」を一人で考え続けているなら、<br />
        整理のヒントをLINEで届けています。
      </p>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick("LineCtaQuit")}
        style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#06C755", color: "#fff", borderRadius: "5px", padding: "9px 16px", fontSize: "13px", fontWeight: 700, textDecoration: "none", fontFamily: "sans-serif", alignSelf: "flex-start" }}
      >
        {LINE_ICON}
        LINEで受け取る（まだ決めなくていい）
      </a>
      <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.35)", fontFamily: "sans-serif", margin: 0 }}>
        勧誘なし ／ いつでも解除OK
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  LineCtaImpostor — インポスター・自己機能系記事用                             */
/* -------------------------------------------------------------------------- */

export function LineCtaImpostor() {
  return (
    <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.5rem 0", display: "flex", flexDirection: "column", gap: "10px" }}>
      <p style={{ fontSize: "13px", color: "#57534e", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
        「できているのに自信がない」「自分がない感覚」——<br />
        その構造を少しずつ整理できる情報をLINEで送っています。
      </p>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick("LineCtaImpostor")}
        style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#06C755", color: "#fff", borderRadius: "5px", padding: "9px 16px", fontSize: "13px", fontWeight: 700, textDecoration: "none", fontFamily: "sans-serif", alignSelf: "flex-start" }}
      >
        {LINE_ICON}
        LINEで受け取る（無料・読むだけOK）
      </a>
      <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.35)", fontFamily: "sans-serif", margin: 0 }}>
        勧誘なし ／ いつでも解除OK
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  LineCtaCompassion — 共感疲労・感情労働系記事用                               */
/* -------------------------------------------------------------------------- */

export function LineCtaCompassion() {
  return (
    <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.5rem 0", display: "flex", flexDirection: "column", gap: "10px" }}>
      <p style={{ fontSize: "13px", color: "#57534e", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
        人の気持ちを受け取りすぎて消耗しているなら、<br />
        その構造と回復の方向をLINEで届けています。
      </p>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick("LineCtaCompassion")}
        style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#06C755", color: "#fff", borderRadius: "5px", padding: "9px 16px", fontSize: "13px", fontWeight: 700, textDecoration: "none", fontFamily: "sans-serif", alignSelf: "flex-start" }}
      >
        {LINE_ICON}
        LINEで受け取る（無料・読むだけOK）
      </a>
      <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.35)", fontFamily: "sans-serif", margin: 0 }}>
        勧誘なし ／ いつでも解除OK
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  LineCta — 記事末尾・フル版（デフォルトexport）                               */
/* -------------------------------------------------------------------------- */

export default function LineCta() {
  return (
    <div style={{ background: "linear-gradient(135deg, #f0f7f4 0%, #ffffff 60%, #e8f4ef 100%)", border: "1.5px solid rgba(143,175,159,0.4)", borderRadius: "14px", padding: "1.4rem", margin: "2rem 0" }}>
      <p style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#8FAF9F", fontFamily: "sans-serif", marginBottom: "6px", textTransform: "uppercase" }}>
        無料LINE登録
      </p>
      <p style={{ fontSize: "15px", fontWeight: 500, color: "#2C1F14", marginBottom: "4px", lineHeight: 1.6, fontFamily: "'Noto Serif JP', serif" }}>
        まだ相談じゃなくていいです。
      </p>
      <p style={{ fontSize: "13px", color: "rgba(44,31,20,0.65)", fontFamily: "'Noto Serif JP', serif", marginBottom: "6px", lineHeight: 1.75 }}>
        しんどいとき、整理のヒントを受け取る場所として使ってください。
      </p>
      <p style={{ fontSize: "12px", color: "rgba(44,31,20,0.45)", fontFamily: "sans-serif", marginBottom: "14px", lineHeight: 1.75 }}>
        共感疲労チェック完全版PDFを登録後すぐにお届けします。<br />
        週1回、状態別の整理ヒントを届けています。
      </p>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick("LineCta")}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#06C755", color: "#fff", borderRadius: "6px", padding: "12px 20px", fontSize: "14px", fontWeight: 700, textDecoration: "none", fontFamily: "sans-serif", boxShadow: "0 3px 10px rgba(6,199,85,0.3)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
        </svg>
        LINEで受け取る（無料・読むだけOK）
      </a>
      <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.35)", fontFamily: "sans-serif", textAlign: "center", marginTop: "8px" }}>
        勧誘なし ／ いつでも解除OK ／ 登録30秒
      </p>
    </div>
  );
}
