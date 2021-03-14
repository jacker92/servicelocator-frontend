import { render, screen } from '@testing-library/react'
import React from 'react'
import PaginationLinks from './PaginationLinks'

test('renders component correctly', () => {
  render(<PaginationLinks />)
})

test('should have previous button visible', () => {
  const services = {
    previous: 'test'
  }
  render(<PaginationLinks services={services}/>)
  const element = screen.queryByText('‹')
  expect(element).toBeInTheDocument()

  const element2 = screen.queryByText('›')
  expect(element2).toBeNull()
})

test('should have next button visible', () => {
  const services = {
    next: 'test'
  }
  render(<PaginationLinks services={services}/>)
  const element = screen.queryByText('‹')
  expect(element).toBeNull()

  const element2 = screen.getByText('›')
  expect(element2).toBeInTheDocument()
})