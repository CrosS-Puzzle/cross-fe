'use client'

import { useAppSelector, useAppDispatch } from '@/store/hooks'
import {
  ADD_CHECKED,
  ADD_SOLVED,
  selectSolvedList,
  selectCheckedList,
} from '@/features/puzzle/store/historySlice'

export default function useHistory() {
  const dispatch = useAppDispatch()

  const solvedList = useAppSelector(selectSolvedList)
  const checkedList = useAppSelector(selectCheckedList)

  const addSolved = (id: string) => {
    dispatch(ADD_SOLVED(id))
  }

  const addChecked = (id: string) => {
    dispatch(ADD_CHECKED(id))
  }

  const isFinished = (id: string) => {
    return solvedList.includes(id) || checkedList.includes(id)
  }

  return { addSolved, addChecked, isFinished }
}
