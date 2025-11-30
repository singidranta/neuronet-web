export default function ({ $axios, redirect, app }) {
  const API_BASE_URL = process.env.API_URL || 'http://localhost:3001'

  // Set base URL
  $axios.setBaseURL(API_BASE_URL)

  // Add token to requests
  $axios.onRequest((config) => {
    if (process.client) {
      const token = localStorage.getItem('authToken')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
  })

  // Handle errors
  $axios.onError((error) => {
    if (error.response?.status === 401) {
      if (process.client) {
        localStorage.removeItem('authToken')
        localStorage.removeItem('user')
        redirect('/login')
      }
    }
  })

  // Make $axios available in components
  app.$api = $axios
}
