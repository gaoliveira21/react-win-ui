import { useState } from 'react'

import { Label, Input } from '@/components/atoms'

import * as S from './styles'

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
  const [showClear, setShowClear] = useState(false)
  let timerId: NodeJS.Timeout

  const onBlur = () => {
    timerId = setTimeout(() => setShowClear(false))
  }

  const onFocus = () => {
    clearTimeout(timerId)
  }

  return (
    <S.Wrapper onBlur={onBlur} onFocus={onFocus}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onClick={() => setShowClear(true)}
      />
      {showClear && <S.ClearButton aria-label="clear">X</S.ClearButton>}
    </S.Wrapper>
  )
}
