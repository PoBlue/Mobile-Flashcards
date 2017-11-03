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
        console.log(input)
        this.setState({
            input
        })
    }

    render() {
        return(
            <KeyboardAvoidingView behavior="padding">
                <Text>What is the title of your new deck?</Text>
                <TextInput 
                    value={this.state.input}
                    onChangeText={(text) => this.handleTextChange(text)}
                />
                <Button title="Submit" onPress={(e) => this.submit(e)}/>
            </KeyboardAvoidingView>
        )
    }
}

export default NewDeckView