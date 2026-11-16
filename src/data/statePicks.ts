/**
 * 「状態から選ぶ」おすすめ5本の正本(1か所だけで管理する)。
 * 記事一覧の StatePicker と、しんどさカードの「はじめの5本」(SHINDO_PICKS)の両方がここから読む。
 * 並びは読む順。1〜3本目=いま整える、4〜5本目=理由を知る。
 * パスは実在する記事のみ(記事データにないパスは表示側で省かれる)。
 */
export type StateKey = "fatigue" | "carry" | "quit" | "lost";

export const STATE_PICK_PATHS: Record<StateKey, string[]> = {
  fatigue: [
    "/articles/helper-status-check",
    "/articles/compassion-fatigue-coping",
    "/articles/helper-rest-types",
    "/articles/brain-fatigue-mechanism",
    "/articles/burnout-not-recovering",
  ],
  carry: [
    "/articles/helper-boundary-how-to",
    "/articles/helper-cannot-say-no",
    "/articles/why-support-workers-cannot-ask-for-help",
    "/articles/helper-carrying-clients",
    "/articles/helper-responsibility-burnout",
  ],
  quit: [
    "/articles/helper-want-to-quit-landing",
    "/articles/helper-quit-timing-check",
    "/articles/quit-job-timing",
    "/articles/helper-guilt-about-leaving",
    "/articles/helper-leave-of-absence-hesitation",
  ],
  lost: [
    "/articles/helper-wellbeing-check",
    "/articles/helper-self-blame-landing",
    "/articles/emotion-unknown",
    "/articles/helper-stress-coping",
    "/articles/thinking-feeling-gap",
  ],
};

/** 1〜3本目=整える、4〜5本目=理由を知る */
export const pickKind = (index: number): "整える" | "理由を知る" => (index < 3 ? "整える" : "理由を知る");
