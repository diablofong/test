'use strict';

var express = require("express");

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World999!');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
