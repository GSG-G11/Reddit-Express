const express = require('express');
const path = require('path');
const { clientError, serverError } = require('./controllers/error');

module.exports = {
  express,
  path,
  clientError,
  serverError,
};
