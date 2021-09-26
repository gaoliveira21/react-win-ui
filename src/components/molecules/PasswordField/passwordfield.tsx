import { Label, Input } from '@/components/atoms'

import * as S from './styles'

export type PasswordFieldProps = {
  label: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string
  placeholder?: string
}

export function PasswordField({
  label,
  onChange,
  value,
  placeholder
}: PasswordFieldProps): React.ReactElement {
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
