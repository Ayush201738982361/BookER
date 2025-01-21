const { verifyToken } = require("../services/auth");

function checkForAuth(req, res, next) {
  console.log("Cookies:", req.cookies);
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ msg: "No cookie found" });
  }
  try {
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch (err) {
    console.log("Error in authentication", err);
    return res.status(401).json({ msg: "Invalid token" });
  }
}

module.exports = {
  checkForAuth,
};
