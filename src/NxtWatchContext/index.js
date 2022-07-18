import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  isDayTheme: () => {},
})

export default NxtWatchContext
