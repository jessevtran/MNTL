/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from './sample'

describe('HomePage', () => {
  it('renders a heading', () => {
    render(<HomePage />)

    const heading = screen.getByText(/This is a test!/i);

    expect(heading).toBeInTheDocument()
  })
})