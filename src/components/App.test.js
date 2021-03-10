import { render, screen } from '@testing-library/react'
import App from './App'
import React from 'react'

test('renders components', () => {
  render(<App />)

  const linkElement = screen.getByText('Helsinki Service Locator')
  expect(linkElement).toBeInTheDocument()

  const linkElement2 = screen.getByText('Search')
  expect(linkElement2).toBeInTheDocument()
})