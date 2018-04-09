import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { purple, black } from '../utils/colors'

const DeckListItem = props => {
  const { data } = props

  return (
    <View style={[styles.container, { borderBottomWidth: 1, marginBottom: 9 }]}>
      <Text style={{fontSize: 36}}>{data.title}</Text>
      <View style={styles.container}>
        <Text style={{fontSize: 24, marginBottom: 18}}>{data.questions.length}</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color={purple} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
export default DeckListItem
