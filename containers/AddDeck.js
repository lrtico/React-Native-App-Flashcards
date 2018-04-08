import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { purple, white } from '../utils/colors'
import { addDeck } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PageTitle from '../components/PageTitle'

class AddDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deckName: ''
    }
  }

  handleAddDeck = () => {
    console.log('deckname: ', this.state.deckName);
    this.props.addDeck({id:'4', title: this.state.deckName, subtitle: 'Lorem'})
    this.setState({ deckName: '' })
  }

  render() {
console.disableYellowBox = true;
    const { deckName } = this.state.deckName
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color={purple} />
          <Text>Deck List</Text>
        </TouchableOpacity>
        <PageTitle titleText="Add a deck" />
        <View style={{marginBottom: 18, marginTop: 36}}>
          <TextInput
            style={{borderBottomColor: purple, borderBottomWidth: 1, fontSize: 18}}
            placeholder='Name of the deck'
            onChangeText={(deckName) => this.setState({ deckName })}
            value={ this.state.deckName }
          />
        </View>
        <TouchableOpacity
          onPress={this.handleAddDeck}
          style={styles.btnTextWrap}
        >
          <Text style={styles.btnText}>Add Deck</Text>
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
  return bindActionCreators({ addDeck }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(AddDeck)