'use client'

import { useAppSelector, useAppDispatch } from '@/store/hooks'
import {
  _addSolved,
  _addChecked,
  selectSolvedList,
  selectCheckedList,
} from '@/features/puzzle/store/historySlice'

export const useHistory = () => {
  const dispatch = useAppDispatch()

  const solvedList = useAppSelector(selectSolvedList)
  const checkedList = useAppSelector(selectCheckedList)

  const addSolved = (id: string) => {
    dispatch(_addSolved(id))
  }

  const addChecked = (id: string) => {
    dispatch(_addChecked(id))
  }

  const isFinished = (id: string) => {
    return solvedList.includes(id) || checkedList.includes(id)
  }

  return { addSolved, addChecked, isFinished }
}
