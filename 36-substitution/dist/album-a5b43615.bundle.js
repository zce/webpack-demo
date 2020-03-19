(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (endpoint => {
  return fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
    .then(response => response.json())
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _common_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _common_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _album_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _album_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_album_css__WEBPACK_IMPORTED_MODULE_2__);




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const album = document.createElement('div')
  album.className = 'album'

  album.innerHTML = '<h2>Albums</h2>'

  Object(_common_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/photos?albumId=1').then(data => {
    data.forEach(item => {
      const section = document.createElement('section')
      section.className = 'photo'

      const img = document.createElement('img')
      img.src = item.thumbnailUrl
      section.appendChild(img)

      const h3 = document.createElement('h3')
      h3.textContent = item.title
      section.appendChild(h3)

      album.appendChild(section)
    })
  })

  return album
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
]]);