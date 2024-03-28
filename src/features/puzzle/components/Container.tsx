'use client'

import { usePuzzle } from '@/features/puzzle/store/usePuzzle'

export default function Container() {
  const { puzzle } = usePuzzle()

  return <>{puzzle && puzzle.id}</>
}
