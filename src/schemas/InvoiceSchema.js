module.exports = {
  "createdBy": {
    "description": "User who created the resource",
    "model": "user",
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "model": "user",
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
  "invoiceNumber": {
    "description": "Unique invoice idetification number",
    "unique": true,
    "type": "string"
  },
  "status": {
    "type": "string",
    "defaultsTo": "draft",
    "enum": [
      "draft",
      "approved",
      "delivered",
      "partial",
      "paid",
      "cancelled",
      "refunded",
      "due"
    ]
  },
  "client": {
    "description": "Client who will receive the invoice",
    "required": true,
    "model": "company"
  },
  "currency": {
    "required": true,
    "model": "currency"
  },
  "usageReportId": {
    "description": "If the invoice has been generated by the AWS Usage report, should have this id",
    "model": "awsUsageReport",
    "skipAll": true
  },
  "issueDate": {
    "type": "datetime"
  },
  "dueDate": {
    "type": "datetime"
  },
  "products": {
    "description": "Add products to invoice",
    "productList": true,
    "type": "json",
    "defaultsTo": []
  },
  "amount": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "tax": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "total": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "paymentResponsibles": {
    "description": "Send notifications about this AWS Account payments to these users",
    "type": "array",
    "multiple": "user"
  },
  "specialObservations": {
    "description": "Specify if the invoice has some special observation",
    "type": "string",
    "longtext": true
  }
}