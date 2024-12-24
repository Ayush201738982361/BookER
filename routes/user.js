const express = require("express");
const router = express.Router();
const { createNewUser } = require("../controller/user");

router.post("/signup", createNewUser);

module.exports = router;
