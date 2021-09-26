import {
  lightTextColors,
  lightAccentFillColors,
  lightControlFillColors,
  lightControlStrokeColors,
  lightFocusStrokeColors,
  lightControlElevationColors,
  lightTextControlElevationColors,
  lightSubtleFillColors
} from '@/styles/colors'
import { baseTheme } from '@/styles/base-theme'

export const lightTheme = {
  ...baseTheme,
  dark: false,
  colors: {
    text: lightTextColors,
    fill: {
      accent: lightAccentFillColors,
      control: lightControlFillColors,
      subtle: lightSubtleFillColors
    },
    stroke: {
      control: lightControlStrokeColors,
      focus: lightFocusStrokeColors
    },
    elevation: {
      control: lightControlElevationColors,
      textControl: lightTextControlElevationColors
    }
  }
}
