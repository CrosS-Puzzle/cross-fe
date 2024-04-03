import { Suspense } from 'react'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

import { getPuzzle } from '@/server/puzzle.actions'
import Container from '@/features/puzzle/components/Container'

import Fetcher from './components/Fetcher'

export default async function Puzzle({ id }: { id: string }) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['puzzle', id, false],
    queryFn: () => getPuzzle(id, false),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Fetcher id={id}>
          <Container />
        </Fetcher>
      </Suspense>
    </HydrationBoundary>
  )
}
