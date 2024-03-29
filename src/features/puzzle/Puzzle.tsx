import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

import { getPuzzle } from '@/server/puzzle.actions'

import Fetcher from './components/Fetcher'
import Container from '@/features/puzzle/components/Container'
import { Suspense } from 'react'

export default async function Puzzle({ id }: { id: string }) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['puzzle', id],
    queryFn: () => getPuzzle(id, false),
  })

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Fetcher id={id}>
          <Container />
        </Fetcher>
      </HydrationBoundary>
    </Suspense>
  )
}
