import { TextTypes } from '@/styles/colors'
import { BodyFonts } from '@/styles/typography'

import * as S from './styles'

export type TextProps = {
  children: React.ReactNode
  as?: 'p' | 'strong' | 'span' | 'output' | 'i' | 'small'
  variant?: Lowercase<keyof BodyFonts>
  color?: Lowercase<TextTypes>
}

export function Text({
  children,
  as = 'p',
  variant = 'body',
  color = 'primary'
}: TextProps): React.ReactElement {
  return (
    <S.Text as={as} variant={variant} color={color}>
      {children}
    </S.Text>
  )
}
