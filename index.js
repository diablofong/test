'use strict';

var express = require("express");

var port = 8080;

var app = express();

var router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello World!55');
});

app.use('/gg/v1', router);

app.listen(port);

console.log('port' + port);
