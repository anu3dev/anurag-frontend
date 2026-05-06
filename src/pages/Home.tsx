import { meta, skills, aiProjects, upcomingProjects } from '../data/resume'

export function renderHome(): string {
  return `
    <main class="page page-home">

      <!-- HERO -->
      <section class="hero">
        <div class="hero-content">
          <p class="hero-eyebrow">Hello, I'm</p>
          <h1 class="hero-name">${meta.name}</h1>
          <h2 class="hero-title">
            Senior Software Engineer<br/>
            <span class="accent">Front-End Architect</span> &amp; AI Enthusiast
          </h2>
          <p class="hero-desc">
            9+ years building enterprise-grade web products across banking, finance,
            and automotive. I architect scalable systems, lead teams, and integrate AI
            into real engineering workflows.
          </p>
          <div class="hero-cta">
            <a href="#about" class="btn btn-primary" data-nav="about">About Me</a>
            <a href="#contact" class="btn btn-outline" data-nav="contact">Let's Talk</a>
          </div>
          <div class="hero-tags">
            <span>React</span><span>TypeScript</span><span>Micro-Frontend</span>
            <span>AI / LLM</span><span>Spring Boot</span>
          </div>
        </div>
        <div class="hero-art">
          <div class="art-card">
            <div class="art-line"></div>
            <div class="art-code">
              <p><span class="kw">const</span> <span class="fn">engineer</span> = {</p>
              <p>&nbsp;&nbsp;<span class="key">experience</span>: <span class="str">"9+ years"</span>,</p>
              <p>&nbsp;&nbsp;<span class="key">focus</span>: <span class="str">"Frontend + AI"</span>,</p>
              <p>&nbsp;&nbsp;<span class="key">status</span>: <span class="str">"Open to work"</span>,</p>
              <p>}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- WHAT I DO -->
      <section class="section what-i-do">
        <h2 class="section-title">What I Do</h2>
        <div class="cards-grid">
          <article class="card">
            <div class="card-icon">⚡</div>
            <h3>Frontend Architecture</h3>
            <p>Micro-frontend systems, component libraries, and performance-first UI engineering at enterprise scale.</p>
          </article>
          <article class="card">
            <div class="card-icon">🤖</div>
            <h3>AI Integration</h3>
            <p>Embedding LLMs and GPT-powered tools into real CI/CD and product workflows.</p>
          </article>
          <article class="card">
            <div class="card-icon">☕</div>
            <h3>Full-Stack Expansion</h3>
            <p>Growing hands-on expertise in Java, Spring Boot, REST APIs, Docker, and cloud deployments.</p>
          </article>
          <article class="card">
            <div class="card-icon">♿</div>
            <h3>Accessibility & Quality</h3>
            <p>WCAG 2.1 compliant UI with deep CI/CD quality gates — SonarQube, Fortify, and regression-safe testing.</p>
          </article>
        </div>
      </section>

      <!-- SKILLS SNAPSHOT -->
      <section class="section skills-section">
        <h2 class="section-title">Tech Snapshot</h2>
        <div class="skills-grid">
          ${skills.map(group => `
            <article class="skill-group">
              <h3>${group.category}</h3>
              <div class="chip-row">
                ${group.items.map(item => `<span class="chip">${item}</span>`).join('')}
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- AI PROJECTS -->
      <section class="section ai-section">
        <h2 class="section-title">AI & Innovation</h2>
        <p class="section-sub">Projects at the intersection of engineering and intelligence.</p>
        <div class="cards-grid three-col">
          ${aiProjects.map(p => `
            <article class="card project-card ${p.comingSoon ? 'card-soon' : ''}">
              <div class="card-icon">🧠</div>
              <h3>${p.name}</h3>
              <p>${p.desc}</p>
              ${p.comingSoon ? `<a href="#coming-soon" class="card-link" data-nav="coming-soon">See Preview →</a>` : `<span class="card-badge">Delivered</span>`}
            </article>
          `).join('')}
        </div>
      </section>

      <!-- COMING SOON PREVIEWS -->
      <section class="section upcoming-section">
        <h2 class="section-title">My Workspace</h2>
        <p class="section-sub">Upcoming tools, labs, and utilities to showcase engineering craftsmanship.</p>
        <div class="upcoming-grid">
          ${upcomingProjects.map(p => `
            <a href="#coming-soon" class="upcoming-card" data-nav="coming-soon">
              <div class="upcoming-badge">Coming Soon</div>
              <h3>${p.name}</h3>
              <p>${p.desc}</p>
              <span class="card-link">Explore →</span>
            </a>
          `).join('')}
        </div>
      </section>

    </main>
  `
}
