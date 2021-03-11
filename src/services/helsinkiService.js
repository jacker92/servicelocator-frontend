import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const baseUrl = process.env.REACT_APP_BACKEND_URL

export const getServices = async (searchTerm) => {
  const request = await axios.get(`${baseUrl}${searchTerm}`)
  return request
}