const fetch = require('node-fetch');

const fetchNewsData = (request, response) => {
  const endpoint = request.body.value;
  return fetch(`https://www.reddit.com/r/${endpoint}.json`)
    .then((resp) => resp.json())
    .then((data) => response.json(data));
};

module.exports = fetchNewsData;
