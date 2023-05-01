import { ComponentProps, FC } from 'react'
import { StyleSheet } from 'react-native'

import { EvilIcons } from '@expo/vector-icons'

import { Text, View } from '@/components/Themed'

interface IconButtonProps {
  icon: ComponentProps<typeof EvilIcons>['name']
  text?: string | number
}

export const IconButton: FC<IconButtonProps> = ({ icon, text }) => (
  <View style={styles.iconGroup}>
    <EvilIcons name={icon} size={22} color={'gray'} />
    <Text style={styles.iconGroupText}>{text}</Text>
  </View>
)

const styles = StyleSheet.create({
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconGroupText: {
    fontSize: 12,
    color: 'gray',
  },
})
