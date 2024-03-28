import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { RootState } from '@/store/store'
import { increment, decrement, selectCount } from './counterSlice'

const useCounter = () => {
  const dispatch = useAppDispatch()

  const count = useAppSelector(selectCount)

  const increase = () => {
    dispatch(increment())
  }

  const decrease = () => {
    dispatch(decrement())
  }

  return { count, increase, decrease }
}

export default useCounter
