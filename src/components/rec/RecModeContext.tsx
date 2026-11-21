/**
 * 記事が「回遊再設計 フェーズ1」のパイロット対象かどうかを、記事の中の部品に渡す。
 * 判定は ArticleLayout の1か所だけで行う(src/data/recommendations.ts の pilot)。
 * Provider の外では「パイロットではない」(今までどおりの表示)になる。
 */
import { createContext, useContext } from "react";

export const RecModeContext = createContext<{ pilot: boolean }>({ pilot: false });

export function useIsRecPilot(): boolean {
  return useContext(RecModeContext).pilot;
}
