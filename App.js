import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import reducer from './reducers'
import DeckList from './containers/DeckList'
import AddDeck from './containers/AddDeck'
import Deck from './components/Deck'
import AddCard from './containers/AddCard'
import Quiz from './components/Quiz'
import QuizResults from './components/QuizResults'
import { white } from './utils/colors'

const store = createStore( reducer )

// const Tabs = TabNavigator(
//   {
//     Home: {screen: DeckList},
//     AddDeck: {screen: AddDeck},
//   },
//   {
//     animationEnabled: true,
//     swipeEnabled: true,
//   },
// )

const Stack = StackNavigator(
  {
    Home: {
      screen: DeckList,
    },
    AddDeck: {
      screen: AddDeck,
    },
    Deck: {
      screen: Deck,
    },
    AddCard: {
      screen: AddCard,
    },
    Quiz: {
      screen: Quiz,
    },
    Results: {
      screen: QuizResults,
    },
  },
  {
    headerMode: 'none',
    mode: 'card',
  },
)

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
          <Stack />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingTop: 36,
  },
})
