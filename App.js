import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';

export default class App extends React.Component {
  state = {
    data: [
      {
        'id': '1',
        'title': 'React',
        'subtitle': "It's just JavaScript",
      },
      {
        'id': '2',
        'title': 'JavaScript',
        'subtitle': 'Making the dollar hollar',
      },
      {
        'id': '3',
        'title': 'Sass',
        'subtitle': 'Syntastically awesome style sheets',
      },
    ]
  }

  render() {
    const { data } = this.state

    return (
      <View style={styles.container}>
        <DeckList data={data} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
