import { render } from '@testing-library/react'
import { Button } from '.'

type SutTypes = {
  button: HTMLButtonElement
}

const makeSut = (buttonContent = 'any_text'): SutTypes => {
  const { getByRole } = render(<Button>{buttonContent}</Button>)

  const button = getByRole('button') as HTMLButtonElement

  return { button }
}

describe('Button', () => {
  it('Should render correct children', () => {
    const btnChildren = 'any_text'
    const { button } = makeSut(btnChildren)

    expect(button.textContent).toBe(btnChildren)
  })
})
