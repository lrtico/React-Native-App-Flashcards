import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: ['31', '421', '8', '44', '2934', '2']
    }
  }
  render() {
    const { data } = this.state
    return (
      <View style={styles.container}>
        <DeckList data={data} />
        {/* <Text>List goes here...</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
