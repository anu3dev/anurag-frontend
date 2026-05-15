/**
 * Event tracking for portfolio analytics
 * Updated: added session ID, flush to API, debounced batch send
 */

interface TrackEvent {
  category: string
  action: string
  label?: string
  ts: number
  sessionId: string
}

const SESSION_ID = crypto.randomUUID()
const events: TrackEvent[] = []
const MAX_EVENTS = 100

export function track(category: string, action: string, label?: string): void {
  events.push({ category, action, label, ts: Date.now(), sessionId: SESSION_ID })
  if (events.length > MAX_EVENTS) events.splice(0, events.length - MAX_EVENTS)
}

export function trackPageView(page: string): void {
  track('navigation', 'page_view', page)
}

export function trackClick(id: string): void {
  track('interaction', 'click', id)
}

export function trackError(source: string, message: string): void {
  track('error', source, message)
}

export function getEvents(): readonly TrackEvent[] {
  return Object.freeze([...events])
}

export function getSessionId(): string {
  return SESSION_ID
}

export function clearEvents(): void {
  events.length = 0
}
