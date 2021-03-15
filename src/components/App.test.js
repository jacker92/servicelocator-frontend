import { screen } from '@testing-library/react'
import App from './App'
import React from 'react'
import { renderWithTestContext } from '../utils/test-utils'

test('renders components', () => {
  renderWithTestContext(
    <App />
  )

  const linkElement = screen.getByText('Helsinki Service Locator')
  expect(linkElement).toBeInTheDocument()

  const linkElement2 = screen.getByText('Search')
  expect(linkElement2).toBeInTheDocument()
})