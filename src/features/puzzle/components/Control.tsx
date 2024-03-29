'use client'

import { usePuzzle } from '@/features/puzzle/store/usePuzzle'
import Description from '@/features/puzzle/components/Description'
import Input from '@/features/puzzle/components/Input'

export default function Control() {
  const { currentWord } = usePuzzle()

  if (!currentWord) {
    return (
      <div className="mt-2 text-center">
        <p className="text-lg font-semibold">선택된 단어가 없습니다.</p>
        <p>위 퍼즐판에서 한 곳을 클릭해보세요.</p>
      </div>
    )
  }

  return (
    <div className="w-fit ">
      <Description />
      <Input />
    </div>
  )
}
