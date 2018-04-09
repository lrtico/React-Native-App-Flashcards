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
    console.log('activate deck navigation!', deckData)
    const {navigation, decks } = this.props
    navigation.navigate(
      'Deck',
      { deck: deckData }
    )
  }

  render() {
    console.disableYellowBox = true; //Disable the warnings in the simulator
    const { decks, navigation } = this.props
    console.log('data', this.props)
    return (
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <MaterialIcons
          name="home"
          size={30}
          color={black}
        />
        <PageTitle titleText="Decks" />
        <View>
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
  return {
    decks: state.decks
  }
}

export default connect(
  mapStateToProps
)(DeckList)
