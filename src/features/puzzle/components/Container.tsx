'use client'

import Link from 'next/link'
import { usePuzzle } from '@/features/puzzle/store/usePuzzle'
import PuzzleView from '@/features/puzzle/components/PuzzleView'
import Control from '@/features/puzzle/components/Control'
import Status from '@/features/puzzle/components/Status'
import { useRouter } from 'next/navigation'
import BackIcon from '@/icons/Back'

export default function Container() {
  const { puzzle } = usePuzzle()
  const router = useRouter()

  return (
    <div className="w-screen relative flex flex-col items-center  mt-8">
      <div className="w-fit flex flex-col items-center">
        <div className="w-fit">
          <button onClick={() => router.back()} className="flex items-center">
            <BackIcon width={20} height={20} />
            <span>목록으로 돌아가기</span>
          </button>
        </div>
        <div className="overflow-auto border-2 relative">
          <Status />
          {puzzle && <PuzzleView />}
        </div>
        <Control />{' '}
      </div>
    </div>
  )
}
