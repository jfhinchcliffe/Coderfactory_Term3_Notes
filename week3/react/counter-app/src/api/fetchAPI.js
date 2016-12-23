export default function fetchAPI(path, options) {
  return fetch('http://localhost:3001' + path, options)
    .then(res => res.json())
}