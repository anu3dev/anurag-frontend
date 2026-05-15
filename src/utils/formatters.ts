/**
 * Date and number formatting utilities
 * Refactored: ISO support, compact numbers
 */

export function formatDate(dateStr: string, locale: string = 'en-US'): string {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US', { notation: 'compact' }).format(num)
}

export function truncateText(text: string, maxLength: number = 120): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

export function slugToTitle(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

export function toISODate(dateStr: string): string {
  return new Date(dateStr).toISOString().split('T')[0]
}
