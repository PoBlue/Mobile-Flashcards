import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
import {
    getDecksAction,
    createDeckAction,
    createQuizAction
} from '../actions/deckAction.js'
import { connect } from 'react-redux'
import {
    createDeck,
    createQuiz
} from '../api/index.js'
import {
    fetchDecks, 
    submitDeck
} from '../api/api.js'

function DeckListItemView({ deck, onClickItem }) {
    return (
        <TouchableOpacity onPress={() => onClickItem(deck)}>
            <View style={[styles.container, styles.deckListItem]}>
                <Text>{deck.title}</Text>
                <Text>{deck.questions.length}</Text>
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
        console.log(deck)
    }

    initData() {
        const { dispatch } = this.props
        const { decks } = this.props
        const newDeck = createDeck("boostrap")
        dispatch(createDeckAction(newDeck))
        submitDeck(newDeck)
        const newQuesion = createQuiz("test","hello")
        dispatch(createQuizAction(newQuesion, newDeck.title))
        // const newQuesion2 = createQuiz("test2","2hello")
        // dispatch(createQuizAction(newQuesion2, newDeck.title))
    }

    render() {
        const { decks } = this.props
        const deckKeys = Object.keys(decks)
        console.log(decks)
        return (
            <View>
                <Text>hello,world</Text>
                <Button title="init data" onPress={() => this.initData()}/>
                <Button title="init data" onPress={() => this.initData()}/>
                <Button title="init data" onPress={() => this.initData()}/>
                <FlatList
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
  }
});

export default connect(mapStateToProps)(DeckListView)