export default function AudioPlayer({ src }: { src: string }) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl p-4 mb-8">
      <p className="text-sm mb-2">🎧 音声で記事を聞く</p>

      <audio controls className="w-full">
        <source src={src} type="audio/mpeg" />
      </audio>
    </div>
  )
}
