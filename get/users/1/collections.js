// GET /users/1/collections

module.exports = {
  "content": {
    "companies": [
      {
        "id": 0,
        "company": {
          "id": 0,
          "name": "string",
          "avatarUrl": "string"
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
            "avatarUrl": "string"
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
