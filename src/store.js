import serviceReducer from './reducers/serviceReducer'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(
  serviceReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ))

export default store