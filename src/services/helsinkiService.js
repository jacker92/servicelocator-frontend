import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const baseUrl = process.env.REACT_APP_BACKEND_URL

export const getServices = async (searchTerm, page) => {
  console.log('Getting services', page, searchTerm)
  let response
  if (page) {
    response = await axios.get(`${baseUrl}${searchTerm}&page=${page}`)
  } else {
    response = await axios.get(`${baseUrl}${searchTerm}`)
  }
  return { ...response.data, results: parseResults(response.data.results) }
}

const parseResults = (results) => {
  if (!results) {
    return null
  }
  return results.map(x => (
    {
      id: x.id,
      name: x.name.fi,
      info: x.connections[0] && x.connections[0].name.fi,
      email: x.email,
      website: x.www && x.www.fi,
      location: x.location.coordinates,
      zipcode: x.address_zip,
      street: x.street_address,
      description: x.description
    }
  ))
}