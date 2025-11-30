<template>
  <div class="app-layout">
    <!-- Global Atmosphere -->
    <div class="noise-overlay"></div>
    <div id="particles-js" class="particles-container"></div>
    <div class="mouse-glow" :style="glowStyle"></div>

    <!-- Floating Navigation -->
    <header class="main-header" :class="{ 'scrolled': isScrolled }">
      <div class="nav-glass-container">
        <!-- Logo -->
        <NuxtLink to="/" class="brand-link">
          <div class="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span class="brand-text">Neural<span class="text-accent">Net</span></span>
        </NuxtLink>

        <!-- Desktop Menu -->
        <nav class="nav-links">
          <NuxtLink to="/" class="nav-item">Hub</NuxtLink>
          <NuxtLink to="/models" class="nav-item">Models</NuxtLink>
          <NuxtLink to="/docs" class="nav-item">Docs</NuxtLink>
        </nav>

        <!-- Auth / Profile -->
        <div class="nav-actions">
          <template v-if="!isLoggedIn">
            <NuxtLink to="/login" class="btn-link">Log In</NuxtLink>
            <NuxtLink to="/register" class="btn-primary">Get Access</NuxtLink>
          </template>
          
          <template v-else>
            <div class="user-menu-wrapper" @click="toggleDropdown" v-click-outside="closeDropdown">
              <div class="user-trigger">
                <span class="balance-pill">${{ user?.balance?.toFixed(2) || '0.00' }}</span>
                <div class="avatar-circle">{{ user.nickname.charAt(0).toUpperCase() }}</div>
              </div>
              
              <!-- Dropdown Menu -->
              <transition name="dropdown-fade">
                <div v-if="isDropdownOpen" class="user-dropdown">
                  <div class="dropdown-header">
                    <div class="user-name">{{ user.nickname }}</div>
                    <div class="user-email">{{ user.email }}</div>
                  </div>
                  <div class="dropdown-divider"></div>
                  <NuxtLink to="/account" class="dropdown-item" @click.native="closeDropdown">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    Dashboard
                  </NuxtLink>
                  <NuxtLink to="/account/billing" class="dropdown-item" @click.native="closeDropdown">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                    Billing
                  </NuxtLink>
                  <div class="dropdown-divider"></div>
                  <button @click="logout" class="dropdown-item text-danger">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    Disconnect
                  </button>
                </div>
              </transition>
            </div>
          </template>
        </div>
      </div>
    </header>
    
    <!-- Page Content with Transitions -->
    <main class="main-content">
      <Nuxt />
    </main>
    
    <!-- Minimal Footer -->
    <footer class="app-footer">
      <div class="footer-content">
        <span class="copyright">© 2024 NeuralNet Systems Inc.</span>
        <div class="status-indicator">
          <span class="status-dot"></span>
          All Systems Operational
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      isLoggedIn: false,
      user: null,
      isScrolled: false,
      isDropdownOpen: false,
      mouseX: 0,
      mouseY: 0
    }
  },
  computed: {
    glowStyle() {
      return {
        background: `radial-gradient(600px circle at ${this.mouseX}px ${this.mouseY}px, rgba(59, 130, 246, 0.1), transparent 40%)`
      };
    }
  },
  watch: {
    '$route'() {
      this.checkLoginState();
      this.isDropdownOpen = false;
    }
  },
  mounted() {
    this.checkLoginState();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousemove', this.handleMouseMove);
    
    // Initialize Particles if client-side
    if (process.client && window.particlesJS) {
      this.initParticles();
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('mousemove', this.handleMouseMove);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 20;
    },
    handleMouseMove(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
    checkLoginState() {
      if (process.client) {
        const userData = localStorage.getItem('user');
        this.user = userData ? JSON.parse(userData) : null;
        this.isLoggedIn = !!localStorage.getItem('authToken');
      }
    },
    logout() {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      this.user = null;
      this.isDropdownOpen = false;
      this.$router.push('/');
    },
    initParticles() {
      window.particlesJS('particles-js', {
        "particles": {
          "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#ffffff" },
          "shape": { "type": "circle" },
          "opacity": { "value": 0.2, "random": true },
          "size": { "value": 2, "random": true },
          "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.1, "width": 1 },
          "move": { "enable": true, "speed": 1 }
        },
        "interactivity": {
          "detect_on": "window",
          "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
          "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.3 } } }
        },
        "retina_detect": true
      });
    }
  },
  directives: {
    'click-outside': {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
          if (!(el == event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
      },
      unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
      },
    },
  }
}
</script>

<style>
/* --- GLOBAL RESET & VARIABLES --- */
:root {
  --bg-dark: #050507;
  --text-primary: #ffffff;
  --text-secondary: #94a3b8;
  --accent-blue: #3b82f6;
  --accent-cyan: #06b6d4;
  --accent-purple: #8b5cf6;
  --card-bg: rgba(255, 255, 255, 0.03);
  --border: rgba(255, 255, 255, 0.08);
  --font-ui: 'Inter', -apple-system, sans-serif;
  --font-mono: 'Fira Code', monospace;
}

html {
  background-color: var(--bg-dark);
  color: var(--text-primary);
  font-family: var(--font-ui);
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

body { margin: 0; overflow-x: hidden; }

*, *::before, *::after { box-sizing: border-box; }

/* --- LAYOUT STYLES --- */
.app-layout {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* --- ATMOSPHERE --- */
.noise-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

.particles-container {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: -1;
  opacity: 0.5;
}

.mouse-glow {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
  z-index: 1;
}

/* --- HEADER --- */
.main-header {
  position: fixed;
  top: 24px;
  left: 0; 
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  padding: 0 24px;
  transition: all 0.3s ease;
}

.nav-glass-container {
  width: 100%;
  max-width: 1200px;
  height: 64px;
  background: rgba(10, 10, 12, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.scrolled .nav-glass-container {
  background: rgba(5, 5, 7, 0.85);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Logo */
.brand-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: white;
}

.logo-icon {
  width: 32px; height: 32px;
  background: var(--accent-blue);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: white;
}

.brand-text {
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: -0.02em;
}
.text-accent { color: var(--accent-blue); }

/* Desktop Menu */
.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-item {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}

.nav-item:hover, .nav-item.nuxt-link-active {
  color: white;
}

.nav-item.nuxt-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 50%; transform: translateX(-50%);
  width: 4px; height: 4px;
  background: var(--accent-blue);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accent-blue);
}

/* Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-link {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}

.btn-primary {
  background: white;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: transform 0.2s;
}
.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 0 15px rgba(255,255,255,0.2); }

/* User Menu */
.user-menu-wrapper { position: relative; }

.user-trigger {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 4px;
  border-radius: 100px;
  transition: background 0.2s;
}
.user-trigger:hover { background: rgba(255,255,255,0.05); }

.balance-pill {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent-blue);
  background: rgba(59, 130, 246, 0.1);
  padding: 4px 8px;
  border-radius: 6px;
}

.avatar-circle {
  width: 32px; height: 32px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 0.9rem; color: white;
}

/* User Dropdown */
.user-dropdown {
  position: absolute;
  top: 120%; right: 0;
  width: 220px;
  background: #121215;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
  transform-origin: top right;
}

.dropdown-header { padding: 0.75rem 1rem; }
.user-name { font-weight: 600; color: white; font-size: 0.95rem; }
.user-email { font-size: 0.8rem; color: var(--text-secondary); margin-top: 2px; }

.dropdown-divider { height: 1px; background: var(--border); margin: 0.5rem 0; }

.dropdown-item {
  display: flex; align-items: center; gap: 0.75rem;
  width: 100%;
  padding: 0.6rem 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  border-radius: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}

.dropdown-item:hover { background: rgba(255,255,255,0.05); color: white; }
.text-danger { color: #ef4444; }
.text-danger:hover { background: rgba(239, 68, 68, 0.1); }

/* --- TRANSITIONS --- */
.dropdown-fade-enter-active, .dropdown-fade-leave-active { transition: all 0.2s ease; }
.dropdown-fade-enter, .dropdown-fade-leave-to { opacity: 0; transform: translateY(-10px) scale(0.95); }

.page-enter-active, .page-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.page-enter, .page-leave-to { opacity: 0; transform: translateY(10px); }

/* --- FOOTER --- */
.app-footer {
  margin-top: auto;
  padding: 2rem;
  border-top: 1px solid var(--border);
  background: rgba(0,0,0,0.2);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.status-indicator { display: flex; align-items: center; gap: 6px; }
.status-dot { width: 6px; height: 6px; background: #10b981; border-radius: 50%; box-shadow: 0 0 8px #10b981; }

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .main-header { top: 0; padding: 0; }
  .nav-glass-container { border-radius: 0; border-top: none; border-left: none; border-right: none; }
  .nav-links { display: none; /* For simplicity in this example */ }
}
</style>