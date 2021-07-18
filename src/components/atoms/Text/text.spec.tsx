import { render } from '@testing-library/react'

import { ThemeProvider } from '@/contexts/theme/provider'
import { bodyFonts } from '@/styles/typography'

import { Text } from '.'

type SutTypes = {
  sut: Element
}

type SutParams = {
  textContent?: string
}

const makeSut = (params: SutParams = { textContent: 'any_text' }): SutTypes => {
  const { container } = render(
    <ThemeProvider>
      <Text>{params.textContent}</Text>
    </ThemeProvider>
  )

  const sut = container.firstElementChild

  return {
    sut
  }
}

describe('Testing Text component', () => {
  it('Should render Text with correct initial styles', () => {
    const { sut } = makeSut()

    expect(sut).toHaveStyleRule('font-family', bodyFonts.BODY.fontFamily)
    expect(sut).toHaveStyleRule('font-size', bodyFonts.BODY.size)
    expect(sut).toHaveStyleRule('line-height', bodyFonts.BODY.lineHeight)
    expect(sut).toHaveStyleRule('font-weight', bodyFonts.BODY.weight)
  })

  it('Should render Text with correct children prop', () => {
    const textContent = 'text_content'
    const { sut } = makeSut({ textContent })

    expect(sut.textContent).toBe(textContent)
  })
})
