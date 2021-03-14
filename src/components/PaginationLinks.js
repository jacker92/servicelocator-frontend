import React from 'react'
import { Pagination } from 'react-bootstrap'
import { getServices } from '../services/helsinkiService'
import { getParameterByName } from '../utils/utils'

const PaginationLinks = ({ services, setServices, searchTerm, setLoading, activePage, setActivePage }) => {
  const getServicesFrom = async (url) => {
    if (!url) {
      return
    }
    setLoading(true)
    const page = getParameterByName('page', url)
    const result = await getServices(searchTerm, page)

    setServices(result)
    setActivePage(page)
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
        <Pagination.Item active>{activePage}</Pagination.Item>
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