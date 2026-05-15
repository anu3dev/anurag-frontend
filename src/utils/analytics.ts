/**
 * Portfolio analytics — lightweight tracker
 * Refactored: buffer limit, structured categories
 */

interface TrackEvent {
  category: string
  action: string
  label?: string
  ts: number
  page: string
}

const events: TrackEvent[] = []
const BUFFER_SIZE = 200
let currentPage = 'home'

export function setCurrentPage(page: string): void {
  currentPage = page
}

export function track(category: string, action: string, label?: string): void {
  events.push({ category, action, label, ts: Date.now(), page: currentPage })
  while (events.length > BUFFER_SIZE) events.shift()
}

export function trackPageView(page: string): void {
  setCurrentPage(page)
  track('page', 'view', page)
}

export function trackClick(id: string): void {
  track('click', 'button', id)
}

export function getEvents(): readonly TrackEvent[] {
  return Object.freeze([...events])
}
