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
    ADD_SOLVED(state, action: PayloadAction<string>) {
      state.solved.push(action.payload)
    },
    ADD_CHECKED(state, action: PayloadAction<string>) {
      state.checked.push(action.payload)
    },
  },
})

export const { ADD_SOLVED, ADD_CHECKED } = historySlice.actions

export const selectSolvedList = (state: RootState) => state.history.solved
export const selectCheckedList = (state: RootState) => state.history.checked
export default historySlice.reducer
