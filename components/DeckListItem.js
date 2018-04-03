import React from 'react';
import { View, Text } from 'react-native';

const DeckListItem = props => {
  const { data } = props
  return (
    <View>
      <Text>{data}</Text>
    </View>
  )
}

export default DeckListItem;
