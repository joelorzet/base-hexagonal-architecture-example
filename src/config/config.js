const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/health", function (req, res) {
  res.status(200).json({
    message: "Working! <3",
  });
});

module.exports = { app, PORT };
