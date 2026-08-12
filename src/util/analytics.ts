type AnalyticsPayload = Record<string, string | number | boolean | null | undefined>

declare global {
  interface Window {
    posthog?: {
      capture: (eventName: string, payload?: AnalyticsPayload) => void
    }
  }
}

export type TurEventName =
  | 'cta_click'
  | 'venture_card_click'
  | 'primary_cta_clicked'
  | 'signup_completed'

function readUtmParams(): AnalyticsPayload {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get('utm_source') ?? undefined,
    utm_medium: params.get('utm_medium') ?? undefined,
    utm_campaign: params.get('utm_campaign') ?? undefined,
    utm_term: params.get('utm_term') ?? undefined,
    utm_content: params.get('utm_content') ?? undefined
  }
}

/** Capture a PostHog event with site context and UTM params. */
export function trackEvent(
  eventName: TurEventName,
  payload: AnalyticsPayload = {}
): void {
  if (typeof window === 'undefined') return

  window.posthog?.capture(eventName, {
    site: 'theunnamedroads',
    page_path: window.location.pathname,
    page_url: window.location.href,
    ...readUtmParams(),
    ...payload
  })
}
