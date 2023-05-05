const mongoose = require("mongoose");

// Schema of User with types
const userSchema = mongoose.Schema(
  {
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    mobile: Number,
  },
  {
    versionKey: false,
  }
);

// users Model With Collect name - users
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
