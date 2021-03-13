import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TableMovementLinks from './TableMovementLinks'
import _ from 'lodash'

const ServiceList = ({ services, setServices, ...others }) => {
  const [sortedByName, setSortedByName] = useState(false)
  const [sortedByWebsite, setSortedByWebsite] = useState(false)

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

  const sortByWebsite = () => {
    let result = _.sortBy(services.results, ['website'])

    if (sortedByWebsite) {
      result = result.reverse()
    }
    setSortedByWebsite(!sortedByWebsite)
    setServices({ ...services, results: result })
  }

  return (
    <div id="serviceTable">
      <TableMovementLinks
        setServices={setServices}
        services={services}
        {...others}
      />
      <Table striped bordered hover responsive >
        <thead>
          <tr>
            <th onClick={sortByName}><a href="/#">Name</a></th>
            <th onClick={sortByWebsite}><a href="/#">Website</a></th>
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