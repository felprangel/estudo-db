const path = require("path");

exports.getAllUsers = (req, res) => {
  console.log("usernames will be logged here - wip");
};

exports.getNewUser = (req, res) => {
  const filePath = path.join(__dirname, "..", "view", "newUser.html");
  res.sendFile(filePath);
};

exports.createUser = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};
