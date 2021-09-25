import { useState, createContext } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { darkTextColors, ligthTextColors } from '@/styles/colors'
import { theme as defaultTheme, Theme } from '@/styles/theme'
import { GlobalStyles } from '@/styles/global'

type ThemeProviderProps = {
  children?: React.ReactNode
  dark?: boolean
}

export const ThemeContext = createContext<Theme>(defaultTheme)

export function ThemeProvider({
  children,
  dark = false
}: ThemeProviderProps): React.ReactElement {
  const [theme] = useState<Theme>(() => ({
    ...defaultTheme,
    dark,
    colors: {
      text: dark ? darkTextColors : ligthTextColors
    }
  }))

  return (
    <ThemeContext.Provider value={theme}>
      <GlobalStyles />
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
