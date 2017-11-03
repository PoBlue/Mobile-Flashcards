import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation';
import DeckListView from './deckListView'
import NewDeckView from './newDeck'

export const Tabs = TabNavigator({
  Decks: {
    screen: DeckListView
  },
  "Add Deck": {
    screen: NewDeckView
  },
})

