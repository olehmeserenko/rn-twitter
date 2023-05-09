import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { Entypo } from '@expo/vector-icons'
import { Link } from 'expo-router'

import { Tweet } from '@/components/Tweet'
import { listTweets } from '@/lib/api/tweets'
import { useQuery } from '@tanstack/react-query'

export default function FeedScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tweets'],
    queryFn: listTweets,
  })

  if (isLoading) return <ActivityIndicator />

  if (error) return <Text>{'Something went wrong!'}</Text>

  return (
    <View style={styles.page}>
      <FlatList data={data} renderItem={({ item }) => <Tweet tweet={item} />} />
      <Link href={'/new-tweet'} asChild>
        <Entypo
          name={'plus'}
          size={24}
          color={'white'}
          style={styles.floatingButton}
        />
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  floatingButton: {
    backgroundColor: '#1C9BF0',
    padding: 15,
    borderRadius: 25,
    position: 'absolute',
    bottom: 15,
    right: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
})
