exports.ids = [10];
exports.modules = {

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("227b7ec6", content, true, context)
};

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15ca453d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15ca453d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15ca453d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15ca453d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15ca453d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-wrapper[data-v-15ca453d]{--bg-dark:#030305;--card-surface:hsla(0,0%,100%,.02);--card-border:hsla(0,0%,100%,.05);--text-main:#fff;--text-muted:#94a3b8;--accent-blue:#3b82f6;--accent-cyan:#06b6d4;--accent-purple:#8b5cf6;--font-mono:\"Fira Code\",monospace;background-color:#030305;background-color:var(--bg-dark);color:#fff;color:var(--text-main);font-family:\"Inter\",sans-serif;min-height:100vh;overflow-x:hidden;position:relative}.bg-noise[data-v-15ca453d]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='a'%3E%3CfeTurbulence baseFrequency='.8' numOctaves='3' stitchTiles='stitch' type='fractalNoise'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='.04'/%3E%3C/svg%3E\");bottom:0;left:0;pointer-events:none;right:0;top:0}.bg-noise[data-v-15ca453d],.glow-orb[data-v-15ca453d]{position:absolute;z-index:0}.glow-orb[data-v-15ca453d]{border-radius:50%;filter:blur(120px);height:600px;opacity:.2;width:600px}.orb-1[data-v-15ca453d]{background:var(--accent-blue);left:-10%;top:-10%}.orb-2[data-v-15ca453d]{background:var(--accent-purple);bottom:10%;right:-10%}.content-container[data-v-15ca453d]{margin:0 auto;max-width:1280px;padding:6rem 2rem;position:relative;z-index:1}.header-section[data-v-15ca453d]{align-items:center;display:flex;flex-direction:column;margin-bottom:6rem;text-align:center}.badge-pill[data-v-15ca453d]{align-items:center;backdrop-filter:blur(10px);background:hsla(0,0%,100%,.05);border:1px solid var(--card-border);border-radius:100px;color:var(--text-muted);display:inline-flex;font-size:.85rem;gap:6px;margin-bottom:1.5rem;padding:6px 16px}.page-title[data-v-15ca453d]{font-size:4rem;font-weight:800;letter-spacing:-.02em;line-height:1.1;margin-bottom:1.5rem}.text-gradient[data-v-15ca453d]{background:linear-gradient(135deg,#fff 20%,#67e8f9);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.page-subtitle[data-v-15ca453d]{color:var(--text-muted);font-size:1.2rem;line-height:1.6;max-width:600px}.models-grid[data-v-15ca453d]{display:grid;grid-template-columns:repeat(auto-fit,minmax(500px,1fr));grid-gap:2rem;gap:2rem;margin-bottom:8rem}.model-card[data-v-15ca453d]{animation:fadeUp-15ca453d .8s ease-out backwards;animation-delay:var(--delay);background:var(--card-surface);border:1px solid var(--card-border);border-radius:24px;overflow:hidden;padding:3rem;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1)}.model-card[data-v-15ca453d]:hover{background:hsla(0,0%,100%,.04);transform:translateY(-5px)}.card-content[data-v-15ca453d]{position:relative;z-index:2}.icon-wrapper[data-v-15ca453d]{align-items:center;background:rgba(6,182,212,.1);border-radius:14px;color:var(--accent-cyan);display:flex;height:56px;justify-content:center;margin-bottom:2rem;transition:all .3s ease;width:56px}.icon-wrapper svg[data-v-15ca453d]{height:28px;width:28px}.model-card:hover .icon-wrapper[data-v-15ca453d]{background:var(--accent-cyan);box-shadow:0 0 30px rgba(6,182,212,.4);color:#fff}.card-title[data-v-15ca453d]{color:#fff;font-size:1.75rem;font-weight:700;margin-bottom:1rem}.card-desc[data-v-15ca453d]{color:var(--text-muted);font-size:1.05rem;line-height:1.7;margin-bottom:2rem;min-height:3.4em}.tags-wrapper[data-v-15ca453d]{display:flex;flex-wrap:wrap;gap:.75rem}.tech-tag[data-v-15ca453d]{background:rgba(59,130,246,.1);border:1px solid rgba(59,130,246,.2);border-radius:6px;color:#93c5fd;font-family:var(--font-mono);font-size:.75rem;letter-spacing:.05em;padding:.4rem .8rem;text-transform:uppercase}.card-border-glow[data-v-15ca453d]{background:linear-gradient(135deg,hsla(0,0%,100%,.1),transparent 50%);border-radius:24px;bottom:0;left:0;-webkit-mask:linear-gradient(#fff,#fff 0) content-box,linear-gradient(#fff,#fff 0);mask:linear-gradient(#fff,#fff 0) content-box,linear-gradient(#fff,#fff 0);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s}.model-card:hover .card-border-glow[data-v-15ca453d]{background:linear-gradient(135deg,var(--accent-cyan),transparent 60%);opacity:1}.cta-section[data-v-15ca453d]{align-items:center;background:linear-gradient(180deg,hsla(0,0%,100%,.03),hsla(0,0%,100%,.01));border:1px solid var(--card-border);border-radius:32px;display:flex;flex-direction:column;overflow:hidden;padding:4rem;position:relative;text-align:center}.cta-content[data-v-15ca453d]{position:relative;z-index:2}.cta-title[data-v-15ca453d]{color:#fff;font-size:2.5rem;font-weight:800;margin-bottom:1rem}.cta-text[data-v-15ca453d]{color:var(--text-muted);font-size:1.1rem;margin-bottom:2.5rem}.cta-actions[data-v-15ca453d]{display:flex;gap:1rem;justify-content:center}.btn[data-v-15ca453d]{align-items:center;border-radius:12px;cursor:pointer;display:inline-flex;font-size:1rem;font-weight:600;gap:.5rem;padding:1rem 2rem;-webkit-text-decoration:none;text-decoration:none;transition:all .3s ease}.btn-primary[data-v-15ca453d]{background:#fff;border:1px solid #fff;color:#000}.btn-primary[data-v-15ca453d]:hover{background:#e2e8f0;box-shadow:0 10px 30px hsla(0,0%,100%,.2);transform:translateY(-2px)}.btn-glass[data-v-15ca453d]{background:hsla(0,0%,100%,.05);border:1px solid hsla(0,0%,100%,.1);color:#fff}.btn-glass[data-v-15ca453d]:hover{background:hsla(0,0%,100%,.1);border-color:#fff}.cta-bg-glow[data-v-15ca453d]{background:radial-gradient(circle,rgba(59,130,246,.15),transparent 70%);height:600px;left:50%;pointer-events:none;position:absolute;top:-50%;transform:translateX(-50%);width:600px;z-index:1}@keyframes fadeUp-15ca453d{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@media (max-width:768px){.page-title[data-v-15ca453d]{font-size:2.5rem}.models-grid[data-v-15ca453d]{grid-template-columns:1fr}.model-card[data-v-15ca453d]{padding:2rem}.cta-section[data-v-15ca453d]{padding:3rem 1.5rem}.cta-actions[data-v-15ca453d]{flex-direction:column;width:100%}.btn[data-v-15ca453d]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/models/index.vue?vue&type=template&id=15ca453d&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-wrapper"
  }, [_vm._ssrNode("<div class=\"bg-noise\" data-v-15ca453d></div> <div class=\"glow-orb orb-1\" data-v-15ca453d></div> <div class=\"glow-orb orb-2\" data-v-15ca453d></div> "), _vm._ssrNode("<div class=\"content-container\" data-v-15ca453d>", "</div>", [_vm._ssrNode("<div class=\"header-section\" data-v-15ca453d><div class=\"badge-pill\" data-v-15ca453d><span class=\"sparkle\" data-v-15ca453d>✨</span> Capabilities\n      </div> <h1 class=\"page-title\" data-v-15ca453d>Intelligence <span class=\"text-gradient\" data-v-15ca453d>Unleashed</span></h1> <p class=\"page-subtitle\" data-v-15ca453d>\n        A comprehensive suite of neural networks designed to perceive, reason, and generate value.\n      </p></div> "), _vm._ssrNode("<div class=\"models-grid\" data-v-15ca453d>", "</div>", _vm._l(_vm.categories, function (category, index) {
    return _vm._ssrNode("<div class=\"model-card\"" + _vm._ssrStyle(null, {
      '--delay': index * 0.1 + 's'
    }, null) + " data-v-15ca453d>", "</div>", [_vm._ssrNode("<div class=\"card-content\" data-v-15ca453d>", "</div>", [_vm._ssrNode("<div class=\"icon-wrapper\" data-v-15ca453d>", "</div>", [_c(_vm.getIcon(category.title), {
      tag: "component"
    })], 1), _vm._ssrNode(" <h2 class=\"card-title\" data-v-15ca453d>" + _vm._ssrEscape(_vm._s(category.title)) + "</h2> <p class=\"card-desc\" data-v-15ca453d>" + _vm._ssrEscape(_vm._s(category.description)) + "</p> <div class=\"tags-wrapper\" data-v-15ca453d>" + _vm._ssrList(category.features, function (tag) {
      return "<span class=\"tech-tag\" data-v-15ca453d>" + _vm._ssrEscape("\n              " + _vm._s(tag) + "\n            ") + "</span>";
    }) + "</div>")], 2), _vm._ssrNode(" <div class=\"card-border-glow\" data-v-15ca453d></div>")], 2);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cta-section\" data-v-15ca453d>", "</div>", [_vm._ssrNode("<div class=\"cta-content\" data-v-15ca453d>", "</div>", [_vm._ssrNode("<h2 class=\"cta-title\" data-v-15ca453d>Start building the future</h2> <p class=\"cta-text\" data-v-15ca453d>Deploy these models in seconds via our unified API.</p> "), _vm._ssrNode("<div class=\"cta-actions\" data-v-15ca453d>", "</div>", [_c('NuxtLink', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("\n            Initialize Project\n            "), _c('svg', {
    attrs: {
      "width": "20",
      "height": "20",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "stroke": "currentColor",
      "stroke-width": "2"
    }
  }, [_c('line', {
    attrs: {
      "x1": "5",
      "y1": "12",
      "x2": "19",
      "y2": "12"
    }
  }), _c('polyline', {
    attrs: {
      "points": "12 5 19 12 12 19"
    }
  })])]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "btn btn-glass",
    attrs: {
      "to": "/pricing"
    }
  }, [_vm._v("View Pricing")])], 2)], 2), _vm._ssrNode(" <div class=\"cta-bg-glow\" data-v-15ca453d></div>")], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/models/index.vue?vue&type=template&id=15ca453d&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/models/index.vue?vue&type=script&lang=js
// Simple SVG Components for icons
const IconNLP = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="8" y1="9" x2="16" y2="9"></line><line x1="8" y1="13" x2="14" y2="13"></line></svg>`
};
const IconVision = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`
};
const IconPredict = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`
};
const IconRecs = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`
};
/* harmony default export */ var modelsvue_type_script_lang_js = ({
  name: 'ModelsPage',
  data() {
    return {
      categories: [{
        title: 'Natural Language Processing',
        description: 'Semantic understanding engines capable of summarization, translation, and nuanced sentiment analysis.',
        features: ['Classifiers', 'Sentiment', 'Entity Extraction']
      }, {
        title: 'Computer Vision',
        description: 'High-fidelity image processing for object detection, facial recognition, and scene segmentation.',
        features: ['Object Detection', 'Segmentation', 'OCR']
      }, {
        title: 'Predictive Analytics',
        description: 'Turn historical data into future insights with our advanced forecasting algorithms.',
        features: ['Time Series', 'Risk Scoring', 'Demand Forecast']
      }, {
        title: 'Recommendation Engine',
        description: 'Personalize user experiences in real-time using hybrid filtering approaches.',
        features: ['Collaborative', 'Content-Based', 'Hybrid']
      }]
    };
  },
  methods: {
    getIcon(title) {
      if (title.includes('Language')) return IconNLP;
      if (title.includes('Vision')) return IconVision;
      if (title.includes('Predictive')) return IconPredict;
      return IconRecs;
    }
  }
});
// CONCATENATED MODULE: ./pages/models/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_modelsvue_type_script_lang_js = (modelsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/models/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(51)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_modelsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "15ca453d",
  "61e520ba"
  
)

/* harmony default export */ var models = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map