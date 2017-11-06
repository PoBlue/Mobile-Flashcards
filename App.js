import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import decks from './reducers/reducer.js'
import { Tabs } from './components/tab.js'
import { Stack } from './components/navigatorView.js'
import { Constants } from 'expo'
import { purple, white } from './utils/colors.js'

function QuizBar({ backgroundColor }) {
  return (
      <StatusBar backgroundColor={backgroundColor} barStytle="light-content"/>
  )
}

const store = createStore(decks)
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <QuizBar backgroundColor={purple}/>
          <Stack/>
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
