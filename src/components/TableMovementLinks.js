import React from 'react'
import { Button } from 'react-bootstrap'
import { getServices } from '../services/helsinkiService'
import { getParameterByName } from '../utils/utils'

const TableMovementLinks = ({ services, setServices, searchTerm, setLoading }) => {

  const getServicesFrom = async (url) => {
    setLoading(true)
    const result = await getServices(searchTerm, getParameterByName('page', url))
    setServices(result)
    setLoading(false)
  }

  return (
    <div id="tableMovementLinks">
      {services.previous &&
        <Button
          variant="link"
          onClick={() => getServicesFrom(services.previous)}>
          Previous page
        </Button>
      }
      {services.next &&
        <Button
          variant="link"
          onClick={() => getServicesFrom(services.next)}>
          Next page
        </Button>
      }
    </div>
  )
}

export default TableMovementLinks