import React, {Component} from 'react'
import {View, KeyboardAvoidingView, Switch, Text, Button, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { getDecksAction, createDeckAction, createQuizAction } from '../actions/deckAction.js'
import { createDeck, createQuiz } from '../api/index.js'
import { addQuestion } from '../api/api.js'
import { connect } from 'react-redux'

class AddQuizView extends Component {
    state = {
        question: "",
        answer: "",
        isCorrect: true,
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
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Text style={styles.addCardText}>Add Card To: {deck.title}</Text>
                <TextInput 
                    style={styles.inputFiled}
                    placeholder={"Input the question"}
                    value={this.state.question}
                    onChangeText={(text) => this.handleQuestionChange(text)}
                />
                <TextInput 
                    style={styles.inputFiled}
                    placeholder={"Input the answer"}
                    value={this.state.answer}
                    onChangeText={(text) => this.handleAnswerChange(text)}
                />
                <View style={styles.correctContainer}>
                    <Text style={styles.descripeText}>Is the answer correct? </Text>
                    <Text style={isCorrect? styles.correctText: styles.errorText}>
                        {isCorrect? "True":"False"}
                    </Text>
                    <Switch
                        style={styles.switch}
                        value={isCorrect}
                        onValueChange={() => this.handleCorrect()}
                    />
                </View>
                <Text style={styles.errorText}>{this.state.errorMsg}</Text>
                <TouchableOpacity style={styles.submitButton} onPress={() => this.submit()}>
                    <Text style={styles.sumbitText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    correctContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputFiled: {
        fontSize: 22,
        marginTop: 16,
        marginBottom: 16,
    },
    addCardText: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    },
    switch: {
        marginLeft: 'auto',
    }, 
    submitButton: {
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 10,
        padding: 5,
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 18,
    },
    correctText: {
        color: 'green',
        fontSize: 18,
    },
    descripeText: {
        fontSize: 18,
    },
    sumbitText: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        color: 'white',
    },
});

export default connect()(AddQuizView)