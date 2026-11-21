/**
 * 記事本文に手書きで置いた推薦欄(「関連する記事」「あわせて読む」など)を包む。
 * パイロット記事では中身を出さない(新しい推薦エリアと重なるため)。
 * pilotFallback を渡したときは、パイロット記事ではその代わりにそれだけを出す
 * (例:「偉人・学者から学ぶ」シリーズの案内文。推薦ではないので残す)。
 * それ以外の記事では、中身をそのまま出す(要素は足さない)。
 */
import type { ReactNode } from "react";
import { useIsRecPilot } from "./RecModeContext";

type Props = { children: ReactNode; pilotFallback?: ReactNode };

export default function LegacyRelated({ children, pilotFallback = null }: Props) {
  return useIsRecPilot() ? <>{pilotFallback}</> : <>{children}</>;
}
