<template>
  <div class="page-wrapper">
    <!-- Фоновые слои -->
    <div class="bg-grid"></div>
    <div class="bg-glow glow-purple"></div>
    <div class="bg-glow glow-blue"></div>

    <div class="home-container">
      
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-badge">
          <span class="pulse-dot"></span> Unified Intelligence Layer
        </div>
        <h1 class="hero-title">
          Explore World-Class <br />
          <span class="text-gradient">AI Models</span>
        </h1>
        <p class="hero-subtitle">
          Access production-ready open-source and proprietary models through a single, high-performance API gateway.
        </p>

        <!-- Command Bar / Search -->
        <div class="search-wrapper" :class="{ 'focused': isSearchFocused }">
          <div class="search-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <input 
            type="text" 
            placeholder="Search models (e.g. 'Llama 3', 'Vision', 'GPT-4')..." 
            v-model="searchQuery"
            @focus="isSearchFocused = true"
            @blur="isSearchFocused = false"
          />
          <div class="search-shortcut">
            <span class="key">/</span>
          </div>
        </div>
      </section>

      <!-- Model Explorer (Grid System) -->
      <section class="explorer-section">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <div class="loader-ring"></div>
          <p>Loading models...</p>
        </div>

        <!-- Models List -->
        <template v-else-if="models.length > 0">
          <div class="list-header">
            <div class="col-name">Model Architecture</div>
            <div class="col-tags">Capabilities</div>
            <div class="col-price">Pricing <span class="unit">/ request</span></div>
            <div class="col-action"></div>
          </div>

          <div class="model-list">
            <NuxtLink
              v-for="model in filteredModels" 
              :key="model.id" 
              :to="`/models?model=${model.id}`"
              class="model-row"
              tabindex="0"
            >
              <!-- Name & Provider -->
              <div class="col-name">
                <div class="provider-icon" :class="getProviderClass(model.provider)">
                  {{ model.name.charAt(0) }}
                </div>
                <div class="name-group">
                  <div class="model-name">{{ model.name }}</div>
                  <div class="model-author">{{ model.provider }}</div>
                </div>
              </div>

              <!-- Tags -->
              <div class="col-tags">
                <div class="tag-list">
                  <span class="tech-tag">{{ formatContext(model.contextWindow) }} Context</span>
                  <span v-if="model.isFree" class="tech-tag free">Free</span>
                </div>
              </div>

              <!-- Price -->
              <div class="col-price">
                <span class="price-val">${{ model.costPerRequest || '0.05' }}</span>
              </div>

              <!-- Action Arrow -->
              <div class="col-action">
                <div class="action-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </NuxtLink>
          </div>
        </template>

        <!-- Empty State -->
        <div v-else class="empty-state">
          <p>No models available. Please check backend connection.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      searchQuery: '',
      isSearchFocused: false,
      models: [],
      loading: true
    }
  },
  async mounted() {
    // Load real models from API
    try {
      const response = await this.$axios.get('/models')
      this.models = response.data.models || []
    } catch (error) {
      console.error('Error loading models:', error)
      this.models = []
    } finally {
      this.loading = false
    }
  },
  computed: {
    filteredModels() {
      if (!this.searchQuery) return this.models;
      const query = this.searchQuery.toLowerCase();
      return this.models.filter(m => 
        m.name.toLowerCase().includes(query) || 
        m.provider.toLowerCase().includes(query) ||
        m.description.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    formatContext(value) {
      if (!value) return 'N/A';
      return value >= 1000 ? (value / 1000).toFixed(0) + 'M' : value + 'K';
    },
    getProviderClass(provider) {
      const map = {
        'OpenAI': 'bg-green',
        'Anthropic': 'bg-orange',
        'Meta': 'bg-blue',
        'Google': 'bg-red',
        'Stability AI': 'bg-purple',
        'Mistral AI': 'bg-yellow',
        'Mistral': 'bg-yellow',
        'Cohere': 'bg-purple',
        'Perplexity': 'bg-blue'
      };
      return map[provider] || 'bg-gray';
    }
  }
}
</script>

<style scoped>
/* --- Global Variables --- */
.page-wrapper {
  --bg-dark: #050507;
  --surface: rgba(255, 255, 255, 0.03);
  --surface-hover: rgba(255, 255, 255, 0.06);
  --border: rgba(255, 255, 255, 0.08);
  --text-main: #ffffff;
  --text-muted: #94a3b8;
  --accent: #3b82f6;
  --font-ui: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  min-height: 100vh;
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: var(--font-ui);
  position: relative;
  overflow-x: hidden;
}

/* --- Backgrounds --- */
.bg-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(circle at top center, black 40%, transparent 100%);
  opacity: 0.15;
  z-index: 0;
  pointer-events: none;
}

.bg-glow {
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.15;
  z-index: 0;
}

.glow-purple { background: #8b5cf6; top: -200px; left: 20%; }
.glow-blue { background: #3b82f6; bottom: -200px; right: 20%; }

.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* --- Hero Section --- */
.hero-section {
  padding: 8rem 0 6rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 10px #10b981;
  animation: pulse 2s infinite;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
  background: linear-gradient(to bottom, #ffffff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient {
  background: linear-gradient(135deg, #60a5fa, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 4rem;
}

/* --- Search Bar --- */
.search-wrapper {
  width: 100%;
  max-width: 560px;
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(10, 10, 12, 0.6);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 0.75rem 1rem;
  backdrop-filter: blur(20px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
}

.search-wrapper.focused {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15), 0 20px 40px -10px rgba(0,0,0,0.5);
  transform: translateY(-2px);
}

.search-icon {
  color: var(--text-muted);
  margin-right: 0.75rem;
  display: flex;
}

.search-wrapper input {
  flex: 1;
  background: transparent;
  border: none;
  font-size: 1.1rem;
  color: var(--text-main);
  font-family: var(--font-ui);
}

.search-wrapper input::placeholder { color: rgba(148, 163, 184, 0.5); }
.search-wrapper input:focus { outline: none; }

.search-shortcut .key {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

/* --- Explorer Section --- */
.explorer-section {
  width: 100%;
  margin-bottom: 4rem;
}

/* Grid Layout Definition */
.list-header, .model-row {
  display: grid;
  grid-template-columns: 2.5fr 2fr 1fr 60px; /* Adjusted columns */
  gap: 1.5rem;
  align-items: center;
  padding: 0 1.5rem;
}

.list-header {
  margin-bottom: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--text-muted);
  font-weight: 600;
  letter-spacing: 0.05em;
}

.unit { text-transform: none; font-weight: 400; opacity: 0.6; }

.model-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.model-row {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: grid;
  grid-template-columns: 2.5fr 2fr 1fr 60px;
  gap: 1.5rem;
  align-items: center;
}

.model-row:hover {
  background: var(--surface-hover);
  border-color: rgba(255, 255, 255, 0.15);
  transform: scale(1.005);
  box-shadow: 0 10px 20px -5px rgba(0,0,0,0.3);
}

/* Loading State */
.loading-state {
  text-align: center;
  padding: 4rem;
  color: var(--text-muted);
}

.loader-ring {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.empty-state {
  text-align: center;
  padding: 4rem;
  color: var(--text-muted);
}

.tech-tag.free {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
  color: #10b981;
}

/* Columns */
.col-name {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.provider-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  color: white;
  flex-shrink: 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
/* Dynamic background colors for icons */
.bg-green { background: linear-gradient(135deg, #10b981, #059669); }
.bg-orange { background: linear-gradient(135deg, #f97316, #ea580c); }
.bg-blue { background: linear-gradient(135deg, #3b82f6, #2563eb); }
.bg-red { background: linear-gradient(135deg, #ef4444, #dc2626); }
.bg-purple { background: linear-gradient(135deg, #a855f7, #7c3aed); }
.bg-yellow { background: linear-gradient(135deg, #eab308, #ca8a04); }
.bg-gray { background: linear-gradient(135deg, #64748b, #475569); }

.name-group {
  display: flex;
  flex-direction: column;
}

.model-name { font-weight: 600; font-size: 1.05rem; color: var(--text-main); }
.model-author { font-size: 0.85rem; color: var(--text-muted); }

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 100px;
  color: var(--text-muted);
  white-space: nowrap;
}

.col-price {
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--text-main);
  font-weight: 500;
  text-align: right;
}

.col-action {
  display: flex;
  justify-content: flex-end;
}

.action-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.model-row:hover .action-btn {
  opacity: 1;
  transform: translateX(0);
  color: var(--accent);
  background: rgba(59, 130, 246, 0.1);
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

/* --- Responsive --- */
@media (max-width: 1024px) {
  .hero-title { font-size: 3.5rem; }
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.5rem; }
  
  .list-header { display: none; }
  
  .model-row {
    grid-template-columns: 1fr auto;
    gap: 1rem;
    padding: 1rem;
  }
  
  .col-tags, .col-action { display: none; }
  
  .col-name { flex: 1; }
  
  .col-price {
    font-size: 0.9rem;
    background: rgba(255,255,255,0.05);
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
  }
}
</style>