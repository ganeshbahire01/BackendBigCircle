const express = require("express");
const userRouter = require("./Routes/User.routes");
const connection = require("./db");
const cors = require("cors");
const bookRouter = require("./Routes/Book.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/users", userRouter);
app.use("/books", bookRouter);
app.listen("8080", async (req, res) => {
  try {
    await connection;
    console.log("Connected on DB");
  } catch (error) {
    console.log("error: " + error);
  }
});
