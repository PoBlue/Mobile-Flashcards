import { StackNavigator } from 'react-navigation'
import {Tabs} from './tab.js'
import DeckView from './deckView.js'
import DeckListView from './deckListView.js'
import AnswerView from './answerView.js'
import AddQuizView from './addQuizView.js'
import { Platform, StatusBar } from 'react-native';

export const Stack = StackNavigator({
  Quiz: {
    screen: Tabs,
    navigationOptions: ({navigation}) => ({
      title: `Quiz`,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    }),
  },
  Deck: {
    screen: DeckView,
    navigationOptions: ({navigation}) => ({
      title: `Deck`,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    }),
  },
  Answer: {
    screen: AnswerView,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.deck.title} Deck`,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    }),
  },
  "Add Quiz": {
    screen: AddQuizView,
    navigationOptions: ({navigation}) => ({
      title: `Add Quiz`,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    }),
  }
}, {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  })