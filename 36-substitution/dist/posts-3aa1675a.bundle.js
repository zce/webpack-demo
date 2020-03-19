(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _common_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _common_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _posts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _posts_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_posts_css__WEBPACK_IMPORTED_MODULE_2__);




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const posts = document.createElement('div')
  posts.className = 'posts'

  posts.innerHTML = '<h2>Posts</h2>'

  Object(_common_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/posts').then(data => {
    data.forEach(item => {
      const article = document.createElement('article')
      article.className = 'post'

      const h3 = document.createElement('h3')
      h3.textContent = item.title
      article.appendChild(h3)

      const paragraph = document.createElement('p')
      paragraph.textContent = item.body
      article.appendChild(paragraph)

      posts.appendChild(article)
    })
  })

  return posts
});

console.log('11111')


/***/ }),
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
]]);