import './style.scss'
import { renderHeader, bindHeader } from './components/Header'
import { renderFooter } from './components/Footer'
import { renderHome } from './pages/Home'
import { renderAbout } from './pages/AboutMe'
import { renderContact, bindContact } from './pages/Contact'
import { renderComingSoon } from './pages/ComingSoon'
import { renderBlog } from './pages/Blog'
import { getPage, onRouteChange, navigate } from './router'

const app = document.querySelector<HTMLDivElement>('#app')!

function renderPage(page: ReturnType<typeof getPage>) {
  const pageMap: Record<string, () => string> = {
    home: renderHome,
    about: renderAbout,
    blog: renderBlog,
    contact: renderContact,
    'coming-soon': renderComingSoon,
  }
  const pageRenderer = pageMap[page] ?? renderHome

  app.innerHTML = `
    ${renderHeader(page)}
    ${pageRenderer()}
    ${renderFooter()}
  `

  bindHeader()
  if (page === 'contact') bindContact()

  // bind data-nav links to router
  document.querySelectorAll<HTMLAnchorElement>('[data-nav]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      navigate(link.dataset.nav as any)
    })
  })

  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// initial render
const saved = localStorage.getItem('theme') || 'dark'
document.documentElement.setAttribute('data-theme', saved)
renderPage(getPage())
onRouteChange(renderPage)
