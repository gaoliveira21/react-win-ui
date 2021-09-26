import { useRef, useState } from 'react'

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

  const inputRef = useRef<HTMLInputElement>(null)

  const [showClear, setShowClear] = useState(false)
  let timerId: NodeJS.Timeout

  const onBlur = () => {
    timerId = setTimeout(() => setShowClear(false))
  }

  const onFocus = () => {
    clearTimeout(timerId)
  }

  const onClear = () => {
    inputRef.current.value = ''
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
        ref={inputRef}
      />
      {showClear && (
        <S.ClearButton onClick={onClear} aria-label="clear">
          X
        </S.ClearButton>
      )}
    </S.Wrapper>
  )
}
