import React, { useState } from 'react'
import usePuzzle from '@/features/puzzle/store/usePuzzle'
import { checkWord } from '@/server/puzzle.actions'

export default function Input() {
  const [input, setInput] = useState<string>('')
  const { addAnswerInfo, currentWord, puzzle } = usePuzzle()

  if (!currentWord || !puzzle) {
    throw new Error('Puzzle is not loaded')
  }

  const { length } = puzzle.answerInfos[currentWord]

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.value.trim().length > length) {
      setInput(input.slice(0, length))
    }

    setInput(e.target.value)
  }

  const verifyAnswer = async () => {
    if (input.length !== length) return

    const isCorrect = await checkWord(currentWord, input)

    if (isCorrect) {
      addAnswerInfo(currentWord, input)
    } else {
      // TODO: Modal 추가
    }

    setInput('')
  }

  return (
    <div className="w-full flex flex-row mt-6">
      <input
        id={`input_${currentWord}`}
        type="text"
        value={input}
        maxLength={length}
        onChange={handleOnChange}
        placeholder="정답을 입력해주세요."
        className="w-full h-10 bg-transparent text-center text-lg border-b-2 pb-1 border-black disabled:cursor-not-allowed focus:outline-none"
        disabled={!currentWord}
      />
      <button
        type="button"
        disabled={length !== input.length}
        onClick={verifyAnswer}
        className="w-fit min-w-20 ml-2 bg-neutral-700 border border-neutral-700 text-neutral-50 py-1 px-2 rounded-md disabled:bg-transparent disabled:cursor-not-allowed disabled:border disabled:border-neutral-400 disabled:text-neutral-400"
      >
        제출하기
      </button>
    </div>
  )
}
