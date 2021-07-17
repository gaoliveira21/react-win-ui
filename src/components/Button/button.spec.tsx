import { render } from '@testing-library/react'
import { Button } from '.'

describe('Button', () => {
  it('Should render correct chldren', () => {
    const buttonContent = 'any_button'

    const { getByRole } = render(<Button>{buttonContent}</Button>)

    const button = getByRole('button')

    expect(button.textContent).toBe(buttonContent)
  })
})
