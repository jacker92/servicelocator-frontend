import { render, screen } from '@testing-library/react'
import ServiceList from './ServiceList'
import React from 'react'

test('Should not have anything displayed by default', () => {
  render(<ServiceList />)

  expect(screen.queryByText('Name')).not.toBeInTheDocument()
  expect(screen.queryByText('Email')).not.toBeInTheDocument()
  expect(screen.queryByText('Website')).not.toBeInTheDocument()
  expect(screen.queryByText('Info')).not.toBeInTheDocument()
})