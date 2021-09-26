import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;

  > label {
    margin-bottom: 8px;
  }
`

export const TogglePasswordButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    bottom: 3px;
    right: 4px;
    color: ${theme.colors.text.SECONDARY};
    background-color: ${theme.colors.fill.subtle.TRANSPARENT};
    padding: 6px 8px;
    font-size: 16px;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.colors.fill.subtle.SECONDARY};
    }

    &:active {
      background-color: ${theme.colors.fill.subtle.TERTIARY};
    }

    &:focus {
      outline: 1px solid ${theme.colors.stroke.focus.OUTER};
    }
  `}
`
