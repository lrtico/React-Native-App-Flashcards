import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { purple, white, black, lightPurple, darkPurple } from '../utils/colors'
import { addDeck } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PageTitle from '../components/PageTitle'

handleShowAnswer = () => {
  console.log('Show answer pressed!')

}

const Quiz = (props) => {
  console.disableYellowBox = true; //Disable the warnings in the simulator
  console.log("Quiz: ", props)
  console.log(`Curr id is ${props.navigation.state.params.deck.id}`)
  const { deck } = props.navigation.state.params.deck
  console.log(`This deck's data is ${ deck }`)

  return (
    <View>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={{flexDirection: 'row', alignItems: 'center'}}
      >
        <MaterialIcons name="keyboard-arrow-left" size={30} color={purple} />
        <Text>{props.navigation.state.params.deck.title} Deck</Text>
      </TouchableOpacity>
      <PageTitle titleText="Quiz" />
      <View style={{marginBottom: 36, marginTop: 36}}>
        <Text style={styles.paragraph}>{props.navigation.state.params.deck.questions[0].question}</Text>
      </View>
      <View style={{marginTop: 36, marginBottom: 3}}>
        <TouchableOpacity
          style={styles.btnTextWrap}
          onPress={handleShowAnswer}
        >
          <Text style={styles.btnText}>Show the answer</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 3, marginBottom: 72, flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity style={[styles.btnTextWrap, { flex: 1, backgroundColor: lightPurple }]}>
          <Text style={styles.btnText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnTextWrap, { flex: 1, backgroundColor: darkPurple }]}>
          <Text style={styles.btnText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Home')}
        style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}
      >
        <Text>Next question</Text>
        <MaterialIcons name="keyboard-arrow-right" size={30} color={purple} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
  paragraph: {
    color: black,
    fontSize: 24,
  },
})

export default Quiz
