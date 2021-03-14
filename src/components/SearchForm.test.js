import { screen, fireEvent } from '@testing-library/react'
import SearchForm from './SearchForm'
import React from 'react'
import { renderWithTestContext } from '../utils/test-utils'

const renderComponent = () => {
  renderWithTestContext(
    <SearchForm />
  )}

test('renders form correctly', () => {
  renderComponent()
  const linkElement = screen.getByLabelText('Address, Postal code etc.')
  expect(linkElement).toBeInTheDocument()
  expect(linkElement).toHaveValue('')
})

test('when pressed search the input field should be cleared', () => {
  renderComponent()
  const linkElement = screen.getByLabelText('Address, Postal code etc.')
  fireEvent.change(linkElement, { target:{ value: 'foo' } })
  expect(linkElement).toBeInTheDocument()
  expect(linkElement).toHaveValue('foo')
  screen.getByText('Search').click()
  setTimeout(() => {
    expect(linkElement).toHaveValue('')
  }, 50)
})