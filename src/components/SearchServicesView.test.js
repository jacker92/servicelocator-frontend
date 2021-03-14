import { screen } from '@testing-library/react'
import React from 'react'
import { renderWithTestContext } from '../utils/test-utils'
import SearchServicesView from './SearchServicesView'

test('renders component correctly', () => {
  renderWithTestContext(
    <SearchServicesView />
  )
  const linkElement = screen.getByText('Helsinki Service Locator')
  expect(linkElement).toBeInTheDocument()

  const linkElement2 = screen.getByText('Search')
  expect(linkElement2).toBeInTheDocument()
})