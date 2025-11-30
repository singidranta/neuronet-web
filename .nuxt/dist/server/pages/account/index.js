exports.ids = [4];
exports.modules = {

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3853e8a0", content, true, context)
};

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_461c1f15_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_461c1f15_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_461c1f15_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_461c1f15_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_461c1f15_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-wrapper[data-v-461c1f15]{--bg-dark:#09090b;--surface:#121215;--surface-hover:#1c1c20;--border:hsla(0,0%,100%,.08);--accent:#3b82f6;--accent-purple:#8b5cf6;--accent-danger:#ef4444;--text-main:#fff;--text-muted:#a1a1aa;--font-ui:\"Inter\",sans-serif;--font-mono:\"JetBrains Mono\",\"Fira Code\",monospace;background-color:#09090b;background-color:var(--bg-dark);color:#fff;color:var(--text-main);font-family:\"Inter\",sans-serif;font-family:var(--font-ui);min-height:100vh;overflow-x:hidden;padding-bottom:4rem;position:relative}.bg-noise[data-v-461c1f15]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='a'%3E%3CfeTurbulence baseFrequency='.65' numOctaves='3' stitchTiles='stitch' type='fractalNoise'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='.03'/%3E%3C/svg%3E\");bottom:0;left:0;right:0;top:0}.ambient-light[data-v-461c1f15],.bg-noise[data-v-461c1f15]{pointer-events:none;position:absolute}.ambient-light[data-v-461c1f15]{border-radius:50%;filter:blur(120px);height:600px;opacity:.15;width:600px}.light-1[data-v-461c1f15]{background:var(--accent);left:-10%;top:-20%}.light-2[data-v-461c1f15]{background:var(--accent-purple);bottom:-20%;right:-10%}.dashboard-container[data-v-461c1f15]{margin:0 auto;max-width:1200px;padding:4rem 2rem;position:relative;z-index:1}.dashboard-header[data-v-461c1f15]{align-items:center;display:flex;justify-content:space-between;margin-bottom:3rem}.user-welcome[data-v-461c1f15]{align-items:center;display:flex;gap:1.5rem}.avatar-placeholder[data-v-461c1f15]{align-items:center;background:linear-gradient(135deg,var(--surface-hover),var(--border));border:1px solid var(--border);border-radius:16px;color:var(--text-main);display:flex;font-size:1.5rem;font-weight:700;height:56px;justify-content:center;width:56px}.page-title[data-v-461c1f15]{font-size:1.75rem;font-weight:700;letter-spacing:-.02em;margin:0}.page-subtitle[data-v-461c1f15]{align-items:center;color:var(--text-muted);display:flex;font-size:.95rem;gap:.5rem;margin:.25rem 0 0}.status-online[data-v-461c1f15]{color:#10b981;font-size:.85rem;font-weight:500}.btn-icon[data-v-461c1f15]{align-items:center;background:var(--surface);border:1px solid var(--border);border-radius:10px;color:var(--text-muted);cursor:pointer;display:flex;height:40px;justify-content:center;transition:all .2s;width:40px}.btn-icon[data-v-461c1f15]:hover{background:var(--surface-hover);color:var(--text-main)}.bento-grid[data-v-461c1f15]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:1.5rem;gap:1.5rem;grid-auto-rows:minmax(180px,auto)}.bento-card[data-v-461c1f15]{background:var(--surface);border:1px solid var(--border);border-radius:24px;display:flex;flex-direction:column;overflow:hidden;padding:1.5rem;position:relative;transition:transform .2s,border-color .2s}.bento-card[data-v-461c1f15]:hover{border-color:hsla(0,0%,100%,.15)}.card-label[data-v-461c1f15]{align-items:center;color:var(--text-muted);display:flex;font-size:.85rem;font-weight:600;justify-content:space-between;letter-spacing:.05em;margin-bottom:1rem;text-transform:uppercase}.card-balance[data-v-461c1f15]{background:linear-gradient(135deg,#0f172a,#1e1b4b);border-color:rgba(59,130,246,.3);grid-row:span 2}.card-inner[data-v-461c1f15]{display:flex;flex-direction:column;height:100%;position:relative;z-index:2}.card-balance .card-label[data-v-461c1f15]{color:#93c5fd}.balance-amount[data-v-461c1f15]{color:#fff;font-size:3rem;font-weight:700;letter-spacing:-.05em;margin-bottom:2rem;margin-top:auto}.card-glow[data-v-461c1f15]{background:radial-gradient(circle,rgba(59,130,246,.4),transparent 70%);filter:blur(40px);height:200px;pointer-events:none;position:absolute;right:0;top:0;width:200px}.btn-light[data-v-461c1f15]{align-items:center;background:#fff;border-radius:100px;color:#000;display:inline-flex;font-size:.9rem;font-weight:600;gap:.5rem;padding:.5rem 1rem;-webkit-text-decoration:none;text-decoration:none;transition:transform .2s}.btn-light[data-v-461c1f15]:hover{box-shadow:0 5px 15px hsla(0,0%,100%,.2);transform:translateY(-2px)}.btn-light .plus[data-v-461c1f15]{font-size:1.2rem;line-height:0}.card-usage[data-v-461c1f15]{justify-content:space-between}.usage-stats[data-v-461c1f15]{align-items:baseline;display:flex;gap:.5rem}.usage-value[data-v-461c1f15]{color:var(--text-main);font-size:2rem;font-weight:700}.usage-unit[data-v-461c1f15]{color:var(--text-muted)}.usage-bar[data-v-461c1f15]{background:hsla(0,0%,100%,.1);border-radius:2px;height:4px;margin-top:1rem;overflow:hidden}.bar-fill[data-v-461c1f15]{background:var(--accent);border-radius:2px;height:100%}.profile-details[data-v-461c1f15]{display:flex;flex:1;flex-direction:column;gap:.75rem;margin-top:.5rem}.detail-row[data-v-461c1f15]{align-items:center;display:flex;font-size:.9rem;justify-content:space-between}.detail-row .label[data-v-461c1f15]{color:var(--text-muted)}.badge[data-v-461c1f15]{background:rgba(139,92,246,.15);border:1px solid rgba(139,92,246,.3);border-radius:4px;color:#a78bfa;font-size:.75rem;font-weight:700;padding:2px 8px}.link-sm[data-v-461c1f15]{color:var(--text-muted);font-size:.8rem;margin-top:1rem;-webkit-text-decoration:none;text-decoration:none;transition:color .2s}.link-sm[data-v-461c1f15]:hover{color:var(--text-main)}.card-apikey[data-v-461c1f15]{grid-column:span 2}.card-header[data-v-461c1f15]{align-items:center;display:flex;justify-content:space-between;margin-bottom:1.5rem}.card-header h3[data-v-461c1f15]{font-size:1.1rem;font-weight:600;margin:0}.status-badge[data-v-461c1f15]{border-radius:4px;font-size:.75rem;font-weight:600;padding:2px 8px}.status-badge.active[data-v-461c1f15]{background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.2);color:#10b981}.key-interface[data-v-461c1f15]{display:flex;flex-direction:column;gap:1.5rem}.key-display-group[data-v-461c1f15]{background:#000;border:1px solid var(--border);border-radius:12px;display:flex;gap:.5rem;padding:.5rem}.key-field[data-v-461c1f15]{align-items:center;display:flex;flex:1;overflow:hidden;padding:0 1rem}.key-field code[data-v-461c1f15]{color:#e2e8f0;font-family:var(--font-mono)}.btn-icon-sm[data-v-461c1f15]{align-items:center;background:var(--surface);border:1px solid var(--border);border-radius:8px;color:var(--text-muted);cursor:pointer;display:flex;height:36px;justify-content:center;transition:all .2s;width:36px}.btn-icon-sm[data-v-461c1f15]:hover{background:var(--surface-hover);color:var(--text-main)}.api-controls[data-v-461c1f15]{display:flex;gap:1rem}.btn-secondary[data-v-461c1f15]{align-items:center;background:var(--surface-hover);border:1px solid var(--border);border-radius:8px;color:var(--text-main);cursor:pointer;display:flex;font-size:.9rem;font-weight:600;gap:.5rem;padding:.6rem 1.2rem;transition:all .2s}.btn-secondary[data-v-461c1f15]:hover:not(:disabled){border-color:var(--accent);color:var(--accent)}.btn-outline[data-v-461c1f15]{background:transparent;border:1px solid var(--border);border-radius:8px;color:var(--text-muted);cursor:pointer;font-size:.9rem;padding:.6rem 1.2rem;transition:all .2s}.btn-outline[data-v-461c1f15]:hover{border-color:var(--text-muted);color:var(--text-main)}.card-danger[data-v-461c1f15]{background:rgba(239,68,68,.02);border-color:rgba(239,68,68,.2)}.text-danger[data-v-461c1f15]{align-items:center;color:var(--accent-danger);display:flex;gap:.5rem}.danger-desc[data-v-461c1f15]{color:var(--text-muted);font-size:.9rem;margin-bottom:1.5rem}.btn-danger-outline[data-v-461c1f15]{background:transparent;border:1px solid rgba(239,68,68,.3);border-radius:8px;color:var(--accent-danger);cursor:pointer;font-weight:600;margin-top:auto;padding:.6rem;transition:all .2s;width:100%}.btn-danger-outline[data-v-461c1f15]:hover{background:rgba(239,68,68,.1)}.mono[data-v-461c1f15]{font-family:var(--font-mono)}@media (max-width:1024px){.bento-grid[data-v-461c1f15]{grid-template-columns:1fr 1fr}.card-apikey[data-v-461c1f15]{grid-column:span 2}.card-balance[data-v-461c1f15]{grid-row:auto}}@media (max-width:640px){.bento-grid[data-v-461c1f15]{grid-template-columns:1fr}.card-apikey[data-v-461c1f15]{grid-column:1}.dashboard-header[data-v-461c1f15]{align-items:flex-start;flex-direction:column;gap:1rem}.header-actions[data-v-461c1f15]{position:absolute;right:0;top:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index.vue?vue&type=template&id=461c1f15&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-wrapper"
  }, [_vm._ssrNode("<div class=\"bg-noise\" data-v-461c1f15></div> <div class=\"ambient-light light-1\" data-v-461c1f15></div> <div class=\"ambient-light light-2\" data-v-461c1f15></div> "), _vm.user ? _vm._ssrNode("<div class=\"dashboard-container\" data-v-461c1f15>", "</div>", [_vm._ssrNode("<header class=\"dashboard-header\" data-v-461c1f15><div class=\"user-welcome\" data-v-461c1f15><div class=\"avatar-placeholder\" data-v-461c1f15>" + _vm._ssrEscape("\n          " + _vm._s(_vm.user.nickname.charAt(0).toUpperCase()) + "\n        ") + "</div> <div class=\"welcome-text\" data-v-461c1f15><h1 class=\"page-title\" data-v-461c1f15>" + _vm._ssrEscape("Good " + _vm._s(_vm.timeOfDay) + ", " + _vm._s(_vm.user.nickname)) + "</h1> <p class=\"page-subtitle\" data-v-461c1f15>System status: <span class=\"status-online\" data-v-461c1f15>● Operational</span></p></div></div> <div class=\"header-actions\" data-v-461c1f15><button title=\"Logout\" class=\"btn-icon\" data-v-461c1f15><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-461c1f15><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\" data-v-461c1f15></path><polyline points=\"16 17 21 12 16 7\" data-v-461c1f15></polyline><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\" data-v-461c1f15></line></svg></button></div></header> "), _vm._ssrNode("<div class=\"bento-grid\" data-v-461c1f15>", "</div>", [_vm._ssrNode("<div class=\"bento-card card-balance\" data-v-461c1f15>", "</div>", [_vm._ssrNode("<div class=\"card-inner\" data-v-461c1f15>", "</div>", [_vm._ssrNode("<div class=\"card-label\" data-v-461c1f15><span data-v-461c1f15>Current Balance</span> <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-461c1f15><rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\" data-v-461c1f15></rect><line x1=\"2\" y1=\"11\" x2=\"22\" y2=\"11\" data-v-461c1f15></line></svg></div> <div class=\"balance-amount mono\" data-v-461c1f15>" + _vm._ssrEscape("$" + _vm._s(_vm.user.balance.toFixed(2))) + "</div> "), _vm._ssrNode("<div class=\"card-footer\" data-v-461c1f15>", "</div>", [_c('NuxtLink', {
    staticClass: "btn-xs btn-light",
    attrs: {
      "to": "/account/billing"
    }
  }, [_c('span', {
    staticClass: "plus"
  }, [_vm._v("+")]), _vm._v(" Top up\n            ")])], 1)], 2), _vm._ssrNode(" <div class=\"card-glow\" data-v-461c1f15></div>")], 2), _vm._ssrNode(" <div class=\"bento-card card-usage\" data-v-461c1f15><div class=\"card-label\" data-v-461c1f15><span data-v-461c1f15>API Requests</span> <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-461c1f15><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" data-v-461c1f15></path><polyline points=\"15 3 21 3 21 9\" data-v-461c1f15></polyline><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\" data-v-461c1f15></line></svg></div> <div class=\"usage-stats\" data-v-461c1f15><span class=\"usage-value mono\" data-v-461c1f15>" + _vm._ssrEscape(_vm._s(_vm.user.apiKeyUsage)) + "</span> <span class=\"usage-unit\" data-v-461c1f15>reqs</span></div> <div class=\"usage-bar\" data-v-461c1f15><div class=\"bar-fill\"" + _vm._ssrStyle(null, {
    width: Math.min(_vm.user.apiKeyUsage / 100, 100) + '%'
  }, null) + " data-v-461c1f15></div></div></div> "), _vm._ssrNode("<div class=\"bento-card card-profile\" data-v-461c1f15>", "</div>", [_vm._ssrNode("<div class=\"card-label\" data-v-461c1f15><span data-v-461c1f15>Account Identity</span> <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-461c1f15><path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\" data-v-461c1f15></path><circle cx=\"12\" cy=\"7\" r=\"4\" data-v-461c1f15></circle></svg></div> <div class=\"profile-details\" data-v-461c1f15><div class=\"detail-row\" data-v-461c1f15><span class=\"label\" data-v-461c1f15>Email</span> <span class=\"value\" data-v-461c1f15>" + _vm._ssrEscape(_vm._s(_vm.user.email)) + "</span></div> <div class=\"detail-row\" data-v-461c1f15><span class=\"label\" data-v-461c1f15>Tier</span> <span class=\"badge\" data-v-461c1f15>PRO</span></div></div> "), _c('NuxtLink', {
    staticClass: "link-sm",
    attrs: {
      "to": "/account/change-nickname"
    }
  }, [_vm._v("Edit Profile →")])], 2), _vm._ssrNode(" <div class=\"bento-card card-apikey\" data-v-461c1f15><div class=\"card-header\" data-v-461c1f15><h3 data-v-461c1f15>API Configuration</h3> <div" + _vm._ssrClass("status-badge", _vm.user.apiKey ? 'active' : 'inactive') + " data-v-461c1f15>" + _vm._ssrEscape("\n            " + _vm._s(_vm.user.apiKey ? 'Active' : 'No Key') + "\n          ") + "</div></div> " + (_vm.user.apiKey ? "<div class=\"key-interface\" data-v-461c1f15><div class=\"key-display-group\" data-v-461c1f15><div class=\"key-field\" data-v-461c1f15><code data-v-461c1f15>" + _vm._ssrEscape(_vm._s(_vm.isKeyVisible ? _vm.user.apiKey : 'sk_live_••••••••••••••••••••••••')) + "</code></div> <button title=\"Toggle Visibility\" class=\"btn-icon-sm\" data-v-461c1f15>" + (!_vm.isKeyVisible ? "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-461c1f15><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\" data-v-461c1f15></path><circle cx=\"12\" cy=\"12\" r=\"3\" data-v-461c1f15></circle></svg>" : "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-461c1f15><path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\" data-v-461c1f15></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\" data-v-461c1f15></line></svg>") + "</button> <button title=\"Copy Key\" class=\"btn-icon-sm\" data-v-461c1f15><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-461c1f15><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\" data-v-461c1f15></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\" data-v-461c1f15></path></svg></button></div> <div class=\"api-controls\" data-v-461c1f15><button" + _vm._ssrAttr("disabled", _vm.isSimulating) + " class=\"btn-secondary\" data-v-461c1f15>" + (!_vm.isSimulating ? "<span data-v-461c1f15><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-461c1f15><polygon points=\"5 3 19 12 5 21 5 3\" data-v-461c1f15></polygon></svg>\n                Test Request (-$0.05)\n              </span>" : "<span class=\"loading-dots\" data-v-461c1f15>Processing</span>") + "</button> <button class=\"btn-outline\" data-v-461c1f15>Rotate Key</button></div></div>" : "<div class=\"empty-key-state\" data-v-461c1f15><p data-v-461c1f15>Generate an API key to start integrating.</p> <button class=\"btn-primary\" data-v-461c1f15>Generate Secret Key</button></div>") + "</div> <div class=\"bento-card card-danger\" data-v-461c1f15><div class=\"card-label text-danger\" data-v-461c1f15><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-461c1f15><path d=\"M3 6h18\" data-v-461c1f15></path><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\" data-v-461c1f15></path></svg> <span data-v-461c1f15>Danger Zone</span></div> <p class=\"danger-desc\" data-v-461c1f15>Irreversible action.</p> <button class=\"btn-danger-outline\" data-v-461c1f15>Delete Account</button></div>")], 2)], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/account/index.vue?vue&type=template&id=461c1f15&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index.vue?vue&type=script&lang=js
/* harmony default export */ var accountvue_type_script_lang_js = ({
  name: 'AccountPage',
  data() {
    return {
      user: null,
      isSimulating: false,
      isKeyVisible: false,
      loading: true
    };
  },
  computed: {
    timeOfDay() {
      const hour = new Date().getHours();
      if (hour < 12) return 'Morning';
      if (hour < 18) return 'Afternoon';
      return 'Evening';
    }
  },
  async mounted() {
    try {
      const userData = localStorage.getItem('user');
      if (!userData) {
        this.$router.push('/login');
        return;
      }
      this.user = JSON.parse(userData);
      await this.loadBalance();
    } catch (error) {
      console.error('Mount error:', error);
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
        console.error('Balance load error:', error);
      }
    },
    async generateApiKey() {
      if (this.user.apiKey && !confirm("Rotating the key will invalidate the old one immediately. Continue?")) return;
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          alert('Authentication required. Please log in again.');
          this.$router.push('/login');
          return;
        }
        const response = await this.$axios.post('/users/generate-key', {}, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.data.success && response.data.apiKey) {
          this.user.apiKey = response.data.apiKey;
          localStorage.setItem('user', JSON.stringify(this.user));
          // Success feedback - you could add a toast notification here
        } else {
          throw new Error('Invalid response from server');
        }
      } catch (error) {
        var _error$response, _error$response$data, _error$response2;
        console.error('API key generation error:', error);
        const errorMessage = ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.error) || error.message || 'Failed to generate API key';
        alert('Failed to generate key: ' + errorMessage);

        // If unauthorized, redirect to login
        if (((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) === 401) {
          localStorage.removeItem('authToken');
          localStorage.removeItem('user');
          this.$router.push('/login');
        }
      }
    },
    copyApiKey() {
      navigator.clipboard.writeText(this.user.apiKey);
      // Could add a toast notification here
    },
    async simulateApiCall() {
      if (this.isSimulating) return;
      if (this.user.balance < 0.05) {
        alert('Insufficient funds.');
        return;
      }
      this.isSimulating = true;
      try {
        const response = await this.$axios.post('/v1/chat/completions', {
          model: 'gpt-3.5-turbo',
          messages: [{
            role: 'user',
            content: 'Hello!'
          }],
          max_tokens: 10
        }, {
          headers: {
            'Authorization': `Bearer ${this.user.apiKey}`
          }
        });
        if (response.data._balance !== undefined) {
          this.user.balance = response.data._balance;
        }
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => this.isSimulating = false, 800); // Min duration for UI feel
      }
    },
    deleteAccount() {
      const confirmation = prompt('Type "DELETE" to confirm account deletion. This cannot be undone.');
      if (confirmation === 'DELETE') {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        this.$router.push('/');
      }
    },
    logout() {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      this.$router.push('/');
    }
  }
});
// CONCATENATED MODULE: ./pages/account/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_accountvue_type_script_lang_js = (accountvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/account/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_accountvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "461c1f15",
  "5adee6a0"
  
)

/* harmony default export */ var account = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map