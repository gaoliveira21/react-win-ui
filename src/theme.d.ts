/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DefaultTheme } from 'styled-components'
import { ThemeProviderData } from '@/contexts/theme/context'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProviderData {}
}
