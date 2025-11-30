<template>
  <div class="page-wrapper">
    <!-- Декоративный фон -->
    <div class="grid-pattern"></div>
    <div class="ambient-glow glow-primary"></div>
    <div class="ambient-glow glow-secondary"></div>

    <div class="auth-container">
      <div class="auth-card">
        
        <!-- Заголовок -->
        <div class="header-section">
          <div class="icon-brand">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h1 class="auth-title">Welcome Back</h1>
          <p class="auth-subtitle">Enter your credentials to access the system.</p>
        </div>

        <!-- Сообщение об ошибке -->
        <transition name="fade-slide">
          <div v-if="error" class="error-banner">
            <svg class="error-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{{ error }}</span>
          </div>
        </transition>

        <!-- Step 1: Login Form -->
        <form v-if="step === 1" @submit.prevent="login" class="auth-form">
          
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
                placeholder="name@company.com"
                @focus="activeField = 'email'"
                @blur="activeField = ''"
                required
              >
            </div>
          </div>

          <!-- Input: Password -->
          <div class="form-group" :class="{ 'active': activeField === 'password' }">
            <div class="label-row">
              <label for="password">Password</label>
            </div>
            <div class="input-wrapper">
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input 
                type="password" 
                id="password" 
                v-model="password" 
                placeholder="••••••••"
                @focus="activeField = 'password'"
                @blur="activeField = ''"
                required
              >
            </div>
          </div>

          <button type="submit" class="submit-button" :disabled="loading">
            <span v-if="!loading">Send Verification Code</span>
            <div v-else class="spinner"></div>
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
            <span v-if="!loading">Verify & Sign In</span>
            <div v-else class="spinner"></div>
          </button>

          <button type="button" @click="backToForm" class="back-button">
            ← Back to login
          </button>
        </form>

        <div class="auth-footer">
          <p class="auth-switch">
            New to the platform? 
            <NuxtLink to="/register" class="link-highlight">Create an account</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      step: 1, // 1 = credentials, 2 = verification code
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
    async login() {
      try {
        this.loading = true
        this.error = ''

        // Step 1: Request verification code
        const response = await this.$axios.post('/users/login/request', {
          email: this.email,
          password: this.password
        })

        // Move to verification step
        this.step = 2
        this.error = ''
      } catch (error) {
        this.error = error.response?.data?.error || 'Invalid credentials provided.'
        console.error('Login error:', error)
      } finally {
        this.loading = false
      }
    },
    async verifyCode() {
      try {
        this.loading = true
        this.error = ''

        // Step 2: Verify code and complete login
        const response = await this.$axios.post('/users/login/verify', {
          email: this.email,
          code: this.verificationCode
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
/* --- Global Context --- */
.page-wrapper {
  --bg-dark: #0a0a0c;
  --card-bg: rgba(20, 20, 23, 0.6);
  --text-primary: #ffffff;
  --text-secondary: #94a3b8;
  --accent-blue: #3b82f6;
  --accent-purple: #8b5cf6;
  --input-bg: rgba(0, 0, 0, 0.3);
  --border-color: rgba(255, 255, 255, 0.08);
  
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-dark);
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}

/* --- Background Effects --- */
.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(var(--border-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.3;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
  z-index: 0;
}

.ambient-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
  z-index: 0;
  animation: drift 10s infinite alternate ease-in-out;
}

.glow-primary {
  top: -10%;
  left: -10%;
  background: radial-gradient(circle, var(--accent-blue), transparent 70%);
}

.glow-secondary {
  bottom: -10%;
  right: -10%;
  background: radial-gradient(circle, var(--accent-purple), transparent 70%);
  animation-delay: -5s;
}

@keyframes drift {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(20px, 40px) scale(1.1); }
}

/* --- Card & Container --- */
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
  max-width: 420px;
  background: var(--card-bg);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* --- Header Typography --- */
.header-section {
  text-align: center;
  margin-bottom: 2rem;
}

.icon-brand {
  width: 48px;
  height: 48px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.auth-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.auth-subtitle {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
}

/* --- Form Styles --- */
.form-group {
  margin-bottom: 1.25rem;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.form-group label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  transition: color 0.3s;
}

.active label {
  color: var(--accent-blue);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1rem;
  width: 18px;
  height: 18px;
  color: var(--text-secondary);
  transition: color 0.3s;
  z-index: 2;
}

.active .input-icon {
  color: var(--accent-blue);
}

.form-group input {
  width: 100%;
  padding: 0.85rem 1rem 0.85rem 2.8rem;
  background: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.form-group input::placeholder {
  color: rgba(148, 163, 184, 0.4);
}

.form-group input:focus {
  outline: none;
  border-color: var(--accent-blue);
  background: rgba(59, 130, 246, 0.05);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

/* --- Buttons --- */
.submit-button {
  width: 100%;
  margin-top: 1rem;
  padding: 0.85rem;
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* --- Error Banner --- */
.error-banner {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.25);
  color: #fca5a5;
  padding: 0.75rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
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
  font-size: 0.85rem;
}

.link-highlight {
  color: var(--text-primary);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
}

.link-highlight:hover {
  color: var(--accent-blue);
}

/* --- Animations --- */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
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
  color: var(--accent-blue);
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
  border-radius: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border-color: var(--accent-blue);
}

/* --- Responsive --- */
@media (max-width: 480px) {
  .auth-card {
    padding: 2rem 1.5rem;
  }
  .auth-title {
    font-size: 1.5rem;
  }
}
</style>