import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import DeckListItem from '../components/DeckListItem'
import AddButtonLabel from '../components/AddButtonLabel'
import PageTitle from '../components/PageTitle'
import { purple, white, gray, black } from '../utils/colors'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'


class DeckList extends Component {

  handleDeckNavigation = (deckData) => {
    this.props.navigation.navigate(
      'Deck',
      { deckId: deckData.id }
    )
  }

  componentDidMount() {
    console.log(`The props are: ${this.props}`)
  }

  render() {
    const { decks, navigation } = this.props
    console.disableYellowBox = true;
    return (
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <MaterialIcons
          name="home"
          size={30}
          color={black}
        />
        <PageTitle titleText="Decks" />
        <View style={{ marginTop: 36 }}>
          {decks.map((item) =>
            <TouchableOpacity key={item.id}
              onPress={() => this.handleDeckNavigation(item)}
            >
              <DeckListItem data={item} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={styles.btnCircle}
          onPress={() => this.props.navigation.navigate('AddDeck')}
          >
          <View style={styles.btn__wrap}>
            <MaterialIcons
              name="add"
              size={30}
              color={white}
              style={{padding: 9}}
            />
          </View>
          <AddButtonLabel btnLabel="Deck" />
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
})

function mapStateToProps (state) {
  console.log(`The mapStateToProps state = ${state}`)
  return {
    decks: state.decks
  }
}

export default connect(
  mapStateToProps
)(DeckList)
