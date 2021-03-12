import React from 'react'
import { Link } from 'react-router-dom'

const TableMovementLinks = ({ services }) => {
  return (
    <div id="tableMovementLinks">
      {services.previous && <Link to="/" className="btn btn-link">Previous page</Link>}
      {services.next && <Link to="/" className="btn btn-link">Next page</Link>}
    </div>
  )
}

export default TableMovementLinks