export default () => {
  const element = document.createElement('h2')

  element.textContent = 'Hello world'
  element.addEventListener('click', () => {
    alert('Hello webpack')
  })

  return element
}
