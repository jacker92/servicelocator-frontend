import React from 'react'
import { createMemoryHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import { render } from '@testing-library/react'
import { ApplicationContext } from '../contexts/ApplicationContext'

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

export const renderWithTestContext = (elements, values) => {
  render(
    <ApplicationContext.Provider value={values || {}}>
      {elements}
    </ApplicationContext.Provider>
  )
}