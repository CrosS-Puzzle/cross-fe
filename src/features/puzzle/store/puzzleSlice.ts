import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Puzzle, PuzzleState } from '@/features/puzzle/constants/types'
import { RootState } from '@/store/store'

const initialState: PuzzleState = {
  puzzle: null,
  totalWords: 0,
  solvedWords: 0,
  selectedWord: null,
}

export const puzzleSlice = createSlice({
  name: 'puzzle',
  initialState,
  reducers: {
    setPuzzle(state, action: PayloadAction<Puzzle>) {
      state.puzzle = action.payload
      state.totalWords = Object.keys(action.payload.answerInfos).length
      state.solvedWords = 0
    },
    setWord(state, action: PayloadAction<string>) {
      state.selectedWord = action.payload
    },
    resetWord(state) {
      state.selectedWord = null
    },
    addAnswer(
      state,
      action: PayloadAction<{
        id: string
        value: string
      }>,
    ) {
      state.solvedWords += 1
      state.selectedWord = null
      if (state.puzzle) {
        state.puzzle.answerInfos[action.payload.id].word.value =
          action.payload.value
      }
    },
  },
})

export const { setPuzzle, setWord, resetWord, addAnswer } = puzzleSlice.actions

export const selectPuzzle = (state: RootState) => state.puzzle.puzzle
export const selectSelectedWord = (state: RootState) =>
  state.puzzle.selectedWord
export const selectSolvedCount = (state: RootState) => state.puzzle.solvedWords
export const selectTotalCount = (state: RootState) => state.puzzle.totalWords

export default puzzleSlice.reducer
