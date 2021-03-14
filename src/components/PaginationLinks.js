import React from 'react'
import { Pagination } from 'react-bootstrap'
import { getServices } from '../services/helsinkiService'
import { getParameterByName } from '../utils/utils'

const PaginationLinks = ({ services, setServices, searchTerm, setLoading }) => {

  const getServicesFrom = async (url) => {
    if (!url) {
      return
    }
    setLoading(true)
    const result = await getServices(searchTerm, getParameterByName('page', url))
    setServices(result)
    setLoading(false)
  }

  if (!services) {
    return null
  }

  return (
    <div id="paginationLinks">
      <Pagination>
        {services.previous &&
          <Pagination.Prev
            onClick={() => getServicesFrom(services.previous)}
          />
        }
        {services.next &&
          <Pagination.Next
            onClick={() => getServicesFrom(services.next)}
          />
        }
      </Pagination>
    </div>
  )
}

export default PaginationLinks