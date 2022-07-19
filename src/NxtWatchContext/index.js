import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  isDayTheme: () => {},
  savedVideosList: [],
  addSavedVideosList: () => {},
  activeTab: '',
  isSaved: false,
})

export default NxtWatchContext
