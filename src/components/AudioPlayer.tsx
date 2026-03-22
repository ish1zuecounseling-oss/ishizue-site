export default function AudioPlayer({ src }: { src: string }) {
  return (
                <div className="mb-6 rounded-xl bg-white border border-stone-100 shadow-sm p-4">
                  <p className="text-xs text-stone-400 mb-2 tracking-wide uppercase">🎧 音声で聴く</p>
      <audio controls className="w-full">
        <source src={src} type="audio/mpeg" />
      </audio>
                </div>
  )
}
