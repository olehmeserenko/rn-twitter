import { API_URL } from './config'

import * as SecureStore from 'expo-secure-store'

export const listTweets = async () => {
  const authToken = await SecureStore.getItemAsync('authToken')
  const res = await fetch(`${API_URL}/tweet`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })

  if (res.status !== 200) throw new Error('Error fetching tweets')

  return await res.json()
}

export const getTweet = async (id: string) => {
  const authToken = await SecureStore.getItemAsync('authToken')
  const res = await fetch(`${API_URL}/tweet/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })

  if (res.status !== 200) throw new Error('Error fetching tweet')

  return await res.json()
}

export const createTweet = async (data: { content: string }) => {
  const authToken = await SecureStore.getItemAsync('authToken')
  const res = await fetch(`${API_URL}/tweet/`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (res.status !== 200) throw new Error('Error creating tweet')

  return await res.json()
}
