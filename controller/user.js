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

module.exports = {
  createNewUser,
};
