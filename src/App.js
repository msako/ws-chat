import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Chat from './chat'

const App = () => (
  <MuiThemeProvider>
    <Chat />
  </MuiThemeProvider>
)

export default App
