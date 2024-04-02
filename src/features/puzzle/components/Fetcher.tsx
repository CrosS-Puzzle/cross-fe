'use client'

import { getPuzzle } from '@/server/puzzle.actions'
import { useQuery } from '@tanstack/react-query'
import { ReactNode, useEffect } from 'react'
import usePuzzle from '@/features/puzzle/store/usePuzzle'
import useModal from '@/features/modal/store/useModal'
import useHistory from '../store/useHistory'

export default function PuzzleFetcher({
  id,
  children,
}: {
  id: string
  children: ReactNode
}) {
  const { initiatePuzzle } = usePuzzle()
  const { isFinished } = useHistory()
  const { openModal } = useModal()

  const { data, error } = useQuery({
    queryKey: ['puzzle', id, isFinished(id)],
    queryFn: () => getPuzzle(id, isFinished(id)),
  })

  if (error) {
    throw new Error(error.message)
  }

  if (data) {
    initiatePuzzle(data)
  }

  return children
}
