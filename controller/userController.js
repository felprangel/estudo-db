const path = require("path");

exports.getAllUsers = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.send();
};

exports.getNewUser = (req, res) => {
  const filePath = path.join(__dirname, "..", "view", "newUser.html");
  res.sendFile(filePath);
};

exports.createUser = (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.send();
};
