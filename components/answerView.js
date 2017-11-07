import React, {Component} from 'react'
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
import { setLocalNotification, clearLocalNotification } from '../utils/helper.js'

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
        clearLocalNotification().then(setLocalNotification)

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
                <View style={styles.top}>
                    <Text style={styles.question}>{this.getResult()}</Text>
                </View>
            )
        }

        if(inAnserView) {
            return (
                <View style={styles.top}>
                    <Text style={styles.question}>{questions[position].answer}</Text>
                    <Button title="Back To Quiz" onPress={() => this.viewAnswer(false)}/>
                </View>
            )
        }
        
        const currentQuestion = questions[position].question
        return (
            <View style={styles.container}>
                <Text style={styles.progress}>{position + 1} / {questions.length}</Text>
                <View style={styles.description}>
                    <Text style={styles.question}>{currentQuestion}</Text>
                    <Button color="red" title="View the Answer" onPress={() => this.viewAnswer(true)} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.correctButton} onPress={() => this.checkCorrect(true)}>
                        <Text style={styles.correctText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.incorrectButton} onPress={() => this.checkCorrect(false)}>
                        <Text style={styles.incorrectText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    description: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        flex: 1,
    },
    top: {
        alignItems: 'center',
        padding: 30,
        flex: 1,
    },
    progress: {
        fontSize: 15,
        color: 'black',
        padding: 8,
    },
    question: {
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold'
    }, 
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    incorrectButton: {
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 5,
        margin: 10,
    },
    correctButton: {
        backgroundColor: 'green',
        borderRadius: 10,
        margin: 10,
        padding: 5,
    },
    correctText: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        color: 'white',
    },
    incorrectText: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        color: 'white',
    }
});

export default AnswerView