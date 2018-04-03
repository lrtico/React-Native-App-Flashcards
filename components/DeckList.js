import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DeckListItem from './DeckListItem';

class DeckList extends Component {
  render() {
    const { data } = this.props;
    return (
      <View>
        {data.map((item) =>
          <DeckListItem key={data} data={item} />
        )}
      </View>

    )
  }
}

export default DeckList;
