const express = require('express');
const path = require('path');

const app = express();
const filePath = path.join(__dirname, '..', '..', 'public');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(filePath));

app.set('port', process.env.PORT || 8000);

module.exports = app;
