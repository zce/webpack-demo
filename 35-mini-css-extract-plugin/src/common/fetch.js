export default endpoint => {
  return fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
    .then(response => response.json())
}
