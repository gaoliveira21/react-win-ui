import {
  lightTextColors,
  lightAccentFillColors,
  lightControlFillColors
} from '@/styles/colors'
import { baseTheme } from '@/styles/base-theme'

export const lightTheme = {
  ...baseTheme,
  dark: false,
  colors: {
    text: lightTextColors,
    fill: {
      accent: lightAccentFillColors,
      control: lightControlFillColors
    }
  }
}
