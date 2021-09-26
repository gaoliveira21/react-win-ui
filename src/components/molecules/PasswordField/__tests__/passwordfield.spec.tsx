import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { PasswordField } from '@/components/molecules/PasswordField'
import { renderWithTheme } from '@/tests/render-with-theme'

describe('<PasswordField />', () => {
  it('Should calls onChange with correct value', () => {
    const onChange = jest.fn()
    renderWithTheme(<PasswordField label="text input" onChange={onChange} />)

    const input = screen.getByLabelText(/text input/i)
    const typedValue = 'any_value'
    userEvent.type(input, typedValue)

    expect(onChange).toHaveBeenCalled()

    const event = onChange.mock.calls[0][0]

    expect(event.target.value).toBe(typedValue)
    expect(input).toHaveValue(typedValue)
    expect(input).toMatchSnapshot()
  })
})
