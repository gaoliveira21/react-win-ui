import { useState, createContext } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { darkTheme, lightTheme, Theme } from '@/styles/theme'
import { GlobalStyles } from '@/styles/global'

export type ThemeProviderProps = {
  children?: React.ReactNode
  dark?: boolean
}

export const ThemeContext = createContext<Theme>(lightTheme)

export function ThemeProvider({
  children,
  dark = false
}: ThemeProviderProps): React.ReactElement {
  const [theme] = useState<Theme>(dark ? darkTheme : lightTheme)

  return (
    <ThemeContext.Provider value={theme}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
