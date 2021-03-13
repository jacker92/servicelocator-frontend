import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TableMovementLinks from './TableMovementLinks'
import _ from 'lodash'

const ServiceList = ({ services, setServices, searchTerm }) => {

  const [sortedByName, setSortedByName] = useState(false)
  const [sortedByWebsite, setSortedByWebsite] = useState(false)

  console.log(services)

  if (!services || services.length === 0) {
    return (
      <></>
    )
  }

  const sortByName = () => {
    let result = _.sortBy(services, ['name'])

    if (sortedByName) {
      result = result.reverse()
    }
    setSortedByName(!sortedByName)
    setServices(result)
  }

  const sortByWebsite = () => {
    let result = _.sortBy(services, ['website'])

    if (sortedByWebsite) {
      result = result.reverse()
    }
    setSortedByWebsite(!sortedByWebsite)
    setServices(result)
  }

  return (
    <div>
      <TableMovementLinks setServices={setServices} services={services} searchTerm={searchTerm}/>
      <Table id="serviceTable" striped bordered hover responsive="lg">
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
              <td>{x.website && <a href={x.website}>{x.website}</a>}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ServiceList