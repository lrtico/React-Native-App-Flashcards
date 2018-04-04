import React from 'react'
import { View, Text } from 'react-native'

const DeckListItem = props => {
  const { data } = props

  return (
    <View>
      <Text style={{fontSize: 45}}>{data.title}</Text>
      <Text style={{fontSize: 24, marginBottom: 18}}>{data.title}</Text>
    </View>
  )
}

export default DeckListItem
