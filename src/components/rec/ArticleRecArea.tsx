/**
 * パイロット記事の新しい推薦エリア(rec_structure: new_3layer)。計画書 7章・8章。
 *
 * - 第1層:個別推薦(0〜3本。データの recs)
 * - 第2層:テーマハブ(フェーズ1では表示しない。データの hub が null のあいだは何も出さない)
 * - 第3層:探索導線(記事一覧・診断ツール一覧・AI整理アシスタント)
 *
 * 受付休止中の案内・LINE の案内は、このエリアには入れない。
 */
import { Link } from "react-router-dom";
import { BookOpen, ClipboardCheck, Compass, LayoutGrid, Sparkles } from "lucide-react";
import { articles } from "../../data/articles";
import type { RecEntry } from "../../data/recommendations";
import { handleRecLinkClick } from "../../lib/recContext";
import type { RecSlotType, RecTargetType } from "../../lib/analytics";

const SAGE = "#8FAF9F";

const EXPLORE_LINKS: { id: string; href: string; targetType: RecTargetType; label: string; desc: string; Icon: typeof BookOpen }[] = [
  { id: "articles_list", href: "/articles", targetType: "article_list", label: "記事一覧", desc: "テーマ別に記事を探す", Icon: LayoutGrid },
  { id: "tools_list", href: "/articles?tab=tools", targetType: "self_check", label: "診断ツール一覧", desc: "セルフチェックで今の状態を確かめる", Icon: ClipboardCheck },
  { id: "ai_assistant", href: "/ai-assistant", targetType: "ai_assistant", label: "AI整理アシスタント", desc: "今の状態を言葉にして整理する（無料・登録不要）", Icon: Sparkles },
];

const SLOT_LABEL: Record<string, string> = { primary: "次に読むなら", aux1: "あわせて", aux2: "あわせて" };

type Props = { sourceId: string; entry: RecEntry };

export default function ArticleRecArea({ sourceId, entry }: Props) {
  const items = entry.recs
    .map((r) => ({ ...r, title: articles.find((a) => a.path === r.path)?.title }))
    .filter((r): r is typeof r & { title: string } => !!r.title);

  const click = (targetId: string, href: string, targetType: RecTargetType, slotType: RecSlotType) => () =>
    handleRecLinkClick({
      source_id: sourceId, target_id: targetId, target_type: targetType,
      slot_type: slotType, rec_structure: "new_3layer", href,
    });

  return (
    <section
      data-rec-container=""
      data-rec-structure="new_3layer"
      data-rec-region="new_3layer"
      aria-label={items.length > 0 ? "次に読む記事" : "ほかの探し方"}
      className="mt-10 pt-8 border-t border-stone-100"
    >
      {/* 第1層:個別推薦 */}
      {items.length > 0 && (
        <div className="mb-8">
          <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-4" style={{ color: SAGE }}>
            次に読む記事
          </p>
          <div className="space-y-2">
            {items.map((r) => (
              <Link
                key={r.path}
                to={r.path}
                data-rec-slot={r.slot}
                data-rec-layer="1"
                onClick={click(r.id, r.path, r.targetType, r.slot)}
                className={
                  "group flex items-start gap-3 rounded-xl border transition-all hover:shadow-sm " +
                  (r.slot === "primary" ? "p-4 border-[#8FAF9F]/40 bg-[#8FAF9F]/[0.06]" : "p-3 border-stone-100")
                }
              >
                {r.targetType === "self_check"
                  ? <ClipboardCheck className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: SAGE }} aria-hidden="true" />
                  : <BookOpen className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: SAGE }} aria-hidden="true" />}
                <span className="flex flex-col gap-1 min-w-0">
                  <span className="text-[10px] tracking-[0.15em] font-medium text-stone-400">
                    {SLOT_LABEL[r.slot]}
                    {r.targetType === "self_check" && <span className="ml-2" style={{ color: SAGE }}>セルフチェック</span>}
                  </span>
                  <span
                    className="text-sm text-stone-700 group-hover:text-stone-900 leading-snug transition-colors line-clamp-2"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    {r.title}
                  </span>
                  {/* 推薦理由(データの「〜の理由」の列をそのまま1文で出す) */}
                  <span data-rec-reason="" className="text-xs text-stone-500 leading-relaxed">
                    {r.reason}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 第2層:テーマハブ(フェーズ1では表示しない。entry.hub が null のあいだは何も出さない) */}

      {/* 第3層:探索導線 */}
      <div>
        <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-3 flex items-center gap-1.5" style={{ color: SAGE }}>
          <Compass className="w-3 h-3" aria-hidden="true" />
          ほかの探し方
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {EXPLORE_LINKS.map(({ id, href, targetType, label, desc, Icon }) => (
            <Link
              key={id}
              to={href}
              data-rec-slot="explore"
              data-rec-layer="3"
              onClick={click(id, href, targetType, "explore")}
              className="group flex flex-col gap-1 p-3 rounded-xl border border-stone-100 bg-stone-50 hover:bg-white hover:border-stone-300 transition-all max-sm:min-h-[44px]"
            >
              <span className="flex items-center gap-1.5 text-xs font-medium text-stone-700 group-hover:text-stone-900">
                <Icon className="w-3.5 h-3.5" style={{ color: SAGE }} aria-hidden="true" />
                {label}
              </span>
              <span className="text-[10px] text-stone-400 leading-relaxed">{desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
