import { TextTypes } from '@/styles/colors'
import { HeadingFonts } from '@/styles/typography'

import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant?: Lowercase<keyof HeadingFonts>
  color?: Lowercase<TextTypes>
}

export function Heading({
  children,
  as = 'h2',
  color = 'primary',
  variant = 'subtitle'
}: HeadingProps): React.ReactElement {
  return (
    <S.Heading as={as} color={color} variant={variant}>
      {children}
    </S.Heading>
  )
}
