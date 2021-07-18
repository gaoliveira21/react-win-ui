import { FONT_FAMILY, FONT_WEIGHT, FontValues } from './tokens'

export type HeadingFonts = {
  SUBTITLE: FontValues
  TITLE: FontValues
  TITLE_LARGE: FontValues
  DISPLAY: FontValues
}

export const headingFonts: HeadingFonts = {
  SUBTITLE: {
    weight: FONT_WEIGHT.STRONG,
    size: 20,
    lineHeight: 28,
    fontFamily: FONT_FAMILY.PRIMARY
  },
  TITLE: {
    weight: FONT_WEIGHT.STRONG,
    size: 28,
    lineHeight: 36,
    fontFamily: FONT_FAMILY.PRIMARY
  },
  TITLE_LARGE: {
    weight: FONT_WEIGHT.STRONG,
    size: 40,
    lineHeight: 52,
    fontFamily: FONT_FAMILY.PRIMARY
  },
  DISPLAY: {
    weight: FONT_WEIGHT.STRONG,
    size: 68,
    lineHeight: 92,
    fontFamily: FONT_FAMILY.PRIMARY
  }
}
