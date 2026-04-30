// src/pages/admin/Chronicle.tsx
// 管理画面 — 成長の書
// ルーティング例: <Route path="/admin/chronicle" element={<Chronicle />} />

import { useState, useCallback } from 'react'
import { LEVELS, type LevelData } from '../../data/chronicleData'

// ── ローカルストレージ ──────────────────────────────────
const STORAGE_KEY = 'ishizue_chronicle_v1'

type CheckState = Record<string, Record<string, boolean>>

function loadState(): CheckState {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function saveState(s: CheckState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
  } catch { /* quota exceeded etc. */ }
}

// ── ヘルパー ───────────────────────────────────────────
function countAll(lv: LevelData) {
  return Object.values(lv.tasks).flat().length
}

function countDone(lv: LevelData, state: CheckState) {
  return Object.values(state[lv.id] ?? {}).filter(Boolean).length
}

// ── サブコンポーネント ─────────────────────────────────

function Monologue({ text }: { text: string }) {
  return (
    <div style={{
      background: '#080502',
      borderTop: '1px solid #2a1f0e',
      borderBottom: '2px solid #6b4f28',
      padding: '18px 24px',
      position: 'relative',
    }}>
      {(['tl','tr','bl','br'] as const).map(pos => (
        <span key={pos} style={{
          position: 'absolute',
          fontSize: 12, color: '#6b4f28', lineHeight: 1,
          top: pos.startsWith('t') ? 6 : undefined,
          bottom: pos.startsWith('b') ? 6 : undefined,
          left: pos.endsWith('l') ? 8 : undefined,
          right: pos.endsWith('r') ? 8 : undefined,
        }}>✦</span>
      ))}
      <div style={{
        fontSize: 13, lineHeight: 2.1,
        color: '#c9aa70', textAlign: 'center',
        fontStyle: 'italic', letterSpacing: '0.04em',
        padding: '2px 12px',
      }}>
        {text.split('\n').map((line, i) => <div key={i}>{line}</div>)}
      </div>
    </div>
  )
}

function BlockTitle({ children }: { children: string }) {
  return (
    <div style={{
      fontSize: 9, letterSpacing: '0.25em', color: '#6b4f28',
      marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <span style={{ flex: 1, borderBottom: '1px solid #3d2a1266', display: 'block' }} />
      {children}
      <span style={{ flex: 1, borderBottom: '1px solid #3d2a1266', display: 'block' }} />
    </div>
  )
}

function MasteryBlock({ conditions }: { conditions: string[] }) {
  return (
    <div style={{
      borderBottom: '1px solid #1a1208',
      padding: '16px 20px',
      background: '#0d0a05',
    }}>
      <BlockTitle>習得条件</BlockTitle>
      {conditions.map((c, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'flex-start', gap: 8,
          padding: '5px 4px',
          fontSize: 12, lineHeight: 1.65, color: '#a08050',
        }}>
          <span style={{ color: '#c9933a', flexShrink: 0, fontSize: 10, marginTop: 3 }}>◆</span>
          <span>{c}</span>
        </div>
      ))}
    </div>
  )
}

function SupportBlock({ supports }: { supports: LevelData['supports'] }) {
  return (
    <div style={{
      borderBottom: '1px solid #1a1208',
      padding: '16px 20px',
      background: '#0f0b05',
    }}>
      <BlockTitle>習得へのサポート</BlockTitle>
      {supports.map((s, i) => (
        <div key={i} style={{
          background: '#0d0a05',
          border: '1px solid #2a1f0e',
          borderRadius: 2,
          padding: '12px 14px',
          marginBottom: i < supports.length - 1 ? 8 : 0,
          fontSize: 12, lineHeight: 1.75, color: '#a08050',
        }}>
          <div style={{
            display: 'inline-block',
            fontSize: 9, letterSpacing: '0.15em',
            background: '#2a1f0e', color: '#c9933a',
            padding: '2px 8px', borderRadius: 1,
            marginBottom: 6,
          }}>{s.cat}</div>
          {/* body は <b> タグを含むため dangerouslySetInnerHTML */}
          <div dangerouslySetInnerHTML={{ __html: s.body }} />
        </div>
      ))}
    </div>
  )
}

interface TasksBlockProps {
  lv: LevelData
  state: CheckState
  unlocked: boolean
  onToggle: (lvId: string, key: string) => void
}

function TasksBlock({ lv, state, unlocked, onToggle }: TasksBlockProps) {
  return (
    <div style={{ padding: '16px 20px 20px', background: '#0d0a05' }}>
      {Object.entries(lv.tasks).map(([cat, items]) => (
        <div key={cat}>
          <div style={{
            fontSize: 9, letterSpacing: '0.22em', color: '#6b4f28',
            margin: '12px 0 6px',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            {cat}
            <span style={{ flex: 1, borderBottom: '1px solid #3d2a1233' }} />
          </div>
          {items.map((text, i) => {
            const key = `${cat}_${i}`
            const checked = !!(state[lv.id]?.[key])
            return (
              <div
                key={key}
                onClick={() => unlocked && onToggle(lv.id, key)}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 9,
                  padding: '5px 3px',
                  cursor: unlocked ? 'pointer' : 'default',
                  borderRadius: 2,
                  opacity: unlocked ? 1 : 0.4,
                  transition: 'background 0.1s',
                }}
                onMouseEnter={e => unlocked && (e.currentTarget.style.background = '#1a1208')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {/* チェックボックス */}
                <div style={{
                  width: 16, height: 16, flexShrink: 0, marginTop: 2,
                  border: `1.5px solid ${checked ? '#c9933a' : '#3d2a12'}`,
                  background: checked ? '#8a6030' : '#080502',
                  borderRadius: 2,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.15s',
                  fontSize: 10, color: '#f5d080', fontWeight: 700, lineHeight: 1,
                }}>
                  {checked ? '✓' : ''}
                </div>
                {/* ラベル */}
                <div style={{
                  fontSize: 12, lineHeight: 1.65,
                  color: checked ? '#4a3820' : '#a08050',
                  textDecoration: checked ? 'line-through' : 'none',
                  transition: 'color 0.15s',
                }}>
                  {text}
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

interface LevelCardProps {
  lv: LevelData
  idx: number
  state: CheckState
  unlocked: boolean
  onToggle: (lvId: string, key: string) => void
}

function LevelCard({ lv, idx, state, unlocked, onToggle }: LevelCardProps) {
  const [open, setOpen] = useState(false)
  const total = countAll(lv)
  const done = countDone(lv, state)
  const pct = Math.round((done / total) * 100)
  const allDone = done === total

  return (
    <div style={{ borderBottom: '1px solid #1a1208' }}>
      {/* ヘッダー */}
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'grid',
          gridTemplateColumns: '5px 60px 1fr auto',
          alignItems: 'stretch',
          cursor: 'pointer',
          background: '#0d0a05',
          transition: 'background 0.15s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#130e06')}
        onMouseLeave={e => (e.currentTarget.style.background = '#0d0a05')}
      >
        {/* アクセントライン */}
        <div style={{ background: lv.accent }} />

        {/* アイコン */}
        <div style={{
          width: 60,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22,
          borderRight: '1px solid #1a1208',
          padding: '14px 0',
          color: lv.accent,
          background: allDone ? lv.light : '#0a0702',
          transition: 'background 0.3s',
        }}>
          {lv.icon}
        </div>

        {/* メタ情報 */}
        <div style={{ padding: '14px 16px' }}>
          <div style={{ fontSize: 9, letterSpacing: '0.18em', color: lv.accent, marginBottom: 3 }}>
            {lv.num}　·　{lv.title}
          </div>
          <div style={{
            fontFamily: "'Shippori Mincho', serif",
            fontSize: 16, fontWeight: 700, letterSpacing: '0.08em',
            color: allDone ? lv.accent : '#e6b555',
            marginBottom: 4,
          }}>
            {lv.name}
          </div>
          <div style={{ fontSize: 10, letterSpacing: '0.1em', color: '#7a6040' }}>
            {done} / {total} 項目習得
          </div>
        </div>

        {/* 右側 */}
        <div style={{
          padding: '14px 18px 14px 10px',
          display: 'flex', flexDirection: 'column',
          alignItems: 'flex-end', justifyContent: 'center',
          gap: 5,
        }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: lv.accent }}>{pct}%</div>
          <div style={{
            width: 72, height: 4,
            background: '#1a1208', border: '0.5px solid #3d2a12',
            borderRadius: 1, overflow: 'hidden',
          }}>
            <div style={{
              height: '100%', borderRadius: 1,
              background: lv.accent,
              width: `${pct}%`,
              transition: 'width 0.6s ease',
            }} />
          </div>
          <div style={{
            fontSize: 9, color: '#5a4020',
            transform: open ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.22s',
          }}>▶</div>
        </div>
      </div>

      {/* ボディ（開閉） */}
      {open && (
        <div style={{ background: '#100c06' }}>
          <Monologue text={lv.monologue} />
          <MasteryBlock conditions={lv.masteryConditions} />
          <SupportBlock supports={lv.supports} />
          <TasksBlock lv={lv} state={state} unlocked={unlocked} onToggle={onToggle} />

          {/* 達成バナー */}
          {allDone && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 14,
              background: '#080502',
              borderTop: '2px solid #c9933a',
              padding: '14px 20px',
            }}>
              <div style={{
                fontSize: 26, color: '#e6b555',
                animation: 'cc-pulse 2s ease-in-out infinite',
              }}>★</div>
              <div>
                <div style={{
                  fontFamily: "'Shippori Mincho', serif",
                  fontSize: 14, fontWeight: 700,
                  color: '#e6b555', letterSpacing: '0.08em',
                }}>
                  {lv.name}　完全習得
                </div>
                <div style={{ fontSize: 10, letterSpacing: '0.12em', color: '#8a6a3a', marginTop: 3 }}>
                  ― 「{lv.title}」の称号を獲得 ―
                </div>
              </div>
            </div>
          )}

          {/* ロック表示 */}
          {!unlocked && (
            <div style={{
              borderTop: '1px solid #1a1208',
              padding: 16, textAlign: 'center',
              fontSize: 11, letterSpacing: '0.1em',
              color: '#3d2a12', background: '#0a0702',
            }}>
              ── 前の等級を完全習得すると解放される ──
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── メインコンポーネント ───────────────────────────────

export default function Chronicle() {
  const [checkState, setCheckState] = useState<CheckState>(loadState)

  const handleToggle = useCallback((lvId: string, key: string) => {
    setCheckState(prev => {
      const next = {
        ...prev,
        [lvId]: { ...prev[lvId], [key]: !prev[lvId]?.[key] },
      }
      saveState(next)
      return next
    })
  }, [])

  // グローバル集計
  const totalAll = LEVELS.reduce((s, lv) => s + countAll(lv), 0)
  const doneAll = LEVELS.reduce((s, lv) => s + countDone(lv, checkState), 0)
  const globalPct = Math.round((doneAll / totalAll) * 100)

  return (
    <>
      {/* パルスアニメ用キーフレーム */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;700&family=Noto+Serif+JP:wght@400;500;700&display=swap');
        @keyframes cc-pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
        .chronicle-sup-card b { color: #e6b555; font-weight: 500; }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: '#0a0702',
        fontFamily: "'Noto Serif JP', serif",
        color: '#c9933a',
        padding: '20px 12px 60px',
      }}>
        <div style={{
          maxWidth: 760, margin: '0 auto',
          border: '2px solid #6b4f28',
          borderRadius: 2,
          background: '#0d0a05',
          position: 'relative',
        }}>
          {/* 内枠 */}
          <div style={{
            position: 'absolute', inset: 6,
            border: '1px solid #3d2a12',
            pointerEvents: 'none', zIndex: 0,
          }} />

          {/* ヘッダー */}
          <header style={{
            background: '#080502',
            borderBottom: '2px solid #6b4f28',
            padding: '28px 24px 20px',
            textAlign: 'center',
            position: 'relative', zIndex: 1,
          }}>
            {[['top:8px;left:10px','tl'],['top:8px;right:10px','tr'],['bottom:8px;left:10px','bl'],['bottom:8px;right:10px','br']].map(([s]) => (
              <span key={s} style={{
                position: 'absolute', fontSize: 18, color: '#6b4f28', lineHeight: 1,
                top: s.includes('top') ? 8 : undefined,
                bottom: s.includes('bottom') ? 8 : undefined,
                left: s.includes('left') ? 10 : undefined,
                right: s.includes('right') ? 10 : undefined,
              }}>✦</span>
            ))}
            <div style={{
              fontFamily: "'Shippori Mincho', serif",
              fontSize: 26, fontWeight: 700, letterSpacing: '0.3em', color: '#e6b555',
            }}>
              COUNSELOR　CHRONICLE
            </div>
            <div style={{ fontSize: 10, letterSpacing: '0.4em', color: '#6b4f28', marginTop: 4 }}>
              ONLINE COUNSELING MASTERY RECORD
            </div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#8a6a3a', marginTop: 8 }}>
              ― オンラインカウンセリング　成長の書 ―
            </div>
          </header>

          {/* グローバルプログレス */}
          <div style={{
            background: '#0a0702',
            borderBottom: '1px solid #2a1f0e',
            padding: '12px 24px',
            display: 'flex', alignItems: 'center', gap: 14,
            position: 'relative', zIndex: 1,
          }}>
            <div style={{ fontSize: 10, letterSpacing: '0.2em', color: '#8a6a3a', whiteSpace: 'nowrap' }}>
              総習得度
            </div>
            <div style={{
              flex: 1, height: 8,
              background: '#1a1208',
              border: '1px solid #3d2a12',
              borderRadius: 1, overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', borderRadius: 1,
                background: 'linear-gradient(to right, #8a6030, #e6b555)',
                width: `${globalPct}%`,
                transition: 'width 1s cubic-bezier(.4,0,.2,1)',
              }} />
            </div>
            <div style={{ fontSize: 10, color: '#c9933a', minWidth: 52, textAlign: 'right' }}>
              {doneAll} / {totalAll}
            </div>
          </div>

          {/* 等級カード群 */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            {LEVELS.map((lv, idx) => {
              const prevDone = idx === 0 ||
                countDone(LEVELS[idx - 1], checkState) === countAll(LEVELS[idx - 1])
              return (
                <LevelCard
                  key={lv.id}
                  lv={lv}
                  idx={idx}
                  state={checkState}
                  unlocked={prevDone}
                  onToggle={handleToggle}
                />
              )
            })}
          </div>

          {/* フッター */}
          <footer style={{
            borderTop: '2px solid #3d2a12',
            padding: '12px 24px',
            textAlign: 'center',
            fontSize: 10, letterSpacing: '0.15em', color: '#3d2a12',
            background: '#080502',
            position: 'relative', zIndex: 1,
          }}>
            ― チェック状態はこのブラウザに自動保存されます ―
          </footer>
        </div>
      </div>
    </>
  )
}
