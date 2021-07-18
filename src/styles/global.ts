import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }

  @font-face {
    font-family: 'SegoeUI';
    src: url('/fonts/SegoeUI/SegoeUI-VF.ttf')
  }
`
