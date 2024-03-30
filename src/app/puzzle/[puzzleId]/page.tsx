import Puzzle from '@/features/puzzle/Puzzle'
import Link from 'next/link'

export default async function ({
  params,
}: {
  params: {
    puzzleId: string
  }
}) {
  return (
    <div className="w-fit h-full">
      <Puzzle id={params.puzzleId} />
    </div>
  )
}
