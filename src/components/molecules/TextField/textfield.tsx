import * as S from './styles'

import { Label, Input } from '@/components/atoms'

export type TextFieldProps = {
  label: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export function TextField({
  label,
  onChange
}: TextFieldProps): React.ReactElement {
  const id = label.replace(/\W/g, '').toLowerCase()

  return (
    <S.Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} placeholder="text" onChange={onChange} />
    </S.Wrapper>
  )
}
