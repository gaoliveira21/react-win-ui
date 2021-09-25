export type ControlStrokeTypes =
  | 'PRIMARY'
  | 'SECONDARY'
  | 'ON_ACCENT_PRIMARY'
  | 'ON_ACCENT_SECONDARY'
  | 'ON_ACCENT_TERTIARY'
  | 'ON_ACCENT_DISABLED'

export type FocusStrokeTypes = 'OUTER' | 'INNER'

export type ControlStrokeColors = Record<ControlStrokeTypes, string>

export type FocusStrokeColors = Record<FocusStrokeTypes, string>
