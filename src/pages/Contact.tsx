import { meta } from '../data/resume'

export function renderContact(): string {
  return `
    <main class="page page-contact">
      <section class="section contact-section">
        <div class="contact-intro">
          <p class="hero-eyebrow">Get In Touch</p>
          <h1 class="page-title">Let's Connect</h1>
          <p class="page-subtitle">
            Open to exciting roles in AI, full-stack engineering, and frontend architecture —
            as well as collaborations and conversations around modern web development.
          </p>
          <div class="contact-details">
            <div class="contact-detail-item">
              <span class="detail-icon">🔗</span>
              <a href="${meta.linkedin}" target="_blank" rel="noopener">${meta.linkedin}</a>
            </div>
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
              <label for="cf-name">Your Name <span class="required">*</span></label>
              <input id="cf-name" type="text" placeholder="Jane Smith" required />
              <span class="field-error" id="err-name"></span>
            </div>
            <div class="form-field">
              <label for="cf-email">Your Email <span class="required">*</span></label>
              <input id="cf-email" type="email" placeholder="jane@company.com" required />
              <span class="field-error" id="err-email"></span>
            </div>
          </div>
          <div class="form-field">
            <label for="cf-subject">Subject <span class="required">*</span></label>
            <input id="cf-subject" type="text" placeholder="Opportunity / Collaboration / Just Saying Hi" required />
            <span class="field-error" id="err-subject"></span>
          </div>
          <div class="form-field">
            <label for="cf-message">Message <span class="required">*</span></label>
            <textarea id="cf-message" rows="6" placeholder="Tell me about the role, project, or idea..." required></textarea>
            <span class="field-error" id="err-message"></span>
          </div>
          <button type="submit" class="btn btn-primary" id="cf-submit">Send Message</button>
          <p class="form-note" id="form-note"></p>
        </form>
      </section>
    </main>
  `
}

export function bindContact() {
  const form = document.getElementById('contact-form') as HTMLFormElement | null
  const note = document.getElementById('form-note')!
  const submitBtn = document.getElementById('cf-submit') as HTMLButtonElement | null
  if (!form || !submitBtn) return

  const nameInput = document.getElementById('cf-name') as HTMLInputElement
  const emailInput = document.getElementById('cf-email') as HTMLInputElement
  const subjectInput = document.getElementById('cf-subject') as HTMLInputElement
  const messageInput = document.getElementById('cf-message') as HTMLTextAreaElement

  const errName = document.getElementById('err-name')!
  const errEmail = document.getElementById('err-email')!
  const errSubject = document.getElementById('err-subject')!
  const errMessage = document.getElementById('err-message')!

  function clearErrors() {
    errName.textContent = ''
    errEmail.textContent = ''
    errSubject.textContent = ''
    errMessage.textContent = ''
    note.textContent = ''
    note.className = 'form-note'
  }

  function validateForm(): boolean {
    let valid = true
    clearErrors()

    if (!nameInput.value.trim()) {
      errName.textContent = 'Name is required'
      valid = false
    }

    const emailVal = emailInput.value.trim()
    if (!emailVal) {
      errEmail.textContent = 'Email is required'
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      errEmail.textContent = 'Please enter a valid email'
      valid = false
    }

    if (!subjectInput.value.trim()) {
      errSubject.textContent = 'Subject is required'
      valid = false
    }

    if (!messageInput.value.trim()) {
      errMessage.textContent = 'Message is required'
      valid = false
    }

    return valid
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    submitBtn.disabled = true
    submitBtn.textContent = 'Sending...'
    note.textContent = ''

    try {
      const res = await fetch('https://nodeapi.anuragkr.in/contact-through-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameInput.value.trim(),
          email: emailInput.value.trim(),
          subject: subjectInput.value.trim(),
          message: messageInput.value.trim(),
        }),
      })

      if (res.ok) {
        note.textContent = '✅ Thanks! Your message has been sent. I\'ll be in touch soon.'
        note.className = 'form-note success'
        form.reset()
      } else {
        note.textContent = '❌ Something went wrong. Please try again or email me directly.'
        note.className = 'form-note error'
      }
    } catch {
      note.textContent = '❌ Network error. Please try again or email me directly.'
      note.className = 'form-note error'
    } finally {
      submitBtn.disabled = false
      submitBtn.textContent = 'Send Message'
    }
  })
}
