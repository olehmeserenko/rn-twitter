import React, { useState } from 'react'
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

import { useSearchParams } from 'expo-router'

import { authenticate } from '@/lib/api/auth'

const Authenticate = () => {
  const [code, setCode] = useState('')
  const { email } = useSearchParams()

  const onConfirm = async () => {
    if (typeof email !== 'string') {
      return
    }
    try {
      const res = await authenticate({
        email: email.toLowerCase(),
        emailToken: code,
      })
      console.info(res)
    } catch (e) {
      Alert.alert('Error', 'Error confirming code')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{'Confirm your email'}</Text>

      <TextInput
        placeholder={'Authentication code'}
        value={code}
        onChangeText={setCode}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={onConfirm}>
        <Text style={styles.buttonText}>{'Confirm'}</Text>
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

export default Authenticate
