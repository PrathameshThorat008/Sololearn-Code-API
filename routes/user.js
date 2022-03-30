const route = require("express").Router();

route.get("/:name", (req, res) => {
  res.json(req.data.filter((el) => el.userName == req.params.name));
});

route.get("/:name/:max", (req, res) => {
  res.json(
    req.data
      .filter((el) => el.userName == req.params.name)
      .slice(0, req.params.max)
  );
});

route.get("/:name/:max/:page", (req, res) => {
  let step = parseInt(req.params.max);
  let start = (req.params.page - 1) * step;
  console.log(step, start);
  res.json(
    req.data
      .filter((el) => el.userName == req.params.name)
      .slice(start, start + step)
  );
});

module.exports = route;
