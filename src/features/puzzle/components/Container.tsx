'use client'

import { usePuzzle } from '@/features/puzzle/store/usePuzzle'
import PuzzleView from '@/features/puzzle/components/PuzzleView'
import Status from '@/features/puzzle/components/Status'
import Control from '@/features/puzzle/components/Control'

export default function Container() {
  const { puzzle } = usePuzzle()

  return (
    <div className="w-fit h-fit relative flex flex-col items-center">
      <div className="max-h-[600px] overflow-auto">
        {/*{puzzle && <Status />}*/}
        {puzzle && <PuzzleView />}
      </div>

      <Control />
    </div>
  )
}
