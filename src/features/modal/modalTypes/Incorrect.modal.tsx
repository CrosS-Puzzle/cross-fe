import useModal from '../store/useModal'

export default function IncorrectModal() {
  const { closeModal } = useModal()

  const handleOnClick = () => {
    closeModal()
  }
  return (
    <div className="h-full bg-transparent rounded-lg flex flex-col">
      <h2 className="text-2xl font-bold text-red-500">오답입니다.</h2>

      <p className="text-lg text-neutral-800 mt-6">다시 시도해주세요.</p>
      <button
        type="button"
        onClick={handleOnClick}
        className="mt-6 w-full border border-neutral-300 p-2 rounded-lg hover:bg-neutral-300"
      >
        닫기
      </button>
    </div>
  )
}
