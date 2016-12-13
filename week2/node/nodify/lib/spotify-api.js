const URL = require('url');
const fetch = require('node-fetch');


function loadAPI(type, q) {
  const url = URL.format({
          protocol: 'https:',
          host: 'api.spotify.com',
          pathname: '/v1/search',
          query: {type: type, q: q}
          })
  return fetch(url)
  .then((response) => {
    return response.json();
  })
}

function searchArtists(name) {
  return loadAPI('artist', name)
  .then((json) => {
    return json.artists.items;
  })
}

function searchTracks(name) {
  return loadAPI('track', name)
  .then((json) => {
    return json.tracks.items;
  })
}

module.exports = {
  searchArtists,
  searchTracks
};