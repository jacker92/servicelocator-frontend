import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { fetchServices } from '../reducers/serviceReducer'

const SearchForm = () => {
  const dispatch = useDispatch()
  const [inputSearchTerm, setInputSearchTerm] = useState('')

  const executeSearch = (e) => {
    e.preventDefault()
    dispatch(fetchServices(inputSearchTerm))
    setInputSearchTerm('')
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
          style={{ marginTop: '5px' }}>
          Search
        </Button>
      </Form>
    </div>
  )
}

export default SearchForm