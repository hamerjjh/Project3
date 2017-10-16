import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage.js'
import MovesPage from './components/moves/MovesPage.js'
import LocationsPage from './components/locations/LocationsPage.js'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div>
            <div>
              <Link to="/">Login</Link>
            </div>
            <div>
              <Link to="/locations">Locations</Link>
            </div>
            <div>
              <Link to="/moves">Activities</Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/locations" component={LocationsPage} />
            <Route exact path="/moves/:userId" component={MovesPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App