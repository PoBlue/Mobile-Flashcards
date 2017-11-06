import React, { Component } from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, Text, Button, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { createDeck, createQuiz } from '../api/index.js'
import { getDecksAction, createDeckAction, createQuizAction } from '../actions/deckAction.js'
import { fetchDecks, submitDeck } from '../api/api.js'

class NewDeckView extends Component {
    state = {
        input: "",
        errorMsg: "",
        sucessfulMsg:"",
    }

    componentDidMount () {
        const {hasSubmit} = this.state
        if(!hasSubmit) {
            return 
        }

        if(decks.isSuccess) {
        }else{
        }
    }

    submit() {
        const inputNoTrim = this.state.input
        const input = inputNoTrim.trim()
        const {dispatch, decks} = this.props

        if(!input) {
            this.setState({
                errorMsg: "Plese input deck name"
            })
        } else {
            if(!decks.hasOwnProperty(input)) {
                const newDeck = createDeck(input)
                dispatch(createDeckAction(newDeck))
                submitDeck(newDeck)
                this.setState({
                    input: "",
                    errorMsg: "",
                    sucessfulMsg: "Created sucessful",
                })
            } else {
                this.setState({
                    errorMsg: "The deck have been created, plese use different name"
                })
            }
        }
    }

    handleTextChange(input) {
        this.setState({
            input
        })
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Text style={styles.question}>What is the title of your new deck?</Text>
                <TextInput 
                    style={styles.inputFiled}
                    placeholder={"Input deck name"}
                    value={this.state.input}
                    onChangeText={(text) => this.handleTextChange(text)}
                />
                <Text style={styles.errorText}>{this.state.errorMsg}</Text>
                <Text style={styles.sucessfulText}>{this.state.sucessfulMsg}</Text>
                <TouchableOpacity style={styles.submitButton} onPress={() => this.submit()}>
                    <Text style={styles.sumbitText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(decks){
    return {
        decks
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    description: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        flex: 1,
    },
    inputFiled: {
        fontSize: 30,
        marginTop: 32,
        marginBottom: 32,
    },
    question: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold'
    }, 
    submitButton: {
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 10,
        padding: 5,
        alignItems: 'center',
    },
    errorText: {
        color: 'red'
    },
    sucessfulText: {
        color: 'green'
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

export default connect(mapStateToProps)(NewDeckView)