import { Entypo } from '@expo/vector-icons'
import { FlatList, StyleSheet, View } from 'react-native'

import { Link } from 'expo-router'

import { Tweet } from '@/components/Tweet'
import { tweets } from '~/assets/data/tweets'

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
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
