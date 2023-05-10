import React, { useState } from 'react'
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

import { useRouter } from 'expo-router'

import { login } from '@/lib/api/auth'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const onSignIn = async () => {
    try {
      await login({ email })
      router.push({
        pathname: '/authenticate',
        params: { email },
      })
    } catch (e) {
      Alert.alert('Error', 'Error signing in')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{'Sign in or create an account'}</Text>

      <TextInput
        placeholder={'Email'}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize={'none'}
      />

      <Pressable style={styles.button} onPress={onSignIn}>
        <Text style={styles.buttonText}>{'Sign in'}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  label: {
    fontSize: 24,
    marginVertical: 5,
    color: 'gray',
  },
  error: {
    marginVertical: 5,
    color: 'red',
  },
  input: {
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    fontSize: 20,
    marginVertical: 5,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#050A12',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})

export default SignIn
