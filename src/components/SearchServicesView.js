import { Container } from 'react-bootstrap'
import SearchForm from './SearchForm'
import ServiceList from './ServiceList'
import React, { useState } from 'react'
import Loader from './Loader'

const SearchServicesView = (props) => {
  const [loading, setLoading] = useState(false)
  console.log('Serviicies', props.services)
  return (
    <Container>
      <h1>Helsinki Service Locator</h1>
      <SearchForm {...props} setLoading={setLoading} />
      {loading ?
        <Loader /> :
        <ServiceList {...props} />
      }
    </Container>
  )
}

export default SearchServicesView