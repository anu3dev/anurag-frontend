/**
 * Date, number, and text formatting utilities
 * Updated: added relative time, byte formatter, improved truncation
 */

export function formatDate(dateStr: string, style: 'long' | 'short' = 'long'): string {
  const date = new Date(dateStr)
  if (style === 'short') {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function relativeTime(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  return days === 1 ? 'yesterday' : `${days}d ago`
}

export function formatNumber(num: number, compact: boolean = false): string {
  if (compact && num >= 1000) {
    return num >= 1_000_000
      ? `${(num / 1_000_000).toFixed(1)}M`
      : `${(num / 1_000).toFixed(1)}K`
  }
  return num.toLocaleString('en-US')
}

export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text
  const truncated = text.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')
  return (lastSpace > maxLength * 0.7 ? truncated.slice(0, lastSpace) : truncated).trimEnd() + '…'
}

export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B'
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`
}
