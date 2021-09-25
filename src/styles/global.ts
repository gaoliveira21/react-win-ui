import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SegoeUI';
    src: url('/fonts/SegoeUI/SegoeUI-VF.ttf');
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html { font-size: 62.5% }

  body, button, input, textarea {
    ${({ theme }) => css`
      font-family: ${({ theme }) => theme.fonts.family};
      font-size: '1.6rem';
    }

    ::-moz-selection {
      color: ${theme.colors.text.ON_ACCENT};
      background: ${theme.colors.text.ACCENT_PRIMARY};
    }

    ::selection {
      color: ${theme.colors.text.ON_ACCENT};
      background: ${theme.colors.text.ACCENT_PRIMARY};
    }
  `}
  }

  *,
  ::before,
  ::after {
    border-width: 0;
    border-style: solid;
    border-color: currentColor;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
  }

  button {
    cursor: pointer;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
`
