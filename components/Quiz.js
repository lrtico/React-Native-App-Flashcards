import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Animated } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { purple, white, black, lightPurple, darkPurple, gray } from '../utils/colors'
import { addDeck } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearLocalNotifications, setLocalNotificiation } from '../utils/helpers'
import PageTitle from '../components/PageTitle'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: new Animated.Value(0),
      bounceValue: new Animated.Value(1),
      questionIndex: 0,
      correct: 0,
      incorrect: 0,
      deck: this.props.navigation.state.params.deck
    }
  }

  handleShowAnswer = () => {
    const { opacity, bounceValue } = this.state
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
    Animated.sequence([
      Animated.timing(bounceValue, { toValue: 1.04, duration: 800 }),
      Animated.spring(bounceValue, { toValue: 1, friction: 4 })
      .start()
    ])
  }

  handleAnswer = (choice) => {
    const { opacity } = this.state
    Animated.timing(opacity, { toValue: 0, duration: 1 }).start()
    const totalQuestions = this.state.deck.questions.length
    if (totalQuestions === this.state.questionIndex + 1) {
      this.showResults(choice)
    } else {
      this.setState(() => ({
        questionIndex: this.state.questionIndex + 1,
        choice: this.state[choice]++,
      }))
    }
  }

  resetQuiz = () => {
    this.setState(() => ({
      questionIndex: 0,
      correct: 0,
      incorrect: 0,
    }))
  }

  showResults = (choice) => {
    const totalQuestions = this.state.deck.questions.length
    const lastChoice = choice

    clearLocalNotifications()
    .then(setLocalNotificiation)

    let finalScore = this.state.correct
    switch(lastChoice) {
      case 'correct' :
        finalScore = finalScore + 1
        return (
          this.props.navigation.navigate(
            'Results',
            { currScore: finalScore,
              totalQuestions: totalQuestions,
              onGoBack: () => this.resetQuiz(),
              deckData: this.state.deck,
            }
          )
        )
      default :
        return (
          this.props.navigation.navigate(
            'Results',
            { currScore: finalScore,
              totalQuestions: totalQuestions,
              onGoBack: () => this.resetQuiz(),
              deckData: this.state.deck,
            }
          )
        )
    }
  }

  render() {
    const { opacity, bounceValue, questionIndex, deck, correct } = this.state
    const currQuestion = deck.questions[this.state.questionIndex]
    const totalQuestions = deck.questions.length

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
          <TouchableOpacity
            style={[styles.btnTextWrap, { flex: 1, backgroundColor: lightPurple }]}
            onPress={() => this.handleAnswer('correct')}
          >
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnTextWrap, { flex: 1, backgroundColor: darkPurple }]}
            onPress={() => this.handleAnswer('incorrect')}
          >
            <Text style={styles.btnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
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
