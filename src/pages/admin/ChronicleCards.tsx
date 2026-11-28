// src/pages/admin/ChronicleCards.tsx
// 成長の書 — 要点カード(暗記カード)
//
// 問い(表)→タップで答え(裏)→自己評価(まだ/半分/言えた)。
// 出題の間隔は「今日の一頁」と同じ決まり(ChronicleDaily の nextSched を使う)。
// この記録は、合否・達成率・習得度には一切使わない(出題の順番にだけ使う)。休んでも減らない。

import { useMemo, useState } from 'react'
import type { LevelData } from '../../data/chronicleData'
import { CARDS, CARD_CAT_LABEL, type StudyCard } from '../../data/chronicleCards'
import { nextSched, todayJst, box, btn, primary, quiet, type Rating } from './ChronicleDaily'

interface CardSched { due: string; interval: number; last: Rating }
export interface CardsStore {
  sched: Record<string, CardSched>
}

const CARDS_KEY = 'ishizue_chronicle_cards_v1'
export function loadCards(): CardsStore {
  try {
    return cleanCards(JSON.parse(localStorage.getItem(CARDS_KEY) || '{}')) ?? { sched: {} }
  } catch {
    return { sched: {} }
  }
}
export function saveCards(d: CardsStore) {
  try { localStorage.setItem(CARDS_KEY, JSON.stringify(d)) } catch { /* quota exceeded etc. */ }
}
const isDate = (v: unknown): v is string => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v)
/** 読み込んだデータの形をそろえる(書き出したファイルの読み込みにも使う) */
export function cleanCards(raw: unknown): CardsStore | null {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null
  const r = raw as Record<string, unknown>
  const sched: Record<string, CardSched> = {}
  if (r.sched && typeof r.sched === 'object' && !Array.isArray(r.sched)) {
    for (const [k, v] of Object.entries(r.sched as Record<string, unknown>)) {
      const s = v as Record<string, unknown>
      if (s && isDate(s.due) && typeof s.interval === 'number' && (s.last === 'ok' || s.last === 'half' || s.last === 'not')) sched[k.slice(0, 100)] = { due: s.due, interval: s.interval, last: s.last }
    }
  }
  return { sched }
}

/** その日に復習するカード(まだ一度も評価していないカードも含む) */
export function dueCards(cards: StudyCard[], store: CardsStore, date: string): StudyCard[] {
  return cards.filter(c => !store.sched[c.id] || store.sched[c.id].due <= date)
}

const RATINGS: { r: Rating; label: string }[] = [
  { r: 'not', label: 'まだ' },
  { r: 'half', label: '半分' },
  { r: 'ok', label: '言えた' },
]

/** 課題のキー(等級id:カテゴリ:番号)を、画面の通し番号つきの課題名にする */
function taskName(levels: LevelData[], key: string): string {
  const [lvId, cat, idx] = key.split(':')
  const lv = levels.find(l => l.id === lvId)
  if (!lv || !lv.tasks[cat]) return ''
  const cats = Object.keys(lv.tasks)
  const n = cats.slice(0, cats.indexOf(cat)).reduce((a, c) => a + lv.tasks[c].length, 0) + Number(idx) + 1
  const t = lv.tasks[cat][Number(idx)]
  const label = typeof t === 'string' ? t : t?.label
  return label ? `${lv.num} 課題${n}「${label.replace(/\s*※.*$/, '')}」` : ''
}

export function CardsBlock({ levels, unlockedIds, store, onChange }: {
  levels: LevelData[]; unlockedIds: string[]; store: CardsStore; onChange: (d: CardsStore) => void
}) {
  const date = todayJst()
  const cards = useMemo(() => CARDS.filter(c => unlockedIds.includes(c.lv)), [unlockedIds])
  const due = dueCards(cards, store, date)
  const [deck, setDeck] = useState<StudyCard[] | null>(null)
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [rated, setRated] = useState<Record<string, Rating>>({})

  if (!cards.length) return null

  const open = (list: StudyCard[]) => { setDeck(list); setPos(0); setFlipped(false); setRated({}) }
  const close = () => { setDeck(null); setFlipped(false) }
  const go = (d: number) => { if (!deck) return; setPos(p => Math.min(deck.length - 1, Math.max(0, p + d))); setFlipped(false) }
  const rate = (card: StudyCard, r: Rating) => {
    onChange({ ...store, sched: { ...store.sched, [card.id]: nextSched(store.sched[card.id], r, date) } })
    setRated(m => ({ ...m, [card.id]: r }))
    if (deck && pos < deck.length - 1) { setPos(pos + 1); setFlipped(false) }
  }

  const card = deck?.[pos]
  const big = { ...btn, fontSize: 13, padding: '10px 14px', minHeight: 44 }

  return (
    <section style={box} aria-label="要点カード">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: 15, fontWeight: 700, color: '#e6b555', letterSpacing: '0.1em' }}>🃏 要点カード</div>
        <div style={{ fontSize: 11, color: '#c9a96e' }}>
          {due.length > 0 ? <>今日の復習 <b style={{ fontSize: 15, color: '#e6b555' }}>{due.length}</b> 枚</> : '今日の復習はありません'}
        </div>
      </div>
      <p style={quiet}>
        問いを見て、答えを声に出すか頭の中で言ってから、カードをめくります。休んでもカードは減りません。この記録は合否・達成率・習得度には使いません。
      </p>

      {!deck && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
          {due.length > 0 && <button type="button" style={{ ...primary, minHeight: 44 }} onClick={() => open(due)}>今日の復習をはじめる({due.length}枚)</button>}
          <button type="button" style={{ ...btn, minHeight: 44 }} onClick={() => open(cards)}>すべてのカードを見る({cards.length}枚)</button>
        </div>
      )}

      {deck && card && (
        <div style={{ marginTop: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 11, color: '#c9a96e', marginBottom: 6 }}>
            <span>{card.lv.replace('lv', 'Lv.')}　{CARD_CAT_LABEL[card.cat]}{card.sub ? `・${card.sub}` : ''}</span>
            <span aria-label="進み具合">{pos + 1} ／ {deck.length}</span>
          </div>
          <button
            type="button"
            onClick={() => setFlipped(f => !f)}
            aria-label={flipped ? '答え(タップで問いに戻る)' : '問い(タップで答えを見る)'}
            style={{
              display: 'block', width: '100%', minHeight: 170, boxSizing: 'border-box', textAlign: 'left', cursor: 'pointer',
              border: `1px solid ${flipped ? '#6b4f28' : '#3d2a12'}`, borderRadius: 6, padding: '16px 16px 14px',
              background: flipped ? '#120d06' : '#0d0904', color: '#e6d5b0', fontFamily: 'inherit',
            }}
          >
            <div style={{ fontSize: 10, letterSpacing: '0.15em', color: flipped ? '#9fc98a' : '#c9a96e', marginBottom: 8 }}>{flipped ? '答え' : '問い'}</div>
            {flipped
              ? <div style={{ fontSize: 13.5, lineHeight: 1.95, whiteSpace: 'pre-wrap' }}>{card.a}</div>
              : <div style={{ fontSize: 16, lineHeight: 1.8, fontWeight: 700, color: '#e6b555' }}>{card.q}</div>}
            <div style={{ fontSize: 10, color: '#8a6a3a', marginTop: 12 }}>{flipped ? 'タップで問いに戻る' : 'タップで答えを見る'}</div>
          </button>

          {flipped && (
            <div style={{ marginTop: 10 }}>
              <div style={{ fontSize: 11, color: '#c9a96e', marginBottom: 6 }}>言えましたか？</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                {RATINGS.map(({ r, label }) => (
                  <button key={r} type="button" onClick={() => rate(card, r)}
                    style={{ ...big, ...(rated[card.id] === r ? { color: '#0a0702', background: '#c9933a', border: 'none', fontWeight: 700 } : {}) }}>
                    {label}
                  </button>
                ))}
              </div>
              {card.tasks.length > 0 && (
                <p style={{ ...quiet, marginTop: 8 }}>関連する課題：{card.tasks.map(k => taskName(levels, k)).filter(Boolean).join('、')}</p>
              )}
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 12 }}>
            <button type="button" style={{ ...big, opacity: pos === 0 ? 0.4 : 1 }} disabled={pos === 0} onClick={() => go(-1)}>← 前へ</button>
            <button type="button" style={big} onClick={close}>終わる</button>
            <button type="button" style={{ ...big, opacity: pos === deck.length - 1 ? 0.4 : 1 }} disabled={pos === deck.length - 1} onClick={() => go(1)}>次へ →</button>
          </div>
          {pos === deck.length - 1 && Object.keys(rated).length > 0 && (
            <p style={{ ...quiet, marginTop: 8 }}>最後のカードです。評価したカードは、まだ→3日後、半分→5日後、言えた→7日後(続けて言えたら間隔をのばす)にまた出ます。</p>
          )}
        </div>
      )}
    </section>
  )
}
