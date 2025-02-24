const { model } = require("mongoose");
const nodemailer = require("nodemailer");
const User = require("../model/user");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendMail = async (to, sub, msg) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: to,
      subject: sub,
      html: msg,
    });
    console.log("Email sent successfully");
  } catch (err) {
    console.log("Error in sending the email", err);
  }
};

async function createNewUser(req, res) {
  try {
    await User.create(req.body);
    console.log(req.body);
    res.status(201).json({ message: "User created successfully" });
    await sendMail(
      req.body.email,
      "Welcome to BookER",
      `<p>Welcome to BookER , We Are Excited To Have You On Board 🎉</p>`
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating user" });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);

    if (!token) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    console.log("Login Successful", token);
    return res.status(201).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error during login", error: error.message });
  }
}

module.exports = {
  createNewUser,
  loginUser,
};
