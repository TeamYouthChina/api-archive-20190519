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
  '/answers/1',
  '/applicants',
  '/applicants/1',
  '/applicants/1/applications',
  '/applicants/1/certificates',
  '/applicants/1/contacts',
  '/applicants/1/educations',
  '/applicants/1/experiences',
  '/applicants/1/extracurriculars',
  '/applicants/1/projects',
  '/articles/1',
  '/companies/1',
  '/disconvery/articles',
  '/discovery/companies',
  '/discovery/jobs',
  '/discovery/questions',
  '/discovery/users',
  '/editorials/1',
  '/help',
  '/home/new',
  '/home/hot',
  '/jobs/1',
  '/job-for-you/campus',
  '/job-for-you/general',
  '/job-for-you/intern',
  '/me',
  '/question/0100',
  '/question/0200',
  '/questions',
  '/questions/1',
  '/questions/1/answers',
  '/users/1/attentions',
  '/videos/1'
];

// post

const postList = [
  '/applicants',
  '/applicants/1/certificates',
  '/applicants/1/contacts',
  '/applicants/1/educations',
  '/applicants/1/experiences',
  '/applicants/1/extracurriculars',
  '/applicants/1/projects',
  '/jobs/1/apply',
  '/jobs/search',
  '/questions',
  '/questions/1/answers'
];

// put

const putList = [
  '/applicants/1',
  '/applicants/1/certificates/1',
  '/applicants/1/contacts',
  '/applicants/1/educations/1',
  '/applicants/1/experiences/1',
  '/applicants/1/extracurriculars/1',
  '/applicants/1/projects/1',
  '/jobs/1/attention',
  '/questions/1',
  '/questions/1/attention',
  '/questions/1/invite',
  '/questions/1/invite/1'
];

// delete

const deleteList = [
  '/applicants/1/certificates/1',
  '/applicants/1/educations/1',
  '/applicants/1/experiences/1',
  '/applicants/1/extracurriculars/1',
  '/applicants/1/projects/1',
  '/articles/attentions/1',
  '/companies/attentions/1',
  '/jobs/collections/1',
  '/questions/1',
  '/questions/attentions/1'
];


getList.forEach((value) => {
  app.get(value, function (req, res) {
    res.json(require(`./get${value}`));
  });
});

postList.forEach((value) => {
  app.post(value, function (req, res) {
    res.json(require(`./post${value}`));
  });
});

putList.forEach((value) => {
  app.put(value, function (req, res) {
    res.json(require(`./put${value}`));
  });
});

deleteList.forEach((value) => {
  app.delete(value, function (req, res) {
    res.json(require(`./delete${value}`));
  });
});

app.get('/', function (req, res) {
  res.send('frontend-mock');
});

// server

const server = app.listen(4000, function () {
  console.log('frontend-mock: port %s', server.address().port);
});
