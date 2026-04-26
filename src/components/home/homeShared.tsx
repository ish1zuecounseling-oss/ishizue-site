/**
 * homeShared.tsx
 * Home系セクション共通：型・アニメーション・UIパーツ
 */

import { type ReactNode, useState } from "react";
import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

export type ModalType  = "privacy" | "tokusho" | "cancel" | "sent";
export type FormStatus = "idle" | "submitting" | "success" | "error";

export type FeatureItem = { benefit: string; title: string; desc: string; icon: ReactNode };
export type FlowItem    = { step: string; title: string; desc: string; note: string };
export type GuideItem   = { text: string; icon: ReactNode };
export type VoiceItem   = { role: string; before: string; after: string };

/* -------------------------------------------------------------------------- */
/*  Animation                                                                  */
/* -------------------------------------------------------------------------- */

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};
export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
};

/* -------------------------------------------------------------------------- */
/*  UI Components                                                              */
/* -------------------------------------------------------------------------- */

export function SectionLabel({ en, ja, light = false }: { en: string; ja: string; light?: boolean }) {
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

export function BlockQuote({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`border-l-2 pl-4 md:pl-6 py-1 ${light ? "border-stone-600 text-stone-300" : "border-[#8FAF9F] text-stone-700"}`}>
      {children}
    </div>
  );
}

export function CtaButton({
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

export function SafeImg({ src, alt, className, fallbackBg = "bg-stone-200", ...rest }: React.ImgHTMLAttributes<HTMLImageElement> & { fallbackBg?: string }) {
  return (
    <img
      src={src} alt={alt} className={className}
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

export function ExpandableCard({ feeling, detail, tag }: { feeling: string; detail: string; tag: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUp}
      className="rounded-2xl border border-stone-100 bg-stone-50 hover:border-[#8FAF9F]/40 transition-all duration-300 overflow-hidden"
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left px-4 py-3.5 md:p-5 flex items-center justify-between gap-2"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8FAF9F] flex-shrink-0" />
          <p className="text-stone-800 font-medium text-sm leading-snug truncate">{feeling}</p>
        </div>
        <span className={`text-stone-300 text-base flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-4 md:px-5 pb-4 md:pb-5">
          <div className="border-t border-stone-100 pt-3 space-y-2">
            <span className="text-[10px] text-[#8FAF9F] bg-[#8FAF9F]/10 px-2 py-0.5 rounded-full inline-block">{tag}</span>
            <p className="text-stone-500 text-sm leading-[1.85]">{detail}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function ProfileExpand({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="hidden md:block space-y-6">{children}</div>
      <div className="md:hidden space-y-4">
        {open ? (
          <div className="space-y-6">{children}</div>
        ) : (
          <button onClick={() => setOpen(true)} className="text-sm text-[#8FAF9F] underline underline-offset-4 mt-1">
            続きを読む →
          </button>
        )}
      </div>
    </>
  );
}

export function VoiceCard({ v }: { v: VoiceItem }) {
  return (
    <motion.div variants={fadeUp} className="bg-white border border-stone-100 rounded-2xl p-5 space-y-4">
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
  );
}
