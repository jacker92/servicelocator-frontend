import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SearchForm from './SearchForm'
import '../App.css'

const App = () => {
  return (
    <div className="App">
      <Container>
        <h1>Helsinki Service Locator</h1>
        <SearchForm />
      </Container>
    </div>
  );
}

export default App;