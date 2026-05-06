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
            <span class="accent">Front-End & Full-Stack Architect</span> · AI Enthusiast
          </h2>
          <p class="hero-desc">
            10+ years building enterprise-grade web products across healthcare, banking, finance,
            and automotive. I architect scalable systems, lead teams, and integrate AI
            into real engineering workflows.
          </p>
          <div class="hero-cta">
            <a href="#about" class="btn btn-primary" data-nav="about">About Me</a>
            <a href="#contact" class="btn btn-outline" data-nav="contact">Let's Talk</a>
          </div>
          <div class="hero-tags">
            <span>React</span><span>TypeScript</span><span>Storybook</span><span>Zustand</span>
            <span>Micro-Frontend</span><span>AI / LLM</span><span>AWS</span><span>Spring Boot</span>
          </div>
        </div>
        <div class="hero-art">
          <div class="art-card">
            <div class="art-line"></div>
            <div class="art-code">
              <p><span class="kw">const</span> <span class="fn">engineer</span> = {</p>
              <p>&nbsp;&nbsp;<span class="key">experience</span>: <span class="str">"10+ years"</span>,</p>
              <p>&nbsp;&nbsp;<span class="key">focus</span>: <span class="str">"Full-Stack + AI"</span>,</p>
              <p>&nbsp;&nbsp;<span class="key">stack</span>: <span class="str">"React · JavaScript · Java · Spring Boot"</span>,</p>
              <p>&nbsp;&nbsp;<span class="key">design</span>: <span class="str">"Storybook · Zustand · SCSS"</span>,</p>
              <p>&nbsp;&nbsp;<span class="key">cloud</span>: <span class="str">"AWS · Docker · Jenkins"</span>,</p>
              <p>&nbsp;&nbsp;<span class="key">ai</span>: <span class="str">"RAG · Claude · GPT APIs"</span>,</p>
              <p>&nbsp;&nbsp;<span class="key">domains</span>: <span class="str">"Healthcare · Banking"</span>,</p>
              <p>&nbsp;&nbsp;<span class="key">status</span>: <span class="str">"Open to work"</span>,</p>
              <p>}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- WHAT I DO -->
      <section class="section what-i-do">
        <h2 class="section-title">What I Do</h2>
        <div class="cards-grid three-col">
          <article class="card">
            <div class="card-icon">⚡</div>
            <h3>Frontend Architecture</h3>
            <p>Micro-frontend systems, Storybook-driven component libraries, Vite builds, and performance-first UI engineering at enterprise scale.</p>
          </article>
          <article class="card">
            <div class="card-icon">🤖</div>
            <h3>AI Integration</h3>
            <p>Building with RAG pipelines, Claude, Gemini, and GPT APIs. AWS Certified Cloud Practitioner enabling cloud-native AI workflows.</p>
          </article>
          <article class="card">
            <div class="card-icon">☕</div>
            <h3>Full-Stack Development</h3>
            <p>Growing hands-on expertise in Java, Spring Boot, REST APIs, GraphQL, Docker, and cloud deployments with AWS.</p>
          </article>
          <article class="card">
            <div class="card-icon">♿</div>
            <h3>Accessibility & Quality</h3>
            <p>WCAG 2.1 compliant UI with deep quality gates — SonarQube, Fortify, Black Duck, and regression-safe testing strategies.</p>
          </article>
          <article class="card">
            <div class="card-icon">🔄</div>
            <h3>CI/CD & Production</h3>
            <p>Jenkins pipelines, multi-environment deployments, real-time monitoring with Splunk & Kibana, and production incident triage.</p>
          </article>
          <article class="card">
            <div class="card-icon">☁️</div>
            <h3>Cloud & DevOps</h3>
            <p>AWS cloud infrastructure, Docker containerization, Azure deployments, and infrastructure-as-code practices.</p>
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
