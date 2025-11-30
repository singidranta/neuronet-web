<template>
  <div class="page-wrapper">
    <!-- Background Atmosphere -->
    <div class="bg-noise"></div>
    <div class="ambient-light light-1"></div>
    <div class="ambient-light light-2"></div>

    <div class="dashboard-container" v-if="user">
      
      <!-- Header -->
      <header class="dashboard-header">
        <div class="user-welcome">
          <div class="avatar-placeholder">
            {{ user.nickname.charAt(0).toUpperCase() }}
          </div>
          <div class="welcome-text">
            <h1 class="page-title">Good {{ timeOfDay }}, {{ user.nickname }}</h1>
            <p class="page-subtitle">System status: <span class="status-online">● Operational</span></p>
          </div>
        </div>
        <div class="header-actions">
          <button @click="logout" class="btn-icon" title="Logout">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </button>
        </div>
      </header>

      <!-- Bento Grid Layout -->
      <div class="bento-grid">
        
        <!-- Card 1: Balance (Accent) -->
        <div class="bento-card card-balance">
          <div class="card-inner">
            <div class="card-label">
              <span>Current Balance</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="11" x2="22" y2="11"/></svg>
            </div>
            <div class="balance-amount mono">${{ user.balance.toFixed(2) }}</div>
            <div class="card-footer">
              <NuxtLink to="/account/billing" class="btn-xs btn-light">
                <span class="plus">+</span> Top up
              </NuxtLink>
            </div>
          </div>
          <div class="card-glow"></div>
        </div>

        <!-- Card 2: Usage -->
        <div class="bento-card card-usage">
          <div class="card-label">
            <span>API Requests</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </div>
          <div class="usage-stats">
            <span class="usage-value mono">{{ user.apiKeyUsage }}</span>
            <span class="usage-unit">reqs</span>
          </div>
          <div class="usage-bar">
            <div class="bar-fill" :style="{ width: Math.min(user.apiKeyUsage / 100, 100) + '%' }"></div>
          </div>
        </div>

        <!-- Card 3: Profile Info -->
        <div class="bento-card card-profile">
          <div class="card-label">
            <span>Account Identity</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div class="profile-details">
            <div class="detail-row">
              <span class="label">Email</span>
              <span class="value">{{ user.email }}</span>
            </div>
            <div class="detail-row">
              <span class="label">Tier</span>
              <span class="badge">PRO</span>
            </div>
          </div>
          <NuxtLink to="/account/change-nickname" class="link-sm">Edit Profile →</NuxtLink>
        </div>

        <!-- Card 4: API Key Management (Wide) -->
        <div class="bento-card card-apikey">
          <div class="card-header">
            <h3>API Configuration</h3>
            <div class="status-badge" :class="user.apiKey ? 'active' : 'inactive'">
              {{ user.apiKey ? 'Active' : 'No Key' }}
            </div>
          </div>
          
          <div class="key-interface" v-if="user.apiKey">
            <div class="key-display-group">
              <div class="key-field">
                <code>{{ isKeyVisible ? user.apiKey : 'sk_live_••••••••••••••••••••••••' }}</code>
              </div>
              <button @click="isKeyVisible = !isKeyVisible" class="btn-icon-sm" title="Toggle Visibility">
                <svg v-if="!isKeyVisible" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
              </button>
              <button @click="copyApiKey" class="btn-icon-sm" title="Copy Key">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </button>
            </div>
            
            <div class="api-controls">
              <button @click="simulateApiCall" class="btn-secondary" :disabled="isSimulating">
                <span v-if="!isSimulating">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  Test Request (-$0.05)
                </span>
                <span v-else class="loading-dots">Processing</span>
              </button>
              <button @click="generateApiKey" class="btn-outline">Rotate Key</button>
            </div>
          </div>

          <div v-else class="empty-key-state">
            <p>Generate an API key to start integrating.</p>
            <button @click="generateApiKey" class="btn-primary">Generate Secret Key</button>
          </div>
        </div>

        <!-- Card 5: Danger Zone -->
        <div class="bento-card card-danger">
          <div class="card-label text-danger">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            <span>Danger Zone</span>
          </div>
          <p class="danger-desc">Irreversible action.</p>
          <button @click="deleteAccount" class="btn-danger-outline">Delete Account</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountPage',
  data() {
    return {
      user: null,
      isSimulating: false,
      isKeyVisible: false,
      loading: true,
    }
  },
  computed: {
    timeOfDay() {
      const hour = new Date().getHours();
      if (hour < 12) return 'Morning';
      if (hour < 18) return 'Afternoon';
      return 'Evening';
    }
  },
  async mounted() {
    try {
      const userData = localStorage.getItem('user')
      if (!userData) {
        this.$router.push('/login')
        return
      }
      this.user = JSON.parse(userData)
      await this.loadBalance()
    } catch (error) {
      console.error('Mount error:', error)
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
        console.error('Balance load error:', error)
      }
    },
    async generateApiKey() {
      if (this.user.apiKey && !confirm("Rotating the key will invalidate the old one immediately. Continue?")) return;
      
      try {
        const token = localStorage.getItem('authToken')
        if (!token) {
          alert('Authentication required. Please log in again.')
          this.$router.push('/login')
          return
        }

        const response = await this.$axios.post('/users/generate-key', {}, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        
        if (response.data.success && response.data.apiKey) {
          this.user.apiKey = response.data.apiKey
          localStorage.setItem('user', JSON.stringify(this.user))
          // Success feedback - you could add a toast notification here
        } else {
          throw new Error('Invalid response from server')
        }
      } catch (error) {
        console.error('API key generation error:', error)
        const errorMessage = error.response?.data?.error || error.message || 'Failed to generate API key'
        alert('Failed to generate key: ' + errorMessage)
        
        // If unauthorized, redirect to login
        if (error.response?.status === 401) {
          localStorage.removeItem('authToken')
          localStorage.removeItem('user')
          this.$router.push('/login')
        }
      }
    },
    copyApiKey() {
      navigator.clipboard.writeText(this.user.apiKey)
      // Could add a toast notification here
    },
    async simulateApiCall() {
      if (this.isSimulating) return
      if (this.user.balance < 0.05) {
        alert('Insufficient funds.')
        return
      }
      this.isSimulating = true
      try {
        const response = await this.$axios.post('/v1/chat/completions', {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: 'Hello!' }],
          max_tokens: 10
        }, {
          headers: { 'Authorization': `Bearer ${this.user.apiKey}` }
        })
        if (response.data._balance !== undefined) {
          this.user.balance = response.data._balance
        }
      } catch (error) {
        console.error(error)
      } finally {
        setTimeout(() => this.isSimulating = false, 800) // Min duration for UI feel
      }
    },
    deleteAccount() {
      const confirmation = prompt('Type "DELETE" to confirm account deletion. This cannot be undone.')
      if (confirmation === 'DELETE') {
        localStorage.removeItem('authToken')
        localStorage.removeItem('user')
        this.$router.push('/')
      }
    },
    logout() {
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
/* --- Variables & Global --- */
.page-wrapper {
  --bg-dark: #09090b;
  --surface: #121215;
  --surface-hover: #1c1c20;
  --border: rgba(255, 255, 255, 0.08);
  --accent: #3b82f6;
  --accent-purple: #8b5cf6;
  --accent-danger: #ef4444;
  --text-main: #ffffff;
  --text-muted: #a1a1aa;
  --font-ui: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  min-height: 100vh;
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: var(--font-ui);
  position: relative;
  overflow-x: hidden;
  padding-bottom: 4rem;
}

/* Atmosphere */
.bg-noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
}

.ambient-light {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.15;
  pointer-events: none;
}
.light-1 { top: -20%; left: -10%; background: var(--accent); }
.light-2 { bottom: -20%; right: -10%; background: var(--accent-purple); }

.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
}

/* --- Header --- */
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.user-welcome {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.avatar-placeholder {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--surface-hover), var(--border));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
  border: 1px solid var(--border);
}

.page-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;
}

.page-subtitle {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin: 0.25rem 0 0 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-online { color: #10b981; font-size: 0.85rem; font-weight: 500; }

.btn-icon {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text-muted);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-icon:hover { background: var(--surface-hover); color: var(--text-main); }

/* --- Bento Grid --- */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  grid-auto-rows: minmax(180px, auto);
}

.bento-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, border-color 0.2s;
}

.bento-card:hover { border-color: rgba(255,255,255,0.15); }

/* Card Labels */
.card-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* Card 1: Balance */
.card-balance {
  background: linear-gradient(135deg, #0f172a, #1e1b4b);
  border-color: rgba(59, 130, 246, 0.3);
  grid-row: span 2; /* Taller card */
}

.card-inner { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; }
.card-balance .card-label { color: #93c5fd; }

.balance-amount {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-top: auto;
  margin-bottom: 2rem;
  letter-spacing: -0.05em;
}

.card-glow {
  position: absolute;
  top: 0; right: 0;
  width: 200px; height: 200px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%);
  filter: blur(40px);
  pointer-events: none;
}

.btn-light {
  background: white;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.2s;
}
.btn-light:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(255,255,255,0.2); }
.btn-light .plus { font-size: 1.2rem; line-height: 0; }

/* Card 2: Usage */
.card-usage {
  justify-content: space-between;
}
.usage-stats { display: flex; align-items: baseline; gap: 0.5rem; }
.usage-value { font-size: 2rem; font-weight: 700; color: var(--text-main); }
.usage-unit { color: var(--text-muted); }
.usage-bar { height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden; margin-top: 1rem; }
.bar-fill { height: 100%; background: var(--accent); border-radius: 2px; }

/* Card 3: Profile */
.profile-details { flex: 1; display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.5rem; }
.detail-row { display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; }
.detail-row .label { color: var(--text-muted); }
.badge { background: rgba(139, 92, 246, 0.15); color: #a78bfa; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; border: 1px solid rgba(139, 92, 246, 0.3); }
.link-sm { color: var(--text-muted); font-size: 0.8rem; text-decoration: none; margin-top: 1rem; transition: color 0.2s; }
.link-sm:hover { color: var(--text-main); }

/* Card 4: API Key (Span 2 columns) */
.card-apikey {
  grid-column: span 2;
}
.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
.card-header h3 { margin: 0; font-size: 1.1rem; font-weight: 600; }
.status-badge { font-size: 0.75rem; font-weight: 600; padding: 2px 8px; border-radius: 4px; }
.status-badge.active { color: #10b981; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); }

.key-interface { display: flex; flex-direction: column; gap: 1.5rem; }
.key-display-group {
  display: flex;
  gap: 0.5rem;
  background: #000;
  padding: 0.5rem;
  border-radius: 12px;
  border: 1px solid var(--border);
}
.key-field {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  overflow: hidden;
}
.key-field code { font-family: var(--font-mono); color: #e2e8f0; }

.btn-icon-sm {
  width: 36px; height: 36px;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text-muted);
  border-radius: 8px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
.btn-icon-sm:hover { background: var(--surface-hover); color: var(--text-main); }

.api-controls { display: flex; gap: 1rem; }
.btn-secondary {
  background: var(--surface-hover);
  color: var(--text-main);
  border: 1px solid var(--border);
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex; align-items: center; gap: 0.5rem;
  transition: all 0.2s;
}
.btn-secondary:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
.btn-outline {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-outline:hover { color: var(--text-main); border-color: var(--text-muted); }

/* Card 5: Danger */
.card-danger {
  border-color: rgba(239, 68, 68, 0.2);
  background: rgba(239, 68, 68, 0.02);
}
.text-danger { color: var(--accent-danger); display: flex; align-items: center; gap: 0.5rem; }
.danger-desc { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; }
.btn-danger-outline {
  width: 100%;
  background: transparent;
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: var(--accent-danger);
  padding: 0.6rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: auto;
}
.btn-danger-outline:hover { background: rgba(239, 68, 68, 0.1); }

/* Utilities */
.mono { font-family: var(--font-mono); }

/* Responsive */
@media (max-width: 1024px) {
  .bento-grid { grid-template-columns: 1fr 1fr; }
  .card-apikey { grid-column: span 2; }
  .card-balance { grid-row: auto; }
}

@media (max-width: 640px) {
  .bento-grid { grid-template-columns: 1fr; }
  .card-apikey { grid-column: 1; }
  .dashboard-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .header-actions { position: absolute; top: 0; right: 0; }
}
</style>