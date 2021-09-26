import {
  darkTextColors,
  darkAccentFillColors,
  darkControlFillColors,
  darkControlStrokeColors,
  darkFocusStrokeColos,
  darkControlElevationColors,
  darkTextControlElevationColors
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
    },
    stroke: {
      control: darkControlStrokeColors,
      focus: darkFocusStrokeColos
    },
    elevation: {
      control: darkControlElevationColors,
      textControl: darkTextControlElevationColors
    }
  }
}
