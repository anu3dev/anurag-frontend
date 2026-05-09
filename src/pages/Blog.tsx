import { blogPosts } from '../data/blog'

export function renderBlog(): string {
  const livePosts = blogPosts.filter(p => p.status === 'live')
  const draftPosts = blogPosts.filter(p => p.status === 'draft')

  return `
    <main class="page page-blog">
      <section class="section blog-hero">
        <p class="hero-eyebrow">Blog</p>
        <h1 class="page-title">Engineering Notes</h1>
        <p class="page-subtitle">
          Deep dives into frontend architecture, full-stack deployment, AI integration patterns,
          and lessons from the trenches of enterprise development.
        </p>
      </section>

      ${livePosts.length ? `
      <section class="section blog-posts-section">
        <div class="blog-grid">
          ${livePosts.map(post => `
            <a href="#blog/${post.slug}" class="blog-card blog-card-live" data-blog="${post.slug}">
              <div class="blog-card-badge badge-live">Live</div>
              <h3>${post.title}</h3>
              <p class="blog-card-subtitle">${post.subtitle}</p>
              <p class="blog-card-excerpt">${post.excerpt}</p>
              <div class="blog-card-meta">
                <span class="blog-card-date">${post.date}</span>
                <span class="blog-card-dot">·</span>
                <span class="blog-card-read">${post.readTime}</span>
              </div>
              <div class="blog-card-tags">
                ${post.tags.map(t => `<span class="chip">${t}</span>`).join('')}
              </div>
              <span class="card-link">Read Post →</span>
            </a>
          `).join('')}
        </div>
      </section>
      ` : ''}

      ${draftPosts.length ? `
      <section class="section blog-drafts-section">
        <h2 class="section-title">Coming Up</h2>
        <p class="section-sub">Posts in progress — stay tuned.</p>
        <div class="blog-grid">
          ${draftPosts.map((post, i) => `
            <div class="blog-card blog-card-draft">
              <div class="coming-number">0${i + livePosts.length + 1}</div>
              <div class="blog-card-badge">Draft</div>
              <h3>${post.title}</h3>
              <p class="blog-card-excerpt">${post.excerpt}</p>
              <div class="blog-card-tags">
                ${post.tags.map(t => `<span class="chip">${t}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
      ` : ''}

      <section class="section cs-cta">
        <p>Want to be notified when new posts go live?</p>
        <a href="#contact" class="btn btn-primary" data-nav="contact">Get in Touch</a>
      </section>
    </main>
  `
}

