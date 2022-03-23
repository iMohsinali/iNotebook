const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
router.post(
  "/",
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

      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      await res.send(req.body);
    } catch (err) {
      console.log("err");

      res.json({ error: "pleae enteer unqiue email" });
    }
  }
);

module.exports = router;
