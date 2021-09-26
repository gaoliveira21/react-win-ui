export type AccentFillTypes =
  | 'ACCENT_PRIMARY'
  | 'ACCENT_SECONDARY'
  | 'ACCENT_TERTIARY'
  | 'DISABLED'

export type ControlFillTypes =
  | 'CONTROL_PRIMARY'
  | 'CONTROL_SECONDARY'
  | 'CONTROL_TERTIARY'
  | 'DISABLED'
  | 'TRANSPARENT'
  | 'ACTIVE'

export type SubtleFillTypes =
  | 'TRANSPARENT'
  | 'SECONDARY'
  | 'TERTIARY'
  | 'DISABLED'

export type AccentFillColors = Record<AccentFillTypes, string>

export type ControlFillColors = Record<ControlFillTypes, string>

export type SubtleFillColors = Record<SubtleFillTypes, string>
