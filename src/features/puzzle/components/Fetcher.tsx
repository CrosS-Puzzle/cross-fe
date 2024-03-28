'use client'

import { getPuzzle } from '@/server/puzzle.actions'
import { useQuery } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { usePuzzle } from '@/features/puzzle/store/usePuzzle'

export default function PuzzleFetcher({
  id,
  children,
}: {
  id: string
  children: ReactNode
}) {
  const { initiatePuzzle } = usePuzzle()
  const { data, error } = useQuery({
    queryKey: ['puzzle', id],
    queryFn: () => getPuzzle(id, false),
  })

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    initiatePuzzle(data)
  }

  return children
}
