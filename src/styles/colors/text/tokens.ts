export type TextTypes =
  | 'PRIMARY'
  | 'SECONDARY'
  | 'TERTIARY'
  | 'ACCENT_PRIMARY'
  | 'ACCENT_SECONDARY'
  | 'ACCENT_TERTIARY'
  | 'DISABLED'
  | 'ON_ACCENT'
  | 'ON_ACCENT_DISABLED'

export type TextColors = Record<TextTypes, string>
