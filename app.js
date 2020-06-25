const morgan = require('morgan');
const express = require('express');
const app = express()
const static = express.static();
app.get('/', function (req, res) {
  res.send('hello world')
})
