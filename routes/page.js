const route = require("express").Router();

route.get("/:page", (req, res) => {
  let start = (req.params.page - 1) * 10;
  res.json(req.data.slice(start, start + 10));
});

route.get("/:page/:step", (req, res) => {
  let step = parseInt(req.params.step);
  let start = (req.params.page - 1) * step;
  res.json(req.data.slice(start, start + step));
});

module.exports = route;
