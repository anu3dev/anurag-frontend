type Page = 'home' | 'about' | 'blog' | 'contact' | 'coming-soon' | 'ai-chatbot' | 'blog-post' | 'merge-resolver'

type RouteHandler = (page: Page, param?: string) => void

let currentHandler: RouteHandler | null = null

export function getPage(): { page: Page; param?: string } {
  const hash = location.hash.replace('#', '')

  // Handle blog post routes: blog/slug
  if (hash.startsWith('blog/')) {
    const slug = hash.slice(5)
    return slug ? { page: 'blog-post', param: slug } : { page: 'blog' }
  }

  const validPages: Page[] = ['home', 'about', 'blog', 'contact', 'coming-soon', 'ai-chatbot', 'merge-resolver']
  const page = validPages.includes(hash as Page) ? (hash as Page) : 'home'
  return { page }
}

export function navigate(page: string) {
  location.hash = page
}

export function onRouteChange(handler: RouteHandler) {
  currentHandler = handler
  window.addEventListener('hashchange', () => {
    if (currentHandler) {
      const { page, param } = getPage()
      currentHandler(page, param)
    }
  })
}
