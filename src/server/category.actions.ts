'use server'

const API_BASE_URL = 'https://api.cross-word.online/v1'

export default async function getCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/puzzle/categories`, {
      next: { revalidate: 3600 * 3 },
      // Refresh every 3 hours
    })

    const responseBody = await response.json()
    return responseBody.data
  } catch (error) {
    return { error }
  }
}
