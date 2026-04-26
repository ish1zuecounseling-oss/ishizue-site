import { useCallback, useEffect, useState, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string | undefined;

type FormStatus = "idle" | "submitting" | "success" | "error";

const T = {
  brown:      "#2C1F14",
  brownMid:   "#5C3D2E",
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

const sec: React.CSSProperties = {
  padding: "3rem 1.5rem",
  borderBottom: `0.5px solid ${T.border}`,
};

function Label({ text }: { text: string }) {
  return (
    <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", color: T.accentLight, textTransform: "uppercase", marginBottom: "8px", fontFamily: "sans-serif" }}>
      {text}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: "clamp(18px,3vw,22px)", fontWeight: 400, lineHeight: 1.65, color: T.brown, marginBottom: "0.6rem" }}>
      {children}
    </h2>
  );
}

function Muted({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontSize: "14px", color: T.muted, lineHeight: 1.9, fontFamily: "sans-serif", ...style }}>
      {children}
    </p>
  );
}

export default function ShienShokuLP() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formError,  setFormError]  = useState("");
  const [openFaq,    setOpenFaq]    = useState<number | null>(null);

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  const getVal = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setFormError("");
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setFormStatus("error");
      setFormError("フォーム設定が未完了です。");
      return;
    }
    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        { user_name: getVal(fd, "name"), user_email: getVal(fd, "email"), job: getVal(fd, "job"), message: getVal(fd, "message") },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
      setFormError("送信に失敗しました。時間をおいて再度お試しください。");
    }
  }, []);

  const faqs = [
    { q: "支援職以外でも相談できますか？", a: "基本的に支援職・医療職・介護職の方を専門としています。その他の職種の方はまずメール相談でご確認ください。" },
    { q: "職場には知られませんか？", a: "すべての面談内容は守秘義務のもとで管理されます。職場や第三者に知られることはありません。" },
    { q: "まだ限界ではないのですが相談してもいいですか？", a: "むしろ早い段階でのご相談をお勧めします。「なんとなくしんどい」という段階からが、最も効果的なタイミングです。" },
    { q: "料金・頻度はどうなっていますか？", a: "初回メール相談は無料です。オンライン面談は体験30分 5,000円・通常30分 8,000円・60分 12,000円（税込）。メールカウンセリングは2週間プラン 8,000円・4週間プラン 15,000円（税込）。継続は隔週または月1回のペースが基本です。" },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 14px",
    border: `0.5px solid ${T.borderMid}`,
    borderRadius: "4px", background: T.creamDark,
    color: T.brown, fontSize: "14px",
    fontFamily: "sans-serif", boxSizing: "border-box",
  };

  return (
    <>
      <Helmet>
        <title>支援職専門カウンセリング｜こころの相談室 いしずえ</title>
        <meta name="description" content="看護師・介護士・福祉職・教員など支援職の方へ。感情労働の疲れ・共感疲労・燃え尽きを、公認心理師が構造から整理するオンラインカウンセリングです。初回メール相談無料。" />
      </Helmet>

      <div style={{ background: T.cream, color: T.brown, fontFamily: "'Noto Serif JP', serif", lineHeight: 1.8 }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          {/* HERO */}
          <section style={{ ...sec, textAlign: "center", padding: "5rem 1.5rem 4rem" }}>
            <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", color: T.accentLight, marginBottom: "1.4rem", fontFamily: "sans-serif" }}>
              支援職専門カウンセリング　こころの相談室 いしずえ
            </p>
            <h1 style={{ fontSize: "clamp(22px,4vw,30px)", fontWeight: 400, lineHeight: 1.7, color: T.brown, marginBottom: "1.2rem" }}>
              あなたは、<br />
              <span style={{ color: T.accent, fontWeight: 500 }}>誰かのケアをする人</span>を<br />
              ケアしてもらえていますか。
            </h1>
            <Muted style={{ marginBottom: "1.8rem" }}>
              介護職・看護師・社会福祉士・支援員の方へ。<br />
              感情労働の疲れは、休んだだけでは回復しません。<br />
              「なぜそうなるのか」を一緒に整理することから始めます。
            </Muted>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginBottom: "2rem" }}>
              {["公認心理師", "福祉業界15年以上", "臨床300名以上", "オンライン対応", "支援職専門"].map(c => (
                <span key={c} style={{ fontSize: "12px", color: T.brownMid, background: T.creamDeep, border: `0.5px solid ${T.border}`, borderRadius: "20px", padding: "4px 13px", fontFamily: "sans-serif" }}>{c}</span>
              ))}
            </div>
            <button
              onClick={() => document.getElementById("contact-lp")?.scrollIntoView({ behavior: "smooth" })}
              style={{ display: "inline-block", fontSize: "15px", fontWeight: 500, color: T.cream, background: T.brown, border: "none", borderRadius: "4px", padding: "13px 32px", cursor: "pointer", fontFamily: "sans-serif" }}>
              まずは無料メール相談
            </button>
          </section>

          {/* こんな方へ */}
          <section style={sec}>
            <Label text="こんな方へ" />
            <H2>「支援者の自分」も、消耗します。</H2>
            <Muted style={{ marginBottom: "1.4rem" }}>支援職の疲れは「根性が足りない」のではありません。感情を使って働く構造そのものに、消耗の理由があります。</Muted>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "8px", marginBottom: "1.2rem" }}>
              {[
                "利用者のことが、仕事を離れても頭から離れない",
                "やりがいを感じていたはずなのに、何も感じなくなった",
                "休んでも回復した気がしない。疲れが取れない",
                "辞めたいとは思うけど、辞めていいのかもわからない",
                "後輩の指導や管理業務まで重なって、限界に近い",
                "誰かに話したくても、職場では話せない",
              ].map(v => (
                <div key={v} style={{ background: T.creamDark, border: `0.5px solid ${T.border}`, borderRadius: "4px", padding: "12px 16px", fontSize: "13px", color: T.brownMid, lineHeight: 1.75, fontFamily: "sans-serif" }}>
                  <span style={{ color: T.accentLight }}>「</span>{v}<span style={{ color: T.accentLight }}>」</span>
                </div>
              ))}
            </div>
            <Muted style={{ textAlign: "center" }}>一つでも当てはまるなら、今のあなたには立ち止まる場所が必要かもしれません。</Muted>
          </section>

          {/* アプローチ */}
          <section style={sec}>
            <Label text="いしずえのアプローチ" />
            <H2>「共感疲労」も「燃え尽き」も、<br />構造から整理できます。</H2>
            <Muted style={{ marginBottom: "1.6rem" }}>症状に名前をつけて終わりにするのではなく、「なぜそうなっているのか」の仕組みを一緒に解明します。</Muted>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { title: "感情・思考・環境を整理する「構造整理型カウンセリング」", body: "CBT・ACT・動機づけ面接・バイオサイコソーシャルモデルを統合した独自のアプローチ。「頭ではわかっているのに変えられない」という支援者特有の葛藤に対応します。", tag: null },
                { title: "「話して終わり」にしない。毎回、記録が手元に残ります。", body: "面談後には、その日の内容を整理した記録・特性プロファイル・次回に向けたセルフケアシートをお届けします。", tag: "他のカウンセリングにはない具体的なサポート" },
                { title: "支援職の現場を知っているカウンセラーが対応します", body: "福祉業界での15年以上の経験と300名以上の臨床実績があります。「現場の話が通じる」という安心感の中で話せます。", tag: null },
              ].map((item, i) => (
                <div key={i} style={{ background: T.creamDark, border: `0.5px solid ${T.borderMid}`, borderLeft: `3px solid ${T.accentLight}`, borderRadius: "4px", padding: "1.3rem 1.4rem" }}>
                  <h3 style={{ fontSize: "15px", fontWeight: 500, color: T.brown, marginBottom: "6px", lineHeight: 1.6 }}>{item.title}</h3>
                  <Muted>{item.body}</Muted>
                  {item.tag && <span style={{ display: "inline-block", marginTop: "8px", fontSize: "11px", fontWeight: 500, color: T.accent, background: T.cream, border: `0.5px solid ${T.accentLight}`, borderRadius: "3px", padding: "3px 10px", fontFamily: "sans-serif" }}>{item.tag}</span>}
                </div>
              ))}
            </div>
          </section>

          {/* カウンセラー */}
          <section style={sec}>
            <Label text="カウンセラー紹介" />
            <div style={{ display: "flex", gap: "18px", alignItems: "flex-start", background: T.creamDark, border: `0.5px solid ${T.borderMid}`, borderRadius: "4px", padding: "1.4rem" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", overflow: "hidden", border: `0.5px solid ${T.borderMid}`, flexShrink: 0 }}>
                <img src="/profile.jpg" alt="松本龍児" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div>
                <h3 style={{ fontSize: "16px", fontWeight: 500, color: T.brown, marginBottom: "6px" }}>松本 龍児（まつもと りゅうじ）</h3>
                <Muted>公認心理師。福祉業界15年以上、臨床300名以上。障害福祉・就労支援・管理職経験を持ち、支援職の現場構造を熟知しています。CBT・ACT・動機づけ面接・トラウマインフォームドケアを統合した構造整理型アプローチが専門。</Muted>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section style={sec}>
            <Label text="よくある質問" />
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: `0.5px solid ${T.border}` }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "1rem 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 500, color: T.brown, lineHeight: 1.6 }}>{f.q}</span>
                  <span style={{ fontSize: "18px", color: T.accentLight, flexShrink: 0, display: "inline-block", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.25s" }}>+</span>
                </button>
                {openFaq === i && (
                  <p style={{ fontSize: "13px", color: T.muted, lineHeight: 1.9, paddingBottom: "1rem", fontFamily: "sans-serif" }}>{f.a}</p>
                )}
              </div>
            ))}
          </section>

          {/* フォーム */}
          <section id="contact-lp" style={sec}>
            <Label text="無料相談" />
            <H2>まず、話してみることから<br />始めませんか。</H2>
            <Muted style={{ marginBottom: "1.8rem" }}>
              無料メール相談では、現在の状況をお聞きした上でカウンセリングが合うかどうかをお伝えします。相談したこと自体が、誰かに知られることはありません。
            </Muted>

            {/* 3ステップ */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px", marginBottom: "2rem" }}>
              {[{ step:"1", label:"フォームを送る", sub:"2分・キャンセル可" }, { step:"2", label:"メールが届く", sub:"2営業日以内" }, { step:"3", label:"状況を整理する", sub:"初回・無料" }].map(({ step, label, sub }) => (
                <div key={step} style={{ padding: "12px", borderRadius: "6px", background: T.creamDeep, border: `0.5px solid ${T.border}`, textAlign: "center" }}>
                  <p style={{ fontSize: "10px", color: T.accentLight, letterSpacing: "0.15em", marginBottom: "4px", fontFamily: "sans-serif" }}>{step}</p>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: T.brown, marginBottom: "2px" }}>{label}</p>
                  <p style={{ fontSize: "11px", color: T.muted, fontFamily: "sans-serif" }}>{sub}</p>
                </div>
              ))}
            </div>

            {formStatus === "success" ? (
              <div style={{ padding: "1.5rem", background: T.creamDeep, border: `0.5px solid ${T.borderMid}`, borderRadius: "6px", textAlign: "center" }}>
                <p style={{ fontSize: "15px", fontWeight: 500, color: T.brown, marginBottom: "8px" }}>送信完了しました</p>
                <Muted>2営業日以内にご連絡いたします。まずは送ってくださったこと、ありがとうございます。</Muted>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }} noValidate>
                <div>
                  <label style={{ display: "block", fontSize: "11px", letterSpacing: "0.15em", color: T.muted, marginBottom: "6px", fontFamily: "sans-serif", textTransform: "uppercase" }}>ご職種</label>
                  <input name="job" type="text" placeholder="社会福祉士、看護師 など" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "11px", letterSpacing: "0.15em", color: T.muted, marginBottom: "6px", fontFamily: "sans-serif", textTransform: "uppercase" }}>お名前 <span style={{ color: "#e07070" }}>* 必須</span></label>
                  <input name="name" type="text" required placeholder="山田 花子" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "11px", letterSpacing: "0.15em", color: T.muted, marginBottom: "6px", fontFamily: "sans-serif", textTransform: "uppercase" }}>メールアドレス <span style={{ color: "#e07070" }}>* 必須</span></label>
                  <input name="email" type="email" required placeholder="example@email.com" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "11px", letterSpacing: "0.15em", color: T.muted, marginBottom: "6px", fontFamily: "sans-serif", textTransform: "uppercase" }}>ご相談内容 <span style={{ fontSize: "11px", fontWeight: 400, color: T.faint }}>任意</span></label>
                  <textarea name="message" rows={4} placeholder="例：「最近頭が休まらない」「誰にも言えない」など" style={{ ...inputStyle, resize: "none" }} />
                  <p style={{ fontSize: "12px", color: T.faint, marginTop: "4px", fontFamily: "sans-serif" }}>まとまっていなくて大丈夫です。</p>
                </div>
                {formStatus === "error" && formError && (
                  <p style={{ fontSize: "13px", color: "#e07070", fontFamily: "sans-serif" }}>{formError}</p>
                )}
                <button type="submit" disabled={formStatus === "submitting"} style={{ padding: "14px", background: formStatus === "submitting" ? T.muted : T.brown, color: T.cream, border: "none", borderRadius: "4px", fontSize: "15px", fontWeight: 500, cursor: formStatus === "submitting" ? "not-allowed" : "pointer", fontFamily: "sans-serif", letterSpacing: "0.04em" }}>
                  {formStatus === "submitting" ? "送信中..." : "松本に、今の状態を整理してもらう（無料）"}
                </button>
                <p style={{ fontSize: "12px", color: T.faint, textAlign: "center", fontFamily: "sans-serif" }}>無理な継続案内なし　／　1回のみでもOK　／　守秘義務あり</p>
              </form>
            )}
          </section>

          {/* 関連記事 */}
          <section style={{ padding: "3rem 1.5rem", background: T.creamDeep }}>
            <Label text="関連記事・診断ツール" />
            <p style={{ fontSize: "14px", color: T.muted, marginBottom: "1.2rem", fontFamily: "sans-serif" }}>支援職のメンタルに関する記事・診断ツールを無料で公開しています。</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { to: "/articles/helper-empathy-check", label: "共感疲労チェック｜支援職のための20項目診断" },
                { to: "/articles/helper-burnout", label: "支援職のバーンアウトとは" },
                { to: "/articles/helper-boundary", label: "支援職の境界線（バウンダリー）とは" },
                { to: "/articles/helper-status-check", label: "支援職のための現在地チェック" },
              ].map(({ to, label }) => (
                <Link key={to} to={to} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: T.cream, border: `0.5px solid ${T.border}`, borderRadius: "4px", textDecoration: "none", color: T.brown, fontSize: "13px", fontFamily: "sans-serif" }}>
                  {label}
                  <span style={{ color: T.accentLight, fontSize: "16px", flexShrink: 0 }}>→</span>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <Link to="/articles" style={{ fontSize: "13px", color: T.accentLight, fontFamily: "sans-serif" }}>すべての記事を見る →</Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
