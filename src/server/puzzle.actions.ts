'use server'

const API_BASE_URL = 'https://api.cross-word.online/v1'

export async function getPuzzle(id: string, withAnswer = false) {
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
