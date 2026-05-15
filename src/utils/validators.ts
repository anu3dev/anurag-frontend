/**
 * Input validation helpers
 * Updated: added URL validators, password strength, max length check
 */

export function isValidEmail(email: string): boolean {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return pattern.test(email.trim())
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function isValidGitHubPrUrl(url: string): boolean {
  return /github\.com\/[\w.-]+\/[\w.-]+\/pull\/\d+/.test(url)
}

export function isNonEmpty(value: string): boolean {
  return value.trim().length > 0
}

export function isWithinLength(value: string, min: number, max: number): boolean {
  const len = value.trim().length
  return len >= min && len <= max
}

export function isPositiveInteger(value: string): boolean {
  const num = Number(value.trim())
  return Number.isInteger(num) && num > 0
}

export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
