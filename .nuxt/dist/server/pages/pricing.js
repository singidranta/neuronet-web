exports.ids = [11];
exports.modules = {

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d9b058b6", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_style_index_0_id_2d1b353c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_style_index_0_id_2d1b353c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_style_index_0_id_2d1b353c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_style_index_0_id_2d1b353c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_style_index_0_id_2d1b353c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-wrapper[data-v-2d1b353c]{--bg-dark:#050507;--card-surface:hsla(0,0%,100%,.03);--card-border:hsla(0,0%,100%,.06);--primary:#6366f1;--secondary:#a855f7;--accent-cyan:#06b6d4;--text-main:#fff;--text-muted:#94a3b8;background-color:#050507;background-color:var(--bg-dark);color:#fff;color:var(--text-main);font-family:\"Inter\",sans-serif;min-height:100vh;overflow-x:hidden;position:relative}.ambient-light[data-v-2d1b353c]{border-radius:50%;filter:blur(100px);height:600px;opacity:.25;pointer-events:none;position:absolute;width:600px;z-index:0}.orb-1[data-v-2d1b353c]{background:radial-gradient(circle,var(--primary),transparent 70%);left:-100px;top:-100px}.orb-2[data-v-2d1b353c]{background:radial-gradient(circle,var(--secondary),transparent 70%);right:-200px;top:40%}.grid-overlay[data-v-2d1b353c]{background-image:linear-gradient(hsla(0,0%,100%,.03) 1px,transparent 0),linear-gradient(90deg,hsla(0,0%,100%,.03) 1px,transparent 0);background-size:40px 40px;bottom:0;left:0;-webkit-mask-image:linear-gradient(180deg,#000 20%,transparent 90%);mask-image:linear-gradient(180deg,#000 20%,transparent 90%);pointer-events:none;position:absolute;right:0;top:0;z-index:0}.pricing-container[data-v-2d1b353c]{margin:0 auto;max-width:1200px;padding:6rem 2rem;position:relative;z-index:1}.pricing-header[data-v-2d1b353c]{align-items:center;display:flex;flex-direction:column;margin-bottom:6rem;text-align:center}.pill-badge[data-v-2d1b353c]{background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.2);border-radius:100px;color:#818cf8;font-size:.85rem;font-weight:600;letter-spacing:.05em;margin-bottom:1.5rem;padding:.5rem 1rem;text-transform:uppercase}.page-title[data-v-2d1b353c]{font-size:4rem;font-weight:800;letter-spacing:-.03em;line-height:1.1;margin-bottom:1.5rem}.text-gradient[data-v-2d1b353c]{background:linear-gradient(135deg,#fff 30%,var(--primary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.page-subtitle[data-v-2d1b353c]{color:var(--text-muted);font-size:1.25rem;line-height:1.6;max-width:600px}.steps-grid[data-v-2d1b353c]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:2rem;gap:2rem;margin-bottom:8rem}.step-card[data-v-2d1b353c]{backdrop-filter:blur(10px);background:var(--card-surface);border:1px solid var(--card-border);border-radius:20px;overflow:hidden;padding:2.5rem;position:relative;transition:all .4s ease}.step-card[data-v-2d1b353c]:hover{background:hsla(0,0%,100%,.05);border-color:hsla(0,0%,100%,.15);transform:translateY(-5px)}.step-number[data-v-2d1b353c]{color:hsla(0,0%,100%,.03);font-family:monospace;font-size:4rem;font-weight:900;pointer-events:none;position:absolute;right:1.5rem;top:.5rem}.step-content h3[data-v-2d1b353c]{font-size:1.5rem;font-weight:700;margin-bottom:.75rem}.step-content p[data-v-2d1b353c]{color:var(--text-muted);font-size:1rem;line-height:1.6;margin:0}.model-pricing-section[data-v-2d1b353c]{margin-bottom:8rem}.section-header[data-v-2d1b353c]{margin-bottom:3rem;text-align:center}.section-title[data-v-2d1b353c]{font-size:2.5rem;font-weight:700;margin-bottom:.5rem}.section-subtitle[data-v-2d1b353c]{color:var(--text-muted)}.pricing-table-wrapper[data-v-2d1b353c]{background:linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,.02));border-radius:24px;padding:1px}.pricing-table[data-v-2d1b353c]{background:#0a0a0c;border-radius:23px;overflow:hidden}.table-header[data-v-2d1b353c]{background:hsla(0,0%,100%,.02);color:var(--text-muted);font-size:.75rem;font-weight:600;letter-spacing:.1em;padding:1.25rem 2rem;text-transform:uppercase}.table-header[data-v-2d1b353c],.table-row[data-v-2d1b353c]{border-bottom:1px solid var(--card-border);display:grid;grid-template-columns:2fr 1fr 1fr 1fr}.table-row[data-v-2d1b353c]{align-items:center;padding:1.5rem 2rem;transition:background .2s}.table-row[data-v-2d1b353c]:last-child{border-bottom:none}.table-row[data-v-2d1b353c]:hover{background:hsla(0,0%,100%,.03)}.model-info[data-v-2d1b353c]{display:flex;flex-direction:column}.model-name[data-v-2d1b353c]{color:#fff;font-size:1.1rem;font-weight:700}.model-provider[data-v-2d1b353c]{color:var(--text-muted);font-size:.85rem;margin-top:.25rem}.context-tag[data-v-2d1b353c],.price-tag[data-v-2d1b353c]{align-items:center;display:flex;font-family:\"Fira Code\",\"Roboto Mono\",monospace;font-size:1rem;gap:.5rem}.price-tag[data-v-2d1b353c]{color:var(--accent-cyan);font-weight:500}.currency[data-v-2d1b353c]{font-size:.9em;opacity:.5}.context-tag[data-v-2d1b353c]{color:var(--text-muted);font-size:.9rem}.category-badge[data-v-2d1b353c]{border-radius:6px;display:inline-block;font-size:.75rem;font-weight:700;letter-spacing:.05em;min-width:80px;padding:.35rem .75rem;text-align:center;text-transform:uppercase}.category-badge.premium[data-v-2d1b353c]{background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.3);box-shadow:0 0 10px rgba(168,85,247,.1);color:#d8b4fe}.category-badge.standard[data-v-2d1b353c]{background:hsla(0,0%,100%,.05);border:1px solid hsla(0,0%,100%,.1);color:#cbd5e1}.category-badge.image[data-v-2d1b353c]{background:rgba(6,182,212,.1);border:1px solid rgba(6,182,212,.3);color:#67e8f9}.faq-grid[data-v-2d1b353c]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:2rem;gap:2rem}.faq-card[data-v-2d1b353c]{background:transparent;border:1px solid var(--card-border);border-radius:16px;padding:2rem;transition:all .3s ease}.faq-card[data-v-2d1b353c]:hover{border-color:var(--primary);transform:translateY(-2px)}.faq-question[data-v-2d1b353c]{color:#fff;font-size:1.2rem;margin-bottom:1rem}.faq-answer[data-v-2d1b353c]{color:var(--text-muted);line-height:1.6}@media (max-width:1024px){.steps-grid[data-v-2d1b353c]{grid-template-columns:1fr}.table-header[data-v-2d1b353c]{display:none}.table-row[data-v-2d1b353c]{background:hsla(0,0%,100%,.02);border:1px solid var(--card-border);border-radius:12px;gap:1rem;grid-template-columns:1fr;margin-bottom:1rem;padding:1.5rem}.col-cat[data-v-2d1b353c]{justify-self:start}}@media (max-width:768px){.page-title[data-v-2d1b353c]{font-size:2.5rem}.pricing-container[data-v-2d1b353c]{padding:3rem 1.5rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pricing.vue?vue&type=template&id=2d1b353c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-wrapper"
  }, [_vm._ssrNode("<div class=\"ambient-light orb-1\" data-v-2d1b353c></div> <div class=\"ambient-light orb-2\" data-v-2d1b353c></div> <div class=\"grid-overlay\" data-v-2d1b353c></div> <div class=\"pricing-container\" data-v-2d1b353c><div class=\"pricing-header\" data-v-2d1b353c><div class=\"pill-badge\" data-v-2d1b353c>Transparent Costs</div> <h1 class=\"page-title\" data-v-2d1b353c>Pay as you <span class=\"text-gradient\" data-v-2d1b353c>scale</span></h1> <p class=\"page-subtitle\" data-v-2d1b353c>\n        Zero commitments. Zero hidden fees. Access state-of-the-art AI models with a unified API key.\n      </p></div> <div class=\"steps-grid\" data-v-2d1b353c><div class=\"step-card\" data-v-2d1b353c><div class=\"step-number\" data-v-2d1b353c>01</div> <div class=\"step-content\" data-v-2d1b353c><h3 data-v-2d1b353c>Create Account</h3> <p data-v-2d1b353c>Get instant access to the dashboard without credit card requirements.</p></div> <div class=\"step-glow\" data-v-2d1b353c></div></div> <div class=\"step-card\" data-v-2d1b353c><div class=\"step-number\" data-v-2d1b353c>02</div> <div class=\"step-content\" data-v-2d1b353c><h3 data-v-2d1b353c>Generate Key</h3> <p data-v-2d1b353c>Create a secure API key to authenticate your requests instantly.</p></div> <div class=\"step-glow\" data-v-2d1b353c></div></div> <div class=\"step-card\" data-v-2d1b353c><div class=\"step-number\" data-v-2d1b353c>03</div> <div class=\"step-content\" data-v-2d1b353c><h3 data-v-2d1b353c>Start Building</h3> <p data-v-2d1b353c>Integration complete. Pay only for the tokens you actually consume.</p></div> <div class=\"step-glow\" data-v-2d1b353c></div></div></div> <div class=\"model-pricing-section\" data-v-2d1b353c><div class=\"section-header\" data-v-2d1b353c><h2 class=\"section-title\" data-v-2d1b353c>Model Economics</h2> <p class=\"section-subtitle\" data-v-2d1b353c>Live exchange rates for compute power</p></div> <div class=\"pricing-table-wrapper\" data-v-2d1b353c><div class=\"pricing-table\" data-v-2d1b353c><div class=\"table-header\" data-v-2d1b353c><div class=\"col-model\" data-v-2d1b353c>Model / Provider</div> <div class=\"col-price\" data-v-2d1b353c>Cost / Req</div> <div class=\"col-context\" data-v-2d1b353c>Context</div> <div class=\"col-cat\" data-v-2d1b353c>Tier</div></div> " + _vm._ssrList(_vm.modelPricing, function (model) {
    return "<div class=\"table-row\" data-v-2d1b353c><div class=\"col-model model-info\" data-v-2d1b353c><div class=\"model-name\" data-v-2d1b353c>" + _vm._ssrEscape(_vm._s(model.name)) + "</div> <div class=\"model-provider\" data-v-2d1b353c>" + _vm._ssrEscape(_vm._s(model.provider)) + "</div></div> <div class=\"col-price price-tag\" data-v-2d1b353c><span class=\"currency\" data-v-2d1b353c>$</span>" + _vm._ssrEscape(_vm._s(model.price) + "\n            ") + "</div> <div class=\"col-context context-tag\" data-v-2d1b353c><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-2d1b353c><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\" data-v-2d1b353c></path></svg>" + _vm._ssrEscape("\n              " + _vm._s(model.context) + "\n            ") + "</div> <div class=\"col-cat\" data-v-2d1b353c><span" + _vm._ssrClass("category-badge", model.category.toLowerCase()) + " data-v-2d1b353c>" + _vm._ssrEscape("\n                " + _vm._s(model.category) + "\n              ") + "</span></div></div>";
  }) + "</div></div></div> <div class=\"faq-section\" data-v-2d1b353c><h2 class=\"section-title\" data-v-2d1b353c>Common Queries</h2> <div class=\"faq-grid\" data-v-2d1b353c><div class=\"faq-card\" data-v-2d1b353c><h3 class=\"faq-question\" data-v-2d1b353c>How does billing work?</h3> <p class=\"faq-answer\" data-v-2d1b353c>We use a pre-paid credit system. Top up your balance and API usage is deducted in real-time. No monthly bills to surprise you.</p></div> <div class=\"faq-card\" data-v-2d1b353c><h3 class=\"faq-question\" data-v-2d1b353c>Minimum deposit?</h3> <p class=\"faq-answer\" data-v-2d1b353c>Start with as little as $10. Credits never expire, making it perfect for testing and scaling at your own pace.</p></div> <div class=\"faq-card\" data-v-2d1b353c><h3 class=\"faq-question\" data-v-2d1b353c>Enterprise limits?</h3> <p class=\"faq-answer\" data-v-2d1b353c>Need high throughput? Contact our sales team for dedicated instances and custom rate limits.</p></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pricing.vue?vue&type=template&id=2d1b353c&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pricing.vue?vue&type=script&lang=js
/* harmony default export */ var pricingvue_type_script_lang_js = ({
  name: 'PricingPage',
  data() {
    return {
      modelPricing: [{
        name: 'GPT-4 Turbo',
        provider: 'OpenAI',
        price: '0.050',
        context: '128K',
        category: 'Premium'
      }, {
        name: 'Claude 3 Opus',
        provider: 'Anthropic',
        price: '0.080',
        context: '200K',
        category: 'Premium'
      }, {
        name: 'Gemini 1.5 Pro',
        provider: 'Google',
        price: '0.070',
        context: '1M',
        category: 'Premium'
      }, {
        name: 'GPT-3.5 Turbo',
        provider: 'OpenAI',
        price: '0.010',
        context: '16K',
        category: 'Standard'
      }, {
        name: 'Llama 3 70B',
        provider: 'Meta',
        price: '0.020',
        context: '8K',
        category: 'Standard'
      }, {
        name: 'Mistral Large',
        provider: 'Mistral',
        price: '0.040',
        context: '32K',
        category: 'Standard'
      }, {
        name: 'Stable Diffusion XL',
        provider: 'Stability AI',
        price: '0.100',
        context: 'N/A',
        category: 'Image'
      }, {
        name: 'DALL-E 3',
        provider: 'OpenAI',
        price: '0.120',
        context: 'N/A',
        category: 'Image'
      }]
    };
  }
});
// CONCATENATED MODULE: ./pages/pricing.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_pricingvue_type_script_lang_js = (pricingvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/pricing.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_pricingvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2d1b353c",
  "9774cf5a"
  
)

/* harmony default export */ var pricing = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pricing.js.map