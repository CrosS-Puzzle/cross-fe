'use server'

const API_BASE_URL = 'https://api.cross-word.online/v1'

export async function getPuzzle(id: string, withAnswer: boolean = false) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/puzzle?id=${id}&answer=${withAnswer.toString()}`,
    )

    const responseBody = await response.json()

    return responseBody.data
  } catch (error) {
    return { error: error }
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
        id: id,
        input: input,
      }),
    })

    const responseBody = await response.json()

    return responseBody.data.success
  } catch (error) {
    return false
  }
}
