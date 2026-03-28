/**
 * Home.tsx
 * こころの相談室 いしずえ
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
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
 
/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */
 
type ModalType = "privacy" | "tokusho" | "cancel" | "sent";
type FormStatus = "idle" | "submitting" | "success" | "error";
 
type FeatureItem = {
  title: string;
  desc: string;
  icon: ReactNode;
};
 
type FlowItem = {
  step: string;
  title: string;
  desc: string;
};
 
type GuideItem = {
  text: string;
  icon: ReactNode;
};
 
/* -------------------------------------------------------------------------- */
/*                                  Constants                                 */
/* -------------------------------------------------------------------------- */
 
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
 
/* --- animation variants --- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
 
/* --- copy --- */
const consultationItems = [
  "頭が休まらない日が続いている",
  "役割と本音のあいだにズレを感じる",
  "自己否定の声が強くなっている",
  "燃え尽きの予兆を感じている",
  "責任感が強く、誰にも頼れない",
] as const;
 
const structureItems = [
  "役割の過剰化",
  "責任の抱え込み",
  "思考のループ",
  "境界の曖昧さ",
] as const;
 
const features: FeatureItem[] = [
  {
    title: "支援者支援に特化",
    desc: "対人援助職特有の葛藤・二次受傷・燃え尽きのリスクを深く理解した専門的なサポートを提供します。",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "オンライン完結・透明性重視",
    desc: "Google Meetを使用。必要に応じてリアルタイム字幕機能を活用します（同意制）。どこからでも安全に受けられます。",
    icon: <Monitor className="w-5 h-5" />,
  },
  {
    title: "消耗を減らすことを最優先に",
    desc: "無理な自己改善を促すのではなく、まず「消耗の構造」を整理することから始めます。",
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
];
 
const sessionGuideItems: GuideItem[] = [
  { text: "1回 60分", icon: <Clock className="w-4 h-4" /> },
  { text: "2週間単位のサイクル", icon: <Clock className="w-4 h-4" /> },
  { text: "オンライン完結", icon: <Monitor className="w-4 h-4" /> },
  { text: "文字起こし活用（同意の上）", icon: <ShieldCheck className="w-4 h-4" /> },
];
 
const profileBadges = ["障害福祉 15年", "累計 300名以上", "6,000時間以上"] as const;
 
const qualifications = [
  "公認心理師",
  "障害福祉分野での相談支援業務 15年",
  "個別カウンセリング 累計300名以上・6,000時間以上",
  "CBT・ACT・動機づけ面接（MI）・BPSモデル・トラウマインフォームドケア・セルフコンパッション・SDT に基づく支援",
  "医療・福祉・教育領域での実務経験",
] as const;
 
const flowItems: FlowItem[] = [
  { step: "01", title: "お問い合わせ", desc: "下記フォームよりご連絡ください。" },
  { step: "02", title: "日程調整", desc: "メールにてご希望の日時をお知らせします。" },
  { step: "03", title: "事前シート記入", desc: "簡単な状況把握シートにご記入いただきます。" },
  { step: "04", title: "体験セッション", desc: "Google Meet にて 30分、今の状態を整理します。" },
  { step: "05", title: "振り返りシート共有", desc: "セッション後、整理内容をまとめてお送りします。" },
];
 
const notes = [
  "対象は支援職（福祉・医療・教育・心理職など）に従事されている方です。",
  "本サービスは医療行為・診断・精神科的治療ではありません。",
  "精神科・心療内科への通院中の方は、かかりつけ医にご相談の上お申し込みください。",
  "キャンセルは 24時間前までにご連絡ください。それ以降はキャンセル料が発生します。",
] as const;
 
/* -------------------------------------------------------------------------- */
/*                            Helper Components                               */
/* -------------------------------------------------------------------------- */
 
function SectionLabel({ en, ja, light = false }: { en: string; ja: string; light?: boolean }) {
  return (
    <div className="space-y-3">
      <span
        className={`block text-[10px] tracking-[0.35em] uppercase font-medium ${
          light ? "text-stone-500" : "text-[#8FAF9F]"
        }`}
      >
        {en}
      </span>
      <h2
        className={`text-2xl md:text-3xl font-light tracking-wider leading-snug ${
          light ? "text-stone-100" : "text-stone-900"
        }`}
        style={{ fontFamily: "'Noto Serif JP', 'Georgia', serif" }}
      >
        {ja}
      </h2>
    </div>
  );
}
 
function BlockQuote({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div
      className={`border-l-2 pl-6 py-1 ${
        light ? "border-stone-600 text-stone-300" : "border-[#8FAF9F] text-stone-700"
      }`}
    >
      {children}
    </div>
  );
}
 
function FeatureCard({ title, desc, icon }: FeatureItem) {
  return (
    <div className="group relative p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-[#8FAF9F]/50 hover:bg-white transition-all duration-300">
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8FAF9F] to-[#C4B5A5] group-hover:w-full transition-all duration-500 rounded-full" />
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 text-[#8FAF9F]"
        style={{ background: "rgba(143,175,159,0.1)" }}
      >
        {icon}
      </div>
      <h3
        className="text-base font-medium mb-3 text-stone-800 tracking-wide"
        style={{ fontFamily: "'Noto Serif JP', serif" }}
      >
        {title}
      </h3>
      <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
 
function LegalModal({
  isOpen,
  title,
  onClose,
  children,
}: {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    if (!isOpen) return;
    dialogRef.current?.focus();
  }, [isOpen]);
 
  if (!isOpen) return null;
 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-stone-950/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 20 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white w-full max-w-2xl max-h-[82vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12 relative focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-stone-300 hover:text-stone-800 transition-colors"
          aria-label="閉じる"
          type="button"
        >
          <X className="w-5 h-5" />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}
 
/* -------------------------------------------------------------------------- */
/*                                Main Component                              */
/* -------------------------------------------------------------------------- */
 
function Home() {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState<string>("");
 
  const openModal = useCallback((modal: ModalType) => setActiveModal(modal), []);
  const closeModal = useCallback(() => setActiveModal(null), []);
 
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
  }, []);
 
  useEffect(() => {
    if (!activeModal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeModal, closeModal]);
 
  const modalTitleMap = useMemo<Record<Exclude<ModalType, "sent">, string>>(
    () => ({
      privacy: "プライバシーポリシー",
      tokusho: "特定商取引法に基づく表記",
      cancel: "キャンセルポリシー",
    }),
    []
  );
 
  const getFieldValue = (formData: FormData, key: string) =>
    String(formData.get(key) ?? "").trim();
 
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFormStatus("submitting");
      setFormError("");
 
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        setFormStatus("error");
        setFormError("フォーム設定が未完了です。管理者にお問い合わせください。");
        return;
      }
 
      const form = e.currentTarget;
      const formData = new FormData(form);
      const payload = {
        user_name: getFieldValue(formData, "name"),
        user_email: getFieldValue(formData, "email"),
        job: getFieldValue(formData, "job"),
        message: getFieldValue(formData, "message"),
      };
 
      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload, {
          publicKey: EMAILJS_PUBLIC_KEY,
        });
        form.reset();
        setFormStatus("success");
        openModal("sent");
      } catch (error) {
        console.error(error);
        setFormStatus("error");
        setFormError("送信に失敗しました。時間をおいて再度お試しください。");
      }
    },
    [openModal]
  );
 
  return (
    <>
      <Helmet>
        <title>
          支援職のためのカウンセリング｜燃え尽き・疲労を構造的に整理｜こころの相談室 いしずえ
        </title>
        <meta
          name="description"
          content="支援職で「もう限界かもしれない」と感じていませんか？燃え尽き・疲弊を構造的に整理し、消耗を減らすためのカウンセリングです。公認心理師による支援者支援。"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
 
      <a href="#main-content" className="sr-only focus:not-sr-only px-4 py-2 bg-white text-blue-600">
        メインコンテンツへスキップ
      </a>
 
      <main id="main-content">
 
{/* ── HERO ── 改善版 */}
<section className="relative min-h-screen flex items-center overflow-hidden bg-stone-950">
  <img
    src="/hero.jpg"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 w-full h-full object-cover opacity-25"
    loading="eager"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950/90" />

  <div className="relative max-w-5xl mx-auto px-6 py-32 md:py-40 w-full">
    <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-8">

      {/* 資格バッジ（信頼シグナル強化） */}
      <motion.div variants={fadeIn} className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8FAF9F]" />
          <span className="text-[11px] tracking-[0.25em] text-white/75 uppercase">公認心理師</span>
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/8 backdrop-blur-md">
          <span className="text-[11px] tracking-[0.2em] text-white/75">障害福祉15年 ／ 累計300名以上</span>
        </span>
      </motion.div>

      {/* メインコピー（短く・鋭く） */}
      <motion.div variants={fadeUp} className="space-y-5 max-w-2xl">
        <h1
          className="text-3xl md:text-5xl font-light text-white leading-[1.6] tracking-wide"
          style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}
        >
          支援する人が、
          <br />
          <span className="text-stone-200">誰かに話せる場所。</span>
        </h1>
        <p className="text-stone-300 text-base md:text-lg leading-[2] max-w-lg">
          頭が休まらない、感情が麻痺してきた、誰にも頼れない。<br />
          そのしんどさを、構造として一緒に整理します。
        </p>
      </motion.div>

      {/* CTA（心理的ハードル最低） */}
      <motion.div variants={fadeUp} className="space-y-3">
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-stone-900 text-sm font-medium tracking-[0.08em] rounded-full hover:bg-stone-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          まず、話してみる（初回メール無料）
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        {/* ナノコピー：最大の不安を1行で除去 */}
        <p className="text-stone-500 text-xs pl-2">
          勧誘なし ／ 1回のみでもOK ／ うまく話せなくても大丈夫
        </p>
      </motion.div>

    </motion.div>
  </div>

  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
    <span className="text-stone-600 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      className="w-px h-8 bg-gradient-to-b from-stone-600 to-transparent"
    />
  </div>
</section>
 
{/* ── CONSULTATION 改善版 ── */}
<section id="services" className="py-28 px-6 bg-white">
  <div className="max-w-4xl mx-auto space-y-16">

    <motion.div
      initial="hidden" whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} variants={stagger}
    >
      <motion.div variants={fadeUp} className="space-y-3 max-w-xl">
        <span className="text-[10px] tracking-[0.35em] uppercase text-[#8FAF9F] font-medium">
          こんな状態、ありませんか
        </span>
        <h2
          className="text-2xl md:text-3xl font-light text-stone-900 leading-snug tracking-wide"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          「大丈夫」と言いながら、<br />
          <span className="text-stone-500 font-light">大丈夫じゃない日が続いている。</span>
        </h2>
      </motion.div>
    </motion.div>

    {/* 共感カード（感情ワードを強調） */}
    <motion.div
      initial="hidden" whileInView="visible"
      viewport={{ once: true, amount: 0.15 }} variants={stagger}
      className="grid md:grid-cols-2 gap-4"
    >
      {[
        {
          feeling: "頭が休まらない",
          detail: "仕事が終わっても利用者のことが頭から離れず、「もっとできることがあったはず」と繰り返してしまう。",
        },
        {
          feeling: "感情が動かなくなってきた",
          detail: "以前は感じていた「やりがい」が薄れ、利用者の話を聞きながら何も感じない自分に気づく。",
        },
        {
          feeling: "誰にも相談できない",
          detail: "同僚には弱みを見せられない。家族に話しても伝わらない。「支援職あるある」で片づけられてしまう。",
        },
        {
          feeling: "自分が弱いのかと思う",
          detail: "「私が強ければ大丈夫なはず」と自分を責め続ける。でも弱さの問題じゃないとどこかで感じている。",
        },
        {
          feeling: "休むことへの罪悪感",
          detail: "利用者のことが気になって休めない。休んでいても「休んでいていいのか」という気持ちが消えない。",
        },
        {
          feeling: "このまま続けられるか不安",
          detail: "続けたい気持ちはある。でも「いつか限界が来るかも」という予感が、ずっと頭の片隅にある。",
        },
      ].map((item, i) => (
        <motion.div
          key={item.feeling}
          variants={fadeUp}
          className="p-6 rounded-2xl border border-stone-100 bg-stone-50 hover:border-[#8FAF9F]/40 hover:bg-white transition-all duration-300"
        >
          <p className="text-stone-800 font-medium mb-2 text-sm tracking-wide">
            ── {item.feeling}
          </p>
          <p className="text-stone-500 text-sm leading-[1.9]">{item.detail}</p>
        </motion.div>
      ))}
    </motion.div>

    {/* 共感後のブリッジコピー */}
    <motion.div
      initial="hidden" whileInView="visible"
      viewport={{ once: true }} variants={fadeUp}
      className="max-w-2xl mx-auto text-center space-y-4"
    >
      <p
        className="text-stone-700 text-lg md:text-xl font-light leading-[2]"
        style={{ fontFamily: "'Noto Serif JP', serif" }}
      >
        それは、あなたが弱いからではありません。<br />
        <span className="text-stone-900 font-medium">支援職という構造が、そうさせているのです。</span>
      </p>
      {/* マイクロCTA（中間離脱防止） */}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-sm text-[#8FAF9F] hover:text-stone-700 transition-colors underline underline-offset-4"
      >
        まず話してみる（初回無料）
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </motion.div>

  </div>
</section>
 {/* ── TRUST BAR（共感セクション直後に挿入） ── */}
<section className="py-14 px-6 bg-[#F7F6F3] border-y border-stone-200">
  <div className="max-w-3xl mx-auto">
    <motion.div
      initial="hidden" whileInView="visible"
      viewport={{ once: true }} variants={fadeUp}
      className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
    >
      {/* 顔写真 */}
      <div className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md">
        <img src="/profile.jpg" alt="松本 龍児" className="w-full h-full object-cover" />
      </div>

      <div className="text-center sm:text-left space-y-2">
        <p className="text-xs tracking-[0.3em] uppercase text-stone-400">Counselor</p>
        <p
          className="text-xl font-medium text-stone-900"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          松本 龍児
          <span className="ml-3 text-sm font-normal text-stone-500">公認心理師</span>
        </p>
        <p className="text-stone-500 text-sm leading-relaxed">
          障害福祉分野15年・累計300名以上6,000時間以上の支援経験。<br className="hidden sm:block" />
          CBT・ACT・MIを統合し、支援職の消耗・燃え尽きに特化したカウンセリングを提供。
        </p>
      </div>

      {/* 信頼バッジ */}
      <div className="flex-shrink-0 flex flex-row sm:flex-col gap-2">
        {["公認心理師", "障害福祉15年", "300名以上"].map((b) => (
          <span
            key={b}
            className="px-3 py-1 bg-white border border-stone-200 text-stone-600 text-xs rounded-full tracking-wide text-center whitespace-nowrap"
          >
            {b}
          </span>
        ))}
      </div>
    </motion.div>
  </div>
</section>
        {/* ── FEATURES ── */}
        <section className="py-28 px-6 bg-stone-50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="space-y-16"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel en="Features" ja="カウンセリングの特徴" />
              </motion.div>
 
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature) => (
                  <motion.div key={feature.title} variants={fadeUp}>
                    <FeatureCard {...feature} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
 
        {/* ── STRUCTURE ── */}
        <section className="py-28 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="space-y-14"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel en="Approach" ja="構造整理型カウンセリングとは" />
              </motion.div>
 
              <motion.div variants={fadeUp} className="space-y-10 text-stone-600 text-sm md:text-base leading-[2]">
                <p>感情の共感だけで終わらせません。</p>
 
                <BlockQuote>
                  <p className="text-stone-800 font-medium">
                    なぜ消耗するのかを、構造として解きほぐす。
                  </p>
                </BlockQuote>
 
                <p>
                  役割の過剰化、責任の抱え込み、思考のループ、境界の曖昧さ——
                  これらを言語化・可視化し、負荷の構造を整理します。
                </p>
 
                <div className="pt-6 border-t border-stone-100">
                  <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-8">
                    支援の進め方
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {sessionGuideItems.map((item) => (
                      <div
                        key={item.text}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl border border-stone-100 bg-stone-50 text-sm text-stone-600"
                      >
                        <span className="text-[#8FAF9F]">{item.icon}</span>
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
 
                <div className="pt-6 border-t border-stone-100 text-center">
                  <p
                    className="text-lg md:text-xl text-stone-800 font-light"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    目的は「強くなること」ではなく、
                    <br />
                    消耗を減らすこと。
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
 
        {/* ── GUIDE ── */}
        <section id="guide" className="py-28 px-6 bg-stone-950">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="space-y-20"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel en="Guide" ja="ご利用案内" light />
              </motion.div>
 
              {/* 料金 */}
              <motion.div variants={fadeUp} className="space-y-8">
                <p className="text-[10px] tracking-[0.35em] uppercase text-stone-500">料金</p>
 
                <div className="p-6 rounded-2xl border border-emerald-900/40 bg-emerald-950/30 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-emerald-500 mb-1">まずはここから</p>
                    <p className="text-lg font-medium text-stone-100" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                      初回メール相談
                    </p>
                    <p className="text-stone-500 text-xs mt-1">1往復・状況整理 ／ 返信目安 2営業日以内</p>
                  </div>
                  <span className="text-3xl font-light text-emerald-400">無料</span>
                </div>
 
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-7 rounded-2xl border border-stone-800 bg-stone-900/50 space-y-6">
                    <div className="flex items-center gap-3 text-stone-300">
                      <Monitor className="w-5 h-5 text-stone-500" />
                      <h3 className="text-base font-medium tracking-wider">オンライン面談</h3>
                    </div>
                    <div className="space-y-3 divide-y divide-stone-800">
                      {[
                        { label: "初回体験 30分", price: "5,000円（税込）" },
                        { label: "通常 30分", price: "8,000円（税込）" },
                        { label: "通常 60分", price: "12,000円（税込）" },
                        { label: "形式", price: "Google Meet" },
                      ].map(({ label, price }) => (
                        <div key={label} className="flex justify-between items-baseline pt-3">
                          <span className="text-stone-500 text-xs">{label}</span>
                          <span className="text-stone-200 text-sm">{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
 
                  <div className="p-7 rounded-2xl border border-stone-800 bg-stone-900/50 space-y-6">
                    <div className="flex items-center gap-3 text-stone-300">
                      <Mail className="w-5 h-5 text-stone-500" />
                      <h3 className="text-base font-medium tracking-wider">メール相談</h3>
                    </div>
                    <div className="space-y-3 divide-y divide-stone-800">
                      {[
                        { label: "初回 1往復", price: "無料", accent: true },
                        { label: "通常 3往復", price: "3,000円（税込）", accent: false },
                        { label: "形式", price: "メール", accent: false },
                      ].map(({ label, price, accent }) => (
                        <div key={label} className="flex justify-between items-baseline pt-3">
                          <span className="text-stone-500 text-xs">{label}</span>
                          <span className={`text-sm ${accent ? "text-emerald-400" : "text-stone-200"}`}>{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
 
                <p className="text-stone-600 text-xs leading-relaxed">
                  ※ お支払いは銀行振込にてお願いしております。予約確定後にご案内いたします。
                </p>
             </motion.div>   //
 
              {/* 流れ */}
              <motion.div variants={fadeUp} className="space-y-8">
                <p className="text-[10px] tracking-[0.35em] uppercase text-stone-500">ご利用の流れ</p>
                <ol className="space-y-0">
                  {flowItems.map((item) => (
                    <li key={item.step} className="flex gap-6 items-start group">
                      <span className="text-stone-700 font-light text-xs tabular-nums shrink-0 pt-4 w-6">
                        {item.step}
                      </span>
                      <div className="flex-1 py-4 border-b border-stone-900 group-last:border-b-0">
                        <p className="text-stone-200 text-sm font-medium mb-1">{item.title}</p>
                        <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </motion.div>   //
 
              {/* 注意事項 */}
              <motion.div
                variants={fadeUp}
                className="p-6 rounded-2xl border border-stone-800 bg-stone-900/30 space-y-4"
              >
                <p className="text-[10px] tracking-[0.35em] uppercase text-stone-500">対象・ご注意</p>
                <ul className="space-y-3 text-stone-500 text-xs leading-relaxed">
                  {notes.map((text) => (
                    <li key={text} className="flex gap-3">
                      <Minus className="w-3 h-3 text-stone-700 shrink-0 mt-0.5" />
                      {text}
                    </li>
                  ))}
                </ul>
              </motion.div>   //
        </section>

       {/* ── REASSURANCE（フォーム直前）改善版 ── */}
<section className="py-16 px-6 bg-stone-50">
  <div className="max-w-2xl mx-auto space-y-5">

    <p className="text-center text-xs tracking-[0.3em] uppercase text-stone-400 mb-8">
      よくあるご不安
    </p>

    {[
      {
        q: "うまく話せるか不安です",
        a: "整理されていない状態のままで大丈夫です。「何が負担なのかよくわからない」という状態からご相談される方が大半です。",
      },
      {
        q: "相談するほどの内容かどうか迷っています",
        a: "「大げさかな」と思う感覚自体が、支援職に多いパターンです。その感覚ごと、お話しください。",
      },
      {
        q: "1回だけで終わっても失礼じゃないですか",
        a: "1回のみのご相談でも、まったく問題ありません。継続を前提としたご案内は行っていません。",
      },
      {
        q: "申し込んだら断りにくくなりそうで",
        a: "フォームを送っていただいた後も、日程調整の段階でキャンセル可能です。プレッシャーをかけることはありません。",
      },
      {
        q: "カウンセリングに抵抗があります",
        a: "「カウンセリング」というより、今の状態を言語化して整理する時間です。週1回通い続けるようなものではありません。",
      },
    ].map(({ q, a }) => (
      <details
        key={q}
        className="group bg-white rounded-2xl border border-stone-100 overflow-hidden"
      >
        <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none text-stone-700 text-sm font-medium hover:bg-stone-50 transition-colors">
          <span>{q}</span>
          <span className="text-stone-300 group-open:rotate-45 transition-transform text-lg flex-shrink-0">+</span>
        </summary>
        <div className="px-6 pb-5 pt-1 text-stone-500 text-sm leading-[1.9] border-t border-stone-50">
          {a}
        </div>
      </details>
    ))}
  </div>
</section>

       
{/* ── CONTACT 改善版（フォーム冒頭部分） ── */}
<motion.div variants={fadeUp} className="space-y-8">
  <SectionLabel en="Contact" ja="まず、話してみてください" />


  {/* 送信直前の3つの保証（最重要） */}
  <div className="flex items-center justify-center gap-4 text-xs text-stone-400 flex-wrap">
    <span className="flex items-center gap-1">
      <CheckCircle2 className="w-3.5 h-3.5 text-stone-300" />
      無理な継続案内なし
    </span>
    <span className="flex items-center gap-1">
      <CheckCircle2 className="w-3.5 h-3.5 text-stone-300" />
      1回のみでもOK
    </span>
    <span className="flex items-center gap-1">
      <CheckCircle2 className="w-3.5 h-3.5 text-stone-300" />
      送った後もキャンセル可
    </span>
  </div>
</motion.div>   //

 
{/* ── CONTACT ── */}
<section id="contact" className="py-28 px-6 bg-white">
  <div className="max-w-2xl mx-auto">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
      className="space-y-14"
    >
      {/* セクションヘッダー */}
      <motion.div variants={fadeUp} className="space-y-8">
        <SectionLabel en="Contact" ja="まず、話してみてください" />

        {/* 送信後プロセスの可視化 */}
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { step: "1", label: "フォームを送る", sub: "2〜3分で完了" },
            { step: "2", label: "メールが届く", sub: "2営業日以内に返信" },
            { step: "3", label: "状況を整理する", sub: "1往復・無料" },
          ].map(({ step, label, sub }) => (
            <div key={step} className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <span className="text-[10px] text-stone-400 tracking-widest">{step}</span>
              <p className="text-stone-700 text-xs font-medium mt-1">{label}</p>
              <p className="text-stone-400 text-[11px] mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        <p
          className="text-stone-500 text-sm leading-[2.2]"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          今の状態を言葉にするだけで、少し楽になることがあります。<br />
          「うまく書けない」という内容でも、そのままお送りください。
        </p>
      </motion.div>   //

      {/* フォーム */}
      <motion.form variants={fadeUp} className="space-y-7" onSubmit={handleSubmit} noValidate>

        <div className="space-y-2">
          <label htmlFor="name" className="text-[10px] tracking-[0.3em] uppercase text-stone-400">
            お名前 <span className="text-stone-300">（必須）</span>
          </label>
          <input
            id="name" name="name" type="text" required autoComplete="name"
            placeholder="山田 花子"
            className="w-full px-5 py-3.5 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-1 focus:ring-[#8FAF9F] bg-stone-50 placeholder-stone-300 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-[10px] tracking-[0.3em] uppercase text-stone-400">
            メールアドレス <span className="text-stone-300">（必須）</span>
          </label>
          <input
            id="email" name="email" type="email" required autoComplete="email"
            placeholder="example@email.com"
            className="w-full px-5 py-3.5 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-1 focus:ring-[#8FAF9F] bg-stone-50 placeholder-stone-300 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="job" className="text-[10px] tracking-[0.3em] uppercase text-stone-400">
            ご職種
          </label>
          <input
            id="job" name="job" type="text" autoComplete="organization-title"
            placeholder="例：社会福祉士、看護師、スクールカウンセラー など"
            className="w-full px-5 py-3.5 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-1 focus:ring-[#8FAF9F] bg-stone-50 placeholder-stone-300 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-[10px] tracking-[0.3em] uppercase text-stone-400">
            ご相談内容 <span className="text-stone-300">（必須）</span>
          </label>
          <textarea
            id="message" name="message" required rows={5}
            placeholder="現在のお困りのこと、ご質問など、お気軽にお書きください。"
            className="w-full px-5 py-3.5 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-1 focus:ring-[#8FAF9F] bg-stone-50 placeholder-stone-300 resize-none transition-colors"
          />
        </div>

        {formStatus === "error" && formError && (
          <div className="rounded-xl border border-red-100 bg-red-50 px-5 py-3.5 text-sm text-red-600">
            {formError}
          </div>
        )}

        {/* 送信ボタン */}
        <div className="space-y-3">
          <button
            type="submit"
            disabled={formStatus === "submitting"}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-stone-900 text-stone-50 text-sm tracking-[0.12em] hover:bg-stone-800 active:scale-[0.99] transition-all rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formStatus === "submitting" ? "送信中..." : "無料で今の状態を整理する（初回メール）"}
          </button>

          {/* 送信直前の3つの保証 */}
          <div className="flex items-center justify-center gap-4 text-xs text-stone-400 flex-wrap">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-stone-300" />
              無理な継続案内なし
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-stone-300" />
              1回のみでもOK
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-stone-300" />
              送った後もキャンセル可
            </span>
          </div>
        </div>

      </motion.form>
    </motion.div>
  </div>
</section>
 
        {/* ── FOOTER ── */}
        <footer className="py-8 px-6 border-t border-stone-100 bg-white">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-[10px] tracking-[0.25em] uppercase text-stone-400">
            {(["privacy", "tokusho", "cancel"] as const).map((key) => (
              <button
                key={key}
                onClick={() => openModal(key)}
                className="hover:text-stone-700 transition-colors"
                type="button"
              >
                {modalTitleMap[key]}
              </button>
            ))}
          </div>
          <p className="text-center text-[10px] text-stone-300 mt-6 tracking-wider">
            © こころの相談室 いしずえ
          </p>
        </footer>
 
      </main>
 
      {/* ── MODALS ── */}
      <AnimatePresence>
 
        {activeModal === "privacy" && (
          <LegalModal isOpen title={modalTitleMap.privacy} onClose={closeModal}>
            <div className="space-y-8 text-stone-600 leading-loose text-sm">
              <h2 className="text-xl font-medium text-stone-900 tracking-wider border-b border-stone-100 pb-6"
                style={{ fontFamily: "'Noto Serif JP', serif" }}>
                プライバシーポリシー
              </h2>
              <p>こころの相談室 いしずえ（以下「当相談室」）は、利用者の個人情報の重要性を認識し、以下のとおり適切に取り扱います。</p>
              {[
                { title: "1. 取得する情報", body: "氏名・メールアドレス・相談内容・予約情報・決済情報" },
                { title: "2. 利用目的", body: "カウンセリングサービスの提供・予約管理および連絡対応・サービス向上のための分析・法令に基づく対応" },
                { title: "3. 第三者提供", body: "法令に基づく場合を除き、本人の同意なく第三者へ提供することはありません。" },
                { title: "4. 情報管理", body: "取得した情報は適切に管理し、不正アクセス・漏えい・改ざん防止に努めます。" },
                { title: "5. オンラインツールの利用", body: "オンラインカウンセリングでは Google Meet を使用します。各ツールのセキュリティポリシーは提供元の規定に準じます。" },
                { title: "6. 開示・訂正・削除", body: "ご本人からの請求があった場合、法令に従い対応いたします。" },
                { title: "7. 改定", body: "本ポリシーは必要に応じて改定されます。" },
              ].map(({ title, body }) => (
                <section key={title} className="space-y-2">
                  <h3 className="text-sm font-medium text-stone-800">{title}</h3>
                  <p className="text-stone-500">{body}</p>
                </section>
              ))}
              <div className="pt-6 border-t border-stone-100 text-xs space-y-1 text-stone-400">
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
            <div className="space-y-8 text-stone-600 leading-loose text-sm">
              <h2 className="text-xl font-medium text-stone-900 tracking-wider border-b border-stone-100 pb-6"
                style={{ fontFamily: "'Noto Serif JP', serif" }}>
                特定商取引法に基づく表記
              </h2>
              <div className="grid grid-cols-[110px_1fr] gap-y-5">
                {[
                  { label: "事業者名", value: "こころの相談室 いしずえ" },
                  { label: "代表者名", value: "松本 龍児" },
                  { label: "所在地", value: "大阪府大阪市（詳細はご請求時に開示）" },
                  { label: "連絡先", value: "ish1zue.counseling@gmail.com" },
                  { label: "販売価格", value: "初回メール相談 無料 / オンライン面談：体験30分 5,000円・30分 8,000円・60分 12,000円 / メール相談3往復 3,000円（全て税込）" },
                  { label: "支払方法", value: "銀行振込" },
                  { label: "支払時期", value: "予約確定後、指定期日までにお支払いください。" },
                  { label: "提供時期", value: "入金確認後、予約日時に提供いたします。" },
                  { label: "返品・返金", value: "下記キャンセルポリシーをご確認ください。" },
                ].map(({ label, value }) => (
                  <>
                    <div key={`${label}-l`} className="text-stone-400 font-medium text-xs pt-0.5">{label}</div>
                    <div key={`${label}-v`} className="text-stone-600">{value}</div>
                  </>
                ))}
              </div>
            </div>
          </LegalModal>
        )}
 
        {activeModal === "cancel" && (
          <LegalModal isOpen title={modalTitleMap.cancel} onClose={closeModal}>
            <div className="space-y-8 text-stone-600 leading-loose text-sm">
              <h2 className="text-xl font-medium text-stone-900 tracking-wider border-b border-stone-100 pb-6"
                style={{ fontFamily: "'Noto Serif JP', serif" }}>
                キャンセルポリシー
              </h2>
              <p>ご予約後のキャンセルについては、以下の通りといたします。</p>
              <ul className="divide-y divide-stone-100">
                {[
                  { timing: "24時間前までのキャンセル", fee: "無料" },
                  { timing: "24時間以内のキャンセル", fee: "料金の 50%" },
                  { timing: "当日・無断キャンセル", fee: "料金の 100%" },
                ].map(({ timing, fee }) => (
                  <li key={timing} className="flex justify-between py-3">
                    <span className="text-stone-500">{timing}</span>
                    <span className="font-medium text-stone-800">{fee}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-500">
                やむを得ない事情がある場合は個別にご相談ください。返金が発生する場合、振込手数料をご負担いただくことがあります。
              </p>
              <div className="bg-stone-50 p-5 rounded-xl border border-stone-100 text-xs text-stone-400">
                本サービスは医療行為ではありません。診断・投薬・緊急対応は行っておりません。
              </div>
            </div>
          </LegalModal>
        )}
 
        {activeModal === "sent" && (
          <LegalModal isOpen title="送信完了" onClose={closeModal}>
            <div className="text-center space-y-7 py-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#8FAF9F]/10 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-[#8FAF9F]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  ご連絡ありがとうございます
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  内容は問題なく受け付けられました。
                  <br />
                  通常 24時間以内にご返信いたします。
                </p>
              </div>
              <div className="text-xs text-stone-400 leading-relaxed space-y-1">
                <p>※ 無理に継続をおすすめすることはありません</p>
                <p>※ 1回のみのご相談でも問題ありません</p>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed px-4">
                今の状態を言葉にするだけでも、少し整理が進むことがあります。
                <br />
                ご返信まで、無理に何かを変えようとせずお過ごしください。
              </p>
              <button
                onClick={closeModal}
                className="inline-flex items-center px-8 py-3 bg-stone-900 text-stone-50 text-sm tracking-[0.15em] hover:bg-stone-800 transition-all rounded-full"
                type="button"
              >
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
