import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet} from 'react-native'

function DeckView({ navigation, ...props }) {
    const key = navigation.state.params.deck.title
    const deck = props.decks[key]
    return (
        <View>
            <Text>{deck.title}</Text>
            <Text>{deck.questions.length}</Text>
            <Button title="Add Card" 
                onPress={() => navigation.navigate(
                    'Add Quiz',
                    {deck}
                )}/>
            {deck.questions.length > 0 && 
                <Button title="Start Quiz" 
                    onPress={() => navigation.navigate(
                        'Answer',
                        {deck}
                    )}/>}
        </View>
    )
}

function mapStateToPorps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToPorps)(DeckView)