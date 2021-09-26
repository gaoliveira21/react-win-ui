import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Input } from '@/components/atoms/Input'
import { renderWithTheme } from '@/tests/render-with-theme'

describe('<Input />', () => {
  it('Should calls onChange when user types', () => {
    const onChange = jest.fn()
    renderWithTheme(<Input placeholder="input" onChange={onChange} />)

    const input = screen.getByPlaceholderText(/input/i)
    const typedValue = 'any_text'
    userEvent.type(input, typedValue)

    expect(onChange).toHaveBeenCalled()

    const event = onChange.mock.calls[0][0]

    expect(event.target.value).toBe(typedValue)
    expect(input).toMatchSnapshot()
  })

  it('Should receive a value prop', () => {
    const value = 'any_value'
    renderWithTheme(<Input placeholder="input" value={value} readOnly />)

    expect(screen.getByPlaceholderText(/input/i)).toHaveValue(value)
  })
})
