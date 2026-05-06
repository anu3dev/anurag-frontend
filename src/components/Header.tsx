

export function renderHeader(activePage: string): string {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ]

  return `
    <header class="site-header" id="site-header">
      <div class="header-inner">
        <a class="logo" href="#home" data-nav="home">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-name">Anurag</span>
          <span class="logo-bracket">/&gt;</span>
        </a>

        <nav class="main-nav" id="main-nav">
          <ul>
            ${navLinks.map(l => `
              <li>
                <a href="#${l.id}" data-nav="${l.id}" class="${activePage === l.id ? 'active' : ''}">
                  ${l.label}
                </a>
              </li>
            `).join('')}
          </ul>
        </nav>

        <div class="header-actions">
          <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
            <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
          <button class="hamburger" id="hamburger" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
    <div class="nav-overlay" id="nav-overlay"></div>
  `
}

export function bindHeader() {
  // hamburger toggle
  const hamburger = document.getElementById('hamburger')!
  const nav = document.getElementById('main-nav')!
  const overlay = document.getElementById('nav-overlay')!

  function closeNav() {
    hamburger.classList.remove('open')
    nav.classList.remove('open')
    overlay.classList.remove('open')
  }

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.contains('open')
    if (isOpen) {
      closeNav()
    } else {
      hamburger.classList.add('open')
      nav.classList.add('open')
      overlay.classList.add('open')
    }
  })

  overlay.addEventListener('click', closeNav)

  // close on nav link click
  nav.querySelectorAll('a[data-nav]').forEach(link => {
    link.addEventListener('click', closeNav)
  })

  // theme toggle
  const toggle = document.getElementById('theme-toggle')!
  const saved = localStorage.getItem('theme') || 'dark'
  document.documentElement.setAttribute('data-theme', saved)

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme')
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  })

  // header scroll shadow
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header')!
    header.classList.toggle('scrolled', window.scrollY > 10)
  })
}
