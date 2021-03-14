import React, { useContext } from 'react'
import { Pagination } from 'react-bootstrap'
import { ApplicationContext } from '../contexts/ApplicationContext'
import { getServices } from '../services/helsinkiService'

const PaginationLinks = () => {
  const { services, setServices, searchTerm, setLoading, activePage, setActivePage } = useContext(ApplicationContext)
  const getServicesFrom = async (page) => {
    if (!page) {
      return
    }
    setLoading(true)
    const result = await getServices(searchTerm, page)

    setServices(result)
    setActivePage(page || 1)
    setLoading(false)
  }

  if (!services) {
    return null
  }

  const numberOfPages = Math.ceil(services.count / 20)

  return (
    <div id="paginationLinks">
      <Pagination>
        {services.previous &&
          <Pagination.Prev
            onClick={() => getServicesFrom(Number(activePage) - 1)}
          />
        }
        {activePage > 1 &&
          <Pagination.Item
            onClick={(e) => getServicesFrom(e.target.innerText)}>
            {1}
          </Pagination.Item>}
        <Pagination.Item active>{activePage}</Pagination.Item>
        {
          activePage < numberOfPages &&
          <Pagination.Item
            onClick={(e) => getServicesFrom(e.target.innerText)}>
            {numberOfPages}
          </Pagination.Item>
        }
        {services.next &&
          <Pagination.Next
            onClick={() => getServicesFrom(Number(activePage) + 1)}
          />
        }
      </Pagination>
    </div>
  )
}

export default PaginationLinks