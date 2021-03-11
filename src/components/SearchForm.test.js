import { render, screen, fireEvent } from '@testing-library/react'
import SearchForm from './SearchForm'
import React from 'react'

test('renders form correctly', () => {
  render(<SearchForm />)

  const linkElement = screen.getByLabelText('Address, Postal code etc.')
  expect(linkElement).toBeInTheDocument()
  expect(linkElement).toHaveValue('')
})

test('when pressed search the input field should be cleared', () => {
  render(<SearchForm />)

  const linkElement = screen.getByLabelText('Address, Postal code etc.')
  fireEvent.change(linkElement, { target:{ value: 'foo' } })
  expect(linkElement).toBeInTheDocument()
  expect(linkElement).toHaveValue('foo')

  screen.getByText('Search').click()
  expect(linkElement).toHaveValue('')
})