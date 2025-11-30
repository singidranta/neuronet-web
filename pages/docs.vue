<template>
  <div class="page-wrapper">
    <!-- Background Ambience -->
    <div class="bg-noise"></div>
    <div class="glow-orb orb-top"></div>
    
    <div class="docs-layout">
      <!-- Sidebar Navigation -->
      <aside class="sidebar">
        <div class="sidebar-sticky">
          <h3 class="sidebar-header">
            <span class="icon">⚡</span> Documentation
          </h3>
          <nav class="nav-list">
            <a 
              v-for="item in navItems" 
              :key="item.id"
              :href="`#${item.id}`"
              class="nav-item"
              :class="{ active: activeSection === item.id }"
              @click.prevent="scrollTo(item.id)"
            >
              <span class="nav-indicator"></span>
              {{ item.label }}
            </a>
          </nav>

          <div class="sidebar-footer">
            <p>API Version</p>
            <span class="version-badge">v1.0</span>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="content-area">
        
        <!-- Section: Getting Started -->
        <section id="getting-started" class="doc-section">
          <div class="section-header">
            <h1 class="title">Getting Started</h1>
            <p class="subtitle">Integrate state-of-the-art AI models in under 5 minutes.</p>
          </div>
          
          <div class="timeline-widget">
            <div class="timeline-step">
              <div class="step-marker">01</div>
              <div class="step-content">
                <h4>Create Account</h4>
                <p>Register at <NuxtLink to="/register" class="link">neuralnet/account</NuxtLink></p>
              </div>
            </div>
            <div class="timeline-step">
              <div class="step-marker">02</div>
              <div class="step-content">
                <h4>Generate Keys</h4>
                <p>Navigate to dashboard and create a new secret key.</p>
              </div>
            </div>
            <div class="timeline-step">
              <div class="step-marker">03</div>
              <div class="step-content">
                <h4>Start Making Requests</h4>
                <p>Use your API key with any HTTP client. Compatible with OpenAI API format.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Section: Authentication -->
        <section id="authentication" class="doc-section">
          <h2 class="section-title">Authentication</h2>
          <p class="text-body">Requests are authenticated via the <code>Authorization</code> header using the Bearer scheme.</p>
          
          <div class="code-terminal">
            <div class="terminal-header">
              <div class="dots">
                <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
              </div>
              <span class="lang-badge">BASH</span>
              <button @click="copyCode(authCode)" class="copy-action">Copy</button>
            </div>
            <pre><code>{{ authCode }}</code></pre>
          </div>

          <div class="alert-box warning">
            <div class="alert-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <div class="alert-content">
              <strong>Security Warning</strong>
              <p>Your API keys carry full privileges. Do not commit them to public repositories or expose them in client-side code.</p>
            </div>
          </div>
        </section>

        <!-- Section: Making Requests -->
        <section id="making-requests" class="doc-section">
          <h2 class="section-title">Making Requests</h2>
          <p class="text-body">Unified interface for chat completions. Compatible with OpenAI SDKs.</p>

          <div class="code-tabs">
            <div class="tab-header">
              <button 
                v-for="lang in ['javascript', 'python']" 
                :key="lang"
                class="tab-btn"
                :class="{ active: requestLang === lang }"
                @click="requestLang = lang"
              >
                {{ lang }}
              </button>
            </div>
            <div class="code-terminal no-radius-top">
              <pre v-if="requestLang === 'javascript'"><code>{{ jsCode }}</code></pre>
              <pre v-if="requestLang === 'python'"><code>{{ pythonCode }}</code></pre>
            </div>
          </div>
        </section>

        <!-- Section: Models -->
        <section id="models" class="doc-section">
          <h2 class="section-title">Model Catalog</h2>
          <div class="models-grid">
            <div v-for="model in models" :key="model.id" class="model-card">
              <div class="card-header">
                <h4>{{ model.name }}</h4>
                <span class="badge">{{ model.type }}</span>
              </div>
              <code class="model-slug">{{ model.id }}</code>
              <div class="card-stats">
                <div class="stat">
                  <span class="label">Context</span>
                  <span class="value">{{ model.context }}</span>
                </div>
                <div class="stat">
                  <span class="label">Price</span>
                  <span class="value">{{ model.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section: Errors -->
        <section id="errors" class="doc-section">
          <h2 class="section-title">Error Codes</h2>
          <div class="table-wrapper">
            <table class="tech-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Error Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="status-code c-400">400</span></td>
                  <td>Bad Request</td>
                  <td class="text-muted">Malformed JSON or invalid parameters.</td>
                </tr>
                <tr>
                  <td><span class="status-code c-401">401</span></td>
                  <td>Unauthorized</td>
                  <td class="text-muted">API key is missing or invalid.</td>
                </tr>
                <tr>
                  <td><span class="status-code c-429">429</span></td>
                  <td>Rate Limited</td>
                  <td class="text-muted">You have exceeded your request quota.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Section: Rate Limits -->
        <section id="rate-limits" class="doc-section">
          <h2 class="section-title">System Limits</h2>
          <div class="limits-dashboard">
            <div class="limit-gauge">
              <div class="gauge-value">100</div>
              <div class="gauge-label">RPM (Standard)</div>
              <div class="gauge-bar"><div class="fill" style="width: 30%"></div></div>
            </div>
            <div class="limit-gauge">
              <div class="gauge-value">1K</div>
              <div class="gauge-label">RPH (Burst)</div>
              <div class="gauge-bar"><div class="fill" style="width: 60%"></div></div>
            </div>
            <div class="limit-gauge">
              <div class="gauge-value">50K</div>
              <div class="gauge-label">Daily Requests</div>
              <div class="gauge-bar"><div class="fill" style="width: 90%"></div></div>
            </div>
          </div>
        </section>

      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocsPage',
  data() {
    return {
      activeSection: 'getting-started',
      requestLang: 'javascript',
      navItems: [
        { id: 'getting-started', label: 'Getting Started' },
        { id: 'authentication', label: 'Authentication' },
        { id: 'making-requests', label: 'Making Requests' },
        { id: 'models', label: 'Models' },
        { id: 'errors', label: 'Errors' },
        { id: 'rate-limits', label: 'Rate Limits' },
      ],
      models: [
        { name: 'GPT-4 Turbo', id: 'gpt-4-turbo', type: 'SOTA', context: '128K', price: '$0.05' },
        { name: 'Claude 3 Opus', id: 'claude-3-opus', type: 'Reasoning', context: '200K', price: '$0.08' },
        { name: 'Llama 3 70B', id: 'llama-3-70b', type: 'Fast', context: '8K', price: '$0.02' },
      ],
      authCode: `curl https://api.neuralnet.ai/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "model": "gpt-4-turbo" }'`,
      jsCode: `const response = await fetch('https://api.neuralnet.ai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4-turbo',
    messages: [{ role: 'user', content: 'Hello world' }]
  })
});`,
      pythonCode: `import requests

resp = requests.post(
    'https://api.neuralnet.ai/v1/chat/completions',
    headers={'Authorization': 'Bearer YOUR_KEY'},
    json={
        'model': 'gpt-4-turbo',
        'messages': [{'role': 'user', 'content': 'Hello world'}]
    }
)
print(resp.json())`
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, { threshold: 0.5 });

    this.navItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
        this.activeSection = id;
      }
    },
    copyCode(text) {
      navigator.clipboard.writeText(text);
      // Toast notification logic would go here
    }
  }
}
</script>

<style scoped>
/* --- Base Variables --- */
.page-wrapper {
  --bg-dark: #09090b;
  --surface: #121215;
  --surface-highlight: #1c1c20;
  --border: rgba(255, 255, 255, 0.08);
  --accent: #3b82f6;
  --accent-glow: rgba(59, 130, 246, 0.15);
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --font-mono: 'Fira Code', monospace;
  
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* Background Effects */
.bg-noise {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

.glow-orb {
  position: absolute;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 70%);
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}
.orb-top { top: -400px; left: -200px; }

/* --- Layout --- */
.docs-layout {
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 4rem;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
}

/* --- Sidebar --- */
.sidebar { position: relative; }

.sidebar-sticky {
  position: sticky;
  top: 4rem;
  background: rgba(18, 18, 21, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sidebar-header {
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.6rem 0.8rem;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: all 0.2s;
  position: relative;
}

.nav-item:hover {
  color: var(--text-main);
  background: var(--surface-highlight);
}

.nav-item.active {
  color: var(--accent);
  background: rgba(59, 130, 246, 0.08);
  font-weight: 600;
}

.nav-indicator {
  width: 2px;
  height: 0;
  background: var(--accent);
  position: absolute;
  left: 0;
  transition: height 0.2s;
}
.nav-item.active .nav-indicator { height: 60%; }

.sidebar-footer {
  border-top: 1px solid var(--border);
  padding-top: 1rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.version-badge {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

/* --- Content Area --- */
.content-area { max-width: 850px; }

.doc-section { margin-bottom: 6rem; scroll-margin-top: 120px; }

.section-header { margin-bottom: 2.5rem; border-bottom: 1px solid var(--border); padding-bottom: 1.5rem; }
.title { font-size: 2.5rem; font-weight: 800; margin: 0 0 0.5rem 0; letter-spacing: -0.02em; }
.subtitle { font-size: 1.1rem; color: var(--text-muted); margin: 0; }

.section-title {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: var(--text-main);
  display: flex;
  align-items: center;
}

.text-body { font-size: 1rem; line-height: 1.7; color: var(--text-muted); margin-bottom: 1.5rem; }

/* --- Timeline Widget --- */
.timeline-widget {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  margin-left: 1rem;
  border-left: 1px solid var(--border);
  padding-left: 2rem;
}

.timeline-step { position: relative; }

.step-marker {
  position: absolute;
  left: -2.9rem;
  top: 0;
  width: 1.8rem;
  height: 1.8rem;
  background: var(--surface);
  border: 1px solid var(--accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  box-shadow: 0 0 10px var(--accent-glow);
}

.step-content h4 { margin: 0 0 0.5rem 0; font-size: 1.1rem; }
.step-content p { color: var(--text-muted); margin: 0; font-size: 0.95rem; }
.link { color: var(--accent); text-decoration: none; border-bottom: 1px solid transparent; }
.link:hover { border-color: var(--accent); }

.mini-code {
  margin-top: 0.8rem;
  background: #000;
  border: 1px solid var(--border);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}
.mini-copy { background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 0; display: flex; }
.mini-copy:hover { color: var(--text-main); }

/* --- Terminal --- */
.code-terminal {
  background: #0d0d10;
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  margin: 1.5rem 0;
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
}

.terminal-header {
  background: rgba(255, 255, 255, 0.03);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border);
}

.dots { display: flex; gap: 6px; margin-right: auto; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.red { background: #ef4444; } .yellow { background: #f59e0b; } .green { background: #10b981; }

.lang-badge { font-size: 0.7rem; color: var(--text-muted); font-weight: 600; margin-right: 1rem; }

.copy-action {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
}
.copy-action:hover { color: var(--text-main); border-color: var(--text-muted); }

.code-terminal pre { margin: 0; padding: 1.5rem; overflow-x: auto; }
.code-terminal code { font-family: var(--font-mono); font-size: 0.9rem; color: #e2e8f0; line-height: 1.6; }

/* --- Tabs --- */
.code-tabs { margin: 1.5rem 0; }
.tab-header { display: flex; gap: 2px; }
.tab-btn {
  background: var(--surface);
  border: 1px solid var(--border);
  border-bottom: none;
  color: var(--text-muted);
  padding: 0.5rem 1.5rem;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  font-size: 0.85rem;
  text-transform: uppercase;
}
.tab-btn.active { background: #0d0d10; color: var(--accent); border-top: 2px solid var(--accent); font-weight: 600; }
.no-radius-top { border-top-left-radius: 0; margin-top: 0; }

/* --- Alert Box --- */
.alert-box {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  margin: 1.5rem 0;
}
.alert-box.warning { background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.2); color: #fcd34d; }
.alert-content strong { display: block; margin-bottom: 0.25rem; color: #fbbf24; }
.alert-content p { margin: 0; opacity: 0.9; }

/* --- Models Grid --- */
.models-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }

.model-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s;
}
.model-card:hover { transform: translateY(-3px); border-color: var(--accent); }

.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
.card-header h4 { margin: 0; font-size: 1.1rem; }
.badge { font-size: 0.7rem; background: rgba(255,255,255,0.1); padding: 0.2rem 0.5rem; border-radius: 4px; }

.model-slug { display: block; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1.5rem; background: #000; padding: 0.4rem; border-radius: 4px; text-align: center; }

.card-stats { display: flex; justify-content: space-between; border-top: 1px solid var(--border); padding-top: 1rem; }
.stat { display: flex; flex-direction: column; font-size: 0.85rem; }
.stat .label { color: var(--text-muted); font-size: 0.7rem; text-transform: uppercase; }
.stat .value { font-weight: 600; color: var(--text-main); }

/* --- Tech Table --- */
.table-wrapper { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
.tech-table { width: 100%; border-collapse: collapse; }
.tech-table th { text-align: left; padding: 1rem; background: rgba(255,255,255,0.02); border-bottom: 1px solid var(--border); font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); }
.tech-table td { padding: 1rem; border-bottom: 1px solid var(--border); font-size: 0.95rem; }
.tech-table tr:last-child td { border-bottom: none; }

.status-code { font-family: var(--font-mono); font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; }
.c-400 { color: #f59e0b; background: rgba(245, 158, 11, 0.1); }
.c-401 { color: #ef4444; background: rgba(239, 68, 68, 0.1); }
.c-429 { color: #ec4899; background: rgba(236, 72, 153, 0.1); }

/* --- Limits Dashboard --- */
.limits-dashboard { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }

.limit-gauge {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}
.gauge-value { font-size: 2.5rem; font-weight: 800; color: var(--accent); margin-bottom: 0.5rem; line-height: 1; }
.gauge-label { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem; text-transform: uppercase; }
.gauge-bar { height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; }
.fill { height: 100%; background: var(--accent); border-radius: 3px; }

@media (max-width: 1024px) {
  .docs-layout { grid-template-columns: 1fr; }
  .sidebar-sticky { position: static; }
}
</style>