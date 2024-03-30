'use server'

const API_BASE_URL = 'https://api.cross-word.online/v1'

export async function getPuzzles(
  catId: string,
  sortBy: 'asc' | 'desc',
  { pageParam = 0 },
) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/puzzle/list?category=${catId}&sort=${sortBy}&page=${pageParam}`,
    )

    const responseBody = await response.json()

    return responseBody.data
  } catch (error) {
    return { error }
  }
}

export async function getPuzzle(id: string, withAnswer: boolean = false) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/puzzle?id=${id}&answer=${withAnswer.toString()}`,
    )

    const responseBody = await response.json()

    return responseBody.data
  } catch (error) {
    return { error }
  }
}

export async function checkWord(id: string, input: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/puzzle/check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        input,
      }),
    })

    const responseBody = await response.json()

    return responseBody.data.success
  } catch (error) {
    return false
  }
}
