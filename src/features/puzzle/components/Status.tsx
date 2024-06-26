import usePuzzle from '@/features/puzzle/store/usePuzzle'
import useHistory from '../store/useHistory'

export default function Status() {
  const { solvedCount, totalCount, puzzle } = usePuzzle()
  const { isFinished } = useHistory()

  if (isFinished(puzzle?.id)) {
    return <div />
  }

  const rate = ((solvedCount / totalCount) * 100).toFixed(1)
  return (
    <div className="bg-emerald-400/80 w-fit sticky p-2 z-40 top-0 left-0  rounded-br-2xl">
      <span className="text-base font-semibold text-neutral-700">{`${rate || 0.0}% 완료`}</span>
    </div>
  )
}
