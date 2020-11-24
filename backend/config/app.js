const express = require('express');
const routes = require('../src/routes')

const app = express();

//body Paser
app.use(express.json());

app.use(routes);

module.exports = app;
