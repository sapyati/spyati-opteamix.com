const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

// Set up the express app
const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./src/routes")(app);
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to node express postgres template project"
  })
);

module.exports = app;
