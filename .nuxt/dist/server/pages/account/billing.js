exports.ids = [2];
exports.modules = {

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("312d9193", content, true, context)
};

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_vue_vue_type_style_index_0_id_be93a89e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_vue_vue_type_style_index_0_id_be93a89e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_vue_vue_type_style_index_0_id_be93a89e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_vue_vue_type_style_index_0_id_be93a89e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_vue_vue_type_style_index_0_id_be93a89e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-wrapper[data-v-be93a89e]{--bg-dark:#09090b;--surface:rgba(20,20,23,.6);--border:hsla(0,0%,100%,.08);--text-main:#fff;--text-muted:#94a3b8;--accent:#3b82f6;--accent-purple:#8b5cf6;--font-mono:\"Fira Code\",monospace;background-color:#09090b;background-color:var(--bg-dark);color:#fff;color:var(--text-main);display:flex;font-family:\"Inter\",sans-serif;justify-content:center;min-height:100vh;overflow-x:hidden;position:relative}.bg-noise[data-v-be93a89e]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='a'%3E%3CfeTurbulence baseFrequency='.8' numOctaves='3' stitchTiles='stitch' type='fractalNoise'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='.04'/%3E%3C/svg%3E\");bottom:0;left:0;pointer-events:none;right:0;top:0}.bg-noise[data-v-be93a89e],.glow-orb[data-v-be93a89e]{position:absolute;z-index:0}.glow-orb[data-v-be93a89e]{border-radius:50%;filter:blur(120px);height:600px;opacity:.2;width:600px}.orb-1[data-v-be93a89e]{background:var(--accent);left:-10%;top:-10%}.orb-2[data-v-be93a89e]{background:var(--accent-purple);bottom:10%;right:-10%}.content-container[data-v-be93a89e]{max-width:1100px;padding:4rem 2rem;position:relative;width:100%;z-index:1}.header-section[data-v-be93a89e]{margin-bottom:4rem}.back-link[data-v-be93a89e]{align-items:center;color:var(--text-muted);display:inline-flex;font-size:.9rem;gap:.5rem;margin-bottom:1rem;-webkit-text-decoration:none;text-decoration:none;transition:color .2s}.back-link[data-v-be93a89e]:hover{color:var(--text-main)}.page-title[data-v-be93a89e]{font-size:3rem;font-weight:800;letter-spacing:-.02em;margin:0}.billing-grid[data-v-be93a89e]{display:grid;grid-template-columns:1fr 1.5fr;grid-gap:3rem;gap:3rem}.balance-section[data-v-be93a89e]{display:flex;flex-direction:column;gap:1.5rem}.balance-card[data-v-be93a89e]{background:linear-gradient(145deg,#1e1e24,#121215);border:1px solid var(--border);border-radius:24px;box-shadow:0 20px 40px -10px rgba(0,0,0,.5);overflow:hidden;padding:2rem;position:relative}.card-label[data-v-be93a89e]{align-items:center;color:var(--text-muted);display:flex;font-size:.9rem;gap:.5rem;letter-spacing:.05em;margin-bottom:1.5rem;text-transform:uppercase}.balance-amount[data-v-be93a89e]{align-items:flex-start;display:flex;line-height:1;margin-bottom:2.5rem}.currency[data-v-be93a89e]{color:var(--accent);font-size:2rem;margin-right:.25rem;margin-top:.5rem}.value[data-v-be93a89e]{color:#fff;font-family:var(--font-mono);font-size:4.5rem;font-weight:700;letter-spacing:-.05em}.balance-meta[data-v-be93a89e]{border-top:1px solid hsla(0,0%,100%,.1);display:flex;justify-content:space-between;padding-top:1.5rem}.meta-item[data-v-be93a89e]{display:flex;flex-direction:column;gap:.25rem}.meta-item .label[data-v-be93a89e]{color:var(--text-muted);font-size:.8rem}.meta-item .data[data-v-be93a89e]{color:var(--text-main);font-family:var(--font-mono);font-size:1rem;font-weight:600}.balance-glow[data-v-be93a89e]{background:radial-gradient(circle,rgba(59,130,246,.3),transparent 70%);filter:blur(50px);height:200px;pointer-events:none;position:absolute;right:0;top:0;width:200px}.info-box[data-v-be93a89e]{background:hsla(0,0%,100%,.03);border:1px solid var(--border);border-radius:12px;color:var(--text-muted);font-size:.85rem;line-height:1.6;padding:1rem}.purchase-section[data-v-be93a89e]{display:flex;flex-direction:column}.section-title[data-v-be93a89e]{color:var(--text-main);font-size:1.2rem;font-weight:600;margin-bottom:1.5rem}.packages-grid[data-v-be93a89e]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:1rem;gap:1rem}.package-card[data-v-be93a89e]{background:var(--surface);border:1px solid var(--border);border-radius:16px;cursor:pointer;display:flex;flex-direction:column;justify-content:space-between;min-height:220px;padding:1.5rem;position:relative;text-align:left;transition:all .3s ease}.package-card[data-v-be93a89e]:hover:not(:disabled){background:hsla(0,0%,100%,.05);border-color:var(--accent);transform:translateY(-4px)}.package-card.featured[data-v-be93a89e]{background:linear-gradient(180deg,rgba(139,92,246,.05),rgba(20,20,23,.6));border-color:rgba(139,92,246,.5)}.badge-featured[data-v-be93a89e]{background:var(--accent-purple);border-radius:4px;color:#fff;font-size:.7rem;font-weight:700;padding:2px 8px;position:absolute;right:12px;text-transform:uppercase;top:12px}.pkg-amount[data-v-be93a89e]{color:#fff;font-family:var(--font-mono);font-size:2rem;font-weight:700}.pkg-credits[data-v-be93a89e]{color:var(--text-main);font-size:1.1rem;font-weight:600;margin-bottom:.25rem}.pkg-desc[data-v-be93a89e]{color:var(--text-muted);font-size:.85rem}.pkg-body[data-v-be93a89e]{flex-grow:1;margin:1.5rem 0}.pkg-footer[data-v-be93a89e]{align-items:center;color:var(--accent);display:flex;font-size:.9rem;font-weight:600;justify-content:space-between}.arrow-icon[data-v-be93a89e]{transition:transform .2s}.package-card:hover .arrow-icon[data-v-be93a89e]{transform:translateX(4px)}.package-card.processing[data-v-be93a89e]{cursor:default;opacity:.8}.loader[data-v-be93a89e]{animation:spin-be93a89e .8s linear infinite;border:2px solid var(--accent);border-radius:50%;border-top:2px solid transparent;height:16px;width:16px}@keyframes spin-be93a89e{to{transform:rotate(1turn)}}@media (max-width:850px){.billing-grid[data-v-be93a89e]{grid-template-columns:1fr}.balance-card[data-v-be93a89e]{padding:1.5rem}.value[data-v-be93a89e]{font-size:3.5rem}}@media (max-width:480px){.content-container[data-v-be93a89e]{padding:2rem 1rem}.packages-grid[data-v-be93a89e]{grid-template-columns:1fr}.page-title[data-v-be93a89e]{font-size:2.5rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/billing.vue?vue&type=template&id=be93a89e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-wrapper"
  }, [_vm._ssrNode("<div class=\"bg-noise\" data-v-be93a89e></div> <div class=\"glow-orb orb-1\" data-v-be93a89e></div> <div class=\"glow-orb orb-2\" data-v-be93a89e></div> "), _vm.user ? _vm._ssrNode("<div class=\"content-container\" data-v-be93a89e>", "</div>", [_vm._ssrNode("<div class=\"header-section\" data-v-be93a89e>", "</div>", [_c('NuxtLink', {
    staticClass: "back-link",
    attrs: {
      "to": "/account"
    }
  }, [_c('svg', {
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
      "x1": "19",
      "y1": "12",
      "x2": "5",
      "y2": "12"
    }
  }), _c('polyline', {
    attrs: {
      "points": "12 19 5 12 12 5"
    }
  })]), _vm._v("\n        Return to Dashboard\n      ")]), _vm._ssrNode(" <h1 class=\"page-title\" data-v-be93a89e>Credits &amp; Billing</h1>")], 2), _vm._ssrNode(" <div class=\"billing-grid\" data-v-be93a89e><div class=\"balance-section\" data-v-be93a89e><div class=\"balance-card\" data-v-be93a89e><div class=\"card-label\" data-v-be93a89e><span class=\"icon-wallet\" data-v-be93a89e><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-be93a89e><rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\" data-v-be93a89e></rect><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\" data-v-be93a89e></path></svg></span>\n            Available Funds\n          </div> <div class=\"balance-amount\" data-v-be93a89e><span class=\"currency\" data-v-be93a89e>$</span> <span class=\"value\" data-v-be93a89e>" + _vm._ssrEscape(_vm._s(_vm.user.balance.toFixed(2))) + "</span></div> <div class=\"balance-meta\" data-v-be93a89e><div class=\"meta-item\" data-v-be93a89e><span class=\"label\" data-v-be93a89e>Est. Capacity</span> <span class=\"data\" data-v-be93a89e>" + _vm._ssrEscape("~" + _vm._s(Math.floor(_vm.user.balance / 0.05)) + " reqs") + "</span></div> <div class=\"meta-item\" data-v-be93a89e><span class=\"label\" data-v-be93a89e>Cost / Req</span> <span class=\"data\" data-v-be93a89e>$0.05</span></div></div> <div class=\"balance-glow\" data-v-be93a89e></div></div> <div class=\"info-box\" data-v-be93a89e><p data-v-be93a89e>Funds are deducted in real-time per API request. Credits do not expire.</p></div></div> <div class=\"purchase-section\" data-v-be93a89e><h2 class=\"section-title\" data-v-be93a89e>Top Up Balance</h2> <div class=\"packages-grid\" data-v-be93a89e>" + _vm._ssrList(_vm.packages, function (pkg) {
    return "<a" + _vm._ssrAttr("href", `${pkg.link}?wanted=true&user_id=${_vm.user.id}`) + " data-gumroad-single-product=\"true\"" + _vm._ssrClass("package-card", {
      'featured': pkg.featured
    }) + " data-v-be93a89e>" + (pkg.featured ? "<div class=\"badge-featured\" data-v-be93a89e>Best Value</div>" : "<!---->") + " <div class=\"pkg-header\" data-v-be93a89e><span class=\"pkg-amount\" data-v-be93a89e>" + _vm._ssrEscape("$" + _vm._s(pkg.amount)) + "</span></div> <div class=\"pkg-body\" data-v-be93a89e><div class=\"pkg-credits\" data-v-be93a89e>" + _vm._ssrEscape(_vm._s(pkg.requests) + " Credits") + "</div> <div class=\"pkg-desc\" data-v-be93a89e>" + _vm._ssrEscape("Ideal for " + _vm._s(pkg.label)) + "</div></div> <div class=\"pkg-footer\" data-v-be93a89e><span class=\"btn-text\" data-v-be93a89e>Purchase</span> <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"arrow-icon\" data-v-be93a89e><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\" data-v-be93a89e></line><polyline points=\"12 5 19 12 12 19\" data-v-be93a89e></polyline></svg></div></a>";
  }) + "</div></div></div>")], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/account/billing.vue?vue&type=template&id=be93a89e&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/billing.vue?vue&type=script&lang=js
/* harmony default export */ var billingvue_type_script_lang_js = ({
  name: 'BillingPage',
  data() {
    return {
      user: null,
      loading: true,
      processingAmount: null,
      packages: [{
        amount: 5,
        requests: '100',
        label: 'Testing',
        featured: false,
        link: this.$config.gumroad.link5
      }, {
        amount: 10,
        requests: '200',
        label: 'Startups',
        featured: false,
        link: this.$config.gumroad.link10
      }, {
        amount: 25,
        requests: '500',
        label: 'Scaling',
        featured: true,
        link: this.$config.gumroad.link25
      }]
    };
  },
  async mounted() {
    // Load Gumroad Script
    const script = document.createElement('script');
    script.src = 'https://gumroad.com/js/gumroad.js';
    script.async = true;
    document.head.appendChild(script);
    try {
      const userData = localStorage.getItem('user');
      if (!userData) {
        this.$router.push('/login');
        return;
      }
      this.user = JSON.parse(userData);
      await this.loadBalance();
    } catch (error) {
      this.$router.push('/login');
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async loadBalance() {
      try {
        const token = localStorage.getItem('authToken');
        const response = await this.$axios.get('/billing/balance', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.user.balance = response.data.balance;
      } catch (error) {
        console.error(error);
      }
    },
    async addCredits(amount) {
      this.processingAmount = amount;

      // Имитация задержки сети для UX
      await new Promise(resolve => setTimeout(resolve, 800));
      try {
        const token = localStorage.getItem('authToken');
        const response = await this.$axios.post('/billing/add-balance', {
          amount
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.user.balance = response.data.newBalance;
        // Обновляем локального юзера
        localStorage.setItem('user', JSON.stringify(this.user));
      } catch (error) {
        alert('Transaction failed.');
      } finally {
        this.processingAmount = null;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/account/billing.vue?vue&type=script&lang=js
 /* harmony default export */ var account_billingvue_type_script_lang_js = (billingvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/account/billing.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_billingvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "be93a89e",
  "65011059"
  
)

/* harmony default export */ var billing = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=billing.js.map