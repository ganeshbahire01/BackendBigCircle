const express = require("express");
const BookModel = require("../Model/Books.Model");
const bookRouter = express.Router();

bookRouter.post("/addBook", async function (req, res) {
  try {
    const book = new BookModel(req.body);
    await book.save();
    res.status(200).send({ message: "Book saved successfully" });
  } catch (error) {
    res.status(400).send({ message: err.message });
  }
});

bookRouter.get("/", async function (req, res) {
  try {
    let Books = await BookModel.find({ userID: req.body.userID });
    res.status(200).send(Books);
  } catch (error) {
    res.status(400).send({ message: err.message });
  }
});

bookRouter.delete("/:id", async (req, res) => {
  try {
    let user = await BookModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Delete Successful");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = bookRouter;
