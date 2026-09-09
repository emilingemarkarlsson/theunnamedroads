export type StatusVariant =
  | 'focus'
  | 'monitor'
  | 'parked'
  | 'avvecklat'
  | 'concept'
  | 'personal'
  | 'linked'
  | 'default'

const LABEL_VARIANTS: Record<string, StatusVariant> = {
  focus: 'focus',
  monitor: 'monitor',
  parked: 'parked',
  avvecklat: 'avvecklat',
  'wound down': 'avvecklat',
  concept: 'concept',
  personal: 'personal',
  linked: 'linked',
  active: 'focus',
  'active experiment': 'focus'
}

/** Map a display label (Focus, Monitor, …) to a shared chip variant. */
export const resolveStatusVariant = (label: string): StatusVariant => {
  const normalized = label.trim().toLowerCase()
  return LABEL_VARIANTS[normalized] ?? 'default'
}
