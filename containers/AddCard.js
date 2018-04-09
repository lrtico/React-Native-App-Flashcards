import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { purple, white } from '../utils/colors'
import { addCard } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { randomId } from '../utils/helpers'
import PageTitle from '../components/PageTitle'

class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deckName: '',
      question: '',
      answer: '',
    }
  }

  handleAddCard = () => {
    console.log(`The question is $(this.state.deckName) the answer is $(this.state.answer)`);
    const deckId = this.props.navigation.state.params.deckId
    this.props.addCard({ deckId, id: randomId(), question: this.state.question, answer: this.state.answer })
    this.setState({ deckName: '', question: '', answer: '' })
    this.props.navigation.navigate('Home')
  }

  render() {
    console.disableYellowBox = true; //Disable the warnings in the simulator
    console.log("Add Card: ", this.props)
    console.log(`Curr id is ${this.props.navigation.state.params.deckId}`)
    const { question, answer } = this.state
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
          style={{flexDirection: 'row', alignItems: 'center'}}
        >
          <MaterialIcons name="keyboard-arrow-left" size={30} color={purple} />
          <Text>Deck List</Text>
        </TouchableOpacity>
        <PageTitle titleText="Add a card" />
        <View style={{marginBottom: 18, marginTop: 36}}>
          <TextInput
            style={{borderBottomColor: purple, borderBottomWidth: 1, fontSize: 24}}
            placeholder='Type your question'
            onChangeText={(question) => this.setState({ question })}
            value={ this.state.deckName }
          />
        </View>
        <View style={{marginBottom: 36, marginTop: 18}}>
          <TextInput
            style={{borderBottomColor: purple, borderBottomWidth: 1, fontSize: 24}}
            placeholder='Type your answer'
            onChangeText={(answer) => this.setState({ answer })}
            value={ this.state.deckName }
          />
        </View>
        <TouchableOpacity
          onPress={this.handleAddCard}
          style={styles.btnTextWrap}
        >
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnTextWrap: {
    backgroundColor: purple,
    marginTop: 18,
    padding: 18,
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
  }
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCard }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(AddCard)
