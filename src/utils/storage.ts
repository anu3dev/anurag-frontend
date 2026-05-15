/**
 * Local storage helpers with JSON support, TTL, and namespacing
 * Updated: added TTL expiry, namespace prefix, has/clear helpers
 */

const PREFIX = 'anurag_'

interface StorageEntry<T> {
  value: T
  expiry?: number
}

export function getItem<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    if (raw === null) return fallback
    const entry: StorageEntry<T> = JSON.parse(raw)

    // Check TTL expiry
    if (entry.expiry && Date.now() > entry.expiry) {
      localStorage.removeItem(PREFIX + key)
      return fallback
    }

    return entry.value
  } catch {
    return fallback
  }
}

/** Set item with optional TTL in milliseconds */
export function setItem<T>(key: string, value: T, ttlMs?: number): void {
  try {
    const entry: StorageEntry<T> = {
      value,
      expiry: ttlMs ? Date.now() + ttlMs : undefined,
    }
    localStorage.setItem(PREFIX + key, JSON.stringify(entry))
  } catch {
    console.warn(`Failed to save "${key}" to localStorage`)
  }
}

export function removeItem(key: string): void {
  localStorage.removeItem(PREFIX + key)
}

export function hasItem(key: string): boolean {
  return localStorage.getItem(PREFIX + key) !== null
}

export function clearAll(): void {
  const keys = Object.keys(localStorage).filter(k => k.startsWith(PREFIX))
  keys.forEach(k => localStorage.removeItem(k))
}
