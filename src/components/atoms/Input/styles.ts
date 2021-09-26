import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.fill.control.CONTROL_PRIMARY};
    border: 1px solid ${theme.colors.elevation.textControl.BORDER};
    border-bottom: 2px solid ${theme.colors.stroke.control.SECONDARY};

    color: ${theme.colors.text.PRIMARY};
    font-size: ${theme.fonts.text.BODY.size};
    font-weight: ${theme.fonts.text.BODY.weight};
    line-height: ${theme.fonts.text.BODY.lineHeight};

    padding: 4px 35px 6px 11px;
    border-radius: 3px;

    &::placeholder {
      font-size: ${theme.fonts.text.BODY.size};
      font-weight: ${theme.fonts.text.BODY.weight};
      line-height: ${theme.fonts.text.BODY.lineHeight};
      color: ${theme.colors.text.SECONDARY};
    }

    &:focus {
      outline: none;
      border-bottom: 2px solid ${theme.colors.fill.accent.ACCENT_PRIMARY};
      background-color: ${theme.colors.fill.control.ACTIVE};
    }

    &:hover {
      &:not(:focus, :disabled) {
        background-color: ${theme.colors.fill.control.CONTROL_SECONDARY};
      }
    }

    &:disabled {
      background-color: ${theme.colors.fill.control.DISABLED};
      color: ${theme.colors.text.DISABLED};
      cursor: not-allowed;
    }
  `}
`
