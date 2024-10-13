const mongoose = require('mongoose');


const CompanySchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId, // Use ObjectId to reference the User table
      ref: "User", // Reference to the User model
      required: true,
    },
    company_name: {
      type: String,
      required: [true, "Company name is required"],
    },
    address: {
      type: String,
      required: [true, "Company address is required"],
    },
    contact_number: {
      type: String,
      required: [true, "Contact number is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    website: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Check if the model already exists
const Company = mongoose.models.Company || mongoose.model('Company', CompanySchema);

export default Company;


