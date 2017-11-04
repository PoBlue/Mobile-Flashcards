import React, {Component} from 'react'
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet} from 'react-native'

export default class AnswerView extends Component  {
    state = {
        answers: [],
        position: 0,
        isCompleted: false,
    }

    render() { 
        const {questions} = this.props.navigation.state.params.deck
        console.log(questions)
        return (
            <View>
                <Text>Answer View</Text>
            </View>
        )
    }
}