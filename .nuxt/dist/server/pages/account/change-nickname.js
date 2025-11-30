exports.ids = [3];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d32de6ec", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_nickname_vue_vue_type_style_index_0_id_0bc52dde_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_nickname_vue_vue_type_style_index_0_id_0bc52dde_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_nickname_vue_vue_type_style_index_0_id_0bc52dde_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_nickname_vue_vue_type_style_index_0_id_0bc52dde_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_nickname_vue_vue_type_style_index_0_id_0bc52dde_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-wrapper[data-v-0bc52dde]{--bg-dark:#09090b;--card-bg:rgba(20,20,23,.6);--border:hsla(0,0%,100%,.08);--text-main:#fff;--text-muted:#94a3b8;--accent:#3b82f6;--accent-glow:rgba(59,130,246,.4);--input-bg:rgba(0,0,0,.2);align-items:center;background-color:#09090b;background-color:var(--bg-dark);display:flex;font-family:\"Inter\",sans-serif;justify-content:center;min-height:85vh;overflow:hidden;padding:1rem;position:relative}.bg-grid[data-v-0bc52dde]{background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:40px 40px;bottom:0;left:0;-webkit-mask-image:radial-gradient(circle at center,#000 40%,transparent 80%);mask-image:radial-gradient(circle at center,#000 40%,transparent 80%);opacity:.15;right:0;top:0}.ambient-glow[data-v-0bc52dde],.bg-grid[data-v-0bc52dde]{position:absolute;z-index:0}.ambient-glow[data-v-0bc52dde]{border-radius:50%;filter:blur(120px);height:500px;opacity:.2;width:500px}.glow-1[data-v-0bc52dde]{background:var(--accent);left:-10%;top:-20%}.glow-2[data-v-0bc52dde]{background:#8b5cf6;bottom:-20%;right:-10%}.content-container[data-v-0bc52dde]{display:flex;justify-content:center;position:relative;width:100%;z-index:1}.profile-card[data-v-0bc52dde]{animation:fadeUp-0bc52dde .5s ease-out;backdrop-filter:blur(24px);background:var(--card-bg);border:1px solid var(--border);border-radius:24px;box-shadow:0 25px 50px -12px rgba(0,0,0,.5);max-width:400px;padding:2.5rem 2rem;width:100%}.card-header[data-v-0bc52dde]{align-items:center;display:flex;flex-direction:column;margin-bottom:2rem;text-align:center}.avatar-preview[data-v-0bc52dde]{height:80px;margin-bottom:1.5rem;position:relative;width:80px}.avatar-gradient[data-v-0bc52dde]{align-items:center;background:linear-gradient(135deg,var(--accent),#8b5cf6);border-radius:50%;box-shadow:0 10px 20px rgba(0,0,0,.3);color:#fff;display:flex;font-size:2rem;font-weight:700;height:100%;justify-content:center;width:100%}.avatar-ring[data-v-0bc52dde]{animation:pulse-0bc52dde 3s infinite;border:1px solid var(--accent);border-radius:50%;bottom:-4px;left:-4px;opacity:.3;position:absolute;right:-4px;top:-4px}.card-title[data-v-0bc52dde]{color:var(--text-main);font-size:1.5rem;font-weight:700;margin:0 0 .5rem}.card-subtitle[data-v-0bc52dde]{color:var(--text-muted);font-size:.9rem;margin:0}.form-group[data-v-0bc52dde]{margin-bottom:2rem}.form-group label[data-v-0bc52dde]{color:var(--text-muted);display:block;font-size:.75rem;font-weight:600;letter-spacing:.05em;margin-bottom:.75rem;text-transform:uppercase;transition:color .2s}.active label[data-v-0bc52dde]{color:var(--accent)}.input-wrapper[data-v-0bc52dde]{align-items:center;display:flex;position:relative}.input-icon[data-v-0bc52dde]{color:var(--text-muted);height:20px;left:1rem;position:absolute;transition:color .2s;width:20px;z-index:2}.active .input-icon[data-v-0bc52dde],.form-group input[data-v-0bc52dde]{color:var(--text-main)}.form-group input[data-v-0bc52dde]{background:var(--input-bg);border:1px solid var(--border);border-radius:12px;font-size:1rem;padding:.9rem 1rem .9rem 3rem;transition:all .2s;width:100%}.form-group input[data-v-0bc52dde]:focus{background:rgba(59,130,246,.05);border-color:var(--accent);box-shadow:0 0 0 4px rgba(59,130,246,.1);outline:none}.actions[data-v-0bc52dde]{display:flex;flex-direction:column;gap:1rem}.btn-save[data-v-0bc52dde]{align-items:center;background:linear-gradient(135deg,var(--accent),#8b5cf6);border:none;border-radius:12px;color:#fff;cursor:pointer;display:flex;font-size:1rem;font-weight:600;height:48px;justify-content:center;padding:.9rem;transition:all .2s;width:100%}.btn-save[data-v-0bc52dde]:hover:not(:disabled){box-shadow:0 4px 15px var(--accent-glow);transform:translateY(-2px)}.btn-save[data-v-0bc52dde]:disabled{cursor:not-allowed;opacity:.7}.btn-back[data-v-0bc52dde]{align-items:center;background:transparent;border-radius:12px;color:var(--text-muted);display:flex;font-size:.9rem;font-weight:500;gap:.5rem;justify-content:center;padding:.8rem;-webkit-text-decoration:none;text-decoration:none;transition:all .2s;width:100%}.btn-back[data-v-0bc52dde]:hover{background:hsla(0,0%,100%,.03);color:var(--text-main)}.loader[data-v-0bc52dde]{animation:spin-0bc52dde .8s linear infinite;border:2px solid hsla(0,0%,100%,.3);border-radius:50%;border-top-color:#fff;height:20px;width:20px}@keyframes spin-0bc52dde{to{transform:rotate(1turn)}}@keyframes fadeUp-0bc52dde{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes pulse-0bc52dde{0%{opacity:.3;transform:scale(1)}50%{opacity:.5;transform:scale(1.05)}to{opacity:.3;transform:scale(1)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/change-nickname.vue?vue&type=template&id=0bc52dde&scoped=true
var render = function render() {
  var _vm$user;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-wrapper"
  }, [_vm._ssrNode("<div class=\"bg-grid\" data-v-0bc52dde></div> <div class=\"ambient-glow glow-1\" data-v-0bc52dde></div> <div class=\"ambient-glow glow-2\" data-v-0bc52dde></div> "), _vm._ssrNode("<div class=\"content-container\" data-v-0bc52dde>", "</div>", [_vm._ssrNode("<div class=\"profile-card\" data-v-0bc52dde>", "</div>", [_vm._ssrNode("<div class=\"card-header\" data-v-0bc52dde><div class=\"avatar-preview\" data-v-0bc52dde><div class=\"avatar-gradient\" data-v-0bc52dde>" + _vm._ssrEscape("\n            " + _vm._s(_vm.getInitials(_vm.newNickname || ((_vm$user = _vm.user) === null || _vm$user === void 0 ? void 0 : _vm$user.nickname) || '?')) + "\n          ") + "</div> <div class=\"avatar-ring\" data-v-0bc52dde></div></div> <h1 class=\"card-title\" data-v-0bc52dde>Update Identity</h1> <p class=\"card-subtitle\" data-v-0bc52dde>Modify your public display name.</p></div> "), _vm._ssrNode("<form class=\"edit-form\" data-v-0bc52dde>", "</form>", [_vm._ssrNode("<div" + _vm._ssrClass("form-group", {
    'active': _vm.focused
  }) + " data-v-0bc52dde><label for=\"nickname\" data-v-0bc52dde>Display Name</label> <div class=\"input-wrapper\" data-v-0bc52dde><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"input-icon\" data-v-0bc52dde><path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\" data-v-0bc52dde></path> <circle cx=\"12\" cy=\"7\" r=\"4\" data-v-0bc52dde></circle></svg> <input type=\"text\" id=\"nickname\" placeholder=\"Enter new alias\" required=\"required\" autocomplete=\"off\"" + _vm._ssrAttr("value", _vm.newNickname) + " data-v-0bc52dde></div></div> "), _vm._ssrNode("<div class=\"actions\" data-v-0bc52dde>", "</div>", [_vm._ssrNode("<button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.isLoading) + " class=\"btn-save\" data-v-0bc52dde>" + (!_vm.isLoading ? "<span data-v-0bc52dde>Save Changes</span>" : "<span class=\"loader\" data-v-0bc52dde></span>") + "</button> "), _c('NuxtLink', {
    staticClass: "btn-back",
    attrs: {
      "to": "/account"
    }
  }, [_c('svg', {
    attrs: {
      "width": "18",
      "height": "18",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "stroke": "currentColor",
      "stroke-width": "2"
    }
  }, [_c('line', {
    attrs: {
      "x1": "19",
      "y1": "12",
      "x2": "5",
      "y2": "12"
    }
  }), _vm._v(" "), _c('polyline', {
    attrs: {
      "points": "12 19 5 12 12 5"
    }
  })]), _vm._v("\n            Cancel\n          ")])], 2)], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/account/change-nickname.vue?vue&type=template&id=0bc52dde&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/change-nickname.vue?vue&type=script&lang=js
/* harmony default export */ var change_nicknamevue_type_script_lang_js = ({
  name: 'ChangeNicknamePage',
  data() {
    return {
      user: null,
      newNickname: '',
      focused: false,
      isLoading: false
    };
  },
  mounted() {
    // Безопасное получение данных
    try {
      const userData = localStorage.getItem('user'); // Используем 'user' для согласованности с предыдущими шагами
      if (!userData) {
        this.$router.push('/login');
        return;
      }
      this.user = JSON.parse(userData);
      this.newNickname = this.user.nickname;
    } catch (e) {
      this.$router.push('/login');
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
});
// CONCATENATED MODULE: ./pages/account/change-nickname.vue?vue&type=script&lang=js
 /* harmony default export */ var account_change_nicknamevue_type_script_lang_js = (change_nicknamevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/account/change-nickname.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_change_nicknamevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0bc52dde",
  "6459cdc9"
  
)

/* harmony default export */ var change_nickname = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=change-nickname.js.map