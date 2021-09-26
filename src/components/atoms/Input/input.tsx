import { forwardRef } from 'react'

import * as S from './styles'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref): React.ReactElement => {
    return <S.Input ref={ref} {...props} />
  }
)
