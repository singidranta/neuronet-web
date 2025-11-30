<template>
  <div class="page-wrapper">
    <!-- Background Atmosphere -->
    <div class="bg-noise"></div>
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>

    <div class="content-container" v-if="user">
      
      <!-- Header -->
      <div class="header-section">
        <NuxtLink to="/account" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Return to Dashboard
        </NuxtLink>
        <h1 class="page-title">Credits & Billing</h1>
      </div>

      <div class="billing-grid">
        
        <!-- Left Column: Balance Display -->
        <div class="balance-section">
          <div class="balance-card">
            <div class="card-label">
              <span class="icon-wallet">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </span>
              Available Funds
            </div>
            
            <div class="balance-amount">
              <span class="currency">$</span>
              <span class="value">{{ user.balance.toFixed(2) }}</span>
            </div>

            <div class="balance-meta">
              <div class="meta-item">
                <span class="label">Est. Capacity</span>
                <span class="data">~{{ Math.floor(user.balance / 0.05) }} reqs</span>
              </div>
              <div class="meta-item">
                <span class="label">Cost / Req</span>
                <span class="data">$0.05</span>
              </div>
            </div>

            <div class="balance-glow"></div>
          </div>

          <div class="info-box">
            <p>Funds are deducted in real-time per API request. Credits do not expire.</p>
          </div>
        </div>

        <!-- Right Column: Purchase Options -->
        <div class="purchase-section">
          <h2 class="section-title">Top Up Balance</h2>
          
          <div class="packages-grid">
            <a 
              v-for="pkg in packages" 
              :key="pkg.amount"
              :href="`${pkg.link}?wanted=true&user_id=${user.id}`"
              class="package-card" 
              :class="{ 'featured': pkg.featured }"
              data-gumroad-single-product="true"
            >
              <div v-if="pkg.featured" class="badge-featured">Best Value</div>
              
              <div class="pkg-header">
                <span class="pkg-amount">${{ pkg.amount }}</span>
              </div>
              
              <div class="pkg-body">
                <div class="pkg-credits">{{ pkg.requests }} Credits</div>
                <div class="pkg-desc">Ideal for {{ pkg.label }}</div>
              </div>

              <div class="pkg-footer">
                <span class="btn-text">Purchase</span>
                <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillingPage',
  data() {
    return {
      user: null,
      loading: true,
      processingAmount: null,
      packages: [
        { 
          amount: 5, 
          requests: '100', 
          label: 'Testing', 
          featured: false,
          link: this.$config.gumroad.link5
        },
        { 
          amount: 10, 
          requests: '200', 
          label: 'Startups', 
          featured: false,
          link: this.$config.gumroad.link10
        },
        { 
          amount: 25, 
          requests: '500', 
          label: 'Scaling', 
          featured: true,
          link: this.$config.gumroad.link25
        },
      ]
    }
  },
  async mounted() {
    // Load Gumroad Script
    const script = document.createElement('script');
    script.src = 'https://gumroad.com/js/gumroad.js';
    script.async = true;
    document.head.appendChild(script);

    try {
      const userData = localStorage.getItem('user')
      if (!userData) {
        this.$router.push('/login')
        return
      }
      this.user = JSON.parse(userData)
      await this.loadBalance()
    } catch (error) {
      this.$router.push('/login')
    } finally {
      this.loading = false
    }
  },
  methods: {
    async loadBalance() {
      try {
        const token = localStorage.getItem('authToken')
        const response = await this.$axios.get('/billing/balance', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        this.user.balance = response.data.balance
      } catch (error) {
        console.error(error)
      }
    },
    async addCredits(amount) {
      this.processingAmount = amount
      
      // Имитация задержки сети для UX
      await new Promise(resolve => setTimeout(resolve, 800));

      try {
        const token = localStorage.getItem('authToken')
        const response = await this.$axios.post('/billing/add-balance', { amount }, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        this.user.balance = response.data.newBalance
        // Обновляем локального юзера
        localStorage.setItem('user', JSON.stringify(this.user))
      } catch (error) {
        alert('Transaction failed.')
      } finally {
        this.processingAmount = null
      }
    }
  }
}
</script>

<style scoped>
/* --- Global Variables --- */
.page-wrapper {
  --bg-dark: #09090b;
  --surface: rgba(20, 20, 23, 0.6);
  --border: rgba(255, 255, 255, 0.08);
  --text-main: #ffffff;
  --text-muted: #94a3b8;
  --accent: #3b82f6;
  --accent-purple: #8b5cf6;
  --font-mono: 'Fira Code', monospace;
  
  min-height: 100vh;
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
}

/* --- Background FX --- */
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
.orb-1 { top: -10%; left: -10%; background: var(--accent); }
.orb-2 { bottom: 10%; right: -10%; background: var(--accent-purple); }

/* --- Layout --- */
.content-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  padding: 4rem 2rem;
}

/* --- Header --- */
.header-section {
  margin-bottom: 4rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  transition: color 0.2s;
}
.back-link:hover { color: var(--text-main); }

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.02em;
}

/* --- Grid --- */
.billing-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
}

/* --- Left Column: Balance --- */
.balance-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.balance-card {
  background: linear-gradient(145deg, #1e1e24, #121215);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
}

.card-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.balance-amount {
  display: flex;
  align-items: flex-start;
  line-height: 1;
  margin-bottom: 2.5rem;
}

.currency {
  font-size: 2rem;
  color: var(--accent);
  margin-top: 0.5rem;
  margin-right: 0.25rem;
}

.value {
  font-family: var(--font-mono);
  font-size: 4.5rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.05em;
}

.balance-meta {
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.meta-item { display: flex; flex-direction: column; gap: 0.25rem; }
.meta-item .label { font-size: 0.8rem; color: var(--text-muted); }
.meta-item .data { font-family: var(--font-mono); font-size: 1rem; font-weight: 600; color: var(--text-main); }

.balance-glow {
  position: absolute;
  top: 0; right: 0;
  width: 200px; height: 200px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%);
  filter: blur(50px);
  pointer-events: none;
}

.info-box {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  padding: 1rem;
  border-radius: 12px;
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.6;
}

/* --- Right Column: Packages --- */
.purchase-section {
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-main);
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.package-card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
}

.package-card:hover:not(:disabled) {
  transform: translateY(-4px);
  border-color: var(--accent);
  background: rgba(255,255,255,0.05);
}

.package-card.featured {
  border-color: rgba(139, 92, 246, 0.5);
  background: linear-gradient(180deg, rgba(139, 92, 246, 0.05), rgba(20, 20, 23, 0.6));
}

.badge-featured {
  position: absolute;
  top: 12px; right: 12px;
  background: var(--accent-purple);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 4px;
}

.pkg-amount {
  font-family: var(--font-mono);
  font-size: 2rem;
  font-weight: 700;
  color: white;
}

.pkg-credits {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.pkg-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.pkg-body { margin: 1.5rem 0; flex-grow: 1; }

.pkg-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent);
}

.arrow-icon {
  transition: transform 0.2s;
}

.package-card:hover .arrow-icon {
  transform: translateX(4px);
}

/* Processing State */
.package-card.processing {
  opacity: 0.8;
  cursor: default;
}

.loader {
  width: 16px;
  height: 16px;
  border: 2px solid var(--accent);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* --- Responsive --- */
@media (max-width: 850px) {
  .billing-grid { grid-template-columns: 1fr; }
  .balance-card { padding: 1.5rem; }
  .value { font-size: 3.5rem; }
}

@media (max-width: 480px) {
  .content-container { padding: 2rem 1rem; }
  .packages-grid { grid-template-columns: 1fr; }
  .page-title { font-size: 2.5rem; }
}
</style>