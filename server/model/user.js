const mongoose = require("mongoose");
const { createHmac, randomBytes } = require("crypto");

const userSchema = mongoose.Schema(
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

userSchema.methods.matchPassword = function (password) {
  const user = this;
  const providedPassword = createHmac("sha256", user.salt)
    .update(password)
    .digest("hex");
  return user.password === providedPassword;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
