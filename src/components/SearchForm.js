import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { getServices } from '../services/helsinkiService'

const SearchForm = ({ setServices }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const executeSearch = async (e) => {
    e.preventDefault()
    if(!searchTerm) {
      return
    }

    const response = await getServices(searchTerm)
    setSearchTerm('')
    setServices(response.data.map(x => (
      {
        id: x.id,
        name: x.name.fi,
        info: x.connections[0] && x.connections[0].name.fi,
        email: x.email,
        website: x.www && x.www.fi,
        location: x.location.coordinates
      }
    )))
  }

  return (
    <div className="SearchForm">
      <Form >
        <Form.Label htmlFor="inlineFormInputName2" srOnly>
                    Address, Postal code etc.
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Address, Postal code etc."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <Button type="submit" onClick={(e) => executeSearch(e)} className="mb-2">
                    Search
        </Button>
      </Form>
    </div>
  )
}

export default SearchForm