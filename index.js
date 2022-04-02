require("dotenv").config({ path: "config.env" });
const env = process.env;
const path = require("path");
const data = require("./data/sl.json");
const express = require("express");
const routes = require("./routes/index");
const hbs = require("hbs");
const app = express();

const publicPath = path.join(__dirname, "public");
const staicPath = path.join(__dirname, "static");
const partialPath = path.join(__dirname, "views", "partials");

app.use("/", express.static(staicPath));
app.set("view engine", "hbs");
hbs.registerPartials(partialPath);

app.use("/api/v1/", (req, res, next) => {
  req.data = data;
  next();
});

// all codes routes
app.use("/api/v1/page", routes.page);

// sort by lang route
app.use("/api/v1/lang", routes.lang);

// sort by user route
app.use("/api/v1/user", routes.user);

// get specific id route
app.get("/api/v1/id/:id", (req, res) => {
  res.json(req.data.filter((el) => el.id == req.params.id)[0]);
});

// get specific index route
app.get("/api/v1/index/:index", (req, res) => {
  res.json(req.data[req.params.index]);
});

// doc routes
app.use("/", routes.doc);

// Default api route
app.get("/api/v1/*", (req, res) => {
  res.json(
    {
      message: "Requested Route is not Available",
    },
    404
  );
});
app.delete("/api/v1/*", (req, res) => {
  res.json(
    {
      message: "Requested Route is not Available",
    },
    404
  );
});
app.post("/api/v1/*", (req, res) => {
  res.json(
    {
      message: "Requested Route is not Available",
    },
    404
  );
});
app.put("/api/v1/*", (req, res) => {
  res.json(
    {
      message: "Requested Route is not Available",
    },
    404
  );
});

app.get("/*", (req, res) => {
  res.status(404);
  res.render("404", {
    style: "home",
    page: "404",
    title: "404",
  });
});

app.listen(env.PORT || 3000, () => {
  console.log(`Server is Running on http://localhost:${env.PORT || 3000}/`);
});
