const DEFAULT_RESUME_TEXT = `Name: Anurag Kumar
Title: Senior Software Engineer | Front-End & Full-Stack Architect | AI & LLM Integration
Location: Minneapolis, MN, USA
Email: anu3dev@gmail.com
LinkedIn: https://www.linkedin.com/in/anu3dev/

Summary:
Senior Software Engineer with 10+ years of experience developing and optimizing enterprise-grade web applications across healthcare, banking, financial, and automotive domains. Proficient in JavaScript, TypeScript, React, Angular, HTML5, CSS3, SCSS, Storybook, and Zustand. Strong focus on performance, scalability, accessibility (a11y), and reusability. Currently expanding full-stack expertise with Java, Spring Boot, RESTful APIs, GraphQL, Docker, AWS, and CI/CD pipelines. Exploring AI-powered development workflows with RAG, Claude, Gemini, LLM-based assistants, and ML-driven automation.

Skills:
- Frontend: React, Angular, JavaScript, TypeScript, HTML5, CSS3, SCSS, Redux, Zustand, Storybook, WCAG/a11y, Micro-Frontend, Responsive Design
- Backend: Java, Spring Boot, Node.js, RESTful APIs, GraphQL
- Build & Tooling: Vite, Webpack, Babel, ESLint, Prettier, NPM, PNPM, Yarn, Maven, Gradle
- DevOps: Jenkins, GitLab CI/CD, SonarQube, Fortify, Black Duck, AEGIS
- Monitoring: Splunk, Kibana, Quantum Metric, Adobe Analytics, JIRA, Confluence, Postman
- Cloud & Containers: AWS, Docker, Azure, Netlify, Render, Neon
- AI & ML: OpenAI GPT APIs, Claude, Gemini, RAG, Prompt Engineering, LLM Integration, ML Pipelines

Experience:
1. Senior UI Engineer — Leading US-Based Health Insurance Provider (Jan 2026 – Present, Minneapolis, MN)
   - Building a design-system-driven component library with Storybook for cross-team UI consistency.
   - Migrated complex state management from Redux to Zustand — reduced boilerplate by 40%.
   - Implementing micro-frontend architecture for member-facing health portal serving 5M+ users.
   - Standardizing CI/CD quality gates with SonarQube, Fortify, and Black Duck scans.
   - Driving accessibility-first development practices, achieving WCAG 2.1 AA compliance.
   - Tech: React, TypeScript, Storybook, Zustand, Vite, SCSS, Jenkins, SonarQube, AWS, Micro-Frontend

2. Tech Lead — Leading US-Based Bank (Mar 2023 – Dec 2025, Minneapolis, MN)
   - Led Onboarding V2 migration to Vite-based mono-repo — modular architecture serving 13,000+ partner implementations.
   - Designed theme-less, config-driven architecture enabling partner-level customization.
   - Built Merge Mind: AI-driven merge request review assistant using GPT-4 within GitLab CI/CD pipelines.
   - Contributed to AI Hackathon fraud detection prototype using Python ML pipelines.
   - Architected AEM integration for dynamic, partner-specific content rendering.
   - Mentored onsite–offshore teams; enforced TypeScript, ESLint, and SonarQube standards.
   - Tech: React, TypeScript, Vite, PNPM, Mono-repo, AEM, SCSS, Jenkins, GitLab CI/CD, SonarQube, Splunk

3. Senior Project Engineer — Enterprise Banking Program (Aug 2021 – Feb 2023, Pune, India)
   - Built customer onboarding micro-app across online and mobile banking platforms.
   - Architected micro-frontend integration enabling independent module deployment.
   - Designed reusable WCAG 2.1 compliant UI components — reduced future UI build time by 30%.
   - Optimized performance via lazy loading, code splitting, and dynamic imports.
   - Achieved 85% test coverage using Jest, React Testing Library, and Cypress.
   - Tech: React, JavaScript ES6+, Redux, HTML5, SCSS, Jenkins, GitLab CI/CD, SonarQube

4. React Developer — Contract, Banking Digital Platform (Jun 2021 – Jul 2021, Remote, India)
   - Established React boilerplate with standardized folder structure, ESLint, Prettier, and Webpack configs.
   - Integrated SonarQube and Jenkins CI/CD pipelines for automated quality gates.

5. Frontend Developer — Javnic Solutions (Apr 2018 – May 2021, Noida, India)
   - Built and optimized 20+ high-performance landing pages across e-commerce, healthcare, retail, and education.
   - Improved page views per session by 22% via performance and UX optimizations.
   - Integrated payment gateways: Stripe, PayPal, Razorpay, Instamojo.

6. Junior GIS Engineer — Cyient Limited (Jan 2016 – Mar 2018, Noida, India)
   - Worked on Cartopia GIS web app for POI and road network data capture and visualization.
   - Automated log analysis and built dashboards with Tableau and SAS — improved efficiency by 35%.
   - Co-developed C-Pedia: internal knowledge search platform using React, JavaScript, and Node.js.

Education:
Bachelor of Engineering (Electronics and Communication Engineering) — RTM Nagpur University, India (2011 – 2015)

Certifications:
AWS Certified Cloud Practitioner — Amazon Web Services (2024)

AI & Innovation Projects:
- AI Anurag Assistant: Personal portfolio chatbot powered by OpenAI GPT APIs with custom LLM prompts trained on resume and project data.
- Merge Mind: Internal AI-driven merge request review assistant leveraging LLMs for code quality analysis inside GitLab CI/CD.
- Fraud Detection System: ML-driven hackathon prototype for real-time fraud detection using behavioral and anomaly detection.

Additional:
- Work Authorization: H1B Visa (Valid)
- Availability: Open to AI, Full-Stack, and Frontend Architecture roles — Remote or Hybrid`

import { API_BASE_URL } from '../constants'

function buildSystemPrompt(plainText: string): string {
  return `You are an AI assistant. Use ONLY the information below to answer questions. Answer in a friendly, professional, and concise manner.

If a question is outside the provided information, politely say you can only answer based on the data given to you.

CONTEXT DATA:
${plainText}`
}

export function renderAIChatbot(): string {
  return `
    <main class="page page-chatbot">
      <section class="section chatbot-hero">
        <p class="hero-eyebrow">AI Playground</p>
        <h1 class="page-title">Prompt-Based AI Chatbot</h1>
        <p class="page-subtitle">
          An interactive AI assistant powered by LLMs. The text box on the right is pre-loaded with
          Anurag's resume — edit it or paste your own data, tweak the model parameters, and start chatting.
          Plain text works great — no JSON needed.
        </p>
      </section>

      <section class="section chatbot-workspace">
        <div class="chatbot-layout">
          <!-- CHAT PANEL -->
          <div class="chat-panel">
            <div class="chat-messages" id="chat-messages">
              <div class="chat-msg assistant">
                <div class="msg-bubble">
                  👋 Hi! I'm an AI assistant. Ask me anything about the person described in the text box on the right. You can edit that text to use your own data — plain text is all you need!
                </div>
              </div>
            </div>
            <form class="chat-input-row" id="chat-form">
              <input type="text" id="chat-input" placeholder="Ask about experience, skills, projects..." autocomplete="off" />
              <button type="submit" class="btn btn-primary chat-send" id="chat-send">Send</button>
            </form>
          </div>

          <!-- CONTEXT DATA PANEL -->
          <div class="prompt-panel">
            <div class="prompt-header">
              <h3>Context Data</h3>
              <button type="button" class="btn btn-outline btn-sm" id="reset-prompt">Reset</button>
            </div>
            <div class="controls-row">
              <div class="control-group">
                <label for="ai-provider">Provider</label>
                <select id="ai-provider">
                  <option value="openai" selected>OpenAI (GPT)</option>
                </select>
              </div>
              <div class="control-group">
                <label for="ai-model">Model</label>
                <select id="ai-model">
                  <option value="gpt-4o-mini" selected>GPT-4o Mini</option>
                </select>
              </div>
              <div class="control-group">
                <label for="ai-temp">Temp: <span id="temp-val">0.7</span></label>
                <input type="range" id="ai-temp" min="0" max="1" step="0.1" value="0.7" />
              </div>
              <div class="control-group">
                <label for="ai-max-tokens">Tokens</label>
                <select id="ai-max-tokens">
                  <option value="50">50</option>
                  <option value="200" selected>200</option>
                  <option value="500">500</option>
                </select>
              </div>
            </div>
            <textarea id="system-prompt" spellcheck="false" placeholder="Paste or type any information here in plain text. The AI will use this as its knowledge base...">${DEFAULT_RESUME_TEXT.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
          </div>
        </div>
      </section>
    </main>
  `
}

export function bindAIChatbot() {
  const messagesEl = document.getElementById('chat-messages')!
  const form = document.getElementById('chat-form') as HTMLFormElement
  const input = document.getElementById('chat-input') as HTMLInputElement
  const sendBtn = document.getElementById('chat-send') as HTMLButtonElement
  const contextTextarea = document.getElementById('system-prompt') as HTMLTextAreaElement
  const resetBtn = document.getElementById('reset-prompt')!
  const tempSlider = document.getElementById('ai-temp') as HTMLInputElement
  const tempVal = document.getElementById('temp-val')!
  const modelSelect = document.getElementById('ai-model') as HTMLSelectElement
  const maxTokensSelect = document.getElementById('ai-max-tokens') as HTMLSelectElement

  const conversationHistory: Array<{ role: string; content: string }> = []

  // Temperature slider
  tempSlider.addEventListener('input', () => {
    tempVal.textContent = tempSlider.value
  })

  // Reset context data
  resetBtn.addEventListener('click', () => {
    contextTextarea.value = DEFAULT_RESUME_TEXT
  })

  function appendMessage(role: 'user' | 'assistant' | 'error', text: string) {
    const div = document.createElement('div')
    div.className = `chat-msg ${role}`
    div.innerHTML = `<div class="msg-bubble">${escapeHtml(text)}</div>`
    messagesEl.appendChild(div)
    messagesEl.scrollTop = messagesEl.scrollHeight
  }

  function escapeHtml(str: string): string {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>')
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const userMsg = input.value.trim()
    if (!userMsg) return

    appendMessage('user', userMsg)
    input.value = ''
    sendBtn.disabled = true
    sendBtn.textContent = '...'

    conversationHistory.push({ role: 'user', content: userMsg })

    // Keep only last 10 pairs (20 messages) to avoid token overflow
    if (conversationHistory.length > 20) {
      conversationHistory.splice(0, conversationHistory.length - 20)
    }

    const systemPrompt = buildSystemPrompt(contextTextarea.value)

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
    ]

    try {
      const res = await fetch(`${API_BASE_URL}/prompt-based-ai-chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: modelSelect.value,
          messages,
          temperature: parseFloat(tempSlider.value),
          max_tokens: parseInt(maxTokensSelect.value),
        }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error?.message || `API error (${res.status})`)
      }

      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content || data.content || 'No response received.'

      conversationHistory.push({ role: 'assistant', content: reply })
      appendMessage('assistant', reply)
    } catch (err: any) {
      appendMessage('error', `❌ ${err.message || 'Something went wrong. Please try again.'}`)
    } finally {
      sendBtn.disabled = false
      sendBtn.textContent = 'Send'
      input.focus()
    }
  })
}
