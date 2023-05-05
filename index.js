const express = require("express");
const userRouter = require("./Routes/User.routes");
const connection = require("./db");
const cors = require("cors");
const bookRouter = require("./Routes/Book.routes");

const app = express();
// cors for Cors Origin aerror It Allow to Acces Cross Origin Site Request
app.use(cors());
// Convert json response
app.use(express.json());
// get Request On api load
app.get("/", (req, res) => {
  res.send("hello world!");
});

// Routes user and book routes
app.use("/users", userRouter);
app.use("/books", bookRouter);

// for listing on locallay on port number 8080
app.listen("8080", async (req, res) => {
  try {
    // connection to Mongo DB
    await connection;
    console.log("Connected on DB");
  } catch (error) {
    console.log("error: " + error);
  }
});
