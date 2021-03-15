import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchServicesView from './SearchServicesView'
import SingleServiceView from './SingleServiceView'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../App.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchServicesView />
          </Route>
          <Route path="/:id">
            <SingleServiceView />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App