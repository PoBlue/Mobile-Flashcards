import { StackNavigator } from 'react-navigation'
import {Tabs} from './tab.js'
import DeckView from './deckView.js'
import DeckListView from './deckListView.js'
import AnswerView from './answerView.js'
import AddQuizView from './addQuizView.js'

export const Stack = StackNavigator({
  Quiz: {
    screen: Tabs
  },
  Deck: {
    screen: DeckView
  },
  Answer: {
    screen: AnswerView
  },
  "Add Quiz": {
    screen: AddQuizView
  }
})