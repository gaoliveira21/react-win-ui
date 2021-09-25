import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.text.ON_ACCENT};
    font-size: ${theme.fonts.text.BODY.size};
    font-weight: ${theme.fonts.text.BODY.weight};
    line-height: ${theme.fonts.text.BODY.lineHeight};

    background-color: ${theme.colors.fill.accent.ACCENT_PRIMARY};
    padding: 5px 47px;
    border-radius: 4px;

    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.colors.fill.accent.ACCENT_SECONDARY};
    }

    &:active {
      background-color: ${theme.colors.fill.accent.ACCENT_TERTIARY};
    }

    &:disabled {
      color: ${theme.colors.text.DISABLED};
      background-color: ${theme.colors.fill.accent.DISABLED};
      cursor: not-allowed;
    }

    &:focus {
      outline: 3px solid ${theme.colors.stroke.focus.OUTER};
      border: 1px solid ${theme.colors.stroke.focus.INNER};
    }
  `}
`
