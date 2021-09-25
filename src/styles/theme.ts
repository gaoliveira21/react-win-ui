import { bodyFonts, headingFonts } from '@/styles/typography'
import { ligthTextColors } from '@/styles/colors'

export const theme = {
  dark: false,
  fonts: {
    family:
      "'Segoe UI', --apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    heading: headingFonts,
    text: bodyFonts
  },
  colors: {
    text: ligthTextColors
  }
}

export type Theme = typeof theme
