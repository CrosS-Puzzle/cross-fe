import Puzzle from '@/features/puzzle/Puzzle'

export default async function ({
  params,
}: {
  params: {
    puzzleId: string
  }
}) {
  return (
    <div className="w-full h-full">
      <Puzzle id={params.puzzleId} />
    </div>
  )
}
