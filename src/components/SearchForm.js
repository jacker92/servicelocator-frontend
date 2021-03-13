import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { getServices } from '../services/helsinkiService'

const SearchForm = ({ setServices, setSearchTerm, searchTerm }) => {

  const[inputSearchTerm, setInputSearchTerm] = useState('')
  const executeSearch = async (e) => {
    e.preventDefault()

    setSearchTerm(inputSearchTerm)
    setInputSearchTerm('')

    if (!searchTerm) {
      return
    }

    const response = await getServices(searchTerm)

    const results = response.data.results.map(x => (
      {
        id: x.id,
        name: x.name.fi,
        info: x.connections[0] && x.connections[0].name.fi,
        email: x.email,
        website: x.www && x.www.fi,
        location: x.location.coordinates,
        zipcode: x.address_zip,
        street: x.street_address,
        description: x.description
      }
    ))
    setServices({ ...response.data, results })
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
          className="mb-2">
          Search
        </Button>
      </Form>
    </div>
  )
}

export default SearchForm