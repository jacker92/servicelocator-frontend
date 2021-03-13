import { render, screen } from '@testing-library/react'
import React from 'react'
import SearchServicesView from './SearchServicesView'

test('renders component correctly', () => {
  render(<SearchServicesView />)
  const linkElement = screen.getByText('Helsinki Service Locator')
  expect(linkElement).toBeInTheDocument()

  const linkElement2 = screen.getByText('Search')
  expect(linkElement2).toBeInTheDocument()
})