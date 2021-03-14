import React, { useContext, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PaginationLinks from './PaginationLinks'
import _ from 'lodash'
import { ApplicationContext } from '../contexts/ApplicationContext'

const ServiceList = () => {
  const [sortedByName, setSortedByName] = useState(false)
  const { services, setServices } = useContext(ApplicationContext)

  if (!services || !services.results || services.results.length === 0) {
    return (
      <></>
    )
  }

  const sortByName = () => {
    let result = _.sortBy(services.results, ['name'])

    if (sortedByName) {
      result = result.reverse()
    }

    setSortedByName(!sortedByName)
    setServices({ ...services, results: result })
  }

  return (
    <div id="serviceTable">
      <PaginationLinks />
      <Table striped bordered hover responsive >
        <thead>
          <tr>
            <th onClick={sortByName}><a href="/#">Name</a></th>
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