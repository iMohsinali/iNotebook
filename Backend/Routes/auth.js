const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  obj = {
    name: "Mohsin",
    rool: 34,
  };
  res.json(obj);
});

module.exports = router;
