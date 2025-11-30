exports.ids = [5];
exports.modules = {

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1e8151a0", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_docs_vue_vue_type_style_index_0_id_0f7167dc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_docs_vue_vue_type_style_index_0_id_0f7167dc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_docs_vue_vue_type_style_index_0_id_0f7167dc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_docs_vue_vue_type_style_index_0_id_0f7167dc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_docs_vue_vue_type_style_index_0_id_0f7167dc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-wrapper[data-v-0f7167dc]{--bg-dark:#09090b;--surface:#121215;--surface-highlight:#1c1c20;--border:hsla(0,0%,100%,.08);--accent:#3b82f6;--accent-glow:rgba(59,130,246,.15);--text-main:#f8fafc;--text-muted:#94a3b8;--font-mono:\"Fira Code\",monospace;background-color:#09090b;background-color:var(--bg-dark);color:#f8fafc;color:var(--text-main);font-family:\"Inter\",sans-serif;min-height:100vh;overflow-x:hidden;position:relative}.bg-noise[data-v-0f7167dc]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='a'%3E%3CfeTurbulence baseFrequency='.65' numOctaves='3' stitchTiles='stitch' type='fractalNoise'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E\");bottom:0;left:0;opacity:.03;right:0;top:0}.bg-noise[data-v-0f7167dc],.glow-orb[data-v-0f7167dc]{pointer-events:none;position:absolute}.glow-orb[data-v-0f7167dc]{background:radial-gradient(circle,rgba(59,130,246,.1),transparent 70%);border-radius:50%;filter:blur(100px);height:800px;width:800px}.orb-top[data-v-0f7167dc]{left:-200px;top:-400px}.docs-layout[data-v-0f7167dc]{display:grid;grid-template-columns:280px 1fr;margin:0 auto;max-width:1440px;grid-gap:4rem;gap:4rem;padding:4rem 2rem;z-index:1}.docs-layout[data-v-0f7167dc],.sidebar[data-v-0f7167dc]{position:relative}.sidebar-sticky[data-v-0f7167dc]{backdrop-filter:blur(10px);background:rgba(18,18,21,.5);border:1px solid var(--border);border-radius:16px;display:flex;flex-direction:column;gap:2rem;padding:1.5rem;position:sticky;top:4rem}.sidebar-header[data-v-0f7167dc]{align-items:center;display:flex;font-size:1.1rem;font-weight:700;gap:.5rem;margin:0}.nav-list[data-v-0f7167dc]{display:flex;flex-direction:column;gap:.25rem}.nav-item[data-v-0f7167dc]{align-items:center;border-radius:8px;color:var(--text-muted);display:flex;font-size:.9rem;padding:.6rem .8rem;position:relative;-webkit-text-decoration:none;text-decoration:none;transition:all .2s}.nav-item[data-v-0f7167dc]:hover{background:var(--surface-highlight);color:var(--text-main)}.nav-item.active[data-v-0f7167dc]{background:rgba(59,130,246,.08);color:var(--accent);font-weight:600}.nav-indicator[data-v-0f7167dc]{background:var(--accent);height:0;left:0;position:absolute;transition:height .2s;width:2px}.nav-item.active .nav-indicator[data-v-0f7167dc]{height:60%}.sidebar-footer[data-v-0f7167dc]{align-items:center;border-top:1px solid var(--border);color:var(--text-muted);display:flex;font-size:.8rem;justify-content:space-between;padding-top:1rem}.version-badge[data-v-0f7167dc]{background:hsla(0,0%,100%,.05);border-radius:4px;font-family:var(--font-mono);font-size:.75rem;padding:.2rem .5rem}.content-area[data-v-0f7167dc]{max-width:850px}.doc-section[data-v-0f7167dc]{margin-bottom:6rem;scroll-margin-top:120px}.section-header[data-v-0f7167dc]{border-bottom:1px solid var(--border);margin-bottom:2.5rem;padding-bottom:1.5rem}.title[data-v-0f7167dc]{font-size:2.5rem;font-weight:800;letter-spacing:-.02em;margin:0 0 .5rem}.subtitle[data-v-0f7167dc]{color:var(--text-muted);font-size:1.1rem;margin:0}.section-title[data-v-0f7167dc]{align-items:center;color:var(--text-main);display:flex;font-size:1.75rem;margin-bottom:1.5rem}.text-body[data-v-0f7167dc]{color:var(--text-muted);font-size:1rem;line-height:1.7;margin-bottom:1.5rem}.timeline-widget[data-v-0f7167dc]{border-left:1px solid var(--border);display:flex;flex-direction:column;gap:1.5rem;margin-left:1rem;padding-left:2rem}.timeline-step[data-v-0f7167dc],.timeline-widget[data-v-0f7167dc]{position:relative}.step-marker[data-v-0f7167dc]{align-items:center;background:var(--surface);border:1px solid var(--accent);border-radius:50%;box-shadow:0 0 10px var(--accent-glow);color:var(--accent);display:flex;font-size:.75rem;font-weight:700;height:1.8rem;justify-content:center;left:-2.9rem;position:absolute;top:0;width:1.8rem}.step-content h4[data-v-0f7167dc]{font-size:1.1rem;margin:0 0 .5rem}.step-content p[data-v-0f7167dc]{color:var(--text-muted);font-size:.95rem;margin:0}.link[data-v-0f7167dc]{border-bottom:1px solid transparent;color:var(--accent);-webkit-text-decoration:none;text-decoration:none}.link[data-v-0f7167dc]:hover{border-color:var(--accent)}.mini-code[data-v-0f7167dc]{align-items:center;background:#000;border:1px solid var(--border);border-radius:6px;display:inline-flex;font-family:var(--font-mono);font-size:.85rem;gap:1rem;margin-top:.8rem;padding:.5rem 1rem}.mini-copy[data-v-0f7167dc]{background:none;border:none;color:var(--text-muted);cursor:pointer;display:flex;padding:0}.mini-copy[data-v-0f7167dc]:hover{color:var(--text-main)}.code-terminal[data-v-0f7167dc]{background:#0d0d10;border:1px solid var(--border);border-radius:12px;box-shadow:0 10px 30px -10px rgba(0,0,0,.5);margin:1.5rem 0;overflow:hidden}.terminal-header[data-v-0f7167dc]{align-items:center;background:hsla(0,0%,100%,.03);border-bottom:1px solid var(--border);display:flex;padding:.75rem 1rem}.dots[data-v-0f7167dc]{display:flex;gap:6px;margin-right:auto}.dot[data-v-0f7167dc]{border-radius:50%;height:10px;width:10px}.red[data-v-0f7167dc]{background:#ef4444}.yellow[data-v-0f7167dc]{background:#f59e0b}.green[data-v-0f7167dc]{background:#10b981}.lang-badge[data-v-0f7167dc]{color:var(--text-muted);font-size:.7rem;font-weight:600;margin-right:1rem}.copy-action[data-v-0f7167dc]{background:transparent;border:1px solid var(--border);border-radius:4px;color:var(--text-muted);cursor:pointer;font-size:.75rem;padding:.2rem .6rem}.copy-action[data-v-0f7167dc]:hover{border-color:var(--text-muted);color:var(--text-main)}.code-terminal pre[data-v-0f7167dc]{margin:0;overflow-x:auto;padding:1.5rem}.code-terminal code[data-v-0f7167dc]{color:#e2e8f0;font-family:var(--font-mono);font-size:.9rem;line-height:1.6}.code-tabs[data-v-0f7167dc]{margin:1.5rem 0}.tab-header[data-v-0f7167dc]{display:flex;gap:2px}.tab-btn[data-v-0f7167dc]{background:var(--surface);border:1px solid var(--border);border-bottom:none;border-radius:8px 8px 0 0;color:var(--text-muted);cursor:pointer;font-size:.85rem;padding:.5rem 1.5rem;text-transform:uppercase}.tab-btn.active[data-v-0f7167dc]{background:#0d0d10;border-top:2px solid var(--accent);color:var(--accent);font-weight:600}.no-radius-top[data-v-0f7167dc]{border-top-left-radius:0;margin-top:0}.alert-box[data-v-0f7167dc]{border-radius:8px;display:flex;font-size:.9rem;gap:1rem;margin:1.5rem 0;padding:1rem}.alert-box.warning[data-v-0f7167dc]{background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.2);color:#fcd34d}.alert-content strong[data-v-0f7167dc]{color:#fbbf24;display:block;margin-bottom:.25rem}.alert-content p[data-v-0f7167dc]{margin:0;opacity:.9}.models-grid[data-v-0f7167dc]{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));grid-gap:1.5rem;gap:1.5rem}.model-card[data-v-0f7167dc]{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:1.5rem;transition:all .2s}.model-card[data-v-0f7167dc]:hover{border-color:var(--accent);transform:translateY(-3px)}.card-header[data-v-0f7167dc]{align-items:center;display:flex;justify-content:space-between;margin-bottom:.5rem}.card-header h4[data-v-0f7167dc]{font-size:1.1rem;margin:0}.badge[data-v-0f7167dc]{background:hsla(0,0%,100%,.1);border-radius:4px;font-size:.7rem;padding:.2rem .5rem}.model-slug[data-v-0f7167dc]{background:#000;border-radius:4px;color:var(--text-muted);display:block;font-family:var(--font-mono);font-size:.8rem;margin-bottom:1.5rem;padding:.4rem;text-align:center}.card-stats[data-v-0f7167dc]{border-top:1px solid var(--border);display:flex;justify-content:space-between;padding-top:1rem}.stat[data-v-0f7167dc]{display:flex;flex-direction:column;font-size:.85rem}.stat .label[data-v-0f7167dc]{color:var(--text-muted);font-size:.7rem;text-transform:uppercase}.stat .value[data-v-0f7167dc]{color:var(--text-main);font-weight:600}.table-wrapper[data-v-0f7167dc]{border:1px solid var(--border);border-radius:12px;overflow:hidden}.tech-table[data-v-0f7167dc]{border-collapse:collapse;width:100%}.tech-table th[data-v-0f7167dc]{background:hsla(0,0%,100%,.02);color:var(--text-muted);font-size:.8rem;text-align:left;text-transform:uppercase}.tech-table td[data-v-0f7167dc],.tech-table th[data-v-0f7167dc]{border-bottom:1px solid var(--border);padding:1rem}.tech-table td[data-v-0f7167dc]{font-size:.95rem}.tech-table tr:last-child td[data-v-0f7167dc]{border-bottom:none}.status-code[data-v-0f7167dc]{border-radius:4px;font-family:var(--font-mono);font-weight:700;padding:.2rem .5rem}.c-400[data-v-0f7167dc]{background:rgba(245,158,11,.1);color:#f59e0b}.c-401[data-v-0f7167dc]{background:rgba(239,68,68,.1);color:#ef4444}.c-429[data-v-0f7167dc]{background:rgba(236,72,153,.1);color:#ec4899}.limits-dashboard[data-v-0f7167dc]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:1.5rem;gap:1.5rem}.limit-gauge[data-v-0f7167dc]{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:1.5rem;text-align:center}.gauge-value[data-v-0f7167dc]{color:var(--accent);font-size:2.5rem;font-weight:800;line-height:1;margin-bottom:.5rem}.gauge-label[data-v-0f7167dc]{color:var(--text-muted);font-size:.85rem;margin-bottom:1rem;text-transform:uppercase}.gauge-bar[data-v-0f7167dc]{background:hsla(0,0%,100%,.1);height:6px;overflow:hidden}.fill[data-v-0f7167dc],.gauge-bar[data-v-0f7167dc]{border-radius:3px}.fill[data-v-0f7167dc]{background:var(--accent);height:100%}@media (max-width:1024px){.docs-layout[data-v-0f7167dc]{grid-template-columns:1fr}.sidebar-sticky[data-v-0f7167dc]{position:static}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/docs.vue?vue&type=template&id=0f7167dc&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-wrapper"
  }, [_vm._ssrNode("<div class=\"bg-noise\" data-v-0f7167dc></div> <div class=\"glow-orb orb-top\" data-v-0f7167dc></div> "), _vm._ssrNode("<div class=\"docs-layout\" data-v-0f7167dc>", "</div>", [_vm._ssrNode("<aside class=\"sidebar\" data-v-0f7167dc><div class=\"sidebar-sticky\" data-v-0f7167dc><h3 class=\"sidebar-header\" data-v-0f7167dc><span class=\"icon\" data-v-0f7167dc>⚡</span> Documentation\n        </h3> <nav class=\"nav-list\" data-v-0f7167dc>" + _vm._ssrList(_vm.navItems, function (item) {
    return "<a" + _vm._ssrAttr("href", `#${item.id}`) + _vm._ssrClass("nav-item", {
      active: _vm.activeSection === item.id
    }) + " data-v-0f7167dc><span class=\"nav-indicator\" data-v-0f7167dc></span>" + _vm._ssrEscape("\n            " + _vm._s(item.label) + "\n          ") + "</a>";
  }) + "</nav> <div class=\"sidebar-footer\" data-v-0f7167dc><p data-v-0f7167dc>API Version</p> <span class=\"version-badge\" data-v-0f7167dc>v1.0</span></div></div></aside> "), _vm._ssrNode("<main class=\"content-area\" data-v-0f7167dc>", "</main>", [_vm._ssrNode("<section id=\"getting-started\" class=\"doc-section\" data-v-0f7167dc>", "</section>", [_vm._ssrNode("<div class=\"section-header\" data-v-0f7167dc><h1 class=\"title\" data-v-0f7167dc>Getting Started</h1> <p class=\"subtitle\" data-v-0f7167dc>Integrate state-of-the-art AI models in under 5 minutes.</p></div> "), _vm._ssrNode("<div class=\"timeline-widget\" data-v-0f7167dc>", "</div>", [_vm._ssrNode("<div class=\"timeline-step\" data-v-0f7167dc>", "</div>", [_vm._ssrNode("<div class=\"step-marker\" data-v-0f7167dc>01</div> "), _vm._ssrNode("<div class=\"step-content\" data-v-0f7167dc>", "</div>", [_vm._ssrNode("<h4 data-v-0f7167dc>Create Account</h4> "), _vm._ssrNode("<p data-v-0f7167dc>", "</p>", [_vm._ssrNode("Register at "), _c('NuxtLink', {
    staticClass: "link",
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("neuralnet/account")])], 2)], 2)], 2), _vm._ssrNode(" <div class=\"timeline-step\" data-v-0f7167dc><div class=\"step-marker\" data-v-0f7167dc>02</div> <div class=\"step-content\" data-v-0f7167dc><h4 data-v-0f7167dc>Generate Keys</h4> <p data-v-0f7167dc>Navigate to dashboard and create a new secret key.</p></div></div> <div class=\"timeline-step\" data-v-0f7167dc><div class=\"step-marker\" data-v-0f7167dc>03</div> <div class=\"step-content\" data-v-0f7167dc><h4 data-v-0f7167dc>Start Making Requests</h4> <p data-v-0f7167dc>Use your API key with any HTTP client. Compatible with OpenAI API format.</p></div></div>")], 2)], 2), _vm._ssrNode(" <section id=\"authentication\" class=\"doc-section\" data-v-0f7167dc><h2 class=\"section-title\" data-v-0f7167dc>Authentication</h2> <p class=\"text-body\" data-v-0f7167dc>Requests are authenticated via the <code data-v-0f7167dc>Authorization</code> header using the Bearer scheme.</p> <div class=\"code-terminal\" data-v-0f7167dc><div class=\"terminal-header\" data-v-0f7167dc><div class=\"dots\" data-v-0f7167dc><span class=\"dot red\" data-v-0f7167dc></span><span class=\"dot yellow\" data-v-0f7167dc></span><span class=\"dot green\" data-v-0f7167dc></span></div> <span class=\"lang-badge\" data-v-0f7167dc>BASH</span> <button class=\"copy-action\" data-v-0f7167dc>Copy</button></div> <pre data-v-0f7167dc><code data-v-0f7167dc>" + _vm._ssrEscape(_vm._s(_vm.authCode)) + "</code></pre></div> <div class=\"alert-box warning\" data-v-0f7167dc><div class=\"alert-icon\" data-v-0f7167dc><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-v-0f7167dc><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\" data-v-0f7167dc></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\" data-v-0f7167dc></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\" data-v-0f7167dc></line></svg></div> <div class=\"alert-content\" data-v-0f7167dc><strong data-v-0f7167dc>Security Warning</strong> <p data-v-0f7167dc>Your API keys carry full privileges. Do not commit them to public repositories or expose them in client-side code.</p></div></div></section> <section id=\"making-requests\" class=\"doc-section\" data-v-0f7167dc><h2 class=\"section-title\" data-v-0f7167dc>Making Requests</h2> <p class=\"text-body\" data-v-0f7167dc>Unified interface for chat completions. Compatible with OpenAI SDKs.</p> <div class=\"code-tabs\" data-v-0f7167dc><div class=\"tab-header\" data-v-0f7167dc>" + _vm._ssrList(['javascript', 'python'], function (lang) {
    return "<button" + _vm._ssrClass("tab-btn", {
      active: _vm.requestLang === lang
    }) + " data-v-0f7167dc>" + _vm._ssrEscape("\n              " + _vm._s(lang) + "\n            ") + "</button>";
  }) + "</div> <div class=\"code-terminal no-radius-top\" data-v-0f7167dc>" + (_vm.requestLang === 'javascript' ? "<pre data-v-0f7167dc><code data-v-0f7167dc>" + _vm._ssrEscape(_vm._s(_vm.jsCode)) + "</code></pre>" : "<!---->") + " " + (_vm.requestLang === 'python' ? "<pre data-v-0f7167dc><code data-v-0f7167dc>" + _vm._ssrEscape(_vm._s(_vm.pythonCode)) + "</code></pre>" : "<!---->") + "</div></div></section> <section id=\"models\" class=\"doc-section\" data-v-0f7167dc><h2 class=\"section-title\" data-v-0f7167dc>Model Catalog</h2> <div class=\"models-grid\" data-v-0f7167dc>" + _vm._ssrList(_vm.models, function (model) {
    return "<div class=\"model-card\" data-v-0f7167dc><div class=\"card-header\" data-v-0f7167dc><h4 data-v-0f7167dc>" + _vm._ssrEscape(_vm._s(model.name)) + "</h4> <span class=\"badge\" data-v-0f7167dc>" + _vm._ssrEscape(_vm._s(model.type)) + "</span></div> <code class=\"model-slug\" data-v-0f7167dc>" + _vm._ssrEscape(_vm._s(model.id)) + "</code> <div class=\"card-stats\" data-v-0f7167dc><div class=\"stat\" data-v-0f7167dc><span class=\"label\" data-v-0f7167dc>Context</span> <span class=\"value\" data-v-0f7167dc>" + _vm._ssrEscape(_vm._s(model.context)) + "</span></div> <div class=\"stat\" data-v-0f7167dc><span class=\"label\" data-v-0f7167dc>Price</span> <span class=\"value\" data-v-0f7167dc>" + _vm._ssrEscape(_vm._s(model.price)) + "</span></div></div></div>";
  }) + "</div></section> <section id=\"errors\" class=\"doc-section\" data-v-0f7167dc><h2 class=\"section-title\" data-v-0f7167dc>Error Codes</h2> <div class=\"table-wrapper\" data-v-0f7167dc><table class=\"tech-table\" data-v-0f7167dc><thead data-v-0f7167dc><tr data-v-0f7167dc><th data-v-0f7167dc>Code</th> <th data-v-0f7167dc>Error Type</th> <th data-v-0f7167dc>Description</th></tr></thead> <tbody data-v-0f7167dc><tr data-v-0f7167dc><td data-v-0f7167dc><span class=\"status-code c-400\" data-v-0f7167dc>400</span></td> <td data-v-0f7167dc>Bad Request</td> <td class=\"text-muted\" data-v-0f7167dc>Malformed JSON or invalid parameters.</td></tr> <tr data-v-0f7167dc><td data-v-0f7167dc><span class=\"status-code c-401\" data-v-0f7167dc>401</span></td> <td data-v-0f7167dc>Unauthorized</td> <td class=\"text-muted\" data-v-0f7167dc>API key is missing or invalid.</td></tr> <tr data-v-0f7167dc><td data-v-0f7167dc><span class=\"status-code c-429\" data-v-0f7167dc>429</span></td> <td data-v-0f7167dc>Rate Limited</td> <td class=\"text-muted\" data-v-0f7167dc>You have exceeded your request quota.</td></tr></tbody></table></div></section> <section id=\"rate-limits\" class=\"doc-section\" data-v-0f7167dc><h2 class=\"section-title\" data-v-0f7167dc>System Limits</h2> <div class=\"limits-dashboard\" data-v-0f7167dc><div class=\"limit-gauge\" data-v-0f7167dc><div class=\"gauge-value\" data-v-0f7167dc>100</div> <div class=\"gauge-label\" data-v-0f7167dc>RPM (Standard)</div> <div class=\"gauge-bar\" data-v-0f7167dc><div class=\"fill\" style=\"width: 30%\" data-v-0f7167dc></div></div></div> <div class=\"limit-gauge\" data-v-0f7167dc><div class=\"gauge-value\" data-v-0f7167dc>1K</div> <div class=\"gauge-label\" data-v-0f7167dc>RPH (Burst)</div> <div class=\"gauge-bar\" data-v-0f7167dc><div class=\"fill\" style=\"width: 60%\" data-v-0f7167dc></div></div></div> <div class=\"limit-gauge\" data-v-0f7167dc><div class=\"gauge-value\" data-v-0f7167dc>50K</div> <div class=\"gauge-label\" data-v-0f7167dc>Daily Requests</div> <div class=\"gauge-bar\" data-v-0f7167dc><div class=\"fill\" style=\"width: 90%\" data-v-0f7167dc></div></div></div></div></section>")], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/docs.vue?vue&type=template&id=0f7167dc&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/docs.vue?vue&type=script&lang=js
/* harmony default export */ var docsvue_type_script_lang_js = ({
  name: 'DocsPage',
  data() {
    return {
      activeSection: 'getting-started',
      requestLang: 'javascript',
      navItems: [{
        id: 'getting-started',
        label: 'Getting Started'
      }, {
        id: 'authentication',
        label: 'Authentication'
      }, {
        id: 'making-requests',
        label: 'Making Requests'
      }, {
        id: 'models',
        label: 'Models'
      }, {
        id: 'errors',
        label: 'Errors'
      }, {
        id: 'rate-limits',
        label: 'Rate Limits'
      }],
      models: [{
        name: 'GPT-4 Turbo',
        id: 'gpt-4-turbo',
        type: 'SOTA',
        context: '128K',
        price: '$0.05'
      }, {
        name: 'Claude 3 Opus',
        id: 'claude-3-opus',
        type: 'Reasoning',
        context: '200K',
        price: '$0.08'
      }, {
        name: 'Llama 3 70B',
        id: 'llama-3-70b',
        type: 'Fast',
        context: '8K',
        price: '$0.02'
      }],
      authCode: `curl https://api.neuralnet.ai/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "model": "gpt-4-turbo" }'`,
      jsCode: `const response = await fetch('https://api.neuralnet.ai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4-turbo',
    messages: [{ role: 'user', content: 'Hello world' }]
  })
});`,
      pythonCode: `import requests

resp = requests.post(
    'https://api.neuralnet.ai/v1/chat/completions',
    headers={'Authorization': 'Bearer YOUR_KEY'},
    json={
        'model': 'gpt-4-turbo',
        'messages': [{'role': 'user', 'content': 'Hello world'}]
    }
)
print(resp.json())`
    };
  },
  mounted() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, {
      threshold: 0.5
    });
    this.navItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
        this.activeSection = id;
      }
    },
    copyCode(text) {
      navigator.clipboard.writeText(text);
      // Toast notification logic would go here
    }
  }
});
// CONCATENATED MODULE: ./pages/docs.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_docsvue_type_script_lang_js = (docsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/docs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_docsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0f7167dc",
  "4403527e"
  
)

/* harmony default export */ var docs = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=docs.js.map