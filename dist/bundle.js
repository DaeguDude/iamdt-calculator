/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Google font imports */\n/* Work Sans Light 300 - font-family: 'Work Sans', sans-serif; */\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  background-color: #e3a92de5;\n}\n\n#app {\n  height: 600px;\n  width: 350px;\n  border-radius: 15px;\n  overflow: hidden;\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 6px 8px 30px 2px rgb(41, 41, 41);\n}\n\n#screen {\n  height: 170px;\n  position: relative;\n}\n\n#display-text {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  color: #efefef;\n  font-family: \"Work Sans\", sans-serif;\n  font-weight: 300;\n  font-size: 30px;\n  text-align: right;\n  padding-right: 24px;\n  padding-bottom: 0;\n  margin: 0;\n}\n\n#buttons {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n.button-row {\n  flex-grow: 1;\n  display: flex;\n}\n\n.button-wrapper {\n  height: 100%;\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.button-wrapper button {\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  text-align: center;\n}\n\n#zero-wrapper {\n  flex-grow: 1;\n}\n\n#num0 {\n  height: 70px;\n  width: 153px;\n  border-radius: 140px;\n  text-align: left;\n  padding-left: 28px;\n}\n\n#decimal {\n  font-size: 40px;\n  padding-bottom: 10px;\n}\n\n.dark-grey {\n  background-color: #3c3c3c;\n  color: #efefef;\n  font-size: 32px;\n}\n\n.light-grey {\n  background-color: #b0b0b0;\n  color: black;\n  font-size: 25px;\n}\n\n.orange {\n  background-color: #e9920f;\n  color: #efefef;\n  font-size: 40px;\n}\n\n.awaiting-input {\n  background-color: #efefef;\n  color: #e9920f;\n  font-size: 40px;\n  transition: background-color 0.2s linear, color 0.2s linear;\n}\n\n.not-awaiting-input {\n  background-color: #e9920f;\n  color: #efefef;\n  font-size: 40px;\n  transition: background-color 0.2s linear, color 0.2s linear;\n}\n\n/* Button onClick effects */\n.orange:active {\n  background-color: #e3b063;\n}\n\n.dark-grey:active {\n  background-color: #747474;\n}\n\n.light-grey:active {\n  background-color: #dadada;\n}\n\n@keyframes dark-grey-button-clicked {\n  0% {\n    background-color: #747474;\n  }\n  100% {\n    background-color: #3c3c3c;\n  }\n}\n\n@keyframes light-grey-button-clicked {\n  0% {\n    background-color: #dadada;\n  }\n  100% {\n    background-color: #b0b0b0;\n  }\n}\n\n@keyframes equals-button-clicked {\n  0% {\n    background-color: #e8be7e;\n  }\n  100% {\n    background-color: #e9920f;\n  }\n}\n\n.dark-grey.animating {\n  animation: dark-grey-button-clicked 1s;\n}\n\n.light-grey.animating {\n  animation: light-grey-button-clicked 1s;\n}\n\n#equals.animating {\n  animation: equals-button-clicked 1s;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,wBAAwB;AACxB,gEAAgE;;AAGhE;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,cAAc;EACd,oCAAoC;EACpC,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,2DAA2D;AAC7D;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,2DAA2D;AAC7D;;AAEA,2BAA2B;AAC3B;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,mCAAmC;AACrC","sourcesContent":["/* Google font imports */\n/* Work Sans Light 300 - font-family: 'Work Sans', sans-serif; */\n@import url(\"https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap\");\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  background-color: #e3a92de5;\n}\n\n#app {\n  height: 600px;\n  width: 350px;\n  border-radius: 15px;\n  overflow: hidden;\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 6px 8px 30px 2px rgb(41, 41, 41);\n}\n\n#screen {\n  height: 170px;\n  position: relative;\n}\n\n#display-text {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  color: #efefef;\n  font-family: \"Work Sans\", sans-serif;\n  font-weight: 300;\n  font-size: 30px;\n  text-align: right;\n  padding-right: 24px;\n  padding-bottom: 0;\n  margin: 0;\n}\n\n#buttons {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n.button-row {\n  flex-grow: 1;\n  display: flex;\n}\n\n.button-wrapper {\n  height: 100%;\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.button-wrapper button {\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  text-align: center;\n}\n\n#zero-wrapper {\n  flex-grow: 1;\n}\n\n#num0 {\n  height: 70px;\n  width: 153px;\n  border-radius: 140px;\n  text-align: left;\n  padding-left: 28px;\n}\n\n#decimal {\n  font-size: 40px;\n  padding-bottom: 10px;\n}\n\n.dark-grey {\n  background-color: #3c3c3c;\n  color: #efefef;\n  font-size: 32px;\n}\n\n.light-grey {\n  background-color: #b0b0b0;\n  color: black;\n  font-size: 25px;\n}\n\n.orange {\n  background-color: #e9920f;\n  color: #efefef;\n  font-size: 40px;\n}\n\n.awaiting-input {\n  background-color: #efefef;\n  color: #e9920f;\n  font-size: 40px;\n  transition: background-color 0.2s linear, color 0.2s linear;\n}\n\n.not-awaiting-input {\n  background-color: #e9920f;\n  color: #efefef;\n  font-size: 40px;\n  transition: background-color 0.2s linear, color 0.2s linear;\n}\n\n/* Button onClick effects */\n.orange:active {\n  background-color: #e3b063;\n}\n\n.dark-grey:active {\n  background-color: #747474;\n}\n\n.light-grey:active {\n  background-color: #dadada;\n}\n\n@keyframes dark-grey-button-clicked {\n  0% {\n    background-color: #747474;\n  }\n  100% {\n    background-color: #3c3c3c;\n  }\n}\n\n@keyframes light-grey-button-clicked {\n  0% {\n    background-color: #dadada;\n  }\n  100% {\n    background-color: #b0b0b0;\n  }\n}\n\n@keyframes equals-button-clicked {\n  0% {\n    background-color: #e8be7e;\n  }\n  100% {\n    background-color: #e9920f;\n  }\n}\n\n.dark-grey.animating {\n  animation: dark-grey-button-clicked 1s;\n}\n\n.light-grey.animating {\n  animation: light-grey-button-clicked 1s;\n}\n\n#equals.animating {\n  animation: equals-button-clicked 1s;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/calculatorModel.js":
/*!********************************!*\
  !*** ./src/calculatorModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatorModel": () => (/* binding */ CalculatorModel)
/* harmony export */ });
class CalculatorModel {
  constructor() {}

  add(firstNum, secondNum) {
    return firstNum + secondNum;
  }

  subtract(firstNum, secondNum) {
    return firstNum - secondNum;
  }

  multiply(firstNum, secondNum) {
    return firstNum * secondNum;
  }

  divide(firstNum, secondNum) {
    return firstNum / secondNum;
  }

  operate(firstNum, secondNum, operator) {
    switch (operator) {
      case "add":
        return this.add(firstNum, secondNum);
      case "subtract":
        return this.subtract(firstNum, secondNum);
      case "multiply":
        return this.multiply(firstNum, secondNum);
      case "divide":
        return this.divide(firstNum, secondNum);
      default:
        throw new Error("잘못된 연산자입니다.");
    }
  }

  negate(num) {
    return -num;
  }

  percent(num) {
    return this.divide(num, 100);
  }
}




/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertOperateParam": () => (/* binding */ convertOperateParam),
/* harmony export */   "toFixed": () => (/* binding */ toFixed)
/* harmony export */ });
function convertOperateParam(operator) {
  switch (operator) {
    case "+":
      return "add";
    case "*":
      return "multiply";
    case "-":
      return "subtract";
    case "÷":
      return "divide";
    default:
      throw new Error("잘못된 연산자 기호입니다.");
  }
}

// NOTE: https://stackoverflow.com/a/1685917
// 이 함수는 지수 표기를 하지 않는다는 한에서만 유효함.
// 실제로 제대로 계산을 하고 싶다면, 라이브러리를 쓰라고 권하고 있음.
function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split("e-")[1]);
    if (e) {
      x *= Math.pow(10, e - 1);
      x = "0." + new Array(e).join("0") + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split("+")[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10, e);
      x += new Array(e + 1).join("0");
    }
  }
  return x;
}


/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


class View {
  constructor(calculatorModel) {
    this.calculatorModel = calculatorModel;
    this.result = null;
    this.currentNum = "0";
    this.displayValue = "0";
    this.savedNumber = 0;
    this.savedOperator = null;
    this.lastInput = null;

    this.onOperatorBtnClick = this.onOperatorBtnClick.bind(this);
    this.onEqualBtnClick = this.onEqualBtnClick.bind(this);
    this.onPercentBtnClick = this.onPercentBtnClick.bind(this);
    this.onNegationBtnClick = this.onNegationBtnClick.bind(this);
    this.onClearBtnClick = this.onClearBtnClick.bind(this);
    this.onDecimalBtnClick = this.onDecimalBtnClick.bind(this);
    this.onNumberBtnClick = this.onNumberBtnClick.bind(this);
    this.addLastInputHandler = this.addLastInputHandler.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  addLastInputHandler() {
    document
      .querySelectorAll("button")
      .forEach((button) =>
        button.addEventListener("click", this.onButtonClick)
      );
  }

  onButtonClick(e) {
    const isNumber = Array.from(e.target.classList).includes("number");
    if (isNumber) {
      return (this.lastInput = "number");
    }

    const isOperator = Array.from(e.target.classList).includes("operator");
    if (isOperator) {
      return (this.lastInput = "operator");
    }

    this.lastInput = e.target.id;
  }

  setDisplayValue(value) {
    this.displayValue = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.toFixed)(value);
    this.populateDisplay(this.displayValue);
  }

  populateDisplay(value) {
    document.querySelector("#display-text").innerText = value;
  }

  addEventHandlers() {
    const clearBtn = document.querySelector("#clear");
    clearBtn.addEventListener("click", this.onClearBtnClick);

    const negationBtn = document.querySelector("#negation");
    negationBtn.addEventListener("click", this.onNegationBtnClick);

    const percentBtn = document.querySelector("#percent");
    percentBtn.addEventListener("click", this.onPercentBtnClick);

    const equalBtn = document.querySelector("#equal");
    equalBtn.addEventListener("click", this.onEqualBtnClick);

    const decimalBtn = document.querySelector("#decimal");
    decimalBtn.addEventListener("click", this.onDecimalBtnClick);

    const operatorBtns = document.querySelectorAll(".operator");
    operatorBtns.forEach((operatorBtn) =>
      operatorBtn.addEventListener("click", this.onOperatorBtnClick)
    );

    const numBtns = document.querySelectorAll(".number");
    numBtns.forEach((numBtn) =>
      numBtn.addEventListener("click", this.onNumberBtnClick)
    );

    this.addLastInputHandler();
  }

  onNumberBtnClick(e) {
    if (this.currentNum === "0") {
      this.currentNum = e.target.dataset.numValue;
    } else {
      this.currentNum += e.target.dataset.numValue;
    }

    this.setDisplayValue(this.currentNum);
  }

  onOperatorBtnClick(e) {
    const clickedOperator = e.target.dataset.operator;

    const hasPreviousResult = this.result !== null;
    if (hasPreviousResult) {
      this.savedNumber = this.result;
      this.savedOperator = clickedOperator;
      this.currentNum = "0";
      return;
    }

    const isOperatorClickedInARow = this.lastInput === "operator";
    if (isOperatorClickedInARow) {
      this.savedOperator = clickedOperator;
      return;
    }

    const isFirstInputMinus =
      clickedOperator === "-" && !this.savedOperator && this.currentNum === "0";
    if (isFirstInputMinus) {
      this.currentNum = "-";
      return;
    }

    this.savedNumber = Number(this.currentNum);
    this.savedOperator = clickedOperator;
    this.currentNum = "0";
  }

  onEqualBtnClick() {
    if (!this.savedOperator) {
      return;
    }

    const result = this.calculatorModel.operate(
      this.savedNumber,
      Number(this.currentNum),
      (0,_helper__WEBPACK_IMPORTED_MODULE_0__.convertOperateParam)(this.savedOperator)
    );

    this.onCalculated(result);
    this.setDisplayValue(result);
  }

  onCalculated(result) {
    this.result = result;
    this.savedOperator = null;
    this.savedNumber = 0;
    this.currentNum = "0";
  }

  onPercentBtnClick() {
    const hasPreviousResult = !!this.result;
    if (hasPreviousResult) {
      const percentedValue = this.calculatorModel.percent(this.result);
      this.onCalculated(percentedValue);
      this.setDisplayValue(percentedValue);
      return;
    }

    this.currentNum = this.calculatorModel.percent(this.currentNum);
    this.setDisplayValue(this.currentNum);
  }

  onNegationBtnClick() {
    const hasPreviousResult = !!this.result;
    if (hasPreviousResult) {
      const negatedValue = this.calculatorModel.negate(this.result);
      this.onCalculated(negatedValue);
      this.setDisplayValue(negatedValue);
      return;
    }

    this.currentNum = this.calculatorModel.negate(this.currentNum);
    this.setDisplayValue(this.currentNum);
  }

  onClearBtnClick() {
    this.result = null;
    this.savedOperator = null;
    this.savedNumber = 0;
    this.currentNum = "0";
    this.setDisplayValue(this.currentNum);
  }

  onDecimalBtnClick() {
    const hasDecimal = this.currentNum.indexOf(".") !== -1;
    if (!hasDecimal) {
      this.currentNum += ".";
    }

    this.setDisplayValue(this.currentNum);
  }
}




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculatorModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorModel */ "./src/calculatorModel.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const view = new _view__WEBPACK_IMPORTED_MODULE_1__.View(new _calculatorModel__WEBPACK_IMPORTED_MODULE_0__.CalculatorModel());
view.addEventHandlers();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ3dEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGdEQUFPO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQW1CO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7O1VDNUxoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0Q7QUFDdEI7QUFDVDs7QUFFckIsaUJBQWlCLHVDQUFJLEtBQUssNkRBQWU7QUFDekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pYW1kdC1jYWxjdWxhdG9yLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9pYW1kdC1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9pYW1kdC1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaWFtZHQtY2FsY3VsYXRvci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9pYW1kdC1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2lhbWR0LWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2lhbWR0LWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaWFtZHQtY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9pYW1kdC1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaWFtZHQtY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2lhbWR0LWNhbGN1bGF0b3IvLi9zcmMvY2FsY3VsYXRvck1vZGVsLmpzIiwid2VicGFjazovL2lhbWR0LWNhbGN1bGF0b3IvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL2lhbWR0LWNhbGN1bGF0b3IvLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly9pYW1kdC1jYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2lhbWR0LWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaWFtZHQtY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaWFtZHQtY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2lhbWR0LWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pYW1kdC1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9pYW1kdC1jYWxjdWxhdG9yLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9V29yaytTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdvb2dsZSBmb250IGltcG9ydHMgKi9cXG4vKiBXb3JrIFNhbnMgTGlnaHQgMzAwIC0gZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmOyAqL1xcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2E5MmRlNTtcXG59XFxuXFxuI2FwcCB7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogNnB4IDhweCAzMHB4IDJweCByZ2IoNDEsIDQxLCA0MSk7XFxufVxcblxcbiNzY3JlZW4ge1xcbiAgaGVpZ2h0OiAxNzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2Rpc3BsYXktdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGNvbG9yOiAjZWZlZmVmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJXb3JrIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jYnV0dG9ucyB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5idXR0b24tcm93IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5idXR0b24td3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uLXdyYXBwZXIgYnV0dG9uIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3plcm8td3JhcHBlciB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbiNudW0wIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiAxNTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE0MHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMjhweDtcXG59XFxuXFxuI2RlY2ltYWwge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5kYXJrLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjM2MzYztcXG4gIGNvbG9yOiAjZWZlZmVmO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4ubGlnaHQtZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBiMGIwO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ub3JhbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTkyMGY7XFxuICBjb2xvcjogI2VmZWZlZjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmF3YWl0aW5nLWlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICBjb2xvcjogI2U5OTIwZjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBsaW5lYXIsIGNvbG9yIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4ubm90LWF3YWl0aW5nLWlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTkyMGY7XFxuICBjb2xvcjogI2VmZWZlZjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBsaW5lYXIsIGNvbG9yIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4vKiBCdXR0b24gb25DbGljayBlZmZlY3RzICovXFxuLm9yYW5nZTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzYjA2MztcXG59XFxuXFxuLmRhcmstZ3JleTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0NzQ3NDtcXG59XFxuXFxuLmxpZ2h0LWdyZXk6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XFxufVxcblxcbkBrZXlmcmFtZXMgZGFyay1ncmV5LWJ1dHRvbi1jbGlja2VkIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc0NzQ3NDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYzNjO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxpZ2h0LWdyZXktYnV0dG9uLWNsaWNrZWQge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGIwYjA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZXF1YWxzLWJ1dHRvbi1jbGlja2VkIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4YmU3ZTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk5MjBmO1xcbiAgfVxcbn1cXG5cXG4uZGFyay1ncmV5LmFuaW1hdGluZyB7XFxuICBhbmltYXRpb246IGRhcmstZ3JleS1idXR0b24tY2xpY2tlZCAxcztcXG59XFxuXFxuLmxpZ2h0LWdyZXkuYW5pbWF0aW5nIHtcXG4gIGFuaW1hdGlvbjogbGlnaHQtZ3JleS1idXR0b24tY2xpY2tlZCAxcztcXG59XFxuXFxuI2VxdWFscy5hbmltYXRpbmcge1xcbiAgYW5pbWF0aW9uOiBlcXVhbHMtYnV0dG9uLWNsaWNrZWQgMXM7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsd0JBQXdCO0FBQ3hCLGdFQUFnRTs7QUFHaEU7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztFQUNULDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLDJEQUEyRDtBQUM3RDs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR29vZ2xlIGZvbnQgaW1wb3J0cyAqL1xcbi8qIFdvcmsgU2FucyBMaWdodCAzMDAgLSBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7ICovXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9V29yaytTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2E5MmRlNTtcXG59XFxuXFxuI2FwcCB7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogNnB4IDhweCAzMHB4IDJweCByZ2IoNDEsIDQxLCA0MSk7XFxufVxcblxcbiNzY3JlZW4ge1xcbiAgaGVpZ2h0OiAxNzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2Rpc3BsYXktdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGNvbG9yOiAjZWZlZmVmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJXb3JrIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jYnV0dG9ucyB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5idXR0b24tcm93IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5idXR0b24td3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uLXdyYXBwZXIgYnV0dG9uIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3plcm8td3JhcHBlciB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbiNudW0wIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiAxNTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE0MHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMjhweDtcXG59XFxuXFxuI2RlY2ltYWwge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5kYXJrLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjM2MzYztcXG4gIGNvbG9yOiAjZWZlZmVmO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4ubGlnaHQtZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBiMGIwO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ub3JhbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTkyMGY7XFxuICBjb2xvcjogI2VmZWZlZjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmF3YWl0aW5nLWlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICBjb2xvcjogI2U5OTIwZjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBsaW5lYXIsIGNvbG9yIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4ubm90LWF3YWl0aW5nLWlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTkyMGY7XFxuICBjb2xvcjogI2VmZWZlZjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBsaW5lYXIsIGNvbG9yIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4vKiBCdXR0b24gb25DbGljayBlZmZlY3RzICovXFxuLm9yYW5nZTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzYjA2MztcXG59XFxuXFxuLmRhcmstZ3JleTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0NzQ3NDtcXG59XFxuXFxuLmxpZ2h0LWdyZXk6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XFxufVxcblxcbkBrZXlmcmFtZXMgZGFyay1ncmV5LWJ1dHRvbi1jbGlja2VkIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc0NzQ3NDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYzNjO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxpZ2h0LWdyZXktYnV0dG9uLWNsaWNrZWQge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGIwYjA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZXF1YWxzLWJ1dHRvbi1jbGlja2VkIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4YmU3ZTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk5MjBmO1xcbiAgfVxcbn1cXG5cXG4uZGFyay1ncmV5LmFuaW1hdGluZyB7XFxuICBhbmltYXRpb246IGRhcmstZ3JleS1idXR0b24tY2xpY2tlZCAxcztcXG59XFxuXFxuLmxpZ2h0LWdyZXkuYW5pbWF0aW5nIHtcXG4gIGFuaW1hdGlvbjogbGlnaHQtZ3JleS1idXR0b24tY2xpY2tlZCAxcztcXG59XFxuXFxuI2VxdWFscy5hbmltYXRpbmcge1xcbiAgYW5pbWF0aW9uOiBlcXVhbHMtYnV0dG9uLWNsaWNrZWQgMXM7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgQ2FsY3VsYXRvck1vZGVsIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFkZChmaXJzdE51bSwgc2Vjb25kTnVtKSB7XG4gICAgcmV0dXJuIGZpcnN0TnVtICsgc2Vjb25kTnVtO1xuICB9XG5cbiAgc3VidHJhY3QoZmlyc3ROdW0sIHNlY29uZE51bSkge1xuICAgIHJldHVybiBmaXJzdE51bSAtIHNlY29uZE51bTtcbiAgfVxuXG4gIG11bHRpcGx5KGZpcnN0TnVtLCBzZWNvbmROdW0pIHtcbiAgICByZXR1cm4gZmlyc3ROdW0gKiBzZWNvbmROdW07XG4gIH1cblxuICBkaXZpZGUoZmlyc3ROdW0sIHNlY29uZE51bSkge1xuICAgIHJldHVybiBmaXJzdE51bSAvIHNlY29uZE51bTtcbiAgfVxuXG4gIG9wZXJhdGUoZmlyc3ROdW0sIHNlY29uZE51bSwgb3BlcmF0b3IpIHtcbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICBjYXNlIFwiYWRkXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChmaXJzdE51bSwgc2Vjb25kTnVtKTtcbiAgICAgIGNhc2UgXCJzdWJ0cmFjdFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChmaXJzdE51bSwgc2Vjb25kTnVtKTtcbiAgICAgIGNhc2UgXCJtdWx0aXBseVwiOlxuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseShmaXJzdE51bSwgc2Vjb25kTnVtKTtcbiAgICAgIGNhc2UgXCJkaXZpZGVcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlKGZpcnN0TnVtLCBzZWNvbmROdW0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi7J6Y66q765CcIOyXsOyCsOyekOyeheuLiOuLpC5cIik7XG4gICAgfVxuICB9XG5cbiAgbmVnYXRlKG51bSkge1xuICAgIHJldHVybiAtbnVtO1xuICB9XG5cbiAgcGVyY2VudChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpZGUobnVtLCAxMDApO1xuICB9XG59XG5cbmV4cG9ydCB7IENhbGN1bGF0b3JNb2RlbCB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRPcGVyYXRlUGFyYW0ob3BlcmF0b3IpIHtcbiAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgIGNhc2UgXCIrXCI6XG4gICAgICByZXR1cm4gXCJhZGRcIjtcbiAgICBjYXNlIFwiKlwiOlxuICAgICAgcmV0dXJuIFwibXVsdGlwbHlcIjtcbiAgICBjYXNlIFwiLVwiOlxuICAgICAgcmV0dXJuIFwic3VidHJhY3RcIjtcbiAgICBjYXNlIFwiw7dcIjpcbiAgICAgIHJldHVybiBcImRpdmlkZVwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCLsnpjrqrvrkJwg7Jew7IKw7J6QIOq4sO2YuOyeheuLiOuLpC5cIik7XG4gIH1cbn1cblxuLy8gTk9URTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2ODU5MTdcbi8vIOydtCDtlajsiJjripQg7KeA7IiYIO2RnOq4sOulvCDtlZjsp4Ag7JWK64qU64uk64qUIO2VnOyXkOyEnOunjCDsnKDtmqjtlaguXG4vLyDsi6TsoJzroZwg7KCc64yA66GcIOqzhOyCsOydhCDtlZjqs6Ag7Iu264uk66m0LCDrnbzsnbTruIzrn6zrpqzrpbwg7JOw65286rOgIOq2jO2VmOqzoCDsnojsnYwuXG5leHBvcnQgZnVuY3Rpb24gdG9GaXhlZCh4KSB7XG4gIGlmIChNYXRoLmFicyh4KSA8IDEuMCkge1xuICAgIHZhciBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KFwiZS1cIilbMV0pO1xuICAgIGlmIChlKSB7XG4gICAgICB4ICo9IE1hdGgucG93KDEwLCBlIC0gMSk7XG4gICAgICB4ID0gXCIwLlwiICsgbmV3IEFycmF5KGUpLmpvaW4oXCIwXCIpICsgeC50b1N0cmluZygpLnN1YnN0cmluZygyKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGUgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkuc3BsaXQoXCIrXCIpWzFdKTtcbiAgICBpZiAoZSA+IDIwKSB7XG4gICAgICBlIC09IDIwO1xuICAgICAgeCAvPSBNYXRoLnBvdygxMCwgZSk7XG4gICAgICB4ICs9IG5ldyBBcnJheShlICsgMSkuam9pbihcIjBcIik7XG4gICAgfVxuICB9XG4gIHJldHVybiB4O1xufVxuIiwiaW1wb3J0IHsgY29udmVydE9wZXJhdGVQYXJhbSwgdG9GaXhlZCB9IGZyb20gXCIuL2hlbHBlclwiO1xuXG5jbGFzcyBWaWV3IHtcbiAgY29uc3RydWN0b3IoY2FsY3VsYXRvck1vZGVsKSB7XG4gICAgdGhpcy5jYWxjdWxhdG9yTW9kZWwgPSBjYWxjdWxhdG9yTW9kZWw7XG4gICAgdGhpcy5yZXN1bHQgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudE51bSA9IFwiMFwiO1xuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gXCIwXCI7XG4gICAgdGhpcy5zYXZlZE51bWJlciA9IDA7XG4gICAgdGhpcy5zYXZlZE9wZXJhdG9yID0gbnVsbDtcbiAgICB0aGlzLmxhc3RJbnB1dCA9IG51bGw7XG5cbiAgICB0aGlzLm9uT3BlcmF0b3JCdG5DbGljayA9IHRoaXMub25PcGVyYXRvckJ0bkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkVxdWFsQnRuQ2xpY2sgPSB0aGlzLm9uRXF1YWxCdG5DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25QZXJjZW50QnRuQ2xpY2sgPSB0aGlzLm9uUGVyY2VudEJ0bkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk5lZ2F0aW9uQnRuQ2xpY2sgPSB0aGlzLm9uTmVnYXRpb25CdG5DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGVhckJ0bkNsaWNrID0gdGhpcy5vbkNsZWFyQnRuQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGVjaW1hbEJ0bkNsaWNrID0gdGhpcy5vbkRlY2ltYWxCdG5DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25OdW1iZXJCdG5DbGljayA9IHRoaXMub25OdW1iZXJCdG5DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkTGFzdElucHV0SGFuZGxlciA9IHRoaXMuYWRkTGFzdElucHV0SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25CdXR0b25DbGljayA9IHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkTGFzdElucHV0SGFuZGxlcigpIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIilcbiAgICAgIC5mb3JFYWNoKChidXR0b24pID0+XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkJ1dHRvbkNsaWNrKVxuICAgICAgKTtcbiAgfVxuXG4gIG9uQnV0dG9uQ2xpY2soZSkge1xuICAgIGNvbnN0IGlzTnVtYmVyID0gQXJyYXkuZnJvbShlLnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKFwibnVtYmVyXCIpO1xuICAgIGlmIChpc051bWJlcikge1xuICAgICAgcmV0dXJuICh0aGlzLmxhc3RJbnB1dCA9IFwibnVtYmVyXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzT3BlcmF0b3IgPSBBcnJheS5mcm9tKGUudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJvcGVyYXRvclwiKTtcbiAgICBpZiAoaXNPcGVyYXRvcikge1xuICAgICAgcmV0dXJuICh0aGlzLmxhc3RJbnB1dCA9IFwib3BlcmF0b3JcIik7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0SW5wdXQgPSBlLnRhcmdldC5pZDtcbiAgfVxuXG4gIHNldERpc3BsYXlWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdG9GaXhlZCh2YWx1ZSk7XG4gICAgdGhpcy5wb3B1bGF0ZURpc3BsYXkodGhpcy5kaXNwbGF5VmFsdWUpO1xuICB9XG5cbiAgcG9wdWxhdGVEaXNwbGF5KHZhbHVlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LXRleHRcIikuaW5uZXJUZXh0ID0gdmFsdWU7XG4gIH1cblxuICBhZGRFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbGVhclwiKTtcbiAgICBjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkNsZWFyQnRuQ2xpY2spO1xuXG4gICAgY29uc3QgbmVnYXRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25lZ2F0aW9uXCIpO1xuICAgIG5lZ2F0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uTmVnYXRpb25CdG5DbGljayk7XG5cbiAgICBjb25zdCBwZXJjZW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZXJjZW50XCIpO1xuICAgIHBlcmNlbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25QZXJjZW50QnRuQ2xpY2spO1xuXG4gICAgY29uc3QgZXF1YWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VxdWFsXCIpO1xuICAgIGVxdWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uRXF1YWxCdG5DbGljayk7XG5cbiAgICBjb25zdCBkZWNpbWFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWNpbWFsXCIpO1xuICAgIGRlY2ltYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25EZWNpbWFsQnRuQ2xpY2spO1xuXG4gICAgY29uc3Qgb3BlcmF0b3JCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcGVyYXRvclwiKTtcbiAgICBvcGVyYXRvckJ0bnMuZm9yRWFjaCgob3BlcmF0b3JCdG4pID0+XG4gICAgICBvcGVyYXRvckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbk9wZXJhdG9yQnRuQ2xpY2spXG4gICAgKTtcblxuICAgIGNvbnN0IG51bUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm51bWJlclwiKTtcbiAgICBudW1CdG5zLmZvckVhY2goKG51bUJ0bikgPT5cbiAgICAgIG51bUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbk51bWJlckJ0bkNsaWNrKVxuICAgICk7XG5cbiAgICB0aGlzLmFkZExhc3RJbnB1dEhhbmRsZXIoKTtcbiAgfVxuXG4gIG9uTnVtYmVyQnRuQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLmN1cnJlbnROdW0gPT09IFwiMFwiKSB7XG4gICAgICB0aGlzLmN1cnJlbnROdW0gPSBlLnRhcmdldC5kYXRhc2V0Lm51bVZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnROdW0gKz0gZS50YXJnZXQuZGF0YXNldC5udW1WYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnNldERpc3BsYXlWYWx1ZSh0aGlzLmN1cnJlbnROdW0pO1xuICB9XG5cbiAgb25PcGVyYXRvckJ0bkNsaWNrKGUpIHtcbiAgICBjb25zdCBjbGlja2VkT3BlcmF0b3IgPSBlLnRhcmdldC5kYXRhc2V0Lm9wZXJhdG9yO1xuXG4gICAgY29uc3QgaGFzUHJldmlvdXNSZXN1bHQgPSB0aGlzLnJlc3VsdCAhPT0gbnVsbDtcbiAgICBpZiAoaGFzUHJldmlvdXNSZXN1bHQpIHtcbiAgICAgIHRoaXMuc2F2ZWROdW1iZXIgPSB0aGlzLnJlc3VsdDtcbiAgICAgIHRoaXMuc2F2ZWRPcGVyYXRvciA9IGNsaWNrZWRPcGVyYXRvcjtcbiAgICAgIHRoaXMuY3VycmVudE51bSA9IFwiMFwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlzT3BlcmF0b3JDbGlja2VkSW5BUm93ID0gdGhpcy5sYXN0SW5wdXQgPT09IFwib3BlcmF0b3JcIjtcbiAgICBpZiAoaXNPcGVyYXRvckNsaWNrZWRJbkFSb3cpIHtcbiAgICAgIHRoaXMuc2F2ZWRPcGVyYXRvciA9IGNsaWNrZWRPcGVyYXRvcjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpc0ZpcnN0SW5wdXRNaW51cyA9XG4gICAgICBjbGlja2VkT3BlcmF0b3IgPT09IFwiLVwiICYmICF0aGlzLnNhdmVkT3BlcmF0b3IgJiYgdGhpcy5jdXJyZW50TnVtID09PSBcIjBcIjtcbiAgICBpZiAoaXNGaXJzdElucHV0TWludXMpIHtcbiAgICAgIHRoaXMuY3VycmVudE51bSA9IFwiLVwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2F2ZWROdW1iZXIgPSBOdW1iZXIodGhpcy5jdXJyZW50TnVtKTtcbiAgICB0aGlzLnNhdmVkT3BlcmF0b3IgPSBjbGlja2VkT3BlcmF0b3I7XG4gICAgdGhpcy5jdXJyZW50TnVtID0gXCIwXCI7XG4gIH1cblxuICBvbkVxdWFsQnRuQ2xpY2soKSB7XG4gICAgaWYgKCF0aGlzLnNhdmVkT3BlcmF0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNhbGN1bGF0b3JNb2RlbC5vcGVyYXRlKFxuICAgICAgdGhpcy5zYXZlZE51bWJlcixcbiAgICAgIE51bWJlcih0aGlzLmN1cnJlbnROdW0pLFxuICAgICAgY29udmVydE9wZXJhdGVQYXJhbSh0aGlzLnNhdmVkT3BlcmF0b3IpXG4gICAgKTtcblxuICAgIHRoaXMub25DYWxjdWxhdGVkKHJlc3VsdCk7XG4gICAgdGhpcy5zZXREaXNwbGF5VmFsdWUocmVzdWx0KTtcbiAgfVxuXG4gIG9uQ2FsY3VsYXRlZChyZXN1bHQpIHtcbiAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICB0aGlzLnNhdmVkT3BlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuc2F2ZWROdW1iZXIgPSAwO1xuICAgIHRoaXMuY3VycmVudE51bSA9IFwiMFwiO1xuICB9XG5cbiAgb25QZXJjZW50QnRuQ2xpY2soKSB7XG4gICAgY29uc3QgaGFzUHJldmlvdXNSZXN1bHQgPSAhIXRoaXMucmVzdWx0O1xuICAgIGlmIChoYXNQcmV2aW91c1Jlc3VsdCkge1xuICAgICAgY29uc3QgcGVyY2VudGVkVmFsdWUgPSB0aGlzLmNhbGN1bGF0b3JNb2RlbC5wZXJjZW50KHRoaXMucmVzdWx0KTtcbiAgICAgIHRoaXMub25DYWxjdWxhdGVkKHBlcmNlbnRlZFZhbHVlKTtcbiAgICAgIHRoaXMuc2V0RGlzcGxheVZhbHVlKHBlcmNlbnRlZFZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnROdW0gPSB0aGlzLmNhbGN1bGF0b3JNb2RlbC5wZXJjZW50KHRoaXMuY3VycmVudE51bSk7XG4gICAgdGhpcy5zZXREaXNwbGF5VmFsdWUodGhpcy5jdXJyZW50TnVtKTtcbiAgfVxuXG4gIG9uTmVnYXRpb25CdG5DbGljaygpIHtcbiAgICBjb25zdCBoYXNQcmV2aW91c1Jlc3VsdCA9ICEhdGhpcy5yZXN1bHQ7XG4gICAgaWYgKGhhc1ByZXZpb3VzUmVzdWx0KSB7XG4gICAgICBjb25zdCBuZWdhdGVkVmFsdWUgPSB0aGlzLmNhbGN1bGF0b3JNb2RlbC5uZWdhdGUodGhpcy5yZXN1bHQpO1xuICAgICAgdGhpcy5vbkNhbGN1bGF0ZWQobmVnYXRlZFZhbHVlKTtcbiAgICAgIHRoaXMuc2V0RGlzcGxheVZhbHVlKG5lZ2F0ZWRWYWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50TnVtID0gdGhpcy5jYWxjdWxhdG9yTW9kZWwubmVnYXRlKHRoaXMuY3VycmVudE51bSk7XG4gICAgdGhpcy5zZXREaXNwbGF5VmFsdWUodGhpcy5jdXJyZW50TnVtKTtcbiAgfVxuXG4gIG9uQ2xlYXJCdG5DbGljaygpIHtcbiAgICB0aGlzLnJlc3VsdCA9IG51bGw7XG4gICAgdGhpcy5zYXZlZE9wZXJhdG9yID0gbnVsbDtcbiAgICB0aGlzLnNhdmVkTnVtYmVyID0gMDtcbiAgICB0aGlzLmN1cnJlbnROdW0gPSBcIjBcIjtcbiAgICB0aGlzLnNldERpc3BsYXlWYWx1ZSh0aGlzLmN1cnJlbnROdW0pO1xuICB9XG5cbiAgb25EZWNpbWFsQnRuQ2xpY2soKSB7XG4gICAgY29uc3QgaGFzRGVjaW1hbCA9IHRoaXMuY3VycmVudE51bS5pbmRleE9mKFwiLlwiKSAhPT0gLTE7XG4gICAgaWYgKCFoYXNEZWNpbWFsKSB7XG4gICAgICB0aGlzLmN1cnJlbnROdW0gKz0gXCIuXCI7XG4gICAgfVxuXG4gICAgdGhpcy5zZXREaXNwbGF5VmFsdWUodGhpcy5jdXJyZW50TnVtKTtcbiAgfVxufVxuXG5leHBvcnQgeyBWaWV3IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBDYWxjdWxhdG9yTW9kZWwgfSBmcm9tIFwiLi9jYWxjdWxhdG9yTW9kZWxcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCB2aWV3ID0gbmV3IFZpZXcobmV3IENhbGN1bGF0b3JNb2RlbCgpKTtcbnZpZXcuYWRkRXZlbnRIYW5kbGVycygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9