// GET /applicants/1

module.exports = {
  "content": {
    "id": 0,
    "name": "string",
    "avatarUrl": "string",
    "isInJob": true,
    "currentCompany": {
      "id": 0,
      "name": "string",
      "avatarUrl": "string"
    },
    "educations": [
      {
        "university": "string",
        "major": "string",
        "degree": "string",
        "duration": {
          "begin": "string",
          "end": "string"
        },
        "location": "string",
        "note": "string"
      }
    ],
    "contacts": {
      "emails": [
        "string"
      ],
      "phonenumbers": [
        "string"
      ]
    },
    "works": [
      {
        "employer": "string",
        "position": "string",
        "duration": {
          "begin": "string",
          "end": "string"
        },
        "location": "string",
        "note": "string"
      }
    ],
    "projects": [
      {
        "name": "string",
        "role": "string",
        "duration": {
          "begin": "string",
          "end": "string"
        },
        "note": "string"
      }
    ],
    "extracurriculars": [
      {
        "name": "string",
        "role": "string",
        "organization": "string",
        "duration": {
          "begin": "string",
          "end": "string"
        },
        "location": "string",
        "note": "string"
      }
    ],
    "certifications": [
      {
        "name": "string",
        "authority": "string",
        "duration": {
          "begin": "string",
          "end": "string"
        },
        "note": "string"
      }
    ]
  },
  "status": {
    "code": 0,
    "reason": "string"
  }
};


