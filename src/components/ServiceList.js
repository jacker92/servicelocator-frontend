import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PaginationLinks from './PaginationLinks'
import { useDispatch, useSelector } from 'react-redux'
import { sortByName } from '../reducers/serviceReducer'

const ServiceList = () => {
  const dispatch = useDispatch()
  const services = useSelector(state => state.services.services)

  if (!services || !services.results || services.results.length === 0) {
    return (
      <></>
    )
  }

  return (
    <div id="serviceTable">
      <PaginationLinks />
      <Table striped bordered hover responsive >
        <thead>
          <tr>
            <th onClick={() => dispatch(sortByName())}><a href="/#">Name</a></th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {services.results.map(x => (
            <tr key={x.id}>
              <td>
                <Link to={`/${x.id}`} >{x.name}</Link>
              </td>
              <td>{x.website &&
              <a href={x.website}
                target="_blank"
                rel="noopener noreferrer">
                View
              </a>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ServiceList