import { bodyFonts, headingFonts } from '@/styles/typography'
import { ligthTextColors } from '@/styles/colors'

export const theme = {
  dark: false,
  fonts: {
    heading: headingFonts,
    text: bodyFonts
  },
  colors: {
    text: ligthTextColors
  }
}

export type Theme = typeof theme
