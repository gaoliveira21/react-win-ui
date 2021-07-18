import { FONT_FAMILY, FONT_WEIGHT, FontValues } from './tokens'

export type BodyFonts = {
  CAPTION: FontValues
  BODY: FontValues
  BODY_STRONG: FontValues
  BODY_LARGE: FontValues
}

export const bodyFonts: BodyFonts = {
  CAPTION: {
    weight: FONT_WEIGHT.NORMAL,
    size: '12px',
    lineHeight: '16px',
    fontFamily: FONT_FAMILY.PRIMARY
  },
  BODY: {
    weight: FONT_WEIGHT.NORMAL,
    size: '14px',
    lineHeight: '20px',
    fontFamily: FONT_FAMILY.PRIMARY
  },
  BODY_STRONG: {
    weight: FONT_WEIGHT.STRONG,
    size: '14px',
    lineHeight: '20px',
    fontFamily: FONT_FAMILY.PRIMARY
  },
  BODY_LARGE: {
    weight: FONT_WEIGHT.NORMAL,
    size: '18px',
    lineHeight: '24px',
    fontFamily: FONT_FAMILY.PRIMARY
  }
}
