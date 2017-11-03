import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import decks from './reducers/reducer.js'
import { Tabs } from './components/tab.js'
import { Constants } from 'expo'
import { purple } from './utils/colors.js'

function QuizBar({ backgroundColor }) {
  return (
    <View height={Constants.statusBarHeight}>
      <StatusBar translucent backgroundColor={backgroundColor} barStytle="light-content"/>
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(decks)}>
        <View style={styles.container}>
          <QuizBar backgroundColor={purple}/>
          <Tabs/>
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
