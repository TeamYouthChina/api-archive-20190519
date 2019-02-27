// POST /applicants/resgister

module.exports = {
  "content": {
    "id": 0,
    "name": "name",
    "avatarUrl": "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
    "isInJob": true,
    "skills": [
      "skills"
    ],
    "currentCompany": {
      "id": 0,
      "name": "name",
      "avatarUrl": "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      "location": "location",
      "website": "website",
      "note": "note",
      "nation": "nation"
    },
    "educations": [
      {
        "university": "university",
        "major": "major",
        "degree": "degree",
        "duration": {
          "begin": "begin",
          "end": "end"
        },
        "location": "location",
        "note": "note"
      }
    ],
    "contacts": {
      "emails": [
        "emails"
      ],
      "phonenumbers": [
        "phonenumbers"
      ]
    },
    "works": [
      {
        "id": 0,
        "employer": "employer",
        "position": "position",
        "duration": {
          "begin": "begin",
          "end": "end"
        },
        "location": "location",
        "note": "note"
      }
    ],
    "projects": [
      {
        "id": 0,
        "name": "name",
        "role": "role",
        "duration": {
          "begin": "begin",
          "end": "end"
        },
        "note": "note"
      }
    ],
    "extracurriculars": [
      {
        "id": 0,
        "name": "name",
        "role": "role",
        "organization": "organization",
        "duration": {
          "begin": "begin",
          "end": "end"
        },
        "note": "note"
      }
    ],
    "certifications": [
      {
        "name": "name",
        "authority": "authority",
        "duration": {
          "begin": "begin",
          "end": "end"
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


