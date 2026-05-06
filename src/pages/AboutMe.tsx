import { meta, summary, skills, experience, education, aiProjects, certifications } from '../data/resume'

export function renderAbout(): string {
  return `
    <main class="page page-about">

      <section class="section">
        <div class="about-hero">
          <div>
            <p class="hero-eyebrow">About Me</p>
            <h1 class="page-title">${meta.name}</h1>
            <p class="page-subtitle">Senior Software Engineer | Front-End & Full-Stack Architect | AI & LLM Integration</p>
          </div>
          <div class="about-meta">
            <div class="meta-item"><span class="meta-label">Location</span><span>${meta.location}</span></div>
            <div class="meta-item"><span class="meta-label">Availability</span><span>${meta.availability}</span></div>
            <div class="meta-item"><span class="meta-label">Auth</span><span>${meta.visa}</span></div>
            <div class="meta-item"><span class="meta-label">LinkedIn</span><a href="${meta.linkedin}" target="_blank" rel="noopener" style="color:var(--accent)">anu3dev</a></div>
          </div>
        </div>
        <div class="about-summary">
          <p>${summary}</p>
        </div>
      </section>

      <!-- SKILLS DETAILED -->
      <section class="section">
        <h2 class="section-title">Technical Skills</h2>
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

      <!-- EXPERIENCE TIMELINE -->
      <section class="section">
        <h2 class="section-title">Professional Experience</h2>
        <div class="timeline">
          ${experience.map((exp, i) => `
            <div class="timeline-item ${i % 2 === 0 ? 'left' : 'right'}">
              <div class="timeline-dot"></div>
              <div class="timeline-card">
                <div class="t-header">
                  <div>
                    <h3>${exp.role}</h3>
                    <p class="t-company">${exp.company}</p>
                  </div>
                  <div class="t-meta">
                    <span class="t-duration">${exp.duration}</span>
                    <span class="t-location">${exp.location}</span>
                  </div>
                </div>
                <ul class="t-highlights">
                  ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
                <div class="chip-row">
                  ${exp.stack.map(s => `<span class="chip chip-sm">${s}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- AI PROJECTS -->
      <section class="section">
        <h2 class="section-title">AI & Innovation Projects</h2>
        <div class="cards-grid three-col">
          ${aiProjects.map(p => `
            <article class="card project-card">
              <div class="card-icon">🧠</div>
              <h3>${p.name}</h3>
              <p>${p.desc}</p>
              ${p.comingSoon ? `<span class="card-badge badge-soon">Coming Soon</span>` : `<span class="card-badge">Delivered</span>`}
            </article>
          `).join('')}
        </div>
      </section>

      <!-- EDUCATION -->
      <section class="section">
        <h2 class="section-title">Education</h2>
        <div class="card education-card">
          <div class="card-icon">🎓</div>
          <div>
            <h3>${education.degree}</h3>
            <p>${education.school}</p>
            <p class="t-duration">${education.year}</p>
          </div>
        </div>
      </section>

      <!-- CERTIFICATIONS -->
      <section class="section">
        <h2 class="section-title">Certifications</h2>
        <div class="cards-grid">
          ${certifications.map(c => `
            <div class="card education-card">
              <div class="card-icon">🏅</div>
              <div>
                <h3>${c.name}</h3>
                <p>${c.issuer}</p>
                <p class="t-duration">${c.year}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

    </main>
  `
}
