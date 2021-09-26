import * as S from './styles'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export function Input(props: InputProps): React.ReactElement {
  return <S.Input {...props} />
}
