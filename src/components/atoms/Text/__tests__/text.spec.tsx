import { screen } from '@testing-library/react'

import { bodyFonts } from '@/styles/typography'
import { ligthTextColors, darkTextColors } from '@/styles/colors'

import { renderWithTheme } from '@/tests/render-with-theme'

import { Text, TextProps } from '@/components/atoms/Text'

const assertFontStyle = (sut: Element, font: TextProps['variant'] = 'body') => {
  expect(sut).toHaveStyle({
    'font-family': bodyFonts[font.toUpperCase()].fontFamily,
    'font-size': bodyFonts[font.toUpperCase()].size,
    'line-height': bodyFonts[font.toUpperCase()].lineHeight,
    'font-weight': bodyFonts[font.toUpperCase()].weight,
    color: ligthTextColors.PRIMARY
  })
}

describe('<Text />', () => {
  it('Should render Text with correct initial styles', () => {
    renderWithTheme(<Text>text_content</Text>)

    assertFontStyle(screen.getByText(/text_content/i))
  })

  it('Should render Text with correct children prop', () => {
    const textContent = 'text_content'
    renderWithTheme(<Text>{textContent}</Text>)

    expect(screen.getByText(textContent)).toBeInTheDocument()
  })

  it('Should render Text as paragraph by default', () => {
    renderWithTheme(<Text>text_content</Text>)

    expect(screen.getByText(/text_content/i).tagName.toLowerCase()).toBe('p')
  })

  it('Should render Text with different html tag if "as" prop has been passed', () => {
    const tagName = 'strong'
    renderWithTheme(<Text as={tagName}>text_content</Text>)

    expect(screen.getByText(/text_content/i).tagName.toLowerCase()).toBe(
      tagName
    )
  })

  it('Should render with "BODY_LARGE" styles if "variants" prop is equal to "body_large"', () => {
    renderWithTheme(<Text variant="body_large">text_content</Text>)

    assertFontStyle(screen.getByText(/text_content/i), 'body_large')
  })

  it('Should render with "CAPTION" styles if "variants" prop is equal to "caption"', () => {
    renderWithTheme(<Text variant="caption">text_content</Text>)

    assertFontStyle(screen.getByText(/text_content/i), 'caption')
  })

  it('Should render with "BODY_STRONG" styles if "variants" prop is equal to "body_strong"', () => {
    renderWithTheme(<Text variant="body_strong">text_content</Text>)

    assertFontStyle(screen.getByText(/text_content/i), 'body_strong')
  })

  it('Should render with correct color', () => {
    renderWithTheme(<Text color="accent_primary">text_content</Text>)

    expect(screen.getByText(/text_content/i)).toHaveStyle({
      color: ligthTextColors.ACCENT_PRIMARY
    })
  })

  it('Should render with correct color if dark mode is enable', () => {
    renderWithTheme(<Text>text_content</Text>, { dark: true })

    expect(screen.getByText(/text_content/i)).toHaveStyleRule(
      'color',
      darkTextColors.PRIMARY
    )
  })
})
