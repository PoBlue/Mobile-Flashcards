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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deckListItem: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    cardCounter: {
        fontSize: 15,
        color: 'gray',
        paddingTop: 8,
    },
    deckName: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    }
});

export default connect(mapStateToPorps)(DeckView)