import styled, { css } from 'styled-components'

import { HeadingProps } from '.'

export const Heading = styled.div<Pick<HeadingProps, 'variant' | 'color'>>`
  ${({ theme, variant, color }) => css`
  font-family: ${theme.fonts.heading[variant.toUpperCase()].fontFamily};}
    font-size: ${theme.fonts.heading[variant.toUpperCase()].size};}
    font-weight: ${theme.fonts.heading[variant.toUpperCase()].weight};}
    line-height: ${theme.fonts.heading[variant.toUpperCase()].lineHeight};}
    color: ${theme.colors.text[color.toUpperCase()]};
  `}
`
