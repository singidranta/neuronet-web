exports.ids = [9];
exports.modules = {

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5b3b3dc6", content, true, context)
};

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_models_vue_vue_type_style_index_0_id_5b5d46c6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_models_vue_vue_type_style_index_0_id_5b5d46c6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_models_vue_vue_type_style_index_0_id_5b5d46c6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_models_vue_vue_type_style_index_0_id_5b5d46c6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_models_vue_vue_type_style_index_0_id_5b5d46c6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-wrapper[data-v-5b5d46c6]{--bg-deep:#020408;--card-bg:hsla(0,0%,100%,.02);--card-border:hsla(0,0%,100%,.06);--text-primary:#fff;--text-secondary:#94a3b8;--accent-blue:#3b82f6;--accent-purple:#8b5cf6;--accent-glow:rgba(59,130,246,.4);background-color:#020408;background-color:var(--bg-deep);color:#fff;color:var(--text-primary);font-family:\"Inter\",sans-serif;min-height:100vh;overflow-x:hidden;position:relative}.bg-noise[data-v-5b5d46c6]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='a'%3E%3CfeTurbulence baseFrequency='.65' numOctaves='3' stitchTiles='stitch' type='fractalNoise'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='.05'/%3E%3C/svg%3E\");bottom:0;left:0;right:0;top:0}.bg-noise[data-v-5b5d46c6],.glow-orb[data-v-5b5d46c6]{pointer-events:none;position:absolute;z-index:0}.glow-orb[data-v-5b5d46c6]{border-radius:50%;filter:blur(120px);height:600px;opacity:.3;width:600px}.orb-1[data-v-5b5d46c6]{background:var(--accent-blue);left:-10%;top:-10%}.orb-2[data-v-5b5d46c6]{background:var(--accent-purple);bottom:10%;right:-10%}.models-container[data-v-5b5d46c6]{margin:0 auto;max-width:1400px;padding:6rem 2rem;position:relative;z-index:1}.models-header[data-v-5b5d46c6]{margin-bottom:5rem;text-align:center}.badge-pill[data-v-5b5d46c6]{backdrop-filter:blur(10px);border:1px solid hsla(0,0%,100%,.15);border-radius:100px;color:var(--text-secondary);display:inline-block;font-size:.8rem;letter-spacing:.1em;margin-bottom:1.5rem;padding:.5rem 1.2rem;text-transform:uppercase}.page-title[data-v-5b5d46c6]{font-size:3.5rem;font-weight:800;letter-spacing:-.02em;line-height:1.1;margin-bottom:1rem}.text-highlight[data-v-5b5d46c6]{background:linear-gradient(135deg,#fff,#93c5fd);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 30px rgba(59,130,246,.3)}.page-subtitle[data-v-5b5d46c6]{color:var(--text-secondary);font-size:1.15rem;line-height:1.6;margin:0 auto;max-width:600px}.models-grid[data-v-5b5d46c6]{display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));grid-gap:2rem;gap:2rem}.model-card[data-v-5b5d46c6]{backdrop-filter:blur(20px);background:var(--card-bg);border:1px solid var(--card-border);border-radius:24px;display:flex;flex-direction:column;overflow:hidden;padding:2rem;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1)}.model-card[data-v-5b5d46c6]:hover{border-color:hsla(0,0%,100%,.2);box-shadow:0 20px 40px -10px rgba(0,0,0,.5);transform:translateY(-5px)}.model-card:hover .card-glow[data-v-5b5d46c6]{opacity:1}.card-glow[data-v-5b5d46c6]{background:radial-gradient(circle at top right,rgba(59,130,246,.15),transparent 60%);height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .4s ease;width:100%;z-index:0}.card-top[data-v-5b5d46c6]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:1.5rem;position:relative;z-index:1}.provider-badge[data-v-5b5d46c6]{color:var(--accent-blue);font-size:.75rem;font-weight:700;letter-spacing:.05em;margin-bottom:.25rem;text-transform:uppercase}.model-name[data-v-5b5d46c6]{color:#fff;font-size:1.5rem;font-weight:700;margin:0}.status-indicator[data-v-5b5d46c6]{align-items:center;background:hsla(0,0%,100%,.05);border:1px solid hsla(0,0%,100%,.05);border-radius:100px;display:flex;font-size:.75rem;font-weight:600;gap:.5rem;padding:.25rem .75rem}.status-dot[data-v-5b5d46c6]{border-radius:50%;height:6px;width:6px}.status-dot.public[data-v-5b5d46c6]{background-color:#10b981;box-shadow:0 0 8px rgba(16,185,129,.5)}.status-dot.private[data-v-5b5d46c6]{background-color:#f59e0b}.card-body[data-v-5b5d46c6]{flex-grow:1;margin-bottom:2rem;position:relative;z-index:1}.model-description[data-v-5b5d46c6]{color:var(--text-secondary);display:-webkit-box;font-size:.95rem;-webkit-line-clamp:3;line-height:1.6;margin:0;-webkit-box-orient:vertical;overflow:hidden}.specs-grid[data-v-5b5d46c6]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:1px;background:hsla(0,0%,100%,.08);border:1px solid hsla(0,0%,100%,.08);border-radius:12px;gap:1px;margin-bottom:1.5rem;overflow:hidden;position:relative;z-index:1}.spec-item[data-v-5b5d46c6]{align-items:center;background:rgba(10,10,14,.6);display:flex;flex-direction:column;padding:1rem .5rem;text-align:center}.spec-label[data-v-5b5d46c6]{color:#64748b;font-size:.7rem;letter-spacing:.05em;margin-bottom:.25rem;text-transform:uppercase}.spec-value[data-v-5b5d46c6]{color:#e2e8f0;font-family:\"Fira Code\",monospace;font-size:.9rem;font-weight:600}.text-accent[data-v-5b5d46c6]{color:var(--accent-blue)}.card-footer[data-v-5b5d46c6]{position:relative;z-index:1}.action-btn[data-v-5b5d46c6]{align-items:center;background:linear-gradient(180deg,rgba(59,130,246,.1),rgba(59,130,246,.05));border:1px solid rgba(59,130,246,.3);border-radius:12px;color:#93c5fd;cursor:pointer;display:flex;font-size:.95rem;font-weight:600;gap:.5rem;justify-content:center;padding:1rem;transition:all .3s ease;width:100%}.action-btn[data-v-5b5d46c6]:hover:not(.locked){background:var(--accent-blue);border-color:var(--accent-blue);box-shadow:0 4px 20px rgba(59,130,246,.4);color:#fff;transform:translateY(-1px)}.action-btn.locked[data-v-5b5d46c6]{background:hsla(0,0%,100%,.03);border-color:hsla(0,0%,100%,.05);color:#475569;cursor:default}.staggered-fade-enter-active[data-v-5b5d46c6],.staggered-fade-leave-active[data-v-5b5d46c6]{transition:all .5s cubic-bezier(.25,.8,.25,1)}.staggered-fade-enter-from[data-v-5b5d46c6],.staggered-fade-leave-to[data-v-5b5d46c6]{opacity:0;transform:translateY(30px)}.model-card[data-v-5b5d46c6]{animation:fadeUp-5b5d46c6 .6s ease-out backwards;animation-delay:calc(var(--i)*.1s)}@keyframes fadeUp-5b5d46c6{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.loader-ring[data-v-5b5d46c6]{animation:spin-5b5d46c6 1s linear infinite;border:2px solid hsla(0,0%,100%,.1);border-radius:50%;border-top:2px solid var(--accent-blue);height:40px;margin:0 auto 1rem;width:40px}.empty-state[data-v-5b5d46c6]{color:var(--text-secondary);padding:4rem;text-align:center}@keyframes spin-5b5d46c6{to{transform:rotate(1turn)}}@media (max-width:768px){.page-title[data-v-5b5d46c6]{font-size:2.5rem}.models-grid[data-v-5b5d46c6]{grid-template-columns:1fr}.models-container[data-v-5b5d46c6]{padding:3rem 1rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/models.vue?vue&type=template&id=5b5d46c6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-wrapper"
  }, [_vm._ssrNode("<div class=\"bg-noise\" data-v-5b5d46c6></div> <div class=\"glow-orb orb-1\" data-v-5b5d46c6></div> <div class=\"glow-orb orb-2\" data-v-5b5d46c6></div> "), _vm._ssrNode("<div class=\"models-container\" data-v-5b5d46c6>", "</div>", [_vm._ssrNode("<div class=\"models-header\" data-v-5b5d46c6><div class=\"badge-pill\" data-v-5b5d46c6>Neural Network Catalog</div> <h1 class=\"page-title\" data-v-5b5d46c6>Select Your <span class=\"text-highlight\" data-v-5b5d46c6>Intelligence</span></h1> <p class=\"page-subtitle\" data-v-5b5d46c6>Access high-performance LLMs through a unified, low-latency API layer.</p></div> "), _c('transition-group', {
    staticClass: "models-grid",
    attrs: {
      "name": "staggered-fade",
      "tag": "div"
    }
  }, _vm._l(_vm.models, function (model, index) {
    return _c('div', {
      key: model.id,
      staticClass: "model-card",
      style: {
        '--i': index
      }
    }, [_c('div', {
      staticClass: "card-top"
    }, [_c('div', {
      staticClass: "model-identity"
    }, [_c('div', {
      staticClass: "provider-badge"
    }, [_vm._v(_vm._s(model.provider))]), _vm._v(" "), _c('h3', {
      staticClass: "model-name"
    }, [_vm._v(_vm._s(model.name))])]), _vm._v(" "), _c('div', {
      staticClass: "status-indicator"
    }, [_c('span', {
      staticClass: "status-dot",
      class: model.isPrivate ? 'private' : 'public'
    }), _vm._v("\n            " + _vm._s(model.isPrivate ? 'Private' : 'Public') + "\n          ")])]), _vm._v(" "), _c('div', {
      staticClass: "card-body"
    }, [_c('p', {
      staticClass: "model-description"
    }, [_vm._v(_vm._s(model.description))])]), _vm._v(" "), _c('div', {
      staticClass: "specs-grid"
    }, [_c('div', {
      staticClass: "spec-item"
    }, [_c('span', {
      staticClass: "spec-label"
    }, [_vm._v("Context")]), _vm._v(" "), _c('span', {
      staticClass: "spec-value"
    }, [_vm._v(_vm._s(_vm.formatContext(model.contextWindow)))])]), _vm._v(" "), _c('div', {
      staticClass: "spec-item"
    }, [_c('span', {
      staticClass: "spec-label"
    }, [_vm._v("Cost / 1K")]), _vm._v(" "), _c('span', {
      staticClass: "spec-value text-accent"
    }, [_vm._v("$" + _vm._s(model.costPerRequest || 0.05))])]), _vm._v(" "), _c('div', {
      staticClass: "spec-item"
    }, [_c('span', {
      staticClass: "spec-label"
    }, [_vm._v("Latency")]), _vm._v(" "), _c('span', {
      staticClass: "spec-value"
    }, [_vm._v("Fast")])])]), _vm._v(" "), _c('div', {
      staticClass: "card-footer"
    }, [_vm.isLoggedIn ? _c('button', {
      staticClass: "action-btn",
      on: {
        "click": function ($event) {
          return _vm.useModel(model.id);
        }
      }
    }, [_c('span', [_vm._v("Deploy Model")]), _vm._v(" "), _c('svg', {
      attrs: {
        "width": "16",
        "height": "16",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "stroke": "currentColor",
        "stroke-width": "2"
      }
    }, [_c('path', {
      attrs: {
        "d": "M5 12h14M12 5l7 7-7 7"
      }
    })])]) : _c('button', {
      staticClass: "action-btn locked",
      on: {
        "click": function ($event) {
          return _vm.$router.push('/login');
        }
      }
    }, [_c('span', [_vm._v("Authentication Required")]), _vm._v(" "), _c('svg', {
      attrs: {
        "width": "14",
        "height": "14",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "stroke": "currentColor",
        "stroke-width": "2"
      }
    }, [_c('rect', {
      attrs: {
        "x": "3",
        "y": "11",
        "width": "18",
        "height": "11",
        "rx": "2",
        "ry": "2"
      }
    }), _vm._v(" "), _c('path', {
      attrs: {
        "d": "M7 11V7a5 5 0 0 1 10 0v4"
      }
    })])])]), _vm._v(" "), _c('div', {
      staticClass: "card-glow"
    })]);
  }), 0), _vm._ssrNode(" " + (_vm.models.length === 0 && !_vm.loading ? "<div class=\"empty-state\" data-v-5b5d46c6><div class=\"loader-ring\" data-v-5b5d46c6></div> <p data-v-5b5d46c6>Synchronizing models repository...</p></div>" : "<!---->"))], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/models.vue?vue&type=template&id=5b5d46c6&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/models.vue?vue&type=script&lang=js
/* harmony default export */ var modelsvue_type_script_lang_js = ({
  name: 'ModelsPage',
  data() {
    return {
      models: [],
      isLoggedIn: false,
      loading: true
    };
  },
  mounted() {
    this.checkLoginState();
    this.loadModels();
  },
  methods: {
    checkLoginState() {
      if (false) {}
    },
    formatContext(value) {
      if (!value) return 'N/A';
      return value >= 1000 ? (value / 1000).toFixed(0) + 'M' : value + 'K';
    },
    async loadModels() {
      try {
        const response = await this.$axios.get('/models');
        this.models = response.data.models || [];
      } catch (error) {
        console.error('Error loading models:', error);
        // Show error to user instead of falling back to demo data
        this.models = [];
        // You could add a toast notification here
      } finally {
        this.loading = false;
      }
    },
    useModel(modelId) {
      this.$router.push({
        path: '/model-usage',
        query: {
          model: modelId
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/models.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_modelsvue_type_script_lang_js = (modelsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/models.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_modelsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5b5d46c6",
  "584c6726"
  
)

/* harmony default export */ var models = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=models.js.map