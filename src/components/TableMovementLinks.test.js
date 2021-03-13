import { render, screen } from '@testing-library/react'
import React from 'react'
import TableMovementLinks from './TableMovementLinks'

test('renders component correctly', () => {
  render(<TableMovementLinks />)
})

test('should have previous button visible', () => {
  const services = {
    previous: 'test'
  }
  render(<TableMovementLinks services={services}/>)
  const element = screen.queryByText('Previous page')
  expect(element).toBeInTheDocument()

  const element2 = screen.queryByText('Next page')
  expect(element2).toBeNull()
})

test('should have next button visible', () => {
  const services = {
    next: 'test'
  }
  render(<TableMovementLinks services={services}/>)
  const element = screen.queryByText('Previous page')
  expect(element).toBeNull()

  const element2 = screen.getByText('Next page')
  expect(element2).toBeInTheDocument()
})