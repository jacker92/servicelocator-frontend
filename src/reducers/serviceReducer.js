import { getServices } from '../services/helsinkiService'
import { setNotification } from '../reducers/notificationReducer'
import { sortServices } from '../utils/utils'

const initialState = {
  services: null,
  searchTerm: '',
  activePage: 1,
  loading: false,
  serviceCache: {},
  sortedByName: false
}

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'FETCH_SERVICES':
    return {
      ...state,
      activePage: 10,
      searchTerm: state.inputSearchTerm,
      loading: false,
      services: action.data || state.services,
      serviceCache: action.data && action.data.results ? action.data.results : state.services
    }
  case 'SORT_BY_NAME':
    return {
      ...state,
      sortedByName: !state.sortedByName,
      services: { ...state.services, results: sortServices(state.services.results, state.sortedByName) }
    }
  default:
    return state
  }
}

export const fetchServices = (searchTerm) => {
  console.log('fetching services')
  return async dispatch => {
    if (!searchTerm) {
      return
    }
    const services = await getServices(searchTerm)
    if (services) {
      dispatch({
        type: 'FETCH_SERVICES',
        data: services
      })
    }
    dispatch(setNotification(services))
  }
}

export const sortByName = () => ({ type:'SORT_BY_NAME' })

export default serviceReducer