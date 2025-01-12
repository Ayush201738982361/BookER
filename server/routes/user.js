const express = require("express");
const router = express.Router();
const { createNewUser } = require("../controller/user");
const { loginUser } = require("../controller/user");

router.post("/signup", createNewUser);
router.post("/login", loginUser);

module.exports = router;
