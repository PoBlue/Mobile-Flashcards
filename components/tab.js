import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation';
import DeckListView from './deckListView'

export const Tabs = TabNavigator({
  DeckList: {
    screen: DeckListView
  },
  todo: {
    screen: DeckListView
  },
})

