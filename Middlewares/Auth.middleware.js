const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // Get Token From Headers
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, "somesh");
    if (decoded) {
      // if Decoded then go to next
      next();
    } else {
      // Else sent response
      res.status(400).send({ message: "Auth Failed" });
    }
  } else {
    res.status(400).send({ message: "Please Login first" });
  }
};

module.exports = auth;
