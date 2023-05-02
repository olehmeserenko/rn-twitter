import { Text } from 'react-native'

import { useSearchParams } from 'expo-router'

import { Tweet } from '@/components/Tweet'
import { tweets } from '~/assets/data/tweets'

export default function TweetScreen() {
  const { id } = useSearchParams()

  const tweet = tweets.find((item) => item.id === id)

  if (!tweet)
    return (
      <Text>
        {'Tweet '}
        {id}
        {' was not found'}
      </Text>
    )

  return <Tweet tweet={tweet} />
}
