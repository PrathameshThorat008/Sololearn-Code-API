const route = require("express").Router();
const env = process.env;

route.get("/", (req, res) => {
  res.render("home", {
    style: "home",
    title: "Home",
    page: "",
  });
});

route.get("/doc", (req, res) => {
  res.render("doc", {
    style: "doc",
    title: "Documentation",
    page: "doc",
  });
});

route.get("/about", (req, res) => {
  res.render("about", {
    style: "about",
    title: "About",
    page: "about",
  });
});

module.exports = route;
