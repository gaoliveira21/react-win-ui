import { screen } from '@testing-library/react'

import { Button } from '@/components/atoms/Button'
import { renderWithTheme } from '@/tests/render-with-theme'

describe('<Button />', () => {
  it('Should render button with correct text content', () => {
    renderWithTheme(<Button>text</Button>)

    expect(screen.getByRole('button', { name: /text/i })).toBeInTheDocument()
  })
})
