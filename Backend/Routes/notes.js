const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  obj = {
    name: "this is note",
    rool: 34,
  };
  res.json(obj);
});

module.exports = router;
