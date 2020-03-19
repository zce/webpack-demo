webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heading_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _heading_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_heading_css__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (() => {
  console.log('Heading~')

  const element = document.createElement('h2')

  element.textContent = 'Hello world'
  element.classList.add('heading')
  element.addEventListener('click', () => {
    alert('Hello webpack')
  })

  return element
});


/***/ })
])