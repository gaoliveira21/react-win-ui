import { screen } from '@testing-library/react'

import { Label } from '@/components/atoms/Label'
import { renderWithTheme } from '@/tests/render-with-theme'

describe('<Label />', () => {
  it('Should render Label with correct text content', () => {
    const textContent = 'any_text'
    renderWithTheme(<Label>{textContent}</Label>)

    const label = screen.getByText(textContent)

    expect(label).toBeInTheDocument()
    expect(label).toMatchSnapshot()
  })
})
