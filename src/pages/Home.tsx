/**
 * Home.tsx
 * こころの相談室 いしずえ - ホームページ
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
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Monitor,
  CheckCircle2,
  Clock,
  Mail,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>支援職のためのカウンセリング｜燃え尽き・疲労を構造的に整理｜こころの相談室 いしずえ</title>
  <meta name="description" content="支援職で「もう限界かもしれない」と感じていませんか？..." />
</Helmet>

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

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const consultationItems = [
  "頭が休まらない",
  "役割と本音のズレを感じる",
  "自己否定が強くなっている",
  "燃え尽きの予兆がある",
  "責任感が強く頼れない",
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
    desc: "対人援助職特有の葛藤や、二次受傷、燃え尽きのリスクを理解した専門的なサポートを提供します。",
    icon: <ShieldCheck className="w-5 h-5 text-[#7C9A8A]" />,
  },
  {
    title: "オンライン対応（透明性重視）",
    desc: "Google Meetを使用します。必要に応じてリアルタイム字幕機能を活用することがあります（同意制）。",
    icon: <Monitor className="w-5 h-5 text-[#7C9A8A]" />,
  },
  {
    title: "消耗を減らすことを優先",
    desc: "無理な自己改善よりも、まずは「消耗を減らすこと」を最優先に、持続可能な働き方を考えます。",
    icon: <CheckCircle2 className="w-5 h-5 text-[#7C9A8A]" />,
  },
];

const sessionGuideItems: GuideItem[] = [
  { text: "面談は1回60分", icon: <Clock className="w-4 h-4" /> },
  { text: "2週間単位のサイクル", icon: <Clock className="w-4 h-4" /> },
  { text: "オンライン完結", icon: <Monitor className="w-4 h-4" /> },
  { text: "文字起こし活用（同意の上）", icon: <ShieldCheck className="w-4 h-4" /> },
];

const profileBadges = ["障害福祉15年", "累計300名以上", "6,000時間以上"] as const;

const qualifications = [
  "公認心理師",
  "障害福祉分野での相談支援業務 15年",
  "個別カウンセリング 累計300名以上／6,000時間以上",
  "CBT・ACT・動機づけ面接（MI）・BPSモデル・トラウマインフォームドケア・セルフコンパッション・SDT（自己決定理論）に基づく支援",
  "医療・福祉・教育領域での実務経験",
] as const;

const flowItems: FlowItem[] = [
  { step: "01", title: "お問い合わせ", desc: "下記フォームよりご連絡ください。" },
  { step: "02", title: "日程調整", desc: "メールにてご希望の日時をお知らせします。" },
  { step: "03", title: "事前シート記入", desc: "簡単な状況把握シートにご記入いただきます。" },
  { step: "04", title: "セッション（Google Meet）", desc: "オンラインにて30分の体験セッションを行います。" },
  { step: "05", title: "振り返りシート共有", desc: "セッション後、整理内容をまとめてお送りします。" },
];

const notes = [
  "対象は支援職（福祉・医療・教育・心理職など）に従事されている方です。",
  "本サービスは医療行為・診断・精神科的治療ではありません。",
  "精神科・心療内科への通院中の方は、かかりつけ医にご相談の上、お申し込みください。",
  "キャンセルは24時間前までにご連絡ください。それ以降はキャンセル料が発生します。",
] as const;

/* -------------------------------------------------------------------------- */
/*                               Helper Components                            */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  label,
  title,
  center = false,
  light = false,
}: {
  label: string;
  title: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <span className="section-label">{label}</span>
      <h2
        className={[
          "text-2xl font-medium mt-4 tracking-wider",
          light ? "text-stone-100" : "text-stone-900",
        ].join(" ")}
      >
        {title}
      </h2>
    </div>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 text-stone-700 py-3 border-b border-stone-100 last:border-b-0"
        >
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#7C9A8A]/15 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-[#7C9A8A] rounded-full" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeatureCard({ title, desc, icon }: FeatureItem) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-white border border-stone-100 hover:border-[#7C9A8A]/30 hover:shadow-md transition-all group">
      <div className="w-11 h-11 rounded-xl bg-[#7C9A8A]/10 flex items-center justify-center mb-6 group-hover:bg-[#7C9A8A]/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-base font-semibold mb-3 text-stone-900">{title}</h3>
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-stone-900/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.2 }}
        className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12 relative focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-900 transition-colors"
          aria-label="閉じる"
          type="button"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Main                                     */
/* -------------------------------------------------------------------------- */

function Home() {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState<string>("");

  const openModal = useCallback((modal: ModalType) => setActiveModal(modal), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

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

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormStatus("submitting");
    setFormError("");

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setFormStatus("error");
      setFormError("フォーム設定が未完了です。環境変数を確認してください。");
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
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        payload,
        EMAILJS_PUBLIC_KEY
      );

      form.reset();
      setFormStatus("success");
      openModal("sent");
    } catch (error) {
      console.error(error);
      setFormStatus("error");
      setFormError("送信に失敗しました。時間をおいて再度お試しください。");
    }
  }, [openModal]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only px-4 py-2 bg-white text-blue-600"
      >
        メインコンテンツへスキップ
      </a>

      <main id="main-content">
        {/* HERO */}
<section className="relative pt-40 pb-32 px-6 min-h-[90vh] flex items-center bg-stone-50">
  <img
    src="/hero.jpg"
    alt="カウンセリングをイメージした静かな空間"
    className="absolute inset-0 w-full h-full object-cover"
    width={1920}
    height={1280}
    loading="eager"
    fetchPriority="high"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-800/15 to-stone-900/55" />

  <div className="max-w-4xl mx-auto text-center relative">
    <motion.div initial="hidden" animate="visible" variants={stagger}>
      
      {/* ラベル */}
      <motion.div variants={fadeUp} className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/40 rounded-full bg-white/20 backdrop-blur-md shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C9A8A]" />
          <span className="text-[10px] md:text-xs tracking-[0.25em] text-white/90 uppercase font-medium">
            公認心理師による支援者支援
          </span>
        </div>
      </motion.div>

      {/* キャッチコピー */}
      <motion.div variants={fadeUp} className="mb-6">
        <h1 className="text-3xl md:text-4xl font-medium tracking-[0.06em] text-white leading-snug drop-shadow-md">
          「もう限界かもしれない」と感じている支援職の方へ
        </h1>
      </motion.div>

      {/* サブコピー */}
      <motion.div variants={fadeUp} className="mb-10">
        <p className="text-white/80 text-sm md:text-base tracking-[0.15em] leading-relaxed">
          頭が休まらない、役割と本音のズレ、燃え尽きの予兆。<br />
          それらを構造的に整理し、消耗を減らすための時間です。
        </p>
      </motion.div>

      {/* 説明ボックス */}
      <motion.div
        variants={fadeUp}
        className="max-w-2xl mx-auto space-y-5 text-left text-stone-800 leading-relaxed text-base md:text-lg bg-white/70 backdrop-blur-md p-7 md:p-10 rounded-3xl border border-white/60 shadow-xl"
      >
        <p>
          礎（いしずえ）とは、土台のこと。支援する立場にいる人は、
          感情労働の中で知らず知らずのうちに自分自身を後回しにしてしまうことがあります。
        </p>
<p className="font-semibold text-stone-900 border-l-4 border-stone-400 pl-4">
  その状態は、あなたの弱さではなく「構造」です。
</p>       
        <p>
          ここは「弱さを吐き出す場所」ではなく、思考・役割・負荷を構造的に整理し、
          持続可能な状態へ整え直すための時間です。
        </p>
        <p className="font-semibold text-stone-900 border-t border-stone-200 pt-5">
          消耗を減らし、支援を続けられる土台を再設計します。
        </p>
      </motion.div>

      {/* CTAエリア */}
      <motion.div variants={fadeUp} className="mt-12">

        {/* 共感 */}
        <p className="text-white/90 text-sm md:text-base mb-4 leading-relaxed">
          「このまま続けるのは少しきついかも」と感じているなら、
          一度、今の状態を整理してみませんか？
        </p>

        {/* 安心 */}
        <p className="text-white/70 text-xs md:text-sm mb-8">
          今の状態のまま、ご相談いただいて大丈夫です。
        </p>

        {/* CTAボタン */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-10 py-4 bg-white text-stone-900 text-sm tracking-[0.15em] font-medium hover:bg-stone-50 transition-all rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
        >
          今の状態を整理する（無料）
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* 安心補足 */}
        <p className="text-white/60 text-xs mt-4">
          ※無理な勧誘はありません／1回のみの相談も可能です
        </p>

      </motion.div>

    </motion.div>
  </div>
</section>

        {/* Consultation */}
        <section id="services" className="py-24 px-6 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="space-y-16">
              <motion.div variants={fadeUp}>
                <SectionHeading label="Consultation" title="このようなご相談" center />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div variants={fadeUp}>
                  <BulletList items={consultationItems} />
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-stone-200 shadow-lg"
                >
                  <h3 className="text-lg font-medium mb-4 text-stone-800">
                    構造整理型アプローチ
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    感情の整理だけでなく、思考・役割・負荷の「見える化」を重視します。
                    現状を構造的に捉え直すことで、漠然とした不安や疲弊の正体を明らかにしていきます。
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="space-y-16">
              <motion.div variants={fadeUp}>
                <SectionHeading label="Features" title="カウンセリングの特徴" center />
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature) => (
                  <motion.div key={feature.title} variants={fadeUp}>
                    <FeatureCard {...feature} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Structure Counseling */}
        <section className="py-24 px-6 bg-stone-50">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="space-y-10">
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl font-medium tracking-wider text-center">
                  構造整理型カウンセリングとは
                </h2>
              </motion.div>

              <motion.div variants={fadeUp} className="text-stone-600 leading-relaxed text-base md:text-lg space-y-8">
                <p>感情の共感だけで終わらせません。</p>

                <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-100 space-y-3">
                  {structureItems.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-stone-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#7C9A8A]/10 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-[#7C9A8A] rounded-full" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="bg-stone-100/50 p-6 rounded-xl border border-stone-200 text-sm md:text-base">
                  <p className="font-medium text-stone-800 mb-2">
                    例）「管理職として部下を支えながら、自分は誰にも相談できない状態」
                  </p>
                  <p className="text-stone-500">→ 役割過剰 × 責任の抱え込み × 境界の曖昧さ</p>
                  <p className="text-stone-500">→ 優先順位再設計</p>
                </div>

                <p>これらを言語化・可視化し、負荷の構造を整理します。</p>

                <div className="pt-8 border-t border-stone-200">
                  <h3 className="text-sm font-medium text-stone-900 mb-6 tracking-widest uppercase text-center">
                    支援の進め方
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {sessionGuideItems.map((item) => (
                      <div
                        key={item.text}
                        className="flex items-center space-x-3 bg-white/50 p-4 rounded-xl border border-stone-100"
                      >
                        <span className="text-stone-400">{item.icon}</span>
                        <span className="text-sm text-stone-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-medium text-stone-800 text-center pt-4">
                  目的は「強くなること」ではなく、消耗を減らすこと。
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Profile */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="space-y-12">
              <motion.div variants={fadeUp}>
                <SectionHeading label="Profile" title="運営者プロフィール" center />
              </motion.div>

              <motion.div variants={fadeUp} className="bg-stone-50/30 p-6 md:p-16 rounded-3xl border border-stone-100 space-y-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-stone-100 pb-10">
                  <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-sm">
                    <img
                      src="/profile.jpg"
                      alt="松本 龍児 近影"
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </div>

                  <div className="text-center md:text-left pt-4">
                    <h3 className="text-2xl font-medium text-stone-900 mb-1">
                      松本 龍児
                    </h3>
                    <p className="text-stone-500 text-sm md:text-base mb-2">
                      公認心理師｜構造整理型カウンセラー／支援者支援専門
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                      {profileBadges.map((badge) => (
                        <span
                          key={badge}
                          className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full tracking-wide"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-stone-700 leading-relaxed space-y-8 text-base md:text-lg">
                  <p>
                    15年間、障害福祉の現場で支援者として働いてきました。300名以上、6,000時間を超える支援の中で、ずっと気になっていたことがあります。
                  </p>

                  <p className="text-xl font-medium text-stone-900 border-l-4 border-stone-300 pl-4">
                    支援者自身が、誰にも頼れていない。
                  </p>

                  <p>
                    責任を抱え、感情を押し込め、疲弊しながらも「自分が弱いから」と思い込んでいる人を、何度も見てきました。それは弱さではなく、構造の問題です。
                  </p>

                  <p>
                    支援の軸は、感情の共感だけで終わらせないこと。CBT・ACT・動機づけ面接（MI）・BPSモデル・トラウマインフォームドケアを統合的に用い、思考・役割・負荷を構造的に整理します。
                    「なぜ消耗するのか」を一緒に解きほぐし、持続可能な支援者としての土台を再設計します。
                  </p>

                  <p>
                    個人の努力不足ではなく、構造の問題として捉え直すことが、私の支援の出発点です。
                  </p>

                  <div className="pt-8 border-t border-stone-100">
                    <h4 className="text-xs font-medium text-stone-400 mb-6 tracking-[0.3em] uppercase">
                      資格・経歴
                    </h4>
                    <ul className="space-y-3 text-sm text-stone-600">
                      {qualifications.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-stone-300 shrink-0 mt-1">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-stone-100 text-center">
                    <p className="font-medium text-stone-900 mb-2">
                      強くなることを目指すのではなく、
                    </p>
                    <p className="text-xl text-stone-900">
                      持続可能な状態に戻すこと。
                    </p>
                    <p className="mt-6 text-stone-600">
                      支援を続けられる土台を整えることが、私の役割です。
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Guide */}
        <section id="guide" className="py-24 px-6 bg-stone-900 text-stone-50">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="space-y-16">
              <motion.div variants={fadeUp}>
                <SectionHeading label="Guide" title="ご利用案内" center light />
              </motion.div>

              {/* Pricing */}
              <motion.div variants={fadeUp} className="space-y-6">
                <h3 className="text-sm font-medium tracking-[0.3em] uppercase text-stone-400">
                  料金
                </h3>

                <div className="p-6 border border-emerald-800/40 rounded-2xl bg-emerald-950/20 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-xs tracking-widest text-emerald-400 uppercase mb-1">
                      まずはここから
                    </p>
                    <p className="text-lg font-medium text-stone-100">
                      初回メール相談
                    </p>
                    <p className="text-stone-400 text-sm mt-1">
                      1往復・状況整理 ／ 返信目安2営業日以内
                    </p>
                  </div>
                  <span className="text-3xl font-light text-emerald-400 whitespace-nowrap">
                    無料
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 md:p-10 border border-stone-800 rounded-2xl space-y-8">
                    <div className="flex items-center space-x-4">
                      <Monitor className="w-6 h-6 text-stone-500" />
                      <h3 className="text-xl font-medium tracking-wider">オンライン面談</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                        <span className="text-stone-500 text-[10px] md:text-xs tracking-widest uppercase">
                          初回体験 (30分)
                        </span>
                        <span className="text-base md:text-lg whitespace-nowrap">
                          5,000円 (税込)
                        </span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                        <span className="text-stone-500 text-[10px] md:text-xs tracking-widest uppercase">
                          通常 30分
                        </span>
                        <span className="text-base md:text-lg whitespace-nowrap">
                          8,000円 (税込)
                        </span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                        <span className="text-stone-500 text-[10px] md:text-xs tracking-widest uppercase">
                          通常 60分
                        </span>
                        <span className="text-base md:text-lg whitespace-nowrap">
                          12,000円 (税込)
                        </span>
                      </div>
                      <div className="flex justify-between items-baseline pb-2">
                        <span className="text-stone-500 text-[10px] md:text-xs tracking-widest uppercase">
                          形式
                        </span>
                        <span className="text-base md:text-lg">Google Meet</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-10 border border-stone-800 rounded-2xl space-y-8">
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-stone-500" />
                      <h3 className="text-xl font-medium tracking-wider">メール相談</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                        <span className="text-stone-500 text-[10px] md:text-xs tracking-widest uppercase">
                          初回 1往復
                        </span>
                        <span className="text-base md:text-lg text-emerald-400 whitespace-nowrap">
                          無料
                        </span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-stone-800 pb-2">
                        <span className="text-stone-500 text-[10px] md:text-xs tracking-widest uppercase">
                          通常 3往復
                        </span>
                        <span className="text-base md:text-lg whitespace-nowrap">
                          3,000円 (税込)
                        </span>
                      </div>
                      <div className="flex justify-between items-baseline pb-2">
                        <span className="text-stone-500 text-[10px] md:text-xs tracking-widest uppercase">
                          形式
                        </span>
                        <span className="text-base md:text-lg">メール</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-stone-500 text-xs leading-relaxed">
                  ※ お支払いは銀行振込にてお願いしております。予約確定後にご案内いたします。
                  <br />
                  ※ 初回メール相談は無料です。お気軽にお問い合わせください。
                </p>
              </motion.div>

              {/* Flow */}
              <motion.div variants={fadeUp} className="space-y-6">
                <h3 className="text-sm font-medium tracking-[0.3em] uppercase text-stone-400">
                  ご利用の流れ
                </h3>

                <ol className="space-y-4">
                  {flowItems.map((item) => (
                    <li key={item.step} className="flex gap-6 items-start">
                      <span className="text-stone-600 font-medium text-sm shrink-0 pt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-stone-200 font-medium text-sm mb-1">
                          {item.title}
                        </p>
                        <p className="text-stone-500 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </motion.div>

              {/* Notes */}
              <motion.div
                variants={fadeUp}
                className="space-y-4 p-6 rounded-2xl border border-stone-700 bg-stone-800/30"
              >
                <h3 className="text-sm font-medium tracking-[0.3em] uppercase text-stone-400 mb-4">
                  対象・ご注意
                </h3>

                <ul className="space-y-3 text-stone-400 text-sm leading-relaxed">
                  {notes.map((text) => (
                    <li key={text} className="flex gap-3">
                      <span className="text-stone-600 shrink-0">—</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

{/* ラッパーで左揃え固定 */}
<motion.div className="mt-12 bg-stone-50 border border-stone-200 rounded-2xl p-6 space-y-6">
  {/* 安心ブロック */}
  <motion.div
    variants={fadeUp}
    className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-sm text-stone-600 leading-relaxed text-left"
  >
    <p className="font-medium text-stone-800 mb-2">
      初回は無料でご相談いただけます
    </p>
    <p>
      今の状態を言葉にするだけでも大丈夫です。
      <br />
      うまく整理されていなくても問題ありません。
      <br /><br />
      無理に変わる必要はありません。
      まずは「何が負担になっているのか」を一緒に整理します。
      <br /><br />
      ※継続を前提としたご案内は行いません
      <br />
      ※1回のみのご相談でも問題ありません
    </p>
  </motion.div>

  {/* 不安解消ブロック */}
  <motion.div
    variants={fadeUp}
    className="bg-white border border-stone-200 rounded-2xl p-6 space-y-4 text-sm text-stone-600 leading-relaxed text-left"
  >
    {/* ←ここが原因だった */}
    <p className="text-stone-800 font-medium">
      申し込む前に、こんな不安はありませんか？
    </p>

    <div className="space-y-3 pt-2">
      <p>・うまく言葉にできるか不安</p>
      <p>・相談するほどの内容かわからない</p>
      <p>・無理に継続を勧められないか心配</p>
      <p>・1回だけで終わってもいいのか気になる</p>
      <p>・こんなことで相談していいのか迷っている</p>
    </div>

    <div className="pt-4 border-t border-stone-100 space-y-3">
      <p>これらはすべて、実際によくいただくご不安です。</p>
      <p>実際には、整理されていない状態のままご相談いただく方がほとんどです。</p>
      <p>
        今の状態をそのままお聞かせください。<br />
        まとまっていなくても大丈夫です。
      </p>
    </div>

    <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 space-y-1">
      <p>※継続を前提としたご案内は行いません</p>
      <p>※1回のみのご相談でも問題ありません</p>
    </div>
  </motion.div>

</div>
        
{/* Contact */}
<section id="contact" className="py-24 px-6 bg-white">
  <div className="max-w-2xl mx-auto">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="space-y-12"
    >
      {/* 見出し */}
      <motion.div variants={fadeUp} className="text-center">
        <SectionHeading label="Contact" title="お問い合わせ" center />
        <p className="text-stone-600 mt-4 text-sm leading-relaxed">
          支援する側でいる限り、
          <br />
          「自分のことは後回し」が当たり前になっていませんか？
          <br />
          <br />
          気づけば、頭は休まらず、誰にも頼れず、
          <br />
          <br />
          それでも「自分がやるしかない」と抱え込んでいる。
          <br />
          <br />
          その状態は、あなたの弱さではなく「構造」です。
          <br />
          <br />
          「もう限界かもしれない」と感じたときが、立て直しのタイミングです。
          <br /> 
           <br />
          そのまま耐え続ける前に、一度、今の状態を整理してみてください。
          <br />    
        </p>
      </motion.div>


      
      {/* フォーム */}
      <motion.form
        variants={fadeUp}
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs tracking-widest text-stone-500 uppercase">
            お名前 <span className="text-stone-400">（必須）</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="山田 花子"
            className="w-full px-4 py-3 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 bg-stone-50 placeholder-stone-300"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-xs tracking-widest text-stone-500 uppercase">
            メールアドレス <span className="text-stone-400">（必須）</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="example@email.com"
            className="w-full px-4 py-3 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 bg-stone-50 placeholder-stone-300"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="job" className="text-xs tracking-widest text-stone-500 uppercase">
            ご職種
          </label>
          <input
            id="job"
            name="job"
            type="text"
            autoComplete="organization-title"
            placeholder="例：社会福祉士、看護師、スクールカウンセラー など"
            className="w-full px-4 py-3 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 bg-stone-50 placeholder-stone-300"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-xs tracking-widest text-stone-500 uppercase">
            ご相談内容 <span className="text-stone-400">（必須）</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="現在のお困りのこと、ご質問など、お気軽にお書きください。"
            className="w-full px-4 py-3 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 bg-stone-50 placeholder-stone-300 resize-none"
          />
        </div>

        {formStatus === "error" && formError && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {formError}
          </div>
        )}

        <button
          type="submit"
          disabled={formStatus === "submitting"}
          className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-stone-900 text-stone-50 text-sm tracking-[0.2em] hover:bg-stone-800 transition-all rounded-full shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
{formStatus === "submitting"
  ? "送信中..."
  : "無料で今の状態を整理する"}
        </button>

        <p className="text-center text-xs text-stone-400 leading-relaxed">
          無理な勧誘や営業は一切行いません。
          <br />
          安心してご相談いただけます。
        </p>
      </motion.form>
    </motion.div>
  </div>
</section>

        {/* Legal Links */}
        <div className="py-6 px-6 border-t border-stone-100">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-xs tracking-wider text-stone-400">
            <button
              onClick={() => openModal("privacy")}
              className="hover:text-stone-700 transition-colors"
              type="button"
            >
              プライバシーポリシー
            </button>
            <button
              onClick={() => openModal("tokusho")}
              className="hover:text-stone-700 transition-colors"
              type="button"
            >
              特定商取引法表記
            </button>
            <button
              onClick={() => openModal("cancel")}
              className="hover:text-stone-700 transition-colors"
              type="button"
            >
              キャンセルポリシー
            </button>
          </div>
        </div>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {activeModal === "privacy" && (
          <LegalModal
            isOpen
            title={modalTitleMap.privacy}
            onClose={closeModal}
          >
            <div className="space-y-8 text-stone-600 leading-loose">
              <h2 className="text-2xl font-medium text-stone-900 tracking-wider border-b border-stone-100 pb-6">
                プライバシーポリシー
              </h2>
              <p>
                こころの相談室 いしずえ（以下「当相談室」）は、利用者の個人情報の重要性を認識し、以下のとおり適切に取り扱います。
              </p>
              <section className="space-y-4">
                <h3 className="text-lg font-medium text-stone-900">1. 取得する情報</h3>
                <p>当相談室では、以下の情報を取得する場合があります。</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>氏名</li>
                  <li>メールアドレス</li>
                  <li>相談内容</li>
                  <li>予約情報</li>
                  <li>決済情報</li>
                </ul>
              </section>
              <section className="space-y-4">
                <h3 className="text-lg font-medium text-stone-900">2. 利用目的</h3>
                <p>取得した情報は、以下の目的に利用します。</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>カウンセリングサービスの提供</li>
                  <li>予約管理および連絡対応</li>
                  <li>サービス向上のための分析</li>
                  <li>法令に基づく対応</li>
                </ul>
              </section>
              <section className="space-y-4">
                <h3 className="text-lg font-medium text-stone-900">3. 第三者提供</h3>
                <p>法令に基づく場合を除き、本人の同意なく第三者へ提供することはありません。</p>
              </section>
              <section className="space-y-4">
                <h3 className="text-lg font-medium text-stone-900">4. 情報管理</h3>
                <p>取得した情報は適切に管理し、不正アクセス・漏えい・改ざん防止に努めます。</p>
              </section>
              <section className="space-y-4">
                <h3 className="text-lg font-medium text-stone-900">5. オンラインツールの利用</h3>
                <p>
                  オンラインカウンセリングでは Google Meet を使用します。各ツールのセキュリティポリシーは提供元の規定に準じます。
                </p>
              </section>
              <section className="space-y-4">
                <h3 className="text-lg font-medium text-stone-900">6. 開示・訂正・削除</h3>
                <p>ご本人からの請求があった場合、法令に従い対応いたします。</p>
              </section>
              <section className="space-y-4">
                <h3 className="text-lg font-medium text-stone-900">7. 改定</h3>
                <p>本ポリシーは必要に応じて改定されます。</p>
              </section>
              <div className="pt-8 border-t border-stone-100 text-sm space-y-1">
                <p>事業者名：こころの相談室 いしずえ</p>
                <p>代表：松本 龍児</p>
                <p>所在地：大阪府大阪市</p>
                <p>お問い合わせ：ish1zue.counseling@gmail.com</p>
              </div>
            </div>
          </LegalModal>
        )}

        {activeModal === "tokusho" && (
          <LegalModal
            isOpen
            title={modalTitleMap.tokusho}
            onClose={closeModal}
          >
            <div className="space-y-8 text-stone-600 leading-loose">
              <h2 className="text-2xl font-medium text-stone-900 tracking-wider border-b border-stone-100 pb-6">
                特定商取引法に基づく表記
              </h2>
              <div className="grid grid-cols-[120px_1fr] gap-y-6 text-sm md:text-base">
                <div className="text-stone-400 font-medium">事業者名</div>
                <div>こころの相談室 いしずえ</div>

                <div className="text-stone-400 font-medium">代表者名</div>
                <div>松本 龍児</div>

                <div className="text-stone-400 font-medium">所在地</div>
                <div>
                  大阪府大阪市
                  <br />
                  <span className="text-xs text-stone-400">
                    ※詳細な所在地については、ご請求があった場合に遅滞なく開示いたします。
                  </span>
                </div>

                <div className="text-stone-400 font-medium">連絡先</div>
                <div>
                  ish1zue.counseling@gmail.com
                  <br />
                  <span className="text-xs text-stone-400">
                    ※お問い合わせはメールにてお願いいたします。
                  </span>
                </div>

                <div className="text-stone-400 font-medium">販売価格</div>
                <div className="space-y-2">
                  <p>初回メール相談 無料（1往復）</p>
                  <p>
                    オンラインカウンセリング
                    <br />
                    ・初回体験 30分 5,000円（税込）
                    <br />
                    ・通常 30分 8,000円（税込）
                    <br />
                    ・通常 60分 12,000円（税込）
                  </p>
                  <p>
                    メール相談（通常）
                    <br />
                    ・3往復 3,000円（税込）
                  </p>
                </div>

                <div className="text-stone-400 font-medium">支払方法</div>
                <div>銀行振込</div>

                <div className="text-stone-400 font-medium">支払時期</div>
                <div>予約確定後、指定期日までにお支払いください。</div>

                <div className="text-stone-400 font-medium">提供時期</div>
                <div>入金確認後、予約日時に提供いたします。</div>

                <div className="text-stone-400 font-medium">返品・返金</div>
                <div>下記キャンセルポリシーをご確認ください。</div>
              </div>
            </div>
          </LegalModal>
        )}

        {activeModal === "cancel" && (
          <LegalModal
            isOpen
            title={modalTitleMap.cancel}
            onClose={closeModal}
          >
            <div className="space-y-8 text-stone-600 leading-loose">
              <h2 className="text-2xl font-medium text-stone-900 tracking-wider border-b border-stone-100 pb-6">
                キャンセルポリシー
              </h2>
              <p>ご予約後のキャンセルについては、以下の通りといたします。</p>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-stone-50 pb-2">
                  <span>24時間前までのキャンセル</span>
                  <span className="font-medium text-stone-900">無料</span>
                </li>
                <li className="flex justify-between border-b border-stone-50 pb-2">
                  <span>24時間以内のキャンセル</span>
                  <span className="font-medium text-stone-900">料金の50%</span>
                </li>
                <li className="flex justify-between border-b border-stone-50 pb-2">
                  <span>当日・無断キャンセル</span>
                  <span className="font-medium text-stone-900">料金の100%</span>
                </li>
              </ul>
              <p className="text-sm">
                やむを得ない事情がある場合は個別にご相談ください。返金が発生する場合、振込手数料をご負担いただくことがあります。
              </p>
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 text-sm">
                <p>
                  なお、本サービスは医療行為ではありません。診断・投薬・緊急対応は行っておりません。
                </p>
              </div>
            </div>
          </LegalModal>
        )}

{activeModal === "sent" && (
  <LegalModal isOpen title="送信完了" onClose={closeModal}>
    <div className="text-center space-y-6 py-4">

      {/* アイコン */}
      <div className="w-16 h-16 mx-auto rounded-full bg-stone-100 flex items-center justify-center">
        <CheckCircle2 className="w-8 h-8 text-stone-500" />
      </div>

      {/* メイン */}
      <div className="space-y-3">
        <h3 className="text-xl font-medium text-stone-900">
          ご連絡ありがとうございます
        </h3>

        <p className="text-stone-600 text-sm leading-relaxed">
          内容は問題なく受け付けられました。
        </p>

        <p className="text-stone-500 text-sm leading-relaxed">
          通常24時間以内にご返信いたします。<br />
          （状況により多少前後する場合があります）
        </p>
      </div>

      {/* 安心 */}
      <div className="text-xs text-stone-400 leading-relaxed">
        <p>※無理に継続をおすすめすることはありません</p>
        <p>※1回のみのご相談でも問題ありません</p>
      </div>

      {/* 補足メッセージ */}
      <div className="text-sm text-stone-600 leading-relaxed px-4">
        <p>
          今の状態を言葉にするだけでも、少し整理が進むことがあります。<br />
          ご返信まで、無理に何かを変えようとせずお過ごしください。
        </p>
      </div>

      {/* ボタン */}
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
