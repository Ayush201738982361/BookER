const { model } = require("mongoose");
const User = require("../model/user");

async function createNewUser(req, res) {
  try {
    const { name, email, password } = req.body;
    await User.create({
      name,
      email,
      password,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).send("Incorrect email or password");
  }
  res.redirect("/");
}

module.exports = {
  createNewUser,
  loginUser,
};
