const path = require("path");
const db = require("../db/queries");

exports.getAllUsers = async (req, res) => {
  if (req.query.search) {
    const usernames = await db.getUsernamesBySearch(req.query.search);
    console.log("usernames: ", usernames);
    return res.send(
      "Usernames: " + usernames.map((user) => user.username).join(", ")
    );
  }
  const usernames = await db.getAllUsernames();
  console.log("usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

exports.getNewUser = (req, res) => {
  const filePath = path.join(__dirname, "..", "view", "newUser.html");
  res.sendFile(filePath);
};

exports.createUser = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};
