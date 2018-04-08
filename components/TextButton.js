import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple, white } from '../utils/colors'

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity>
      <Text style={[styles.textBtn, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textBtn: {
    backgroundColor: purple,
    color: white,
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 18,
    padding: 18,
    textAlign: 'center',
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'rgba(0,0,0,.27)',
    shadowOpacity: 0.6,
  }
})
