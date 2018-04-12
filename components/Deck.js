import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { purple, white, gray, black, lightPurple, darkPurple } from '../utils/colors'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { deleteDeck } from '../actions'
import { bindActionCreators } from 'redux'
import PageTitle from '../components/PageTitle'
import AddButtonLabel from '../components/AddButtonLabel'

class Deck extends Component {

  handleDeleteDeck = () => {
    const deckId = this.props.deck.id
    this.props.deleteDeck( deckId )
    this.props.navigation.navigate('Home')
  }

  refreshPage = () => {
    this.setState({
      refresh: ''
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.deck === undefined) {
      return false
    }
    return true
  }

  render() {
    const { deck, navigation } = this.props
    return (
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{flexDirection: 'row', alignItems: 'center'}}
        >
          <MaterialIcons name="keyboard-arrow-left" size={30} color={purple} />
          <Text>Deck List</Text>
        </TouchableOpacity>
        <PageTitle titleText={deck.title} />
        <Text style={{ fontSize: 24, color: gray }}>{deck.questions.length} questions</Text>

        <View style={{marginTop: 72, flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            style={[styles.btnTextWrap, { flex: 1, backgroundColor: lightPurple, marginRight: 3 }]}
            onPress={this.handleDeleteDeck}
          >
            <Text style={styles.btnText}>Delete deck</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'Quiz',
              { deck: deck }
            )}
            disabled={deck.questions.length > 0 ? false : true}
            style={deck.questions.length > 0
              ? [styles.btnTextWrap, { flex: 1, backgroundColor: darkPurple, marginLeft: 3 }]
              : [styles.btnTextWrapDisabled, { flex: 1, marginLeft: 3 }]
            }
          >
            <Text style={styles.btnText}>Start a quiz!</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.btnCircle}
          onPress={() => navigation.navigate(
            'AddCard',
            { deckId: deck.id,
              deck: deck,
              onGoBack: () => this.refreshPage(),
            }
          )}
          >
          <View style={styles.btnWrap}>
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
  btnWrap: {
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
  btnTextWrapDisabled: {
    backgroundColor: gray,
    marginTop: 18,
    paddingTop: 36,
    paddingRight: 18,
    paddingBottom: 36,
    paddingLeft: 18,
  },
  btnText: {
    color: white,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

function mapStateToProps (state, props) {
  const deckId = props.navigation.state.params.deckId
  return {
    deck: state.decks.filter( deck => deck.id === deckId )[0]
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteDeck }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck)
