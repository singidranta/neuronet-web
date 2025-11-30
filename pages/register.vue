<template>
  <div class="page-wrapper">
    <!-- Декоративные пятна света -->
    <div class="ambient-glow glow-1"></div>
    <div class="ambient-glow glow-2"></div>

    <div class="auth-container">
      <div class="auth-card">
        
        <!-- Заголовок с градиентом -->
        <div class="header-section">
          <h1 class="auth-title">Create Account</h1>
          <p class="auth-subtitle">Join the future ecosystem today.</p>
        </div>

        <!-- Блок ошибки -->
        <transition name="fade-slide">
          <div v-if="error" class="error-banner">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{{ error }}</span>
          </div>
        </transition>

        <!-- Step 1: Registration Form -->
        <form v-if="step === 1" @submit.prevent="register" class="auth-form">
          
          <!-- Input: Nickname -->
          <div class="form-group" :class="{ 'active': activeField === 'nickname' }">
            <label for="nickname">Display Name</label>
            <div class="input-wrapper">
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input 
                type="text" 
                id="nickname" 
                v-model="nickname" 
                placeholder="e.g. Neo Anderson"
                @focus="activeField = 'nickname'"
                @blur="activeField = ''"
                required
              >
            </div>
          </div>

          <!-- Input: Email -->
          <div class="form-group" :class="{ 'active': activeField === 'email' }">
            <label for="email">Email Address</label>
            <div class="input-wrapper">
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <input 
                type="email" 
                id="email" 
                v-model="email" 
                placeholder="name@example.com"
                @focus="activeField = 'email'"
                @blur="activeField = ''"
                required
              >
            </div>
          </div>

          <!-- Input: Password -->
          <div class="form-group" :class="{ 'active': activeField === 'password' }">
            <label for="password">Password</label>
            <div class="input-wrapper">
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input 
                type="password" 
                id="password" 
                v-model="password" 
                placeholder="••••••••••••"
                @focus="activeField = 'password'"
                @blur="activeField = ''"
                required
              >
            </div>
          </div>

          <button type="submit" class="submit-button" :disabled="loading">
            <span v-if="!loading">Send Verification Code</span>
            <span v-else class="loader">
              <svg class="spinner" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
              </svg>
            </span>
          </button>
        </form>

        <!-- Step 2: Verification Code -->
        <form v-if="step === 2" @submit.prevent="verifyCode" class="auth-form">
          <div class="verification-info">
            <svg class="info-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <p>We sent a 6-digit code to</p>
            <p class="email-display">{{ email }}</p>
          </div>

          <div class="form-group" :class="{ 'active': activeField === 'code' }">
            <label for="code">Verification Code</label>
            <div class="input-wrapper">
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input 
                type="text" 
                id="code" 
                v-model="verificationCode" 
                placeholder="000000"
                maxlength="6"
                @focus="activeField = 'code'"
                @blur="activeField = ''"
                required
              >
            </div>
          </div>

          <button type="submit" class="submit-button" :disabled="loading">
            <span v-if="!loading">Verify & Complete</span>
            <span v-else class="loader">
              <svg class="spinner" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
              </svg>
            </span>
          </button>

          <button type="button" @click="backToForm" class="back-button">
            ← Back to form
          </button>
        </form>

        <div class="auth-footer">
          <p class="auth-switch">
            Already a member? 
            <NuxtLink to="/login" class="link-highlight">Log in here</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      step: 1, // 1 = form, 2 = verification code
      nickname: '',
      email: '',
      password: '',
      verificationCode: '',
      loading: false,
      error: '',
      activeField: ''
    }
  },
  mounted() {
    const token = localStorage.getItem('authToken')
    if (token) {
      this.$router.push('/account')
    }
  },
  methods: {
    async register() {
      try {
        this.loading = true
        this.error = ''

        // Step 1: Request verification code
        const response = await this.$axios.post('/users/register/request', {
          nickname: this.nickname,
          email: this.email,
          password: this.password
        })

        // Move to verification step
        this.step = 2
        this.error = ''
      } catch (error) {
        this.error = error.response?.data?.error || 'Connection refused. Registration failed.'
        console.error('Registration error:', error)
      } finally {
        this.loading = false
      }
    },
    async verifyCode() {
      try {
        this.loading = true
        this.error = ''

        // Step 2: Verify code and complete registration
        const response = await this.$axios.post('/users/register/verify', {
          email: this.email,
          code: this.verificationCode,
          password: this.password,
          nickname: this.nickname
        })

        localStorage.setItem('authToken', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))

        this.$router.push('/account')
      } catch (error) {
        this.error = error.response?.data?.error || 'Invalid or expired verification code.'
        console.error('Verification error:', error)
      } finally {
        this.loading = false
      }
    },
    backToForm() {
      this.step = 1
      this.verificationCode = ''
      this.error = ''
    }
  }
}
</script>

<style scoped>
/* --- Variables & Global Feel --- */
.page-wrapper {
  --bg-dark: #09090b;
  --card-bg: rgba(20, 20, 23, 0.7);
  --text-primary: #ffffff;
  --text-secondary: #94a3b8;
  --accent-primary: #3b82f6; /* Blue */
  --accent-secondary: #8b5cf6; /* Purple */
  --accent-glow: rgba(59, 130, 246, 0.5);
  --border-color: rgba(255, 255, 255, 0.08);
  --input-bg: rgba(0, 0, 0, 0.2);
  
  position: relative;
  min-height: 100vh;
  background-color: var(--bg-dark);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* --- Ambient Background --- */
.ambient-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.4;
  z-index: 0;
  animation: pulseGlow 10s infinite alternate ease-in-out;
}

.glow-1 {
  top: -10%;
  left: -10%;
  background: radial-gradient(circle, var(--accent-secondary), transparent 70%);
}

.glow-2 {
  bottom: -10%;
  right: -10%;
  background: radial-gradient(circle, var(--accent-primary), transparent 70%);
  animation-delay: -5s;
}

@keyframes pulseGlow {
  0% { transform: scale(0.8); opacity: 0.3; }
  100% { transform: scale(1.1); opacity: 0.5; }
}

/* --- Container & Card --- */
.auth-container {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.auth-card {
  width: 100%;
  max-width: 460px;
  background: var(--card-bg);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* --- Typography --- */
.header-section {
  text-align: center;
  margin-bottom: 2.5rem;
}

.auth-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #fff 0%, #cbd5e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.auth-subtitle {
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 400;
}

/* --- Form Elements --- */
.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.active label {
  color: var(--accent-primary);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1rem;
  width: 20px;
  height: 20px;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  z-index: 2;
}

.active .input-icon {
  color: var(--accent-primary);
}

.form-group input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.form-group input::placeholder {
  color: rgba(148, 163, 184, 0.4);
}

.form-group input:focus {
  outline: none;
  background: rgba(59, 130, 246, 0.05);
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
  transform: translateY(-1px);
}

/* --- Button --- */
.submit-button {
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px; /* Fixed height for loader stability */
}

.submit-button:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
  filter: brightness(1.1);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* --- Error Banner --- */
.error-banner {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #fca5a5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* --- Footer --- */
.auth-footer {
  margin-top: 2rem;
  text-align: center;
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
}

.auth-switch {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.link-highlight {
  color: var(--text-primary);
  font-weight: 600;
  text-decoration: none;
  margin-left: 0.25rem;
  transition: color 0.2s;
  position: relative;
}

.link-highlight:hover {
  color: var(--accent-primary);
}

.link-highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent-primary);
  transition: width 0.3s ease;
}

.link-highlight:hover::after {
  width: 100%;
}

/* --- Loader Animation --- */
.spinner {
  animation: rotate 2s linear infinite;
  width: 24px;
  height: 24px;
}

.spinner .path {
  stroke: #ffffff;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% { transform: rotate(360deg); }
}

@keyframes dash {
  0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
  50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
  100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
}

/* --- Page Animations --- */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* --- Verification Step Styles --- */
.verification-info {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
}

.info-icon {
  color: var(--accent-primary);
  margin-bottom: 1rem;
}

.verification-info p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0.25rem 0;
}

.email-display {
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1rem !important;
}

.back-button {
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.75rem;
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border-color: var(--accent-primary);
}

/* --- Responsive --- */
@media (max-width: 640px) {
  .auth-card {
    padding: 2rem 1.5rem;
  }
  .auth-title {
    font-size: 1.75rem;
  }
}
</style>