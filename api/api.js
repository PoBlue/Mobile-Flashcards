import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = "DECK_STORAGE_KEY"

export function fetchDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => JSON.parse(results))
}

export function submitDeck (deck) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [deck.title]: deck
  }))
}

export function removeDeck (deck) {
  const key = deck.title
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}

export function addQuestion(question, deckTitle) {
  const key = deckTitle
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key].questions = data[key].questions.concat(question)
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}