const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// Fallback to production URL if env var is missing
const API_URL = process.env.API_URL || 'https://neuralnet-api.oleksejmudalo.workers.dev';

console.log('Build API_URL:', API_URL);

module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NeuralNet',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'AI Service Provider' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'alternate icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/api.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Axios configuration
  axios: {
    baseURL: API_URL
  },

  // Runtime config (for Cloudflare Pages environment variables)
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: API_URL
    },
    gumroad: {
      link5: process.env.GUMROAD_LINK_5 || 'https://neuralnetpayment.gumroad.com/l/credits-5',
      link10: process.env.GUMROAD_LINK_10 || 'https://neuralnetpayment.gumroad.com/l/credits-10',
      link25: process.env.GUMROAD_LINK_25 || 'https://neuralnetpayment.gumroad.com/l/credits-25'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}