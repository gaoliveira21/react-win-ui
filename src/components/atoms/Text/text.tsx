import * as S from './styles'

export type TextProps = {
  children: React.ReactNode
  as?: 'p' | 'strong' | 'span' | 'output' | 'i' | 'small'
}

export function Text({ children, as = 'p' }: TextProps): React.ReactElement {
  return <S.Text as={as}>{children}</S.Text>
}
