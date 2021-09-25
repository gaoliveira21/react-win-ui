import { screen } from '@testing-library/react'

import { Button } from '@/components/atoms/Button'
import { renderWithTheme } from '@/tests/render-with-theme'
import { lightAccentFillColors } from '@/styles/colors'

describe('<Button />', () => {
  it('Should render button with correct text content', () => {
    renderWithTheme(<Button>text</Button>)

    expect(screen.getByRole('button', { name: /text/i })).toBeInTheDocument()
  })

  it('Should apply the correct styles if disabled', () => {
    renderWithTheme(<Button disabled>text</Button>)

    const button = screen.getByRole('button', { name: /text/i })

    expect(button).toBeDisabled()
    expect(button).toHaveStyleRule(
      'background-color',
      lightAccentFillColors.DISABLED,
      { modifier: ':disabled' }
    )
  })
})
