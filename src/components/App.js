import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchServicesView from './SearchServicesView'
import SingleServiceView from './SingleServiceView'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../App.css'

const App = () => {
  const [services, setServices] = useState([])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SearchServicesView setServices={setServices} services={services}/>
          </Route>
          <Route path="/:id">
            <SingleServiceView services={services}/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App