import { screen } from '@testing-library/react'
import SingleServiceView from './SingleServiceView'
import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { renderWithProviders, renderWithTestContext } from '../utils/test-utils'
import { Provider } from 'react-redux'
import { createMockStore } from '../utils/test-utils'

const renderComponent = () => {
  renderWithTestContext(
    <Router>
      <Route>
        <SingleServiceView />
      </Route>
    </Router>
  )
}

test('Should have all attributes empty in no services found', () => {

  renderComponent()
  expect(screen.queryByText('Info')).not.toBeInTheDocument()
  expect(screen.queryByText('Description')).not.toBeInTheDocument()
  expect(screen.queryByText('Email')).not.toBeInTheDocument()
  expect(screen.queryByText('Website')).not.toBeInTheDocument()
  expect(screen.queryByText('View in Google Maps')).not.toBeInTheDocument()
  expect(screen.queryByText('Street address')).not.toBeInTheDocument()
  expect(screen.queryByText('Zipcode')).not.toBeInTheDocument()

  expect(screen.getByText('Sorry. Service does not exist.')).toBeInTheDocument()
})

test('Should have all attributes displayed in service is found', () => {

  const initialState = {
    serviceCache: [
      {
        id: 123,
        description: 'test'
      }
    ]
  }
  const store = createMockStore(initialState)

  renderWithProviders(
    <Provider store={store}>
      <Route path="/:id">
        <SingleServiceView/>
      </Route>
    </Provider>,
    {
      route: '/123'
    }
  )

  expect(screen.queryByText('Info')).toBeInTheDocument()
  expect(screen.queryByText('Description')).toBeInTheDocument()
  expect(screen.queryByText('Email')).toBeInTheDocument()
  expect(screen.queryByText('Website')).toBeInTheDocument()
  expect(screen.queryByText('View in Google Maps')).toBeInTheDocument()
  expect(screen.queryByText('Street address')).toBeInTheDocument()
  expect(screen.queryByText('Zipcode')).toBeInTheDocument()
  expect(screen.queryByText('Sorry. Service does not exist.')).not.toBeInTheDocument()
})

