import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation';
import DeckListView from './deckListView'
import NewDeckView from './newDeckView'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

export const Tabs = TabNavigator({
  Decks: {
    screen: DeckListView,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  "Add Deck": {
    screen: NewDeckView,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: 'black',
  }
})

