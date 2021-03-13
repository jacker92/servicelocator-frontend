import React from 'react'
import { Button } from 'react-bootstrap'
import { getServices } from '../services/helsinkiService'

const TableMovementLinks = ({ services, setServices, searchTerm }) => {

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[[\]]/g, '\\$&')
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
  }

  const onNext = async () => {
    console.log(searchTerm, 'Searchterm')
    const result = await getServices(searchTerm, getParameterByName('page', services.next))
    setServices(result)
    console.log(result)
  }

  const onPrevious = async () => {
    const result = await getServices(searchTerm, getParameterByName('page', services.previous))
    setServices(result)
    console.log(result)
  }

  return (
    <div id="tableMovementLinks">
      {services.previous && <Button variant="link" onClick={() => onPrevious()}>Previous page</Button>}
      {services.next && <Button variant="link" onClick={() => onNext()}>Next page</Button>}
    </div>
  )
}

export default TableMovementLinks