exports.ids = [6];
exports.modules = {

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("50dbf496", content, true, context)
};

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a9b47f6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a9b47f6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a9b47f6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a9b47f6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7a9b47f6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-wrapper[data-v-7a9b47f6]{--bg-dark:#050507;--surface:hsla(0,0%,100%,.03);--surface-hover:hsla(0,0%,100%,.06);--border:hsla(0,0%,100%,.08);--text-main:#fff;--text-muted:#94a3b8;--accent:#3b82f6;--font-ui:\"Inter\",sans-serif;--font-mono:\"JetBrains Mono\",\"Fira Code\",monospace;background-color:#050507;background-color:var(--bg-dark);color:#fff;color:var(--text-main);font-family:\"Inter\",sans-serif;font-family:var(--font-ui);min-height:100vh;overflow-x:hidden;position:relative}.bg-grid[data-v-7a9b47f6]{background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:50px 50px;bottom:0;left:0;-webkit-mask-image:radial-gradient(circle at top center,#000 40%,transparent 100%);mask-image:radial-gradient(circle at top center,#000 40%,transparent 100%);pointer-events:none;right:0;top:0}.bg-glow[data-v-7a9b47f6],.bg-grid[data-v-7a9b47f6]{opacity:.15;position:absolute;z-index:0}.bg-glow[data-v-7a9b47f6]{border-radius:50%;filter:blur(150px);height:800px;width:800px}.glow-purple[data-v-7a9b47f6]{background:#8b5cf6;left:20%;top:-200px}.glow-blue[data-v-7a9b47f6]{background:#3b82f6;bottom:-200px;right:20%}.home-container[data-v-7a9b47f6]{margin:0 auto;max-width:1200px;padding:0 2rem;position:relative;z-index:1}.hero-section[data-v-7a9b47f6]{align-items:center;display:flex;flex-direction:column;padding:8rem 0 6rem;text-align:center}.hero-badge[data-v-7a9b47f6]{align-items:center;background:hsla(0,0%,100%,.05);border:1px solid var(--border);border-radius:100px;color:var(--text-muted);display:inline-flex;font-size:.8rem;font-weight:500;gap:.5rem;margin-bottom:1.5rem;padding:.4rem 1rem}.pulse-dot[data-v-7a9b47f6]{animation:pulse-7a9b47f6 2s infinite;background:#10b981;border-radius:50%;box-shadow:0 0 10px #10b981;height:6px;width:6px}.hero-title[data-v-7a9b47f6]{background:linear-gradient(180deg,#fff,#94a3b8);-webkit-background-clip:text;font-size:4.5rem;font-weight:800;letter-spacing:-.03em;line-height:1.1;margin-bottom:1.5rem}.hero-title[data-v-7a9b47f6],.text-gradient[data-v-7a9b47f6]{-webkit-text-fill-color:transparent}.text-gradient[data-v-7a9b47f6]{background:linear-gradient(135deg,#60a5fa,#c084fc);-webkit-background-clip:text}.hero-subtitle[data-v-7a9b47f6]{color:var(--text-muted);font-size:1.2rem;line-height:1.6;margin-bottom:4rem;max-width:600px}.search-wrapper[data-v-7a9b47f6]{align-items:center;backdrop-filter:blur(20px);background:rgba(10,10,12,.6);border:1px solid var(--border);border-radius:16px;box-shadow:0 10px 30px -10px rgba(0,0,0,.5);display:flex;max-width:560px;padding:.75rem 1rem;position:relative;transition:all .3s cubic-bezier(.25,.8,.25,1);width:100%}.search-wrapper.focused[data-v-7a9b47f6]{border-color:var(--accent);box-shadow:0 0 0 4px rgba(59,130,246,.15),0 20px 40px -10px rgba(0,0,0,.5);transform:translateY(-2px)}.search-icon[data-v-7a9b47f6]{color:var(--text-muted);display:flex;margin-right:.75rem}.search-wrapper input[data-v-7a9b47f6]{background:transparent;border:none;color:var(--text-main);flex:1;font-family:var(--font-ui);font-size:1.1rem}.search-wrapper input[data-v-7a9b47f6]::-moz-placeholder{color:rgba(148,163,184,.5)}.search-wrapper input[data-v-7a9b47f6]::placeholder{color:rgba(148,163,184,.5)}.search-wrapper input[data-v-7a9b47f6]:focus{outline:none}.search-shortcut .key[data-v-7a9b47f6]{background:hsla(0,0%,100%,.1);border:1px solid hsla(0,0%,100%,.1);border-radius:6px;color:var(--text-muted);font-family:var(--font-mono);font-size:.8rem;padding:.2rem .6rem}.explorer-section[data-v-7a9b47f6]{margin-bottom:4rem;width:100%}.list-header[data-v-7a9b47f6],.model-row[data-v-7a9b47f6]{display:grid;grid-template-columns:2.5fr 2fr 1fr 60px;grid-gap:1.5rem;align-items:center;gap:1.5rem;padding:0 1.5rem}.list-header[data-v-7a9b47f6]{color:var(--text-muted);font-size:.75rem;font-weight:600;letter-spacing:.05em;margin-bottom:1rem;text-transform:uppercase}.unit[data-v-7a9b47f6]{font-weight:400;opacity:.6;text-transform:none}.model-list[data-v-7a9b47f6]{display:flex;flex-direction:column;gap:.5rem}.model-row[data-v-7a9b47f6]{background:var(--surface);border:1px solid var(--border);border-radius:16px;color:inherit;cursor:pointer;display:grid;grid-template-columns:2.5fr 2fr 1fr 60px;padding:1.25rem 1.5rem;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease;grid-gap:1.5rem;align-items:center;gap:1.5rem}.model-row[data-v-7a9b47f6]:hover{background:var(--surface-hover);border-color:hsla(0,0%,100%,.15);box-shadow:0 10px 20px -5px rgba(0,0,0,.3);transform:scale(1.005)}.loading-state[data-v-7a9b47f6]{color:var(--text-muted);padding:4rem;text-align:center}.loader-ring[data-v-7a9b47f6]{animation:spin-7a9b47f6 1s linear infinite;border:3px solid hsla(0,0%,100%,.1);border-radius:50%;border-top:3px solid var(--accent);height:40px;margin:0 auto 1rem;width:40px}@keyframes spin-7a9b47f6{to{transform:rotate(1turn)}}.empty-state[data-v-7a9b47f6]{color:var(--text-muted);padding:4rem;text-align:center}.tech-tag.free[data-v-7a9b47f6]{background:rgba(16,185,129,.1);border-color:rgba(16,185,129,.3);color:#10b981}.col-name[data-v-7a9b47f6]{gap:1rem}.col-name[data-v-7a9b47f6],.provider-icon[data-v-7a9b47f6]{align-items:center;display:flex}.provider-icon[data-v-7a9b47f6]{border-radius:10px;color:#fff;flex-shrink:0;font-size:1.2rem;font-weight:700;height:40px;justify-content:center;text-shadow:0 2px 4px rgba(0,0,0,.2);width:40px}.bg-green[data-v-7a9b47f6]{background:linear-gradient(135deg,#10b981,#059669)}.bg-orange[data-v-7a9b47f6]{background:linear-gradient(135deg,#f97316,#ea580c)}.bg-blue[data-v-7a9b47f6]{background:linear-gradient(135deg,#3b82f6,#2563eb)}.bg-red[data-v-7a9b47f6]{background:linear-gradient(135deg,#ef4444,#dc2626)}.bg-purple[data-v-7a9b47f6]{background:linear-gradient(135deg,#a855f7,#7c3aed)}.bg-yellow[data-v-7a9b47f6]{background:linear-gradient(135deg,#eab308,#ca8a04)}.bg-gray[data-v-7a9b47f6]{background:linear-gradient(135deg,#64748b,#475569)}.name-group[data-v-7a9b47f6]{display:flex;flex-direction:column}.model-name[data-v-7a9b47f6]{color:var(--text-main);font-size:1.05rem;font-weight:600}.model-author[data-v-7a9b47f6]{color:var(--text-muted);font-size:.85rem}.tag-list[data-v-7a9b47f6]{display:flex;flex-wrap:wrap;gap:.5rem}.tech-tag[data-v-7a9b47f6]{background:hsla(0,0%,100%,.05);border:1px solid hsla(0,0%,100%,.05);border-radius:100px;color:var(--text-muted);font-size:.75rem;padding:.25rem .75rem;white-space:nowrap}.col-price[data-v-7a9b47f6]{color:var(--text-main);font-family:var(--font-mono);font-size:1rem;font-weight:500;text-align:right}.col-action[data-v-7a9b47f6]{display:flex;justify-content:flex-end}.action-btn[data-v-7a9b47f6]{align-items:center;border-radius:50%;color:var(--text-muted);display:flex;height:32px;justify-content:center;opacity:0;transform:translateX(-10px);transition:all .3s ease;width:32px}.model-row:hover .action-btn[data-v-7a9b47f6]{background:rgba(59,130,246,.1);color:var(--accent);opacity:1;transform:translateX(0)}@keyframes pulse-7a9b47f6{0%{box-shadow:0 0 0 0 rgba(16,185,129,.7)}70%{box-shadow:0 0 0 10px rgba(16,185,129,0)}to{box-shadow:0 0 0 0 rgba(16,185,129,0)}}@media (max-width:1024px){.hero-title[data-v-7a9b47f6]{font-size:3.5rem}}@media (max-width:768px){.hero-title[data-v-7a9b47f6]{font-size:2.5rem}.list-header[data-v-7a9b47f6]{display:none}.model-row[data-v-7a9b47f6]{gap:1rem;grid-template-columns:1fr auto;padding:1rem}.col-action[data-v-7a9b47f6],.col-tags[data-v-7a9b47f6]{display:none}.col-name[data-v-7a9b47f6]{flex:1}.col-price[data-v-7a9b47f6]{background:hsla(0,0%,100%,.05);border-radius:6px;font-size:.9rem;padding:.3rem .6rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=7a9b47f6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-wrapper"
  }, [_vm._ssrNode("<div class=\"bg-grid\" data-v-7a9b47f6></div> <div class=\"bg-glow glow-purple\" data-v-7a9b47f6></div> <div class=\"bg-glow glow-blue\" data-v-7a9b47f6></div> "), _vm._ssrNode("<div class=\"home-container\" data-v-7a9b47f6>", "</div>", [_vm._ssrNode("<section class=\"hero-section\" data-v-7a9b47f6><div class=\"hero-badge\" data-v-7a9b47f6><span class=\"pulse-dot\" data-v-7a9b47f6></span> Unified Intelligence Layer\n      </div> <h1 class=\"hero-title\" data-v-7a9b47f6>\n        Explore World-Class <br data-v-7a9b47f6> <span class=\"text-gradient\" data-v-7a9b47f6>AI Models</span></h1> <p class=\"hero-subtitle\" data-v-7a9b47f6>\n        Access production-ready open-source and proprietary models through a single, high-performance API gateway.\n      </p> <div" + _vm._ssrClass("search-wrapper", {
    'focused': _vm.isSearchFocused
  }) + " data-v-7a9b47f6><div class=\"search-icon\" data-v-7a9b47f6><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-7a9b47f6><circle cx=\"11\" cy=\"11\" r=\"8\" data-v-7a9b47f6></circle><path d=\"m21 21-4.3-4.3\" data-v-7a9b47f6></path></svg></div> <input type=\"text\" placeholder=\"Search models (e.g. 'Llama 3', 'Vision', 'GPT-4')...\"" + _vm._ssrAttr("value", _vm.searchQuery) + " data-v-7a9b47f6> <div class=\"search-shortcut\" data-v-7a9b47f6><span class=\"key\" data-v-7a9b47f6>/</span></div></div></section> "), _vm._ssrNode("<section class=\"explorer-section\" data-v-7a9b47f6>", "</section>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-state\" data-v-7a9b47f6>", "</div>", [_vm._ssrNode("<div class=\"loader-ring\" data-v-7a9b47f6></div> <p data-v-7a9b47f6>Loading models...</p>")], 2) : _vm.models.length > 0 ? [_vm._ssrNode("<div class=\"list-header\" data-v-7a9b47f6><div class=\"col-name\" data-v-7a9b47f6>Model Architecture</div> <div class=\"col-tags\" data-v-7a9b47f6>Capabilities</div> <div class=\"col-price\" data-v-7a9b47f6>Pricing <span class=\"unit\" data-v-7a9b47f6>/ request</span></div> <div class=\"col-action\" data-v-7a9b47f6></div></div> "), _vm._ssrNode("<div class=\"model-list\" data-v-7a9b47f6>", "</div>", _vm._l(_vm.filteredModels, function (model) {
    return _c('NuxtLink', {
      key: model.id,
      staticClass: "model-row",
      attrs: {
        "to": `/models?model=${model.id}`,
        "tabindex": "0"
      }
    }, [_c('div', {
      staticClass: "col-name"
    }, [_c('div', {
      staticClass: "provider-icon",
      class: _vm.getProviderClass(model.provider)
    }, [_vm._v("\n                " + _vm._s(model.name.charAt(0)) + "\n              ")]), _vm._v(" "), _c('div', {
      staticClass: "name-group"
    }, [_c('div', {
      staticClass: "model-name"
    }, [_vm._v(_vm._s(model.name))]), _vm._v(" "), _c('div', {
      staticClass: "model-author"
    }, [_vm._v(_vm._s(model.provider))])])]), _vm._v(" "), _c('div', {
      staticClass: "col-tags"
    }, [_c('div', {
      staticClass: "tag-list"
    }, [_c('span', {
      staticClass: "tech-tag"
    }, [_vm._v(_vm._s(_vm.formatContext(model.contextWindow)) + " Context")]), _vm._v(" "), model.isFree ? _c('span', {
      staticClass: "tech-tag free"
    }, [_vm._v("Free")]) : _vm._e()])]), _vm._v(" "), _c('div', {
      staticClass: "col-price"
    }, [_c('span', {
      staticClass: "price-val"
    }, [_vm._v("$" + _vm._s(model.costPerRequest || '0.05'))])]), _vm._v(" "), _c('div', {
      staticClass: "col-action"
    }, [_c('div', {
      staticClass: "action-btn"
    }, [_c('svg', {
      attrs: {
        "width": "20",
        "height": "20",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "stroke": "currentColor",
        "stroke-width": "2"
      }
    }, [_c('path', {
      attrs: {
        "d": "M5 12h14"
      }
    }), _c('path', {
      attrs: {
        "d": "m12 5 7 7-7 7"
      }
    })])])])]);
  }), 1)] : _vm._ssrNode("<div class=\"empty-state\" data-v-7a9b47f6><p data-v-7a9b47f6>No models available. Please check backend connection.</p></div>")], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=7a9b47f6&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  name: 'IndexPage',
  data() {
    return {
      searchQuery: '',
      isSearchFocused: false,
      models: [],
      loading: true
    };
  },
  async mounted() {
    // Load real models from API
    try {
      const response = await this.$axios.get('/models');
      this.models = response.data.models || [];
    } catch (error) {
      console.error('Error loading models:', error);
      this.models = [];
    } finally {
      this.loading = false;
    }
  },
  computed: {
    filteredModels() {
      if (!this.searchQuery) return this.models;
      const query = this.searchQuery.toLowerCase();
      return this.models.filter(m => m.name.toLowerCase().includes(query) || m.provider.toLowerCase().includes(query) || m.description.toLowerCase().includes(query));
    }
  },
  methods: {
    formatContext(value) {
      if (!value) return 'N/A';
      return value >= 1000 ? (value / 1000).toFixed(0) + 'M' : value + 'K';
    },
    getProviderClass(provider) {
      const map = {
        'OpenAI': 'bg-green',
        'Anthropic': 'bg-orange',
        'Meta': 'bg-blue',
        'Google': 'bg-red',
        'Stability AI': 'bg-purple',
        'Mistral AI': 'bg-yellow',
        'Mistral': 'bg-yellow',
        'Cohere': 'bg-purple',
        'Perplexity': 'bg-blue'
      };
      return map[provider] || 'bg-gray';
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7a9b47f6",
  "4a5f16c2"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map