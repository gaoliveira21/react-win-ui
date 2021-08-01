import { render } from '@testing-library/react'

import { ThemeProvider } from '@/contexts/theme/provider'
import { bodyFonts } from '@/styles/typography'
import { ligthTextColors, darkTextColors } from '@/styles/colors'

import { Text, TextProps } from '.'

type SutTypes = {
  sut: Element
}

type SutParams = {
  textContent?: string
  as?: TextProps['as']
  variant?: TextProps['variant']
  color?: TextProps['color']
  dark?: boolean
}

const makeSut = (params: SutParams = { textContent: 'any_text' }): SutTypes => {
  const { container } = render(
    <ThemeProvider dark={params.dark}>
      <Text as={params.as} variant={params.variant} color={params.color}>
        {params.textContent}
      </Text>
    </ThemeProvider>
  )

  const sut = container.firstElementChild

  return {
    sut
  }
}

const assertFontStyle = (sut: Element, font: TextProps['variant'] = 'body') => {
  expect(sut).toHaveStyleRule(
    'font-family',
    bodyFonts[font.toUpperCase()].fontFamily
  )
  expect(sut).toHaveStyleRule('font-size', bodyFonts[font.toUpperCase()].size)
  expect(sut).toHaveStyleRule(
    'line-height',
    bodyFonts[font.toUpperCase()].lineHeight
  )
  expect(sut).toHaveStyleRule(
    'font-weight',
    bodyFonts[font.toUpperCase()].weight
  )
  expect(sut).toHaveStyleRule('color', ligthTextColors.PRIMARY)
}

describe('Testing Text component', () => {
  it('Should render Text with correct initial styles', () => {
    const { sut } = makeSut()

    assertFontStyle(sut)
  })

  it('Should render Text with correct children prop', () => {
    const textContent = 'text_content'
    const { sut } = makeSut({ textContent })

    expect(sut.textContent).toBe(textContent)
  })

  it('Should render Text as paragraph by default', () => {
    const { sut } = makeSut()

    expect(sut.tagName.toLowerCase()).toBe('p')
  })

  it('Should render Text with different html tag if "as" prop has been passed', () => {
    const tagName = 'strong'
    const { sut } = makeSut({ as: tagName })

    expect(sut.tagName.toLowerCase()).toBe(tagName)
  })

  it('Should render with "BODY_LARGE" styles if "variants" prop is equal to "body_large"', () => {
    const variant = 'body_large'
    const { sut } = makeSut({ variant })

    assertFontStyle(sut, variant)
  })

  it('Should render with "CAPTION" styles if "variants" prop is equal to "caption"', () => {
    const variant = 'caption'
    const { sut } = makeSut({ variant })

    assertFontStyle(sut, variant)
  })

  it('Should render with "BODY_STRONG" styles if "variants" prop is equal to "body_strong"', () => {
    const variant = 'body_strong'
    const { sut } = makeSut({ variant })

    assertFontStyle(sut, variant)
  })

  it('Should render with correct color', () => {
    const { sut } = makeSut({ color: 'accent_primary' })

    expect(sut).toHaveStyleRule('color', ligthTextColors.ACCENT_PRIMARY)
  })

  it('Should render with correct color if dark mode is enable', () => {
    const { sut } = makeSut({ dark: true })

    expect(sut).toHaveStyleRule('color', darkTextColors.PRIMARY)
  })
})
