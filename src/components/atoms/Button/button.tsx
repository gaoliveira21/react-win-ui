import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
}

export function Button({
  children,
  disabled = false
}: ButtonProps): React.ReactElement {
  return <S.Button disabled={disabled}>{children}</S.Button>
}
