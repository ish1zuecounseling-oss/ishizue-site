import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

const T = {
  brown:      "#2C1F14",
  brownMid:   "#5C3D2E",
  brownLight: "#8B6550",
  cream:      "#FDFCFB",
  creamDark:  "#F5F0EB",
  creamDeep:  "#EDE4D8",
  accent:     "#7A4F2F",
  accentLight:"#C4956A",
  border:     "rgba(44,31,20,0.12)",
  borderMid:  "rgba(44,31,20,0.22)",
  muted:      "rgba(44,31,20,0.55)",
  faint:      "rgba(44,31,20,0.35)",
};

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

function FadeIn({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

function Label({ text }: { text: string }) {
  return (
    <p style={{
      fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em",
      color: T.accentLight, textTransform: "uppercase",
      marginBottom: "0.5rem", fontFamily: "sans-serif",
    }}>{text}</p>
  );
}

function CtaButton({ label = "まずは無料メール相談" }: { label?: string }) {
  return (
    <a href="/#contact" style={{
      display: "inline-block",
      fontSize: "15px", fontWeight: 500,
      color: T.cream, background: T.brown,
      borderRadius: "4px", padding: "13px 32px",
      textDecoration: "none", letterSpacing: "0.04em",
      fontFamily: "sans-serif",
    }}>
      {label}
    </a>
  );
}

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);

  const creds = ["公認心理師", "福祉業界15年以上", "臨床300名以上", "オンライン対応", "支援職専門"];

  const fade = (delay: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "none" : "translateY(18px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section style={{
      padding: "5rem 1.5rem 4rem",
      textAlign: "center",
      borderBottom: `0.5px solid ${T.border}`,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "-60px", left: "50%",
        transform: "translateX(-50%)",
        width: "600px", height: "600px", borderRadius: "50%",
        background: `radial-gradient(circle, ${T.creamDeep} 0%, transparent 70%)`,
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
        <div style={fade(0)}>
          <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", color: T.accentLight, marginBottom: "1.4rem", fontFamily: "sans-serif" }}>
            支援職専門カウンセリング　こころの相談室 いしずえ
          </p>
        </div>
        <div style={fade(0.1)}>
          <h1 style={{ fontSize: "clamp(22px,4vw,30px)", fontWeight: 400, lineHeight: 1.7, color: T.brown, marginBottom: "1.2rem", letterSpacing: "0.02em" }}>
            あなたは、<br />
            <span style={{ color: T.accent, fontWeight: 500 }}>誰かのケアをする人</span>を<br />
            ケアしてもらえていますか。
          </h1>
        </div>
        <div style={fade(0.2)}>
          <p style={{ fontSize: "15px", color: T.muted, lineHeight: 1.9, marginBottom: "1.8rem", fontFamily: "sans-serif" }}>
            介護職・看護師・社会福祉士・支援員の方へ。<br />
            感情労働の疲れは、休んだだけでは回復しません。<br />
            「なぜそうなるのか」を一緒に整理することから始めます。
          </p>
        </div>
        <div style={fade(0.3)}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginBottom: "2rem" }}>
            {creds.map(c => (
              <span key={c} style={{
                fontSize: "12px", color: T.brownMid, background: T.creamDeep,
                border: `0.5px solid ${T.border}`, borderRadius: "20px",
                padding: "4px 13px", fontFamily: "sans-serif",
              }}>{c}</span>
            ))}
          </div>
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

function ForWhom() {
  const voices = [
    "利用者のことが、仕事を離れても頭から離れない",
    "やりがいを感じていたはずなのに、何も感じなくなった",
    "休んでも回復した気がしない。疲れが取れない",
    "辞めたいとは思うけど、辞めていいのかもわからない",
    "後輩の指導や管理業務まで重なって、限界に近い",
    "誰かに話したくても、職場では話せない",
  ];
  return (
    <section style={{ padding: "3.5rem 1.5rem", borderBottom: `0.5px solid ${T.border}` }}>
      <FadeIn>
        <Label text="こんな方へ" />
        <h2 style={{ fontSize: "clamp(18px,3vw,22px)", fontWeight: 400, marginBottom: "0.6rem", lineHeight: 1.6, color: T.brown }}>
          「支援者の自分」も、消耗します。
        </h2>
        <p style={{ fontSize: "14px", color: T.muted, marginBottom: "1.6rem", lineHeight: 1.9, fontFamily: "sans-serif" }}>
          支援職の疲れは「根性が足りない」のではありません。感情を使って働く構造そのものに、消耗の理由があります。
        </p>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "8px", marginBottom: "1.4rem" }}>
        {voices.map((v, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div style={{
              background: T.creamDark, border: `0.5px solid ${T.border}`,
              borderRadius: "4px", padding: "12px 16px",
              fontSize: "13px", color: T.brownMid, lineHeight: 1.75, fontFamily: "sans-serif",
            }}>
              <span style={{ color: T.accentLight }}>「</span>{v}<span style={{ color: T.accentLight }}>」</span>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.3}>
        <p style={{ fontSize: "13px", color: T.muted, textAlign: "center", lineHeight: 1.8, fontFamily: "sans-serif" }}>
          一つでも当てはまるなら、今のあなたには立ち止まる場所が必要かもしれません。
        </p>
      </FadeIn>
    </section>
  );
}

function Approach() {
  const items = [
    {
      title: "感情・思考・環境を整理する「構造整理型カウンセリング」",
      body: "CBT・ACT・動機づけ面接・バイオサイコソーシャルモデルを統合した独自のアプローチ。「頭ではわかっているのに変えられない」という支援者特有の葛藤に対応します。",
      tag: null,
    },
    {
      title: "「話して終わり」にしない。毎回、記録が手元に残ります。",
      body: "面談後には、その日の内容を整理した記録・特性プロファイル・次回に向けたセルフケアシートをお届けします。「何を話したか」「次に何をすればいいか」が毎回明確になります。",
      tag: "他のカウンセリングにはない具体的なサポート",
    },
    {
      title: "支援職の現場を知っているカウンセラーが対応します",
      body: "福祉業界での15年以上の経験と300名以上の臨床実績があります。「現場の話が通じる」「説明しなくてもわかってもらえる」という安心感の中で話せます。",
      tag: null,
    },
  ];
  return (
    <section style={{ padding: "3.5rem 1.5rem", borderBottom: `0.5px solid ${T.border}` }}>
      <FadeIn>
        <Label text="いしずえのアプローチ" />
        <h2 style={{ fontSize: "clamp(18px,3vw,22px)", fontWeight: 400, marginBottom: "0.5rem", lineHeight: 1.6, color: T.brown }}>
          「共感疲労」も「燃え尽き」も、<br />構造から整理できます。
        </h2>
        <p style={{ fontSize: "14px", color: T.muted, marginBottom: "1.8rem", lineHeight: 1.9, fontFamily: "sans-serif" }}>
          症状に名前をつけて終わりにするのではなく、「なぜそうなっているのか」の仕組みを一緒に解明します。
        </p>
      </FadeIn>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {items.map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div style={{
              background: T.creamDark, border: `0.5px solid ${T.borderMid}`,
              borderLeft: `3px solid ${T.accentLight}`, borderRadius: "4px",
              padding: "1.4rem 1.5rem",
            }}>
              <h3 style={{ fontSize: "15px", fontWeight: 500, color: T.brown, marginBottom: "8px", lineHeight: 1.6 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "13px", color: T.muted, lineHeight: 1.85, fontFamily: "sans-serif" }}>
                {item.body}
              </p>
              {item.tag && (
                <span style={{
                  display: "inline-block", marginTop: "10px",
                  fontSize: "11px", fontWeight: 500, color: T.accent,
                  background: T.cream, border: `0.5px solid ${T.accentLight}`,
                  borderRadius: "3px", padding: "3px 10px", fontFamily: "sans-serif",
                }}>{item.tag}</span>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Flow() {
  const steps = [
    {
      num: "1", title: "体験カウンセリング（60分）",
      body: "現在の消耗の状態・働き方の構造・回復を妨げている要因を整理します。「診断」ではなく「あなたの状況を理解する」ことが目的です。",
      badge: "面談後：共有記録＋消耗状態の整理レポートをお届け",
    },
    {
      num: "2", title: "継続セッション（隔週または月1回）",
      body: "回復・境界線の設定・感情調整・将来の方向性など、毎回のテーマに沿って進めます。セッションのたびに宿題シートで小さな実践を積み重ねます。",
      badge: "毎回：宿題シート＋セルフモニタリング日誌をお届け",
    },
    {
      num: "3", title: "終結・引き継ぎ",
      body: "支援期間全体の変化・あなたの強み・これからの指針をまとめた記録をお渡しします。",
      badge: "終結時：終結サマリーをお届け",
    },
  ];
  return (
    <section style={{ padding: "3.5rem 1.5rem", borderBottom: `0.5px solid ${T.border}` }}>
      <FadeIn>
        <Label text="支援の流れ" />
        <h2 style={{ fontSize: "clamp(18px,3vw,22px)", fontWeight: 400, marginBottom: "1.8rem", lineHeight: 1.6, color: T.brown }}>
          初回から終結まで、一貫した構造で進みます。
        </h2>
      </FadeIn>
      <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
        {steps.map((s, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div style={{ display: "flex", gap: "18px", position: "relative", paddingBottom: i < steps.length - 1 ? "2rem" : "0" }}>
              {i < steps.length - 1 && (
                <div style={{ position: "absolute", left: "19px", top: "40px", width: "1px", height: "calc(100% - 10px)", background: T.border }} />
              )}
              <div style={{
                width: "40px", height: "40px", borderRadius: "50%",
                background: T.creamDeep, border: `0.5px solid ${T.borderMid}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "14px", fontWeight: 500, color: T.brownMid,
                flexShrink: 0, zIndex: 1, fontFamily: "sans-serif",
              }}>{s.num}</div>
              <div style={{ paddingTop: "6px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 500, color: T.brown, marginBottom: "6px" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", color: T.muted, lineHeight: 1.85, marginBottom: "8px", fontFamily: "sans-serif" }}>{s.body}</p>
                <span style={{
                  display: "inline-block", fontSize: "11px", fontWeight: 500,
                  color: T.brownMid, background: T.creamDeep,
                  border: `0.5px solid ${T.border}`, borderRadius: "3px",
                  padding: "3px 10px", fontFamily: "sans-serif",
                }}>{s.badge}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProfileSection() {
  return (
    <section style={{ padding: "3.5rem 1.5rem", borderBottom: `0.5px solid ${T.border}` }}>
      <FadeIn>
        <Label text="カウンセラー紹介" />
      </FadeIn>
      <FadeIn delay={0.1}>
        <div style={{
          display: "flex", gap: "20px", alignItems: "flex-start",
          background: T.creamDark, border: `0.5px solid ${T.borderMid}`,
          borderRadius: "4px", padding: "1.5rem",
        }}>
          <div style={{
            width: "64px", height: "64px", borderRadius: "50%",
            overflow: "hidden", border: `0.5px solid ${T.borderMid}`,
            flexShrink: 0,
          }}>
            <img src="/profile.jpg" alt="松本龍児" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} /></div>
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: 500, color: T.brown, marginBottom: "6px" }}>
              松本 龍児（まつもと りゅうじ）
            </h3>
            <p style={{ fontSize: "13px", color: T.muted, lineHeight: 1.9, fontFamily: "sans-serif" }}>
              公認心理師。福祉業界15年以上、臨床300名以上。障害福祉・就労支援・管理職経験を持ち、支援職の現場構造を熟知しています。「支援する人が消耗しない社会」を目指し、支援職専門のカウンセリングを提供しています。CBT・ACT・動機づけ面接・トラウマインフォームドケアを統合した構造整理型アプローチが専門。
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "支援職以外でも相談できますか？", a: "基本的に支援職・医療職・介護職の方を専門としています。その他の職種の方はまずメール相談でご確認ください。" },
    { q: "職場には知られませんか？", a: "すべての面談内容は守秘義務のもとで管理されます。職場や第三者に知られることはありません。" },
    { q: "まだ限界ではないのですが相談してもいいですか？", a: "むしろ早い段階でのご相談をお勧めします。限界まで追い詰められてからでは回復に時間がかかります。「なんとなくしんどい」という段階からが、最も効果的なタイミングです。" },
    { q: "料金・頻度はどうなっていますか？", a: "体験カウンセリング（60分）の後、継続を希望される場合は隔週または月1回のペースで進めます。料金はお問い合わせください。" },
  ];
  return (
    <section style={{ padding: "3.5rem 1.5rem", borderBottom: `0.5px solid ${T.border}` }}>
      <FadeIn><Label text="よくある質問" /></FadeIn>
      <div>
        {faqs.map((f, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <div style={{ borderBottom: `0.5px solid ${T.border}` }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", textAlign: "left", background: "none", border: "none",
                  padding: "1rem 0", cursor: "pointer",
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: 500, color: T.brown, lineHeight: 1.6 }}>{f.q}</span>
                <span style={{
                  fontSize: "18px", color: T.accentLight, flexShrink: 0,
                  transition: "transform 0.25s",
                  transform: open === i ? "rotate(45deg)" : "none",
                  display: "inline-block",
                }}>+</span>
              </button>
              <div style={{ overflow: "hidden", maxHeight: open === i ? "200px" : "0", transition: "max-height 0.3s ease" }}>
                <p style={{ fontSize: "13px", color: T.muted, lineHeight: 1.9, paddingBottom: "1rem", fontFamily: "sans-serif" }}>
                  {f.a}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
      <FadeIn>
        <h2 style={{ fontSize: "clamp(18px,3vw,22px)", fontWeight: 400, lineHeight: 1.7, marginBottom: "0.8rem", color: T.brown }}>
          まず、話してみることから<br />始めませんか。
        </h2>
        <p style={{ fontSize: "14px", color: T.muted, lineHeight: 1.9, marginBottom: "2rem", fontFamily: "sans-serif" }}>
          無料メール相談では、現在の状況をお聞きした上で<br />
          カウンセリングが合うかどうかをお伝えします。<br />
          相談したこと自体が、誰かに知られることはありません。
        </p>
        <CtaButton label="無料メール相談を申し込む" />
        <p style={{ fontSize: "12px", color: T.faint, marginTop: "12px", fontFamily: "sans-serif" }}>
          返信目安：2営業日以内　／　守秘義務あり　／　勧誘なし
        </p>
      </FadeIn>
    </section>
  );
}

export default function ShienShokuLP() {
  return (
    <>
      <Helmet>
        <title>支援職専門カウンセリング｜こころの相談室 いしずえ</title>
        <meta name="description" content="看護師・介護士・福祉職・教員など支援職の方へ。感情労働の疲れ・共感疲労・燃え尽きを、公認心理師が構造から整理するオンラインカウンセリングです。初回メール相談無料。" />
      </Helmet>
      <div style={{
        background: T.cream, color: T.brown,
        fontFamily: "'Noto Serif JP', 'Hiragino Mincho ProN', serif",
        lineHeight: 1.8,
      }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <Hero />
          <ForWhom />
          <Approach />
          <Flow />
          <ProfileSection />
          <FAQSection />
          <CTASection />
        </div>
      </div>
    </>
  );
}
