const route = require("express").Router();
const env = process.env;

route.get("/", (req, res) => {
  res.render("home");
});

route.get("/doc", (req, res) => {
  res.render("doc", {
    domain: `http://${env.HOST}:${env.PORT || 3000}${env.API_PATH}`,
  });
});

route.get("/about", (req, res) => {
  res.render("about", {
    domain: `http://${env.HOST}:${env.PORT || 3000}${env.API_PATH}`,
  });
});

module.exports = route;
