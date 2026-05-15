/**
 * Debounce, throttle, and async timing utilities
 * Updated: added cancelable debounce, sleep, retry with backoff
 */

export interface Cancelable {
  cancel: () => void
}

export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number = 300
): ((...args: Parameters<T>) => void) & Cancelable {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const debounced = (...args: Parameters<T>) => {
    if (timeoutId !== null) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn(...args)
      timeoutId = null
    }, delay)
  }

  debounced.cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
  }

  return debounced
}

export function throttle<T extends (...args: unknown[]) => void>(
  fn: T,
  interval: number = 200
): (...args: Parameters<T>) => void {
  let lastCall = 0
  let pendingTimer: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    const now = Date.now()
    const remaining = interval - (now - lastCall)

    if (remaining <= 0) {
      lastCall = now
      fn(...args)
    } else if (!pendingTimer) {
      pendingTimer = setTimeout(() => {
        lastCall = Date.now()
        pendingTimer = null
        fn(...args)
      }, remaining)
    }
  }
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function retry<T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (err) {
      if (attempt === maxAttempts) throw err
      await sleep(baseDelay * Math.pow(2, attempt - 1))
    }
  }
  throw new Error('Retry failed')
}
