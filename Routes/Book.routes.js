const express = require("express");
const BookModel = require("../Model/Books.Model");
const bookRouter = express.Router();

// POST request for adding book with user id to DB
bookRouter.post("/addBook", async function (req, res) {
  try {
    const isBook = await BookModel.find({
      BookTitle: req.body.BookTitle,
      userID: req.body.userID,
    });
    if (isBook.length > 0) {
      // Check Book in DB if it already exists then Response
      res.status(200).send({ message: "Book already in Reading List" });
    } else {
      // else adding a new Book to BD
      const book = new BookModel(req.body);
      await book.save();
      // response
      res.status(200).send({ message: "Book saved successfully" });
    }
  } catch (error) {
    // Error
    res.status(400).send({ message: error.message });
  }
});

// Getting Books of Perticular user
bookRouter.get("/:id", async function (req, res) {
  // inside params there will id that are loged in users id
  try {
    // we make relationship between books and user where every Book Content user ID that of thoese user Who add that book
    let Books = await BookModel.find({ userID: req.params.id });
    // response
    res.status(200).send(Books);
  } catch (error) {
    // error
    res.status(400).send({ message: error.message });
  }
});

bookRouter.delete("/:id", async (req, res) => {
  // inside params there will id that are Perticular Book ID
  try {
    // Find That Book and Delete From DB
    let user = await BookModel.findByIdAndDelete(req.params.id);
    // Response
    res.status(200).send("Delete Successful");
  } catch (error) {
    // On Error Response
    res.status(400).send(error.message);
  }
});

module.exports = bookRouter;
