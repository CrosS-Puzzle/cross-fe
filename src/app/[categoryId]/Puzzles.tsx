'use client'

import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { getPuzzles } from '@/server/puzzle.actions'
import Link from 'next/link'
import BackIcon from '@/icons/Back'

export default function Puzzles() {
  const router = useRouter()
  const observerElem = useRef(null)
  const [sortBy, setSortBy] = useState<'asc' | 'desc'>('asc')
  const pathname = usePathname()
  const categoryId = pathname.replace('/', '')

  const fetchPuzzles = async ({ pageParam = 0 }: { pageParam: number }) => {
    return await getPuzzles(categoryId, sortBy, { pageParam })
  }

  const { data, isError, error, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['puzzles', categoryId, sortBy],
      queryFn: fetchPuzzles,
      initialPageParam: 0,
      getNextPageParam: (lastPage: any, _, lastPageParam) => {
        if (lastPage.last) return undefined
        return lastPageParam + 1
      },
    })

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'asc' | 'desc'

    setSortBy(value)
  }

  const handleObserver = useCallback(
    (entries: any) => {
      const [target] = entries
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    },
    [fetchNextPage, hasNextPage],
  )

  useEffect(() => {
    const element = observerElem.current
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    }

    const observer = new IntersectionObserver(handleObserver, options)

    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [fetchNextPage, hasNextPage, handleObserver])

  if (isError) {
    throw new Error(
      '퍼즐을 불러오는 데에 문제가 발생했습니다. 잠시 후, 다시 시도해주세요.',
    )
  }

  return (
    <>
      <h2 className="mt-10 text-2xl font-bold tracking-tighter lg:text-3xl xl:text-4xl">
        CS 용어 가로세로 낱말 퍼즐
      </h2>
      <p className="max-w-[600px] text-neutral-500 text-sm/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
        ChatGPT 로 생성된 CS 용어와 설명으로 낱말퍼즐이 만들어져 있습니다.
      </p>

      <p className="text-neutral-500 pb-4">아래에서 문제를 선택해주세요.</p>

      <h3 className="font-bold text-base lg:text-2xl">
        {data && data.pages[0].categories[0]} 퍼즐
      </h3>

      <div className="w-full max-w-[480px] flex flex-row items-center justify-between">
        <button
          onClick={() => router.back()}
          className="flex flex-row items-center"
        >
          <BackIcon width={16} height={16} />
          <span className="text-xs">돌아가기</span>
        </button>

        <div>
          <span className="text-sm text-neutral-500 pr-2">정렬기준</span>
          <select
            onChange={handleOnChange}
            value={sortBy}
            className="border px-2 rounded-full border-neutral-500 bg-transparent text-sm text-neutral-500 hover:bg-neutral-300 hover:text-neutral-950"
          >
            <option value="asc">정답률 낮은 순</option>
            <option value="desc">정답률 높은 순</option>
          </select>
        </div>
      </div>

      {isLoading && <p>퍼즐목록을 조회하는 중입니다.</p>}

      <ul className="w-full max-w-[480px] h-full max-h-[calc(100vh-360px)] gap-y-2 overflow-auto">
        {data &&
          data.pages.map((group, i) => (
            <Fragment key={i}>
              {group.puzzles.map(
                (puzzle: { id: string; wins: number; views: number }) => {
                  const winRate =
                    ((puzzle.wins / puzzle.views) * 100 || 0).toFixed(1) || 0

                  return (
                    <li key={puzzle.id} className="pb-1 w-full">
                      <Link
                        href={`/puzzle/${puzzle.id}`}
                        className="px-2 py-1 rounded-md flex flex-row items-center justify-between text-neutral-600 hover:bg-neutral-300 hover:text-neutral-950"
                      >
                        <p className="text-sm ">
                          {group.categories[0] +
                            ' - ' +
                            puzzle.id.toUpperCase()}
                        </p>
                        <p className="text-sm">{winRate + '%'}</p>
                      </Link>
                    </li>
                  )
                },
              )}
            </Fragment>
          ))}
        <div ref={observerElem} />
        {!hasNextPage && !isLoading && (
          <p className="text-xs">더 불러올 수 없습니다.</p>
        )}
      </ul>
    </>
  )
}
