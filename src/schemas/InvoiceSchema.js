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
    "displayName": true,
    "type": "string"
  },
  "title": {
    "required": true,
    "displayName": true,
    "type": "string"
  },
  "status": {
    "type": "string",
    "defaultsTo": "Draft",
    "skipAll": true,
    "enum": [
      "Draft",
      "Approved",
      "Partial",
      "Paid",
      "Cancelled",
      "Refunded"
    ]
  },
  "client": {
    "description": "Client who will receive the invoice",
    "required": true,
    "mustExist": true,
    "model": "company"
  },
  "awsUsageReport": {
    "description": "If the invoice has been generated by the AWS Usage report, should have this id",
    "model": "awsUsageReport",
    "skipAll": true
  },
  "layout": {
    "description": "Detailed quote proposal.",
    "required": true,
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "invoice"
    }
  },
  "specialObservations": {
    "description": "Specify if the invoice has some special observation",
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "invoice"
    }
  },
  "issueDate": {
    "type": "datetime"
  },
  "dueDate": {
    "type": "datetime"
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
  "discount": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "total": {
    "type": "float",
    "defaultsTo": 0,
    "skipAll": true
  },
  "exchangeRate": {
    "type": "float",
    "skipAll": true
  },
  "products": {
    "description": "Add products to invoice",
    "productList": true,
    "type": "json",
    "defaultsTo": []
  },
  "currency": {
    "model": "currency"
  },
  "quote": {
    "model": "quote",
    "skipAll": true
  },
  "paymentResponsibles": {
    "type": "array",
    "multiple": "user"
  },
  "commissionAgent": {
    "model": "user"
  },
  "commissionRate": {
    "type": "float",
    "defaultsTo": 0
  },
  "commissionTax": {
    "model": "tax"
  },
  "layoutCommissionPo": {
    "description": "Layout for commission purchase order",
    "type": "string",
    "html": true,
    "target": "template",
    "query": {
      "type": "purchaseOrder"
    }
  },
  "commissionPo": {
    "model": "purchaseOrder",
    "skipAll": true
  },
  "passwordProtected": {
    "type": "boolean",
    "defaultsTo": false
  },
  "password": {
    "type": "string",
    "password": true
  },
  "starred": {
    "skipAll": true,
    "type": "array"
  },
  "paymentsReceived": {
    "skipAll": true,
    "type": "array"
  }
}