import { upcomingProjects } from '../data/resume'

export function renderComingSoon(): string {
  return `
    <main class="page page-coming-soon">
      <section class="section coming-soon-hero">
        <p class="hero-eyebrow">Standing By</p>
        <h1 class="page-title">Coming Soon</h1>
        <p class="page-subtitle">
          A dedicated space for engineering tools, AI demos, full-stack labs, and
          practical utilities. Each item below is actively being built.
        </p>
        <div class="coming-pulse">
          <span></span><span></span><span></span>
        </div>
      </section>

      <section class="section">
        <div class="coming-grid-full">
          ${upcomingProjects.map((p, i) => `
            <article class="coming-card">
              <div class="coming-number">0${i + 1}</div>
              <div class="coming-badge">In Progress</div>
              <h3>${p.name}</h3>
              <p>${p.desc}</p>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="section cs-cta">
        <p>Want to be notified when these go live?</p>
        <a href="#contact" class="btn btn-primary" data-nav="contact">Drop a Message</a>
      </section>
    </main>
  `
}
