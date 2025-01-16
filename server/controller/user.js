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
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });
  const isValidPassword = user.matchPassword(password);
  if (!isValidPassword) {
    return res.status(401).json({ msg: "Invalid password" });
  }
  console.log("Login Successful");
  return res.status(201).json({ message: "Login successful" });
}

module.exports = {
  createNewUser,
  loginUser,
};
