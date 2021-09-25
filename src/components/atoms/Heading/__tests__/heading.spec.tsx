import { screen } from '@testing-library/react'

import { headingFonts } from '@/styles/typography'
import { darkTextColors, ligthTextColors } from '@/styles/colors'

import { renderWithTheme } from '@/tests/render-with-theme'

import { Heading, HeadingProps } from '@/components/atoms/Heading'

const assertFontStyle = (
  sut: Element,
  font: HeadingProps['variant'] = 'subtitle'
) => {
  expect(sut).toHaveStyle({
    'font-family': headingFonts[font.toUpperCase()].fontFamily,
    'font-size': headingFonts[font.toUpperCase()].size,
    'line-height': headingFonts[font.toUpperCase()].lineHeight,
    'font-weight': headingFonts[font.toUpperCase()].weight,
    color: ligthTextColors.PRIMARY
  })
}

describe('<Heading />', () => {
  it('Should render Heading with correct initial styles', () => {
    renderWithTheme(<Heading>text_content</Heading>)

    assertFontStyle(
      screen.getByRole('heading', { name: /text_content/i }),
      'subtitle'
    )
  })

  it('Should render Heading with correct text content', () => {
    const textContent = 'any_text'
    renderWithTheme(<Heading>{textContent}</Heading>)

    expect(
      screen.getByRole('heading', { name: textContent })
    ).toBeInTheDocument()
  })

  it('Should render Heading as a h2 by default', () => {
    renderWithTheme(<Heading>text_content</Heading>)

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('Should render Heading with different html element if "as" props has been passed', () => {
    renderWithTheme(<Heading as="h1">text_content</Heading>)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('Should render with "TITLE" styles if "variants" prop is equal to "title"', () => {
    renderWithTheme(<Heading variant="title">text_content</Heading>)

    assertFontStyle(
      screen.getByRole('heading', { name: /text_content/i }),
      'title'
    )
  })

  it('Should render with "TITLE_LARGE" styles if "variants" prop is equal to "title_large"', () => {
    renderWithTheme(<Heading variant="title_large">text_content</Heading>)

    assertFontStyle(
      screen.getByRole('heading', { name: /text_content/i }),
      'title_large'
    )
  })

  it('Should render with "DISPLAY" styles if "variants" prop is equal to "display"', () => {
    renderWithTheme(<Heading variant="display">text_content</Heading>)

    assertFontStyle(
      screen.getByRole('heading', { name: /text_content/i }),
      'display'
    )
  })

  it('Should render with correct color', () => {
    renderWithTheme(<Heading color="accent_primary">text_content</Heading>)

    expect(screen.getByRole('heading', { name: /text_content/i })).toHaveStyle({
      color: ligthTextColors.ACCENT_PRIMARY
    })
  })

  it('Should render with correct color if dark mode is enable', () => {
    renderWithTheme(<Heading color="accent_primary">text_content</Heading>, {
      dark: true
    })

    expect(screen.getByRole('heading', { name: /text_content/i })).toHaveStyle({
      color: darkTextColors.ACCENT_PRIMARY
    })
  })
})
