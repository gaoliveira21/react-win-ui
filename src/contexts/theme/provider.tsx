import { useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { ThemeContext, ThemeProviderData, initialData } from './context'

type ThemeProviderProps = {
  children?: React.ReactNode
}

export function ThemeProvider({
  children
}: ThemeProviderProps): React.ReactElement {
  const [theme] = useState<ThemeProviderData>(initialData)

  return (
    <ThemeContext.Provider value={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
