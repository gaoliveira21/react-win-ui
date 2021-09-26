import * as S from './styles'

import { Label, Input } from '@/components/atoms'

export type TextFieldProps = {
  label: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string
  placeholder?: string
}

export function TextField({
  label,
  onChange,
  value,
  placeholder
}: TextFieldProps): React.ReactElement {
  const id = label.replace(/\W/g, '').toLowerCase()

  return (
    <S.Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </S.Wrapper>
  )
}
