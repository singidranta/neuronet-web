exports.ids = [7];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0a78af1e", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_1c4142b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_1c4142b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_1c4142b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_1c4142b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_1c4142b6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-wrapper[data-v-1c4142b6]{--bg-dark:#0a0a0c;--card-bg:rgba(20,20,23,.6);--text-primary:#fff;--text-secondary:#94a3b8;--accent-blue:#3b82f6;--accent-purple:#8b5cf6;--input-bg:rgba(0,0,0,.3);--border-color:hsla(0,0%,100%,.08);align-items:center;background-color:#0a0a0c;background-color:var(--bg-dark);display:flex;font-family:\"Inter\",sans-serif;justify-content:center;min-height:100vh;overflow:hidden;position:relative}.grid-pattern[data-v-1c4142b6]{background-image:linear-gradient(var(--border-color) 1px,transparent 1px),linear-gradient(90deg,var(--border-color) 1px,transparent 1px);background-size:40px 40px;bottom:0;left:0;-webkit-mask-image:radial-gradient(circle at center,#000,transparent 80%);mask-image:radial-gradient(circle at center,#000,transparent 80%);right:0;top:0}.ambient-glow[data-v-1c4142b6],.grid-pattern[data-v-1c4142b6]{opacity:.3;position:absolute;z-index:0}.ambient-glow[data-v-1c4142b6]{animation:drift-1c4142b6 10s ease-in-out infinite alternate;border-radius:50%;filter:blur(100px);height:500px;width:500px}.glow-primary[data-v-1c4142b6]{background:radial-gradient(circle,var(--accent-blue),transparent 70%);left:-10%;top:-10%}.glow-secondary[data-v-1c4142b6]{animation-delay:-5s;background:radial-gradient(circle,var(--accent-purple),transparent 70%);bottom:-10%;right:-10%}@keyframes drift-1c4142b6{0%{transform:translate(0) scale(1)}to{transform:translate(20px,40px) scale(1.1)}}.auth-container[data-v-1c4142b6]{display:flex;justify-content:center;padding:1rem;position:relative;width:100%;z-index:1}.auth-card[data-v-1c4142b6]{animation:fadeUp-1c4142b6 .6s cubic-bezier(.16,1,.3,1);backdrop-filter:blur(24px) saturate(180%);-webkit-backdrop-filter:blur(24px) saturate(180%);background:var(--card-bg);border:1px solid var(--border-color);border-radius:24px;box-shadow:0 25px 50px -12px rgba(0,0,0,.5),inset 0 0 0 1px hsla(0,0%,100%,.05);max-width:420px;padding:2.5rem;width:100%}.header-section[data-v-1c4142b6]{margin-bottom:2rem;text-align:center}.icon-brand[data-v-1c4142b6]{align-items:center;background:linear-gradient(135deg,var(--accent-blue),var(--accent-purple));border-radius:12px;box-shadow:0 8px 20px rgba(59,130,246,.3);color:#fff;display:flex;height:48px;justify-content:center;margin:0 auto 1.5rem;width:48px}.auth-title[data-v-1c4142b6]{color:var(--text-primary);font-size:1.75rem;font-weight:800;letter-spacing:-.02em;margin-bottom:.5rem}.auth-subtitle[data-v-1c4142b6]{color:var(--text-secondary);font-size:.95rem;line-height:1.5}.form-group[data-v-1c4142b6]{margin-bottom:1.25rem}.label-row[data-v-1c4142b6]{align-items:center;display:flex;justify-content:space-between;margin-bottom:.5rem}.form-group label[data-v-1c4142b6]{color:var(--text-secondary);font-size:.75rem;font-weight:600;letter-spacing:.05em;text-transform:uppercase;transition:color .3s}.active label[data-v-1c4142b6]{color:var(--accent-blue)}.input-wrapper[data-v-1c4142b6]{align-items:center;display:flex;position:relative}.input-icon[data-v-1c4142b6]{color:var(--text-secondary);height:18px;left:1rem;position:absolute;transition:color .3s;width:18px;z-index:2}.active .input-icon[data-v-1c4142b6]{color:var(--accent-blue)}.form-group input[data-v-1c4142b6]{background:var(--input-bg);border:1px solid var(--border-color);border-radius:10px;color:var(--text-primary);font-size:.95rem;padding:.85rem 1rem .85rem 2.8rem;transition:all .3s cubic-bezier(.4,0,.2,1);width:100%}.form-group input[data-v-1c4142b6]::-moz-placeholder{color:rgba(148,163,184,.4)}.form-group input[data-v-1c4142b6]::placeholder{color:rgba(148,163,184,.4)}.form-group input[data-v-1c4142b6]:focus{background:rgba(59,130,246,.05);border-color:var(--accent-blue);box-shadow:0 0 0 4px rgba(59,130,246,.1);outline:none}.submit-button[data-v-1c4142b6]{align-items:center;background:linear-gradient(135deg,var(--accent-blue),var(--accent-purple));border:none;border-radius:10px;box-shadow:0 4px 15px rgba(59,130,246,.3);color:#fff;cursor:pointer;display:flex;font-size:.95rem;font-weight:600;height:48px;justify-content:center;margin-top:1rem;padding:.85rem;transition:all .3s ease;width:100%}.submit-button[data-v-1c4142b6]:hover:not(:disabled){box-shadow:0 8px 25px rgba(139,92,246,.4);transform:translateY(-2px)}.submit-button[data-v-1c4142b6]:disabled{cursor:not-allowed;opacity:.7}.error-banner[data-v-1c4142b6]{align-items:center;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);border-radius:8px;color:#fca5a5;display:flex;font-size:.85rem;gap:.5rem;margin-bottom:1.5rem;padding:.75rem}.auth-footer[data-v-1c4142b6]{border-top:1px solid var(--border-color);margin-top:2rem;padding-top:1.5rem;text-align:center}.auth-switch[data-v-1c4142b6]{color:var(--text-secondary);font-size:.85rem}.link-highlight[data-v-1c4142b6]{color:var(--text-primary);font-weight:600;position:relative;-webkit-text-decoration:none;text-decoration:none;transition:color .2s}.link-highlight[data-v-1c4142b6]:hover{color:var(--accent-blue)}@keyframes fadeUp-1c4142b6{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.spinner[data-v-1c4142b6]{animation:spin-1c4142b6 .8s linear infinite;border:2px solid hsla(0,0%,100%,.3);border-radius:50%;border-top-color:#fff;height:20px;width:20px}@keyframes spin-1c4142b6{to{transform:rotate(1turn)}}.fade-slide-enter-active[data-v-1c4142b6],.fade-slide-leave-active[data-v-1c4142b6]{transition:all .3s ease}.fade-slide-enter[data-v-1c4142b6],.fade-slide-leave-to[data-v-1c4142b6]{opacity:0;transform:translateY(-10px)}.verification-info[data-v-1c4142b6]{background:rgba(59,130,246,.05);border:1px solid rgba(59,130,246,.2);border-radius:12px;margin-bottom:2rem;padding:1.5rem;text-align:center}.info-icon[data-v-1c4142b6]{color:var(--accent-blue);margin-bottom:1rem}.verification-info p[data-v-1c4142b6]{color:var(--text-secondary);font-size:.9rem;margin:.25rem 0}.email-display[data-v-1c4142b6]{color:var(--text-primary);font-size:1rem!important;font-weight:600}.back-button[data-v-1c4142b6]{background:transparent;border:1px solid var(--border-color);border-radius:10px;color:var(--text-secondary);cursor:pointer;font-size:.9rem;margin-top:.75rem;padding:.75rem;transition:all .3s ease;width:100%}.back-button[data-v-1c4142b6]:hover{background:hsla(0,0%,100%,.05);border-color:var(--accent-blue);color:var(--text-primary)}@media (max-width:480px){.auth-card[data-v-1c4142b6]{padding:2rem 1.5rem}.auth-title[data-v-1c4142b6]{font-size:1.5rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=1c4142b6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-wrapper"
  }, [_vm._ssrNode("<div class=\"grid-pattern\" data-v-1c4142b6></div> <div class=\"ambient-glow glow-primary\" data-v-1c4142b6></div> <div class=\"ambient-glow glow-secondary\" data-v-1c4142b6></div> "), _vm._ssrNode("<div class=\"auth-container\" data-v-1c4142b6>", "</div>", [_vm._ssrNode("<div class=\"auth-card\" data-v-1c4142b6>", "</div>", [_vm._ssrNode("<div class=\"header-section\" data-v-1c4142b6><div class=\"icon-brand\" data-v-1c4142b6><svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-1c4142b6><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\" data-v-1c4142b6></path></svg></div> <h1 class=\"auth-title\" data-v-1c4142b6>Welcome Back</h1> <p class=\"auth-subtitle\" data-v-1c4142b6>Enter your credentials to access the system.</p></div> "), _c('transition', {
    attrs: {
      "name": "fade-slide"
    }
  }, [_vm.error ? _c('div', {
    staticClass: "error-banner"
  }, [_c('svg', {
    staticClass: "error-icon",
    attrs: {
      "width": "16",
      "height": "16",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "stroke": "currentColor",
      "stroke-width": "2"
    }
  }, [_c('polygon', {
    attrs: {
      "points": "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
    }
  }), _vm._v(" "), _c('line', {
    attrs: {
      "x1": "12",
      "y1": "8",
      "x2": "12",
      "y2": "12"
    }
  }), _vm._v(" "), _c('line', {
    attrs: {
      "x1": "12",
      "y1": "16",
      "x2": "12.01",
      "y2": "16"
    }
  })]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.error))])]) : _vm._e()]), _vm._ssrNode(" " + (_vm.step === 1 ? "<form class=\"auth-form\" data-v-1c4142b6><div" + _vm._ssrClass("form-group", {
    'active': _vm.activeField === 'email'
  }) + " data-v-1c4142b6><label for=\"email\" data-v-1c4142b6>Email Address</label> <div class=\"input-wrapper\" data-v-1c4142b6><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"input-icon\" data-v-1c4142b6><path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\" data-v-1c4142b6></path> <polyline points=\"22,6 12,13 2,6\" data-v-1c4142b6></polyline></svg> <input type=\"email\" id=\"email\" placeholder=\"name@company.com\" required=\"required\"" + _vm._ssrAttr("value", _vm.email) + " data-v-1c4142b6></div></div> <div" + _vm._ssrClass("form-group", {
    'active': _vm.activeField === 'password'
  }) + " data-v-1c4142b6><div class=\"label-row\" data-v-1c4142b6><label for=\"password\" data-v-1c4142b6>Password</label></div> <div class=\"input-wrapper\" data-v-1c4142b6><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"input-icon\" data-v-1c4142b6><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\" data-v-1c4142b6></rect> <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" data-v-1c4142b6></path></svg> <input type=\"password\" id=\"password\" placeholder=\"••••••••\" required=\"required\"" + _vm._ssrAttr("value", _vm.password) + " data-v-1c4142b6></div></div> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"submit-button\" data-v-1c4142b6>" + (!_vm.loading ? "<span data-v-1c4142b6>Send Verification Code</span>" : "<div class=\"spinner\" data-v-1c4142b6></div>") + "</button></form>" : "<!---->") + " " + (_vm.step === 2 ? "<form class=\"auth-form\" data-v-1c4142b6><div class=\"verification-info\" data-v-1c4142b6><svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"info-icon\" data-v-1c4142b6><path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\" data-v-1c4142b6></path> <polyline points=\"22,6 12,13 2,6\" data-v-1c4142b6></polyline></svg> <p data-v-1c4142b6>We sent a 6-digit code to</p> <p class=\"email-display\" data-v-1c4142b6>" + _vm._ssrEscape(_vm._s(_vm.email)) + "</p></div> <div" + _vm._ssrClass("form-group", {
    'active': _vm.activeField === 'code'
  }) + " data-v-1c4142b6><label for=\"code\" data-v-1c4142b6>Verification Code</label> <div class=\"input-wrapper\" data-v-1c4142b6><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"input-icon\" data-v-1c4142b6><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\" data-v-1c4142b6></rect> <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" data-v-1c4142b6></path></svg> <input type=\"text\" id=\"code\" placeholder=\"000000\" maxlength=\"6\" required=\"required\"" + _vm._ssrAttr("value", _vm.verificationCode) + " data-v-1c4142b6></div></div> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"submit-button\" data-v-1c4142b6>" + (!_vm.loading ? "<span data-v-1c4142b6>Verify &amp; Sign In</span>" : "<div class=\"spinner\" data-v-1c4142b6></div>") + "</button> <button type=\"button\" class=\"back-button\" data-v-1c4142b6>\n          ← Back to login\n        </button></form>" : "<!---->") + " "), _vm._ssrNode("<div class=\"auth-footer\" data-v-1c4142b6>", "</div>", [_vm._ssrNode("<p class=\"auth-switch\" data-v-1c4142b6>", "</p>", [_vm._ssrNode("\n          New to the platform? \n          "), _c('NuxtLink', {
    staticClass: "link-highlight",
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("Create an account")])], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=1c4142b6&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js
/* harmony default export */ var loginvue_type_script_lang_js = ({
  name: 'LoginPage',
  data() {
    return {
      step: 1,
      // 1 = credentials, 2 = verification code
      email: '',
      password: '',
      verificationCode: '',
      loading: false,
      error: '',
      activeField: ''
    };
  },
  mounted() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.$router.push('/account');
    }
  },
  methods: {
    async login() {
      try {
        this.loading = true;
        this.error = '';

        // Step 1: Request verification code
        const response = await this.$axios.post('/users/login/request', {
          email: this.email,
          password: this.password
        });

        // Move to verification step
        this.step = 2;
        this.error = '';
      } catch (error) {
        var _error$response, _error$response$data;
        this.error = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.error) || 'Invalid credentials provided.';
        console.error('Login error:', error);
      } finally {
        this.loading = false;
      }
    },
    async verifyCode() {
      try {
        this.loading = true;
        this.error = '';

        // Step 2: Verify code and complete login
        const response = await this.$axios.post('/users/login/verify', {
          email: this.email,
          code: this.verificationCode
        });
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        this.$router.push('/account');
      } catch (error) {
        var _error$response2, _error$response2$data;
        this.error = ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.error) || 'Invalid or expired verification code.';
        console.error('Verification error:', error);
      } finally {
        this.loading = false;
      }
    },
    backToForm() {
      this.step = 1;
      this.verificationCode = '';
      this.error = '';
    }
  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_loginvue_type_script_lang_js = (loginvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1c4142b6",
  "b70fd094"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map