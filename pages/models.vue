<template>
  <div class="page-wrapper">
    <!-- Background Ambience -->
    <div class="bg-noise"></div>
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>

    <div class="models-container">
      <!-- Header -->
      <div class="models-header">
        <div class="badge-pill">Neural Network Catalog</div>
        <h1 class="page-title">Select Your <span class="text-highlight">Intelligence</span></h1>
        <p class="page-subtitle">Access high-performance LLMs through a unified, low-latency API layer.</p>
      </div>

      <!-- Grid -->
      <transition-group name="staggered-fade" tag="div" class="models-grid">
        <div v-for="(model, index) in models" :key="model.id" class="model-card" :style="{ '--i': index }">
          
          <!-- Card Header -->
          <div class="card-top">
            <div class="model-identity">
              <div class="provider-badge">{{ model.provider }}</div>
              <h3 class="model-name">{{ model.name }}</h3>
            </div>
            <div class="status-indicator">
              <span class="status-dot" :class="model.isPrivate ? 'private' : 'public'"></span>
              {{ model.isPrivate ? 'Private' : 'Public' }}
            </div>
          </div>

          <!-- Description -->
          <div class="card-body">
            <p class="model-description">{{ model.description }}</p>
          </div>

          <!-- Tech Specs (Stats) -->
          <div class="specs-grid">
            <div class="spec-item">
              <span class="spec-label">Context</span>
              <span class="spec-value">{{ formatContext(model.contextWindow) }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Cost / 1K</span>
              <span class="spec-value text-accent">${{ model.costPerRequest || 0.05 }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Latency</span>
              <span class="spec-value">Fast</span>
            </div>
          </div>

          <!-- Action -->
          <div class="card-footer">
            <button 
              v-if="isLoggedIn" 
              class="action-btn"
              @click="useModel(model.id)"
            >
              <span>Deploy Model</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button 
              v-else 
              class="action-btn locked" 
              @click="$router.push('/login')"
            >
              <span>Authentication Required</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </button>
          </div>
          
          <!-- Hover Glow Effect -->
          <div class="card-glow"></div>
        </div>
      </transition-group>

      <!-- Empty State -->
      <div v-if="models.length === 0 && !loading" class="empty-state">
        <div class="loader-ring"></div>
        <p>Synchronizing models repository...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModelsPage',
  data() {
    return {
      models: [],
      isLoggedIn: false,
      loading: true
    }
  },
  mounted() {
    this.checkLoginState()
    this.loadModels()
  },
  methods: {
    checkLoginState() {
      if (process.client) {
        this.isLoggedIn = !!localStorage.getItem('authToken')
      }
    },
    formatContext(value) {
      if (!value) return 'N/A';
      return value >= 1000 ? (value / 1000).toFixed(0) + 'M' : value + 'K';
    },
    async loadModels() {
      try {
        const response = await this.$axios.get('/models')
        this.models = response.data.models || []
      } catch (error) {
        console.error('Error loading models:', error)
        // Show error to user instead of falling back to demo data
        this.models = []
        // You could add a toast notification here
      } finally {
        this.loading = false
      }
    },
    useModel(modelId) {
      this.$router.push({
        path: '/model-usage',
        query: { model: modelId }
      })
    }
  }
}
</script>

<style scoped>
/* --- Variables & Global --- */
.page-wrapper {
  --bg-deep: #020408;
  --card-bg: rgba(255, 255, 255, 0.02);
  --card-border: rgba(255, 255, 255, 0.06);
  --text-primary: #ffffff;
  --text-secondary: #94a3b8;
  --accent-blue: #3b82f6;
  --accent-purple: #8b5cf6;
  --accent-glow: rgba(59, 130, 246, 0.4);
  
  min-height: 100vh;
  background-color: var(--bg-deep);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* --- Atmospheric Effects --- */
.bg-noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

.glow-orb {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
}

.orb-1 { top: -10%; left: -10%; background: var(--accent-blue); }
.orb-2 { bottom: 10%; right: -10%; background: var(--accent-purple); }

.models-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
}

/* --- Header --- */
.models-header {
  text-align: center;
  margin-bottom: 5rem;
}

.badge-pill {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 100px;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.page-title {
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.text-highlight {
  background: linear-gradient(135deg, #fff 0%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
}

.page-subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* --- Grid Layout --- */
.models-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2rem;
}

/* --- Model Card --- */
.model-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 24px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(20px);
}

.model-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
}

.model-card:hover .card-glow {
  opacity: 1;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.15), transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 0;
}

/* --- Card Content --- */
.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.provider-badge {
  font-size: 0.75rem;
  color: var(--accent-blue);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.model-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.status-dot.public { background-color: #10b981; box-shadow: 0 0 8px rgba(16, 185, 129, 0.5); }
.status-dot.private { background-color: #f59e0b; }

.card-body {
  flex-grow: 1;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.model-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* --- Specs Grid --- */
.specs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
  background: rgba(255, 255, 255, 0.08); /* Divider color */
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.spec-item {
  background: rgba(10, 10, 14, 0.6); /* Inner background */
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.spec-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 0.25rem;
  letter-spacing: 0.05em;
}

.spec-value {
  font-family: 'Fira Code', monospace; /* Tech font */
  font-size: 0.9rem;
  font-weight: 600;
  color: #e2e8f0;
}

.text-accent { color: var(--accent-blue); }

/* --- Action Button --- */
.card-footer {
  position: relative;
  z-index: 1;
}

.action-btn {
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(59, 130, 246, 0.3);
  background: linear-gradient(180deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%);
  color: #93c5fd;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.action-btn:hover:not(.locked) {
  background: var(--accent-blue);
  color: white;
  border-color: var(--accent-blue);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
  transform: translateY(-1px);
}

.action-btn.locked {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.05);
  color: #475569;
  cursor: default;
}

/* --- Animations --- */
.staggered-fade-enter-active,
.staggered-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.staggered-fade-enter-from,
.staggered-fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* Delay for grid items */
.model-card {
  animation: fadeUp 0.6s ease-out backwards;
  animation-delay: calc(var(--i) * 0.1s);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- Loading State --- */
.loader-ring {
  width: 40px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--accent-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

.empty-state {
  text-align: center;
  padding: 4rem;
  color: var(--text-secondary);
}

@keyframes spin { to { transform: rotate(360deg); } }

/* --- Responsive --- */
@media (max-width: 768px) {
  .page-title { font-size: 2.5rem; }
  .models-grid { grid-template-columns: 1fr; }
  .models-container { padding: 3rem 1rem; }
}
</style>