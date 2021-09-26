import styled, { css } from 'styled-components'

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fonts.text.BODY.size};
    font-weight: ${theme.fonts.text.BODY.weight};
    line-height: ${theme.fonts.text.BODY.lineHeight};
    color: ${theme.colors.text.PRIMARY};
  `}
`
