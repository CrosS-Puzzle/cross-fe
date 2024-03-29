import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HistoryState } from '@/features/puzzle/constants/types'
import { RootState } from '@/store/store'

const initialState: HistoryState = {
  checked: [],
  solved: [],
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    _addSolved(state, action: PayloadAction<string>) {
      state.solved.push(action.payload)
    },
    _addChecked(state, action: PayloadAction<string>) {
      state.checked.push(action.payload)
    },
  },
})

export const { _addSolved, _addChecked } = historySlice.actions

export const selectSolvedList = (state: RootState) => state.history.solved
export const selectCheckedList = (state: RootState) => state.history.checked
export default historySlice.reducer
