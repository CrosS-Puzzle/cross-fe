import { usePuzzle } from '@/features/puzzle/store/usePuzzle'

export default function Status() {
  const { solvedCount, totalCount } = usePuzzle()

  const rate = ((solvedCount / totalCount) * 100).toFixed(1)
  return (
    <>
      <div className="bg-emerald-400/80 w-fit sticky p-2 z-50 top-0 left-0  rounded-br-2xl">
        <span
          className={'text-base font-semibold text-neutral-700'}
        >{`${rate}% 완료`}</span>
      </div>
    </>
  )
}
