import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  variant?: 'primary' | 'secondary'
}

export function Button({
  children,
  disabled = false,
  onClick,
  variant = 'primary'
}: ButtonProps): React.ReactElement {
  return (
    <S.Button variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </S.Button>
  )
}
