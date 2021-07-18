import styled from 'styled-components'

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.text.BODY.fontFamily};
  font-size: ${({ theme }) => theme.fonts.text.BODY.size};
  font-weight: ${({ theme }) => theme.fonts.text.BODY.weight};
  line-height: ${({ theme }) => theme.fonts.text.BODY.lineHeight};
`
