import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { purple, white, gray, black } from '../utils/colors'
import { NavigationActions } from 'react-navigation'
import PageTitle from '../components/PageTitle'
import AddButtonLabel from '../components/AddButtonLabel'

class Deck extends Component {
  componentDidMount() {
    console.log('Mounted!')
  }
  render() {
    console.disableYellowBox = true; //Disable the warnings in the simulator
    console.log('Deck view: ', this.props)
    console.log(`Curr id is ${this.props.navigation.state.params.deck.id}`)
    const { decks, navigation } = this.props

    return (
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
          style={{flexDirection: 'row', alignItems: 'center'}}
        >
          <MaterialIcons name="keyboard-arrow-left" size={30} color={purple} />
          <Text>Deck List</Text>
        </TouchableOpacity>
        <PageTitle titleText={this.props.navigation.state.params.deck.title} />
        <Text style={{ fontSize: 24, color: gray }}>{this.props.navigation.state.params.deck.questions.length} questions</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            { deck: this.props.navigation.state.params.deck }
          )}
          style={[styles.btnTextWrap, { marginTop: 72 }]}
        >
          <Text style={styles.btnText}>Start a quiz!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnCircle}
          onPress={() => this.props.navigation.navigate(
            'AddCard',
            { deckId: this.props.navigation.state.params.deck.id }
          )}
          >
          <View style={styles.btn__wrap}>
            <MaterialIcons
              name="add"
              size={30}
              color={white}
              style={{padding: 9}}
            />
          </View>
          <AddButtonLabel btnLabel="Card" />
        </TouchableOpacity>
      </View>
    )
  }
}

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

export default Deck
