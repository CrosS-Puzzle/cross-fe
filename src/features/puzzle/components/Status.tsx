import { usePuzzle } from '@/features/puzzle/store/usePuzzle'

export default function Status() {
  const { solvedCount, totalCount } = usePuzzle()

  const rate = ((solvedCount / totalCount) * 100).toFixed(1)
  return (
    <>
      <div className="bg-emerald-400 w-fit fixed p-2 z-50 top-[48px] right-0 rounded-bl-2xl">
        <span
          className={'text-base font-semibold text-neutral-700'}
        >{`진행률 ${rate}%`}</span>
      </div>
    </>
  )
}
