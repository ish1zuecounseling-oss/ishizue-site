/**
 * Home.tsx — こころの相談室 いしずえ
 * セクションコンポーネントを並べるオーケストレーター
 *
 * 改修ポイント(2026-05):
 * - SEOメタ強化(title/description/構造化データ)
 * - 受付一時停止ステータスを誠実に表示
 * - BridgeSection 追加(AI/記事/診断ツール/LINEの4導線集約)
 * - フォーム送信ロジック強化(バリデーション/honeypot/二重送信防止)
 * - モーダルコピー改善(受付停止フェーズに対応)
 * - LINE再開通知への誘導
 *
 * 改修ポイント(2026-06):
 * - HeroSection に accepting prop を渡し、停止中CTAの自動切替に対応
 * - 記事数表記を「250本以上」に更新(2箇所)
 *
 * 改修ポイント(2026-06 レイアウト再構成):
 * - FeaturesSection を ApproachSection に統合(セクション数 14→13)
 * - ClosingSection を FAQ後・CurrentStatus直前に移動(締めを最終CVの直前へ)
 * - Approach/Closing/Guide に accepting prop を追加(停止中CTAの自動切替)
 */

import {
  memo, useCallback, useEffect, useRef, useState,
  type FormEvent, type ReactNode,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, X, MessageCircle, Sparkles, BookOpen, ClipboardList, ArrowRight, Info } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

// セクションコンポーネント
import HeroSection       from "../components/home/HeroSection";
import PainPointsSection from "../components/home/PainPointsSection";
import TrustBarSection   from "../components/home/TrustBarSection";
import ProfileSection    from "../components/home/ProfileSection";
import ApproachSection   from "../components/home/ApproachSection";
import VoicesSection     from "../components/home/VoicesSection";
import ClosingSection    from "../components/home/ClosingSection";
import GuideSection      from "../components/home/GuideSection";
import FaqSection        from "../components/home/FaqSection";
import ContactSection    from "../components/home/ContactSection";
import FooterSection     from "../components/home/FooterSection";

const SAGE = "#8FAF9F";
const LINE_URL = "https://lin.ee/6H8Pzo6";

// 受付ステータス制御フラグ:再開時はfalseに変更するだけで全体の表示が切り替わる
const ACCEPTING_NEW_CLIENTS = false;

type ModalType  = "privacy" | "tokusho" | "cancel" | "sent" | "sent-paused";
type FormStatus = "idle" | "submitting" | "success" | "error";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string | undefined;

// GA4 gtag型宣言
declare function gtag(...args: unknown[]): void;

/* -------------------------------------------------------------------------- */
/*  受付停止中ステータスバー                                                   */
/* -------------------------------------------------------------------------- */
function StatusBar() {
  if (ACCEPTING_NEW_CLIENTS) return null;
  return (
    <div className="bg-stone-100 border-b border-stone-200 px-4 py-2 text-center text-xs text-stone-600 leading-relaxed">
      <span className="inline-flex items-center gap-1.5">
        <Info className="w-3 h-3" />
        現在、新規ご相談の受付を一時休止しております。再開のご案内は
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 font-medium text-stone-800 hover:text-stone-900 ml-1 inline-flex items-center gap-1"
          onClick={() => {
            try { gtag("event", "status_bar_line_click"); } catch (_) { /* noop */ }
          }}
        >
          <MessageCircle className="w-3 h-3" style={{ color: "#06C755" }} />
          LINE
        </a>
        で先行してお知らせします。
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Bridge Section — AI/記事/診断ツール/LINEの4導線集約                       */
/* -------------------------------------------------------------------------- */
function BridgeSection() {
  const bridgeItems = [
    {
      icon: Sparkles,
      label: "AIで整理する",
      desc: "今の状態をAIが3点セット(原因/現状/次の一歩)で整理します",
      href: "/ai-assistant",
      cta: "整理してもらう",
      bg: "#2C1F14",
      fg: "#fff",
      accent: "#fbbf24",
    },
    {
      icon: ClipboardList,
      label: "状態をチェック",
      desc: "共感疲労・境界線・インポスター症候群など20以上のセルフ診断",
      href: "/articles?tab=tools",
      cta: "診断ツール一覧",
      bg: "#fff",
      fg: "#2C1F14",
      accent: SAGE,
    },
    {
      icon: BookOpen,
      label: "記事から知る",
      desc: "支援職の消耗を構造から整理した心理記事(250本以上)",
      href: "/articles",
      cta: "記事一覧へ",
      bg: "#fff",
      fg: "#2C1F14",
      accent: SAGE,
    },
    {
      icon: MessageCircle,
      label: "LINEで繋がる",
      desc: "状態別の解説と、ご相談再開のお知らせをLINEで送ります",
      href: LINE_URL,
      cta: "LINEで受け取る",
      bg: "#06C755",
      fg: "#fff",
      accent: "#fff",
      external: true,
    },
  ];

  return (
    <section className="py-12 md:py-16 px-5 md:px-6 bg-stone-50 border-y border-stone-100">
      <div className="max-w-5xl mx-auto">
        <div className="mb-7 text-center md:text-left">
          <p className="text-[10px] tracking-[0.3em] uppercase font-medium mb-2" style={{ color: SAGE }}>
            4 ways to start
          </p>
          <h2 className="text-xl md:text-2xl font-light text-stone-900 leading-relaxed mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            まず、ここから始められます
          </h2>
          <p className="text-xs md:text-sm text-stone-500 leading-relaxed">
            ご相談予約より先に、無料で使える整理のための入口をご用意しています。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {bridgeItems.map((item, i) => {
            const Icon = item.icon;
            const isExternal = item.external;
            const Wrap: typeof Link | "a" = isExternal ? "a" : Link;
            const wrapProps = isExternal
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" as const }
              : { to: item.href };
            return (
              // @ts-expect-error - dynamic component routing
              <Wrap
                key={i}
                {...wrapProps}
                className="group flex flex-col gap-3 p-5 rounded-2xl transition-all hover:shadow-md"
                style={{ background: item.bg, color: item.fg, border: item.bg === "#fff" ? "1px solid rgb(231,229,228)" : "none" }}
                onClick={() => {
                  try { gtag("event", "bridge_click", { destination: item.label }); } catch (_) { /* noop */ }
                }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: item.bg === "#fff" ? `${item.accent}18` : "rgba(255,255,255,0.1)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.accent }} />
                  </div>
                  <span
                    className="text-[10px] tracking-[0.15em] uppercase font-medium px-2 py-0.5 rounded-full"
                    style={{
                      color: item.bg === "#fff" ? item.accent : "rgba(255,255,255,0.8)",
                      background: item.bg === "#fff" ? `${item.accent}15` : "rgba(255,255,255,0.12)",
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <div className="space-y-1.5 flex-1">
                  <p className="text-base font-medium leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    {item.label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ opacity: item.bg === "#fff" ? 0.5 : 0.85 }}>
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium mt-auto pt-2 border-t" style={{ borderColor: item.bg === "#fff" ? "rgb(245,244,243)" : "rgba(255,255,255,0.15)" }}>
                  {item.cta}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Wrap>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  受付状況お知らせセクション                                                  */
/*  ContactSection直前に挿入。受付停止中はLINEへの誘導を強化                    */
/* -------------------------------------------------------------------------- */
function CurrentStatusSection() {
  if (ACCEPTING_NEW_CLIENTS) return null;
  return (
    <section className="py-10 md:py-14 px-5 md:px-6">
      <div className="max-w-2xl mx-auto">
        <div
          className="p-6 md:p-8 rounded-2xl"
          style={{ background: "linear-gradient(135deg, rgba(143,175,159,0.07) 0%, rgba(143,175,159,0.04) 100%)", border: `1px solid ${SAGE}40` }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4" style={{ color: SAGE }} />
            <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: SAGE }}>
              現在の受付状況
            </span>
          </div>
          <h2 className="text-base md:text-lg font-medium text-stone-900 mb-3 leading-relaxed" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            新規ご相談の受付を一時休止しております
          </h2>
          <p className="text-sm text-stone-600 leading-[1.95] mb-4">
            既存のご相談者様へのサポートに集中するため、現在新規ご相談の受付を一時的に休止しております。
            再開時期につきましては、LINEに登録いただいた方へ先行してお知らせいたします。
          </p>
          <p className="text-sm text-stone-600 leading-[1.95] mb-5">
            受付再開までの間も、心理記事(250本以上)・無料セルフチェック・AI構造整理アシスタント・LINEでの状態タイプ別解説は引き続きご利用いただけます。
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                try { gtag("event", "status_section_line_click"); } catch (_) { /* noop */ }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-bold text-white"
              style={{ background: "#06C755" }}
            >
              <MessageCircle className="w-4 h-4" />
              LINEで再開通知を受け取る
            </a>
            <Link
              to="/ai-assistant"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium border border-stone-300 text-stone-700 hover:bg-stone-50 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              AIで整理してみる
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Legal/Sent Modal                                                          */
/* -------------------------------------------------------------------------- */
function LegalModal({ isOpen, title, onClose, children }: {
  isOpen: boolean; title: string; onClose: () => void; children: ReactNode;
}) {
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
/*  Home コンポーネント                                                        */
/* -------------------------------------------------------------------------- */
function Home() {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [formStatus,  setFormStatus]  = useState<FormStatus>("idle");
  const [formError,   setFormError]   = useState<string>("");
  const heroCTARef = useRef<HTMLDivElement>(null);
  const submitLockRef = useRef(false); // 二重送信防止用

  const openModal  = useCallback((m: ModalType) => setActiveModal(m), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [activeModal, closeModal]);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 二重送信防止
    if (submitLockRef.current) return;
    submitLockRef.current = true;

    setFormStatus("submitting");
    setFormError("");

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setFormStatus("error");
      setFormError("フォーム設定が未完了です。お手数ですが、LINEまたはメール(ish1zue.counseling@gmail.com)に直接ご連絡ください。");
      submitLockRef.current = false;
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);
    const getVal = (k: string) => String(fd.get(k) ?? "").trim();

    // honeypot:botトラップ(visibleでないフィールド)が埋まっていたら sent と偽装
    const honeypot = getVal("website");
    if (honeypot) {
      try { gtag("event", "form_honeypot_triggered"); } catch (_) { /* noop */ }
      setFormStatus("success");
      submitLockRef.current = false;
      // 偽装の sent モーダルを出さず、UIだけ完了状態に
      return;
    }

    // クライアントサイド・バリデーション
    const name    = getVal("name");
    const email   = getVal("email");
    const message = getVal("message");

    if (!name || !email || !message) {
      setFormStatus("error");
      setFormError("お名前・メールアドレス・ご相談内容は必須です。ご入力をご確認ください。");
      submitLockRef.current = false;
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormStatus("error");
      setFormError("メールアドレスの形式をご確認ください。");
      submitLockRef.current = false;
      return;
    }
    if (message.length < 10) {
      setFormStatus("error");
      setFormError("ご相談内容は10文字以上で入力してください。詳細でなくて構いません。");
      submitLockRef.current = false;
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        {
          user_name: name,
          user_email: email,
          job: getVal("job"),
          message,
          accepting_new_clients: ACCEPTING_NEW_CLIENTS ? "受付中" : "受付一時休止中",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      form.reset();
      setFormStatus("success");

      try { gtag("event", "form_submit_success"); } catch (_) { /* noop */ }

      // 受付停止中とそれ以外でモーダル分岐
      openModal(ACCEPTING_NEW_CLIENTS ? "sent" : "sent-paused");
    } catch (err) {
      console.error(err);
      setFormStatus("error");
      setFormError("送信に失敗しました。お手数ですが、時間をおいて再度お試しいただくか、LINEまたはメール(ish1zue.counseling@gmail.com)に直接ご連絡ください。");
      try { gtag("event", "form_submit_error"); } catch (_) { /* noop */ }
    } finally {
      submitLockRef.current = false;
    }
  }, [openModal]);

  const modalTitleMap: Record<Exclude<ModalType, "sent" | "sent-paused">, string> = {
    privacy: "プライバシーポリシー",
    tokusho: "特定商取引法に基づく表記",
    cancel:  "キャンセルポリシー",
  };

  // 構造化データ(Organization + LocalBusiness)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    name: "こころの相談室 いしずえ",
    alternateName: "いしずえカウンセリング",
    url: "https://www.ishizue-counseling.jp/",
    description: "支援職(看護師・介護士・福祉職・教員・心理職)の燃え尽き・共感疲労を構造から整理するオンラインカウンセリング。公認心理師・松本龍児。",
    founder: {
      "@type": "Person",
      name: "松本 龍児",
      jobTitle: "公認心理師",
    },
    areaServed: "JP",
    serviceType: ["カウンセリング", "オンラインカウンセリング", "支援職メンタルケア"],
    knowsAbout: ["共感疲労", "バーンアウト", "感情労働", "境界線", "他人軸", "インポスター症候群"],
  };

  return (
    <>
      <Helmet>
        <title>支援職カウンセリング｜共感疲労・バーンアウトを構造から整理｜公認心理師 こころの相談室 いしずえ</title>
        <meta name="description" content="看護師・介護士・福祉職・教員のための心理カウンセリング。公認心理師・臨床経験15年が、燃え尽き・共感疲労・感情労働による消耗を「構造整理型カウンセリング」で整理。オンライン全国対応。" />
        <meta name="keywords" content="支援職 カウンセリング, 看護師 メンタル, 介護士 燃え尽き, 共感疲労, バーンアウト, 公認心理師, オンラインカウンセリング, 構造整理" />
        <link rel="canonical" href="https://www.ishizue-counseling.jp/" />

        {/* OGP */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="支援職カウンセリング｜共感疲労・バーンアウトを構造から整理｜こころの相談室 いしずえ" />
        <meta property="og:description" content="看護師・介護士・福祉職・教員のための心理カウンセリング。公認心理師が、燃え尽き・共感疲労を構造から整理します。" />
        <meta property="og:url" content="https://www.ishizue-counseling.jp/" />
        <meta property="og:site_name" content="こころの相談室 いしずえ" />
        <meta property="og:image" content="https://www.ishizue-counseling.jp/ogp.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="支援職カウンセリング｜共感疲労・バーンアウトを構造から整理" />
        <meta name="twitter:description" content="公認心理師が、支援職の消耗を構造から整理します。" />

        {/* 構造化データ */}
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      <a href="#main-content" className="sr-only focus:not-sr-only px-4 py-2 bg-white text-blue-600">メインコンテンツへスキップ</a>

      {/* 受付停止ステータスバー(常時表示) */}
      <StatusBar />

      <main id="main-content">
        {/* ★ 2026-06: accepting prop追加 — 停止中はHeroのCTAがLINE/チェックに自動切替 */}
        <HeroSection       heroCTARef={heroCTARef} accepting={ACCEPTING_NEW_CLIENTS} />
        <PainPointsSection />
        <TrustBarSection   />

        {/* ★ Bridge Section 新規追加(PainPoints後・Profile前):AI/記事/診断/LINEへの導線 */}
        <BridgeSection />

        <ProfileSection    />
        {/* ★ 2026-06: 旧Featuresを統合したApproach。停止中はCTA自動切替 */}
        <ApproachSection   accepting={ACCEPTING_NEW_CLIENTS} />
        <VoicesSection     />
        <GuideSection      accepting={ACCEPTING_NEW_CLIENTS} />
        <FaqSection        />

        {/* ★ 2026-06: Closingを最終CV直前に移動。停止中はCTA自動切替 */}
        <ClosingSection    accepting={ACCEPTING_NEW_CLIENTS} />

        {/* ★ 現在の受付状況セクション(ContactSection直前) */}
        <CurrentStatusSection />

        {/* ★ 2026-06: フォーム接続。停止中はContactSide内でLINE告知に自動切替 */}
        <ContactSection
          accepting={ACCEPTING_NEW_CLIENTS}
          onSubmit={handleSubmit}
          formStatus={formStatus}
          formError={formError}
        />
        <FooterSection     openModal={openModal} modalTitleMap={modalTitleMap} />
      </main>

      <AnimatePresence>
        {activeModal === "privacy" && (
          <LegalModal isOpen title={modalTitleMap.privacy} onClose={closeModal}>
            <div className="space-y-6 text-stone-600 leading-loose text-sm">
              <h2 className="text-lg font-medium text-stone-900 border-b border-stone-100 pb-5" style={{ fontFamily: "'Noto Serif JP', serif" }}>プライバシーポリシー</h2>
              {[
                {
                  title: "1. 取得する情報",
                  body: "氏名・メールアドレス・ご相談内容(セッションの記録やメモを含みます)・予約情報・決済情報。お問い合わせフォームからお預かりした内容は、ご返信およびサービス提供以外の目的では使用いたしません。",
                },
                {
                  title: "2. 利用目的",
                  body: "カウンセリングサービスの提供および予約管理のため／サービス向上・品質改善のための分析のため／法令に基づく対応や緊急時のご連絡のため。",
                },
                {
                  title: "3. 第三者提供(秘密保持の例外)",
                  body: "法令に基づく場合を除き、ご本人の同意なく第三者へ提供することはありません。ただし、以下の場合は例外として関係機関(警察・児童相談所・医療機関等)へ情報提供を行うことがあります。①ご本人や第三者の生命・身体に重大な危険が及ぶ恐れがある場合(自傷他害の恐れなど) ②児童虐待・高齢者虐待・DVなどが疑われ、法令に基づく通告義務が生じた場合。",
                },
                {
                  title: "4. 情報管理およびAIツールの利用について",
                  body: "取得した情報は厳重に管理し、不正アクセス・漏えい・改ざんの防止に努めます。お預かりした個人情報やご相談内容を、ChatGPT等の外部の生成AIツールに入力することは一切ありません。当サイトの「AI構造整理アシスタント」は外部のLLM API送信を行わず、すべてブラウザ内で処理されます。",
                },
                {
                  title: "5. オンラインツールの利用",
                  body: "オンラインセッションにはGoogle Meetを使用します。セッションの録画および文字起こし機能を使用する場合があります(記録の整理・振り返り目的)。ご希望により使用しないことも可能です。各ツールのデータ取り扱いは提供元の規定に準じます。",
                },
                {
                  title: "6. アクセス解析ツールについて",
                  body: "サイト改善のため、Google Analytics 4 を使用しています。収集される情報は匿名化されており、個人を特定するものではありません。ブラウザの設定によりCookieを無効化することで、収集を拒否することが可能です。",
                },
                {
                  title: "7. 開示・訂正・削除",
                  body: "ご本人からの情報の開示・訂正・削除のご請求があった場合、ご本人であることを確認の上、法令に従い速やかに対応いたします。",
                },
                {
                  title: "8. 緊急時・受付対象外について",
                  body: "本サービスは医療機関ではありません。希死念慮が強い・急性の精神症状がある・今すぐ自傷他害の危険がある場合は、本サービスよりも先に医療機関または緊急相談窓口(よりそいホットライン:0120-279-338)にご連絡ください。",
                },
              ].map(({ title, body }) => (
                <section key={title} className="space-y-1">
                  <h3 className="text-sm font-medium text-stone-800">{title}</h3>
                  <p className="text-stone-500">{body}</p>
                </section>
              ))}
              <div className="pt-4 border-t border-stone-100 text-xs space-y-1 text-stone-400">
                <p>事業者名:こころの相談室 いしずえ ／ 代表:松本 龍児(公認心理師)</p>
                <p>お問い合わせ:ish1zue.counseling@gmail.com</p>
                <p>最終改定日:2026年5月16日</p>
              </div>
            </div>
          </LegalModal>
        )}

        {activeModal === "tokusho" && (
          <LegalModal isOpen title={modalTitleMap.tokusho} onClose={closeModal}>
            <div className="space-y-6 text-stone-600 leading-loose text-sm">
              <h2 className="text-lg font-medium text-stone-900 border-b border-stone-100 pb-5" style={{ fontFamily: "'Noto Serif JP', serif" }}>特定商取引法に基づく表記</h2>

              {/* 現在の受付状況を冒頭に明示 */}
              {!ACCEPTING_NEW_CLIENTS && (
                <div className="p-4 rounded-xl" style={{ background: `${SAGE}0d`, border: `1px solid ${SAGE}40` }}>
                  <p className="text-xs font-medium text-stone-700 mb-1">現在の受付状況</p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    新規ご相談の受付を一時休止しております。再開時のご案内はLINEで先行してお知らせいたします。
                    既存のご相談者様のサービスは継続提供しております。
                  </p>
                </div>
              )}

              {[
                { label: "事業者名",   value: "こころの相談室 いしずえ" },
                { label: "代表者名",   value: "松本 龍児(公認心理師)" },
                { label: "所在地",     value: "大阪府大阪市(詳細はご請求時に開示)" },
                { label: "連絡先",     value: "ish1zue.counseling@gmail.com" },
                {
                  label: "販売価格(受付再開時)",
                  value: "初回メール相談 無料 ／ オンライン面談:体験30分 5,000円・30分 8,000円・60分 12,000円 ／ メールカウンセリング:2週間 8,000円・4週間 15,000円(全て税込)",
                },
                { label: "支払方法",  value: "銀行振込" },
                { label: "支払時期",  value: "予約確定後、指定期日までにお支払いください。" },
                { label: "提供時期",  value: "入金確認後、予約日時にサービスを提供いたします。" },
                { label: "返金について", value: "サービスの性質上、提供開始後の返金は原則承っておりません。キャンセルポリシーをご確認ください。" },
              ].map(({ label, value }) => (
                <div key={label} className="space-y-0.5">
                  <p className="text-stone-400 text-xs font-medium">{label}</p>
                  <p className="text-stone-600">{value}</p>
                </div>
              ))}
            </div>
          </LegalModal>
        )}

        {activeModal === "cancel" && (
          <LegalModal isOpen title={modalTitleMap.cancel} onClose={closeModal}>
            <div className="space-y-6 text-stone-600 leading-loose text-sm">
              <h2 className="text-lg font-medium text-stone-900 border-b border-stone-100 pb-5" style={{ fontFamily: "'Noto Serif JP', serif" }}>キャンセルポリシー</h2>
              <ul className="divide-y divide-stone-100">
                {[
                  { timing: "24時間前までのキャンセル", fee: "無料" },
                  { timing: "24時間以内のキャンセル",   fee: "料金の 50%" },
                  { timing: "当日・無断キャンセル",     fee: "料金の 100%" },
                ].map(({ timing, fee }) => (
                  <li key={timing} className="flex justify-between py-3 gap-4">
                    <span className="text-stone-500">{timing}</span>
                    <span className="font-medium text-stone-800 flex-shrink-0">{fee}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-500">やむを得ない事情がある場合は個別にご相談ください。誠実にお話いただければ柔軟に対応いたします。</p>
              <div className="text-xs text-stone-400 space-y-1 pt-3 border-t border-stone-100">
                <p>・日程変更は前日24時間前まで1回無料で承ります。</p>
                <p>・通信トラブル等の不測の事態は個別対応いたします。</p>
                <p>・メールカウンセリングは返信開始後のキャンセルは使用回数分を申し受けます。</p>
              </div>
            </div>
          </LegalModal>
        )}

        {/* 通常の送信完了モーダル */}
        {activeModal === "sent" && (
          <LegalModal isOpen title="送信完了" onClose={closeModal}>
            <div className="text-center space-y-6 py-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#8FAF9F]/10 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" style={{ color: SAGE }} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>受け取りました。</h3>
                <p className="text-stone-600 text-sm leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  話してくださって、ありがとうございます。<br />通常 24時間以内にご返信いたします。
                </p>
              </div>
              <div className="bg-stone-50 rounded-2xl p-5 text-sm text-stone-600 leading-[2] text-left space-y-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                <p>返信が届くまでの間、何かを急いで変える必要はありません。</p>
                <p>今の状態のまま、ここまで来てくださったこと自体が、すでに一歩です。</p>
              </div>
              <button onClick={closeModal} className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2C1F14] text-stone-50 text-sm hover:bg-[#3D2B1F] transition-all rounded-full" type="button">
                閉じる
              </button>
            </div>
          </LegalModal>
        )}

        {/* 受付停止中の送信完了モーダル */}
        {activeModal === "sent-paused" && (
          <LegalModal isOpen title="送信完了" onClose={closeModal}>
            <div className="text-center space-y-6 py-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#8FAF9F]/10 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" style={{ color: SAGE }} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-stone-900" style={{ fontFamily: "'Noto Serif JP', serif" }}>受け取りました。</h3>
                <p className="text-stone-600 text-sm leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  メッセージをお預かりしました。<br />
                  内容を拝見し、状況に応じて個別にご返信いたします。
                </p>
              </div>

              {/* 受付停止状況の説明 */}
              <div className="bg-stone-50 rounded-2xl p-5 text-sm text-stone-600 leading-[2] text-left space-y-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                <p>
                  現在、新規ご相談の受付を一時休止しております。<br />
                  返信にお時間をいただく場合があります。お急ぎの場合は、再開待ちの方向けに状態別の解説を送っているLINEもご活用ください。
                </p>
              </div>

              {/* LINE誘導(受付停止中の主要導線) */}
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  try { gtag("event", "sent_modal_line_click"); } catch (_) { /* noop */ }
                }}
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full text-sm font-bold text-white"
                style={{ background: "#06C755" }}
              >
                <MessageCircle className="w-4 h-4" />
                LINEで再開通知を受け取る
              </a>

              <p className="text-[11px] text-stone-400">読むだけOK ／ 勧誘なし ／ いつでも解除OK</p>

              <button onClick={closeModal} className="block mx-auto text-xs text-stone-400 hover:text-stone-600 underline underline-offset-2 transition-colors" type="button">
                閉じる
              </button>
            </div>
          </LegalModal>
        )}
      </AnimatePresence>

      {/* handleSubmit/formStatus/formError は ContactSection にprops接続済み。
          停止中(accepting=false)はフォーム非表示・LINE告知のみ。
          再開時は ACCEPTING_NEW_CLIENTS=true にするだけでフォームが出現し送信ロジックに繋がる。 */}
      {formStatus === "error" && formError && (
        <div role="alert" className="sr-only" aria-live="assertive">{formError}</div>
      )}
    </>
  );
}

export default memo(Home);
