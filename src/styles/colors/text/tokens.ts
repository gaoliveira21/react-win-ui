export type TextTypes =
  | 'PRIMARY'
  | 'SECONDARY'
  | 'TERTIARY'
  | 'DISABLED'
  | 'ACCENT_PRIMARY'
  | 'ACCENT_SECONDARY'
  | 'ACCENT_TERTIARY'
  | 'ACCENT_DISABLED'
  | 'ON_ACCENT'

export type TextColors = Record<TextTypes, string>
