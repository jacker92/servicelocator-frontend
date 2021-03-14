import { Container } from 'react-bootstrap'
import SearchForm from './SearchForm'
import ServiceList from './ServiceList'
import React, { useContext } from 'react'
import Loader from './Loader'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ApplicationContext } from '../ApplicationContext'

const SearchServicesView = () => {
  const { loading } = useContext(ApplicationContext)
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