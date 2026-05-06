import { meta } from '../data/resume'

export function renderContact(): string {
  return `
    <main class="page page-contact">
      <section class="section contact-section">
        <div class="contact-intro">
          <p class="hero-eyebrow">Get In Touch</p>
          <h1 class="page-title">Let's Connect</h1>
          <p class="page-subtitle">
            Open to exciting engineering roles, collaborations, and conversations around
            AI, frontend architecture, and full-stack development.
          </p>
          <div class="contact-details">
            <div class="contact-detail-item">
              <span class="detail-icon">📍</span>
              <span>${meta.location}</span>
            </div>
            <div class="contact-detail-item">
              <span class="detail-icon">✉️</span>
              <a href="mailto:${meta.email}">${meta.email}</a>
            </div>
            <div class="contact-detail-item">
              <span class="detail-icon">🌐</span>
              <span>${meta.availability}</span>
            </div>
          </div>
        </div>

        <form class="contact-form" id="contact-form" novalidate>
          <div class="form-row">
            <div class="form-field">
              <label for="cf-name">Your Name</label>
              <input id="cf-name" type="text" placeholder="Jane Smith" required />
            </div>
            <div class="form-field">
              <label for="cf-email">Your Email</label>
              <input id="cf-email" type="email" placeholder="jane@company.com" required />
            </div>
          </div>
          <div class="form-field">
            <label for="cf-subject">Subject</label>
            <input id="cf-subject" type="text" placeholder="Opportunity / Collaboration / Just Saying Hi" />
          </div>
          <div class="form-field">
            <label for="cf-message">Message</label>
            <textarea id="cf-message" rows="6" placeholder="Tell me about the role, project, or idea..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
          <p class="form-note" id="form-note"></p>
        </form>
      </section>
    </main>
  `
}

export function bindContact() {
  const form = document.getElementById('contact-form') as HTMLFormElement | null
  const note = document.getElementById('form-note')
  if (!form || !note) return

  form.addEventListener('submit', e => {
    e.preventDefault()
    note.textContent = '✅ Thanks! Your message has been noted. I\'ll be in touch soon.'
    note.className = 'form-note success'
    form.reset()
  })
}
