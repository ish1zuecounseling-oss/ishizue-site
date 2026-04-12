/**
 * Home.tsx
 * こころの相談室 いしずえ — 最終完成版
 */

import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Monitor,
  CheckCircle2,
  Clock,
  Mail,
  X,
  Minus,
  MessageCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

type ModalType   = "privacy" | "tokusho" | "cancel" | "sent";
type FormStatus  = "idle" | "submitting" | "success" | "error";
type FeatureItem = { benefit: string; title: string; desc: string; icon: ReactNode };
type FlowItem    = { step: string; title: string; desc: string; note: string };
type GuideItem   = { text: string; icon: ReactNode };

/* -------------------------------------------------------------------------- */
/*  Env                                                                        */
/* -------------------------------------------------------------------------- */

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string | undefined;

/* -------------------------------------------------------------------------- */
/*  Animation                                                                  */
/* -------------------------------------------------------------------------- */

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
};

/* -------------------------------------------------------------------------- */
/*  Copy                                                                       */
/* -------------------------------------------------------------------------- */

const voices = [
  {
    role:   "社会福祉士・相談支援専門員・40代",
    before: "「なぜこんなに疲れているのか、自分でもわからなかった」",
    after:  "1回のセッションで「役割が重なりすぎていた」と見えた。それだけで、翌日の仕事が少し変わりました。",
  },
  {
    role:   "看護師・病棟勤務・30代",
    before: "「職場では絶対に言えないことが溜まっていた」",
    after:  "うまく話せなかったのに、気づいたら何が重かったか整理されていた。あれ、話せてたんだと思いました。",
  },
  {
    role:   "スクールカウンセラー・40代",
    before: "「相談するほどじゃないかも、と迷っていた」",
    after:  "1回で「あ、これか」と腑に落ちることがあって。「相談するほどじゃない」という感覚自体が、消耗のサインだったと気づきました。",
  },
  {
    role:   "介護福祉士・ケアマネジャー・50代",
    before: "「10年以上頑張ってきて、なぜ今しんどいのかわからなかった」",
    after:  "整理してみたら、役割が3つ重なっていた。「私が弱かったんじゃなかった」とわかって、少し楽になりました。",
  },
  {
    role:   "特別支援学校教員・30代",
    before: "「毎日『自分のせいだ』と思っていた」",
    after:  "構造の話をしてもらえて、初めて自分を責めるのをやめられた気がします。責めなくていい理由がやっとわかった。",
  },
] as const;

const features: FeatureItem[] = [
  {
    benefit: "わかってもらえる安心",
    title:   "「支援職の苦しさ」を説明しなくていい",
    desc:    "対人援助職特有の二次受傷・役割の重圧・燃え尽きを、現場経験から深く理解しています。「なぜこんなことで」と思わせません。",
    icon:    <ShieldCheck className="w-5 h-5" />,
  },
  {
    benefit: "完全プライベートな空間",
    title:   "職場にも家族にも知られない",
    desc:    "オンライン完結（Google Meet）。移動不要、請求書なし。誰にも知られず、自分だけの時間として使えます。",
    icon:    <Monitor className="w-5 h-5" />,
  },
  {
    benefit: "消耗を減らすことだけに集中",
    title:   "「もっと頑張れ」とは言わない",
    desc:    "自己改善や根性論ではなく、「なぜ消耗するのか」の構造を整理し、負荷を減らすことから始めます。",
    icon:    <CheckCircle2 className="w-5 h-5" />,
  },
];

const sessionGuideItems: GuideItem[] = [
  { text: "1回 60分",            icon: <Clock className="w-4 h-4" /> },
  { text: "2週間単位のサイクル", icon: <Clock className="w-4 h-4" /> },
  { text: "オンライン完結",      icon: <Monitor className="w-4 h-4" /> },
  { text: "文字起こし活用（同意の上）", icon: <ShieldCheck className="w-4 h-4" /> },
];

const qualifications = [
  "公認心理師",
  "障害福祉分野での相談支援業務 15年",
  "個別カウンセリング 累計300名以上・6,000時間以上",
  "CBT・ACT・動機づけ面接・BPSモデル・トラウマインフォームドケア・セルフコンパッション・SDT に基づく支援",
  "医療・福祉・教育領域での実務経験",
] as const;

const flowItems: FlowItem[] = [
  { step: "01", title: "フォームを送る（2分）",       desc: "今の状態を書くだけでOK。まとまっていなくて大丈夫です。",         note: "送った後も、キャンセル可能です" },
  { step: "02", title: "メールが届く（2営業日以内）", desc: "状況を確認しながら、次のステップをご案内します。",               note: "押し売りなし。断るのも自由です" },
  { step: "03", title: "事前シート記入（任意）",       desc: "簡単な状況把握シートにご記入いただきます。任意項目あり。",       note: "書けない部分はそのままで大丈夫" },
  { step: "04", title: "体験セッション 30分",          desc: "Google Meetにて。この時間だけで「何が負担か」が整理されます。",  note: "続けるかどうかは、その後に決めればいい" },
  { step: "05", title: "振り返りシート共有",           desc: "セッション後、整理内容をテキストでお送りします。手元に残ります。", note: "1回で終わっても問題ありません" },
];

const notes = [
  "対象は支援職（福祉・医療・教育・心理職など）に従事されている方です。",
  "本サービスは医療行為・診断・精神科的治療ではありません。",
  "精神科・心療内科への通院中の方は、かかりつけ医にご相談の上お申し込みください。",
  "キャンセルは 24時間前までにご連絡ください。それ以降はキャンセル料が発生します。",
] as const;

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                             */
/* -------------------------------------------------------------------------- */

function SectionLabel({ en, ja, light = false }: { en: string; ja: string; light?: boolean }) {
  return (
    <div className="space-y-2">
      <span className={`block text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium ${light ? "text-stone-500" : "text-[#8FAF9F]"}`}>
        {en}
      </span>
      <h2
        className={`text-xl md:text-3xl font-light tracking-wide md:tracking-wider leading-snug ${light ? "text-stone-100" : "text-stone-900"}`}
        style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}
      >
        {ja}
      </h2>
    </div>
  );
}

function BlockQuote({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`border-l-2 pl-4 md:pl-6 py-1 ${light ? "border-stone-600 text-stone-300" : "border-[#8FAF9F] text-stone-700"}`}>
      {children}
    </div>
  );
}

function CtaButton({
  label  = "まず、話してみる（初回メール無料）",
  sub    = "1回のみでもOK ／ 勧誘なし ／ 送った後もキャンセル可",
  center = true,
}: {
  label?:  string;
  sub?:    string;
  center?: boolean;
}) {
  return (
    <div className={`space-y-2 ${center ? "text-center" : ""}`}>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2C1F14] text-stone-50 text-sm font-medium tracking-[0.08em] rounded-full hover:bg-[#3D2B1F] transition-all shadow-md group"
      >
        {label}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </a>
      {sub && <p className="text-stone-400 text-xs">{sub}</p>}
    </div>
  );
}

/* ⑩ 画像フォールバック付きコンポーネント */
function SafeImg({ src, alt, className, fallbackBg = "bg-stone-200", ...rest }: React.ImgHTMLAttributes<HTMLImageElement> & { fallbackBg?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const el = e.currentTarget;
        el.style.display = "none";
        const parent = el.parentElement;
        if (parent) parent.classList.add(fallbackBg);
      }}
      {...rest}
    />
  );
}

function LegalModal({ isOpen, title, onClose, children }: { isOpen: boolean; title: string; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (isOpen) ref.current?.focus(); }, [isOpen]);
  if (!isOpen) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-[#1A110A]/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label={title}
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white w-full sm:max-w-2xl max-h-[88vh] sm:max-h-[82vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 relative focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sm:hidden w-10 h-1 bg-stone-200 rounded-full mx-auto mb-5" />
        <button onClick={onClose} className="absolute top-5 right-5 p-2 text-stone-300 hover:text-stone-800 transition-colors" aria-label="閉じる" type="button">
          <X className="w-5 h-5" />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main                                                                       */
/* -------------------------------------------------------------------------- */

function Home() {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [formStatus,  setFormStatus]  = useState<FormStatus>("idle");
  const [formError,   setFormError]   = useState<string>("");
  const [showSticky,  setShowSticky]  = useState(false);
  const heroCTARef = useRef<HTMLDivElement>(null);

  const openModal  = useCallback((m: ModalType) => setActiveModal(m), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  useEffect(() => {
    const el = heroCTARef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setShowSticky(!e.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [activeModal, closeModal]);

  const modalTitleMap = useMemo<Record<Exclude<ModalType, "sent">, string>>(
    () => ({ privacy: "プライバシーポリシー", tokusho: "特定商取引法に基づく表記", cancel: "キャンセルポリシー" }),
    []
  );

  const getVal = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setFormError("");
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setFormStatus("error");
      setFormError("フォーム設定が未完了です。管理者にお問い合わせください。");
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
      openModal("sent");
    } catch (err) {
      console.error(err);
      setFormStatus("error");
      setFormError("送信に失敗しました。時間をおいて再度お試しください。");
    }
  }, [openModal]);

  return (
    <>
      <Helmet>
        <title>支援職のためのカウンセリング｜燃え尽き・疲労を構造的に整理｜こころの相談室 いしずえ</title>
        <meta name="description" content="「もう限界かもしれない」と感じている支援職の方へ。燃え尽き・疲弊の構造を整理し、消耗を減らすためのカウンセリング。公認心理師・障害福祉15年・初回メール相談無料。" />
      </Helmet>

      <a href="#main-content" className="sr-only focus:not-sr-only px-4 py-2 bg-white text-blue-600">メインコンテンツへスキップ</a>

      {/* ── STICKY NAV ── */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: -64, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -64, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm"
          >
            <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
              {/* ロゴ — クリック/タップでトップへ */}
              <Link to="/" aria-label="トップページへ" style={{ WebkitTapHighlightColor: "transparent" }}>
                {/* デスクトップ: テキスト表示 */}
                <p className="text-stone-700 text-sm font-medium hidden sm:block flex-shrink-0" style={{ fontFamily: "'Noto Serif JP', serif" }}>こころの相談室 いしずえ</p>
                {/* モバイル: ロゴ画像 */}
                <img
                  src="/logo.png"
                  alt="こころの相談室 いしずえ"
                  className="flex-shrink-0 sm:hidden"
                  style={{ height: "26px", width: "auto", pointerEvents: "none" }}
                />
              </Link>

              {/* アンカーリンク — モバイルは短縮ラベル、デスクトップはフルラベル */}
              <nav className="flex items-center gap-1 text-xs text-stone-500">
                {[
                  { href: "#voices", label: "声",       labelMd: "相談された方の声" },
                  { href: "#guide",  label: "料金",     labelMd: "料金・流れ" },
                  { href: "#contact", label: "相談する", labelMd: "相談する" },
                ].map(({ href, label, labelMd }) => (
                  <a
                    key={href}
                    href={href}
                    className="px-2.5 py-1.5 rounded-lg hover:bg-stone-100 hover:text-stone-800 transition-colors whitespace-nowrap"
                  >
                    <span className="md:hidden">{label}</span>
                    <span className="hidden md:inline">{labelMd}</span>
                  </a>
                ))}
              </nav>

              <a href="#contact" className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#2C1F14] text-stone-50 text-xs font-medium tracking-[0.06em] rounded-full hover:bg-[#3D2B1F] transition-all">
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="md:hidden">相談</span>
                <span className="hidden md:inline">無料で相談する</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A110A]">
          {/* ⑩ フォールバック対応 */}
          <SafeImg src="/hero.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-25" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950/90" />

          <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-36 w-full">
            {/* デスクトップ: 左コピー + 右顔写真の2カラム */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-14 lg:gap-20">

              {/* 左カラム */}
              <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6 md:space-y-7 flex-1 min-w-0">

                <motion.div variants={fadeIn} className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8FAF9F]" />
                    <span className="text-[11px] tracking-[0.15em] text-white/75 uppercase">公認心理師</span>
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md">
                    <span className="text-[11px] tracking-[0.1em] text-white/75">障害福祉15年 ／ 累計300名以上</span>
                  </span>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-4">
                  <h1 className="text-[1.7rem] leading-[1.55] md:text-4xl lg:text-5xl font-light text-white tracking-wide" style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}>
                    支援職の「消耗」を、<br />
                    <span className="text-stone-200">構造から整理する。</span>
                  </h1>
                  {/* 対象者明示ライン — 3秒理解のための1行 */}
                  <p className="text-[#8FAF9F] text-xs md:text-sm tracking-wide">
                    看護師・介護士・福祉職・教員など対人援助職の方へ｜公認心理師によるオンラインカウンセリング
                  </p>
                  <p className="text-stone-300 text-sm md:text-base leading-[2] max-w-lg">
                    「まだ大丈夫」と思いながら、頭が休まらない日が続いていませんか？<br />
                    頑張ってきたからこそ、今の消耗は「あなたのせい」ではありません。<br />
                    <span className="text-stone-200">ここは、支援する人が自分を後回しにしなくていい場所です。</span>
                  </p>
                  <p className="text-stone-400 text-xs md:text-sm italic leading-relaxed" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    「整理してみたら、役割が3つ重なっていた。私が弱かったんじゃなかった」— 介護福祉士・50代
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col gap-2 text-xs text-stone-400">
                  {["感情の共感だけで終わらせない", "「なぜ消耗するか」を構造で整理", "消耗を減らし、続けられる土台へ"].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#8FAF9F] flex-shrink-0" />
                      {item}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-3 pt-1" ref={heroCTARef}>
                  <a href="#contact" className="group flex sm:inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 bg-white text-stone-900 text-sm font-medium tracking-[0.06em] rounded-full hover:bg-stone-100 transition-all shadow-lg">
                    まず、話してみる（初回メール無料）
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-stone-500 text-xs text-center sm:text-left">勧誘なし　／　1回のみでもOK　／　うまく言葉にできなくても大丈夫</p>
                </motion.div>

              </motion.div>

              {/* 右カラム: 顔写真 — デスクトップのみ */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:flex flex-col items-center gap-4 flex-shrink-0"
              >
                {/* 写真 */}
                <div className="w-52 h-52 lg:w-60 lg:h-60 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl ring-1 ring-white/10">
                  <SafeImg
                    src="/profile.jpg"
                    fetchPriority="high"
                    alt="松本 龍児 — 公認心理師"
                    className="w-full h-full object-cover object-top"
                    fallbackBg="bg-stone-700"
                  />
                </div>
                {/* 名前・肩書き */}
                <div className="text-center space-y-1">
                  <p className="text-white text-sm font-medium tracking-wider" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    松本 龍児
                  </p>
                  <p className="text-stone-400 text-xs">公認心理師 ／ 構造整理型カウンセラー</p>
                  <div className="flex flex-wrap gap-1.5 justify-center mt-2">
                    {["障害福祉15年", "累計300名以上"].map((b) => (
                      <span key={b} className="px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/15 text-white/60 text-[10px]">{b}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
            <span className="text-stone-600 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }} className="w-px h-7 bg-gradient-to-b from-stone-600 to-transparent" />
          </div>
        </section>

        {/* ── PAIN POINTS ── */}
        <section id="services" className="py-16 md:py-24 px-5 md:px-6 bg-white">
          <div className="max-w-4xl mx-auto space-y-10 md:space-y-14">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <motion.div variants={fadeUp} className="space-y-3 max-w-xl">
                {/* 感情的な入り口 — 言語化できていない人への橋渡し */}
                <p
                  className="text-stone-400 text-sm italic leading-[2] mb-1"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  なぜこんなに疲れているのか、わからないまま今日も出勤した。
                </p>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8FAF9F] font-medium">あなたの話ではないですか</span>
                <h2 className="text-xl md:text-3xl font-light text-stone-900 leading-[1.65] tracking-wide" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  支援職ほど、<br />
                  <span className="text-stone-500">自分の消耗に一番気づきにくい。</span>
                </h2>
                <p className="text-stone-500 text-sm leading-[1.9]">
                  他者の痛みに寄り添うことが仕事だからこそ、自分自身の疲れは「たいしたことない」と後回しにしてしまう。「自分だけが弱い」という感覚は、そうやって積み重なります。
                </p>
              </motion.div>
            </motion.div>

            {/* ④ 見出しから「──」記号を除去し、タイトルとして明確に */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {[
                { feeling: "頭が休まらない",          detail: "仕事が終わっても利用者のことが頭から離れない。「もっとできることがあったはず」という声が止まらない。",            tag: "二次受傷・思考のループ" },
                { feeling: "感情が動かなくなってきた",  detail: "以前は感じていたやりがいが薄れた。利用者の話を聞きながら、何も感じない自分に気づいて怖くなる。",               tag: "燃え尽き症候群の初期" },
                { feeling: "誰にも相談できない",       detail: "同僚には弱みを見せられない。家族に話しても伝わらない。「支援職あるある」で片づけられてしまう。",               tag: "孤立・役割の重圧" },
                { feeling: "自分が弱いのだと思う",     detail: "「私が強ければ大丈夫なはず」と自分を責め続ける。でも心のどこかで、弱さの問題じゃないと感じている。",           tag: "自己否定・過剰責任" },
                { feeling: "休むことへの罪悪感がある", detail: "休んでいても「休んでいていいのか」という気持ちが消えない。本当には休めていない。",                            tag: "境界の曖昧さ" },
                { feeling: "このまま続けられるか不安", detail: "続けたい気持ちはある。でも「いつか限界が来るかも」という予感が、ずっと頭の片隅を占めている。",                  tag: "バーンアウト予兆" },
              ].map((item) => (
                <motion.div key={item.feeling} variants={fadeUp} className="p-5 rounded-2xl border border-stone-100 bg-stone-50 hover:border-[#8FAF9F]/40 hover:bg-white transition-all duration-300">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    {/* ④ 見出しを明確なタイトルスタイルに */}
                    <p className="text-stone-800 font-semibold text-sm leading-snug">{item.feeling}</p>
                    <span className="text-[10px] text-[#8FAF9F] bg-[#8FAF9F]/10 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">{item.tag}</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-[1.85]">{item.detail}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="p-6 md:p-8 rounded-2xl bg-[#2C1F14] space-y-5">
                <p className="text-stone-100 text-base md:text-xl font-light leading-[1.9] text-center" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  それは、あなたが弱いからではありません。
                </p>
                <p className="text-stone-400 text-sm leading-[1.9] text-center">
                  支援職という役割の構造が、消耗を生み出しているのです。<br />
                  構造がわかれば、変えられます。
                </p>
                <div className="pt-3 border-t border-stone-800">
                  <CtaButton label="今の状態を整理してみる（初回無料）" sub="まとまっていなくても大丈夫です" />
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── TRUST BAR ── ⑦ プロフィールへの橋渡しに絞る */}
        <section className="py-10 md:py-12 px-5 md:px-6 bg-[#F7F6F3] border-y border-stone-200">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 border-white shadow-md">
                {/* ⑩ フォールバック対応 */}
                <SafeImg src="/profile.jpg" alt="松本 龍児" className="w-full h-full object-cover" fallbackBg="bg-stone-300" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <p className="text-stone-800 text-sm font-medium" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  松本 龍児（公認心理師）— 障害福祉15年・300名以上6,000時間以上の支援経験
                </p>
                {/* ⑦ プロフィールへの橋渡し文を追加 */}
                <p className="text-stone-500 text-xs mt-1 leading-relaxed">
                  「支援する側が頼ってはいけない」という構造を、自らの経験から理解しています。
                  <a href="#profile" className="ml-1 text-[#8FAF9F] underline underline-offset-2 hover:text-stone-700 transition-colors">詳しいプロフィールを見る</a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── MINI VOICES ── 広告ユーザー向け：浅いスクロール位置に証言2件 */}
        <section className="py-12 md:py-14 px-5 md:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} variants={stagger}
              className="space-y-6"
            >
              <motion.div variants={fadeUp} className="text-center">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#8FAF9F] font-medium">実際に話された方の声</p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    role:   "看護師・病棟勤務・30代",
                    before: "「職場では絶対に言えないことが溜まっていた」",
                    after:  "うまく話せなかったのに、気づいたら何が重かったか整理されていた。あれ、話せてたんだと思いました。",
                  },
                  {
                    role:   "介護福祉士・ケアマネジャー・50代",
                    before: "「10年以上頑張ってきて、なぜ今しんどいのかわからなかった」",
                    after:  "整理してみたら、役割が3つ重なっていた。「私が弱かったんじゃなかった」とわかって、少し楽になりました。",
                  },
                ].map((v) => (
                  <motion.div key={v.role} variants={fadeUp} className="bg-stone-50 border border-stone-100 rounded-2xl p-5 space-y-3">
                    <p className="text-stone-400 text-xs italic" style={{ fontFamily: "'Noto Serif JP', serif" }}>{v.before}</p>
                    <div className="border-t border-stone-100 pt-3">
                      <div className="text-[#8FAF9F] opacity-40 mb-2">
                        <svg width="18" height="14" viewBox="0 0 24 18" fill="currentColor" aria-hidden="true">
                          <path d="M0 18V11.5C0 8.167 .833 5.417 2.5 3.25 4.167 1.083 6.5 0 9.5 0L10.5 1.5C8.833 1.833 7.458 2.625 6.375 3.875 5.292 5.125 4.75 6.5 4.75 8H9V18H0ZM14 18V11.5C14 8.167 14.833 5.417 16.5 3.25 18.167 1.083 20.5 0 23.5 0L24.5 1.5C22.833 1.833 21.458 2.625 20.375 3.875 19.292 5.125 18.75 6.5 18.75 8H23V18H14Z" />
                        </svg>
                      </div>
                      <p className="text-stone-700 text-sm leading-[1.85]" style={{ fontFamily: "'Noto Serif JP', serif" }}>{v.after}</p>
                    </div>
                    <p className="text-stone-400 text-xs">{v.role}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={fadeUp} className="text-center">
                <a href="#voices" className="text-xs text-stone-400 hover:text-stone-600 transition-colors underline underline-offset-2">
                  他の方の声を見る（全5件）
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── PROFILE ── */}
        <section id="profile" className="py-16 md:py-24 px-5 md:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="space-y-10 md:space-y-14">
              <motion.div variants={fadeUp}>
                <SectionLabel en="Profile" ja="なぜ、支援職の支援をしているのか" />
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="flex flex-col md:grid md:grid-cols-[180px_1fr] gap-8 md:gap-10 items-start">

                  <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
                    <div className="w-28 h-28 md:w-44 md:h-44 rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
                      {/* ⑩ フォールバック対応 */}
                      <SafeImg src="/profile.jpg" alt="松本 龍児 近影" className="w-full h-full object-cover" width={500} height={500} loading="lazy" fallbackBg="bg-stone-200" />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-lg font-medium text-stone-900 tracking-wider" style={{ fontFamily: "'Noto Serif JP', serif" }}>松本 龍児</p>
                      <p className="text-stone-500 text-xs mt-1 leading-relaxed">公認心理師 ／ 構造整理型カウンセラー</p>
                    </div>
                    <div className="flex flex-row flex-wrap md:flex-col gap-2 justify-center md:justify-start">
                      {["公認心理師", "障害福祉 15年", "累計 300名以上", "6,000時間以上"].map((b) => (
                        <span key={b} className="px-3 py-1 bg-stone-50 border border-stone-200 text-stone-600 text-xs rounded-full tracking-wide text-center">{b}</span>
                      ))}
                    </div>
                  </div>

                  <div className="text-stone-600 leading-[2.1] text-sm md:text-base space-y-6" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    <p>15年間、障害福祉の現場で支援者として働いてきました。300名以上、6,000時間を超える支援の中でずっと気になっていたことがあります。</p>

                    <BlockQuote>
                      <p className="text-stone-800 font-medium text-base md:text-lg leading-[1.8]">支援者自身が、誰にも頼れていない。</p>
                    </BlockQuote>

                    <p>責任を抱え、感情を押し込め、疲弊しながらも「自分が弱いから」と思い込んでいる人を、何度も目の前で見てきました。</p>

                    <p>正直に言えば、かつての私自身もそうでした。「支援する側が頼ってはいけない」という無言の圧力を感じながら、気づかないふりをしていた時期があります。だから今、その構造を外から見てほしいと思っています。</p>

                    <p>感情を吐き出す場所ではなく、<strong className="text-stone-800 font-medium">整理して、持続可能な状態に戻す</strong>ための時間を作ること。それがこのカウンセリングです。</p>

                    <div className="pt-4 border-t border-stone-200">
                      <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">資格・経歴</p>
                      <ul className="space-y-2 text-xs text-stone-500">
                        {qualifications.map((q) => (
                          <li key={q} className="flex items-start gap-2.5">
                            <Minus className="w-3 h-3 text-stone-300 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ② レイアウト修正：pt-5とborder-tを外側divに、内側は bg-stone-50 rounded-2xl p-5 のみ */}
                    <div className="pt-5 border-t border-stone-200">
                      <div className="p-5 rounded-2xl bg-stone-50">
                        <p className="text-stone-700 text-sm md:text-base leading-[2]">
                          セッション後に多くの方から聞く言葉があります。<br />
                          <strong className="text-stone-900">「なぜしんどいのかが、やっとわかった」</strong><br />
                          原因が見えると、自分を責めるのをやめられます。<br />
                          それが、持続可能な支援者に戻るための最初の一歩です。
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-16 md:py-24 px-5 md:px-6 bg-stone-50">
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="space-y-10 md:space-y-14">
              <motion.div variants={fadeUp}>
                <SectionLabel en="Features" ja="このカウンセリングで変わること" />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {features.map((f) => (
                  <motion.div key={f.title} variants={fadeUp}>
                    <div className="group relative flex md:block gap-4 p-5 md:p-7 rounded-2xl bg-white border border-stone-100 hover:border-[#8FAF9F]/50 hover:shadow-md transition-all duration-300">
                      <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8FAF9F] to-[#C4B5A5] group-hover:w-full transition-all duration-500 rounded-full" />
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 md:mb-4 text-[#8FAF9F]" style={{ background: "rgba(143,175,159,0.1)" }}>{f.icon}</div>
                      <div>
                        <span className="text-[10px] text-[#8FAF9F] font-medium tracking-[0.15em] uppercase mb-1.5 block">{f.benefit}</span>
                        <h3 className="text-sm md:text-base font-medium mb-2 text-stone-800 leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>{f.title}</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── APPROACH ── */}
        <section className="py-16 md:py-24 px-5 md:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="space-y-10 md:space-y-12">
              <motion.div variants={fadeUp}>
                <SectionLabel en="Approach" ja="構造整理型カウンセリングとは" />
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-7 text-stone-600 text-sm md:text-base leading-[2]">
                <BlockQuote>
                  <p className="text-stone-800 font-medium">なぜ消耗するのかを、構造として解きほぐす。</p>
                </BlockQuote>

                <p>役割の過剰化、責任の抱え込み、思考のループ、境界の曖昧さ—— これらを言語化・可視化し、負荷の構造を整理します。感情の共感だけで終わらせません。</p>

                <div className="space-y-3">
                  {[
                    {
                      case:   "現場で利用者を直接支援している方",
                      before: "「仕事が終わっても頭が切れない。誰にも言えない」",
                      after:  "→ 二次受傷 × 思考のループ × 「相談してはいけない」という内在化された禁止",
                    },
                    {
                      case:   "チームや部下を持つ立場の方",
                      before: "「部下を支えながら、自分は誰にも相談できない」",
                      after:  "→ 役割過剰 × 責任の抱え込み × 境界の曖昧さ",
                    },
                  ].map((ex) => (
                    <div key={ex.case} className="bg-stone-50 rounded-2xl border border-stone-100 p-5 space-y-2.5 text-sm">
                      <p className="text-stone-400 text-xs tracking-[0.1em] uppercase">{ex.case}</p>
                      <p className="text-stone-700 font-medium leading-relaxed">{ex.before}</p>
                      <div className="text-stone-500 text-xs leading-relaxed pl-3 border-l border-stone-200">
                        <p>{ex.after}</p>
                        {/* ⑤ 「対処が見えてくる」から「具体的な変化」に踏み込む */}
                        <p className="mt-1">→ 構造が見えると、「自分のせいではなかった」とわかる。それが、消耗を減らす最初の一歩になります。</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {sessionGuideItems.map((item) => (
                    <div key={item.text} className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl border border-stone-100 bg-stone-50 text-sm text-stone-600">
                      <span className="text-[#8FAF9F] flex-shrink-0">{item.icon}</span>
                      <span className="text-xs md:text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-stone-100 text-center space-y-5">
                  <p className="text-base md:text-xl text-stone-800 font-light leading-[1.8]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    目的は「強くなること」ではなく、<br />消耗を減らすこと。
                  </p>
                  <CtaButton label="構造を整理してみる（初回無料）" sub="1回のみでもOK ／ 勧誘なし" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── VOICES ── */}
        <section id="voices" className="py-16 md:py-20 px-5 md:px-6 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="space-y-10">
              <motion.div variants={fadeUp}>
                <SectionLabel en="Voices" ja="相談された方の声" />
                <p className="text-stone-400 text-xs mt-2">※ 掲載にあたりご本人の同意を得ています。個人が特定されないよう一部を変更しています。</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {voices.map((v) => (
                  <motion.div key={v.role} variants={fadeUp} className="bg-white border border-stone-100 rounded-2xl p-5 space-y-4">
                    <p className="text-stone-400 text-xs italic" style={{ fontFamily: "'Noto Serif JP', serif" }}>{v.before}</p>
                    <div className="border-t border-stone-100 pt-3">
                      <div className="text-[#8FAF9F] opacity-50 mb-2">
                        <svg width="20" height="15" viewBox="0 0 24 18" fill="currentColor" aria-hidden="true">
                          <path d="M0 18V11.5C0 8.167 .833 5.417 2.5 3.25 4.167 1.083 6.5 0 9.5 0L10.5 1.5C8.833 1.833 7.458 2.625 6.375 3.875 5.292 5.125 4.75 6.5 4.75 8H9V18H0ZM14 18V11.5C14 8.167 14.833 5.417 16.5 3.25 18.167 1.083 20.5 0 23.5 0L24.5 1.5C22.833 1.833 21.458 2.625 20.375 3.875 19.292 5.125 18.75 6.5 18.75 8H23V18H14Z" />
                        </svg>
                      </div>
                      <p className="text-stone-700 text-sm leading-[1.9]" style={{ fontFamily: "'Noto Serif JP', serif" }}>{v.after}</p>
                    </div>
                    <p className="text-stone-400 text-xs">{v.role}</p>
                  </motion.div>
                ))}

                <motion.div variants={fadeUp} className="hidden md:flex flex-col items-center justify-center bg-[#2C1F14] rounded-2xl p-6 text-center space-y-4">
                  <p className="text-stone-300 text-sm leading-[1.9]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    「相談するほどじゃない」と思っている方ほど、<br />実は一番必要としていることが多いです。
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm text-[#8FAF9F] hover:text-white transition-colors underline underline-offset-4">
                    まず話してみる<ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              </div>

              {/* ③ 声のあとに「だからあなたも」の橋渡し文を追加 */}
              <motion.div variants={fadeUp} className="text-center space-y-6">
                <p className="text-stone-600 text-sm md:text-base leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  みなさんに共通しているのは、<strong className="text-stone-800">「相談するほどじゃないかも」と思いながら来た</strong>ことです。<br />
                  その迷いは、あなただけのものではありません。
                </p>
                <CtaButton label="同じ立場の人が話せた場所で、話してみる" sub="職種・経験年数は問いません ／ 初回無料" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── CLOSING ── ① 行動に踏み出す引力を持ったコピーに書き直し */}
        <section className="py-14 px-5 bg-white border-y border-stone-100">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl mx-auto text-center space-y-5">
            <p className="text-stone-800 text-lg md:text-2xl font-light leading-[1.9]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「もう少し耐えれば」と思いながら、<br />
              <span className="text-[#8FAF9F]">もう何ヶ月経ちましたか？</span>
            </p>
            <p className="text-stone-500 text-sm leading-[1.9]">
              限界まで耐えてから動くより、予兆のうちに整理する方が、ずっと楽です。<br />
              今日が、そのタイミングかもしれません。
            </p>
            <CtaButton label="今日、話してみる（初回メール無料）" sub="勧誘なし ／ 1回のみでもOK ／ 送った後もキャンセル可" />
          </motion.div>
        </section>

        {/* ── GUIDE ── */}
        <section id="guide" className="py-16 md:py-24 px-5 md:px-6 bg-[#1A110A]">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="space-y-14 md:space-y-20">
              <motion.div variants={fadeUp}>
                <SectionLabel en="Guide" ja="ご利用案内" light />
              </motion.div>

              {/* 料金 */}
              <motion.div variants={fadeUp} className="space-y-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-stone-500">料金</p>
                <div className="p-5 rounded-2xl border border-emerald-900/40 bg-emerald-950/30 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-emerald-500 mb-1">まずはここから</p>
                    <p className="text-base font-medium text-stone-100" style={{ fontFamily: "'Noto Serif JP', serif" }}>初回メール相談</p>
                    <p className="text-stone-500 text-xs mt-1">1往復・状況整理 ／ 返信目安 2営業日以内</p>
                  </div>
                  <span className="text-3xl font-light text-emerald-400">無料</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="p-5 md:p-7 rounded-2xl border border-stone-800 bg-[#2C1F14]/50 space-y-4">
                    <div className="flex items-center gap-3 text-stone-300">
                      <Monitor className="w-5 h-5 text-stone-500" />
                      <h3 className="text-sm md:text-base font-medium tracking-wider">オンライン面談</h3>
                    </div>
                    <div className="divide-y divide-stone-800">
                      {[{ label: "初回体験 30分", price: "5,000円（税込）" }, { label: "通常 30分", price: "8,000円（税込）" }, { label: "通常 60分", price: "12,000円（税込）" }, { label: "形式", price: "Google Meet" }].map(({ label, price }) => (
                        <div key={label} className="flex justify-between items-baseline py-2.5">
                          <span className="text-stone-500 text-xs">{label}</span>
                          <span className="text-stone-200 text-sm">{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-5 md:p-7 rounded-2xl border border-stone-800 bg-[#2C1F14]/50 space-y-4">
                    <div className="flex items-center gap-3 text-stone-300">
                      <Mail className="w-5 h-5 text-stone-500" />
                      <h3 className="text-sm md:text-base font-medium tracking-wider">メール相談</h3>
                    </div>
                    <div className="divide-y divide-stone-800">
                      {[{ label: "初回 1往復", price: "無料", accent: true }, { label: "通常 3往復", price: "3,000円（税込）", accent: false }, { label: "形式", price: "メール", accent: false }].map(({ label, price, accent }) => (
                        <div key={label} className="flex justify-between items-baseline py-2.5">
                          <span className="text-stone-500 text-xs">{label}</span>
                          <span className={`text-sm ${accent ? "text-emerald-400" : "text-stone-200"}`}>{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">※ お支払いは銀行振込にてお願いしております。予約確定後にご案内いたします。</p>
              </motion.div>

              {/* 流れ */}
              <motion.div variants={fadeUp} className="space-y-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-stone-500">ご利用の流れ</p>
                <ol>
                  {flowItems.map((item) => (
                    <li key={item.step} className="flex gap-5 items-start group">
                      <span className="text-stone-600 font-light text-xs tabular-nums shrink-0 pt-4 w-6">{item.step}</span>
                      <div className="flex-1 py-4 border-b border-stone-900 group-last:border-b-0">
                        <p className="text-stone-200 text-sm font-medium mb-0.5">{item.title}</p>
                        <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                        <p className="text-[#8FAF9F]/60 text-[11px] mt-1 italic">{item.note}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </motion.div>

              {/* 注意事項 */}
              <motion.div variants={fadeUp} className="p-5 rounded-2xl border border-stone-800 bg-[#2C1F14]/30 space-y-3">
                <p className="text-[10px] tracking-[0.2em] uppercase text-stone-500">対象・ご注意</p>
                <ul className="space-y-2.5 text-stone-500 text-xs leading-relaxed">
                  {notes.map((text) => (
                    <li key={text} className="flex gap-2.5">
                      <Minus className="w-3 h-3 text-stone-700 shrink-0 mt-0.5" />
                      {text}
                    </li>
                  ))}
                </ul>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── ⑥ 重要な2問を先頭・太字で強調 */}
        <section className="py-16 md:py-20 px-5 md:px-6 bg-stone-50">
          <div className="max-w-2xl mx-auto space-y-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-2 mb-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8FAF9F] font-medium">FAQ</span>
              <h2 className="text-xl font-light text-stone-800 tracking-wide" style={{ fontFamily: "'Noto Serif JP', serif" }}>申し込む前の、よくあるご不安</h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-2.5">
              {[
                /* ⑥ 最重要2問を先頭に、かつ少し強調スタイルを添える */
                {
                  q:        "うまく話せるか不安です",
                  a:        "整理されていない状態のままで大丈夫です。「何が負担なのかよくわからない」という状態からご相談される方が大半です。むしろ、整理できていないことを一緒に整理するのがこの時間の目的です。",
                  emphasis: true,
                },
                {
                  q:        "相談するほどの内容かどうか迷っています",
                  a:        "「大げさかな」と思う感覚自体が、支援職に多いパターンです。自分の消耗を後回しにしてきた結果です。その感覚ごと、お話しください。",
                  emphasis: true,
                },
                { q: "1回だけで終わっても失礼じゃないですか",   a: "まったく問題ありません。継続を前提としたご案内は行っていません。1回の整理だけでも、「何が負担か」が言語化されることで、ずいぶん楽になる方も多いです。",        emphasis: false },
                { q: "申し込んだら断りにくくなりそうで",         a: "フォームを送った後も、日程調整の段階でキャンセル可能です。「やっぱりやめます」と一言連絡いただくだけで大丈夫です。プレッシャーは一切かけません。",          emphasis: false },
                { q: "職場や家族に知られたくないのですが",       a: "完全オンラインのため、移動も不要です。請求書等の対外的な書類も発行しません。秘密にしたままご利用いただけます。",                                        emphasis: false },
                { q: "カウンセリングに抵抗があります",           a: "「カウンセリング」というより、今の状態を言語化して整理する作業です。週1回通い続けるようなものではなく、2週間に1回・必要な期間だけという形が基本です。",      emphasis: false },
              ].map(({ q, a, emphasis }) => (
                <motion.div key={q} variants={fadeUp}>
                  <details className={`group rounded-2xl border overflow-hidden ${emphasis ? "bg-[#8FAF9F]/5 border-[#8FAF9F]/20" : "bg-white border-stone-100"}`}>
                    <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none text-stone-700 text-sm font-medium hover:bg-stone-50 transition-colors">
                      <span className={`leading-snug ${emphasis ? "text-stone-800" : ""}`}>{q}</span>
                      <span className="text-stone-300 group-open:rotate-45 transition-transform duration-200 text-xl flex-shrink-0 leading-none">+</span>
                    </summary>
                    <div className="px-5 pb-5 pt-2 text-stone-500 text-sm leading-[1.9] border-t border-stone-100">{a}</div>
                  </details>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="pt-4">
              <CtaButton label="不安が解消されたら、話してみてください" sub="フォームを送った後もキャンセル可 ／ 1回のみでもOK" />
            </motion.div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-16 md:py-24 px-5 md:px-6 bg-white">
          <div className="max-w-2xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="space-y-10 md:space-y-12">

              <motion.div variants={fadeUp} className="space-y-6">
                <SectionLabel en="Contact" ja="まず、話してみてください" />
                {/* ⑧ 問いかけで終わらず「今日がそのタイミング」と着地させる */}
                <div className="space-y-4 text-stone-500 text-sm leading-[2.1]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  <p>「もう少し耐えれば大丈夫」と思いながら、何ヶ月も過ぎていませんか？</p>
                  <BlockQuote>
                    <p className="text-stone-700 font-medium leading-[1.8]">
                      限界まで耐えてから動くより、<br />
                      予兆を感じているうちに整理する方が、ずっと楽です。
                    </p>
                  </BlockQuote>
                  <p>
                    今の状態がひどくなくてもいい。うまく言葉にできなくてもいい。<br />
                    「なんとなくしんどい」という感覚だけで、十分です。<br />
                    <span className="text-stone-700 font-medium">今日が、そのタイミングかもしれません。</span>
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  {[
                    { step: "1", label: "フォームを送る",  sub: "2分・キャンセル可" },
                    { step: "2", label: "メールが届く",    sub: "2営業日以内" },
                    { step: "3", label: "状況を整理する",  sub: "初回・無料" },
                  ].map(({ step, label, sub }) => (
                    <div key={step} className="p-3 md:p-4 rounded-xl bg-stone-50 border border-stone-100 text-center">
                      <span className="text-[10px] text-[#8FAF9F] tracking-widest font-medium">{step}</span>
                      <p className="text-stone-700 text-xs font-medium mt-1 leading-tight">{label}</p>
                      <p className="text-stone-400 text-[11px] mt-0.5">{sub}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ⑨ 必須フィールドを視覚的に強調（赤い * マーク追加） */}
              <motion.form variants={fadeUp} className="space-y-5" onSubmit={handleSubmit} noValidate>

                <div className="space-y-1.5">
                  <label htmlFor="job" className="flex items-center gap-1 text-[10px] tracking-[0.2em] uppercase text-stone-400">
                    ご職種
                  </label>
                  <input
                    id="job" name="job" type="text" autoComplete="organization-title"
                    placeholder="社会福祉士、看護師 など"
                    className="w-full px-4 py-3.5 border border-stone-200 rounded-xl text-stone-800 text-base md:text-sm focus:outline-none focus:ring-1 focus:ring-[#8FAF9F] bg-stone-50 placeholder-stone-300 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  {/* ⑨ 必須を「* 必須」として赤で強調 */}
                  <label htmlFor="name" className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-stone-400">
                    お名前
                    <span className="text-red-400 font-semibold not-italic">* 必須</span>
                  </label>
                  <input
                    id="name" name="name" type="text" required autoComplete="name"
                    placeholder="山田 花子"
                    className="w-full px-4 py-3.5 border border-stone-200 rounded-xl text-stone-800 text-base md:text-sm focus:outline-none focus:ring-1 focus:ring-[#8FAF9F] bg-stone-50 placeholder-stone-300 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-stone-400">
                    メールアドレス
                    <span className="text-red-400 font-semibold not-italic">* 必須</span>
                  </label>
                  <input
                    id="email" name="email" type="email" required autoComplete="email"
                    placeholder="example@email.com"
                    className="w-full px-4 py-3.5 border border-stone-200 rounded-xl text-stone-800 text-base md:text-sm focus:outline-none focus:ring-1 focus:ring-[#8FAF9F] bg-stone-50 placeholder-stone-300 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-stone-400">ご相談内容</label>
                    <span className="text-[10px] text-stone-300">任意 — 一言でも大丈夫です</span>
                  </div>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="例：「最近頭が休まらない」「誰にも言えない」など"
                    className="w-full px-4 py-3.5 border border-stone-200 rounded-xl text-stone-800 text-base md:text-sm focus:outline-none focus:ring-1 focus:ring-[#8FAF9F] bg-stone-50 placeholder-stone-300 resize-none transition-colors"
                  />
                  <p className="text-stone-400 text-xs">まとまっていなくて大丈夫。送った後にお伺いします。</p>
                </div>

                {formStatus === "error" && formError && (
                  <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">{formError}</div>
                )}

                <div className="space-y-3 pt-1">
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#2C1F14] text-stone-50 text-sm tracking-[0.08em] font-medium hover:bg-[#3D2B1F] active:scale-[0.99] transition-all rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? "送信中..." : "松本に、今の状態を整理してもらう（無料）"}
                  </button>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-stone-400">
                    {["無理な継続案内なし", "1回のみでもOK", "送った後もキャンセル可"].map((item) => (
                      <span key={item} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-stone-300 flex-shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.form>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="py-10 px-5 border-t border-stone-100 bg-stone-50">
          <div className="max-w-5xl mx-auto space-y-5">
            <div className="text-center">
              <p className="text-stone-500 text-xs mb-1">フォームが難しい場合は、メールでも受け付けています</p>
              <a href="mailto:ish1zue.counseling@gmail.com" className="text-stone-600 text-sm font-medium hover:text-stone-900 transition-colors underline underline-offset-2">
                ish1zue.counseling@gmail.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-[10px] tracking-[0.2em] uppercase text-stone-400 pt-4 border-t border-stone-200">
              {(["privacy", "tokusho", "cancel"] as const).map((key) => (
                <button key={key} onClick={() => openModal(key)} className="hover:text-stone-700 transition-colors py-1" type="button">{modalTitleMap[key]}</button>
              ))}
            </div>
            <p className="text-center text-[10px] text-stone-300 tracking-wider">© こころの相談室 いしずえ</p>
          </div>
        </footer>

      </main>

      {/* ── MODALS ── */}
      <AnimatePresence>

        {activeModal === "privacy" && (
          <LegalModal isOpen title={modalTitleMap.privacy} onClose={closeModal}>
            <div className="space-y-6 text-stone-600 leading-loose text-sm">
              <h2 className="text-lg font-medium text-stone-900 border-b border-stone-100 pb-5" style={{ fontFamily: "'Noto Serif JP', serif" }}>プライバシーポリシー</h2>
              <p>こころの相談室 いしずえ（以下「当相談室」）は、利用者の個人情報の重要性を認識し、以下のとおり適切に取り扱います。</p>
              {[
                { title: "1. 取得する情報",        body: "氏名・メールアドレス・相談内容・予約情報・決済情報" },
                { title: "2. 利用目的",            body: "カウンセリングサービスの提供・予約管理および連絡対応・サービス向上のための分析・法令に基づく対応" },
                { title: "3. 第三者提供",          body: "法令に基づく場合を除き、本人の同意なく第三者へ提供することはありません。" },
                { title: "4. 情報管理",            body: "取得した情報は適切に管理し、不正アクセス・漏えい・改ざん防止に努めます。" },
                { title: "5. オンラインツールの利用", body: "オンラインカウンセリングでは Google Meet を使用します。各ツールのセキュリティポリシーは提供元の規定に準じます。" },
                { title: "6. 開示・訂正・削除",    body: "ご本人からの請求があった場合、法令に従い対応いたします。" },
                { title: "7. 改定",               body: "本ポリシーは必要に応じて改定されます。" },
              ].map(({ title, body }) => (
                <section key={title} className="space-y-1">
                  <h3 className="text-sm font-medium text-stone-800">{title}</h3>
                  <p className="text-stone-500">{body}</p>
                </section>
              ))}
              <div className="pt-4 border-t border-stone-100 text-xs space-y-1 text-stone-400">
                <p>事業者名：こころの相談室 いしずえ</p>
                <p>代表：松本 龍児</p>
                <p>所在地：大阪府大阪市</p>
                <p>お問い合わせ：ish1zue.counseling@gmail.com</p>
              </div>
            </div>
          </LegalModal>
        )}

        {activeModal === "tokusho" && (
          <LegalModal isOpen title={modalTitleMap.tokusho} onClose={closeModal}>
            <div className="space-y-6 text-stone-600 leading-loose text-sm">
              <h2 className="text-lg font-medium text-stone-900 border-b border-stone-100 pb-5" style={{ fontFamily: "'Noto Serif JP', serif" }}>特定商取引法に基づく表記</h2>
              <div className="space-y-4">
                {[
                  { label: "事業者名",  value: "こころの相談室 いしずえ" },
                  { label: "代表者名",  value: "松本 龍児" },
                  { label: "所在地",   value: "大阪府大阪市（詳細はご請求時に開示）" },
                  { label: "連絡先",   value: "ish1zue.counseling@gmail.com" },
                  { label: "販売価格", value: "初回メール相談 無料 ／ オンライン面談：体験30分 5,000円・30分 8,000円・60分 12,000円 ／ メール相談3往復 3,000円（全て税込）" },
                  { label: "支払方法", value: "銀行振込" },
                  { label: "支払時期", value: "予約確定後、指定期日までにお支払いください。" },
                  { label: "提供時期", value: "入金確認後、予約日時に提供いたします。" },
                  { label: "返品・返金", value: "下記キャンセルポリシーをご確認ください。" },
                ].map(({ label, value }) => (
                  <div key={label} className="space-y-0.5">
                    <p className="text-stone-400 text-xs font-medium">{label}</p>
                    <p className="text-stone-600">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </LegalModal>
        )}

        {activeModal === "cancel" && (
          <LegalModal isOpen title={modalTitleMap.cancel} onClose={closeModal}>
            <div className="space-y-6 text-stone-600 leading-loose text-sm">
              <h2 className="text-lg font-medium text-stone-900 border-b border-stone-100 pb-5" style={{ fontFamily: "'Noto Serif JP', serif" }}>キャンセルポリシー</h2>
              <p>ご予約後のキャンセルについては、以下の通りといたします。</p>
              <ul className="divide-y divide-stone-100">
                {[{ timing: "24時間前までのキャンセル", fee: "無料" }, { timing: "24時間以内のキャンセル", fee: "料金の 50%" }, { timing: "当日・無断キャンセル", fee: "料金の 100%" }].map(({ timing, fee }) => (
                  <li key={timing} className="flex justify-between py-3 gap-4">
                    <span className="text-stone-500">{timing}</span>
                    <span className="font-medium text-stone-800 flex-shrink-0">{fee}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-500">やむを得ない事情がある場合は個別にご相談ください。返金が発生する場合、振込手数料をご負担いただくことがあります。</p>
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 text-xs text-stone-400">
                本サービスは医療行為ではありません。診断・投薬・緊急対応は行っておりません。
              </div>
            </div>
          </LegalModal>
        )}

        {activeModal === "sent" && (
          <LegalModal isOpen title="送信完了" onClose={closeModal}>
            <div className="text-center space-y-6 py-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#8FAF9F]/10 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-[#8FAF9F]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>受け取りました。</h3>
                <p className="text-stone-600 text-sm leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  話してくださって、ありがとうございます。<br />
                  通常 24時間以内にご返信いたします。
                </p>
              </div>
              <div className="bg-stone-50 rounded-2xl p-5 text-sm text-stone-600 leading-[2] text-left space-y-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                <p>返信が届くまでの間、何かを急いで変える必要はありません。</p>
                <p>今の状態のまま、ここまで来てくださったこと自体が、すでに一歩です。</p>
              </div>
              <div className="text-xs text-stone-400 space-y-1">
                <p>※ 無理に継続をおすすめすることはありません</p>
                <p>※ 1回のみのご相談でも問題ありません</p>
              </div>
              <button onClick={closeModal} className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#2C1F14] text-stone-50 text-sm tracking-[0.15em] hover:bg-[#3D2B1F] transition-all rounded-full" type="button">
                閉じる
              </button>
            </div>
          </LegalModal>
        )}

      </AnimatePresence>
    </>
  );
}

export default memo(Home);
