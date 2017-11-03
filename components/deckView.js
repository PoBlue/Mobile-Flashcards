import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet} from 'react-native'

function DeckView({ navigation }) {
    const deck = navigation.state.params.deck
    console.log(deck)
    return (
        <View>
            <Text>{deck.title}</Text>
            <Text>{deck.questions.length}</Text>
            <Button title="Add Card" 
                onPress={() => navigation.navigate(
                    'Add Quiz',
                    {'title': deck.title}
                )}/>
            <Button title="Start Quiz" 
                onPress={() => navigation.navigate(
                    'Answer',
                    {"quesions": deck.quesions}
                )}/>
        </View>
    )
}

export default DeckView