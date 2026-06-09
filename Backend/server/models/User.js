const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 4,
      select: false, // IMPORTANT: never return password in API response
    },

    role: {
      type: String,
      enum: ["admin", "viewer"],
      default: "viewer",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);