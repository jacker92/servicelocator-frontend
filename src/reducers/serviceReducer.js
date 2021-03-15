import { getServices } from '../services/helsinkiService'
import { setNotification } from '../reducers/notificationReducer'
import { sortServicesByName } from '../utils/utils'
import { removeDuplicates } from '../utils/utils'

const initialState = {
  services: null,
  searchTerm: '',
  activePage: 1,
  loading: false,
  serviceCache: null,
  sortedByName: false
}

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'FETCH_SERVICES':
    return {
      ...state,
      activePage: 1,
      searchTerm: action.data.searchTerm,
      loading: false,
      services: action.data.services || state.services,
      serviceCache: action.data.services && action.data.services.results ? action.data.services.results : state.services
    }
  case 'FETCH_PAGED_SERVICES':
    if (action.data.services) {
      return {
        ...state,
        serviceCache: removeDuplicates([...action.data.services.results, ...state.services.results]),
        activePage: action.data.page,
        services: action.data.services,
        loading: false
      }
    }
    return {
      ...state,
      loading: false
    }
  case 'SORT_BY_NAME':
    return {
      ...state,
      sortedByName: !state.sortedByName,
      services: { ...state.services, results: sortServicesByName(state.services.results, state.sortedByName) }
    }
  case 'SET_LOADING':
    return {
      ...state,
      loading: true
    }
  default:
    return state
  }
}

export const fetchServices = (searchTerm) => {
  return async dispatch => {
    if (!searchTerm) {
      return
    }
    dispatch ({ type: 'SET_LOADING' })
    const services = await getServices(searchTerm)
    if (services) {
      dispatch({
        type: 'FETCH_SERVICES',
        data: {
          services,
          searchTerm
        }
      })
    }
    dispatch(setNotification(services))
  }
}

export const fetchServicesFromPage = (searchTerm, page) => {
  return async dispatch => {
    dispatch ({ type: 'SET_LOADING' })
    const services = await getServices(searchTerm, page)

    dispatch({
      type: 'FETCH_PAGED_SERVICES', data: {
        services, page
      }
    })
  }
}

export const sortByName = () => ({ type: 'SORT_BY_NAME' })

export default serviceReducer