import { screen } from '@testing-library/react'

import { TextField } from '@/components/molecules/TextField'
import { renderWithTheme } from '@/tests/render-with-theme'
import userEvent from '@testing-library/user-event'

describe('<TextField />', () => {
  it('Should calls onChange with correct value', () => {
    const onChange = jest.fn()
    renderWithTheme(<TextField label="text input" onChange={onChange} />)

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
