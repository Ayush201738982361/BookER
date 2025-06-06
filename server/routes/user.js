const express = require("express");
const router = express.Router();
const { createNewUser } = require("../controller/user");
const { loginUser } = require("../controller/user");
const { logoutUser } = require("../controller/user");
const { createNewListing } = require("../controller/book");
const { getAllListings } = require("../controller/book");
const { checkForAuth } = require("../middleware/auth");
const { sendUserInfo } = require("../controller/user");

router.post("/signup", createNewUser);
router.post("/login", loginUser);
router.post("/sell", createNewListing);
router.get("/buy", getAllListings);
router.post("/logout", logoutUser);
router.use(checkForAuth);

router.get("/me", sendUserInfo);

module.exports = router;
