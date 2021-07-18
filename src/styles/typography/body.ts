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
    size: 12,
    lineHeight: 16,
    fontFamily: FONT_FAMILY.PRIMARY
  },
  BODY: {
    weight: FONT_WEIGHT.NORMAL,
    size: 14,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.PRIMARY
  },
  BODY_STRONG: {
    weight: FONT_WEIGHT.STRONG,
    size: 14,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.PRIMARY
  },
  BODY_LARGE: {
    weight: FONT_WEIGHT.NORMAL,
    size: 18,
    lineHeight: 24,
    fontFamily: FONT_FAMILY.PRIMARY
  }
}
