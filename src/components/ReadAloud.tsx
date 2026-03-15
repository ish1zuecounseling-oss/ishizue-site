import { useEffect, useState } from "react";

export default function ReadAloud({ text }: { text: string }) {
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    const voices = speechSynthesis.getVoices();
    const jaVoice = voices.find(v => v.lang === "ja-JP");
    if (jaVoice) setVoice(jaVoice);
  }, []);

  const speak = () => {
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 1;
    utterance.pitch = 1;

    if (voice) {
      utterance.voice = voice;
    }

    speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={speak}
      className="px-4 py-2 bg-stone-900 text-white rounded-lg text-sm"
    >
      🔊 記事を読み上げる
    </button>
  );
}
