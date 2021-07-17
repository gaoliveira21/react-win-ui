import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps): React.ReactElement {
  return <S.Button>{children}</S.Button>
}
