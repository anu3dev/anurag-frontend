/**
 * Simple event tracking for analytics
 */

interface TrackEvent {
  category: string
  action: string
  label?: string
  ts: number
}

const events: TrackEvent[] = []

export function track(category: string, action: string, label?: string): void {
  events.push({ category, action, label, ts: Date.now() })
  if (events.length > 50) events.shift()
}

export function trackPageView(page: string): void {
  track('nav', 'page_view', page)
}

export function trackClick(id: string): void {
  track('ui', 'click', id)
}

export function getEvents(): readonly TrackEvent[] {
  return Object.freeze([...events])
}
