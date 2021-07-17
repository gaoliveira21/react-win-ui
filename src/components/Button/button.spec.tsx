import { render } from '@testing-library/react'
import { Button } from '.'

type SutTypes = {
  sut: HTMLButtonElement
}

const makeSut = (buttonContent = 'any_text'): SutTypes => {
  const { getByRole } = render(<Button>{buttonContent}</Button>)

  const sut = getByRole('button') as HTMLButtonElement

  return { sut }
}

describe('Button', () => {
  it('Should render correct children', () => {
    const btnChildren = 'any_text'
    const { sut } = makeSut(btnChildren)

    expect(sut.textContent).toBe(btnChildren)
  })

  it('Should have pointer cursor', () => {
    const { sut } = makeSut()

    expect(sut).toHaveStyleRule('cursor', 'pointer')
  })
})
