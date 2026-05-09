import { getBlogBySlug } from '../data/blog'

export function renderBlogPost(slug: string): string {
  const post = getBlogBySlug(slug)

  if (!post || post.status === 'draft') {
    return `
      <main class="page page-blog-post">
        <section class="section blog-post-not-found">
          <p class="hero-eyebrow">Blog</p>
          <h1 class="page-title">Post Not Found</h1>
          <p class="page-subtitle">This post doesn't exist or is still being written.</p>
          <a href="#blog" class="btn btn-primary" data-nav="blog">← Back to Blog</a>
        </section>
      </main>
    `
  }

  return `
    <main class="page page-blog-post">
      <article class="section blog-article">
        <a href="#blog" class="blog-back-link" data-nav="blog">← Back to Blog</a>

        <header class="blog-article-header">
          <div class="blog-article-meta">
            <span class="blog-article-date">${post.date}</span>
            <span class="blog-card-dot">·</span>
            <span class="blog-article-read">${post.readTime}</span>
          </div>
          <h1 class="blog-article-title">${post.title}</h1>
          <p class="blog-article-subtitle">${post.subtitle}</p>
          <div class="blog-article-tags">
            ${post.tags.map(t => `<span class="chip">${t}</span>`).join('')}
          </div>
        </header>

        <div class="blog-article-body">
          ${post.content}
        </div>

        <footer class="blog-article-footer">
          <a href="#blog" class="btn btn-outline" data-nav="blog">← Back to Blog</a>
        </footer>
      </article>
    </main>
  `
}
