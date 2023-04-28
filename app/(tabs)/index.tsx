import { Image, StyleSheet } from 'react-native'

import { Text, View } from '@/components/Themed'

import { tweets } from '~/assets/data/tweets'

const tweet = tweets[0]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontWeight: 'bold',
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
})
