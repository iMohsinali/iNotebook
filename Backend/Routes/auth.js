const express = require("express");
const createUser = require("../controller/auth");
const getUser = require("../controller/auth");
const router = express.Router();
router.get("/", getUser);

router.post("/", createUser);

module.exports = router;
