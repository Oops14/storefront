import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import Button from './Button'

describe('Button component', () => {
  it('should render the button with children', () => {
    render(<Button>Click me</Button>)

    const buttonElement = screen.getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should call the onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const buttonElement = screen.getByText('Click me')
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should apply the className passed as a prop', () => {
    render(<Button className="btn">Click me</Button>)

    const buttonElement = screen.getByText('Click me')
    expect(buttonElement).toHaveClass('btn')
  })
})
