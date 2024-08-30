const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("usernames will be logged here - wip");
});

app.get("/new", (req, res) => {
  res.sendFile("./newUser.html");
});

app.post("/new", (req, res) => {
  console.log("username to be saved: ", req.body.username);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
