/**
 * こころの相談室 いしずえ - ホームページコンポーネント
 */

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Monitor, CheckCircle2, Clock, Mail, X } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Home: React.FC = React.memo(() => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setActiveModal(null);
    }
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (activeModal && modalRef.current) {
      modalRef.current.focus();
    }
  }, [activeModal]);

  return (
    <>
      {/* スキップリンク */}
      <a href="#main-content" className="sr-only focus:not-sr-only px-4 py-2 bg-white text-blue-600">
        メインコンテンツへスキップ
      </a>

      {/* メインコンテンツ */}
      <main id="main-content">
        {/* HERO */}
        <section className="relative pt-40 pb-32 px-6 min-h-[90vh] flex items-center bg-stone-50">
          <img
            src="/hero.jpg"
            alt="カウンセリングをイメージした静かな空間"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920} height={1280}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-800/15 to-stone-900/55"></div>
          <div className="max-w-4xl mx-auto text-center relative">
            <motion.div>
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/40 rounded-full mb-8 bg-white/20 backdrop-blur-md shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C9A8A]"></span>
                  <span className="text-[10px] md:text-xs tracking-[0.25em] text-white/90 uppercase font-medium">
                    公認心理師による支援者支援
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-medium tracking-[0.08em] mb-4 text-white leading-snug drop-shadow-md">
                  支援職のためのカウンセリング<br />
                  こころの相談室 いしずえ
                </h1>
                <p className="text-white/80 tracking-[0.2em] md:tracking-[0.35em] mb-12 italic font-light drop-shadow">
                  ― 支援する人の、土台を整える ―
                </p>
              </div>
              <div className="max-w-2xl mx-auto space-y-5 text-left text-stone-800 leading-relaxed text-base md:text-lg bg-white/70 backdrop-blur-md p-7 md:p-10 rounded-3xl border border-white/60 shadow-xl">
                <p>
                  礎（いしずえ）とは、土台のこと。支援する立場にいる人は、
                  感情労働の中で知らず知らずのうちに自分自身を後回しにしてしまうことがあります。
                </p>
                <p>
                  ここは「弱さを吐き出す場所」ではなく、思考・役割・負荷を構造的に整理し、
                  持続可能な状態へ整え直すための時間です。
                </p>
                <p className="font-semibold text-stone-900 border-t border-stone-200 pt-5">
                  消耗を減らし、支援を続けられる土台を再設計します。
                </p>
              </div>
              <div className="mt-14">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-white text-stone-900 text-sm tracking-[0.2em] font-medium hover:bg-stone-50 transition-all rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  まずは無料相談
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO導線 */}
        <section className="py-10 px-6 bg-white border-b border-stone-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-5 p-5 md:p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-[#7C9A8A]/30 hover:shadow-sm transition-all">
              <div className="flex-1 text-center sm:text-left">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#7C9A8A] font-medium mb-1.5">おすすめ記事</p>
                <p className="text-stone-800 font-medium mb-1 text-sm md:text-base">支援職の燃え尽き（バーンアウト）について</p>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  福祉・医療・教育など対人援助職に起こりやすいバーンアウトの構造と対処を解説します。
                </p>
              </div>
              <Link
                to="/articles/helper-burnout"
                className="flex-shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 bg-stone-900 text-white text-xs tracking-wider rounded-full hover:bg-stone-700 transition-colors shadow-sm"
              >
                詳しく読む
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div className="space-y-12">
              <div>
                <span className="section-label">About</span>
                <h2 className="text-2xl font-medium mt-4 tracking-wider">当相談室について</h2>
              </div>
              <div className="space-y-8 text-stone-600 leading-relaxed text-base md:text-lg">
                <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl mb-12">
                  <img
                    src="/concept.jpg"
                    alt="積み上げられた石（土台の象徴）"
                    className="w-full h-full object-cover"
                    width={1920} height={1036}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p>
                  支援する立場にいる人ほど、自分のことは後回しに、そして孤独になりがちです。
                  教育、医療、福祉、心理職。誰かの人生に伴走する方々が、自分自身の「いしずえ」を疎かにしてしまうと、
                  支援そのものが揺らいでしまいます。
                </p>
                <p>
                  当相談室では、支援者支援に特化したオンラインカウンセリングを行っています。
                </p>
                <p className="border-l-2 border-stone-200 pl-6 italic">
                  持続可能であるための整理の時間を提供します。
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ご相談 */}
        <section id="services" className="py-24 px-6 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <motion.div className="space-y-16">
              <div className="text-center">
                <span className="section-label">Consultation</span>
                <h2 className="text-2xl font-medium mt-4 tracking-wider">このようなご相談</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <ul className="space-y-4">
                    {[
                      "頭が休まらない",
                      "役割と本音のズレを感じる",
                      "自己否定が強くなっている",
                      "燃え尽きの予兆がある",
                      "責任感が強く頼れない",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-stone-700 py-3 border-b border-stone-100 last:border-b-0">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#7C9A8A]/15 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-[#7C9A8A] rounded-full"></span>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-stone-200 shadow-lg">
                  <h3 className="text-lg font-medium mb-4 text-stone-800">構造整理型アプローチ</h3>
                  <p className="text-stone-600 leading-relaxed">
                    感情の整理だけでなく、思考・役割・負荷の「見える化」を重視します。
                    現状を構造的に捉え直すことで、漠然とした不安や疲弊の正体を明らかにしていきます。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 特徴 */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div className="space-y-16">
              <div className="text-center">
                <span className="section-label">Features</span>
                <h2 className="text-2xl font-medium mt-4 tracking-wider">カウンセリングの特徴</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
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
                    title: "消耗を減らす優先",
                    desc: "無理な自己改善よりも、まずは「消耗を減らすこと」を最優先に、持続可能な働き方を考えます。",
                    icon: <CheckCircle2 className="w-5 h-5 text-[#7C9A8A]" />,
                  },
                ].map((feature, i) => (
                  <div key={i} className="p-6 md:p-8 rounded-2xl bg-white border border-stone-100 hover:border-[#7C9A8A]/30 hover:shadow-md transition-all group">
                    <div className="w-11 h-11 rounded-xl bg-[#7C9A8A]/10 flex items-center justify-center mb-6 group-hover:bg-[#7C9A8A]/20 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-base font-semibold mb-3 text-stone-900">{feature.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
/**
 * こころの相談室 いしずえ - ホームページコンポーネント
 */

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Monitor, CheckCircle2, Clock, Mail, X } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Home: React.FC = React.memo(() => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setActiveModal(null);
    }
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (activeModal && modalRef.current) {
      modalRef.current.focus();
    }
  }, [activeModal]);

  return (
    <>
      {/* スキップリンク */}
      <a href="#main-content" className="sr-only focus:not-sr-only px-4 py-2 bg-white text-blue-600">
        メインコンテンツへスキップ
      </a>

      {/* メインコンテンツ */}
      <main id="main-content">
        {/* HERO */}
        <section className="relative pt-40 pb-32 px-6 min-h-[90vh] flex items-center bg-stone-50">
          <img
            src="/hero.jpg"
            alt="カウンセリングをイメージした静かな空間"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920} height={1280}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-800/15 to-stone-900/55"></div>
          <div className="max-w-4xl mx-auto text-center relative">
            <motion.div>
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/40 rounded-full mb-8 bg-white/20 backdrop-blur-md shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C9A8A]"></span>
                  <span className="text-[10px] md:text-xs tracking-[0.25em] text-white/90 uppercase font-medium">
                    公認心理師による支援者支援
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-medium tracking-[0.08em] mb-4 text-white leading-snug drop-shadow-md">
                  支援職のためのカウンセリング<br />
                  こころの相談室 いしずえ
                </h1>
                <p className="text-white/80 tracking-[0.2em] md:tracking-[0.35em] mb-12 italic font-light drop-shadow">
                  ― 支援する人の、土台を整える ―
                </p>
              </div>
              <div className="max-w-2xl mx-auto space-y-5 text-left text-stone-800 leading-relaxed text-base md:text-lg bg-white/70 backdrop-blur-md p-7 md:p-10 rounded-3xl border border-white/60 shadow-xl">
                <p>
                  礎（いしずえ）とは、土台のこと。支援する立場にいる人は、
                  感情労働の中で知らず知らずのうちに自分自身を後回しにしてしまうことがあります。
                </p>
                <p>
                  ここは「弱さを吐き出す場所」ではなく、思考・役割・負荷を構造的に整理し、
                  持続可能な状態へ整え直すための時間です。
                </p>
                <p className="font-semibold text-stone-900 border-t border-stone-200 pt-5">
                  消耗を減らし、支援を続けられる土台を再設計します。
                </p>
              </div>
              <div className="mt-14">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-white text-stone-900 text-sm tracking-[0.2em] font-medium hover:bg-stone-50 transition-all rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  まずは無料相談
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        {/* SEO導線 */}
        <section className="py-10 px-6 bg-white border-b border-stone-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-5 p-5 md:p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-[#7C9A8A]/30 hover:shadow-sm transition-all">
              <div className="flex-1 text-center sm:text-left">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#7C9A8A] font-medium mb-1.5">おすすめ記事</p>
                <p className="text-stone-800 font-medium mb-1 text-sm md:text-base">支援職の燃え尽き（バーンアウト）について</p>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  福祉・医療・教育など対人援助職に起こりやすいバーンアウトの構造と対処を解説します。
                </p>
              </div>
              <Link
                to="/articles/helper-burnout"
                className="flex-shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 bg-stone-900 text-white text-xs tracking-wider rounded-full hover:bg-stone-700 transition-colors shadow-sm"
              >
                詳しく読む
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div className="space-y-12">
              <div>
                <span className="section-label">About</span>
                <h2 className="text-2xl font-medium mt-4 tracking-wider">当相談室について</h2>
              </div>
              <div className="space-y-8 text-stone-600 leading-relaxed text-base md:text-lg">
                <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl mb-12">
                  <img
                    src="/concept.jpg"
                    alt="積み上げられた石（土台の象徴）"
                    className="w-full h-full object-cover"
                    width={1920} height={1036}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p>
                  支援する立場にいる人ほど、自分のことは後回しに、そして孤独になりがちです。
                  教育、医療、福祉、心理職。誰かの人生に伴走する方々が、自分自身の「いしずえ」を疎かにしてしまうと、
                  支援そのものが揺らいでしまいます。
                </p>
                <p>
                  当相談室では、支援者支援に特化したオンラインカウンセリングを行っています。
                </p>
                <p className="border-l-2 border-stone-200 pl-6 italic">
                  持続可能であるための整理の時間を提供します。
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ご相談 */}
        <section id="services" className="py-24 px-6 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <motion.div className="space-y-16">
              <div className="text-center">
                <span className="section-label">Consultation</span>
                <h2 className="text-2xl font-medium mt-4 tracking-wider">このようなご相談</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <ul className="space-y-4">
                    {[
                      "頭が休まらない",
                      "役割と本音のズレを感じる",
                      "自己否定が強くなっている",
                      "燃え尽きの予兆がある",
                      "責任感が強く頼れない",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-stone-700 py-3 border-b border-stone-100 last:border-b-0">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#7C9A8A]/15 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-[#7C9A8A] rounded-full"></span>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-stone-200 shadow-lg">
                  <h3 className="text-lg font-medium mb-4 text-stone-800">構造整理型アプローチ</h3>
                  <p className="text-stone-600 leading-relaxed">
                    感情の整理だけでなく、思考・役割・負荷の「見える化」を重視します。
                    現状を構造的に捉え直すことで、漠然とした不安や疲弊の正体を明らかにしていきます。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 特徴 */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div className="space-y-16">
              <div className="text-center">
                <span className="section-label">Features</span>
                <h2 className="text-2xl font-medium mt-4 tracking-wider">カウンセリングの特徴</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
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
                    title: "消耗を減らす優先",
                    desc: "無理な自己改善よりも、まずは「消耗を減らすこと」を最優先に、持続可能な働き方を考えます。",
                    icon: <CheckCircle2 className="w-5 h-5 text-[#7C9A8A]" />,
                  },
                ].map((feature, i) => (
                  <div key={i} className="p-6 md:p-8 rounded-2xl bg-white border border-stone-100 hover:border-[#7C9A8A]/30 hover:shadow-md transition-all group">
                    <div className="w-11 h-11 rounded-xl bg-[#7C9A8A]/10 flex items-center justify-center mb-6 group-hover:bg-[#7C9A8A]/20 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-base font-semibold mb-3 text-stone-900">{feature.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
