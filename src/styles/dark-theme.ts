import {
  darkTextColors,
  darkAccentFillColors,
  darkControlFillColors
} from '@/styles/colors'
import { baseTheme } from '@/styles/base-theme'

export const darkTheme = {
  ...baseTheme,
  dark: true,
  colors: {
    text: darkTextColors,
    fill: {
      accent: darkAccentFillColors,
      control: darkControlFillColors
    }
  }
}
