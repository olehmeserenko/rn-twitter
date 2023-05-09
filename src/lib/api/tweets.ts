import { API_URL, authToken } from './config'

export const listTweets = async () => {
  const res = await fetch(`${API_URL}/tweet`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })

  if (res.status !== 200) throw new Error('Error fetching tweets')

  return await res.json()
}

export const getTweet = async (id: string) => {
  const res = await fetch(`${API_URL}/tweet/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })

  if (res.status !== 200) throw new Error('Error fetching tweet')

  return await res.json()
}
