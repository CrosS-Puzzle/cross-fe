'use client'

import { useAppSelector, useAppDispatch } from '@/store/hooks'
import {
  setPuzzle,
  setWord,
  resetWord,
  addAnswer,
  selectPuzzle,
  selectSelectedWord,
  selectSolvedCount,
  selectTotalCount,
} from '@/features/puzzle/store/puzzleSlice'
import { AnswerInfo, Puzzle } from '@/features/puzzle/constants/types'

export const usePuzzle = () => {
  const dispatch = useAppDispatch()

  const puzzle = useAppSelector(selectPuzzle)
  const selectedWord = useAppSelector(selectSelectedWord)
  const solvedCount = useAppSelector(selectSolvedCount)
  const totalCount = useAppSelector(selectTotalCount)

  const initiatePuzzle = (newPuzzle: any) => {
    if (puzzle && puzzle.id === newPuzzle.id) {
      return
    }

    resetCurrentWord()

    const parsedPuzzle: Puzzle = {
      id: newPuzzle.id,
      views: newPuzzle.views,
      wins: newPuzzle.wins,
      rowSize: newPuzzle.rowSize,
      colSize: newPuzzle.colSize,
      category: newPuzzle.category,
      answerInfos: newPuzzle.answerInfos.reduce(
        (acc: { [id: string]: AnswerInfo }, answer: AnswerInfo) => {
          acc[answer.word.id] = {
            coords: answer.coords,
            direction: answer.direction,
            length: answer.length,
            word: {
              id: answer.word.id,
              value: answer.word.value,
              description: answer.word.description,
            },
          }
          return acc
        },
        {} as { [id: string]: AnswerInfo },
      ),
    }

    dispatch(setPuzzle(parsedPuzzle))
  }

  const setCurrentWord = (id: string) => {
    dispatch(setWord(id))
  }

  const resetCurrentWord = () => {
    dispatch(resetWord())
  }

  const addAnswerInfo = (id: string, value: string) => {
    dispatch(addAnswer({ id, value }))
  }

  return {
    initiatePuzzle,
    addAnswerInfo,
    resetCurrentWord,
    setCurrentWord,
    puzzle,
    selectedWord,
    solvedCount,
    totalCount,
  }
}
