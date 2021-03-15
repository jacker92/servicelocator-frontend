/* eslint-disable no-unreachable */
const notification = ''
import { toast } from 'react-toastify'

const toastSettings = {
  position: 'top-center',
  autoClose: 2000
}

const reducer = (state = notification, action) => {
  switch (action.type) {
  case 'SUCCESS_NOTIFICATION':
    toast.info(action.data.serviceCount > 0 ?
      `Found ${action.data.serviceCount} service${action.data.serviceCount > 1 ? 's' : ''}!` :
      'No services found',
    toastSettings)
    return state
  case 'ERROR_NOTIFICATION':
    toast.error('Could not connect to server', toastSettings)
    return state
  default:
    return state
  }
}

export const setNotification = (services) => {
  return async dispatch => {
    if (services) {
      dispatch({ type: 'SUCCESS_NOTIFICATION', data: { serviceCount: services.count } })
    } else {
      dispatch({ type: 'ERROR_NOTIFICATION' })
    }
  }
}

export default reducer