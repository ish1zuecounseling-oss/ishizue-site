/**
 * LineCta.tsx
 * 記事内LINE登録バナー（共通コンポーネント）
 * 「行動」ではなく「理解・納得」に寄せた文言
 * LINE登録時タグ分岐用パラメータ付き
 */

const LINE_URLS: Record<string, string> = {
  general:    "https://lin.ee/NL0PnYR",
  fatigue:    "https://lin.ee/oLdXZe6?type=fatigue",
  quit:       "https://lin.ee/5ExkSZw?type=quit",
  impostor:   "https://lin.ee/TZxEE00?type=impostor",
  compassion: "https://lin.ee/6H8Pzo6?type=compassion",
};

function lineUrl(type: string) {
  return LINE_URLS[type] ?? LINE_URLS.general;
}

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

/* LINE登録の理由（記事内共通テキスト） */
export function LineCtaReason({ text }: { text?: string }) {
  return (
    <p style={{ fontSize: "12px", color: "rgba(44,31,20,0.5)", fontFamily: "'Noto Serif JP', serif", lineHeight: 1.9, margin: "0 0 12px 0" }}>
      {text ?? "この状態は、放っておくと気づかないまま悪化することが多いです。段階ごとに整理した内容をLINEで順番に送っています。"}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*  LineCtaSmall — デフォルト（全記事共通）                                     */
/* -------------------------------------------------------------------------- */

export function LineCtaSmall() {
  return (
    <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.5rem 0", display: "flex", flexDirection: "column", gap: "10px" }}>
      <p style={{ fontSize: "13px", color: "#2C1F14", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
        この状態が続くと、どうなっていくのか——<br />
        段階ごとに整理した内容をLINEで送っています。
      </p>
      <a href={lineUrl("general")} target="_blank" rel="noopener noreferrer" onClick={() => trackClick("LineCtaSmall")}
        style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#06C755", color: "#fff", borderRadius: "5px", padding: "9px 16px", fontSize: "13px", fontWeight: 700, textDecoration: "none", fontFamily: "sans-serif", alignSelf: "flex-start" }}>
        {LINE_ICON}
        自分の状態をもう少し整理する（無料）
      </a>
      <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.35)", fontFamily: "sans-serif", margin: 0 }}>
        読むだけOK ／ 勧誘なし ／ いつでも解除OK
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  LineCtaFatigue — 疲れ・回復しない系                                         */
/* -------------------------------------------------------------------------- */

export function LineCtaFatigue() {
  return (
    <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.5rem 0", display: "flex", flexDirection: "column", gap: "10px" }}>
      <p style={{ fontSize: "13px", color: "#2C1F14", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
        「休んでも回復しない」状態は、放っておくと<br />
        自己機能全体の消耗に進むことがあります。<br />
        回復の段階別の整理をLINEで送っています。
      </p>
      <a href={lineUrl("fatigue")} target="_blank" rel="noopener noreferrer" onClick={() => trackClick("LineCtaFatigue")}
        style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#06C755", color: "#fff", borderRadius: "5px", padding: "9px 16px", fontSize: "13px", fontWeight: 700, textDecoration: "none", fontFamily: "sans-serif", alignSelf: "flex-start" }}>
        {LINE_ICON}
        この状態がどう進むか知っておく（無料）
      </a>
      <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.35)", fontFamily: "sans-serif", margin: 0 }}>
        読むだけOK ／ 勧誘なし ／ いつでも解除OK
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  LineCtaQuit — 辞めたい・仕事限界系                                           */
/* -------------------------------------------------------------------------- */

export function LineCtaQuit() {
  return (
    <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.5rem 0", display: "flex", flexDirection: "column", gap: "10px" }}>
      <p style={{ fontSize: "13px", color: "#2C1F14", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
        「辞めたいのに動けない」状態のまま続けると、<br />
        判断力がさらに落ちていきます。<br />
        同じ状態の人がどう整理しているか、LINEで送っています。
      </p>
      <a href={lineUrl("quit")} target="_blank" rel="noopener noreferrer" onClick={() => trackClick("LineCtaQuit")}
        style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#06C755", color: "#fff", borderRadius: "5px", padding: "9px 16px", fontSize: "13px", fontWeight: 700, textDecoration: "none", fontFamily: "sans-serif", alignSelf: "flex-start" }}>
        {LINE_ICON}
        同じ状態の人がどうなるか読む（無料）
      </a>
      <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.35)", fontFamily: "sans-serif", margin: 0 }}>
        まだ決めなくていい ／ 勧誘なし ／ いつでも解除OK
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  LineCtaImpostor — インポスター・自己機能系                                   */
/* -------------------------------------------------------------------------- */

export function LineCtaImpostor() {
  return (
    <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.5rem 0", display: "flex", flexDirection: "column", gap: "10px" }}>
      <p style={{ fontSize: "13px", color: "#2C1F14", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
        「いつかバレる」「自分がない」感覚は、<br />
        構造が見えると少しずつ変わります。<br />
        自己機能の回復ステップをLINEで整理して届けています。
      </p>
      <a href={lineUrl("impostor")} target="_blank" rel="noopener noreferrer" onClick={() => trackClick("LineCtaImpostor")}
        style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#06C755", color: "#fff", borderRadius: "5px", padding: "9px 16px", fontSize: "13px", fontWeight: 700, textDecoration: "none", fontFamily: "sans-serif", alignSelf: "flex-start" }}>
        {LINE_ICON}
        自分の状態の構造を整理する（無料）
      </a>
      <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.35)", fontFamily: "sans-serif", margin: 0 }}>
        読むだけOK ／ 勧誘なし ／ いつでも解除OK
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  LineCtaCompassion — 共感疲労・感情労働系                                     */
/* -------------------------------------------------------------------------- */

export function LineCtaCompassion() {
  return (
    <div style={{ borderLeft: "3px solid #8FAF9F", paddingLeft: "1rem", margin: "1.5rem 0", display: "flex", flexDirection: "column", gap: "10px" }}>
      <p style={{ fontSize: "13px", color: "#2C1F14", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
        共感疲労は、気づかないまま深まりやすい消耗です。<br />
        「今どの段階か」を知るだけで回復の方向が変わります。<br />
        段階別の整理をLINEで送っています。
      </p>
      <a href={lineUrl("compassion")} target="_blank" rel="noopener noreferrer" onClick={() => trackClick("LineCtaCompassion")}
        style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#06C755", color: "#fff", borderRadius: "5px", padding: "9px 16px", fontSize: "13px", fontWeight: 700, textDecoration: "none", fontFamily: "sans-serif", alignSelf: "flex-start" }}>
        {LINE_ICON}
        今どの段階か知っておく（無料）
      </a>
      <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.35)", fontFamily: "sans-serif", margin: 0 }}>
        読むだけOK ／ 勧誘なし ／ いつでも解除OK
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  LineCta — 記事末尾フル版（デフォルトexport）                                 */
/* -------------------------------------------------------------------------- */

export default function LineCta() {
  return (
    <div style={{ background: "linear-gradient(135deg, #f0f7f4 0%, #ffffff 60%, #e8f4ef 100%)", border: "1.5px solid rgba(143,175,159,0.4)", borderRadius: "14px", padding: "1.4rem", margin: "2rem 0" }}>
      <p style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#8FAF9F", fontFamily: "sans-serif", marginBottom: "6px", textTransform: "uppercase" }}>
        無料LINE登録
      </p>
      <p style={{ fontSize: "15px", fontWeight: 500, color: "#2C1F14", marginBottom: "4px", lineHeight: 1.6, fontFamily: "'Noto Serif JP', serif" }}>
        この状態、放っておくとどうなるか——
      </p>
      <p style={{ fontSize: "13px", color: "rgba(44,31,20,0.65)", fontFamily: "'Noto Serif JP', serif", marginBottom: "6px", lineHeight: 1.8 }}>
        段階ごとに整理した内容をLINEで順番に届けています。<br />
        まだ相談じゃなくていいです。読むだけでも。
      </p>
      <p style={{ fontSize: "12px", color: "rgba(44,31,20,0.45)", fontFamily: "sans-serif", marginBottom: "14px", lineHeight: 1.75 }}>
        共感疲労チェック完全版PDFを登録後すぐにお届けします。
      </p>
      <a href={lineUrl("general")} target="_blank" rel="noopener noreferrer" onClick={() => trackClick("LineCta")}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#06C755", color: "#fff", borderRadius: "6px", padding: "12px 20px", fontSize: "14px", fontWeight: 700, textDecoration: "none", fontFamily: "sans-serif", boxShadow: "0 3px 10px rgba(6,199,85,0.3)" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
        </svg>
        自分の状態をもう少し整理する（無料）
      </a>
      <p style={{ fontSize: "11px", color: "rgba(44,31,20,0.35)", fontFamily: "sans-serif", textAlign: "center", marginTop: "8px" }}>
        読むだけOK ／ 勧誘なし ／ いつでも解除OK ／ 登録30秒
      </p>
    </div>
  );
}
