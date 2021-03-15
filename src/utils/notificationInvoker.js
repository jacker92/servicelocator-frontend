import { toast } from 'react-toastify'

const toastSettings = {
  position: 'top-center',
  autoClose: 2000
}

export const invokeNotification = (services) => {
  if (services) {
    toast.info(services.count > 0 ?
      `Found ${services.count} service${services.count > 1 ? 's' : ''}!` :
      'No services found',
    toastSettings)
  } else {
    toast.error('Could not connect to server', toastSettings)
  }
}