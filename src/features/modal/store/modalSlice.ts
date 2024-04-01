import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store/store'

export type Modal = {
  type: string
  props: any
}

const initialState: Modal[] = []

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open(state, action: PayloadAction<Modal>) {
      const { type, props } = action.payload
      return [...state, { type, props }]
    },
    close(state) {
      state.pop()
    },
  },
})

export const { open, close } = modalSlice.actions

export const selectModals = (state: RootState) => state.modal
export default modalSlice.reducer
