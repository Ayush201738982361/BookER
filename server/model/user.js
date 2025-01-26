const mongoose = require("mongoose");
const { createHmac, randomBytes } = require("crypto");
const { createNewToken } = require("../services/auth");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      default: "NORMAL",
    },
    salt: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const salt = randomBytes(16).toString("hex");
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");
  user.salt = salt;
  user.password = hashedPassword;
  next();
});

userSchema.statics.matchPasswordAndGenerateToken = async function (
  email,
  password
) {
  const user = await this.findOne({ email });
  if (!user) throw new Error("User not found");

  const providedPassword = createHmac("sha256", user.salt)
    .update(password)
    .digest("hex");

  if (user.password !== providedPassword) throw new Error("Invalid password");

  const token = createNewToken(user);
  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
