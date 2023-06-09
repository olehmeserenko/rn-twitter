import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

import { createTweet } from '@/lib/api/tweets'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const user = {
  id: 'u1',
  username: 'VadimNotJustDev',
  name: 'Vadim',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
}

export default function NewTweet() {
  const [text, setText] = useState('')
  const router = useRouter()

  const queryClient = useQueryClient()

  const { mutateAsync, isLoading, isError } = useMutation({
    mutationFn: createTweet,
    onSuccess: (data) => {
      queryClient.setQueriesData(['tweets'], (existingTweets: any) => [
        data,
        ...existingTweets,
      ])
    },
  })

  const onTweetPress = async () => {
    try {
      await mutateAsync({ content: text })
      setText('')
      router.back()
    } catch (error) {
      console.info(`Error creating tweet: ${error}`)
    }
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href={'../'} style={styles.link}>
            {'Cancel'}
          </Link>
          {isLoading && <ActivityIndicator />}
          <Pressable
            onPress={onTweetPress}
            style={[styles.button, !text && styles.buttonDisabled]}
            disabled={!text}
          >
            <Text style={styles.buttonText}>{'Tweet'}</Text>
          </Pressable>
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: user.image }} style={styles.image} />
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder={"What's happening?"}
            multiline
            numberOfLines={5}
            style={styles.textInput}
          />
        </View>

        {isError && <Text>{'Something went wrong!'}</Text>}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    padding: 10,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#1C9BF0',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
  },
})
