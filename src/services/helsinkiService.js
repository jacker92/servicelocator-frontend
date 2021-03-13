import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const baseUrl = process.env.REACT_APP_BACKEND_URL

export const getServices = async (searchTerm, page) => {
  console.log('Page', page)
  if (page) {
    return await axios.get(`${baseUrl}${searchTerm}&page=${page}`)
  }
  return await axios.get(`${baseUrl}${searchTerm}`)
}