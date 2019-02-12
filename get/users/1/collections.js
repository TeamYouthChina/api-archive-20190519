// GET /users/1/collections

module.exports = {
  "content": {
    "companies": [
      {
        "id": 0,
        "company": {
          "id": 0,
          "name": "string",
          "avatarUrl": "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
        },
        "status": "active"
      }
    ],
    "jobs": [
      {
        "id": 0,
        "job": {
          "id": 0,
          "name": "string",
          "organization": {
            "id": 0,
            "name": "string",
            "avatarUrl": "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
          },
          "location": 0,
          "type": "full-time",
          "deadLine": "string"
        },
        "status": "active"
      }
    ]
  },
  "status": {
    "code": 0,
    "reason": "string"
  }
};
