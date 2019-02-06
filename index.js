const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// get

const getList = [
  '/answer/0110',
  '/answer/0120',
  '/answer/0210',
  '/answer/0210',
  '/question/0100',
  '/question/0200',
  '/help',
  '/answers/1',
  '/job/1',
  '/applicants/1',
  '/applicants/1/contacts',
  '/applicants/1/educations',
  '/applicants/1/projects',
  '/applicants/1/experiences',
  '/applicants/1/certificates',
  '/applicants/1/extracurriculars',
  '/applicants/1/applications',
  '/users/1/collections',
  '/questions/1',
  '/questions/1/answers'
  
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
