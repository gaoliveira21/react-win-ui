import styled, { css } from 'styled-components'

import { TextProps } from '.'

export const Text = styled.p<Pick<TextProps, 'variant' | 'color'>>`
  ${({ theme, variant, color }) => css`
    font-family: ${theme.fonts.text[variant.toUpperCase()].fontFamily};}
    font-size: ${theme.fonts.text[variant.toUpperCase()].size};}
    font-weight: ${theme.fonts.text[variant.toUpperCase()].weight};}
    line-height: ${theme.fonts.text[variant.toUpperCase()].lineHeight};}
    color: ${theme.colors.text[color.toUpperCase()]};
  `}
`
