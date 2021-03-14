import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { getServices } from '../services/helsinkiService'
import { toast } from 'react-toastify'
import { ApplicationContext } from '../contexts/ApplicationContext'

const SearchForm = () => {
  const { setServices, setSearchTerm, setLoading, setActivePage, setServiceCache } = useContext(ApplicationContext)
  const[inputSearchTerm, setInputSearchTerm] = useState('')
  const executeSearch = async (e) => {
    e.preventDefault()

    if (!inputSearchTerm) {
      return
    }

    const searchTerm = inputSearchTerm
    setInputSearchTerm('')

    setActivePage(1)
    setSearchTerm(searchTerm)

    setLoading(true)
    const services = await getServices(searchTerm)

    toast.info(services.count > 0 ?
      `Found ${services.count} service${services.count > 1 ? 's' : ''}!` :
      'No services found',
    {
      position:'top-center',
      autoClose: 2000
    })
    setServices(services)
    setServiceCache(services.results)
    setLoading(false)
  }

  return (
    <div className="SearchForm">
      <Form >
        <Form.Label htmlFor="searchInput" srOnly>
          Address, Postal code etc.
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="searchInput"
          placeholder="Address, Postal code etc."
          onChange={(e) => setInputSearchTerm(e.target.value)}
          value={inputSearchTerm}
        />
        <Button
          id="searchButton"
          type="submit"
          onClick={(e) => executeSearch(e)}
          className="mb-2"
          style={{ marginTop:'5px' }}>
          Search
        </Button>
      </Form>
    </div>
  )
}

export default SearchForm