// ////////////////////////////////////////////////////////////////////////////////
// // 1. 支持 ES Modules 的 import 声明
// ////////////////////////////////////////////////////////////////////////////////

// import createHeading from './heading.js'
// import better from './better.png'
// import './main.css'

// const heading = createHeading()
// const img = new Image()
// img.src = better
// document.body.append(heading)
// document.body.append(img)

// ////////////////////////////////////////////////////////////////////////////////
// // 2. 支持 CommonJS 的 require 函数
// ////////////////////////////////////////////////////////////////////////////////

// const createHeading = require('./heading.js').default
// const better = require('./better.png')
// require('./main.css')

// const heading = createHeading()
// const img = new Image()
// img.src = better
// document.body.append(heading)
// document.body.append(img)

// ////////////////////////////////////////////////////////////////////////////////
// // 3. 支持 AMD 的 require / define 函数
// ////////////////////////////////////////////////////////////////////////////////

// define(['./heading.js', './better.png', './main.css'], (createHeading, better) => {
//   const heading = createHeading.default()
//   const img = new Image()
//   img.src = better
//   document.body.append(heading)
//   document.body.append(img)
// })

// require(['./heading.js', './better.png', './main.css'], (createHeading, better) => {
//   const heading = createHeading.default()
//   const img = new Image()
//   img.src = better
//   document.body.append(heading)
//   document.body.append(img)
// })

////////////////////////////////////////////////////////////////////////////////
// 4. 部分 loader 加载的资源中一些用法也会触发资源模块加载
////////////////////////////////////////////////////////////////////////////////

import './main.css'

import footerHtml from './footer.html'

document.write(footerHtml)
