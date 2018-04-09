import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Animated } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { purple, white, black, lightPurple, darkPurple, gray } from '../utils/colors'
import { addDeck } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PageTitle from '../components/PageTitle'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: new Animated.Value(0),
      bounceValue: new Animated.Value(1),
      questionIndex: 0,
    }
  }

  handleShowAnswer = () => {
    console.log('Show answer pressed!')
    const { opacity, bounceValue } = this.state
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
    Animated.sequence([
      Animated.timing(bounceValue, { toValue: 1.84, duration: 800 }),
      Animated.spring(bounceValue, { toValue: 1, friction: 4 })
      .start()
    ])
  }

  handleNextQuestion = () => {
    console.log('Next question pressed!')
    const { opacity } = this.state
    Animated.timing(opacity, { toValue: 0, duration: 1 }).start()
    this.setState(() => ({
      questionIndex: this.state.questionIndex + 1
    }))
  }

  render() {
    console.disableYellowBox = true; //Disable the warnings in the simulator
    console.log("Quiz: ", this.props)
    console.log(`Curr id is ${this.props.navigation.state.params.deck.id}`)
    const { deck } = this.props.navigation.state.params
    console.log(`This deck's data is ${ deck }`)
    const { opacity, bounceValue, questionIndex } = this.state
    const currQuestion = deck.questions[this.state.questionIndex]
    console.log('currQuestion: ', currQuestion)

    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{flexDirection: 'row', alignItems: 'center'}}
        >
          <MaterialIcons name="keyboard-arrow-left" size={30} color={purple} />
          <Text>{deck.title} Deck</Text>
        </TouchableOpacity>

        <PageTitle titleText="Quiz" />
        <Text style={{ fontSize: 18, color: gray }}>Question {questionIndex + 1} of {deck.questions.length}</Text>

        <View style={{marginBottom: 18, marginTop: 36}}>
          <Text style={[styles.paragraph, { fontWeight: 'bold' }]}>{currQuestion.question}</Text>
          <Animated.Text style={[styles.paragraph, { opacity, marginTop: 18, transform: [{scale: bounceValue}] }]}>{currQuestion.answer}</Animated.Text>
        </View>

        <View style={{marginTop: 36, marginBottom: 3}}>
          <TouchableOpacity
            style={styles.btnTextWrap}
            onPress={this.handleShowAnswer}
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
          onPress={this.handleNextQuestion}
          style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}
        >
          <Text>Next question</Text>
          <MaterialIcons name="keyboard-arrow-right" size={30} color={purple} />
        </TouchableOpacity>
      </View>
    )
  }
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
