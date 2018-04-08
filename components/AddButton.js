import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { purple, gray, white } from '../utils/colors'
import AddButtonLabel from './AddButtonLabel'

const AddButton = () => {
  return (
    //button UI goes here
    <TouchableOpacity style={styles.btnCircle}>
      <View style={styles.btn__wrap}>
        <MaterialIcons name="add" size={30} color={white} style={{padding: 9}} />
      </View>
      <AddButtonLabel btnLabel="Deck" />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
  btnCircle: {
    alignItems: 'center',
    flex: 1,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    position: 'absolute',
    bottom: 18,
    right: 18,
  },
  btn__wrap: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: purple,
    borderRadius: 50,
    height: 72,
    width: 72,
  },
})
