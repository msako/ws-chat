import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './chat'
import Home from './home'

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chat/:id" component={Chat} />
      </Switch>
    </Router>
  </MuiThemeProvider>
)

export default App
