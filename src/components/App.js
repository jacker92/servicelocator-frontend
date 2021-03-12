import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import SearchForm from './SearchForm'
import ServiceList from './ServiceList'
import SingleServiceView from './SingleServiceView'
import { Route, Switch } from 'react-router-dom'
import '../App.css'

const App = () => {
  const [services, setServices] = useState([])

  return (
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
  )
}

const SearchServicesView = (props) => {
  return (
    <Container>
      <h1>Helsinki Service Locator</h1>
      <SearchForm {...props}/>
      <ServiceList {...props}/>
    </Container>
  )
}

export default App