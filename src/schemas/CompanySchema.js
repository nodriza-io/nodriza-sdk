module.exports = {
  "readOnly": {
    "skipAll": true,
    "type": "boolean"
  },
  "createdAt": {
    "type": "datetime",
    "skipAll": true
  },
  "updatedAt": {
    "type": "datetime",
    "skipAll": true
  },
  "createdBy": {
    "description": "User who created the resource",
    "required": true,
    "model": "user",
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "required": true,
    "model": "user",
    "skipAll": true
  },
  "type": {
    "description": "Company type",
    "example": "host",
    "required": true,
    "type": "string",
    "defaultsTo": "client",
    "enum": [
      "host",
      "client",
      "partner",
      "provider"
    ]
  },
  "name": {
    "description": "Company friendly name",
    "example": "Acme",
    "required": true,
    "type": "string",
    "displayName": true
  },
  "shortname": {
    "description": "Unique shortname identifier. Only alphanumeric, dash and underscore allowed",
    "example": "acme-inc",
    "unique": true,
    "type": "string",
    "regex": "/^([a-z0-9_-]+)$/",
    "minLength": 2,
    "maxLength": 32,
    "skipAll": true,
    "existCheck": true
  },
  "legalName": {
    "description": "Full company name used for legal and accounting issues",
    "example": "Acme Inc.",
    "type": "string"
  },
  "website": {
    "description": "Full company website url",
    "example": "http://acme-inc.com",
    "type": "string"
  },
  "phone": {
    "description": "Phone number",
    "type": "string",
    "example": "+1 508-695-1212"
  },
  "logos": {
    "description": "Company logo",
    "type": "json",
    "skipAll": true
  },
  "taxId": {
    "description": "Identification number used for tax purposes",
    "type": "string",
    "unique": true
  },
  "map": {
    "description": "Google Maps Geo Location",
    "type": "json",
    "map": true,
    "skipAll": true,
    "example": {}
  },
  "address": {
    "description": "Google Maps address location",
    "type": "string",
    "skipAll": true,
    "address": true
  },
  "country": {
    "description": "Country name",
    "model": "country",
    "mustExist": true,
    "noCreate": true
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
  "referedBy": {
    "description": "The user who refered this company as client",
    "model": "user"
  },
  "paymentResponsibles": {
    "type": "array",
    "multiple": "user"
  },
  "referenceNumber": {
    "unique": true,
    "type": "string"
  },
  "industry": {
    "description": "Business Industry",
    "required": false,
    "model": "category",
    "$filter": {
      "field": "type",
      "value": "Industry"
    }
  },
  "size": {
    "description": "Company Size",
    "required": false,
    "type": "float"
  },
  "status": {
    "description": "Company Status",
    "required": false,
    "model": "category",
    "$filter": {
      "field": "type",
      "value": "Status"
    }
  },
  "specialObservations": {
    "description": "Specify if the proposal has some special observation",
    "type": "string",
    "longtext": "true"
  },
  "renewalDate": {
    "description": "Open field for dates",
    "type": "datetime"
  },
  "renewalAmount": {
    "description": "Open field for number",
    "type": "float"
  }
}