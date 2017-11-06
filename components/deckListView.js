import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation';
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { getDecksAction, createDeckAction, createQuizAction } from '../actions/deckAction.js'
import { createDeck, createQuiz } from '../api/index.js'
import { fetchDecks, submitDeck } from '../api/api.js'

function DeckListItemView({ deck, onClickItem }) {
    return (
        <TouchableOpacity onPress={() => onClickItem(deck)}>
            <View style={[styles.deckListItem]}>
                <Text style={styles.deckName}>{deck.title}</Text>
                <Text style={styles.cardCounter}>{deck.questions.length} cards</Text>
            </View>
        </TouchableOpacity>
    )
}

class DeckListView extends Component {
    componentDidMount () {
        const { dispatch } = this.props
        fetchDecks().then((decks) => dispatch(getDecksAction(decks)))
    }

    onClickItem(deck) {
        this.props.navigation.navigate(
            'Deck',
            {deck}
        )
    }

    _separator = () => {
        return <View style={{height:0.5,backgroundColor:'black'}}/>;
    }

    render() {
        const { decks } = this.props
        const deckKeys = Object.keys(decks)
        console.log(decks)
        return (
            <View style={[styles.container]}>
                <FlatList
                    ItemSeparatorComponent={this._separator}
                    style={[styles.container]}
                    data={deckKeys}
                    renderItem={({item}) => (
                        <DeckListItemView deck={decks[item]} onClickItem={this.onClickItem.bind(this)}/>
                    )}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }
}

function mapStateToProps(decks) {
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

export default connect(mapStateToProps)(DeckListView)