import styled from 'styled-components'

import { TextProps } from '.'

export const Text = styled.p<Pick<TextProps, 'variant'>>`
  font-family: ${({ theme, variant }) =>
    theme.fonts.text[variant.toUpperCase()].fontFamily};
  font-size: ${({ theme, variant }) =>
    theme.fonts.text[variant.toUpperCase()].size};
  font-weight: ${({ theme, variant }) =>
    theme.fonts.text[variant.toUpperCase()].weight};
  line-height: ${({ theme, variant }) =>
    theme.fonts.text[variant.toUpperCase()].lineHeight};
`
