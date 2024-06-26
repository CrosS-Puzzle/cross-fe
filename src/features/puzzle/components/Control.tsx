'use client'

import { useEffect } from 'react'
import usePuzzle from '@/features/puzzle/store/usePuzzle'
import Description from '@/features/puzzle/components/Description'
import Input from '@/features/puzzle/components/Input'
import useModal from '@/features/modal/store/useModal'
import useHistory from '../store/useHistory'

export default function Control() {
  const { puzzle, currentWord, solvedCount, totalCount } = usePuzzle()
  const { addSolved, isFinished } = useHistory()
  const { openModal } = useModal()

  useEffect(() => {
    const checkAlreadyDone = () => {
      if (puzzle && solvedCount !== totalCount) {
        if (isFinished(puzzle.id)) {
          openModal({ type: 'already-done' })
        }
      }
    }

    checkAlreadyDone()
  }, [puzzle, solvedCount, totalCount])

  useEffect(() => {
    const completePuzzle = async () => {
      await fetch(`/api/complete?id=${puzzle.puzzleId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    if (puzzle) {
      if (solvedCount === totalCount) {
        addSolved(puzzle.id)
        openModal({ type: 'complete' })
        completePuzzle()
      }
    }
  }, [solvedCount, totalCount])

  if (!currentWord) {
    return (
      <div className="mt-2 text-center">
        <p className="text-lg font-semibold">선택된 단어가 없습니다.</p>
        <p>위 퍼즐판에서 한 곳을 클릭해보세요.</p>
      </div>
    )
  }

  return (
    <div className="w-fit relative">
      <Description />
      <Input />
    </div>
  )
}
