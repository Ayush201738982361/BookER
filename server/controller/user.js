const { model } = require("mongoose");
const User = require("../model/user");

async function createNewUser(req, res) {
  try {
    await User.create(req.body);
    console.log(req.body);
    res.status(201).json({ message: "User  created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating user" });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  await User.findOne({ email }).then((user) => {
    if (user.password === password) {
      res.json("Success");
    } else {
      res.json("Invalid credentials");
    }
  });
}

module.exports = {
  createNewUser,
  loginUser,
};
