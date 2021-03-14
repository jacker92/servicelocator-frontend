import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchServicesView from './SearchServicesView'
import SingleServiceView from './SingleServiceView'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../App.css'

const App = () => {
  const [services, setServices] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [activePage, setActivePage] = useState(1)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SearchServicesView
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setServices={setServices}
              services={services}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </Route>
          <Route path="/:id">
            <SingleServiceView services={services} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App