const express = require("express");
const router = express.Router();
const { createNewUser } = require("../controller/user");
const { loginUser } = require("../controller/user");
const { checkForAuth } = require("../middleware/auth");

router.post("/signup", createNewUser);
router.post("/login", loginUser);
router.use(checkForAuth);

module.exports = router;
