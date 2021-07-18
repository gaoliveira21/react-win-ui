import * as S from './styles'

export type TextProps = {
  children: React.ReactNode
}

export function Text({ children }: TextProps): React.ReactElement {
  return <S.Text>{children}</S.Text>
}
