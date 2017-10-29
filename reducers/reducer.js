import { 
    CREATE_DECK, 
    GET_ALL_DECKS,
    CREATE_QUIZ
} from '../actions/deckAction.js'

/*
{
  id: {
    deckTitle,
    questions: [
      {
        question,
        answer,
      }
    ]
  },
}
*/
function decks(state={}, action) {
  switch(action.type) {
    case CREATE_DECK:
      return {
        ...state,
        [action.deck.title]: action.deck,
      }
    case GET_ALL_DECKS:
      const decks = action.decks
      return {...decks}
    case CREATE_QUIZ:
      const newState = {...state}
      newState[action.deckTitle].questions = newState[action.deckTitle].questions.concat(action.quiz) 
      return newState
    default:
      return {
        ...state
      }
  }
}

export default decks