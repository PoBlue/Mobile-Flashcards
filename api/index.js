export function createDeck(title) {
    return {
        title,
        questions: []
    }
}

export function createQuiz(question, answer, isCorrect) {
    return {
        question,
        answer,
        isCorrect,
    }
}