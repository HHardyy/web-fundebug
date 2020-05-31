/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monitor___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor/ */ \"./src/monitor/index.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/monitor/index.js":
/*!******************************!*\
  !*** ./src/monitor/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_jsError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/jsError.js */ \"./src/monitor/lib/jsError.js\");\n// 监控入口\r\n\r\nObject(_lib_jsError_js__WEBPACK_IMPORTED_MODULE_0__[\"injectJsError\"])()\n\n//# sourceURL=webpack:///./src/monitor/index.js?");

/***/ }),

/***/ "./src/monitor/lib/jsError.js":
/*!************************************!*\
  !*** ./src/monitor/lib/jsError.js ***!
  \************************************/
/*! exports provided: injectJsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"injectJsError\", function() { return injectJsError; });\n/* harmony import */ var _utils_getLastEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getLastEvents.js */ \"./src/monitor/utils/getLastEvents.js\");\n/* harmony import */ var _utils_getSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getSelector.js */ \"./src/monitor/utils/getSelector.js\");\n\r\n\r\n\r\nfunction injectJsError () {\r\n\twindow.addEventListener('error', function(event) {\r\n\t\tlet lastEvent = Object(_utils_getLastEvents_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\t    const log = {\r\n\t    \tkind: 'stability', // 监控指标的大类\r\n\t    \ttype: 'error', // 错误类型\r\n\t    \terrorType: 'jsError', // js执行错误\r\n\t    \turl:'', //错误路径\r\n\t    \tmessage: evnet.message, // 报错信息\r\n\t    \tfilename: event.filename, // 哪个文件报错\r\n\t    \tposition: `第${event.lineno}行, 第${evnet.colno}列`, //报错位置\r\n\t    \tstack: getLines(event.error.stack), // 哪个方法报错\r\n\t    \tselector: lastEvent? Object(_utils_getSelector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lastEvent.path) : '' //最后一个操作的选择器\r\n\t    }\r\n\r\n\t    console.log('log:', log)\r\n\t})\r\n\r\n\tfunction getLines(stack) {\r\n\t\treturn stack.split('\\n').slice(1).map(item => item.replace(/^\\s+at\\s+/)).join('^')\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/monitor/lib/jsError.js?");

/***/ }),

/***/ "./src/monitor/utils/getLastEvents.js":
/*!********************************************!*\
  !*** ./src/monitor/utils/getLastEvents.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet lastEvent\r\n['click', 'touchstart', 'mousedown', 'keydown', 'mouseover'].forEach(method => {\r\n\tdocument.addEventListener(method, function(event) {\r\n\t\tlastEvent = event\r\n\t}, {\r\n\t\tcapture: true, //捕获阶段\r\n\t\tpassive: true //默认不阻止默认事件\r\n\t})\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\r\n\treturn lastEvent\r\n});\n\n//# sourceURL=webpack:///./src/monitor/utils/getLastEvents.js?");

/***/ }),

/***/ "./src/monitor/utils/getSelector.js":
/*!******************************************!*\
  !*** ./src/monitor/utils/getSelector.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getSelecTors(path) {\r\n\treturn path.reverse().filter(element => {\r\n\t\treturn element!==document && element!==window\r\n\t}).map(element => {\r\n\t\tlet selector = ''\r\n\t\tif(element.id){\r\n\t\t\treturn `${element.nodeName.toLowerCase()}#${element.id}`\r\n\t\t} else if(element.className && typeof element.className === 'string') {\r\n\t\t\treturn `${element.nodeName.toLowerCase()}#${element.id}`\r\n\t\t} else {\r\n\t\t\tselector = element.nodeName.toLowerCase()\r\n\t\t}\r\n\t\treturn selector\r\n\t}).join(' ')\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (path) {\r\n\tif (Array.isArray(path)) {\r\n\t\treturn getSelecTors(path)\r\n\t}\r\n});\n\n//# sourceURL=webpack:///./src/monitor/utils/getSelector.js?");

/***/ })

/******/ });