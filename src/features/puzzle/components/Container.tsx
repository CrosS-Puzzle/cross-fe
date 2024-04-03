'use client'

import usePuzzle from '@/features/puzzle/store/usePuzzle'
import PuzzleView from '@/features/puzzle/components/PuzzleView'
import Control from '@/features/puzzle/components/Control'
import Status from '@/features/puzzle/components/Status'
import { useRouter } from 'next/navigation'
import BackIcon from '@/icons/Back'
import { useCallback, useEffect } from 'react'

export default function Container() {
  const { puzzle, solvedCount, totalCount } = usePuzzle()
  const router = useRouter()

  // 새로고침, 페이지 닫기 감지
  const handleBeforeUnload = useCallback(
    (e: BeforeUnloadEvent) => {
      if (solvedCount > 0 && solvedCount < totalCount) {
        e.preventDefault()
        e.returnValue = true
      }
    },
    [solvedCount, totalCount],
  )

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [handleBeforeUnload])

  // TODO: 뒤로가기 감지

  return (
    <div className="w-screen relative flex flex-col items-center  mt-8">
      <div className="w-fit flex flex-col items-center">
        <div className="w-fit">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center mb-2"
          >
            <BackIcon width={20} height={20} />
            <span>목록으로 돌아가기</span>
          </button>
        </div>
        <div className="overflow-auto border-2 relative">
          {puzzle && <Status />}
          {puzzle && <PuzzleView />}
        </div>
        {puzzle && <Control />}
      </div>
    </div>
  )
}
