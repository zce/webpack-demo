import fetchApi from '../common/fetch'
import '../common/global.css'
import './posts.css'

export default () => {
  const posts = document.createElement('div')
  posts.className = 'posts'

  posts.innerHTML = '<h2>Posts</h2>'

  fetchApi('/posts').then(data => {
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
}
