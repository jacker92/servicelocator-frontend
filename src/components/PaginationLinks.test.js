import { screen } from '@testing-library/react'
import React from 'react'
import { renderWithTestContext } from '../utils/test-utils'
import PaginationLinks from './PaginationLinks'

test('renders component correctly', () => {
  renderWithTestContext(
    <PaginationLinks />
  )
})

test('should have previous button visible', () => {
  const services = {
    previous: 'test'
  }

  renderWithTestContext(
    <PaginationLinks/>, { services }
  )

  const element = screen.queryByText('‹')
  expect(element).toBeInTheDocument()

  const element2 = screen.queryByText('›')
  expect(element2).toBeNull()
})

test('should have next button visible', () => {
  const services = {
    next: 'test'
  }

  renderWithTestContext(
    <PaginationLinks/>, { services }
  )

  const element = screen.queryByText('‹')
  expect(element).toBeNull()

  const element2 = screen.getByText('›')
  expect(element2).toBeInTheDocument()
})

test('should show active page correctly', () => {
  const assertedValue = 22
  const services = {
    next: 'test'
  }
  renderWithTestContext(
    <PaginationLinks/>, { services, activePage: assertedValue }
  )

  const element = screen.queryByText(assertedValue)
  expect(element).toBeInTheDocument()
})