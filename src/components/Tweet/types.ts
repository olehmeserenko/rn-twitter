import { User } from '@/types/types'

export interface TweetType {
  id: string
  user: User
  createdAt: string
  content: string
  image?: string
  numberOfComments?: number
  numberOfRetweets?: number
  numberOfLikes?: number
  impressions?: number
}
