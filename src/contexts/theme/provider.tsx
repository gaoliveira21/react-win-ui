import { darkTextColors, ligthTextColors } from '@/styles/colors'
import { useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { ThemeContext, ThemeProviderData, initialData } from './context'

type ThemeProviderProps = {
  children?: React.ReactNode
  dark?: boolean
}

export function ThemeProvider({
  children,
  dark = false
}: ThemeProviderProps): React.ReactElement {
  const [theme] = useState<ThemeProviderData>(() => ({
    ...initialData,
    dark,
    colors: {
      text: dark ? darkTextColors : ligthTextColors
    }
  }))

  return (
    <ThemeContext.Provider value={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
