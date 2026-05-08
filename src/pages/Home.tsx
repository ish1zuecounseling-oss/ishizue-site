/**
 * Home.tsx — こころの相談室 いしずえ
 * セクションコンポーネントを並べるだけの薄いオーケストレーター
 */

import {
  memo, useCallback, useEffect, useRef, useState,
  type FormEvent, type ReactNode,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";

// セクションコンポーネント
import HeroSection       from "../components/home/HeroSection";
import PainPointsSection from "../components/home/PainPointsSection";
import TrustBarSection   from "../components/home/TrustBarSection";
import ProfileSection    from "../components/home/ProfileSection";
import FeaturesSection   from "../components/home/FeaturesSection";
import ApproachSection   from "../components/home/ApproachSection";
import VoicesSection     from "../components/home/VoicesSection";
import ClosingSection    from "../components/home/ClosingSection";
import GuideSection      from "../components/home/GuideSection";
import FaqSection        from "../components/home/FaqSection";
import ContactSection    from "../components/home/ContactSection";
import FooterSection     from "../components/home/FooterSection";

type ModalType  = "privacy" | "tokusho" | "cancel" | "sent";
type FormStatus = "idle" | "submitting" | "success" | "error";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string | undefined;

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

function Home() {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [formStatus,  setFormStatus]  = useState<FormStatus>("idle");
  const [formError,   setFormError]   = useState<string>("");
  const heroCTARef = useRef<HTMLDivElement>(null);

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
    setFormStatus("submitting");
    setFormError("");
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setFormStatus("error");
      setFormError("フォーム設定が未完了です。管理者にお問い合わせください。");
      return;
    }
    const form = e.currentTarget;
    const fd = new FormData(form);
    const getVal = (k: string) => String(fd.get(k) ?? "").trim();
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        { user_name: getVal("name"), user_email: getVal("email"), job: getVal("job"), message: getVal("message") },
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

  const modalTitleMap: Record<Exclude<ModalType, "sent">, string> = {
    privacy: "プライバシーポリシー",
    tokusho: "特定商取引法に基づく表記",
    cancel:  "キャンセルポリシー",
  };

  return (
    <>
      <Helmet>
        <title>支援職のためのカウンセリング｜燃え尽き・共感疲労を構造から整理｜こころの相談室 いしずえ</title>
        <meta name="description" content="看護師・介護士・福祉職・教員など対人援助職の方向け。公認心理師が、燃え尽き・共感疲労・感情労働による消耗を構造から整理します。オンライン対応。" />
        <link rel="canonical" href="https://www.ishizue-counseling.jp/" />
      </Helmet>

      <a href="#main-content" className="sr-only focus:not-sr-only px-4 py-2 bg-white text-blue-600">メインコンテンツへスキップ</a>

      <main id="main-content">
        <HeroSection       heroCTARef={heroCTARef} />
        <PainPointsSection />
        <TrustBarSection   />
        <ProfileSection    />
        <FeaturesSection   />
        <ApproachSection   />
        <VoicesSection     />
        <ClosingSection    />
        <GuideSection      />
        <FaqSection        />
        <ContactSection    />
        <FooterSection     openModal={openModal} modalTitleMap={modalTitleMap} />
      </main>

      <AnimatePresence>
        {activeModal === "privacy" && (
          <LegalModal isOpen title={modalTitleMap.privacy} onClose={closeModal}>
            <div className="space-y-6 text-stone-600 leading-loose text-sm">
              <h2 className="text-lg font-medium text-stone-900 border-b border-stone-100 pb-5" style={{ fontFamily: "'Noto Serif JP', serif" }}>プライバシーポリシー</h2>
              {[
                { title: "1. 取得する情報",
                  body: "氏名・メールアドレス・ご相談内容（セッションの記録やメモを含みます）・予約情報・決済情報" },
                { title: "2. 利用目的",
                  body: "カウンセリングサービスの提供および予約管理のため／サービス向上・品質改善のための分析のため／法令に基づく対応や緊急時のご連絡のため" },
                { title: "3. 第三者提供（秘密保持の例外）",
                  body: "法令に基づく場合を除き、ご本人の同意なく第三者へ提供することはありません。ただし、以下の場合は例外として関係機関（警察・児童相談所・医療機関等）へ情報提供を行うことがあります。①ご本人や第三者の生命・身体に重大な危険が及ぶ恐れがある場合（自傷他害の恐れなど）②児童虐待・高齢者虐待・DVなどが疑われ、法令に基づく通告義務が生じた場合" },
                { title: "4. 情報管理およびAIツールの利用について",
                  body: "取得した情報は厳重に管理し、不正アクセス・漏えい・改ざんの防止に努めます。お預かりした個人情報やご相談内容を、ChatGPT等の外部の生成AIツールに入力することは一切ありません。AIツールを利用する場合は、個人情報を含めない業務効率化の範囲に限定します。" },
                { title: "5. オンラインツールの利用",
                  body: "オンラインセッションにはGoogle Meetを使用します。セッションの録画および文字起こし機能を使用する場合があります（記録の整理・振り返り目的）。ご希望により使用しないことも可能です。各ツールのデータ取り扱いは提供元の規定に準じます。" },
                { title: "6. 開示・訂正・削除",
                  body: "ご本人からの情報の開示・訂正・削除のご請求があった場合、ご本人であることを確認の上、法令に従い速やかに対応いたします。" },
                { title: "7. 緊急時・受付対象外について",
                  body: "本サービスは医療機関ではありません。希死念慮が強い・急性の精神症状がある・今すぐ自傷他害の危険がある場合は、本サービスよりも先に医療機関または緊急相談窓口（よりそいホットライン：0120-279-338）にご連絡ください。" },
              ].map(({ title, body }) => (
                <section key={title} className="space-y-1">
                  <h3 className="text-sm font-medium text-stone-800">{title}</h3>
                  <p className="text-stone-500">{body}</p>
                </section>
              ))}
              <div className="pt-4 border-t border-stone-100 text-xs space-y-1 text-stone-400">
                <p>事業者名：こころの相談室 いしずえ ／ 代表：松本 龍児</p>
                <p>お問い合わせ：ish1zue.counseling@gmail.com</p>
              </div>
            </div>
          </LegalModal>
        )}
        {activeModal === "tokusho" && (
          <LegalModal isOpen title={modalTitleMap.tokusho} onClose={closeModal}>
            <div className="space-y-6 text-stone-600 leading-loose text-sm">
              <h2 className="text-lg font-medium text-stone-900 border-b border-stone-100 pb-5" style={{ fontFamily: "'Noto Serif JP', serif" }}>特定商取引法に基づく表記</h2>
              {[
                { label: "事業者名",   value: "こころの相談室 いしずえ" },
                { label: "代表者名",   value: "松本 龍児" },
                { label: "所在地",    value: "大阪府大阪市（詳細はご請求時に開示）" },
                { label: "連絡先",    value: "ish1zue.counseling@gmail.com" },
                { label: "販売価格",  value: "現在、新規受付を一時停止しております。再開時の料金：初回メール相談 無料 ／ オンライン面談：体験30分 5,000円・30分 8,000円・60分 12,000円 ／ メールカウンセリング：2週間 8,000円・4週間 15,000円（全て税込）" },
                { label: "支払方法",  value: "銀行振込" },
                { label: "支払時期",  value: "予約確定後、指定期日までにお支払いください。" },
                { label: "提供時期",  value: "入金確認後、予約日時に提供いたします。" },
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
              <p className="text-stone-500">やむを得ない事情がある場合は個別にご相談ください。</p>
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
      </AnimatePresence>
    </>
  );
}

export default memo(Home);
