exports.ids = [2,1];
exports.modules = {

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4d0048c3", content, true, context)
};

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TapToPlace_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TapToPlace_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TapToPlace_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TapToPlace_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TapToPlace_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a-scene{position:fixed;top:0;left:0;right:0;bottom:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("28f1127f", content, true, context)
};

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TapToPlace.vue?vue&type=template&id=0444a75f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('a-scene',{pre:true,attrs:{"tap-place":"","landing-page":"","xrextras-loading":"","xrextras-runtime-error":"","renderer":"colorManagement:true","vr-mode-ui":"enabled: false","xrweb":"\nallowedDevices: any;\ndefaultEnvironmentFogIntensity: 0.5;\ndefaultEnvironmentFloorTexture: #groundTex;\ndefaultEnvironmentFloorColor: #FFF;\ndefaultEnvironmentSkyBottomColor: #B4C4CC;\ndefaultEnvironmentSkyTopColor: #5ac8fa;\ndefaultEnvironmentSkyGradientStrength: 0.5;"}},[_c('a-assets',{pre:true,attrs:{"v-pre":""}},[_c('img',{pre:true,attrs:{"id":"groundTex","src":"/sand.jpg"}}),_vm._v(" "),_c('a-asset-item',{pre:true,attrs:{"id":"cactusModel","v-pre":"","src":"/cactus.glb"}})],1),_vm._v(" "),_c('a-camera',{pre:true,attrs:{"id":"camera","v-pre":"","position":"0 8 0","raycaster":"objects: .cantap","cursor":"\n  fuse: false;\n  rayOrigin: mouse;"}}),_vm._v(" "),_c('a-entity',{pre:true,attrs:{"v-pre":"","light":"\n  type: directional;\n  intensity: 0.8;\n  castShadow: true;\n  shadowMapHeight:2048;\n  shadowMapWidth:2048;\n  shadowCameraTop: 40;\n  shadowCameraBottom: -40;\n  shadowCameraRight: 40;\n  shadowCameraLeft: -40;\n  target: #camera","xrextras-attach":"target: camera; offset: 8 15 4","position":"1 4.3 2.5","shadow":""}}),_vm._v(" "),_c('a-light',{pre:true,attrs:{"v-pre":"","type":"ambient","intensity":"0.5"}}),_vm._v(" "),_c('a-box',{pre:true,attrs:{"id":"ground","v-pre":"","class":"cantap","scale":"1000 2 1000","position":"0 -0.99 0","material":"shader: shadow; transparent: true; opacity: 0.4","shadow":""}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TapToPlace.vue?vue&type=template&id=0444a75f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TapToPlace.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const tapPlaceComponent = {
  schema: {
    min: {
      default: 6
    },
    max: {
      default: 10
    }
  },

  init() {
    console.log('init');
    const ground = document.getElementById('ground');
    ground.background = 'green';
    console.log('ground: ', ground);
    ground.addEventListener('click', event => {
      console.log('click'); // Create new entity for the new object

      const newElement = document.createElement('a-entity'); // The raycaster gives a location of the touch in the scene

      const touchPoint = event.detail.intersection.point;
      newElement.setAttribute('position', touchPoint);
      const randomYRotation = Math.random() * 360;
      newElement.setAttribute('rotation', `0 ${randomYRotation} 0`);
      const randomScale = Math.floor(Math.random() * (Math.floor(this.data.max) - Math.ceil(this.data.min)) + Math.ceil(this.data.min));
      newElement.setAttribute('visible', 'false');
      newElement.setAttribute('scale', '0.0001 0.0001 0.0001');
      newElement.setAttribute('shadow', {
        receive: false
      });
      newElement.setAttribute('gltf-model', '#cactusModel');
      this.el.sceneEl.appendChild(newElement);
      newElement.addEventListener('model-loaded', () => {
        // Once the model is loaded, we are ready to show it popping in using an animation
        newElement.setAttribute('visible', 'true');
        newElement.setAttribute('animation', {
          property: 'scale',
          to: `${randomScale} ${randomScale} ${randomScale}`,
          easing: 'easeOutElastic',
          dur: 800
        });
      });
    });
  }

};
/* harmony default export */ var TapToPlacevue_type_script_lang_js_ = ({
  name: 'TapToPlace',
  data: () => ({
    isLoaded: false
  }),

  head() {
    return {
      // Scripts required by the 8th Wall Framework
      script: [// slightly modified version of A-Frame, which fixes some polish concerns
      {
        src: '//cdn.8thwall.com/web/aframe/8frame-1.1.0.min.js'
      }, {
        src: '//cdn.8thwall.com/web/aframe/aframe-physics-system-4.0.1.min.js'
      }, // XR Extras - provides utilities like load screen, almost there, and error handling.
      // See github.com/8thwall/web/tree/master/xrextras
      {
        src: '//cdn.8thwall.com/web/xrextras/xrextras.js'
      }, // 8thWall Web - Replace the app key here with your own app key (only works on authorised domains)
      {
        src: '//apps.8thwall.com/xrweb?appKey=zl9iYLs0UnM13G8kugSsXRboJtbC2OJOZWmGeV4dvmWAKMaq1kwdRIa4PTdy4WvWyR05BG'
      }]
    };
  },

  mounted() {
    this.on8thWallReady();
  },

  methods: {
    on8thWallReady() {
      AFRAME.registerComponent('tap-place', tapPlaceComponent);
    }

  }
});
// CONCATENATED MODULE: ./components/TapToPlace.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TapToPlacevue_type_script_lang_js_ = (TapToPlacevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TapToPlace.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(22)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TapToPlacevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7e08fe84"
  
)

/* harmony default export */ var TapToPlace = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".overlay{top:0;left:0;bottom:0;right:0;z-index:10}.overlay,button{position:absolute}button{left:50%;top:90%;transform:translate(-50%,-50%);background-color:#7611b6;color:#fff;max-width:100%;font-size:1.5rem;border:none;border-radius:20px;padding:10px 15px;font-family:Helvetica,sans-serif}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=6f602dc7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('TapToPlace')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=6f602dc7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'HomePage'
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6d610b23"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TapToPlace: __webpack_require__(25).default})


/***/ })

};;
//# sourceMappingURL=index.js.map