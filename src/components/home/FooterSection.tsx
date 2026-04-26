import type { ModalType } from "./homeShared";

type Props = {
  openModal: (m: ModalType) => void;
  modalTitleMap: Record<Exclude<ModalType, "sent">, string>;
};

export default function FooterSection({ openModal, modalTitleMap }: Props) {
  return (
    <footer className="py-10 px-5 border-t border-stone-100 bg-stone-50">
      <div className="max-w-5xl mx-auto space-y-5">
        <div className="text-center">
          <p className="text-stone-500 text-xs mb-1">フォームが難しい場合は、メールでも受け付けています</p>
          <a href="mailto:ish1zue.counseling@gmail.com" className="text-stone-600 text-sm font-medium hover:text-stone-900 transition-colors underline underline-offset-2">
            ish1zue.counseling@gmail.com
          </a>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-[10px] tracking-[0.2em] uppercase text-stone-400 pt-4 border-t border-stone-200">
          {(["privacy", "tokusho", "cancel"] as const).map((key) => (
            <button key={key} onClick={() => openModal(key)} className="hover:text-stone-700 transition-colors py-1" type="button">
              {modalTitleMap[key]}
            </button>
          ))}
        </div>
        <p className="text-center text-[10px] text-stone-300 tracking-wider">© こころの相談室 いしずえ</p>
      </div>
    </footer>
  );
}
