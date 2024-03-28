export type Puzzle = {
  id: string
  views: number
  wins: number
  rowSize: number
  colSize: number
  category: string[]
  answerInfos: {
    [id: string]: AnswerInfo
  }
}

export type AnswerInfo = {
  coords: [number, number]
  direction: number
  length: number
  word: Word
}

export type Word = {
  id: string
  value: string | null
  description: string
}

export type PuzzleState = {
  puzzle: Puzzle | null
  totalWords: number
  solvedWords: number
  selectedWord: string | null
}
