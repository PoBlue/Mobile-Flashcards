import React, {Component} from 'react'
import { KeyboardAvoidingView, Text, Button, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

export default class AddQuizView extends Component {
    state = {
        question: "",
        answer: ""
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

    render() {
        return (
            <KeyboardAvoidingView behavior="padding">
                <Text>What is the title of your new deck?</Text>
                <TextInput 
                    placeholder={"Input the question"}
                    value={this.state.question}
                    onChangeText={(text) => this.handleQuestionChange(text)}
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