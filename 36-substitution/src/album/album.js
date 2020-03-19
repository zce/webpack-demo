import fetchApi from '../common/fetch'
import '../common/global.css'
import './album.css'

export default () => {
  const album = document.createElement('div')
  album.className = 'album'

  album.innerHTML = '<h2>Albums</h2>'

  fetchApi('/photos?albumId=1').then(data => {
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
}
