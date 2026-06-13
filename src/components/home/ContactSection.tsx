/**
 * ContactSection.tsx — お問い合わせ
 * 改修(2026-06):
 * - accepting prop対応: 再開中はメールフォーム表示 / 停止中はLINE告知
 * - フォームはHome.tsxのhandleSubmit/formStatus/formErrorにpropsで接続
 *   (Home側の honeypot=name="website" / 必須=name,email,message / 任意=job に対応)
 * - LINE URL統一(lin.ee/6H8Pzo6) + contact_line_click 計測
 */
import { motion } from "motion/react";
import { type FormEvent } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { fadeUp } from "./homeShared";

const LINE_URL = "https://lin.ee/6H8Pzo6";
declare function gtag(...args: unknown[]): void;

type FormStatus = "idle" | "submitting" | "success" | "error";

type Props = {
  accepting?: boolean;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  formStatus?: FormStatus;
  formError?: string;
};

export default function ContactSection({
  accepting = false,
  onSubmit,
  formStatus = "idle",
  formError = "",
}: Props) {
  return (
    <section id="contact" className="py-16 md:py-24 px-5 md:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">

          {/* 見出し */}
          <div className="space-y-2 text-center">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8FAF9F] font-medium">Contact</span>
            <h2 className="text-xl md:text-2xl font-light text-stone-900 tracking-wide" style={{ fontFamily: "'Noto Serif JP', Georgia, serif" }}>
              {accepting ? "まずは、話してみる" : "新規受付の一時停止について"}
            </h2>
          </div>

          {accepting ? (
            /* ============ 受付中: メールフォーム ============ */
            <>
              <p className="text-stone-500 text-sm leading-[2] text-center">
                うまく言葉にできなくても大丈夫です。今の状態を、そのまま送ってください。<br className="hidden md:block" />
                初回のメール相談は無料・24時間以内にご返信します。
              </p>

              <form onSubmit={onSubmit} className="space-y-5 text-left" noValidate>
                {/* honeypot: 人間には見えない。botが埋めると送信を無効化(Home側で処理) */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="website">Webサイト(入力不要)</label>
                  <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-stone-600">お名前 <span className="text-[#8FAF9F]">必須</span></label>
                  <input
                    type="text" id="name" name="name" required autoComplete="name"
                    placeholder="ニックネームでも構いません"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-800 placeholder-stone-300 bg-white focus:outline-none focus:border-[#8FAF9F] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-stone-600">メールアドレス <span className="text-[#8FAF9F]">必須</span></label>
                  <input
                    type="email" id="email" name="email" required autoComplete="email"
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-800 placeholder-stone-300 bg-white focus:outline-none focus:border-[#8FAF9F] transition-colors"
                  />
                  <p className="text-[11px] text-stone-400">このアドレスにご返信します。受信できるかご確認ください。</p>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="job" className="text-xs font-medium text-stone-600">ご職種 <span className="text-stone-300">任意</span></label>
                  <input
                    type="text" id="job" name="job" autoComplete="off"
                    placeholder="例:看護師／介護福祉士／保育士／教員 など"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-800 placeholder-stone-300 bg-white focus:outline-none focus:border-[#8FAF9F] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-stone-600">ご相談内容 <span className="text-[#8FAF9F]">必須</span></label>
                  <textarea
                    id="message" name="message" required rows={5}
                    placeholder="今の状態を、書ける範囲で。まとまっていなくて大丈夫です。"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-800 placeholder-stone-300 bg-white focus:outline-none focus:border-[#8FAF9F] transition-colors resize-y leading-relaxed"
                  />
                </div>

                {/* エラー表示 */}
                {formStatus === "error" && formError && (
                  <div className="flex items-start gap-2 p-3.5 rounded-xl bg-red-50 border border-red-100 text-red-700 text-xs leading-relaxed" role="alert">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{formError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#2C1F14] text-stone-50 text-sm font-medium tracking-[0.06em] hover:bg-[#3D2B1F] transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? (
                    <><Loader2 className="w-4 h-4 animate-spin" />送信しています…</>
                  ) : (
                    <>送信する（初回相談・無料）</>
                  )}
                </button>

                <p className="text-[11px] text-stone-400 text-center leading-relaxed">
                  勧誘は一切ありません ／ 1回のみのご相談でも大丈夫です<br />
                  送信内容は返信・サービス提供以外には使用しません
                </p>
              </form>

              {/* 副導線: LINE */}
              <div className="pt-4 border-t border-stone-100 text-center space-y-2">
                <p className="text-stone-400 text-xs">メールより気軽に、まず読むだけから始めたい方は</p>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { try { gtag("event", "contact_line_click"); } catch (_) { /* noop */ } }}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90"
                  style={{ background: "#06C755" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
                  </svg>
                  LINEでつながる
                </a>
              </div>
            </>
          ) : (
            /* ============ 停止中: 告知 + LINE ============ */
            <div className="space-y-8">
              <div className="p-8 rounded-2xl border border-stone-200 bg-stone-50 space-y-4 text-left">
                <p className="text-stone-700 text-sm leading-[2]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  現在、サービス内容の見直し・準備期間につき新規受付を一時停止しております。
                </p>
                <p className="text-stone-500 text-sm leading-[2]">
                  再開まで、記事・診断ツールはご利用いただけます。
                </p>
                <p className="text-stone-400 text-xs leading-relaxed border-t border-stone-200 pt-4">
                  再開時期は改めてこちらでお知らせします。
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#06C755]/20 bg-[#06C755]/[0.04] space-y-4 text-left">
                <div className="space-y-1">
                  <p className="text-stone-800 text-sm font-medium" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    新規受付停止中でも、LINEでつながれます
                  </p>
                  <p className="text-stone-500 text-sm leading-[1.9]">
                    再開のお知らせやご案内はLINEから受け取れます。<br />
                    「まだ申し込むほどではないかも」という段階でも大丈夫です。
                  </p>
                </div>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { try { gtag("event", "contact_line_click"); } catch (_) { /* noop */ } }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-sm font-medium transition-opacity hover:opacity-90"
                  style={{ background: "#06C755" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 5.92 2 10.74c0 3.22 1.97 6.04 4.93 7.72L6 21l3.38-1.77c.84.23 1.73.35 2.62.35 5.52 0 10-3.92 10-8.84C22 5.92 17.52 2 12 2z"/>
                  </svg>
                  LINEでつながる
                </a>
                <p className="text-stone-400 text-xs text-center">登録のみでもOK ／ 無理なご案内はありません</p>
              </div>

              <div className="text-center">
                <a href="/articles" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-200 text-stone-600 text-sm hover:bg-stone-50 transition-colors">
                  記事・診断ツールを見る →
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
