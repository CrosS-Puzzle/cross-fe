import Puzzle from '@/features/puzzle/Puzzle'

export default async function ({
  params,
}: {
  params: {
    puzzleId: string
  }
}) {
  return (
    <>
      <Puzzle id={params.puzzleId} />
    </>
  )
}
