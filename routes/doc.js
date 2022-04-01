const route = require("express").Router();
const env = process.env;

route.get("/", (req, res) => {
  res.render("home", {
    style: "home",
    title: "Home ",
  });
});

route.get("/doc", (req, res) => {
  res.render("doc", {
    style: "doc",
    title: "Documentation ",
  });
});

route.get("/about", (req, res) => {
  res.render("about", {
    style: "about",
    title: "About ",
  });
});

module.exports = route;
