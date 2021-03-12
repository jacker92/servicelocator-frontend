import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Table, Container } from 'react-bootstrap'

const SingleServiceView = ({ services }) => {
  console.log('User parmars', useParams())
  const { id } = useParams()

  const service = services && services.find(p => p.id === Number(id))

  console.log(services, service)

  let serviceData

  if (service) {
    serviceData = (
      <>
        <h1>{service.name}</h1>
        <Table id="singleServiceTable" striped bordered hover responsive="lg">
          <tbody>
            <tr>
              <td>Info</td>
              <td>{service.info}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{service.description ? service.description.fi : ''}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td><a href={`mailto:${service.email}}`}>{service.email}</a></td>
            </tr>
            <tr>
              <td>Website</td>
              <td>{service.website && <a href={service.website} target="_blank" rel="noopener noreferrer">{service.website}</a>}</td>
            </tr>
            <tr>
              <td>View in Google Maps</td>
              <td>{service.location && <a href={`https://www.google.com/maps/search/?api=1&query=${service.location[1]},${service.location[0]}`} target="_blank" rel="noopener noreferrer">View</a>}</td>
            </tr>
            <tr>
              <td>Street address</td>
              <td>{service.street && service.street.fi}</td>
            </tr>
            <tr>
              <td>Zipcode</td>
              <td>{service.zipcode}</td>
            </tr>
          </tbody>
        </Table>

      </>
    )
  } else {
    serviceData = <h2> Sorry. Service does not exist. </h2>
  }

  return (
    <Container>
      <div>{serviceData}</div>
      <Link to="/" className="btn btn-primary">Go back</Link>
    </Container>
  )
}

export default SingleServiceView