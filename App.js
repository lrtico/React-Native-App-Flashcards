import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckList from './containers/DeckList';

const store = createStore( reducer )

export default class App extends React.Component {
  // state = {
  //   data: [
  //     {
  //       'id': '1',
  //       'title': 'React',
  //       'subtitle': "It's just JavaScript",
  //     },
  //     {
  //       'id': '2',
  //       'title': 'JavaScript',
  //       'subtitle': 'Making the dollar hollar',
  //     },
  //     {
  //       'id': '3',
  //       'title': 'Sass',
  //       'subtitle': 'Syntastically awesome style sheets',
  //     },
  //   ]
  // }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <DeckList />
        </View>
      </Provider>
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
