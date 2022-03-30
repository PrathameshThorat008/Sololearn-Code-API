const route = require("express").Router();
const env = process.env;

route.get("/", (req, res) => {
  res.render("home");
});

route.get("/doc", (req, res) => {
  res.render("doc");
});

route.get("/about", (req, res) => {
  res.render("about");
});

module.exports = route;
