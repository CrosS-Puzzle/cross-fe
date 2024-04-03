'use client'

import { useRouter } from 'next/navigation'
import useModal from '../store/useModal'

export default function Complete() {
  const { closeModal } = useModal()
  const router = useRouter()

  const handleOnBack = () => {
    closeModal()
    router.back()
  }

  const handleOnClose = () => {
    closeModal()
  }

  return (
    <div className="h-full bg-transparent rounded-lg flex flex-col">
      <h2 className="text-2xl font-bold text-neutral-800">축하합니다.</h2>

      <p className="text-lg text-neutral-800 mt-6">
        모든 퍼즐을 완료하셨습니다.
      </p>
      <p className="text-lg text-neutral-800">다른 퍼즐에 도전해보세요.</p>

      <div className="flex flex-row gap-2">
        <button
          type="button"
          onClick={handleOnBack}
          className="mt-6 w-full border border-neutral-300 p-2 rounded-lg hover:bg-neutral-300"
        >
          목록으로 돌아가기
        </button>
        <button
          type="button"
          onClick={handleOnClose}
          className="mt-6 w-full border border-neutral-300 p-2 rounded-lg hover:bg-neutral-300"
        >
          닫기
        </button>
      </div>
    </div>
  )
}
