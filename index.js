const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', function (req, res) {
  res.send('frontend-mock');
});

app.get('/help', function (req, res) {
  res.json(require('./get/help'));
});

const server = app.listen(4000, function () {
  console.log('frontend-mock: port %s', server.address().port);
});
