import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchServicesView from './SearchServicesView'
import SingleServiceView from './SingleServiceView'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../App.css'
import { ApplicationProvider } from '../contexts/ApplicationContext'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <ApplicationProvider>
            <Route exact path="/">
              <SearchServicesView />
            </Route>
            <Route path="/:id">
              <SingleServiceView />
            </Route>
          </ApplicationProvider>
        </Switch>
      </Router>
    </div>
  )
}

export default App