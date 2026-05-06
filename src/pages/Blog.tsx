export function renderBlog(): string {
  return `
    <main class="page page-blog">
      <section class="section coming-soon-hero">
        <p class="hero-eyebrow">Blog</p>
        <h1 class="page-title">Coming Soon</h1>
        <p class="page-subtitle">
          A space for deep dives into frontend architecture, AI integration patterns, 
          full-stack engineering, and lessons from the trenches of enterprise development.
        </p>
        <div class="coming-pulse">
          <span></span><span></span><span></span>
        </div>
      </section>

      <section class="section">
        <div class="coming-grid-full">
          <article class="coming-card">
            <div class="coming-number">01</div>
            <div class="coming-badge">Draft</div>
            <h3>Micro-Frontends at Scale</h3>
            <p>Lessons from architecting modular mono-repos serving thousands of partner implementations.</p>
          </article>
          <article class="coming-card">
            <div class="coming-number">02</div>
            <div class="coming-badge">Draft</div>
            <h3>Building with RAG & LLMs</h3>
            <p>Practical patterns for integrating retrieval-augmented generation into real engineering workflows.</p>
          </article>
          <article class="coming-card">
            <div class="coming-number">03</div>
            <div class="coming-badge">Draft</div>
            <h3>Storybook-Driven Development</h3>
            <p>How a design-system-first approach transforms team velocity and component consistency.</p>
          </article>
        </div>
      </section>

      <section class="section cs-cta">
        <p>Want to be notified when new posts go live?</p>
        <a href="#contact" class="btn btn-primary" data-nav="contact">Get in Touch</a>
      </section>
    </main>
  `
}
