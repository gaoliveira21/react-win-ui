import { screen, waitFor } from '@testing-library/react'

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

  it('Should receive a value and placeholder prop', () => {
    const value = 'any_value'
    const placeholder = 'any_placeholder'
    renderWithTheme(
      <TextField
        label="text input"
        placeholder={placeholder}
        value={value}
        onChange={() => {}}
      />
    )

    const input = screen.getByPlaceholderText(placeholder)

    expect(input).toHaveValue(value)
  })

  it('Should render ClearButton correctly', async () => {
    renderWithTheme(<TextField label="text input" />)

    expect(
      screen.queryByRole('button', { name: 'clear' })
    ).not.toBeInTheDocument()

    const input = screen.getByLabelText(/text input/i)
    userEvent.click(input)

    const closeButton = screen.getByRole('button', { name: 'clear' })
    expect(closeButton).toBeInTheDocument()

    userEvent.click(closeButton)
    expect(closeButton).toBeInTheDocument()

    userEvent.tab()

    await waitFor(() =>
      expect(
        screen.queryByRole('button', { name: 'clear' })
      ).not.toBeInTheDocument()
    )
  })
})
