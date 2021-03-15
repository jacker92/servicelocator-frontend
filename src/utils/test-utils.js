import React from 'react'
import { createMemoryHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

export const renderWithProviders = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {},

) => {
  console.log('I am route inside renderWithProviders Wrapper:', route)
  return {
    ...render(
      <Router history={history}>
        <Route path={route}>{ui}</Route>
      </Router>
    ),
    history
  }
}

export const renderWithTestContext = (elements, services) => {
  const store = createMockStore({
    services:
      services || {}
  })

  render(
    <Provider store={store}>
      {elements}
    </Provider>
  )
}

export const createMockStore = (initialState) => {
  const middlewares = []
  const mockStore = configureStore(middlewares)
  return mockStore(initialState)
}