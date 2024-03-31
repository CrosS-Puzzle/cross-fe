'use client'

import usePuzzle from '@/features/puzzle/store/usePuzzle'

export default function Description() {
  const { currentWord, puzzle } = usePuzzle()

  if (!currentWord || !puzzle) return null

  const { direction, length, word } = puzzle.answerInfos[currentWord]
  const { id, description } = word

  return (
    <div id={`description_${id}`} className=" max-w-[480px] break-keep mt-2">
      <span className="font-bold">설명</span> : {description}
      <span className="ml-2">
        ({direction === 0 ? '가로' : '세로'}, {length}자)
      </span>
    </div>
  )
}
