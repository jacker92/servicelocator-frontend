import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SearchForm from './SearchForm'
import ServiceList from './ServiceList'
import '../App.css'

const App = () => {
  const [services, setServices] = useState([])

  console.log(services)

  return (
    <div className="App">
      <Container>
        <h1>Helsinki Service Locator</h1>
        <SearchForm setServices={setServices}/>
        <ServiceList setServices={setServices} services={services}/>
      </Container>
    </div>
  );
}

export default App;