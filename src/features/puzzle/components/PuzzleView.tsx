'use client'

import { twMerge } from 'tailwind-merge'
import { usePuzzle } from '@/features/puzzle/store/usePuzzle'
import { AnswerInfo } from '@/features/puzzle/constants/types'

export default function PuzzleView() {
  const { puzzle, setCurrentWord, currentWord } = usePuzzle()

  if (!puzzle) {
    throw new Error('퍼즐 정보를 불러오지 못했습니다.')
  }

  const { rowSize, colSize, answerInfos } = puzzle

  const width = colSize * 68 + 8
  const height = rowSize * 68 + 8

  const handleWordClick = (id: string) => {
    setCurrentWord(id)
  }

  return (
    <div
      className="bg-transparent relative"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: '100vw',
        maxHeight: '65vh',
      }}
    >
      {Object.keys(answerInfos).map((wordId: string) => {
        const { coords, length, word, direction } = answerInfos[
          wordId
        ] as AnswerInfo

        const selectedStyleBtn = currentWord === wordId ? 'z-10' : ''

        return (
          <button
            type="button"
            onClick={() => handleWordClick(wordId)}
            key={word.id}
            className={twMerge('absolute flex gap-1', selectedStyleBtn)}
            style={{
              top: `${coords[0] * 68 + 4}px`,
              left: `${coords[1] * 68 + 4}px`,
              width: direction === 0 ? `${(length - 1) * 70 + 64}px` : '64px',
              height: direction === 1 ? `${(length - 1) * 70 + 64}px` : '64px',
              flexDirection: direction === 0 ? 'row' : 'column',
            }}
            disabled={!!puzzle.answerInfos[wordId].word.value}
          >
            {Array.from({ length }).map((_, index) => {
              const char = word.value?.[index]

              const colors =
                char === undefined
                  ? 'bg-neutral-400 text-black'
                  : 'bg-neutral-700 text-neutral-50'

              const selectedStyleDiv =
                wordId === currentWord
                  ? 'border-4 border-neutral-500 animate-pulse'
                  : ''

              const zIndex = char ? 'z-30' : ''

              return (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className={twMerge(
                    'w-16 h-16 rounded-lg flex items-center justify-center',
                    colors,
                    selectedStyleDiv,
                    zIndex,
                  )}
                >
                  {char}
                </div>
              )
            })}
          </button>
        )
      })}
    </div>
  )
}
