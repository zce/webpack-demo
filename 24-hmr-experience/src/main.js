import createEditor from './editor'
import background from './better.png'
import './global.css'

const editor = createEditor()
document.body.appendChild(editor)

const img = new Image()
img.src = background
document.body.appendChild(img)

// ================================================================
// HMR 手动处理模块热更新
// 不用担心这些代码在生产环境冗余的问题，因为通过 webpack 打包后，
// 这些代码全部会被移除，这些只是开发阶段用到
if (module.hot) {
  let hotEditor = editor
  module.hot.accept('./editor.js', () => {
    // 当 editor.js 更新，自动执行此函数
    // 临时记录编辑器内容
    const value = hotEditor.innerHTML
    // 移除更新前的元素
    document.body.removeChild(hotEditor)
    // 创建新的编辑器
    // 此时 createEditor 已经是更新过后的函数了
    hotEditor = createEditor()
    // 还原编辑器内容
    hotEditor.innerHTML = value
    // 追加到页面
    document.body.appendChild(hotEditor)
  })

  module.hot.accept('./better.png', () => {
    // 当 better.png 更新后执行
    // 重写设置 src 会触发图片元素重新加载，从而局部更新图片
    img.src = background
  })

  // style-loader 内部自动处理更新样式，所以不需要手动处理样式模块
}
