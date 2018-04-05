import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import DeckListItem from '../components/DeckListItem'

class DeckList extends Component {

  render() {
    const { decks } = this.props
    console.log('data', this.props)
    return (
      <View>
        {decks.map((item) =>
          <DeckListItem key={item.id} data={item} />
        )}
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    decks: state.decks
  }
}

export default connect(
  mapStateToProps
)(DeckList)
