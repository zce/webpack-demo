import createHeading from './heading.js'
import './main.css'
import icon from './icon.png'

const heading = createHeading()

document.body.append(heading)

const img = new Image()
img.src = icon

document.body.append(img)

// ======================== fetch proxy api example ========================

const ul = document.createElement('ul')
document.body.append(ul)

// 跨域请求，虽然 GitHub 支持 CORS，但是不是每个服务端都应该支持。
// fetch('https://api.github.com/users')
fetch('/api/users') // http://localhost:8080/api/users
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const li = document.createElement('li')
      li.textContent = item.login
      ul.append(li)
    })
  })
