import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '@/components/atoms/Button'
import { renderWithTheme } from '@/tests/render-with-theme'
import {
  lightAccentFillColors,
  lightTextColors,
  lightControlFillColors
} from '@/styles/colors'

describe('<Button />', () => {
  it('Should render button with correct text content', () => {
    renderWithTheme(<Button>text</Button>)

    const button = screen.getByRole('button', { name: /text/i })

    expect(button).toBeInTheDocument()
    expect(button).toMatchSnapshot()
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

  it('Should calls onClick', () => {
    const onClick = jest.fn()
    renderWithTheme(<Button onClick={onClick}>text</Button>)

    userEvent.click(screen.getByRole('button', { name: /text/i }))

    expect(onClick).toHaveBeenCalled()
  })

  it('Should render a primary Button by default', () => {
    renderWithTheme(<Button>text</Button>)

    expect(screen.getByRole('button', { name: /text/i })).toHaveStyle({
      backgroundColor: lightAccentFillColors.ACCENT_PRIMARY,
      color: lightTextColors.ON_ACCENT
    })
  })

  it('Should render a secondary Button', () => {
    renderWithTheme(<Button variant="secondary">text</Button>)

    expect(screen.getByRole('button', { name: /text/i })).toHaveStyle({
      backgroundColor: lightControlFillColors.CONTROL_PRIMARY,
      color: lightTextColors.PRIMARY
    })
  })
})
