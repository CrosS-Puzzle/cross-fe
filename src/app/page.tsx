import getCategories from '@/server/category.actions'
import Link from 'next/link'
import React from 'react'

export default async function Home() {
  const categories = await getCategories()

  return (
    <>
      <h2 className="mt-10 text-2xl font-bold tracking-tighter lg:text-3xl xl:text-4xl">
        CS 용어 가로세로 낱말 퍼즐
      </h2>
      <p className="max-w-[600px] text-neutral-500 text-sm/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
        ChatGPT 로 생성된 CS 용어와 설명으로 낱말퍼즐이 만들어져 있습니다.
      </p>
      <p className="text-neutral-500 pb-4">아래에서 카테고리를 선택해주세요.</p>

      <div className="w-full max-w-[480px] px-1">
        <h3 className="text-left pb-2 font-bold">카테고리</h3>
        <ul>
          {categories &&
            categories.length > 0 &&
            categories.map(
              (category: {
                id: string
                koreanName: string
                puzzleCount: number
              }) => {
                return (
                  <li
                    key={category.id}
                    className="group text-neutral-800 hover:bg-neutral-300 hover:text-neutral-950 rounded-md p-2 border border-neutral-300 mb-2"
                  >
                    <Link
                      href={`/category/${category.id}`}
                      className="w-full flex flex-row justify-between items-center px-2"
                    >
                      <span className="text-sm">{category.koreanName}</span>
                      <span className="text-sm">{category.puzzleCount}</span>
                    </Link>
                  </li>
                )
              },
            )}
        </ul>
      </div>
    </>
  )
}
