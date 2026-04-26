/**
 * HeroSection.tsx — ヒーロー + スティッキーナビ
 */
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeUp, fadeIn, stagger, SafeImg } from "./homeShared";

export default function HeroSection({ heroCTARef }: { heroCTARef: React.RefObject<HTMLDivElement> }) {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const el = heroCTARef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setShowSticky(!e.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [heroCTARef]);

  return (
    <>
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: -64, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -64, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm"
          >
            <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
              <Link to="/" aria-label="トップページへ" style={{ WebkitTapHighlightColor: "transparent" }}>
                <p className="text-stone-700 text-sm font-medium hidden sm:block flex-shrink-0" style={{ fontFamily: "'Noto Serif JP', serif" }}>こころの相談室 いしずえ</p>
                <img src="/logo.png" alt="こころの相談室 いしずえ" className="flex-shrink-0 sm:hidden" style={{ height: "26px", width: "auto", pointerEvents: "none" }} />
              </Link>
              <nav className="flex items-center gap-1 text-xs text-stone-500">
                {[
                  { href: "#voices",  label: "声",     labelMd: "相談された方の声" },
                  { href: "#guide",   label: "料金",   labelMd: "料金・流れ" },
                  { href: "#contact", label: "相談する", labelMd: "相談する" },
                ].map(({ href, label, labelMd }) => (
                  <a key={href} href={href} className="px-2.5 py-1.5 rounded-lg hover:bg-stone-100 hover:text-stone-800 transition-colors whitespace-nowrap">
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

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A110A]">
        <SafeImg src="/hero.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-25" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950/90" />

        <div className="relative max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-36 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:gap-14 lg:gap-20">
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
                  支援職の「消耗」を、<br /><span className="text-stone-200">構造から整理する。</span>
                </h1>
                <p className="text-[#8FAF9F] text-xs md:text-sm tracking-wide">
                  看護師・介護士・福祉職・教員など対人援助職の方へ｜公認心理師によるオンラインカウンセリング
                </p>
                <p className="hidden md:block text-stone-300 text-sm md:text-base leading-[2] max-w-lg">
                  「まだ大丈夫」と思いながら、頭が休まらない日が続いていませんか？<br />
                  頑張ってきたからこそ、今の消耗は「あなたのせい」ではありません。<br />
                  <span className="text-stone-200">ここは、支援する人が自分を後回しにしなくていい場所です。</span>
                </p>
                <p className="hidden md:block text-stone-400 text-xs md:text-sm italic leading-relaxed" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  「整理してみたら、役割が3つ重なっていた。私が弱かったんじゃなかった」— 介護福祉士・50代
                </p>
                <p className="md:hidden text-stone-300 text-sm leading-[1.9]">
                  感情労働の疲れは、休んだだけでは回復しません。<br />
                  <span className="text-stone-200">「なぜそうなるのか」を、一緒に整理します。</span>
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="hidden md:flex flex-col gap-2 text-xs text-stone-400">
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

            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:flex flex-col items-center gap-4 flex-shrink-0"
            >
              <div className="w-52 h-52 lg:w-60 lg:h-60 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl ring-1 ring-white/10">
                <SafeImg src="/profile.jpg" fetchPriority="high" alt="松本 龍児 — 公認心理師" className="w-full h-full object-cover object-top" fallbackBg="bg-stone-700" />
              </div>
              <div className="text-center space-y-1">
                <p className="text-white text-sm font-medium tracking-wider" style={{ fontFamily: "'Noto Serif JP', serif" }}>松本 龍児</p>
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
    </>
  );
}
