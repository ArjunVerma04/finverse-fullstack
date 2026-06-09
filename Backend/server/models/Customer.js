const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);