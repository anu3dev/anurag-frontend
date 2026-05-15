export const meta = {
  name: 'Anurag Kumar',
  title: 'Senior Software Engineer | Front-End & Full-Stack Architect | AI & LLM Integration',
  email: 'anu3dev@gmail.com',
  location: 'Minneapolis, MN',
  availability: 'Open to AI, Full-Stack, and Frontend Architecture roles — Remote or Hybrid',
  visa: 'H1B Visa (Valid)',
  linkedin: 'https://www.linkedin.com/in/anu3dev/',
}

export const summary = `Senior Software Engineer with 10+ years of experience developing and optimizing large-scale, 
enterprise-grade web applications across healthcare, banking, financial, and automotive domains. Proficient in JavaScript, 
TypeScript, React, Angular, HTML5, CSS3, SCSS, Storybook, and Zustand, with a strong focus on performance, scalability, 
accessibility (a11y), and component reusability. Currently expanding full-stack expertise with Java, Spring Boot, 
RESTful APIs, GraphQL, Docker, AWS, and CI/CD pipelines — exploring AI-powered development workflows with RAG, Claude, 
Gemini, LLM-based assistants, and ML-driven automation.`

export const skills = [
  { category: 'Frontend', items: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'Redux', 'Zustand', 'Storybook', 'WCAG/a11y', 'Micro-Frontend', 'Responsive Design'] },
  { category: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'RESTful APIs', 'GraphQL'] },
  { category: 'Build & Tooling', items: ['Vite', 'Webpack', 'Babel', 'ESLint', 'Prettier', 'NPM', 'PNPM', 'Yarn', 'Maven', 'Gradle'] },
  { category: 'DevOps & CI/CD', items: ['Jenkins', 'GitLab CI/CD', 'SonarQube', 'Fortify', 'Black Duck', 'AEGIS'] },
  { category: 'Monitoring', items: ['Splunk', 'Kibana', 'Quantum Metric', 'Adobe Analytics', 'JIRA', 'Confluence', 'Postman'] },
  { category: 'Cloud & Containers', items: ['AWS', 'Docker', 'Azure', 'Netlify', 'Render', 'Neon'] },
  { category: 'AI & ML', items: ['OpenAI GPT APIs', 'Claude', 'Gemini', 'RAG', 'Prompt Engineering', 'LLM Integration', 'ML Pipelines'] },
]

export const experience = [
  {
    role: 'Senior UI Engineer',
    company: 'Leading US-Based Health Insurance Provider',
    duration: 'Jan 2026 – Present',
    location: 'Minneapolis, MN',
    highlights: [
      'Building a design-system-driven component library with Storybook for cross-team UI consistency.',
      'Migrated complex state management from Redux to Zustand — reduced boilerplate by 40% and improved developer experience.',
      'Implementing micro-frontend architecture for member-facing health portal serving 5M+ users.',
      'Standardizing CI/CD quality gates with SonarQube, Fortify, and Black Duck scans across all frontend repos.',
      'Driving accessibility-first development practices, achieving WCAG 2.1 AA compliance across member flows.',
    ],
    stack: ['React', 'TypeScript', 'Storybook', 'Zustand', 'Vite', 'SCSS', 'Jenkins', 'SonarQube', 'AWS', 'Micro-Frontend'],
  },
  {
    role: 'Tech Lead',
    company: 'Leading US-Based Bank',
    duration: 'Mar 2023 – Dec 2025',
    location: 'Minneapolis, MN',
    highlights: [
      'Led Onboarding V2 migration to Vite-based mono-repo — modular architecture serving 13,000+ partner implementations.',
      'Designed theme-less, config-driven architecture enabling partner-level customization without touching shared core.',
      'Built Merge Mind: AI-driven merge request review assistant using GPT-4 within GitLab CI/CD pipelines.',
      'Contributed to AI Hackathon fraud detection prototype using Python ML pipelines — shortlisted for pilot deployment.',
      'Architected AEM integration for dynamic, partner-specific content rendering.',
      'Mentored onsite–offshore teams; enforced TypeScript, ESLint, and SonarQube standards.',
      'Streamlined multi-environment deployments (IT, UAT, Pre-Prod, Prod, Banker, Branch, Pilot).',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'PNPM', 'Mono-repo', 'AEM', 'SCSS', 'Jenkins', 'GitLab CI/CD', 'SonarQube', 'Splunk'],
  },
  {
    role: 'Senior Project Engineer',
    company: 'Enterprise Banking Program',
    duration: 'Aug 2021 – Feb 2023',
    location: 'Pune, India',
    highlights: [
      'Built customer onboarding micro-app across online and mobile banking platforms.',
      'Architected micro-frontend integration enabling independent module deployment.',
      'Designed reusable WCAG 2.1 compliant UI components — reduced future UI build time by 30%.',
      'Optimized performance via lazy loading, code splitting, and dynamic imports; improved load times by 30%.',
      'Refactored state with Redux Toolkit and React Query; reduced API calls significantly.',
      'Achieved 85% test coverage using Jest, React Testing Library, and Cypress.',
    ],
    stack: ['React', 'JavaScript ES6+', 'Redux', 'HTML5', 'SCSS', 'Jenkins', 'GitLab CI/CD', 'SonarQube', 'Adobe Analytics'],
  },
  {
    role: 'React Developer',
    company: 'Contract — Banking Digital Platform',
    duration: 'Jun 2021 – Jul 2021',
    location: 'Remote, India',
    highlights: [
      'Established React boilerplate with standardized folder structure, ESLint, Prettier, and Webpack configs.',
      'Integrated SonarQube and Jenkins CI/CD pipelines for automated quality gates.',
    ],
    stack: ['React', 'JavaScript ES6+', 'Webpack', 'ESLint', 'Prettier', 'Jenkins', 'SonarQube'],
  },
  {
    role: 'Frontend Developer',
    company: 'Javnic Solutions',
    duration: 'Apr 2018 – May 2021',
    location: 'Noida, India',
    highlights: [
      'Built and optimized 20+ high-performance landing pages across e-commerce, healthcare, retail, and education.',
      'Improved page views per session by 22% via performance and UX optimizations.',
      'Integrated payment gateways: Stripe, PayPal, Razorpay, Instamojo.',
      'Implemented location-based search with debouncing and multi-device compatibility.',
    ],
    stack: ['HTML5', 'CSS3', 'SCSS', 'JavaScript ES6+', 'React', 'Redux', 'REST APIs', 'Stripe', 'PayPal'],
  },
  {
    role: 'Junior GIS Engineer',
    company: 'Cyient Limited',
    duration: 'Jan 2016 – Mar 2018',
    location: 'Noida, India',
    highlights: [
      'Worked on Cartopia GIS web app for POI and road network data capture and visualization.',
      'Automated log analysis and built dashboards with Tableau and SAS — improved efficiency by 35%.',
      'Co-developed C-Pedia: internal knowledge search platform using React, JavaScript, and Node.js.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript ES6', 'Node.js', 'Tableau', 'SAS', 'ArcGIS'],
  },
]

export const aiProjects = [
  {
    name: 'AI Anurag Assistant',
    desc: 'Personal portfolio chatbot powered by OpenAI GPT APIs with custom LLM prompts trained on my resume and project data. Supports contextual Q&A with dynamic prompt injection.',
    comingSoon: true,
  },
  {
    name: 'Merge Mind',
    desc: 'Internal AI-driven merge request review assistant leveraging LLMs to analyze pull requests for code quality, maintainability, and security patterns inside GitLab CI/CD.',
    comingSoon: false,
  },
  {
    name: 'Fraud Detection System',
    desc: 'ML-driven hackathon prototype for real-time fraud detection using behavioral and anomaly detection. Received positive feedback and was shortlisted for pilot deployment.',
    comingSoon: false,
  },
]

export const upcomingProjects = [
  { name: 'Prompt-Based AI Chatbot', desc: 'AI-powered personal assistant with customizable system prompts, adjustable LLM parameters, and resume-aware conversational Q&A.', live: true, route: 'ai-chatbot' },
  { name: 'AI Merge Conflict Resolver', desc: 'Paste a git conflict or analyze a GitHub PR — AI breaks down changes, identifies risks, and generates clean resolved code via streaming.', live: true, route: 'merge-resolver' },
  { name: 'Java + React Lab', desc: 'Full-stack starter demos with Spring Boot APIs and modern React frontends.' },
  { name: 'Prompt Engineering Kit', desc: 'A reusable prompt template library for LLM integration workflows.' },
  { name: 'Micro-Frontend Boilerplate', desc: 'Production-ready mono-repo starter for scalable micro-frontend architectures.' },
  { name: 'LLM Dev Companion', desc: 'AI-powered code review and architecture suggestion tool for daily dev workflows.' },
]

export const education = {
  degree: 'Bachelor of Engineering (Electronics and Communication Engineering)',
  school: 'Rashtrasant Tukadoji Maharaj (RTM) Nagpur University, India',
  year: '2011 – 2015',
}

export const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024' },
]
