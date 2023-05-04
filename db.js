const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://space:space@cluster0.sptr3rd.mongodb.net/BigCircle?retryWrites=true&w=majority"
);

module.exports = connection;
