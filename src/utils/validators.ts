/**
 * Input validation helpers
 */

export function isValidEmail(email: string): boolean {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return pattern.test(email.trim())
}

export function isNonEmpty(value: string): boolean {
  return value.trim().length > 0
}

export function isPositiveInteger(value: string): boolean {
  return /^\d+$/.test(value.trim()) && parseInt(value.trim(), 10) > 0
}

export function sanitizeInput(input: string): string {
  const div = document.createElement('div')
  div.textContent = input
  return div.innerHTML
}
