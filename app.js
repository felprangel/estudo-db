const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("usernames will be logged here - wip");
});

app.get("/new", (req, res) => {
  res.render("newUser");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
