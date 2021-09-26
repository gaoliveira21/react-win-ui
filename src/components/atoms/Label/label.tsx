import * as S from './styles'

export type LabelProps = {
  children: React.ReactNode
} & React.LabelHTMLAttributes<HTMLLabelElement>

export function Label({ children, ...rest }: LabelProps): React.ReactElement {
  return <S.Label {...rest}>{children}</S.Label>
}
