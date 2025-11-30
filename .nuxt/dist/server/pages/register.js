exports.ids = [12];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("067352f0", content, true, context)
};

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_d564bfda_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_d564bfda_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_d564bfda_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_d564bfda_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_d564bfda_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-wrapper[data-v-d564bfda]{--bg-dark:#09090b;--card-bg:rgba(20,20,23,.7);--text-primary:#fff;--text-secondary:#94a3b8;--accent-primary:#3b82f6;--accent-secondary:#8b5cf6;--accent-glow:rgba(59,130,246,.5);--border-color:hsla(0,0%,100%,.08);--input-bg:rgba(0,0,0,.2);align-items:center;background-color:#09090b;background-color:var(--bg-dark);display:flex;font-family:\"Inter\",-apple-system,BlinkMacSystemFont,sans-serif;justify-content:center;min-height:100vh;overflow:hidden;position:relative}.ambient-glow[data-v-d564bfda]{animation:pulseGlow-d564bfda 10s ease-in-out infinite alternate;border-radius:50%;filter:blur(120px);height:600px;opacity:.4;position:absolute;width:600px;z-index:0}.glow-1[data-v-d564bfda]{background:radial-gradient(circle,var(--accent-secondary),transparent 70%);left:-10%;top:-10%}.glow-2[data-v-d564bfda]{animation-delay:-5s;background:radial-gradient(circle,var(--accent-primary),transparent 70%);bottom:-10%;right:-10%}@keyframes pulseGlow-d564bfda{0%{opacity:.3;transform:scale(.8)}to{opacity:.5;transform:scale(1.1)}}.auth-container[data-v-d564bfda]{display:flex;justify-content:center;padding:1rem;position:relative;width:100%;z-index:1}.auth-card[data-v-d564bfda]{animation:slideUp-d564bfda .6s cubic-bezier(.16,1,.3,1);backdrop-filter:blur(24px) saturate(180%);-webkit-backdrop-filter:blur(24px) saturate(180%);background:var(--card-bg);border:1px solid var(--border-color);border-radius:24px;box-shadow:0 25px 50px -12px rgba(0,0,0,.5),inset 0 0 0 1px hsla(0,0%,100%,.05);max-width:460px;padding:3rem 2.5rem;width:100%}.header-section[data-v-d564bfda]{margin-bottom:2.5rem;text-align:center}.auth-title[data-v-d564bfda]{background:linear-gradient(135deg,#fff,#cbd5e1);-webkit-background-clip:text;font-size:2rem;font-weight:800;letter-spacing:-.02em;margin-bottom:.5rem;-webkit-text-fill-color:transparent}.auth-subtitle[data-v-d564bfda]{color:var(--text-secondary);font-size:.95rem;font-weight:400}.form-group[data-v-d564bfda]{margin-bottom:1.5rem}.form-group label[data-v-d564bfda]{color:var(--text-secondary);display:block;font-size:.75rem;font-weight:600;letter-spacing:.05em;margin-bottom:.5rem;text-transform:uppercase;transition:color .3s ease}.active label[data-v-d564bfda]{color:var(--accent-primary)}.input-wrapper[data-v-d564bfda]{align-items:center;display:flex;position:relative}.input-icon[data-v-d564bfda]{color:var(--text-secondary);height:20px;left:1rem;position:absolute;transition:color .3s ease;width:20px;z-index:2}.active .input-icon[data-v-d564bfda]{color:var(--accent-primary)}.form-group input[data-v-d564bfda]{background:var(--input-bg);border:1px solid var(--border-color);border-radius:12px;color:var(--text-primary);font-size:1rem;padding:1rem 1rem 1rem 3rem;transition:all .3s cubic-bezier(.4,0,.2,1);width:100%}.form-group input[data-v-d564bfda]::-moz-placeholder{color:rgba(148,163,184,.4)}.form-group input[data-v-d564bfda]::placeholder{color:rgba(148,163,184,.4)}.form-group input[data-v-d564bfda]:focus{background:rgba(59,130,246,.05);border-color:var(--accent-primary);box-shadow:0 0 0 4px rgba(59,130,246,.15);outline:none;transform:translateY(-1px)}.submit-button[data-v-d564bfda]{align-items:center;background:linear-gradient(135deg,var(--accent-primary),var(--accent-secondary));border:none;border-radius:12px;box-shadow:0 4px 20px rgba(59,130,246,.3);color:#fff;cursor:pointer;display:flex;font-size:1rem;font-weight:600;height:54px;justify-content:center;margin-top:1rem;padding:1rem;transition:all .3s ease;width:100%}.submit-button[data-v-d564bfda]:not(:disabled):hover{box-shadow:0 8px 30px rgba(139,92,246,.4);filter:brightness(1.1);transform:translateY(-2px)}.submit-button[data-v-d564bfda]:disabled{cursor:not-allowed;opacity:.7;transform:none}.error-banner[data-v-d564bfda]{align-items:center;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2);border-radius:8px;color:#fca5a5;display:flex;font-size:.9rem;gap:.5rem;margin-bottom:1.5rem;padding:.75rem 1rem}.auth-footer[data-v-d564bfda]{border-top:1px solid var(--border-color);margin-top:2rem;padding-top:1.5rem;text-align:center}.auth-switch[data-v-d564bfda]{color:var(--text-secondary);font-size:.9rem}.link-highlight[data-v-d564bfda]{color:var(--text-primary);font-weight:600;margin-left:.25rem;position:relative;-webkit-text-decoration:none;text-decoration:none;transition:color .2s}.link-highlight[data-v-d564bfda]:hover{color:var(--accent-primary)}.link-highlight[data-v-d564bfda]:after{background:var(--accent-primary);bottom:-2px;content:\"\";height:1px;left:0;position:absolute;transition:width .3s ease;width:0}.link-highlight[data-v-d564bfda]:hover:after{width:100%}.spinner[data-v-d564bfda]{animation:rotate-d564bfda 2s linear infinite;height:24px;width:24px}.spinner .path[data-v-d564bfda]{animation:dash-d564bfda 1.5s ease-in-out infinite;stroke:#fff;stroke-linecap:round}@keyframes rotate-d564bfda{to{transform:rotate(1turn)}}@keyframes dash-d564bfda{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}@keyframes slideUp-d564bfda{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.fade-slide-enter-active[data-v-d564bfda],.fade-slide-leave-active[data-v-d564bfda]{transition:all .3s ease}.fade-slide-enter[data-v-d564bfda],.fade-slide-leave-to[data-v-d564bfda]{opacity:0;transform:translateY(-10px)}.verification-info[data-v-d564bfda]{background:rgba(59,130,246,.05);border:1px solid rgba(59,130,246,.2);border-radius:12px;margin-bottom:2rem;padding:1.5rem;text-align:center}.info-icon[data-v-d564bfda]{color:var(--accent-primary);margin-bottom:1rem}.verification-info p[data-v-d564bfda]{color:var(--text-secondary);font-size:.9rem;margin:.25rem 0}.email-display[data-v-d564bfda]{color:var(--text-primary);font-size:1rem!important;font-weight:600}.back-button[data-v-d564bfda]{background:transparent;border:1px solid var(--border-color);border-radius:12px;color:var(--text-secondary);cursor:pointer;font-size:.9rem;margin-top:.75rem;padding:.75rem;transition:all .3s ease;width:100%}.back-button[data-v-d564bfda]:hover{background:hsla(0,0%,100%,.05);border-color:var(--accent-primary);color:var(--text-primary)}@media (max-width:640px){.auth-card[data-v-d564bfda]{padding:2rem 1.5rem}.auth-title[data-v-d564bfda]{font-size:1.75rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=template&id=d564bfda&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-wrapper"
  }, [_vm._ssrNode("<div class=\"ambient-glow glow-1\" data-v-d564bfda></div> <div class=\"ambient-glow glow-2\" data-v-d564bfda></div> "), _vm._ssrNode("<div class=\"auth-container\" data-v-d564bfda>", "</div>", [_vm._ssrNode("<div class=\"auth-card\" data-v-d564bfda>", "</div>", [_vm._ssrNode("<div class=\"header-section\" data-v-d564bfda><h1 class=\"auth-title\" data-v-d564bfda>Create Account</h1> <p class=\"auth-subtitle\" data-v-d564bfda>Join the future ecosystem today.</p></div> "), _c('transition', {
    attrs: {
      "name": "fade-slide"
    }
  }, [_vm.error ? _c('div', {
    staticClass: "error-banner"
  }, [_c('svg', {
    attrs: {
      "width": "20",
      "height": "20",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "stroke": "currentColor",
      "stroke-width": "2"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "12",
      "cy": "12",
      "r": "10"
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
  })]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.error))])]) : _vm._e()]), _vm._ssrNode(" " + (_vm.step === 1 ? "<form class=\"auth-form\" data-v-d564bfda><div" + _vm._ssrClass("form-group", {
    'active': _vm.activeField === 'nickname'
  }) + " data-v-d564bfda><label for=\"nickname\" data-v-d564bfda>Display Name</label> <div class=\"input-wrapper\" data-v-d564bfda><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"input-icon\" data-v-d564bfda><path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\" data-v-d564bfda></path> <circle cx=\"12\" cy=\"7\" r=\"4\" data-v-d564bfda></circle></svg> <input type=\"text\" id=\"nickname\" placeholder=\"e.g. Neo Anderson\" required=\"required\"" + _vm._ssrAttr("value", _vm.nickname) + " data-v-d564bfda></div></div> <div" + _vm._ssrClass("form-group", {
    'active': _vm.activeField === 'email'
  }) + " data-v-d564bfda><label for=\"email\" data-v-d564bfda>Email Address</label> <div class=\"input-wrapper\" data-v-d564bfda><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"input-icon\" data-v-d564bfda><path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\" data-v-d564bfda></path> <polyline points=\"22,6 12,13 2,6\" data-v-d564bfda></polyline></svg> <input type=\"email\" id=\"email\" placeholder=\"name@example.com\" required=\"required\"" + _vm._ssrAttr("value", _vm.email) + " data-v-d564bfda></div></div> <div" + _vm._ssrClass("form-group", {
    'active': _vm.activeField === 'password'
  }) + " data-v-d564bfda><label for=\"password\" data-v-d564bfda>Password</label> <div class=\"input-wrapper\" data-v-d564bfda><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"input-icon\" data-v-d564bfda><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\" data-v-d564bfda></rect> <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" data-v-d564bfda></path></svg> <input type=\"password\" id=\"password\" placeholder=\"••••••••••••\" required=\"required\"" + _vm._ssrAttr("value", _vm.password) + " data-v-d564bfda></div></div> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"submit-button\" data-v-d564bfda>" + (!_vm.loading ? "<span data-v-d564bfda>Send Verification Code</span>" : "<span class=\"loader\" data-v-d564bfda><svg viewBox=\"0 0 50 50\" class=\"spinner\" data-v-d564bfda><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\" class=\"path\" data-v-d564bfda></circle></svg></span>") + "</button></form>" : "<!---->") + " " + (_vm.step === 2 ? "<form class=\"auth-form\" data-v-d564bfda><div class=\"verification-info\" data-v-d564bfda><svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"info-icon\" data-v-d564bfda><path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\" data-v-d564bfda></path> <polyline points=\"22,6 12,13 2,6\" data-v-d564bfda></polyline></svg> <p data-v-d564bfda>We sent a 6-digit code to</p> <p class=\"email-display\" data-v-d564bfda>" + _vm._ssrEscape(_vm._s(_vm.email)) + "</p></div> <div" + _vm._ssrClass("form-group", {
    'active': _vm.activeField === 'code'
  }) + " data-v-d564bfda><label for=\"code\" data-v-d564bfda>Verification Code</label> <div class=\"input-wrapper\" data-v-d564bfda><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"input-icon\" data-v-d564bfda><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\" data-v-d564bfda></rect> <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" data-v-d564bfda></path></svg> <input type=\"text\" id=\"code\" placeholder=\"000000\" maxlength=\"6\" required=\"required\"" + _vm._ssrAttr("value", _vm.verificationCode) + " data-v-d564bfda></div></div> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"submit-button\" data-v-d564bfda>" + (!_vm.loading ? "<span data-v-d564bfda>Verify &amp; Complete</span>" : "<span class=\"loader\" data-v-d564bfda><svg viewBox=\"0 0 50 50\" class=\"spinner\" data-v-d564bfda><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\" class=\"path\" data-v-d564bfda></circle></svg></span>") + "</button> <button type=\"button\" class=\"back-button\" data-v-d564bfda>\n          ← Back to form\n        </button></form>" : "<!---->") + " "), _vm._ssrNode("<div class=\"auth-footer\" data-v-d564bfda>", "</div>", [_vm._ssrNode("<p class=\"auth-switch\" data-v-d564bfda>", "</p>", [_vm._ssrNode("\n          Already a member? \n          "), _c('NuxtLink', {
    staticClass: "link-highlight",
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Log in here")])], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/register.vue?vue&type=template&id=d564bfda&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=script&lang=js
/* harmony default export */ var registervue_type_script_lang_js = ({
  name: 'RegisterPage',
  data() {
    return {
      step: 1,
      // 1 = form, 2 = verification code
      nickname: '',
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
    async register() {
      try {
        this.loading = true;
        this.error = '';

        // Step 1: Request verification code
        const response = await this.$axios.post('/users/register/request', {
          nickname: this.nickname,
          email: this.email,
          password: this.password
        });

        // Move to verification step
        this.step = 2;
        this.error = '';
      } catch (error) {
        var _error$response, _error$response$data;
        this.error = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.error) || 'Connection refused. Registration failed.';
        console.error('Registration error:', error);
      } finally {
        this.loading = false;
      }
    },
    async verifyCode() {
      try {
        this.loading = true;
        this.error = '';

        // Step 2: Verify code and complete registration
        const response = await this.$axios.post('/users/register/verify', {
          email: this.email,
          code: this.verificationCode,
          password: this.password,
          nickname: this.nickname
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
// CONCATENATED MODULE: ./pages/register.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_registervue_type_script_lang_js = (registervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/register.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d564bfda",
  "31a05d66"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=register.js.map