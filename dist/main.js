/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!*********************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n #9F84BD Purple Mountain Majesty\\n #C09BD8 Wisteria\\n #EBC3DB Orchid Pink\\n #EDE3E9 Lavender Blush\\n #E6E4CE Eggshell\\n*/\\n\\n* {\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  background: #EBC3DB;\\n}\\n\\n.text {\\n  color: #EDE3E9;\\n  font-size: 1.2rem;\\n}\\n\\n.not-read {\\n  background: rgb(77, 77, 77) !important;\\n}\\n\\n.header__container {\\n  display: flex;\\n  justify-content: center;\\n  background: #9F84BD;\\n  box-shadow: .3rem 0 1rem .3rem #9F84BD;\\n}\\n\\n.header__title {\\n  font-size: 5rem;\\n  padding: 1rem 0 1rem 0;\\n}\\n\\n.library__container {\\n  padding: 1rem;\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  gap: 1rem;\\n}\\n\\n.library__card-container {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  font-size: 1.5rem;\\n  color: #EDE3E9;\\n  background: linear-gradient(#9F84BD, #853db6);\\n  box-shadow: .3rem .3rem .2rem rgba(0, 0, 0, .5);\\n  padding: 2rem;\\n  border-radius: 1.5rem;\\n}\\n\\n.library__card-info {\\n  margin: 1rem 0 1rem 0;\\n}\\n\\n.library__card-button--delete {\\n  position: absolute;\\n  right: 2rem;\\n  top: 1rem;\\n  color: #E6E4CE;\\n  font-size: 3rem;\\n  text-align: end;\\n  transition: transform 300ms ease-in-out;\\n  cursor: pointer;\\n}\\n\\n.library__card-button--delete:hover {\\n  transform: scale(1.5);\\n}\\n\\n.library__card-button--read {\\n  color: #E6E4CE;\\n  text-align: end;\\n}\\n\\n.library__add-button {\\n  background: #E6E4CE;\\n  color: #a09e8e;\\n  font-size: 4rem;\\n  width: 5rem;\\n  height: 5rem;\\n  border: none;\\n  border-radius: 50%;\\n  cursor: pointer;\\n  box-shadow: .2rem .2rem .1rem rgba(0, 0, 0, .2);\\n}\\n\\n.library__add-button:hover {\\n  filter: brightness(90%);\\n}\\n\\n.library__new-book-dropdown {\\n  position: relative;\\n}\\n\\n.library__form {\\n  position: absolute;\\n  top: -1rem;\\n  right: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  background: linear-gradient( #9F84BD, #853db6);\\n  padding: 2rem;\\n  border-radius: 1.5rem;\\n  pointer-events: none;\\n  opacity: 0;\\n  transform: translateY(-1rem);\\n  transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;\\n  box-shadow: .3rem .3rem .2rem rgba(0, 0, 0, .5);\\n}\\n\\n.active {\\n  pointer-events: all;\\n  opacity: 1;\\n  transform: translateY(1rem);\\n}\\n\\n.library__form > input {\\n  background: #EDE3E9;\\n  color: #853db6;\\n  font-size: 1.2rem;\\n  border: none; \\n  margin-bottom: 0.8rem;\\n  margin-top: .2rem;\\n  text-align: center;\\n}\\n\\ninput:invalid {\\n  border: 0.1rem solid red;\\n}\\n\\n.library__form-submit {\\n  margin-top: 1rem !important; \\n  background: #C09BD8;\\n  border: none;\\n  border-radius: .5rem;\\n  width: 50%;\\n  height: 2rem;\\n}\\n\\n.library__form-submit:hover {\\n  filter: brightness(90%);\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://better-library/./src/styles.css?../../../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/api.js":
/*!************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/runtime/api.js ***!
  \************************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://better-library/../../../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!*********************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://better-library/../../../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../../../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../../../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../../../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../../../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"../../../node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://better-library/./src/styles.css?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***********************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***********************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://better-library/../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!***************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \***************************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://better-library/../../../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!*****************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://better-library/../../../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!*****************************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://better-library/../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!**********************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://better-library/../../../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!****************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://better-library/../../../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/book */ \"./src/modules/book.js\");\n/* harmony import */ var _modules_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/library */ \"./src/modules/library.js\");\n\n\n\n\nconst myStorage = JSON.parse(localStorage.getItem('books'));\nconst myLibrary = new _modules_library__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nfunction loadLibrarySkeleton() {\n  document.body.innerHTML = `\n  <div class=\"header__container\">\n    <div class=\"header__title text\">\n      ???? Better Library\n    </div>\n  </div>\n\n  <div class=\"library__container\">\n    <div class=\"library__new-book-dropdown\">\n      <button class=\"library__add-button\">+</button>\n      <form class=\"library__form text\">\n        <label for=\"title\">Book title:</label>\n        <input type=\"text\" id=\"title\" name=\"title\" required>\n        <label for=\"author\">Author:</label>\n        <input type=\"text\" id=\"author\" name=\"author\" required>\n        <label for=\"pages\">Pages:</label>\n        <input type=\"number\" id=\"pages\" name=\"pages\" required>\n        <div>\n          Read Book:\n        </div>\n        <div>\n          <label for=\"hasRead\">Yes</label>\n          <input type=\"radio\" id=\"hasRead\" name=\"read\" value=\"true\">\n          <label for=\"hasNotRead\">No</label>\n          <input type=\"radio\" id=\"hasNotRead\" name=\"read\" value=\"false\">\n        </div>\n        <button type=\"submit\" class=\"library__form-submit text\" value=\"Submit!\">Submit!</button>\n      </form>\n    </div>\n  </div>`;\n\n  const formSubmitBtn = document.querySelector('.library__form-submit');\n  const bookDropdownForm = document.querySelector('.library__form');\n\n  //  Lets the dropdown for adding books appear and disappear\n  document.addEventListener('click', (e) => {\n    if (e.target.closest('.library__form') !== null) return;\n\n    const isBookDropdownButton = e.target.matches('.library__add-button');\n\n    if (isBookDropdownButton) {\n      bookDropdownForm.classList.toggle('active');\n      return;\n    }\n    bookDropdownForm.classList.remove('active');\n  });\n\n  // Create a new Book through form\n  formSubmitBtn.addEventListener('click', () => {\n    if (\n      !document.querySelector('#title').checkValidity()\n      || !document.querySelector('#author').checkValidity()\n      || !document.querySelector('#pages').checkValidity()\n    ) return;\n    myLibrary.addBook(new _modules_book__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      bookDropdownForm[0].value,\n      bookDropdownForm[1].value,\n      bookDropdownForm[2].value,\n      bookDropdownForm[3].checked,\n    ));\n    myLibrary.writeToLocalStorage();\n  });\n}\n\nfunction loadLibraryContent() {\n  for (let i = 0; i < myLibrary.books.length; i += 1) {\n    const newCard = document.createElement('div');\n    newCard.innerHTML = myLibrary.books[i].getHTMLcontent(i);\n\n    document.querySelector('.library__container').insertBefore(\n      newCard,\n      document.querySelector('.library__new-book-dropdown'),\n    );\n\n    const deleteButton = newCard.querySelector('.library__card-button--delete');\n    deleteButton.addEventListener('click', () => {\n      myLibrary.removeBook(i);\n      myLibrary.writeToLocalStorage();\n      loadLibrarySkeleton();\n      loadLibraryContent();\n    });\n\n    const readButton = newCard.querySelector('.library__card-button--read');\n    readButton.addEventListener('click', () => {\n      const wrapperNode = newCard.querySelector('.library__card-container');\n      wrapperNode.classList.toggle('not-read');\n      myLibrary.books[i].changeReadStatus();\n      myLibrary.writeToLocalStorage();\n    });\n  }\n}\n\nif (localStorage.key(0)) {\n  for (let i = 0; i < myStorage.length; i += 1) {\n    myLibrary.addBook(new _modules_book__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      myStorage[i].title,\n      myStorage[i].author,\n      myStorage[i].pages,\n      myStorage[i].isRead,\n    ));\n  }\n}\n\nloadLibrarySkeleton();\nloadLibraryContent();\n\n\n//# sourceURL=webpack://better-library/./src/index.js?");

/***/ }),

/***/ "./src/modules/book.js":
/*!*****************************!*\
  !*** ./src/modules/book.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Book)\n/* harmony export */ });\nclass Book {\n  constructor(title, author, pages, isRead) {\n    this.title = title;\n    this.author = author;\n    this.pages = pages;\n    this.isRead = isRead;\n  }\n\n  getHTMLcontent(indexOfCard) {\n    return `<div id=\"${indexOfCard}\" class=\"library__card-container ${this.isRead ? '' : 'not-read'}\">\n    <span class=\"library__card-button--delete\">x</span>\n    <span class=\"library__card-info\"><strong>Title: </strong>${this.title}</span>\n    <span class=\"library__card-info\"><strong>Author: </strong>${this.author}</span>\n    <span class=\"library__card-info\"><strong>Pages: </strong>${this.pages}</span>\n    <div class=\"library__card-button--read\">\n      <label for=\"read\">Mark as read:</label>\n      <input type=\"checkbox\" id=\"read\" name=\"read\" ${this.isRead ? 'checked' : ''}>\n    </div>\n    </div>`;\n  }\n\n  changeReadStatus() {\n    this.isRead = !this.isRead;\n  }\n}\n\n\n//# sourceURL=webpack://better-library/./src/modules/book.js?");

/***/ }),

/***/ "./src/modules/library.js":
/*!********************************!*\
  !*** ./src/modules/library.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Library)\n/* harmony export */ });\nclass Library {\n  constructor() {\n    this.books = [];\n  }\n\n  removeBook(indexOfBook) {\n    this.books.splice(indexOfBook, 1);\n  }\n\n  addBook(book) {\n    this.books.push(book);\n  }\n\n  getBooks() {\n    return this.books;\n  }\n\n  writeToLocalStorage() {\n    localStorage.setItem('books', JSON.stringify(this.books));\n  }\n}\n\n\n//# sourceURL=webpack://better-library/./src/modules/library.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;