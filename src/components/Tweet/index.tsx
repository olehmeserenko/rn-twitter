import { FC } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

import { Entypo } from '@expo/vector-icons'

import { IconButton } from '@/components/IconButton'

import { Link } from 'expo-router'
import { TweetType } from './types'

interface TweetProps {
  tweet: TweetType
}

export const Tweet: FC<TweetProps> = ({ tweet }) => (
  <Link href={`tweet/${tweet.id}`} asChild>
    <Pressable style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>
            {tweet.user.username} &#xb7; {'2h'}
          </Text>
          <Entypo
            style={styles.threeDots}
            name={'dots-three-horizontal'}
            size={16}
            color={'gray'}
          />
        </View>
        <Text style={styles.content}>{tweet.content}</Text>
        {!!tweet.image && (
          <Image source={{ uri: tweet.image }} style={styles.image} />
        )}
        <View style={styles.footer}>
          <IconButton icon={'comment'} text={tweet.numberOfComments} />
          <IconButton icon={'retweet'} text={tweet.numberOfRetweets} />
          <IconButton icon={'heart'} text={tweet.numberOfLikes} />
          <IconButton icon={'chart'} text={tweet.impressions || 0} />
          <IconButton icon={'share-apple'} />
        </View>
      </View>
    </Pressable>
  </Link>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
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
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15,
  },
  header: {
    flexDirection: 'row',
    gap: 5,
  },
  username: {
    color: 'gray',
  },
  threeDots: {
    marginLeft: 'auto',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
})
