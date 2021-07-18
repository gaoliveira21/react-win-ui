import { render } from '@testing-library/react'

import { ThemeProvider } from '@/contexts/theme/provider'
import { bodyFonts } from '@/styles/typography'

import { Text } from '.'

describe('Testing Text component', () => {
  it('Should render Text with correct initial styles', () => {
    const { container } = render(
      <ThemeProvider>
        <Text>any_text</Text>
      </ThemeProvider>
    )

    const text = container.firstChild

    expect(text).toHaveStyleRule('font-family', bodyFonts.BODY.fontFamily)
    expect(text).toHaveStyleRule('font-size', bodyFonts.BODY.size)
    expect(text).toHaveStyleRule('line-height', bodyFonts.BODY.lineHeight)
    expect(text).toHaveStyleRule('font-weight', bodyFonts.BODY.weight)
  })
})
