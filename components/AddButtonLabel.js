import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'

const AddButtonLabel = props => {
  return (
    <View>
      <Text style={styles.label}>{props.btnLabel}</Text>
    </View>
  )
}

export default AddButtonLabel

const styles = StyleSheet.create({
  label: {
    color: gray,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 9,
  },
})
