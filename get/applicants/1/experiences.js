// GET /applicants/1/experiences

module.exports = {
  "content": [
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
  "status": {
    "code": 0,
    "reason": "string"
  }
};

