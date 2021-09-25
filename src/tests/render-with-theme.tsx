import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider, ThemeProviderProps } from '@/theme/provider'

export const renderWithTheme = (
  ui: React.ReactElement,
  options?: Omit<ThemeProviderProps, 'children'>
): RenderResult => render(<ThemeProvider {...options}>{ui}</ThemeProvider>)
