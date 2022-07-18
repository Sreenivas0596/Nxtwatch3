import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  isDayTheme: () => {},
  savedVideosList: [],
  addSavedVideosList: () => {},
})

export default NxtWatchContext
