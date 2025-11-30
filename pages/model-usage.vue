<template>
  <div class="page-wrapper">
    <!-- Background Ambience -->
    <div class="ambient-glow glow-top"></div>
    <div class="ambient-glow glow-bottom"></div>

    <div class="usage-container">
      
      <!-- Header Section -->
      <header class="usage-header">
        <router-link to="/models" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Catalog</span>
        </router-link>

        <div class="header-content">
          <div class="title-block">
            <h1 class="model-name">{{ modelName }}</h1>
            <div class="model-id-badge">
              <span class="hash">#</span>{{ modelId }}
            </div>
          </div>
          <div class="action-block">
            <router-link to="/account" class="primary-btn">
              Get API Key
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>
        </div>
      </header>

      <!-- Stats Grid (HUD) -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon provider">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <div class="stat-info">
            <span class="label">Provider</span>
            <span class="value">{{ modelProvider }}</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon cost">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div class="stat-info">
            <span class="label">Cost / Req</span>
            <span class="value mono">${{ modelCost }}</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon context">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
          <div class="stat-info">
            <span class="label">Context</span>
            <span class="value mono">{{ modelContext }}K</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon tokens">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
          </div>
          <div class="stat-info">
            <span class="label">Max Output</span>
            <span class="value mono">{{ modelMaxTokens }}</span>
          </div>
        </div>
      </div>

      <div class="content-split">
        <!-- Left: Integration Code -->
        <section class="code-section">
          <div class="section-header">
            <h2>Integration</h2>
            <p>Copy and paste to start building.</p>
          </div>
          
          <div class="terminal-window">
            <div class="terminal-header">
              <div class="window-controls">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <div class="tabs">
                <button 
                  v-for="lang in ['python', 'javascript', 'curl']" 
                  :key="lang"
                  @click="activeTab = lang"
                  :class="['tab-btn', { active: activeTab === lang }]"
                >
                  {{ lang }}
                </button>
              </div>
              <button @click="copyCode(activeTab)" class="copy-btn">
                <span v-if="copied">Copied!</span>
                <span v-else>Copy</span>
                <svg v-if="!copied" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </button>
            </div>
            
            <div class="terminal-body">
              <transition name="fade" mode="out-in">
                <pre :key="activeTab"><code class="language-code">{{ getCode(activeTab) }}</code></pre>
              </transition>
            </div>
          </div>
        </section>

        <!-- Right: Parameters -->
        <section class="params-section">
          <div class="section-header">
            <h2>API Configuration</h2>
            <p>Required parameters for the request body.</p>
          </div>

          <div class="table-container">
            <table class="params-table">
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Type</th>
                  <th class="align-right">Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code class="param-key">model</code></td>
                  <td><span class="type-badge string">string</span></td>
                  <td class="align-right"><span class="text-muted">Required</span></td>
                </tr>
                <tr>
                  <td colspan="3" class="row-desc">The ID of the model to use (e.g., <code>{{ modelId }}</code>).</td>
                </tr>
                
                <tr>
                  <td><code class="param-key">messages</code></td>
                  <td><span class="type-badge array">array</span></td>
                  <td class="align-right"><span class="text-muted">Required</span></td>
                </tr>
                <tr>
                  <td colspan="3" class="row-desc">A list of messages comprising the conversation history.</td>
                </tr>

                <tr>
                  <td><code class="param-key">max_tokens</code></td>
                  <td><span class="type-badge int">integer</span></td>
                  <td class="align-right"><code class="default-val">500</code></td>
                </tr>
                
                <tr>
                  <td><code class="param-key">temperature</code></td>
                  <td><span class="type-badge float">float</span></td>
                  <td class="align-right"><code class="default-val">0.7</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ModelUsage',
  data() {
    return {
      modelId: '',
      modelName: 'Loading...',
      modelProvider: '...',
      modelCost: '0.00',
      modelContext: 0,
      modelMaxTokens: 0,
      apiKey: 'YOUR_API_KEY',
      activeTab: 'python',
      copied: false
    };
  },
  computed: {
    pythonCode() {
      return `import requests

API_KEY = "${this.apiKey}"
MODEL = "${this.modelId}"

response = requests.post(
    "https://api.yourdomain.com/v1/chat/completions",
    headers={
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    },
    json={
        "model": MODEL,
        "messages": [
            {"role": "user", "content": "Hello world"}
        ],
        "temperature": 0.7
    }
)

print(response.json())`;
    },
    javascriptCode() {
      return `const API_KEY = "${this.apiKey}";
const MODEL = "${this.modelId}";

const response = await fetch("https://api.yourdomain.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": \`Bearer \${API_KEY}\`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: MODEL,
    messages: [
      { role: "user", content: "Hello world" }
    ],
    temperature: 0.7
  })
});

const data = await response.json();
console.log(data);`;
    },
    curlCode() {
      return `curl https://api.yourdomain.com/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${this.apiKey}" \\
  -d '{
    "model": "${this.modelId}",
    "messages": [
      {"role": "user", "content": "Hello world"}
    ],
    "temperature": 0.7
  }'`;
    }
  },
  mounted() {
    this.loadModelData();
  },
  methods: {
    loadModelData() {
      const modelId = this.$route.query.model;
      if (!modelId) {
        this.$router.push('/models');
        return;
      }
      this.modelId = modelId;

      this.$axios.get(`/models/${encodeURIComponent(modelId)}`)
        .then(response => {
          const model = response.data.model;
          this.modelName = model.name;
          this.modelProvider = model.provider;
          this.modelCost = model.costPerRequest;
          this.modelContext = model.contextWindow;
          this.modelMaxTokens = model.maxTokens || 4096;
        })
        .catch(error => {
          console.error('Failed to load model details:', error);
          this.modelName = modelId.split('/')[1] || modelId;
          this.modelProvider = 'Unknown';
        });

      const user = JSON.parse(localStorage.getItem('user') || '{}');
      if (user.apiKey) this.apiKey = user.apiKey;
    },
    getCode(lang) {
      if (lang === 'python') return this.pythonCode;
      if (lang === 'javascript') return this.javascriptCode;
      return this.curlCode;
    },
    copyCode(lang) {
      navigator.clipboard.writeText(this.getCode(lang));
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    }
  }
};
</script>

<style scoped>
/* --- Global Variables & Layout --- */
.page-wrapper {
  --bg-dark: #09090b;
  --surface-dark: #121215;
  --surface-light: #1c1c21;
  --border: rgba(255, 255, 255, 0.08);
  --text-main: #ffffff;
  --text-muted: #a1a1aa;
  --accent: #6366f1;
  --accent-glow: rgba(99, 102, 241, 0.15);
  
  min-height: 100vh;
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow-x: hidden;
}

.ambient-glow {
  position: absolute;
  width: 800px;
  height: 600px;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
}

.glow-top {
  top: -20%;
  left: 20%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 60%);
}

.glow-bottom {
  bottom: -20%;
  right: 10%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 60%);
}

.usage-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 2rem;
  position: relative;
  z-index: 1;
}

/* --- Header --- */
.usage-header {
  margin-bottom: 3rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  transition: color 0.2s;
}

.back-link:hover { color: var(--text-main); }

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.model-name {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(to right, #fff, #cbd5e1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.model-id-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.model-id-badge .hash { color: var(--accent); margin-right: 4px; opacity: 0.7; }

.primary-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--accent);
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  box-shadow: 0 4px 15px var(--accent-glow);
}

.primary-btn:hover {
  background: #5558e6;
  transform: translateY(-1px);
}

/* --- Stats Grid --- */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.stat-card {
  background: var(--surface-dark);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: border-color 0.2s;
}

.stat-card:hover { border-color: rgba(255, 255, 255, 0.2); }

.stat-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-muted);
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-info .label { font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; margin-bottom: 2px; }
.stat-info .value { font-size: 1.1rem; font-weight: 600; color: var(--text-main); }
.stat-info .value.mono { font-family: 'Fira Code', monospace; }

/* --- Split Layout --- */
.content-split {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2.5rem;
}

.section-header { margin-bottom: 1.5rem; }
.section-header h2 { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.5rem 0; }
.section-header p { color: var(--text-muted); margin: 0; font-size: 0.95rem; }

/* --- Terminal Window --- */
.terminal-window {
  background: #0d0d10;
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.terminal-header {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
}

.window-controls { display: flex; gap: 6px; margin-right: 1.5rem; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot.red { background: #ef4444; }
.dot.yellow { background: #f59e0b; }
.dot.green { background: #10b981; }

.tabs { display: flex; gap: 0.5rem; flex: 1; }
.tab-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  border-radius: 6px;
  text-transform: uppercase;
  transition: all 0.2s;
}

.tab-btn:hover { color: var(--text-main); background: rgba(255,255,255,0.05); }
.tab-btn.active { color: var(--text-main); background: rgba(255,255,255,0.1); }

.copy-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  border-radius: 6px;
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.copy-btn:hover { background: rgba(255,255,255,0.05); color: var(--text-main); }

.terminal-body {
  padding: 1.5rem;
  overflow-x: auto;
  background: #0d0d10;
}

.terminal-body pre { margin: 0; }
.terminal-body code {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: #e2e8f0;
  line-height: 1.6;
}

/* --- Parameters Table --- */
.table-container {
  background: var(--surface-dark);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}

.params-table {
  width: 100%;
  border-collapse: collapse;
}

.params-table th {
  text-align: left;
  padding: 1rem 1.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--text-muted);
  letter-spacing: 0.05em;
  border-bottom: 1px solid var(--border);
  background: rgba(255,255,255,0.02);
}

.params-table td {
  padding: 1rem 1.5rem;
  vertical-align: top;
}

.params-table tr:not(:last-child) td {
  /* No border for rows that describe the parameter */
}

.params-table .row-desc {
  padding-top: 0;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

.param-key { color: var(--accent); font-family: 'Fira Code', monospace; font-size: 0.9rem; }

.type-badge {
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
}
.type-badge.string { background: rgba(16, 185, 129, 0.1); color: #34d399; }
.type-badge.array { background: rgba(245, 158, 11, 0.1); color: #fbbf24; }
.type-badge.int, .type-badge.float { background: rgba(59, 130, 246, 0.1); color: #60a5fa; }

.default-val { color: var(--text-muted); font-family: monospace; font-size: 0.85rem; }
.align-right { text-align: right; }

/* --- Responsive --- */
@media (max-width: 1024px) {
  .content-split { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .header-content { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .usage-container { padding: 2rem 1rem; }
  .model-name { font-size: 1.8rem; }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>