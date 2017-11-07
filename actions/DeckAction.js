export const GET_ALL_DECKS = "GET_ALL_DECKS"
export const CREATE_DECK = "CREATE_DECK"
export const CREATE_QUIZ = "CREATE_QUIZ"

export function getDecksAction(decks) {
    return {
        type: GET_ALL_DECKS,
        decks,
    }
}

export function createDeckAction(deck) {
    return {
        type: CREATE_DECK,
        deck,
    }
}

export function createQuizAction(quiz, deckTitle) {
    return {
        type: CREATE_QUIZ,
        quiz,
        deckTitle,
    }
}