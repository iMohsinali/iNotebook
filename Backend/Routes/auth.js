const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Mohsin2@12145%";
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    // password must be at least 5 chars long
    body("name").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "email aldrey exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secure = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secure,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET);

      await res.send(token);
    } catch (err) {
      console.log("err");
    }
  }
);

//login router
router.post(
  "/login",
  [
    body("email", "enter valid email").isEmail(),
    // password must be at least 5 chars long

    body("password", "password cannt be blank").exists(),
  ],
  async (req, res) => {
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Plesase enter correct credetional" });
      }
      const passwordcampare = await bcrypt.compare(password, user.password);
      if (!passwordcampare) {
        return res
          .status(400)
          .json({ error: "Plesase enter correct credetional" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET);

      await res.send(token);
    } catch (error) {
      console.log("internal server error");
    }
  }
);
module.exports = router;
