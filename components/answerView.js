import React, {Component} from 'react'
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet} from 'react-native'

class AnswerView extends Component  {
    state = {
        answers: [],
        position: 0,
        isCompleted: false,
        inAnserView: false,
    }

    checkCorrect(isCorrect) {
        let {isCompleted, answers, position} = this.state
        const {questions} = this.props.navigation.state.params.deck

        if(position+1 >= questions.length) {
            this.setState({
                isCompleted: true
            })
        }

        this.setState((state) => ({
            answers: state.answers.concat(isCorrect),
            position: state.position + 1,
        }))
    }

    viewAnswer(toAnswer) {
        this.setState({
            inAnserView: toAnswer,
        })
    }

    getResult() {
        const {questions} = this.props.navigation.state.params.deck
        let {isCompleted, answers, position} = this.state
        const totalLength = questions.length
        let correctCount = 0
        for(let i=0; i<totalLength; i++){
            if(answers[i] === questions[i].isCorrect){
                correctCount += 1
            }
        }
        return `Percentage of correct answer: ${correctCount} / ${totalLength}`
    }

    render() { 
        const {questions} = this.props.navigation.state.params.deck
        const { answers, position, isCompleted, inAnserView } = this.state

        if(isCompleted) {
            return (
                <View>
                    <Text>{this.getResult()}</Text>
                </View>
            )
        }

        if(inAnserView) {
            return (
                <View>
                    <Text>{questions[position].answer}</Text>
                    <Button title="Back To Quiz" onPress={() => this.viewAnswer(false)}/>
                </View>
            )
        }
        
        const currentQuestion = questions[position].question
        return (
            <View>
                <Text>{position + 1} / {questions.length}</Text>
                <Text>{currentQuestion}</Text>
                <Button title="Correct" onPress={() => this.checkCorrect(true)}/>
                <Button title="Incorrect" onPress={() => this.checkCorrect(false)}/>
                <Button title="View Answer" onPress={() => this.viewAnswer(true)}/>
            </View>
        )
    }
}

export default AnswerView