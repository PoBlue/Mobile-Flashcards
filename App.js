import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import decks from './reducers/reducer.js'
import DeckListView from './components/deckListView.js'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(decks)}>
        <View style={styles.container}>
          <DeckListView/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
