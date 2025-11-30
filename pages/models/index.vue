<template>
  <div class="page-wrapper">
    <!-- Background Atmosphere -->
    <div class="bg-noise"></div>
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>

    <div class="content-container">
      
      <!-- Header -->
      <div class="header-section">
        <div class="badge-pill">
          <span class="sparkle">✨</span> Capabilities
        </div>
        <h1 class="page-title">Intelligence <span class="text-gradient">Unleashed</span></h1>
        <p class="page-subtitle">
          A comprehensive suite of neural networks designed to perceive, reason, and generate value.
        </p>
      </div>

      <!-- Grid -->
      <div class="models-grid">
        <div 
          v-for="(category, index) in categories" 
          :key="index" 
          class="model-card"
          :style="{ '--delay': index * 0.1 + 's' }"
        >
          <div class="card-content">
            <div class="icon-wrapper">
              <!-- Dynamic SVG Icon rendering -->
              <component :is="getIcon(category.title)" />
            </div>
            
            <h2 class="card-title">{{ category.title }}</h2>
            <p class="card-desc">{{ category.description }}</p>
            
            <div class="tags-wrapper">
              <span v-for="tag in category.features" :key="tag" class="tech-tag">
                {{ tag }}
              </span>
            </div>
          </div>
          
          <!-- Decorative hover glow -->
          <div class="card-border-glow"></div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section">
        <div class="cta-content">
          <h2 class="cta-title">Start building the future</h2>
          <p class="cta-text">Deploy these models in seconds via our unified API.</p>
          <div class="cta-actions">
            <NuxtLink to="/register" class="btn btn-primary">
              Initialize Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </NuxtLink>
            <NuxtLink to="/pricing" class="btn btn-glass">View Pricing</NuxtLink>
          </div>
        </div>
        <div class="cta-bg-glow"></div>
      </div>

    </div>
  </div>
</template>

<script>
// Simple SVG Components for icons
const IconNLP = { template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="8" y1="9" x2="16" y2="9"></line><line x1="8" y1="13" x2="14" y2="13"></line></svg>` }
const IconVision = { template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>` }
const IconPredict = { template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>` }
const IconRecs = { template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>` }

export default {
  name: 'ModelsPage',
  data() {
    return {
      categories: [
        {
          title: 'Natural Language Processing',
          description: 'Semantic understanding engines capable of summarization, translation, and nuanced sentiment analysis.',
          features: ['Classifiers', 'Sentiment', 'Entity Extraction']
        },
        {
          title: 'Computer Vision',
          description: 'High-fidelity image processing for object detection, facial recognition, and scene segmentation.',
          features: ['Object Detection', 'Segmentation', 'OCR']
        },
        {
          title: 'Predictive Analytics',
          description: 'Turn historical data into future insights with our advanced forecasting algorithms.',
          features: ['Time Series', 'Risk Scoring', 'Demand Forecast']
        },
        {
          title: 'Recommendation Engine',
          description: 'Personalize user experiences in real-time using hybrid filtering approaches.',
          features: ['Collaborative', 'Content-Based', 'Hybrid']
        }
      ]
    }
  },
  methods: {
    getIcon(title) {
      if (title.includes('Language')) return IconNLP
      if (title.includes('Vision')) return IconVision
      if (title.includes('Predictive')) return IconPredict
      return IconRecs
    }
  }
}
</script>

<style scoped>
/* --- Variables & Global --- */
.page-wrapper {
  --bg-dark: #030305;
  --card-surface: rgba(255, 255, 255, 0.02);
  --card-border: rgba(255, 255, 255, 0.05);
  --text-main: #ffffff;
  --text-muted: #94a3b8;
  --accent-blue: #3b82f6;
  --accent-cyan: #06b6d4;
  --accent-purple: #8b5cf6;
  --font-mono: 'Fira Code', monospace;
  
  min-height: 100vh;
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* --- Atmosphere --- */
.bg-noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

.glow-orb {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.2;
  z-index: 0;
}
.orb-1 { top: -10%; left: -10%; background: var(--accent-blue); }
.orb-2 { bottom: 10%; right: -10%; background: var(--accent-purple); }

.content-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
}

/* --- Header --- */
.header-section {
  text-align: center;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--card-border);
  border-radius: 100px;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.page-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.text-gradient {
  background: linear-gradient(135deg, #fff 20%, #67e8f9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 600px;
  line-height: 1.6;
}

/* --- Grid Layout --- */
.models-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-bottom: 8rem;
}

/* --- Cards --- */
.model-card {
  background: var(--card-surface);
  border: 1px solid var(--card-border);
  border-radius: 24px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  animation: fadeUp 0.8s ease-out backwards;
  animation-delay: var(--delay);
}

.model-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.04);
}

.card-content {
  position: relative;
  z-index: 2;
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  background: rgba(6, 182, 212, 0.1);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-cyan);
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.icon-wrapper svg {
  width: 28px;
  height: 28px;
}

.model-card:hover .icon-wrapper {
  background: var(--accent-cyan);
  color: white;
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.4);
}

.card-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.card-desc {
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.05rem;
  min-height: 3.4em;
}

.tags-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #93c5fd;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Card Glow Effect */
.card-border-glow {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  padding: 2px; /* Border width */
  background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent 50%);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0.5;
  transition: opacity 0.3s;
  pointer-events: none;
}

.model-card:hover .card-border-glow {
  opacity: 1;
  background: linear-gradient(135deg, var(--accent-cyan), transparent 60%);
}

/* --- CTA Section --- */
.cta-section {
  position: relative;
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
  border: 1px solid var(--card-border);
  border-radius: 32px;
  padding: 4rem;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
}

.cta-text {
  color: var(--text-muted);
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.btn-primary {
  background: white;
  color: black;
  border: 1px solid white;
}

.btn-primary:hover {
  background: #e2e8f0;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
}

.btn-glass {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

.cta-bg-glow {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%);
  pointer-events: none;
  z-index: 1;
}

/* --- Animations --- */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- Responsive --- */
@media (max-width: 768px) {
  .page-title { font-size: 2.5rem; }
  .models-grid { grid-template-columns: 1fr; }
  .model-card { padding: 2rem; }
  .cta-section { padding: 3rem 1.5rem; }
  .cta-actions { flex-direction: column; width: 100%; }
  .btn { width: 100%; justify-content: center; }
}
</style>