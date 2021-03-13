import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { getServices } from '../services/helsinkiService'
import { toast } from 'react-toastify'

const SearchForm = ({ setServices, setSearchTerm, setLoading }) => {

  const[inputSearchTerm, setInputSearchTerm] = useState('')
  const executeSearch = async (e) => {
    e.preventDefault()

    const searchTerm = inputSearchTerm
    setSearchTerm(inputSearchTerm)
    setInputSearchTerm('')

    if (!searchTerm) {
      return
    }

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