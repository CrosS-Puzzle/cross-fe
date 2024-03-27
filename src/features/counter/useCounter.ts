import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { RootState } from '@/store/store'
import { increment, decrement } from './counterSlice'

const useCounter = () => {
  const dispatch = useAppDispatch()
  const { count } = useAppSelector((state: RootState) => ({
    count: state.counter.value,
  }))

  const increase = () => {
    dispatch(increment())
  }

  const decrease = () => {
    dispatch(decrement())
  }

  return { count, increase, decrease }
}

export default useCounter
