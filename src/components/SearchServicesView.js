import { Container } from 'react-bootstrap'
import SearchForm from './SearchForm'
import ServiceList from './ServiceList'
import React from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SearchServicesView = () => {
  const { loading } = useSelector(state => state.services)
  return (
    <div>
      <ToastContainer/>
      <Container>
        <h1>Helsinki Service Locator</h1>
        <SearchForm />
        {loading ?
          <Loader /> :
          <ServiceList />
        }
      </Container>
    </div>
  )
}

export default SearchServicesView