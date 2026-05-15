import { API_BASE_URL } from '../constants'

export function renderMergeResolver(): string {
  return `
    <main class="page page-merge-resolver">
      <section class="section merge-hero">
        <p class="hero-eyebrow">AI Workspace</p>
        <h1 class="page-title">AI Merge Conflict Resolver</h1>
        <p class="page-subtitle">
          Paste a git merge conflict or analyze a GitHub Pull Request — the AI will break down what each branch is doing,
          identify risks, and generate clean resolved code. Powered by LangChain + GPT-4.1 with streaming output.
        </p>
      </section>

      <section class="section merge-workspace">
        <!-- PR CONTROLS -->
        <div class="merge-controls">
          <div class="merge-controls-row merge-controls-url">
            <div class="control-group control-group-url">
              <label for="pr-url">Pull Request / Merge Request URL</label>
              <input type="text" id="pr-url" value="https://github.com/anu3dev/anurag-dummy/pull/1" placeholder="e.g. https://github.com/anu3dev/anurag-dummy/pull/1" autocomplete="off" />
            </div>
            <div class="merge-actions">
              <button type="button" class="btn btn-outline btn-sm" id="btn-analyze-pr">Analyze PR</button>
              <button type="button" class="btn btn-primary btn-sm" id="btn-resolve">Resolve File</button>
              <button type="button" class="btn btn-accent btn-sm" id="btn-resolve-all" style="display:none">Resolve All</button>
            </div>
          </div>
        </div>

        <!-- THREE-PANEL LAYOUT -->
        <div class="merge-layout">
          <!-- LEFT: Conflict Input -->
          <div class="merge-panel">
            <div class="merge-panel-header">
              <h3>PR Diff</h3>
              <div class="merge-panel-header-actions">
                <select id="file-selector" class="merge-file-select" style="display:none">
                  <option value="">Select a file…</option>
                </select>
                <button type="button" class="btn btn-outline btn-sm" id="btn-load-sample">Load Sample</button>
                <button type="button" class="btn btn-outline btn-sm" id="btn-clear-conflict">Clear</button>
              </div>
            </div>
            <textarea id="conflict-input" spellcheck="false" placeholder="Enter a PR / MR URL above and click 'Analyze PR' to fetch diffs.

All changed files will appear in the dropdown — select any file to view its diff, then click 'Resolve Conflict' to let AI resolve it.

You can also paste a conflict or diff here manually."></textarea>
          </div>

          <!-- MIDDLE: AI Analysis -->
          <div class="merge-panel">
            <div class="merge-panel-header">
              <h3>AI Analysis</h3>
              <span class="merge-status" id="merge-status"></span>
            </div>
            <div class="merge-output" id="analysis-output">
              <div class="merge-placeholder">
                AI analysis will appear here — paste a conflict and click <strong>Resolve Conflict</strong>, or enter a GitHub PR and click <strong>Analyze PR</strong>.
              </div>
            </div>
          </div>

          <!-- RIGHT: Resolved Code -->
          <div class="merge-panel">
            <div class="merge-panel-header">
              <h3>Resolved Code</h3>
              <button type="button" class="btn btn-outline btn-sm" id="btn-copy-resolved" style="display:none">Copy</button>
            </div>
            <div class="merge-output merge-code-output" id="resolved-output">
              <div class="merge-placeholder">
                Resolved code will appear here after AI processes the conflict.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
}

export function bindMergeResolver() {
  const conflictInput = document.getElementById('conflict-input') as HTMLTextAreaElement
  const analysisOutput = document.getElementById('analysis-output')!
  const resolvedOutput = document.getElementById('resolved-output')!
  const statusEl = document.getElementById('merge-status')!
  const copyBtn = document.getElementById('btn-copy-resolved')!

  const prUrlInput = document.getElementById('pr-url') as HTMLInputElement
  const fileSelector = document.getElementById('file-selector') as HTMLSelectElement

  const analyzePrBtn = document.getElementById('btn-analyze-pr') as HTMLButtonElement
  const resolveBtn = document.getElementById('btn-resolve') as HTMLButtonElement
  const resolveAllBtn = document.getElementById('btn-resolve-all') as HTMLButtonElement
  const clearBtn = document.getElementById('btn-clear-conflict') as HTMLButtonElement
  const loadSampleBtn = document.getElementById('btn-load-sample') as HTMLButtonElement

  // Store fetched PR files for switching
  let prFiles: { filename: string; patch: string }[] = []

  const SAMPLE_CONFLICT = `/**
<<<<<<< feature/refactor-services
 * Structured logging service with log levels and colors
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error'

const LEVEL_PRIORITY: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
=======
 * Logging service — with file output and history
 */

export type LogLevel = 'info' | 'warn' | 'error' | 'fatal'

interface LogEntry {
  level: LogLevel
  context: string
  message: string
  timestamp: string
>>>>>>> main
}

export class Logger {
  private context: string
<<<<<<< feature/refactor-services
  private minLevel: LogLevel
=======
  private static history: LogEntry[] = []
  private static MAX_HISTORY = 500
>>>>>>> main

  constructor(context: string, minLevel: LogLevel = 'info') {
    this.context = context
    this.minLevel = minLevel
  }

  debug(message: string, data?: unknown): void {
    this.log('debug', message, data)
  }

  info(message: string, data?: unknown): void {
    this.log('info', message, data)
  }

  warn(message: string, data?: unknown): void {
    this.log('warn', message, data)
  }

<<<<<<< feature/refactor-services
  error(message: string, data?: unknown): void {
    this.log('error', message, data)
  }

  private log(level: LogLevel, message: string, data?: unknown): void {
    if (LEVEL_PRIORITY[level] < LEVEL_PRIORITY[this.minLevel]) return

    const entry = {
      timestamp: new Date().toISOString(),
      level,
      context: this.context,
      message,
      ...(data !== undefined ? { data } : {}),
    }
    console.log(JSON.stringify(entry))
=======
  fatal(message: string): void {
    this.log('fatal', message)
  }

  private log(level: LogLevel, message: string): void {
    const entry: LogEntry = {
      level,
      context: this.context,
      message,
      timestamp: new Date().toISOString(),
    }
    Logger.history.push(entry)
    if (Logger.history.length > Logger.MAX_HISTORY) Logger.history.shift()

    const prefix = \`[\${entry.timestamp}] [\${level.toUpperCase().padEnd(5)}] [\${this.context}]\`
    console.log(\`\${prefix} \${message}\`)
  }

  static getHistory(): readonly LogEntry[] {
    return [...Logger.history]
  }

  static clearHistory(): void {
    Logger.history = []
>>>>>>> main
  }
}`

  function escapeHtml(str: string): string {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>')
  }

  function setStatus(text: string, type: 'loading' | 'success' | 'error' | '') {
    statusEl.textContent = text
    statusEl.className = `merge-status ${type}`
  }

  function setDisabled(disabled: boolean) {
    analyzePrBtn.disabled = disabled
    resolveBtn.disabled = disabled
    resolveAllBtn.disabled = disabled
  }

  // File selector change
  fileSelector.addEventListener('change', () => {
    const idx = parseInt(fileSelector.value, 10)
    if (!isNaN(idx) && prFiles[idx]) {
      conflictInput.value = prFiles[idx].patch
    }
  })

  // Load sample conflict
  loadSampleBtn.addEventListener('click', () => {
    conflictInput.value = SAMPLE_CONFLICT
    setStatus('Sample conflict loaded', 'success')
  })

  // Clear conflict
  clearBtn.addEventListener('click', () => {
    conflictInput.value = ''
    analysisOutput.innerHTML = '<div class="merge-placeholder">AI analysis will appear here.</div>'
    resolvedOutput.innerHTML = '<div class="merge-placeholder">Resolved code will appear here.</div>'
    copyBtn.style.display = 'none'
    fileSelector.style.display = 'none'
    fileSelector.innerHTML = '<option value="">Select a file…</option>'
    resolveAllBtn.style.display = 'none'
    prFiles = []
    setStatus('', '')
  })

  // Copy resolved code
  copyBtn.addEventListener('click', () => {
    const code = resolvedOutput.textContent || ''
    navigator.clipboard.writeText(code).then(() => {
      const original = copyBtn.textContent
      copyBtn.textContent = 'Copied!'
      setTimeout(() => { copyBtn.textContent = original }, 1500)
    })
  })

  // Helper: resolve a single diff via streaming, returns { analysis, resolved }
  async function resolveOne(conflict: string): Promise<{ analysis: string; resolved: string }> {
    const response = await fetch(`${API_BASE_URL}/stream-resolve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ conflict }),
    })
    if (!response.ok) throw new Error(`API error (${response.status})`)
    const reader = response.body?.getReader()
    if (!reader) throw new Error('Streaming not supported')

    const decoder = new TextDecoder()
    let accumulatedText = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      const chunk = decoder.decode(value)
      const lines = chunk.split('\n').filter(l => l.startsWith('data:'))
      for (const line of lines) {
        try {
          const json = JSON.parse(line.replace('data: ', ''))
          if (json.content) {
            accumulatedText += json.content
            analysisOutput.innerHTML = `<div class="merge-streamed">${escapeHtml(accumulatedText)}</div>`
            analysisOutput.scrollTop = analysisOutput.scrollHeight
          }
        } catch { /* skip */ }
      }
    }

    const codeMatch = accumulatedText.match(/```[\s\S]*?\n([\s\S]*?)```/)
    return { analysis: accumulatedText, resolved: codeMatch ? codeMatch[1].trim() : '' }
  }

  // RESOLVE SINGLE FILE — Streaming
  resolveBtn.addEventListener('click', async () => {
    const conflict = conflictInput.value.trim()
    if (!conflict) {
      setStatus('Paste a conflict first', 'error')
      return
    }

    setDisabled(true)
    setStatus('AI is analyzing...', 'loading')
    analysisOutput.innerHTML = ''
    resolvedOutput.innerHTML = '<div class="merge-placeholder">Waiting for AI...</div>'
    copyBtn.style.display = 'none'

    try {
      const result = await resolveOne(conflict)

      if (result.resolved) {
        resolvedOutput.innerHTML = `<pre class="merge-resolved-code"><code>${escapeHtml(result.resolved)}</code></pre>`
        copyBtn.style.display = 'inline-flex'
      } else {
        resolvedOutput.innerHTML = `<div class="merge-placeholder">No distinct code block found. Check the analysis panel.</div>`
      }

      setStatus('Complete', 'success')
    } catch (err: any) {
      setStatus(err.message || 'Request failed', 'error')
      analysisOutput.innerHTML = `<div class="merge-error">❌ ${escapeHtml(err.message || 'Something went wrong.')}</div>`
    } finally {
      setDisabled(false)
    }
  })

  // RESOLVE ALL FILES — Sequential
  resolveAllBtn.addEventListener('click', async () => {
    if (prFiles.length === 0) {
      setStatus('No PR files loaded', 'error')
      return
    }

    setDisabled(true)
    copyBtn.style.display = 'none'
    analysisOutput.innerHTML = ''
    resolvedOutput.innerHTML = ''

    const allResolved: string[] = []
    let hasError = false

    for (let i = 0; i < prFiles.length; i++) {
      const file = prFiles[i]
      if (!file.patch.trim()) continue

      setStatus(`Resolving file ${i + 1}/${prFiles.length}: ${file.filename}`, 'loading')

      // Highlight current file in dropdown
      fileSelector.value = String(i)
      conflictInput.value = file.patch

      // Add file header to analysis panel
      analysisOutput.innerHTML += `<div class="merge-file-divider">📄 ${escapeHtml(file.filename)} (${i + 1}/${prFiles.length})</div>`

      try {
        const result = await resolveOne(file.patch)
        const resolvedBlock = result.resolved
          ? `<pre class="merge-resolved-code"><code>${escapeHtml(result.resolved)}</code></pre>`
          : `<div class="merge-placeholder">No code block found for this file.</div>`

        allResolved.push(`// ── ${file.filename} ──\n${result.resolved || '// No resolved code'}`)

        // Append to resolved panel with file header
        resolvedOutput.innerHTML += `<div class="merge-file-divider">📄 ${escapeHtml(file.filename)}</div>${resolvedBlock}`
      } catch (err: any) {
        hasError = true
        analysisOutput.innerHTML += `<div class="merge-error">❌ ${escapeHtml(file.filename)}: ${escapeHtml(err.message || 'Failed')}</div>`
        allResolved.push(`// ── ${file.filename} ──\n// ERROR: ${err.message || 'Failed'}`)
      }
    }

    if (allResolved.length > 0) copyBtn.style.display = 'inline-flex'
    setStatus(hasError ? 'Completed with errors' : `All ${prFiles.length} files resolved`, hasError ? 'error' : 'success')
    setDisabled(false)
  })

  // ANALYZE PR
  analyzePrBtn.addEventListener('click', async () => {
    const url = prUrlInput.value.trim()
    if (!url) {
      setStatus('Paste a PR / MR URL first', 'error')
      return
    }

    // Parse GitHub PR:  github.com/{owner}/{repo}/pull/{number}
    // Parse GitLab MR:  gitlab.com/{owner}/{repo}/-/merge_requests/{number}
    const ghMatch = url.match(/github\.com\/([\w.-]+)\/([\w.-]+)\/pull\/(\d+)/)
    const glMatch = url.match(/gitlab\.com\/([\w.-]+)\/([\w.-]+)\/-\/merge_requests\/(\d+)/)
    const match = ghMatch || glMatch

    if (!match) {
      setStatus('Invalid PR/MR URL — use a GitHub or GitLab link', 'error')
      return
    }

    const [, owner, repo, pullNumber] = match

    setDisabled(true)
    setStatus('Fetching PR...', 'loading')
    analysisOutput.innerHTML = ''
    resolvedOutput.innerHTML = '<div class="merge-placeholder">Waiting for analysis...</div>'
    copyBtn.style.display = 'none'

    try {
      const res = await fetch(`${API_BASE_URL}/analyze-pr`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ owner, repo, pullNumber: Number(pullNumber) }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || `API error (${res.status})`)
      }

      const data = await res.json()

      analysisOutput.innerHTML = `<div class="merge-streamed">${escapeHtml(data.analysis || 'No analysis returned.')}</div>`

      // Populate file selector with all changed files
      prFiles = (data.files || []).map((f: any) => ({ filename: f.filename || f.name || 'unknown', patch: f.patch || '' }))

      if (prFiles.length > 0) {
        fileSelector.innerHTML = prFiles
          .map((f, i) => `<option value="${i}">${f.filename}</option>`)
          .join('')
        fileSelector.style.display = 'inline-block'
        fileSelector.value = '0'
        conflictInput.value = prFiles[0].patch
        resolveAllBtn.style.display = prFiles.length > 1 ? 'inline-flex' : 'none'
      }

      const filesChanged = data.filesChanged || prFiles.length
      setStatus(`${filesChanged} file${filesChanged !== 1 ? 's' : ''} analyzed`, 'success')
    } catch (err: any) {
      setStatus(err.message || 'PR analysis failed', 'error')
      analysisOutput.innerHTML = `<div class="merge-error">❌ ${escapeHtml(err.message || 'Failed to analyze PR.')}</div>`
    } finally {
      setDisabled(false)
    }
  })
}
