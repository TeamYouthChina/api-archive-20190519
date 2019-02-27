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
  '/answers/1/comments',
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
  '/articles/1/comments',
  '/companies/1',
  '/disconvery/articles',
  '/discovery/companies',
  '/discovery/jobs',
  '/discovery/questions',
  '/discovery/users',
  '/editorials/1',
  '/editorials/1/comments',
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
  '/videos/1',
  '/videos/1/comments'
];

// post

const postList = [
  '/answers/1/comments',
  '/applicants',
  '/applicants/1/certificates',
  '/applicants/1/contacts',
  '/applicants/1/educations',
  '/applicants/1/experiences',
  '/applicants/1/extracurriculars',
  '/applicants/1/projects',
  '/applicants/resgister',
  '/articles',
  '/articles/1/comments',
  '/companies',
  '/editorials',
  '/editorials/1/comments',
  '/jobs/1/apply',
  '/jobs/search',
  '/login',
  '/questions',
  '/questions/1/answers',
  '/videos',
  '/videos/1/comments'
];

// put

const putList = [
  '/answers/1',
  '/answers/1/upvote',
  '/applicants/1',
  '/applicants/1/certificates/1',
  '/applicants/1/contacts',
  '/applicants/1/educations/1',
  '/applicants/1/experiences/1',
  '/applicants/1/extracurriculars/1',
  '/applicants/1/projects/1',
  '/articles/1',
  '/articles/1/attention',
  '/companies/1',
  '/companies/1/attention',
  '/editorials/1',
  '/editorials/1/upvote',
  '/editorials/1/attention',
  '/jobs/1/attention',
  '/questions/1',
  '/questions/1/attention',
  '/questions/1/invite',
  '/questions/1/invite/1',
  '/videos/1/attention',
  '/videos/1/upvote'
];

// delete

const deleteList = [
  '/answers/1',
  '/applicants/1/certificates/1',
  '/applicants/1/educations/1',
  '/applicants/1/experiences/1',
  '/applicants/1/extracurriculars/1',
  '/applicants/1/projects/1',
  '/articles/1',
  '/articles/attentions/1',
  '/companies/attentions/1',
  '/editorials/1',
  '/jobs/collections/1',
  '/questions/1',
  '/questions/attentions/1',
  '/videos/1'
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
