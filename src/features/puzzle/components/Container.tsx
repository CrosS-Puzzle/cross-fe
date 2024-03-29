'use client'

import { usePuzzle } from '@/features/puzzle/store/usePuzzle'
import PuzzleView from '@/features/puzzle/components/PuzzleView'
import Control from '@/features/puzzle/components/Control'

export default function Container() {
  const { puzzle } = usePuzzle()

  return (
    <div className="w-screen relative flex flex-col items-center">
      <div className="overflow-auto">{puzzle && <PuzzleView />}</div>

      <Control />
    </div>
  )
}
