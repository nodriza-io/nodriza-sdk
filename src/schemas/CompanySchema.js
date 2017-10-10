module.exports = {
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
    "model": "user",
    "skipAll": true
  },
  "updatedBy": {
    "description": "Last user who updated the resource",
    "model": "user",
    "skipAll": true
  },
  "type": {
    "description": "Company type",
    "example": "host",
    "type": "string",
    "defaultsTo": "client",
    "enum": [
      "host",
      "client",
      "partner",
      "provider"
    ],
    "required": true
  },
  "name": {
    "description": "Company friendly name",
    "example": "Acme",
    "type": "string",
    "displayName": true,
    "required": true
  },
  "legalName": {
    "description": "Full company name used for legal and accounting issues",
    "example": "Acme Inc.",
    "type": "string"
  },
  "shortname": {
    "description": "Unique shortname identifier",
    "example": "acme-inc",
    "type": "string",
    "required": true,
    "unique": true,
    "regex": "/^([a-z0-9_-]+)$/",
    "minLength": 2,
    "maxLength": 16,
    "skipUpdate": true,
    "existCheck": true
  },
  "currency": {
    "description": "Currency code",
    "model": "currency",
    "mustExist": true
  },
  "website": {
    "description": "Full company website url",
    "example": "http://acme-inc.com",
    "type": "string",
    "maxLength": 253
  },
  "phone": {
    "description": "Phone number",
    "type": "string",
    "example": "+1 508-695-1212"
  },
  "country": {
    "description": "Country name",
    "model": "country",
    "mustExist": true
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
  "Map": {
    "description": "Map company location",
    "type": "json"
  },
  "referedBy": {
    "description": "The user who refered this company as client",
    "model": "user",
    "mustExist": true
  },
  "size": {
    "description": "Number of company employees",
    "example": "51-200",
    "type": "string",
    "enum": [
      "1-10",
      "51-200",
      "201-500",
      "501-1000",
      "11-50",
      "5000-10000",
      "1001-5000",
      "10000+"
    ]
  },
  "industry": {
    "description": "Company industry type",
    "example": "Computer Networking",
    "type": "string",
    "enum": [
      "Accounting",
      "Alternative Medicine",
      "Arts and Crafts",
      "Airlines/Aviation",
      "Alternative Dispute Resolution",
      "Animation",
      "Apparel & Fashion",
      "Architecture & Planning",
      "Automotive",
      "Aviation & Aerospace",
      "Banking",
      "Biotechnology",
      "Broadcast Media",
      "Building Materials",
      "Business Supplies and Equipment",
      "Capital Markets",
      "Chemicals",
      "Civic & Social Organization",
      "Civil Engineering",
      "Commercial Real Estate",
      "Computer & Network Security",
      "Computer Games",
      "Computer Hardware",
      "Computer Networking",
      "Computer Software",
      "Construction",
      "Consumer Electronics",
      "Consumer Goods",
      "Consumer Services",
      "Cosmetics",
      "Dairy",
      "Defense & Space",
      "Design",
      "Education Management",
      "E-Learning",
      "Electrical/Electronic Manufacturing",
      "Entertainment",
      "Environmental Services",
      "Events Services",
      "Executive Office",
      "Facilities Services",
      "Farming",
      "Financial Services",
      "Fine Art",
      "Fishery",
      "Food & Beverages",
      "Food Production",
      "Fund-Raising",
      "Furniture",
      "Glass, Ceramics & Concrete",
      "Government Administration",
      "Government Relations",
      "Graphic Design",
      "Health, Wellness and Fitness",
      "Higher Education",
      "Hospital & Health Care",
      "Hospitality",
      "Human Resources",
      "Import and Export",
      "Individual & Family Services",
      "Industrial Automation",
      "Information Services",
      "Information Technology and Services",
      "Insurance",
      "International Affairs",
      "International Trade and Development",
      "Internet",
      "Investment Banking",
      "Investment Management",
      "Judiciary",
      "Law Enforcement",
      "Law Practice",
      "Legal Services",
      "Leisure, Travel & Tourism",
      "Libraries",
      "Logistics and Supply Chain",
      "Luxury Goods & Jewelry",
      "Machinery",
      "Management Consulting",
      "Maritime",
      "Market Research",
      "Marketing and Advertising",
      "Mechanical or Industrial Engineering",
      "Media Production",
      "Medical Devices",
      "Medical Practice",
      "Mental Health Care",
      "Mining & Metals",
      "Motion Pictures and Film",
      "Museums and Institutions",
      "Music",
      "Nanotechnology",
      "Newspapers",
      "Nonprofit Organization Management",
      "Oil & Energy",
      "Online Media",
      "Outsourcing/Offshoring",
      "Package/Freight Delivery",
      "Packaging and Containers",
      "Performing Arts",
      "Pharmaceuticals",
      "Philanthropy",
      "Photography",
      "Plastics",
      "Political Organization",
      "Primary/Secondary Education",
      "Printing",
      "Professional Training & Coaching",
      "Program Development",
      "Public Policy",
      "Public Relations and Communications",
      "Publishing",
      "Ranching",
      "Real Estate",
      "Recreational Facilities and Services",
      "Religious Institutions",
      "Renewables & Environment",
      "Research",
      "Restaurants",
      "Retail",
      "Security and Investigations",
      "Semiconductors",
      "Shipbuilding",
      "Sporting Goods",
      "Sports",
      "Staffing and Recruiting",
      "Telecommunications",
      "Textiles",
      "Think Tanks",
      "Translation and Localization",
      "Transportation/Trucking/Railroad",
      "Utilities",
      "Venture Capital & Private Equity",
      "Veterinary",
      "Warehousing",
      "Wholesale",
      "Wine and Spirits",
      "Wireless",
      "Writing and Editing",
      "Gambling & Casinos",
      "Paper & Forest Products",
      "Supermarkets",
      "Public Safety",
      "Tobacco",
      "Legislative Office",
      "Militar"
    ]
  },
  "logos": {
    "description": "Company logo",
    "type": "json",
    "skipAll": true
  },
  "description": {
    "description": "Company description",
    "example": "Acmen Inc. is a new company that will provide high quality technical and environmental engineering services to it's clients.",
    "type": "string",
    "maxLength": 125000
  },
  "tags": {
    "description": "Tags could be used for multiple purposes",
    "type": "array"
  }
}