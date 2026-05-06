import { meta } from '../data/resume'

export function renderFooter(): string {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="logo-bracket">&lt;</span>
          <span>Anurag Kumar</span>
          <span class="logo-bracket">/&gt;</span>
        </div>
        <p>Senior Software Engineer · Minneapolis, MN</p>
        <p class="footer-email">
          <a href="mailto:${meta.email}">${meta.email}</a>
        </p>
        <p class="footer-copy">© ${new Date().getFullYear()} Anurag Kumar. Built with Vite + TypeScript.</p>
      </div>
    </footer>
  `
}
