import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function Button({
  children,
  disabled = false,
  onClick
}: ButtonProps): React.ReactElement {
  return (
    <S.Button onClick={onClick} disabled={disabled}>
      {children}
    </S.Button>
  )
}
