import { useState } from 'react';
import { Table } from 'react-bootstrap';
import _ from 'lodash'

const ServiceList = ({ services, setServices }) => {

    const [sortedByName, setSortedByName] = useState(false)
    const [sortedByEmail, setSortedByEmail] = useState(false)
    const [sortedByInfo, setSortedByInfo] = useState(false)
    const [sortedByWebsite, setSortedByWebsite] = useState(false)

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

    const sortByEmail = () => {
        let result = _.sortBy(services, ['email'])

        if (sortedByEmail) {
            result = result.reverse()
        }
        setSortedByEmail(!sortedByEmail)
        setServices(result)
    }

    const sortByInfo = () => {
        let result = _.sortBy(services, ['info'])

        if (sortedByInfo) {
            result = result.reverse()
        }
        setSortedByInfo(!sortedByInfo)
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
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th onClick={sortByName}><a href="/#">Name</a></th>
                    <th onClick={sortByInfo}><a href="/#">Info</a></th>
                    <th onClick={sortByEmail}><a href="/#">Email</a></th>
                    <th onClick={sortByWebsite}><a href="/#">Website</a></th>
                </tr>
            </thead>
            <tbody>
                {services.map(x => (
                    <tr key={x.id}>
                        <td>{x.name}</td>
                        <td>{x.info}</td>
                        <td>{x.email}</td>
                        <td>{x.website && <a href={x.website}>{x.website}</a>}</td>
                        <td>{x.location && <a href={`https://www.google.com/maps/search/?api=1&query=${x.location[1]},${x.location[0]}`}>View</a>}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ServiceList