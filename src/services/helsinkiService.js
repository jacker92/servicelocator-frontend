import axios from 'axios'
const baseUrl = `https://api.hel.fi/servicemap/v2/search/?type=unit&q=`

export const getServices = async (searchTerm) => {
    const request = await axios.get(`${baseUrl}${searchTerm}`)
    return request
}