const route = require("express").Router();

route.get("/:lang", (req, res) => {
  res.json(req.data.filter((el) => el.codeLang == req.params.lang));
});

route.get("/:lang/:max", (req, res) => {
  res.json(
    req.data
      .filter((el) => el.codeLang == req.params.lang)
      .slice(0, req.params.max)
  );
});

route.get("/:lang/:max/:page", (req, res) => {
  let step = parseInt(req.params.max);
  let start = (req.params.page - 1) * step;
  res.json(
    req.data
      .filter((el) => el.codeLang == req.params.lang)
      .slice(start, start + step)
  );
});

module.exports = route;
