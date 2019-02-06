const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// get

const getList = [
  '/help',
  '/questions/1'
];

getList.forEach((value) => {
  app.get(value, function (req, res) {
    res.json(require(`./get${value}`));
  });
});

app.get('/', function (req, res) {
  res.send('frontend-mock');
});

// server

const server = app.listen(4000, function () {
  console.log('frontend-mock: port %s', server.address().port);
});
