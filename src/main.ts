import './style.scss'
import { renderHeader, bindHeader } from './components/Header'
import { renderFooter } from './components/Footer'
import { renderHome } from './pages/Home'
import { renderAbout } from './pages/AboutMe'
import { renderContact, bindContact } from './pages/Contact'
import { renderComingSoon } from './pages/ComingSoon'
import { renderBlog } from './pages/Blog'
import { renderBlogPost } from './pages/BlogPost'
import { renderAIChatbot, bindAIChatbot } from './pages/AIChatbot'
import { renderMergeResolver, bindMergeResolver } from './pages/MergeResolver'
import { getPage, onRouteChange, navigate } from './router'

const app = document.querySelector<HTMLDivElement>('#app')!

function renderPage(page: ReturnType<typeof getPage>['page'], param?: string) {
  const pageMap: Record<string, (p?: string) => string> = {
    home: () => renderHome(),
    about: () => renderAbout(),
    blog: () => renderBlog(),
    'blog-post': (slug?: string) => renderBlogPost(slug || ''),
    contact: () => renderContact(),
    'coming-soon': () => renderComingSoon(),
    'ai-chatbot': () => renderAIChatbot(),
    'merge-resolver': () => renderMergeResolver(),
  }
  const pageRenderer = pageMap[page] ?? pageMap['home']
  const activePage = page === 'blog-post' ? 'blog' : page

  app.innerHTML = `
    ${renderHeader(activePage)}
    ${pageRenderer(param)}
    ${renderFooter()}
  `

  bindHeader()
  if (page === 'contact') bindContact()
  if (page === 'ai-chatbot') bindAIChatbot()
  if (page === 'merge-resolver') bindMergeResolver()

  // bind data-nav links to router
  document.querySelectorAll<HTMLAnchorElement>('[data-nav]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      navigate(link.dataset.nav as any)
    })
  })

  // bind blog card links
  document.querySelectorAll<HTMLAnchorElement>('[data-blog]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      navigate(`blog/${link.dataset.blog}`)
    })
  })

  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// initial render
const saved = localStorage.getItem('theme') || 'dark'
document.documentElement.setAttribute('data-theme', saved)
const initial = getPage()
renderPage(initial.page, initial.param)
onRouteChange(renderPage)
