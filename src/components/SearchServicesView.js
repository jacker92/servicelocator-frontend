import { Container } from 'react-bootstrap'
import SearchForm from './SearchForm'
import ServiceList from './ServiceList'
import React from 'react'

const SearchServicesView = (props) => {

  console.log('Serviicies', props.services)
  return (
    <Container>
      <h1>Helsinki Service Locator</h1>
      <SearchForm {...props}/>
      <ServiceList {...props}/>
    </Container>
  )
}

export default SearchServicesView