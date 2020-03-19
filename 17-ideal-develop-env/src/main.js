import createHeading from './heading.js'
import './main.css'
import icon from './icon.png'

const render = el => {
  el.innerHTML = ''

  const heading = createHeading()
  el.append(heading)

  const img = new Image()
  img.src = icon
  el.append(img)
}

render(document.querySelector('#root'))

if (module.hot) {
  module.hot.accept('./heading.js', () => {
    render(document.querySelector('#root'))
  })
}
