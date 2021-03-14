import { Container } from 'react-bootstrap'
import SearchForm from './SearchForm'
import ServiceList from './ServiceList'
import React, { useState } from 'react'
import Loader from './Loader'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SearchServicesView = (props) => {
  const [loading, setLoading] = useState(false)
  const [activePage, setActivePage] = useState(1)

  return (
    <div>
      <ToastContainer/>
      <Container>
        <h1>Helsinki Service Locator</h1>
        <SearchForm
          {...props}
          setLoading={setLoading}
        />
        {loading ?
          <Loader /> :
          <ServiceList
            {...props}
            setLoading={setLoading}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        }
      </Container>
    </div>
  )
}

export default SearchServicesView