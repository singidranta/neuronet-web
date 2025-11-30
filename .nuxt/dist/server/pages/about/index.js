exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ad062d7a", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6dd1dcb8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6dd1dcb8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6dd1dcb8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6dd1dcb8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6dd1dcb8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-wrapper[data-v-6dd1dcb8]{--bg-dark:#050507;--surface:hsla(0,0%,100%,.02);--border:hsla(0,0%,100%,.06);--text-main:#fff;--text-muted:#94a3b8;--accent:#3b82f6;--font-mono:\"JetBrains Mono\",\"Fira Code\",monospace;background-color:#050507;background-color:var(--bg-dark);color:#fff;color:var(--text-main);font-family:\"Inter\",sans-serif;min-height:100vh;overflow-x:hidden;position:relative}.bg-grid[data-v-6dd1dcb8]{background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:60px 60px;bottom:0;left:0;-webkit-mask-image:radial-gradient(circle at top center,#000 40%,transparent 90%);mask-image:radial-gradient(circle at top center,#000 40%,transparent 90%);opacity:.1;right:0;top:0}.bg-grid[data-v-6dd1dcb8],.glow-orb[data-v-6dd1dcb8]{position:absolute;z-index:0}.glow-orb[data-v-6dd1dcb8]{background:radial-gradient(circle,rgba(59,130,246,.15),transparent 70%);border-radius:50%;filter:blur(120px);height:800px;left:50%;top:-200px;transform:translateX(-50%);width:800px}.content-container[data-v-6dd1dcb8]{margin:0 auto;max-width:1200px;padding:6rem 2rem;position:relative;z-index:1}.about-header[data-v-6dd1dcb8]{align-items:center;display:flex;flex-direction:column;margin-bottom:8rem;text-align:center}.label-pill[data-v-6dd1dcb8]{border:1px solid rgba(59,130,246,.2);border-radius:100px;color:var(--accent);font-family:var(--font-mono);font-size:.75rem;letter-spacing:.1em;margin-bottom:1.5rem;padding:.4rem 1rem;text-transform:uppercase}.page-title[data-v-6dd1dcb8]{font-size:4.5rem;font-weight:800;letter-spacing:-.03em;line-height:1.1;margin-bottom:1.5rem}.text-gradient[data-v-6dd1dcb8]{background:linear-gradient(135deg,#fff,#94a3b8);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.page-subtitle[data-v-6dd1dcb8]{color:var(--text-muted);font-size:1.25rem;line-height:1.6;max-width:600px}.dna-section[data-v-6dd1dcb8]{margin-bottom:8rem}.bento-grid[data-v-6dd1dcb8]{display:grid;grid-template-columns:1.5fr 1fr 1fr;grid-template-rows:auto auto;grid-gap:1.5rem;gap:1.5rem}.bento-card[data-v-6dd1dcb8]{background:var(--surface);border:1px solid var(--border);border-radius:24px;overflow:hidden;padding:2.5rem;position:relative;transition:transform .3s ease}.bento-card[data-v-6dd1dcb8]:hover{border-color:hsla(0,0%,100%,.1);transform:translateY(-5px)}.mission-card[data-v-6dd1dcb8]{display:flex;flex-direction:column;grid-column:1;grid-row:1/3}.vision-card[data-v-6dd1dcb8]{grid-column:2/4}.stat-card[data-v-6dd1dcb8]{align-items:center;display:flex;flex-direction:column;justify-content:center}.card-label[data-v-6dd1dcb8]{color:var(--accent);font-family:var(--font-mono);font-size:.75rem;letter-spacing:.05em;margin-bottom:1.5rem;text-transform:uppercase}.card-heading[data-v-6dd1dcb8]{font-size:2rem;font-weight:700;margin-bottom:1rem}.card-text[data-v-6dd1dcb8]{color:var(--text-muted);font-size:1.05rem;line-height:1.7}.visual-decoration[data-v-6dd1dcb8]{align-items:flex-end;display:flex;height:60px;margin-top:auto;padding-top:2rem}.line-graph[data-v-6dd1dcb8]{background:linear-gradient(90deg,transparent,var(--accent),transparent);height:2px;position:relative;width:100%}.line-graph[data-v-6dd1dcb8]:after{background:var(--accent);border-radius:50%;box-shadow:0 0 15px var(--accent);content:\"\";height:10px;left:50%;position:absolute;top:-4px;width:10px}.big-number[data-v-6dd1dcb8]{background:linear-gradient(180deg,#fff,#94a3b8);-webkit-background-clip:text;font-size:3.5rem;font-weight:800;-webkit-text-fill-color:transparent}.stat-label[data-v-6dd1dcb8]{color:var(--text-muted);font-size:.9rem;margin-top:.5rem}.section-header[data-v-6dd1dcb8]{margin-bottom:4rem;text-align:center}.section-title[data-v-6dd1dcb8]{font-size:2.5rem;font-weight:700;margin-bottom:.5rem}.section-desc[data-v-6dd1dcb8]{color:var(--text-muted)}.team-grid[data-v-6dd1dcb8]{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));grid-gap:2rem;gap:2rem}.team-card[data-v-6dd1dcb8]{animation:fadeUp-6dd1dcb8 .6s ease-out backwards;animation-delay:var(--delay);background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:1.5rem;text-align:center;transition:all .3s ease}.team-card[data-v-6dd1dcb8]:hover{background:hsla(0,0%,100%,.04);transform:translateY(-5px)}.member-visual[data-v-6dd1dcb8]{height:100px;margin:0 auto 1.5rem;position:relative;width:100px}.abstract-avatar[data-v-6dd1dcb8]{align-items:center;border:1px solid;border-radius:50%;box-shadow:0 10px 30px rgba(0,0,0,.3);color:#fff;display:flex;font-size:1.5rem;font-weight:700;height:100%;justify-content:center;width:100%}.social-links[data-v-6dd1dcb8]{bottom:-10px;display:flex;gap:8px;left:50%;opacity:0;position:absolute;transform:translateX(-50%) translateY(10px);transition:all .3s}.team-card:hover .social-links[data-v-6dd1dcb8]{opacity:1;transform:translateX(-50%) translateY(0)}.social-icon[data-v-6dd1dcb8]{align-items:center;background:#fff;border-radius:50%;color:#000;display:flex;font-size:10px;font-weight:800;height:24px;justify-content:center;-webkit-text-decoration:none;text-decoration:none;width:24px}.member-name[data-v-6dd1dcb8]{color:var(--text-main);font-size:1.2rem;margin:0 0 .25rem}.member-role[data-v-6dd1dcb8]{color:var(--accent);font-size:.85rem;font-weight:600;letter-spacing:.05em;margin-bottom:1rem;text-transform:uppercase}.member-bio[data-v-6dd1dcb8]{color:var(--text-muted);font-size:.9rem;line-height:1.5}@keyframes fadeUp-6dd1dcb8{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@media (max-width:1024px){.bento-grid[data-v-6dd1dcb8]{grid-template-columns:1fr 1fr}.mission-card[data-v-6dd1dcb8]{grid-row:auto}.mission-card[data-v-6dd1dcb8],.vision-card[data-v-6dd1dcb8]{grid-column:1/3}}@media (max-width:768px){.page-title[data-v-6dd1dcb8]{font-size:3rem}.bento-grid[data-v-6dd1dcb8]{grid-template-columns:1fr}.mission-card[data-v-6dd1dcb8],.vision-card[data-v-6dd1dcb8]{grid-column:1}.team-grid[data-v-6dd1dcb8]{grid-template-columns:1fr}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=template&id=6dd1dcb8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-wrapper"
  }, [_vm._ssrNode("<div class=\"bg-grid\" data-v-6dd1dcb8></div> <div class=\"glow-orb orb-1\" data-v-6dd1dcb8></div> <div class=\"content-container\" data-v-6dd1dcb8><header class=\"about-header\" data-v-6dd1dcb8><div class=\"label-pill\" data-v-6dd1dcb8>Established 2024</div> <h1 class=\"page-title\" data-v-6dd1dcb8>Architecting the <br data-v-6dd1dcb8><span class=\"text-gradient\" data-v-6dd1dcb8>Synthetic Mind</span></h1> <p class=\"page-subtitle\" data-v-6dd1dcb8>\n        We are a collective of researchers, engineers, and designers building the infrastructure for the next generation of intelligence.\n      </p></header> <section class=\"dna-section\" data-v-6dd1dcb8><div class=\"bento-grid\" data-v-6dd1dcb8><div class=\"bento-card mission-card\" data-v-6dd1dcb8><div class=\"card-label\" data-v-6dd1dcb8>01 // Our Mission</div> <h2 class=\"card-heading\" data-v-6dd1dcb8>Democratizing Intelligence</h2> <p class=\"card-text\" data-v-6dd1dcb8>\n            We believe AGI should not be locked behind walled gardens. Our goal is to provide a unified, high-performance layer that connects businesses to the world's most powerful models, ensuring transparency, efficiency, and scalability.\n          </p> <div class=\"visual-decoration\" data-v-6dd1dcb8><div class=\"line-graph\" data-v-6dd1dcb8></div></div></div> <div class=\"bento-card vision-card\" data-v-6dd1dcb8><div class=\"card-label\" data-v-6dd1dcb8>02 // The Vision</div> <h2 class=\"card-heading\" data-v-6dd1dcb8>Seamless Integration</h2> <p class=\"card-text\" data-v-6dd1dcb8>\n            A future where AI is an invisible utility—like electricity. Reliable, omnipresent, and empowering every click.\n          </p></div> <div class=\"bento-card stat-card\" data-v-6dd1dcb8><div class=\"big-number\" data-v-6dd1dcb8>99.9%</div> <div class=\"stat-label\" data-v-6dd1dcb8>Uptime SLA</div></div> <div class=\"bento-card stat-card\" data-v-6dd1dcb8><div class=\"big-number\" data-v-6dd1dcb8>50M+</div> <div class=\"stat-label\" data-v-6dd1dcb8>Requests/Day</div></div></div></section> <section class=\"team-section\" data-v-6dd1dcb8><div class=\"section-header\" data-v-6dd1dcb8><h2 class=\"section-title\" data-v-6dd1dcb8>The Neural Network</h2> <p class=\"section-desc\" data-v-6dd1dcb8>Meet the minds behind the machine.</p></div> <div class=\"team-grid\" data-v-6dd1dcb8>" + _vm._ssrList(_vm.team, function (member, index) {
    return "<div class=\"team-card\"" + _vm._ssrStyle(null, {
      '--delay': index * 0.1 + 's'
    }, null) + " data-v-6dd1dcb8><div class=\"member-visual\" data-v-6dd1dcb8><div class=\"abstract-avatar\"" + _vm._ssrStyle(null, _vm.getAvatarStyle(index), null) + " data-v-6dd1dcb8><span class=\"initials\" data-v-6dd1dcb8>" + _vm._ssrEscape(_vm._s(_vm.getInitials(member.name))) + "</span></div> <div class=\"social-links\" data-v-6dd1dcb8><a href=\"#\" class=\"social-icon\" data-v-6dd1dcb8>IN</a> <a href=\"#\" class=\"social-icon\" data-v-6dd1dcb8>X</a></div></div> <div class=\"member-info\" data-v-6dd1dcb8><h3 class=\"member-name\" data-v-6dd1dcb8>" + _vm._ssrEscape(_vm._s(member.name)) + "</h3> <div class=\"member-role\" data-v-6dd1dcb8>" + _vm._ssrEscape(_vm._s(member.role)) + "</div> <p class=\"member-bio\" data-v-6dd1dcb8>" + _vm._ssrEscape(_vm._s(member.bio)) + "</p></div></div>";
  }) + "</div></section></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=template&id=6dd1dcb8&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=script&lang=js
/* harmony default export */ var aboutvue_type_script_lang_js = ({
  name: 'AboutPage',
  data() {
    return {
      team: [{
        name: 'Alex Johnson',
        role: 'Chief Executive Officer',
        bio: 'Ex-DeepMind researcher focused on scalable AI infrastructure and ethical alignment.'
      }, {
        name: 'Sarah Chen',
        role: 'Chief Technology Officer',
        bio: 'Architect behind our distributed inference engine. Previously led engineering at Stripe.'
      }, {
        name: 'Michael Rodriguez',
        role: 'Head of Research',
        bio: 'PhD in Computational Neuroscience. working on optimizing context windows.'
      }, {
        name: 'Emily Watson',
        role: 'Lead Data Scientist',
        bio: 'Specializes in model fine-tuning and RAG implementation for enterprise use-cases.'
      }]
    };
  },
  methods: {
    getInitials(name) {
      return name.split(' ').map(n => n[0]).join('');
    },
    getAvatarStyle(index) {
      // Generates a unique gradient for each member based on index
      const hues = [220, 280, 340, 160]; // Blue, Purple, Pink, Teal
      const hue = hues[index % hues.length];
      return {
        background: `linear-gradient(135deg, hsl(${hue}, 60%, 20%), hsl(${hue + 40}, 70%, 40%))`,
        borderColor: `hsl(${hue}, 70%, 50%)`
      };
    }
  }
});
// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_aboutvue_type_script_lang_js = (aboutvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6dd1dcb8",
  "99749160"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map