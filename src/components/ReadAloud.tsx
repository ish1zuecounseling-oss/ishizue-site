export default function ReadAloud({ text }: { text: string }) {

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "ja-JP"
    speechSynthesis.speak(utterance)
  }

  return (
    <button
      onClick={speak}
      className="px-4 py-2 bg-stone-900 text-white rounded-lg text-sm"
    >
      🔊 記事を読み上げる
    </button>
  )
}
