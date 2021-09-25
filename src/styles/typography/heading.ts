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
    size: '20px',
    lineHeight: '28px',
    fontFamily: FONT_FAMILY.PRIMARY
  },
  TITLE: {
    weight: FONT_WEIGHT.STRONG,
    size: '28px',
    lineHeight: '36px',
    fontFamily: FONT_FAMILY.PRIMARY
  },
  TITLE_LARGE: {
    weight: FONT_WEIGHT.STRONG,
    size: '40px',
    lineHeight: '52px',
    fontFamily: FONT_FAMILY.PRIMARY
  },
  DISPLAY: {
    weight: FONT_WEIGHT.STRONG,
    size: '68px',
    lineHeight: '92px',
    fontFamily: FONT_FAMILY.PRIMARY
  }
}
