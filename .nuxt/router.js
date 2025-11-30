import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ddcc36a = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _1778218a = () => interopDefault(import('..\\pages\\account\\index.vue' /* webpackChunkName: "pages/account/index" */))
const _46df6680 = () => interopDefault(import('..\\pages\\docs.vue' /* webpackChunkName: "pages/docs" */))
const _05c2f818 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _39a31248 = () => interopDefault(import('..\\pages\\model-usage.vue' /* webpackChunkName: "pages/model-usage" */))
const _dffe3022 = () => interopDefault(import('..\\pages\\models.vue' /* webpackChunkName: "pages/models" */))
const _c5ef1c9a = () => interopDefault(import('..\\pages\\models\\index.vue' /* webpackChunkName: "pages/models/index" */))
const _7d01ed11 = () => interopDefault(import('..\\pages\\pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _ff22bf30 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _0e56d6b3 = () => interopDefault(import('..\\pages\\account\\billing.vue' /* webpackChunkName: "pages/account/billing" */))
const _12cecbba = () => interopDefault(import('..\\pages\\account\\change-nickname.vue' /* webpackChunkName: "pages/account/change-nickname" */))
const _3376e0dd = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0ddcc36a,
    name: "about"
  }, {
    path: "/account",
    component: _1778218a,
    name: "account"
  }, {
    path: "/docs",
    component: _46df6680,
    name: "docs"
  }, {
    path: "/login",
    component: _05c2f818,
    name: "login"
  }, {
    path: "/model-usage",
    component: _39a31248,
    name: "model-usage"
  }, {
    path: "/models",
    component: _dffe3022,
    children: [{
      path: "",
      component: _c5ef1c9a,
      name: "models"
    }]
  }, {
    path: "/pricing",
    component: _7d01ed11,
    name: "pricing"
  }, {
    path: "/register",
    component: _ff22bf30,
    name: "register"
  }, {
    path: "/account/billing",
    component: _0e56d6b3,
    name: "account-billing"
  }, {
    path: "/account/change-nickname",
    component: _12cecbba,
    name: "account-change-nickname"
  }, {
    path: "/",
    component: _3376e0dd,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
