import fetchApi from './fetch'
import './global.css'
import './index.css'

const mainElement = document.querySelector('.main')

fetchApi('/posts').then(data => {
  data.forEach(item => {
    const article = document.createElement('article')
    article.className = 'post'

    const h2 = document.createElement('h2')
    h2.textContent = item.title
    article.appendChild(h2)

    const paragraph = document.createElement('p')
    paragraph.textContent = item.body
    article.appendChild(paragraph)

    mainElement.appendChild(article)
  })
})
