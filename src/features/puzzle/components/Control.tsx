'use client'

import { usePuzzle } from '@/features/puzzle/store/usePuzzle'
import Description from '@/features/puzzle/components/Description'
import Input from '@/features/puzzle/components/Input'

export default function Control() {
  const { currentWord } = usePuzzle()

  if (!currentWord) {
    return (
      <div className="">
        <p>선택된 단어가 없습니다.</p>
        <p>위 퍼즐판의 단어칸을 선택해보세요.</p>
      </div>
    )
  }

  return (
    <div className="w-fit">
      <Description />
      <Input />
    </div>
  )
}
