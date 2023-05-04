const express = require("express");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const UserModel = require("../Model/User.Model");
userRouter.post("/register", async (req, res) => {
  const { email, password, mobile } = req.body;
  try {
    const isEmail = await UserModel.find({ email: email });
    if (isEmail.length > 0) {
      res.status().send({ message: "Email already exists" });
    } else {
      bcrypt.hash(password, 4, async (err, hash) => {
        const payload = {
          email,
          password: hash,
          mobile,
        };
        const user = new UserModel(payload);
        await user.save();
        res.status(200).send({ message: "Registration successful" });
      });
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email: email });

    if (user[0]) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          let obj = user[0];
          obj.password = "lol";
          res.status(200).send({
            message: "Login successful",
            token: (token = jwt.sign({ userID: user[0]._id }, "somesh")),
            owner: obj,
          });
        } else {
          res.status(400).send({ message: "Invalid password" });
        }
      });
    } else {
      res.status(400).send({ message: "Invalid email" });
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = userRouter;
