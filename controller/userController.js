exports.getAllUsers = (req, res) => {
  console.log("usernames will be logged here - wip");
};

exports.getNewUser = (req, res) => {
  res.sendFile("../newUser.html");
};

exports.createUser = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};
