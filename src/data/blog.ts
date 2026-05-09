export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  date: string
  readTime: string
  tags: string[]
  status: 'live' | 'draft'
  excerpt: string
  content: string       // HTML string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'deploy-fullstack-app-netlify-aws-ec2',
    title: 'Deploy a Full-Stack App Using Vite, Netlify, AWS EC2 & GoDaddy Domain',
    subtitle: 'Complete Beginner Guide',
    date: 'May 8, 2026',
    readTime: '18 min read',
    tags: ['Vite', 'Netlify', 'AWS EC2', 'Node.js', 'DevOps', 'SSL'],
    status: 'live',
    excerpt: 'A step-by-step end-to-end guide to deploying a React + Vite frontend on Netlify and a Node.js backend on AWS EC2 — with custom domain, HTTPS, and PM2.',
    content: `
<p>This guide walks you through deploying a full-stack application from scratch — React + Vite on the frontend hosted on Netlify, and a Node.js + Express API on AWS EC2. We'll wire up a custom GoDaddy domain, configure SSL with Nginx + Certbot, and keep the backend running forever with PM2.</p>

<h2>1. Create a Vite Frontend App</h2>
<p>Scaffold a React + Vite application locally:</p>
<pre><code>npm create vite@latest my-app</code></pre>
<p>Select your framework and variant:</p>
<ul>
<li>Framework → <strong>React</strong></li>
<li>Variant → <strong>TypeScript</strong> (or JavaScript)</li>
</ul>
<p>Move into the project and install dependencies:</p>
<pre><code>cd my-app
npm install
npm run dev</code></pre>

<h2>2. Push to GitHub</h2>
<p>Initialize a git repository and push your code:</p>
<pre><code>git init
git add .
git commit -m "Initial frontend setup"
git remote add origin &lt;github-repo-url&gt;
git push -u origin main</code></pre>

<h2>3. Deploy Frontend on Netlify</h2>
<ol>
<li>Login to <strong>Netlify</strong></li>
<li>Click <strong>Add New Site</strong> → <strong>Import from Git</strong></li>
<li>Connect your GitHub account and select the repository</li>
<li>Configure build settings:
  <ul>
    <li>Build command: <code>npm run build</code></li>
    <li>Publish directory: <code>dist</code></li>
  </ul>
</li>
<li>Click <strong>Deploy site</strong></li>
</ol>
<p>Netlify will generate a temporary domain like:</p>
<pre><code>https://random-name.netlify.app</code></pre>

<h2>4. Create a Node.js Backend</h2>
<p>Set up a simple Express backend:</p>
<pre><code>mkdir backend
cd backend
npm init -y
npm install express cors</code></pre>

<h2>5. Create a Test API</h2>
<p>Create <code>index.js</code> with a simple health-check endpoint:</p>
<pre><code>const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/test", (req, res) =&gt; {
  res.json({ message: "API is working successfully" });
});

app.listen(5000, () =&gt; {
  console.log("Server running on port 5000");
});</code></pre>
<p>Start the backend and test at <code>http://localhost:5000/api/test</code></p>

<h2>6. Connect Frontend to Backend API</h2>
<p>Inside your React app, call the API:</p>
<pre><code>fetch("http://localhost:5000/api/test")
  .then(res =&gt; res.json())
  .then(data =&gt; console.log(data));</code></pre>
<p>Push updated frontend code — Netlify will automatically redeploy:</p>
<pre><code>git add .
git commit -m "Integrated backend API"
git push</code></pre>

<h2>7. Purchase a Domain from GoDaddy</h2>
<p>Buy any domain from <strong>GoDaddy</strong>. For example:</p>
<pre><code>anuragkr.in</code></pre>

<h2>8. Map Domain to Netlify</h2>
<p>Inside Netlify:</p>
<ol>
<li>Open <strong>Site Settings</strong> → <strong>Domains</strong></li>
<li>Click <strong>Add Custom Domain</strong></li>
<li>Netlify will provide nameservers, e.g.:
<pre><code>dns1.p01.nsone.net
dns2.p01.nsone.net</code></pre>
</li>
</ol>
<p>In GoDaddy:</p>
<ol>
<li>Open <strong>Domain DNS Management</strong></li>
<li>Replace the default nameservers with the ones Netlify provides</li>
</ol>
<div class="blog-callout">
⚠️ DNS propagation can take anywhere from a few minutes to 24 hours. You can verify using <code>ping yourdomain.com</code> or simply try opening the site in your browser.
</div>

<h2>9. Login to AWS &amp; Open EC2</h2>
<p>Go to the <strong>AWS Console</strong>:</p>
<ol>
<li>Search for <strong>EC2</strong></li>
<li>Open <strong>EC2 Dashboard</strong></li>
<li>Click <strong>Launch Instance</strong></li>
</ol>

<h2>10. Create an EC2 Instance</h2>
<p>Recommended configuration:</p>
<ul>
<li><strong>OS</strong> → Ubuntu</li>
<li><strong>Instance Type</strong> → t2.micro (Free Tier eligible)</li>
<li><strong>Key Pair</strong> → Create new and download the <code>.pem</code> file</li>
<li><strong>Network</strong> → Allow HTTP, HTTPS, and SSH traffic</li>
</ul>
<p>Click <strong>Launch instance</strong>.</p>

<h2>11. Connect to EC2</h2>
<p>You have two methods to connect:</p>

<h3>Method 1: Browser SSH</h3>
<p>In AWS EC2 dashboard → <strong>Connect</strong> → <strong>EC2 Instance Connect</strong> → <strong>Connect</strong>. A browser terminal will open directly.</p>

<h3>Method 2: Terminal / Git Bash SSH</h3>
<p>Navigate to the folder containing your <code>.pem</code> file:</p>
<pre><code>cd Downloads
chmod 400 my-key.pem
ssh -i "my-key.pem" ubuntu@&lt;public-ip&gt;</code></pre>
<p>Example:</p>
<pre><code>ssh -i "anurag-ubuntu-1.pem" ubuntu@ec2-18-208-251-39.compute-1.amazonaws.com</code></pre>

<h2>12. Install Node.js on EC2</h2>
<p>Update packages and install Node.js:</p>
<pre><code>sudo apt update
sudo apt install nodejs npm -y
node -v
npm -v</code></pre>

<h2>13. Push Backend to GitHub</h2>
<p>From your local backend folder:</p>
<pre><code>git init
git add .
git commit -m "Backend setup"
git remote add origin &lt;repo-url&gt;
git push -u origin main</code></pre>

<h2>14. Clone Backend in EC2</h2>
<p>Inside the EC2 instance:</p>
<pre><code>git clone &lt;repo-url&gt;
cd backend
npm install</code></pre>

<h2>15. Run Backend Application</h2>
<p>Start the app:</p>
<pre><code>node index.js</code></pre>
<p>Access the API at <code>http://&lt;ec2-public-ip&gt;:5000/api/test</code></p>
<div class="blog-callout">
⚠️ If the endpoint isn't reachable, open the <strong>Security Group</strong> for your EC2 instance and add an inbound rule:<br/>
Type → <strong>Custom TCP</strong> | Port → <strong>5000</strong> | Source → <strong>Anywhere</strong>
</div>

<h2>16. Create an API Subdomain</h2>
<p>In Netlify DNS settings, create a subdomain pointing to your EC2 instance:</p>
<table class="blog-table">
<thead><tr><th>Type</th><th>Name</th><th>Value</th></tr></thead>
<tbody><tr><td>A</td><td>nodeapi</td><td>EC2 Public IP</td></tr></tbody>
</table>
<p>This gives you a clean API URL like <code>nodeapi.yourdomain.com</code></p>

<h2>17. Wait for DNS Propagation</h2>
<p>DNS updates can take a few minutes up to 24 hours. Verify with:</p>
<pre><code>ping nodeapi.yourdomain.com</code></pre>

<h2>18. HTTPS / SSL Setup</h2>
<p>AWS EC2 does <em>not</em> automatically provide HTTPS for custom domains. The recommended approach is to use <strong>Nginx</strong> as a reverse proxy with <strong>Certbot</strong> for free SSL certificates:</p>
<pre><code>sudo apt install nginx -y
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx</code></pre>
<p>Follow the interactive prompts and select your domain (e.g., <code>nodeapi.yourdomain.com</code>). Certbot will automatically configure Nginx with SSL.</p>

<h2>19. Keep Backend Running with PM2</h2>
<p>If you close the terminal, your Node app stops. Use <strong>PM2</strong> to keep it running as a daemon:</p>
<pre><code>sudo npm install pm2 -g
pm2 start index.js
pm2 save
pm2 startup</code></pre>
<p>PM2 will auto-restart your app on server reboots.</p>

<h2>Final Architecture</h2>
<div class="blog-architecture">
<div class="arch-col">
<h4>Frontend</h4>
<p>React + Vite → Hosted on Netlify → Custom Domain via GoDaddy</p>
</div>
<div class="arch-col">
<h4>Backend</h4>
<p>Node.js + Express → Hosted on AWS EC2 → API Subdomain → SSL via Nginx + Certbot</p>
</div>
</div>

<h2>What You've Achieved</h2>
<ul class="blog-checklist">
<li>React frontend deployed globally on Netlify</li>
<li>Node.js backend running on AWS EC2</li>
<li>Custom domain connected via GoDaddy</li>
<li>HTTPS enabled with Nginx + Certbot</li>
<li>Process management with PM2 for zero-downtime</li>
<li>Real-world, production-grade deployment experience</li>
</ul>
`,
  },
  {
    slug: 'build-prompt-based-ai-chatbot',
    title: 'Build a Prompt-Based AI Chatbot with React, Node.js & OpenAI',
    subtitle: 'From API Key to Production-Safe Chat Interface',
    date: 'May 8, 2026',
    readTime: '16 min read',
    tags: ['OpenAI', 'AI', 'Node.js', 'React', 'Chatbot', 'LLM'],
    status: 'live',
    excerpt: 'Learn how to build a prompt-based AI chatbot — understand system, assistant, and user roles, protect your API key with a backend proxy, and ship a polished chat UI.',
    content: `
<p>AI chatbots are everywhere — but most tutorials skip the fundamentals. What exactly is a "prompt-based" chatbot? How do system, assistant, and user messages work together? And how do you keep your API key safe in production?</p>
<p>This guide covers it all — from concept to code. We'll build a fully functional chatbot UI, wire it to OpenAI via a secure backend proxy, and deploy it safely. You can try the live version here: <a href="https://anuragkr.in/#ai-chatbot" target="_blank" rel="noopener noreferrer">anuragkr.in — AI Chatbot</a></p>

<h2>1. What Is a Prompt-Based AI Chatbot?</h2>
<p>A <strong>prompt-based AI chatbot</strong> is an application where the AI's behavior is entirely controlled by a text prompt — called the <strong>system prompt</strong> — that you provide before the conversation starts. Instead of hard-coding rules, you describe what the AI should do in plain English (or any language), and the LLM follows those instructions dynamically.</p>
<p>For example, you could tell the AI:</p>
<pre><code>You are an AI assistant. Use ONLY the information below
to answer questions. If a question is outside the provided
data, politely say you can only answer based on what you have.

CONTEXT DATA:
Name: Anurag Kumar
Role: Senior Software Engineer
Skills: React, TypeScript, Java, Spring Boot, AWS...</code></pre>
<p>Now the chatbot becomes a <em>resume Q&amp;A assistant</em> — it answers questions about Anurag's experience, skills, and projects, and politely declines anything outside that scope. Change the text, and it becomes a customer support bot, a quiz assistant, or anything else you need.</p>

<h2>2. Understanding Message Roles: System, User &amp; Assistant</h2>
<p>OpenAI's Chat Completions API uses a <strong>messages array</strong> with three roles. Understanding these is key to building effective chatbots:</p>

<h3>System</h3>
<p>The <strong>system message</strong> is the first message in the array. It sets the AI's personality, rules, and context. The user never sees this — it's your "instruction manual" for the AI.</p>
<pre><code>{
  "role": "system",
  "content": "You are a helpful assistant that only answers
              questions about frontend development."
}</code></pre>

<h3>User</h3>
<p>The <strong>user message</strong> is what the human types into the chat. Each time the user sends a message, you append it to the messages array.</p>
<pre><code>{
  "role": "user",
  "content": "What is React?"
}</code></pre>

<h3>Assistant</h3>
<p>The <strong>assistant message</strong> is the AI's response. After the API returns a reply, you add it back to the messages array so the AI remembers the conversation history.</p>
<pre><code>{
  "role": "assistant",
  "content": "React is a JavaScript library for building
              user interfaces, maintained by Meta."
}</code></pre>

<p>A typical request to the API looks like this:</p>
<pre><code>[
  { "role": "system", "content": "You are a resume assistant..." },
  { "role": "user", "content": "What is Anurag's experience?" },
  { "role": "assistant", "content": "Anurag has 10+ years..." },
  { "role": "user", "content": "What tech stack does he use?" }
]</code></pre>
<p>The AI reads the entire array top-to-bottom to understand context, which is how it maintains conversational memory.</p>

<h2>3. Get Your OpenAI API Key</h2>
<p>To use OpenAI's models, you need an API key:</p>
<ol>
<li>Go to <a href="https://platform.openai.com" target="_blank" rel="noopener noreferrer">platform.openai.com</a></li>
<li>Sign up or log in</li>
<li>Navigate to <strong>API Keys</strong> in the left sidebar</li>
<li>Click <strong>Create new secret key</strong></li>
<li>Copy it immediately — you won't see it again</li>
</ol>
<div class="blog-callout">
⚠️ <strong>Never put your API key in frontend code.</strong> If you embed it in JavaScript, anyone can open DevTools, find your key, and use it at your expense. This is the #1 mistake beginners make with AI APIs.
</div>

<h2>4. Why You Need a Backend Proxy</h2>
<p>Here's what happens if you call OpenAI directly from the browser:</p>
<pre><code>// ❌ NEVER DO THIS in production
fetch("https://api.openai.com/v1/chat/completions", {
  headers: {
    "Authorization": "Bearer sk-abc123..."  // EXPOSED!
  }
})</code></pre>
<p>Anyone can:</p>
<ul>
<li>Open browser DevTools → Network tab</li>
<li>See your API key in the request headers</li>
<li>Copy it and make unlimited API calls on your account</li>
<li>Run up your bill — potentially thousands of dollars</li>
</ul>
<p>The solution: <strong>route all AI requests through your own backend</strong>. The frontend talks to your server, and your server talks to OpenAI. The API key lives only on the server, never in the browser.</p>
<div class="blog-architecture">
<div class="arch-col">
<h4>Without Backend (Unsafe)</h4>
<p>Browser → OpenAI API (key exposed in headers)</p>
</div>
<div class="arch-col">
<h4>With Backend Proxy (Safe)</h4>
<p>Browser → Your Server → OpenAI API (key hidden on server)</p>
</div>
</div>

<h2>5. Build the Backend Proxy</h2>
<p>Create a Node.js + Express backend that proxies chat requests to OpenAI:</p>
<pre><code>mkdir chatbot-backend
cd chatbot-backend
npm init -y
npm install express cors openai dotenv</code></pre>

<h3>Store the API Key in .env</h3>
<p>Create a <code>.env</code> file in your backend root:</p>
<pre><code>OPENAI_API_KEY=sk-your-secret-key-here
PORT=5000</code></pre>
<div class="blog-callout">
⚠️ Add <code>.env</code> to your <code>.gitignore</code> immediately. Never commit API keys to version control.
</div>
<pre><code># .gitignore
node_modules
.env</code></pre>

<h3>Create the Server</h3>
<p>Create <code>index.js</code>:</p>
<pre><code>require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/ai-chat", async (req, res) =&gt; {
  try {
    const { model, messages, temperature, max_tokens } = req.body;

    const completion = await openai.chat.completions.create({
      model: model || "gpt-4o-mini",
      messages,
      temperature: temperature ?? 0.7,
      max_tokens: max_tokens ?? 200,
    });

    res.json(completion);
  } catch (error) {
    console.error("OpenAI Error:", error.message);
    res.status(500).json({
      error: { message: error.message || "AI request failed" },
    });
  }
});

app.listen(process.env.PORT || 5000, () =&gt; {
  console.log("Server running on port " + (process.env.PORT || 5000));
});</code></pre>
<p>The API key is read from <code>process.env.OPENAI_API_KEY</code> via the <code>dotenv</code> package — it stays on the server and is never sent to the client.</p>

<h2>6. Build the Frontend Chat UI</h2>
<p>Now build the frontend chat interface. This can be a React app, vanilla JS, or any framework. Here's the core logic:</p>

<h3>The HTML Structure</h3>
<pre><code>&lt;div class="chat-panel"&gt;
  &lt;div class="chat-messages" id="chat-messages"&gt;
    &lt;!-- Messages render here --&gt;
  &lt;/div&gt;
  &lt;form class="chat-input-row" id="chat-form"&gt;
    &lt;input type="text" id="chat-input"
           placeholder="Ask a question..." /&gt;
    &lt;button type="submit"&gt;Send&lt;/button&gt;
  &lt;/form&gt;
&lt;/div&gt;</code></pre>

<h3>The JavaScript Logic</h3>
<pre><code>const conversationHistory = [];

async function sendMessage(userMsg) {
  // 1. Add user message to history
  conversationHistory.push({
    role: "user",
    content: userMsg,
  });

  // 2. Build the full messages array with system prompt
  const messages = [
    { role: "system", content: systemPrompt },
    ...conversationHistory,
  ];

  // 3. Call YOUR backend — not OpenAI directly
  const res = await fetch("https://your-api.com/ai-chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.7,
      max_tokens: 200,
    }),
  });

  const data = await res.json();
  const reply = data.choices[0].message.content;

  // 4. Add assistant reply to history
  conversationHistory.push({
    role: "assistant",
    content: reply,
  });

  // 5. Display the reply in the UI
  appendMessage("assistant", reply);
}</code></pre>
<p>Key points:</p>
<ul>
<li>The frontend sends requests to <strong>your backend URL</strong>, not to <code>api.openai.com</code></li>
<li>The <code>conversationHistory</code> array maintains context between messages</li>
<li>The system prompt is included at the start of every request</li>
</ul>

<h2>7. Model Parameters Explained</h2>
<p>When calling the API, you can tune these parameters to control the AI's output:</p>
<table class="blog-table">
<thead><tr><th>Parameter</th><th>What It Does</th><th>Recommended</th></tr></thead>
<tbody>
<tr><td><code>model</code></td><td>Which AI model to use</td><td><code>gpt-4o-mini</code> (fast &amp; cheap)</td></tr>
<tr><td><code>temperature</code></td><td>Creativity level (0 = precise, 1 = creative)</td><td>0.7 for general chat</td></tr>
<tr><td><code>max_tokens</code></td><td>Max length of the response</td><td>200 for short answers, 500 for detailed</td></tr>
</tbody>
</table>
<p>Lower temperatures work well for factual Q&amp;A. Higher temperatures are better for brainstorming and creative writing.</p>

<h2>8. Managing Conversation History</h2>
<p>Every message in the history consumes tokens — and tokens cost money. If you let the history grow forever, you'll eventually hit the model's context window limit and your API costs will spike.</p>
<p>A practical approach: <strong>cap the history at the last 10 pairs</strong> (20 messages):</p>
<pre><code>// Keep only the last 10 user-assistant pairs
if (conversationHistory.length &gt; 20) {
  conversationHistory.splice(
    0,
    conversationHistory.length - 20
  );
}</code></pre>
<p>This keeps the conversation flowing naturally while controlling costs and staying within token limits.</p>

<h2>9. Making the System Prompt Editable</h2>
<p>A powerful feature: let users <strong>edit the system prompt</strong> directly in the UI. This turns your chatbot into a flexible tool — users can paste any text (a resume, product docs, a knowledge base) and the AI will answer questions about it.</p>
<pre><code>&lt;textarea id="system-prompt"&gt;
  Your default context data goes here...
&lt;/textarea&gt;</code></pre>
<p>On each chat submission, read the latest textarea value and rebuild the system prompt:</p>
<pre><code>function buildSystemPrompt(plainText) {
  return \`You are an AI assistant. Use ONLY the
information below to answer questions.

CONTEXT DATA:
\${plainText}\`;
}</code></pre>
<p>Plain text works great for this — no JSON schema needed. Just paste your data, and the AI figures it out.</p>

<h2>10. Security Checklist</h2>
<p>Before deploying your chatbot to production, make sure:</p>
<ul class="blog-checklist">
<li>API key is in <code>.env</code> file on the backend only</li>
<li><code>.env</code> is listed in <code>.gitignore</code></li>
<li>Frontend calls your backend, never OpenAI directly</li>
<li>CORS is configured to allow only your domain</li>
<li>Rate limiting is in place to prevent abuse</li>
<li>Conversation history is capped to control token costs</li>
</ul>

<h2>11. Try It Live</h2>
<p>I built exactly this for my portfolio — a prompt-based AI chatbot pre-loaded with my resume data. You can:</p>
<ul>
<li>Ask it questions about my experience, skills, and projects</li>
<li>Edit the context textarea with your own data</li>
<li>Adjust temperature, model, and token settings</li>
<li>See real-time AI responses from OpenAI</li>
</ul>
<p>👉 <strong><a href="https://anuragkr.in/#ai-chatbot" target="_blank" rel="noopener noreferrer">Try the live chatbot at anuragkr.in</a></strong></p>

<h2>Final Architecture</h2>
<div class="blog-architecture">
<div class="arch-col">
<h4>Frontend</h4>
<p>Chat UI + Editable System Prompt + Model Controls → Calls Backend API</p>
</div>
<div class="arch-col">
<h4>Backend</h4>
<p>Express Proxy → Reads API Key from .env → Forwards to OpenAI → Returns Response</p>
</div>
</div>

<h2>What You've Learned</h2>
<ul class="blog-checklist">
<li>What a prompt-based AI chatbot is and how it works</li>
<li>The difference between system, user, and assistant roles</li>
<li>How to get and secure your OpenAI API key</li>
<li>Why a backend proxy is essential for production</li>
<li>How to store secrets in .env and keep them out of git</li>
<li>Building a chat UI with editable system prompts</li>
<li>Managing conversation history and controlling costs</li>
<li>Production security best practices</li>
</ul>
`,
  },
  {
    slug: 'react-vs-angular-vs-nextjs-and-micro-frontends',
    title: 'React vs Angular vs Next.js — And When You Actually Need Micro-Frontends',
    subtitle: 'A Practical Decision Guide with Real-World Examples',
    date: 'May 8, 2026',
    readTime: '20 min read',
    tags: ['React', 'Angular', 'Next.js', 'Micro-Frontend', 'Architecture'],
    status: 'live',
    excerpt: 'A no-nonsense comparison of React, Angular, and Next.js — when to use each, real-world examples, and when your architecture actually needs micro-frontends.',
    content: `
<p>One of the most common questions in frontend engineering: <em>"Should I use React, Angular, or Next.js?"</em> — followed closely by <em>"Do I need micro-frontends?"</em> The answer, as always, is <strong>it depends</strong>. But this guide will give you a clear framework for deciding.</p>

<h2>1. React — The Flexible Library</h2>
<p><strong>React</strong> is a UI library, not a framework. It gives you component rendering and state management — everything else (routing, data fetching, forms) is your choice.</p>

<h3>When to Use React</h3>
<ul>
<li>You want <strong>freedom to pick your own tools</strong> (Vite, Webpack, Redux, Zustand, React Router, etc.)</li>
<li>Building a <strong>single-page application (SPA)</strong> where SEO doesn't matter much</li>
<li>Your team is comfortable assembling an ecosystem from packages</li>
<li>You want the <strong>largest community</strong> and npm ecosystem</li>
</ul>

<h3>Real-World Examples</h3>
<ul>
<li><strong>Facebook / Instagram</strong> — React was built for this. Highly interactive, SPA-style feeds.</li>
<li><strong>Airbnb</strong> — Dynamic search, filtering, and booking flows.</li>
<li><strong>This portfolio site</strong> — A Vite + React SPA with hash routing, theme toggling, and an AI chatbot playground. No SSR needed because it's a personal portfolio, not a content site that needs search engine indexing. <a href="https://anuragkr.in" target="_blank" rel="noopener noreferrer">See it live →</a></li>
<li><strong>Internal dashboards</strong> — Admin panels, analytics tools, and CRMs where the app lives behind a login.</li>
</ul>

<h3>When NOT to Use React (alone)</h3>
<ul>
<li>You need <strong>per-page SEO / social sharing previews</strong> (use Next.js instead)</li>
<li>You need a <strong>content-heavy blog or marketing site</strong> (SSG/SSR needed)</li>
<li>Your team needs strict conventions and guardrails (Angular might fit better)</li>
</ul>

<h2>2. Angular — The Enterprise Framework</h2>
<p><strong>Angular</strong> is a full opinionated framework built by Google. It ships with routing, forms, HTTP client, dependency injection, testing, and a powerful CLI — all in one box.</p>

<h3>When to Use Angular</h3>
<ul>
<li>Building <strong>large enterprise applications</strong> with 50+ developers</li>
<li>Your team has <strong>Java / C# / Spring Boot backgrounds</strong> (Angular's DI pattern feels familiar)</li>
<li>You need <strong>strict conventions</strong> so every project looks the same across teams</li>
<li>Building <strong>complex form-heavy apps</strong> (banking portals, insurance claims, CRMs)</li>
<li>You want <strong>everything built-in</strong> without choosing 15 different npm packages</li>
</ul>

<h3>Real-World Examples</h3>
<ul>
<li><strong>Google Cloud Console</strong> — Complex admin UI with hundreds of views, forms, and data tables.</li>
<li><strong>Deutsche Bank, UBS, HSBC</strong> — Banking portals where compliance, structure, and long-term stability matter more than developer freedom.</li>
<li><strong>SAP, Siemens, BMW</strong> — Enterprise dashboards managing millions of data points.</li>
<li><strong>Government portals</strong> — Tax filing systems, healthcare enrollment — form-heavy, regulation-heavy, needs strict architecture.</li>
</ul>

<h3>When NOT to Use Angular</h3>
<ul>
<li>Small to mid-size projects — Angular's boilerplate overhead isn't worth it</li>
<li>Content sites, blogs, marketing pages — Angular Universal (SSR) works but is clunky</li>
<li>Rapid prototyping — React or Next.js is much faster to spin up</li>
<li>You want a lightweight bundle — Angular ships heavier than React</li>
</ul>

<h2>3. Next.js — The React Meta-Framework</h2>
<p><strong>Next.js</strong> is built <em>on top</em> of React. It adds server-side rendering (SSR), static site generation (SSG), API routes, file-based routing, and image optimization — things React doesn't provide on its own.</p>

<h3>When to Use Next.js</h3>
<ul>
<li>You need <strong>SEO-friendly pages</strong> with unique meta tags per route</li>
<li>Building a <strong>blog, docs site, or marketing site</strong> where Google indexing matters</li>
<li>You want <strong>social sharing previews</strong> (LinkedIn, Twitter cards) with per-page content</li>
<li>You need <strong>API routes</strong> — lightweight backend endpoints without a separate server</li>
<li>You want <strong>static generation at build time</strong> (SSG) for blazing-fast page loads</li>
</ul>

<h3>Real-World Examples</h3>
<ul>
<li><strong>Vercel's own site</strong> — Marketing + docs, SSG with dynamic OG images.</li>
<li><strong>Hulu, TikTok (web), Nike</strong> — Content-heavy sites needing fast first loads and SEO.</li>
<li><strong>A blog with LinkedIn sharing</strong> — Each blog post gets its own <code>&lt;meta og:title&gt;</code> and <code>&lt;meta og:description&gt;</code> at build time. When shared on LinkedIn, the preview shows the post title and excerpt — not a generic site name. This is the exact problem you can't solve with a client-side SPA.</li>
<li><strong>E-commerce product pages</strong> — Each product needs unique SEO meta tags and fast server-rendered HTML.</li>
</ul>

<h3>When NOT to Use Next.js</h3>
<ul>
<li>Pure SPA dashboards behind authentication — you don't need SSR for internal tools</li>
<li>You want full control over your build tooling (Next.js is opinionated about its build pipeline)</li>
<li>Your backend is already a separate Spring Boot / Express app — Next.js API routes would be redundant</li>
</ul>

<h2>4. Side-by-Side Comparison</h2>
<table class="blog-table">
<thead><tr><th>Aspect</th><th>React</th><th>Angular</th><th>Next.js</th></tr></thead>
<tbody>
<tr><td><strong>Type</strong></td><td>UI Library</td><td>Full Framework</td><td>React Meta-Framework</td></tr>
<tr><td><strong>Created by</strong></td><td>Meta</td><td>Google</td><td>Vercel</td></tr>
<tr><td><strong>Language</strong></td><td>JS (TS optional)</td><td>TypeScript (required)</td><td>JS (TS optional)</td></tr>
<tr><td><strong>Rendering</strong></td><td>Client-side (CSR)</td><td>Client-side (CSR)</td><td>SSR + SSG + CSR</td></tr>
<tr><td><strong>Routing</strong></td><td>react-router (external)</td><td>Built-in</td><td>File-based (built-in)</td></tr>
<tr><td><strong>SEO</strong></td><td>Poor (without SSR)</td><td>Poor (without Universal)</td><td>Excellent</td></tr>
<tr><td><strong>Learning Curve</strong></td><td>Low</td><td>High</td><td>Medium</td></tr>
<tr><td><strong>Bundle Size</strong></td><td>Small</td><td>Large</td><td>Medium</td></tr>
<tr><td><strong>Best For</strong></td><td>SPAs, dashboards</td><td>Enterprise apps</td><td>Content sites, blogs, SEO</td></tr>
</tbody>
</table>

<h2>5. What Are Micro-Frontends?</h2>
<p>Micro-frontends apply the <strong>microservices pattern to the frontend</strong>. Instead of one monolithic frontend app, you split it into multiple independently built, deployed, and maintained mini-apps — each owned by a different team.</p>
<p>Think of it like this:</p>
<div class="blog-architecture">
<div class="arch-col">
<h4>Monolithic Frontend</h4>
<p>One repo → One build → One deployment → All teams work in the same codebase</p>
</div>
<div class="arch-col">
<h4>Micro-Frontend</h4>
<p>Multiple repos → Independent builds → Independent deployments → Teams own their slice</p>
</div>
</div>

<h2>6. When You Actually Need Micro-Frontends</h2>
<p>Micro-frontends add complexity. You should only reach for them when the organizational pain is real:</p>

<h3>Use Micro-Frontends When</h3>
<ul>
<li><strong>Multiple teams (5+) work on the same product</strong> — and stepping on each other's code during merges</li>
<li><strong>Independent deployment is critical</strong> — Team A's feature shouldn't wait for Team B's QA</li>
<li><strong>Different tech stacks need to coexist</strong> — e.g., a legacy Angular app + a new React module</li>
<li><strong>The app is massive</strong> — hundreds of routes, millions of users, 30+ developers</li>
<li><strong>Teams are distributed</strong> — onsite + offshore teams need clear ownership boundaries</li>
</ul>

<h3>Real-World Micro-Frontend Examples</h3>
<ul>
<li><strong>IKEA</strong> — Product pages, cart, checkout, and account are separate micro-apps owned by different teams.</li>
<li><strong>Spotify</strong> — Each section (player, playlist, search, browse) is a separate micro-app.</li>
<li><strong>Large banking portals</strong> — Onboarding, account management, loan applications, and card services are independent modules. Teams deploy independently without blocking each other. I've architected this exact pattern — a Vite-based mono-repo serving 13,000+ partner implementations with independent module deployment.</li>
<li><strong>Enterprise health insurance portals</strong> — Member portal, provider search, claims, and benefits — each a separate micro-frontend serving 5M+ users.</li>
</ul>

<h3>Do NOT Use Micro-Frontends When</h3>
<ul>
<li><strong>You have a small team (1–5 developers)</strong> — the overhead will slow you down</li>
<li><strong>It's a simple app</strong> — a portfolio, blog, or landing page doesn't need this</li>
<li><strong>You don't have CI/CD maturity</strong> — micro-frontends need solid pipelines per module</li>
<li><strong>Shared state is heavy</strong> — if every module needs access to the same global state, you'll fight the architecture</li>
</ul>

<h2>7. Micro-Frontend Implementation Approaches</h2>
<table class="blog-table">
<thead><tr><th>Approach</th><th>How It Works</th><th>Best For</th></tr></thead>
<tbody>
<tr><td><strong>Module Federation</strong></td><td>Webpack/Vite shares modules at runtime between apps</td><td>React-to-React micro-apps</td></tr>
<tr><td><strong>Single-SPA</strong></td><td>Framework-agnostic orchestrator that mounts/unmounts micro-apps</td><td>Mix of React + Angular + Vue</td></tr>
<tr><td><strong>iframes</strong></td><td>Each micro-app runs in an isolated iframe</td><td>Maximum isolation (legacy systems)</td></tr>
<tr><td><strong>Route-based splitting</strong></td><td>Reverse proxy routes to different deployed apps</td><td>Simplest — no framework needed</td></tr>
<tr><td><strong>Mono-repo + lazy loading</strong></td><td>One repo, but modules load independently via code splitting</td><td>Moderate scale with shared tooling</td></tr>
</tbody>
</table>
<p>The <strong>route-based approach</strong> (using Nginx or Netlify rewrites) is the simplest and most common starting point. You can always evolve to Module Federation later if needed.</p>

<h2>8. The Decision Framework</h2>
<p>Here's a practical flowchart for choosing your stack:</p>
<div class="blog-callout">
<strong>Is SEO / social sharing important?</strong><br/>
→ Yes → <strong>Next.js</strong><br/>
→ No → Continue ↓<br/><br/>
<strong>Is the team large (10+ devs) with strict conventions needed?</strong><br/>
→ Yes → <strong>Angular</strong><br/>
→ No → Continue ↓<br/><br/>
<strong>Is it an SPA / dashboard / internal tool?</strong><br/>
→ Yes → <strong>React</strong> (with Vite)<br/><br/>
<strong>Do multiple teams (5+) need independent deployments?</strong><br/>
→ Yes → Add <strong>micro-frontend architecture</strong> on top of your framework choice<br/>
→ No → Keep it as a <strong>monolithic SPA with good code splitting</strong>
</div>

<h2>9. A Practical Example: This Portfolio</h2>
<p>This very portfolio uses a <strong>hybrid approach</strong>:</p>
<ul>
<li><strong>Main site</strong> — React + Vite SPA (no SSR needed — it's a personal portfolio)</li>
<li><strong>AI Chatbot</strong> — Built as a page within the SPA, calls a Node.js backend proxy on AWS EC2. <a href="https://anuragkr.in/#ai-chatbot" target="_blank" rel="noopener noreferrer">Try it live →</a></li>
<li><strong>Blog</strong> — Currently embedded in the SPA. For per-post LinkedIn previews, the plan is to split it into a <strong>separate Next.js app</strong> deployed on Netlify, with route-based proxying (<code>/blog/*</code> → Next.js app). No micro-frontend framework needed — just a Netlify rewrite rule.</li>
</ul>
<p>This is the pragmatic approach: <strong>start simple, split when there's a real reason to</strong>.</p>

<h2>What You've Learned</h2>
<ul class="blog-checklist">
<li>React is a library — maximum flexibility, best for SPAs and dashboards</li>
<li>Angular is a framework — maximum structure, best for large enterprise apps</li>
<li>Next.js is a meta-framework — best when SEO, SSR, or social previews matter</li>
<li>Micro-frontends solve organizational problems, not technical ones</li>
<li>Start with a monolith and split only when team scale demands it</li>
<li>Route-based splitting (reverse proxy) is the simplest micro-frontend pattern</li>
<li>The right choice depends on team size, SEO needs, and deployment requirements</li>
</ul>
`,
  },
  {
    slug: 'building-with-rag-and-llms',
    title: 'Building with RAG & LLMs',
    subtitle: 'Practical AI Integration Patterns',
    date: '',
    readTime: '~15 min read',
    tags: ['RAG', 'LLM', 'OpenAI', 'AI'],
    status: 'draft',
    excerpt: 'Practical patterns for integrating retrieval-augmented generation into real engineering workflows.',
    content: '',
  },
  {
    slug: 'storybook-driven-development',
    title: 'Storybook-Driven Development',
    subtitle: 'Design System First',
    date: '',
    readTime: '~10 min read',
    tags: ['Storybook', 'React', 'Design System', 'UI'],
    status: 'draft',
    excerpt: 'How a design-system-first approach transforms team velocity and component consistency.',
    content: '',
  },
]

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}
