<template>
  <div class="page-wrapper">
    <!-- Фоновые эффекты -->
    <div class="ambient-light orb-1"></div>
    <div class="ambient-light orb-2"></div>
    <div class="grid-overlay"></div>

    <div class="pricing-container">
      
      <!-- Заголовок -->
      <div class="pricing-header">
        <div class="pill-badge">Transparent Costs</div>
        <h1 class="page-title">Pay as you <span class="text-gradient">scale</span></h1>
        <p class="page-subtitle">
          Zero commitments. Zero hidden fees. Access state-of-the-art AI models with a unified API key.
        </p>
      </div>

      <!-- Steps / How it works -->
      <div class="steps-grid">
        <div class="step-card">
          <div class="step-number">01</div>
          <div class="step-content">
            <h3>Create Account</h3>
            <p>Get instant access to the dashboard without credit card requirements.</p>
          </div>
          <div class="step-glow"></div>
        </div>
        <div class="step-card">
          <div class="step-number">02</div>
          <div class="step-content">
            <h3>Generate Key</h3>
            <p>Create a secure API key to authenticate your requests instantly.</p>
          </div>
          <div class="step-glow"></div>
        </div>
        <div class="step-card">
          <div class="step-number">03</div>
          <div class="step-content">
            <h3>Start Building</h3>
            <p>Integration complete. Pay only for the tokens you actually consume.</p>
          </div>
          <div class="step-glow"></div>
        </div>
      </div>

      <!-- Pricing Table -->
      <div class="model-pricing-section">
        <div class="section-header">
          <h2 class="section-title">Model Economics</h2>
          <p class="section-subtitle">Live exchange rates for compute power</p>
        </div>
        
        <div class="pricing-table-wrapper">
          <div class="pricing-table">
            <div class="table-header">
              <div class="col-model">Model / Provider</div>
              <div class="col-price">Cost / Req</div>
              <div class="col-context">Context</div>
              <div class="col-cat">Tier</div>
            </div>
            
            <div v-for="model in modelPricing" :key="model.name" class="table-row">
              <div class="col-model model-info">
                <div class="model-name">{{ model.name }}</div>
                <div class="model-provider">{{ model.provider }}</div>
              </div>
              
              <div class="col-price price-tag">
                <span class="currency">$</span>{{ model.price }}
              </div>
              
              <div class="col-context context-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
                {{ model.context }}
              </div>
              
              <div class="col-cat">
                <span class="category-badge" :class="model.category.toLowerCase()">
                  {{ model.category }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div class="faq-section">
        <h2 class="section-title">Common Queries</h2>
        <div class="faq-grid">
          <div class="faq-card">
            <h3 class="faq-question">How does billing work?</h3>
            <p class="faq-answer">We use a pre-paid credit system. Top up your balance and API usage is deducted in real-time. No monthly bills to surprise you.</p>
          </div>
          <div class="faq-card">
            <h3 class="faq-question">Minimum deposit?</h3>
            <p class="faq-answer">Start with as little as $10. Credits never expire, making it perfect for testing and scaling at your own pace.</p>
          </div>
          <div class="faq-card">
            <h3 class="faq-question">Enterprise limits?</h3>
            <p class="faq-answer">Need high throughput? Contact our sales team for dedicated instances and custom rate limits.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingPage',
  data() {
    return {
      modelPricing: [
        { name: 'GPT-4 Turbo', provider: 'OpenAI', price: '0.050', context: '128K', category: 'Premium' },
        { name: 'Claude 3 Opus', provider: 'Anthropic', price: '0.080', context: '200K', category: 'Premium' },
        { name: 'Gemini 1.5 Pro', provider: 'Google', price: '0.070', context: '1M', category: 'Premium' },
        { name: 'GPT-3.5 Turbo', provider: 'OpenAI', price: '0.010', context: '16K', category: 'Standard' },
        { name: 'Llama 3 70B', provider: 'Meta', price: '0.020', context: '8K', category: 'Standard' },
        { name: 'Mistral Large', provider: 'Mistral', price: '0.040', context: '32K', category: 'Standard' },
        { name: 'Stable Diffusion XL', provider: 'Stability AI', price: '0.100', context: 'N/A', category: 'Image' },
        { name: 'DALL-E 3', provider: 'OpenAI', price: '0.120', context: 'N/A', category: 'Image' },
      ]
    }
  }
}
</script>

<style scoped>
/* --- Global & Layout --- */
.page-wrapper {
  --bg-dark: #050507;
  --card-surface: rgba(255, 255, 255, 0.03);
  --card-border: rgba(255, 255, 255, 0.06);
  --primary: #6366f1;
  --secondary: #a855f7;
  --accent-cyan: #06b6d4;
  --text-main: #ffffff;
  --text-muted: #94a3b8;
  
  min-height: 100vh;
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: 'Inter', sans-serif; /* Убедитесь, что шрифт подключен */
  position: relative;
  overflow-x: hidden;
}

/* Атмосферные эффекты */
.ambient-light {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.25;
  z-index: 0;
  pointer-events: none;
}

.orb-1 {
  top: -100px;
  left: -100px;
  background: radial-gradient(circle, var(--primary), transparent 70%);
}

.orb-2 {
  top: 40%;
  right: -200px;
  background: radial-gradient(circle, var(--secondary), transparent 70%);
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 90%);
  z-index: 0;
  pointer-events: none;
}

.pricing-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
}

/* --- Header --- */
.pricing-header {
  text-align: center;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pill-badge {
  background: rgba(99, 102, 241, 0.1);
  color: #818cf8;
  border: 1px solid rgba(99, 102, 241, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.page-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

.text-gradient {
  background: linear-gradient(135deg, #fff 30%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 600px;
  line-height: 1.6;
}

/* --- Steps Cards --- */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 8rem;
}

.step-card {
  background: var(--card-surface);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
}

.step-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
}

.step-number {
  font-size: 4rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  position: absolute;
  top: 0.5rem;
  right: 1.5rem;
  font-family: monospace;
  pointer-events: none;
}

.step-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.step-content p {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

/* --- Pricing Table --- */
.model-pricing-section {
  margin-bottom: 8rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: var(--text-muted);
}

.pricing-table-wrapper {
  border-radius: 24px;
  padding: 1px; /* Border gradient hack space */
  background: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.02));
}

.pricing-table {
  background: #0a0a0c;
  border-radius: 23px; /* Inner radius */
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 1.25rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid var(--card-border);
  color: var(--text-muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--card-border);
  align-items: center;
  transition: background 0.2s;
}

.table-row:last-child {
  border-bottom: none;
}

.table-row:hover {
  background: rgba(255, 255, 255, 0.03);
}

.model-info {
  display: flex;
  flex-direction: column;
}

.model-name {
  font-weight: 700;
  color: white;
  font-size: 1.1rem;
}

.model-provider {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

/* Monospace aesthetic for numbers */
.price-tag, .context-tag {
  font-family: 'Fira Code', 'Roboto Mono', monospace;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.price-tag {
  color: var(--accent-cyan);
  font-weight: 500;
}

.currency {
  opacity: 0.5;
  font-size: 0.9em;
}

.context-tag {
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Badges */
.category-badge {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
  min-width: 80px;
}

.category-badge.premium {
  background: rgba(168, 85, 247, 0.1);
  color: #d8b4fe;
  border: 1px solid rgba(168, 85, 247, 0.3);
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.1);
}

.category-badge.standard {
  background: rgba(255, 255, 255, 0.05);
  color: #cbd5e1;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.category-badge.image {
  background: rgba(6, 182, 212, 0.1);
  color: #67e8f9;
  border: 1px solid rgba(6, 182, 212, 0.3);
}

/* --- FAQ --- */
.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.faq-card {
  background: transparent;
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.faq-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
}

.faq-question {
  font-size: 1.2rem;
  color: white;
  margin-bottom: 1rem;
}

.faq-answer {
  color: var(--text-muted);
  line-height: 1.6;
}

/* --- Responsive --- */
@media (max-width: 1024px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
  
  .table-header {
    display: none; 
  }
  
  .table-row {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.5rem;
    border: 1px solid var(--card-border);
    border-radius: 12px;
    margin-bottom: 1rem;
    background: rgba(255,255,255,0.02);
  }
  
  .col-cat {
    justify-self: start;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  .pricing-container {
    padding: 3rem 1.5rem;
  }
}
</style>