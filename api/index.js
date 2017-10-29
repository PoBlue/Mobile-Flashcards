export function createDeck(title) {
    return {
        title,
        questions: []
    }
}

export function createQuiz(question, answer) {
    return {
        question,
        answer
    }
}