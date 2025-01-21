const jwt = require("jsonwebtoken");
const secretKey = "BookER@2025";

function createNewToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    role: user.role,
  };
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
  return token;
}

function verifyToken(token) {
  try {
    const payload = jwt.verify(token, secretKey);
    return payload;
  } catch (err) {
    console.log("Error in verifying user:", err);
  }
}

module.exports = {
  createNewToken,
  verifyToken,
};
