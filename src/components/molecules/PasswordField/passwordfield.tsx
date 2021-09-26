import { useState } from 'react'
import { RiEyeFill } from 'react-icons/ri'

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
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => setShowPassword((prevValue) => !prevValue)

  return (
    <S.Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={showPassword ? 'text' : 'password'}
      />
      <S.TogglePasswordButton
        aria-label="toggle password"
        onClick={togglePassword}
      >
        <RiEyeFill />
      </S.TogglePasswordButton>
    </S.Wrapper>
  )
}
