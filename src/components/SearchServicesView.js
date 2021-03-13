import { Container } from 'react-bootstrap'
import SearchForm from './SearchForm'
import ServiceList from './ServiceList'
import React, { useState } from 'react'

const SearchServicesView = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Container>
      <h1>Helsinki Service Locator</h1>
      <SearchForm {...props} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <ServiceList {...props} searchTerm={searchTerm}/>
    </Container>
  )
}

export default SearchServicesView