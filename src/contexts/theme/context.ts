import {
  BodyFonts,
  HeadingFonts,
  bodyFonts,
  headingFonts
} from '@/styles/typography'
import { ligthTextColors, TextColors } from '@/styles/colors'
import { createContext } from 'react'

type ThemeColors = {
  text: TextColors
}

export type ThemeProviderData = {
  dark: boolean
  fonts: {
    text: BodyFonts
    heading: HeadingFonts
  }
  colors: ThemeColors
}

export const initialData: ThemeProviderData = {
  dark: false,
  fonts: {
    heading: headingFonts,
    text: bodyFonts
  },
  colors: {
    text: ligthTextColors
  }
}

export const ThemeContext = createContext<ThemeProviderData>(initialData)
