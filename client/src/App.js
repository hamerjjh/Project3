import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage.js'
import MovesPage from './components/moves/MovesPage.js'
import LocationsPage from './components/locations/LocationsPage.js'
import NavBar from './components/NavBar'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/locations" component={LocationsPage} />
            <Route exact path="/users/:userId" component={LocationsPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App