import React, {Component} from 'react'
import { KeyboardAvoidingView, Switch, Text, Button, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

export default class AddQuizView extends Component {
    state = {
        question: "",
        answer: "",
        isCorrect: false,
    }

    submit(e) {
        console.log(e)
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

        return (
            <KeyboardAvoidingView behavior="padding">
                <Text>What is the title of your new deck?</Text>
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
                <Button title="Submit" onPress={() => this.submit()}/>
            </KeyboardAvoidingView>
        )
    }
}