import React from 'react'
import { Pagination } from 'react-bootstrap'
import { fetchServicesFromPage } from '../reducers/serviceReducer'
import { useDispatch, useSelector } from 'react-redux'

const PaginationLinks = () => {
  const dispatch = useDispatch()
  const { services, searchTerm, activePage } = useSelector(state => state)

  const getServicesFrom = async (page) => {
    dispatch(fetchServicesFromPage(searchTerm, page))
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