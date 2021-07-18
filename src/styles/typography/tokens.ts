export enum FONT_WEIGHT {
  NORMAL = 400,
  STRONG = 600
}

export enum FONT_FAMILY {
  PRIMARY = 'SegoeUI'
}

export type FontValues = {
  weight: FONT_WEIGHT
  size: number | string
  lineHeight: number | string
  fontFamily: FONT_FAMILY
}
