<template>
  <div class="page-wrapper">
    <!-- Background Atmosphere -->
    <div class="bg-grid"></div>
    <div class="glow-orb orb-1"></div>
    
    <div class="content-container">
      
      <!-- Hero Header -->
      <header class="about-header">
        <div class="label-pill">Established 2024</div>
        <h1 class="page-title">Architecting the <br/><span class="text-gradient">Synthetic Mind</span></h1>
        <p class="page-subtitle">
          We are a collective of researchers, engineers, and designers building the infrastructure for the next generation of intelligence.
        </p>
      </header>

      <!-- Mission & Vision (Bento Grid Layout) -->
      <section class="dna-section">
        <div class="bento-grid">
          
          <!-- Mission Card (Large) -->
          <div class="bento-card mission-card">
            <div class="card-label">01 // Our Mission</div>
            <h2 class="card-heading">Democratizing Intelligence</h2>
            <p class="card-text">
              We believe AGI should not be locked behind walled gardens. Our goal is to provide a unified, high-performance layer that connects businesses to the world's most powerful models, ensuring transparency, efficiency, and scalability.
            </p>
            <div class="visual-decoration">
              <div class="line-graph"></div>
            </div>
          </div>

          <!-- Vision Card -->
          <div class="bento-card vision-card">
            <div class="card-label">02 // The Vision</div>
            <h2 class="card-heading">Seamless Integration</h2>
            <p class="card-text">
              A future where AI is an invisible utility—like electricity. Reliable, omnipresent, and empowering every click.
            </p>
          </div>

          <!-- Stat Card -->
          <div class="bento-card stat-card">
            <div class="big-number">99.9%</div>
            <div class="stat-label">Uptime SLA</div>
          </div>
          
          <!-- Stat Card 2 -->
          <div class="bento-card stat-card">
            <div class="big-number">50M+</div>
            <div class="stat-label">Requests/Day</div>
          </div>

        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section">
        <div class="section-header">
          <h2 class="section-title">The Neural Network</h2>
          <p class="section-desc">Meet the minds behind the machine.</p>
        </div>

        <div class="team-grid">
          <div 
            v-for="(member, index) in team" 
            :key="index" 
            class="team-card"
            :style="{ '--delay': index * 0.1 + 's' }"
          >
            <div class="member-visual">
              <div class="abstract-avatar" :style="getAvatarStyle(index)">
                <span class="initials">{{ getInitials(member.name) }}</span>
              </div>
              <div class="social-links">
                <a href="#" class="social-icon">IN</a>
                <a href="#" class="social-icon">X</a>
              </div>
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <div class="member-role">{{ member.role }}</div>
              <p class="member-bio">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      team: [
        { 
          name: 'Alex Johnson', 
          role: 'Chief Executive Officer',
          bio: 'Ex-DeepMind researcher focused on scalable AI infrastructure and ethical alignment.'
        },
        { 
          name: 'Sarah Chen', 
          role: 'Chief Technology Officer',
          bio: 'Architect behind our distributed inference engine. Previously led engineering at Stripe.'
        },
        { 
          name: 'Michael Rodriguez', 
          role: 'Head of Research',
          bio: 'PhD in Computational Neuroscience. working on optimizing context windows.'
        },
        { 
          name: 'Emily Watson', 
          role: 'Lead Data Scientist',
          bio: 'Specializes in model fine-tuning and RAG implementation for enterprise use-cases.'
        }
      ]
    }
  },
  methods: {
    getInitials(name) {
      return name.split(' ').map(n => n[0]).join('');
    },
    getAvatarStyle(index) {
      // Generates a unique gradient for each member based on index
      const hues = [220, 280, 340, 160]; // Blue, Purple, Pink, Teal
      const hue = hues[index % hues.length];
      return {
        background: `linear-gradient(135deg, hsl(${hue}, 60%, 20%), hsl(${hue + 40}, 70%, 40%))`,
        borderColor: `hsl(${hue}, 70%, 50%)`
      };
    }
  }
}
</script>

<style scoped>
/* --- Global Variables --- */
.page-wrapper {
  --bg-dark: #050507;
  --surface: rgba(255, 255, 255, 0.02);
  --border: rgba(255, 255, 255, 0.06);
  --text-main: #ffffff;
  --text-muted: #94a3b8;
  --accent: #3b82f6;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  min-height: 100vh;
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* Background FX */
.bg-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(circle at top center, black 40%, transparent 90%);
  opacity: 0.1;
  z-index: 0;
}

.glow-orb {
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%);
  filter: blur(120px);
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
}

/* --- Header --- */
.about-header {
  text-align: center;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label-pill {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 0.4rem 1rem;
  border-radius: 100px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.page-title {
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

.text-gradient {
  background: linear-gradient(135deg, #fff 0%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 600px;
  line-height: 1.6;
}

/* --- DNA Section (Bento Grid) --- */
.dna-section { margin-bottom: 8rem; }

.bento-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.5rem;
}

.bento-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.bento-card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.1); }

.mission-card { grid-column: 1; grid-row: 1 / 3; display: flex; flex-direction: column; }
.vision-card { grid-column: 2 / 4; }
.stat-card { display: flex; flex-direction: column; justify-content: center; align-items: center; }

.card-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-heading { font-size: 2rem; margin-bottom: 1rem; font-weight: 700; }
.card-text { color: var(--text-muted); line-height: 1.7; font-size: 1.05rem; }

/* Visual Decoration in Mission Card */
.visual-decoration {
  margin-top: auto;
  padding-top: 2rem;
  height: 60px;
  display: flex;
  align-items: flex-end;
}
.line-graph {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  position: relative;
}
.line-graph::after {
  content: '';
  position: absolute;
  top: -4px; left: 50%;
  width: 10px; height: 10px;
  background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 15px var(--accent);
}

.big-number {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(180deg, #fff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label { color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem; }

/* --- Team Section --- */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}
.section-title { font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem; }
.section-desc { color: var(--text-muted); }

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.team-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  animation: fadeUp 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

.team-card:hover {
  background: rgba(255, 255, 255, 0.04);
  transform: translateY(-5px);
}

.member-visual {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
}

.abstract-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid; /* color set by JS */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.social-links {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: all 0.3s;
}

.team-card:hover .social-links { opacity: 1; transform: translateX(-50%) translateY(0); }

.social-icon {
  background: #fff;
  color: #000;
  width: 24px; height: 24px;
  border-radius: 50%;
  font-size: 10px;
  font-weight: 800;
  display: flex; align-items: center; justify-content: center;
  text-decoration: none;
}

.member-name { font-size: 1.2rem; margin: 0 0 0.25rem 0; color: var(--text-main); }
.member-role { 
  font-size: 0.85rem; 
  color: var(--accent); 
  text-transform: uppercase; 
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-bottom: 1rem;
}
.member-bio { font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; }

/* --- Animations --- */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- Responsive --- */
@media (max-width: 1024px) {
  .bento-grid { grid-template-columns: 1fr 1fr; }
  .mission-card { grid-column: 1 / 3; grid-row: auto; }
  .vision-card { grid-column: 1 / 3; }
}

@media (max-width: 768px) {
  .page-title { font-size: 3rem; }
  .bento-grid { grid-template-columns: 1fr; }
  .mission-card, .vision-card { grid-column: 1; }
  .team-grid { grid-template-columns: 1fr; }
}
</style>