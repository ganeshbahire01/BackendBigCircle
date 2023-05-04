const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    userID: String,
    BookImg: String,
    BookTitle: String,
    BookAuthor: String,
    BookPrice: Number,
  },
  {
    versionKey: false,
  }
);

const BookModel = mongoose.model("book", bookSchema);

module.exports = BookModel;
