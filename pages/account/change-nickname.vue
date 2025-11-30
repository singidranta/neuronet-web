<template>
  <div class="page-wrapper">
    <!-- Фоновые элементы -->
    <div class="bg-grid"></div>
    <div class="ambient-glow glow-1"></div>
    <div class="ambient-glow glow-2"></div>

    <div class="content-container">
      <div class="profile-card">
        
        <!-- Заголовок и Аватар -->
        <div class="card-header">
          <div class="avatar-preview">
            <div class="avatar-gradient">
              {{ getInitials(newNickname || user?.nickname || '?') }}
            </div>
            <div class="avatar-ring"></div>
          </div>
          <h1 class="card-title">Update Identity</h1>
          <p class="card-subtitle">Modify your public display name.</p>
        </div>

        <form @submit.prevent="changeNickname" class="edit-form">
          <div class="form-group" :class="{ 'active': focused }">
            <label for="nickname">Display Name</label>
            <div class="input-wrapper">
              <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input 
                type="text" 
                id="nickname" 
                v-model="newNickname" 
                @focus="focused = true"
                @blur="focused = false"
                placeholder="Enter new alias"
                required
                autocomplete="off"
              >
            </div>
          </div>

          <div class="actions">
            <button type="submit" class="btn-save" :disabled="isLoading">
              <span v-if="!isLoading">Save Changes</span>
              <span v-else class="loader"></span>
            </button>
            
            <NuxtLink to="/account" class="btn-back">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Cancel
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangeNicknamePage',
  data() {
    return {
      user: null,
      newNickname: '',
      focused: false,
      isLoading: false
    }
  },
  mounted() {
    // Безопасное получение данных
    try {
      const userData = localStorage.getItem('user') // Используем 'user' для согласованности с предыдущими шагами
      if (!userData) {
        this.$router.push('/login')
        return
      }
      this.user = JSON.parse(userData)
      this.newNickname = this.user.nickname
    } catch (e) {
      this.$router.push('/login')
    }
  },
  methods: {
    getInitials(name) {
      return name.charAt(0).toUpperCase();
    },
    async changeNickname() {
      if (!this.newNickname.trim()) return;

      this.isLoading = true;
      
      // Имитация сетевого запроса для UX
      await new Promise(resolve => setTimeout(resolve, 600));

      // Обновляем текущего пользователя
      this.user.nickname = this.newNickname;
      
      // Обновляем local storage (сохраняем логику оригинала, но адаптируем ключи)
      // В реальном приложении здесь был бы API запрос: await this.$axios.post(...)
      
      // 1. Обновляем сессию
      localStorage.setItem('user', JSON.stringify(this.user));
      
      // 2. Если есть список всех пользователей (как в оригинале)
      /* 
      let users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex(u => u.id === this.user.id);
      if (userIndex !== -1) {
        users[userIndex] = this.user;
        localStorage.setItem('users', JSON.stringify(users));
      }
      */

      this.isLoading = false;
      this.$router.push('/account');
    }
  }
}
</script>

<style scoped>
/* --- Global Variables --- */
.page-wrapper {
  --bg-dark: #09090b;
  --card-bg: rgba(20, 20, 23, 0.6);
  --border: rgba(255, 255, 255, 0.08);
  --text-main: #ffffff;
  --text-muted: #94a3b8;
  --accent: #3b82f6;
  --accent-glow: rgba(59, 130, 246, 0.4);
  --input-bg: rgba(0, 0, 0, 0.2);
  
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-dark);
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  padding: 1rem;
}

/* --- Background FX --- */
.bg-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
  opacity: 0.15;
  z-index: 0;
}

.ambient-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.2;
  z-index: 0;
}

.glow-1 { top: -20%; left: -10%; background: var(--accent); }
.glow-2 { bottom: -20%; right: -10%; background: #8b5cf6; }

/* --- Card Container --- */
.content-container {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
}

.profile-card {
  width: 100%;
  max-width: 400px;
  background: var(--card-bg);
  backdrop-filter: blur(24px);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  animation: fadeUp 0.5s ease-out;
}

/* --- Header & Avatar --- */
.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;
}

.avatar-preview {
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
}

.avatar-gradient {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.avatar-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px solid var(--accent);
  opacity: 0.3;
  animation: pulse 3s infinite;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--text-main);
}

.card-subtitle {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0;
}

/* --- Form --- */
.form-group {
  margin-bottom: 2rem;
}

.form-group label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
  transition: color 0.2s;
}

.active label { color: var(--accent); }

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
  color: var(--text-muted);
  transition: color 0.2s;
  z-index: 2;
}

.active .input-icon { color: var(--text-main); }

.form-group input {
  width: 100%;
  padding: 0.9rem 1rem 0.9rem 3rem;
  background: var(--input-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text-main);
  font-size: 1rem;
  transition: all 0.2s;
}

.form-group input:focus {
  outline: none;
  border-color: var(--accent);
  background: rgba(59, 130, 246, 0.05);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

/* --- Actions --- */
.actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn-save {
  width: 100%;
  padding: 0.9rem;
  background: linear-gradient(135deg, var(--accent), #8b5cf6);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
}

.btn-save:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px var(--accent-glow);
}

.btn-save:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-back {
  width: 100%;
  padding: 0.8rem;
  background: transparent;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.btn-back:hover {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.03);
}

/* --- Animations --- */
.loader {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulse {
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.05); opacity: 0.5; }
  100% { transform: scale(1); opacity: 0.3; }
}
</style>