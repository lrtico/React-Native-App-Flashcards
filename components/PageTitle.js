import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { black } from '../utils/colors'

const PageTitle = props => {
  return (
    <View>
      <Text style={styles.title}>{props.titleText}</Text>
    </View>
  )
}

export default PageTitle

const styles = StyleSheet.create({
  title: {
    color: black,
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 18,
  },
})
