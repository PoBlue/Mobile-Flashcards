import React, { Component } from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, Text, Button, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

class NewDeckView extends Component {
    state = {
        input: ""
    }

    submit(e) {
        console.log(e)
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
                <Button title="Submit" onPress={() => this.submit()}/>
            </KeyboardAvoidingView>
        )
    }
}

export default NewDeckView