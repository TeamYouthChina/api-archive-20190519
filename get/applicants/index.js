// GET /applicants

module.exports = {

   "content": {
    "id": 1,
    "name": "name",
    "avatarUrl": "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
    "isInJob": true,
    "skills": [
      "网站开发"
    ],
   "currentCompany": {
      "id": 1,
      "name": "百度",
      "avatarUrl": "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      "location": "中国",
      "website": "test@163.com",
      "note": "note",
      "nation": "China"
    },
   "educations": [
      {
        "university": "gwu",
        "major": "1",
        "degree": "master",
        "duration": {
          "begin": "2018-10-11T00:00:00.000+0000",
          "end": "2020-05-14T00:00:00.000+0000"
        },
        "location": "中国江苏",
        "note": "note"
      }
    ],
   "contacts": {
      "emails": [
        "test@126.com"
      ],
      "phonenumbers": [
        "18463722634"
      ]
    },
   "works": [
      {
        "id": 1,
        "employer": "Facebook",
        "position": "SDE",
        "duration": {
          "begin": "2017-09-11T00:00:00.000+0000",
          "end": "2018-10-11T00:00:00.000+0000"
        },
        "location": "中国江苏",
        "note": "note"
      }
    ],
   "projects": [
      {
        "id": 1,
        "name": "web develop",
        "role": "backend",
        "duration": {
          "begin": "2018-09-11T00:00:00.000+0000",
          "end": "2018-10-11T00:00:00.000+0000"
        },
        "note": "note"
      }
    ],
     "extracurriculars": [
      {
        "id": 1,
        "name": "volunteer",
        "role": "worker",
        "organization": "gwu",
        "duration": {
          "begin": "2018-10-11T00:00:00.000+0000",
          "end": "2018-10-12T00:00:00.000+0000"
        },
        "note": "note"
      }
    ],
    "certifications": [
      {
        "name": "Java skill",
        "authority": "CSSA",
        "duration": {
          "begin": "2016-10-01T00:00:00.000+0000",
          "end": "2018-10-11T00:00:00.000+0000"
        },
        "note": "note"
      }
    ]
  },
  "status": {
    "code": 2000,
    "reason": "reason"
  }
};
