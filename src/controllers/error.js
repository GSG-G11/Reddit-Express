const path = require('path');

const clientError = (request, response) => {
  response.status(404).sendFile(path.join(__dirname, '..', '..', 'public', 'html', '404.html'));
};

const serverError = (error, request, response) => {
  response.status(500).sendFile(path.join(__dirname, '..', '..', 'public', 'html', '500.html'));
};

module.exports = { clientError, serverError };
