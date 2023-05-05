const mongoose = require("mongoose");

// Schema of Books with types

const bookSchema = mongoose.Schema(
  {
    userID: String,
    BookImg: String,
    BookTitle: String,
    BookAuthor: Array,
    BookPrice: Number,
  },
  {
    versionKey: false,
  }
);
// users Model With Collect name - books
const BookModel = mongoose.model("book", bookSchema);

module.exports = BookModel;
