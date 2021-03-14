import React, { useContext } from 'react'
import { Pagination } from 'react-bootstrap'
import { ApplicationContext } from '../contexts/ApplicationContext'
import { getServices } from '../services/helsinkiService'
import { removeDuplicates } from '../utils/utils'

const PaginationLinks = () => {
  const { services, setServices, searchTerm, setLoading, activePage, setActivePage, setServiceCache } = useContext(ApplicationContext)
  const getServicesFrom = async (page) => {
    if (!page) {
      return
    }
    setLoading(true)
    const result = await getServices(searchTerm, page)

    if (result) {
      setServiceCache(removeDuplicates([...result.results, ...services.results]))
      setServices(result)
      setActivePage(page)
    }
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
            onClick={async () => await getServicesFrom(Number(activePage) - 1)}
          />
        }
        {activePage > 1 &&
          <Pagination.Item
            onClick={async (e) => await getServicesFrom(e.target.innerText)}>
            {1}
          </Pagination.Item>}
        <Pagination.Item active>{activePage}</Pagination.Item>
        {
          activePage < numberOfPages &&
          <Pagination.Item
            onClick={async (e) => await getServicesFrom(e.target.innerText)}>
            {numberOfPages}
          </Pagination.Item>
        }
        {services.next &&
          <Pagination.Next
            onClick={async () => await getServicesFrom(Number(activePage) + 1)}
          />
        }
      </Pagination>
    </div>
  )
}

export default PaginationLinks