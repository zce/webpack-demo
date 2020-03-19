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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n\nvar heading = Object(_heading_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\ndocument.body.append(heading);\nconsole.log('main.js running');\nconsole.log111('main.js running');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz81NmQ3Il0sIm5hbWVzIjpbImhlYWRpbmciLCJjcmVhdGVIZWFkaW5nIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsImxvZzExMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQywyREFBYSxFQUE3QjtBQUVBQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBZCxDQUFxQkosT0FBckI7QUFFQUssT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFFQUQsT0FBTyxDQUFDRSxNQUFSLENBQWUsaUJBQWYiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVIZWFkaW5nIGZyb20gJy4vaGVhZGluZy5qcydcclxuXHJcbmNvbnN0IGhlYWRpbmcgPSBjcmVhdGVIZWFkaW5nKClcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRpbmcpXHJcblxyXG5jb25zb2xlLmxvZygnbWFpbi5qcyBydW5uaW5nJylcclxuXHJcbmNvbnNvbGUubG9nMTExKCdtYWluLmpzIHJ1bm5pbmcnKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  console.log('Heading~');\n  var element = document.createElement('h2');\n  element.textContent = 'Hello world';\n  element.classList.add('heading');\n  element.addEventListener('click', function () {\n    alert('Hello webpack');\n  });\n  return element;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVhZGluZy5qcz9hZGMxIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWxlcnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUsMkVBQU07QUFDbkJBLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFFQSxNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFoQjtBQUVBRixTQUFPLENBQUNHLFdBQVIsR0FBc0IsYUFBdEI7QUFDQUgsU0FBTyxDQUFDSSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixTQUF0QjtBQUNBTCxTQUFPLENBQUNNLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdENDLFNBQUssQ0FBQyxlQUFELENBQUw7QUFDRCxHQUZEO0FBSUEsU0FBT1AsT0FBUDtBQUNELENBWkQiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnSGVhZGluZ34nKVxyXG5cclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG5cclxuICBlbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIHdvcmxkJ1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpXHJcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGFsZXJ0KCdIZWxsbyB3ZWJwYWNrJylcclxuICB9KVxyXG5cclxuICByZXR1cm4gZWxlbWVudFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);