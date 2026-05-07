type Page = 'home' | 'about' | 'blog' | 'contact' | 'coming-soon' | 'ai-chatbot'

type RouteHandler = (page: Page) => void

let currentHandler: RouteHandler | null = null

export function getPage(): Page {
  const hash = location.hash.replace('#', '') as Page
  return ['home', 'about', 'blog', 'contact', 'coming-soon', 'ai-chatbot'].includes(hash) ? hash : 'home'
}

export function navigate(page: Page) {
  location.hash = page
}

export function onRouteChange(handler: RouteHandler) {
  currentHandler = handler
  window.addEventListener('hashchange', () => {
    if (currentHandler) currentHandler(getPage())
  })
}
