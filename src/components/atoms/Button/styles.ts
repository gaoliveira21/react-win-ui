import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

const modifiers = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.text.ON_ACCENT};
    background-color: ${theme.colors.fill.accent.ACCENT_PRIMARY};

    &:hover {
      background-color: ${theme.colors.fill.accent.ACCENT_SECONDARY};
    }

    &:active {
      background-color: ${theme.colors.fill.accent.ACCENT_TERTIARY};
    }

    &:disabled {
      color: ${theme.colors.text.ON_ACCENT_DISABLED};
      background-color: ${theme.colors.fill.accent.DISABLED};
    }
  `,

  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.text.PRIMARY};
    background-color: ${theme.colors.fill.control.CONTROL_PRIMARY};

    &:hover {
      background-color: ${theme.colors.fill.control.CONTROL_SECONDARY};
    }

    &:active {
      background-color: ${theme.colors.fill.control.CONTROL_TERTIARY};
    }

    &:disabled {
      color: ${theme.colors.text.DISABLED};
      background-color: ${theme.colors.fill.control.CONTROL_PRIMARY};
    }
  `
}

export const Button = styled.button<Pick<ButtonProps, 'variant'>>`
  ${({ theme, variant }) => css`
    font-size: ${theme.fonts.text.BODY.size};
    font-weight: ${theme.fonts.text.BODY.weight};
    line-height: ${theme.fonts.text.BODY.lineHeight};

    box-shadow: 0 0 2px 2px ${theme.colors.elevation.control.BORDER};

    padding: 5px 47px;
    border-radius: 4px;

    transition: background-color 0.3s;

    &:disabled {
      cursor: not-allowed;
    }

    &:focus {
      outline: 3px solid ${theme.colors.stroke.focus.OUTER};
      border: 1px solid ${theme.colors.stroke.focus.INNER};
    }

    ${!!variant && modifiers[variant](theme)};
  `}
`
