import './style.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="portfolio">
    <header class="hero card">
      <p class="eyebrow">Professional Portfolio</p>
      <h1>Anurag Kumar</h1>
      <p class="headline">
        Senior Software Engineer | Front-End Architect | Transitioning to Full-Stack
        (Java + Spring Boot) | AI & LLM Integration
      </p>
      <p class="meta">Minneapolis, MN • Open to Remote or Hybrid • H1B Visa (Valid)</p>
    </header>

    <section class="card">
      <h2>Professional Summary</h2>
      <p>
        Senior Software Engineer with 9+ years of experience delivering large-scale,
        enterprise-grade applications across banking, financial, and automotive domains.
        Strong in JavaScript, TypeScript, React, Angular, HTML5, CSS3, and SCSS with a
        focus on scalability, performance, accessibility, and reusable architecture.
      </p>
      <p>
        Hands-on across the full SDLC in Agile teams, from requirements and UI design to
        deployment and observability. Currently expanding full-stack expertise in Java,
        Spring Boot, REST APIs, GraphQL, Docker, and CI/CD with practical AI/LLM-enabled
        engineering workflows.
      </p>
    </section>

    <section class="card">
      <h2>Technical Skills</h2>
      <div class="skills-grid">
        <p><strong>Frontend:</strong> React, JavaScript, TypeScript, HTML5, CSS3, SCSS, Redux, WCAG/a11y, Responsive Design, Micro-Frontend Architecture</p>
        <p><strong>Backend:</strong> Java, Spring Boot (hands-on projects), Node.js</p>
        <p><strong>Build & Tooling:</strong> Webpack, Vite, Babel, ESLint, Prettier, NPM, PNPM, Yarn, Maven, Gradle, GitLab CI/CD</p>
        <p><strong>Monitoring & Platforms:</strong> Splunk, Kibana, Quantum Metric, Adobe Analytics, JIRA, Confluence, Postman</p>
        <p><strong>DevOps & CI/CD:</strong> Jenkins, SonarQube, Fortify, Black Duck, AEGIS, GitLab CI</p>
        <p><strong>Cloud & Containers:</strong> Netlify, Docker, Render, Neon, Azure</p>
        <p><strong>AI & ML:</strong> OpenAI GPT APIs, Prompt Engineering, LLM Integration</p>
      </div>
    </section>

    <section class="card">
      <h2>Professional Experience</h2>
      <article class="role">
        <h3>Tech Lead — Leading Global IT Services Organization</h3>
        <p class="duration">Mar 2023 – Present • Minneapolis, MN</p>
        <ul>
          <li>Led migration of onboarding micro-apps to a Vite-based monorepo for modular, scalable delivery across partner implementations and multi-environment deployments.</li>
          <li>Architected config-driven and theme-less onboarding systems enabling partner-level customizations without changing core shared modules.</li>
          <li>Mentored distributed UI teams, improved TypeScript and code quality standards, and accelerated release cycles through CI/CD automation.</li>
          <li>Contributed to internal AI initiatives including LLM-assisted merge request analysis and a fraud-detection prototype shortlisted for pilot expansion.</li>
        </ul>
      </article>

      <article class="role">
        <h3>Senior Project Engineer — Enterprise Banking Program</h3>
        <p class="duration">Aug 2021 – Feb 2023 • Pune, India</p>
        <ul>
          <li>Designed and delivered onboarding micro-frontend journeys across web and mobile for credit, deposit, lending, and mortgage products.</li>
          <li>Implemented lazy loading, code splitting, and dynamic imports to reduce bundle size and improve load performance by around 30%.</li>
          <li>Built accessibility-compliant component patterns and test coverage with Jest, RTL, and Cypress to improve quality and regression confidence.</li>
        </ul>
      </article>

      <article class="role">
        <h3>React Developer / Frontend Engineer</h3>
        <p class="duration">Apr 2018 – Jul 2021 • India</p>
        <ul>
          <li>Established reusable React boilerplates with linting, formatting, CI integration, and maintainable project conventions.</li>
          <li>Built high-performance frontend experiences, reusable libraries, and optimized user journeys across multiple domains.</li>
          <li>Collaborated across design, backend, QA, and DevOps teams to speed up delivery and improve reliability.</li>
        </ul>
      </article>
    </section>

    <section class="card">
      <h2>AI & Innovation Projects</h2>
      <ul>
        <li><strong>AI Anurag Assistant:</strong> Portfolio chatbot using GPT APIs and resume-aware prompts for contextual Q&A.</li>
        <li><strong>Merge Mind:</strong> Internal LLM-driven merge request reviewer for quality and standards compliance in CI/CD workflows.</li>
        <li><strong>Fraud Detection Prototype:</strong> Hackathon ML solution for anomaly detection and suspicious transaction flagging.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Education</h2>
      <p>
        Bachelor of Engineering (Electronics and Communication Engineering),
        RTM Nagpur University, India (2011–2015)
      </p>
    </section>
  </main>
`
