module.exports = {
  "createdBy": {
    "description": "User who created the resource",
    "model": "user",
    "required": true,
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "model": "user",
    "required": true,
    "skipAll": true
  },
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "firstName": {
    "description": "User first name",
    "example": "John",
    "type": "string",
    "displayName": true,
    "notEmpty": true
  },
  "lastName": {
    "description": "User last name",
    "example": "Doe",
    "displayName": true,
    "type": "string"
  },
  "email": {
    "description": "User email",
    "example": "jdoe@acme.com",
    "required": true,
    "unique": true,
    "inputType": "email",
    "type": "string",
    "regex": "/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim",
    "existCheck": true
  },
  "company": {
    "description": "Company where the user belongs",
    "example": "59418bcd105605cc2693a981",
    "required": true,
    "model": "company",
    "mustExist": true
  },
  "position": {
    "description": "Company user position",
    "example": "Manager",
    "type": "string"
  },
  "department": {
    "description": "Company department where the user belongs",
    "example": "5940200e93e326e90c636826",
    "model": "department",
    "mustExist": true,
    "required": false,
    "defaultsTo": "Unassigned"
  },
  "identificationNumber": {
    "description": "User identificationNumber number",
    "example": "80103085",
    "type": "string"
  },
  "mobile": {
    "description": "User mobile number",
    "example": "57 311 521 3448",
    "type": "string"
  },
  "phone": {
    "description": "Company phone number",
    "example": "57 1 673 9407",
    "type": "string"
  },
  "country": {
    "description": "Country name",
    "example": "United States",
    "type": "string"
  },
  "city": {
    "description": "City name",
    "example": "Los Angeles",
    "type": "string"
  },
  "street": {
    "description": "Street name",
    "example": "2719 Hyperion Ave",
    "type": "string"
  },
  "state": {
    "description": "State name",
    "example": "CA",
    "type": "string"
  },
  "postal": {
    "description": "Postal Code",
    "type": "string",
    "example": "90027"
  },
  "avatars": {
    "description": "User avatar in different sizes",
    "type": "json",
    "skipAll": true
  },
  "role": {
    "description": "User to roles association",
    "collection": "role",
    "via": "user",
    "skipAll": true
  },
  "permission": {
    "description": "User to permission association",
    "collection": "permission",
    "via": "user",
    "skipAll": true
  },
  "auth": {
    "description": "Authentication type",
    "example": "local",
    "defaultsTo": "local",
    "enum": [
      "local",
      "oauth"
    ],
    "skipAll": true
  },
  "resetPassword": {
    "description": "Token to reset user password",
    "type": "json",
    "skipSearch": true,
    "skipAll": true
  },
  "apps": {
    "description": "OAuth apps with accessTokens",
    "example": {
      "google": {
        "accessToken": "ya29.Glx0BB1aXg0ZvNMdriWMUHAoUTTcJODKKCyEvyMpn8skBfzFGgI_0Q4KKUZK7qXWgZiOw0fxy306ZoGwWCE5YLastKORAFNPx33gFZV6Tg32KzEDttcqm79Du0Pc0Q"
      }
    },
    "defaultsTo": {},
    "type": "json",
    "skipAll": true
  },
  "home": {
    "description": "View route to redirect user after successful login, this route is inherited from first role assigned",
    "example": "/dashboard",
    "type": "string",
    "skipAll": true
  },
  "password": {
    "description": "At least 1 numeric charter, 1 lowercase, 1 uppercase, min len 8 length",
    "example": "Shox009_",
    "type": "string",
    "skipUpdate": true
  },
  "status": {
    "description": "Activate or deactivate user",
    "example": "active",
    "type": "string",
    "defaultsTo": "active",
    "enum": [
      "active",
      "inactive",
      "deleted"
    ]
  },
  "skype": {
    "description": "Skype username",
    "example": "jdoe",
    "type": "string"
  },
  "referenceNumber": {
    "unique": true,
    "type": "string"
  },
  "metadata": {
    "type": "json"
  }
}