import {
  BodyFonts,
  HeadingFonts,
  bodyFonts,
  headingFonts
} from '@/styles/typography'
import { createContext } from 'react'

export type ThemeProviderData = {
  dark: boolean
  fonts: {
    text: BodyFonts
    heading: HeadingFonts
  }
}

export const initialData: ThemeProviderData = {
  dark: false,
  fonts: {
    heading: headingFonts,
    text: bodyFonts
  }
}

export const ThemeContext = createContext<ThemeProviderData>(initialData)
