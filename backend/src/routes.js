const express = require('express');
const routes = express.Router();

const Doces = require('../src/controllers/doces');

routes.get('/doces', Doces.index)

module.exports = routes;