import React, {Component} from 'react'
import { KeyboardAvoidingView, Switch, Text, Button, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { getDecksAction, createDeckAction, createQuizAction } from '../actions/deckAction.js'
import { createDeck, createQuiz } from '../api/index.js'
import { addQuestion } from '../api/api.js'
import { connect } from 'react-redux'

class AddQuizView extends Component {
    state = {
        question: "",
        answer: "",
        isCorrect: false,
        errorMsg: "",
    }

    submit() {
        const { dispatch } = this.props
        const {question, answer, isCorrect} = this.state
        const deck = this.props.navigation.state.params.deck
        if (!question || !answer) {
            this.setState({
                errorMsg: "Plese input quesiton and answer"
            })
        } else {
            const newQuesion = createQuiz(question, answer, isCorrect)
            dispatch(createQuizAction(newQuesion, deck.title))
            addQuestion(newQuesion, deck.title)
            this.props.navigation.goBack()
        }
    }

    handleQuestionChange(text) {
        this.setState({
            question: text 
        })
    }

    handleAnswerChange(text) {
        this.setState({
            answer: text 
        })
    }

    handleCorrect() {
        this.setState((state) => ({
            isCorrect: !state.isCorrect
        }))
    }

    render() {
        const {isCorrect} = this.state
        const deck = this.props.navigation.state.params.deck

        return (
            <KeyboardAvoidingView behavior="padding">
                <Text>Add Card To {deck.title}</Text>
                <TextInput 
                    placeholder={"Input the question"}
                    value={this.state.question}
                    onChangeText={(text) => this.handleQuestionChange(text)}
                />
                <Text>Is correct? </Text>
                <Text>{isCorrect? "true":"false"}</Text>
                <Switch
                    value={isCorrect}
                    onValueChange={() => this.handleCorrect()}
                />
                <TextInput 
                    placeholder={"Input the answer to the question"}
                    value={this.state.answer}
                    onChangeText={(text) => this.handleAnswerChange(text)}
                />
                <Text>{this.state.errorMsg}</Text>
                <Button title="Submit" onPress={() => this.submit()}/>
            </KeyboardAvoidingView>
        )
    }
}

export default connect()(AddQuizView)