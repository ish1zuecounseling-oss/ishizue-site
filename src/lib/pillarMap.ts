/**
 * src/lib/pillarMap.ts
 *
 * タグ → 優先表示する王様記事のスラッグ一覧。
 * 記事が増えてもここを変えるだけで全記事に反映される。
 *
 * ルール：
 * - キーはタグ名（generateArticles.ts の TAG_MAP と対応）
 * - 値は優先表示したい記事パスの配列（順番通りに表示）
 * - 表示中の記事自身は自動除外される
 */

export const pillarMap: Record<string, string[]> = {
  /** 共感疲労クラスター */
  compassion: [
    "/articles/helper-empathy-check",        // 共感疲労セルフチェック
    "/articles/helper-empathy-fatigue",      // 共感疲労とは
    "/articles/compassion-fatigue-coping",   // 共感疲労の対処法
  ],

  /** バーンアウトクラスター */
  burnout: [
    "/articles/helper-burnout-check",        // バーンアウトセルフチェック
    "/articles/helper-burnout-signs",        // バーンアウトの前兆
    "/articles/helper-burnout",              // バーンアウトとは
  ],

  /** 感情労働クラスター */
  emotional_labor: [
    "/articles/helper-emotional-labor-check", // 感情労働消耗度チェック
    "/articles/emotional-labor",              // 感情労働とは
  ],

  /** 辞めたい・キャリアクラスター */
  career_crisis: [
    "/articles/helper-quit-timing-check",    // 辞め時チェック
    "/articles/helper-quit",                 // 辞めたいとき
  ],

  /** 二次受傷クラスター */
  secondary_trauma: [
    "/articles/helper-secondary-trauma",     // 二次受傷とは
    "/articles/secondary-trauma-coping",     // 二次受傷の対処法
  ],

  /** 境界線クラスター */
  boundary: [
    "/articles/helper-boundary",             // 境界線とは
    "/articles/helper-boundary-how-to",      // 境界線の引き方
  ],

  /** 回復・ケアクラスター */
  recovery: [
    "/articles/helper-rest-types",           // 休息に必要な要素
    "/articles/helper-self-care",            // セルフケア方法
  ],

  /** 職種別：看護師 */
  nurse: [
    "/articles/nurse-compassion-fatigue",    // 看護師の共感疲労
    "/articles/nurse-emotional-exhaustion",  // 看護師の感情的消耗
  ],

  /** 職種別：保育士 */
  nursery: [
    "/articles/nursery-limit",               // 保育士が限界を感じる理由
  ],

  /** 職種別：教員 */
  teacher: [
    "/articles/teacher-mental-health",       // 教員のメンタルヘルス
  ],
};
