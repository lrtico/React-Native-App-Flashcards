import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { purple, black, white, lightPurple, darkPurple, yellow } from '../utils/colors'
import PageTitle from './PageTitle'

const QuizResults = props => {
  const { currScore, totalQuestions, deckData } = props.navigation.state.params
  console.log('QuizResults props: ', props)

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.state.params.onGoBack()
          props.navigation.goBack()
        }}
        style={{flexDirection: 'row', alignItems: 'center'}}
      >
        <MaterialIcons name="keyboard-arrow-left" size={30} color={purple} />
        <Text>Back</Text>
      </TouchableOpacity>
      <PageTitle titleText="Results" />
      <View style={[styles.container, { marginBottom: 72 }]}>
        <View style={[styles.container, {alignSelf: 'center'}]}>
          <View style={styles.numberCorrectWrap}>
            <Text style={styles.numberCorrect}>{Math.round(currScore/totalQuestions*100)}</Text>
          </View>
          <Text style={{ textAlign: 'center' }}>{currScore} out of {totalQuestions} correct. Practice makes perfect!</Text>
        </View>
      </View>
      <View style={{marginTop: 3, marginBottom: 72, flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          style={[styles.btnTextWrap, { flex: 1, backgroundColor: lightPurple, marginRight: 3 }]}
          onPress={() => {
            props.navigation.state.params.onGoBack()
            props.navigation.goBack()
          }}
        >
          <Text style={styles.btnText}>Restart quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnTextWrap, { flex: 1, backgroundColor: darkPurple, marginLeft: 3 }]}
          onPress={() => props.navigation.navigate(
            'Deck',
            { deckId: props.navigation.state.params.deckData.id }
          )}
        >
          <Text style={styles.btnText}>Back to deck</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerCentered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberCorrectWrap: {
    backgroundColor: yellow,
    borderRadius: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 72,
    marginBottom: 9,
    width: 270,
    height: 270,
  },
  numberCorrect: {
    fontSize: 108,
    fontWeight: 'bold',
  },
  btnTextWrap: {
    backgroundColor: purple,
    marginTop: 18,
    paddingTop: 36,
    paddingRight: 18,
    paddingBottom: 36,
    paddingLeft: 18,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'rgba(0,0,0,.27)',
    shadowOpacity: 0.6,
  },
  btnText: {
    color: white,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
export default QuizResults
