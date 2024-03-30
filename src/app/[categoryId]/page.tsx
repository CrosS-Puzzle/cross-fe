import { getPuzzles } from '@/server/puzzle.actions'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { Suspense } from 'react'
import Puzzles from '@/app/[categoryId]/Puzzles'

export default async function CategoryPage({
  params,
}: {
  params: {
    categoryId: string
  }
}) {
  const { categoryId } = params

  const queryClient = new QueryClient()
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['puzzles', categoryId, 'asc'],
    queryFn: ({ pageParam }) => getPuzzles(categoryId, 'asc', { pageParam }),
    initialPageParam: 0,
    getNextPageParam: (
      lastPage: { last: boolean },
      _: any,
      lastPageParam: number,
    ) => {
      if (lastPage.last) return undefined
      return lastPageParam + 1
    },
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense>
        <Puzzles />
      </Suspense>
    </HydrationBoundary>
  )
}
