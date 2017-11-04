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
            <KeyboardAvoidingView behavior="padding">
                <Text>What is the title of your new deck?</Text>
                <TextInput 
                    placeholder={"Input deck name"}
                    value={this.state.input}
                    onChangeText={(text) => this.handleTextChange(text)}
                />
                <Text>{this.state.errorMsg}</Text>
                <Button title="Submit" onPress={() => this.submit()}/>
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(decks){
    return {
        decks
    }
}

export default connect(mapStateToProps)(NewDeckView)