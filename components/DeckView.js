import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

function DeckView({ navigation, ...props }) {
    const key = navigation.state.params.deck.title
    const deck = props.decks[key]
    return (
        <View style={styles.container}>
            <View style={styles.description}>
                <Text style={styles.deckName}>{deck.title}</Text>
                <Text style={styles.cardCounter}>{deck.questions.length} cards</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.blackBorderButton}
                    onPress={() => navigation.navigate(
                        'Add Quiz',
                        { deck }
                    )} >
                        <Text style={styles.addCardText}>Add Card</Text>
                    </TouchableOpacity>
                {deck.questions.length > 0 &&
                    (<TouchableOpacity style={styles.blackButton}
                        onPress={() => navigation.navigate(
                            'Answer',
                            { deck }
                        )} >
                            <Text style={styles.quizText}>Start Quiz</Text>
                    </TouchableOpacity>)}
            </View>
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
    description: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        flex: 1,
    },
    cardCounter: {
        fontSize: 25,
        color: 'gray',
        paddingTop: 8,
    },
    deckName: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    }, 
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    blackBorderButton: {
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 10,
        padding: 5,
        margin: 10,
    },
    blackButton: {
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 10,
        padding: 5,
    },
    addCardText: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
    },
    quizText: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        color: 'white',
    }
});

export default connect(mapStateToPorps)(DeckView)