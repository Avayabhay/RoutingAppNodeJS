const express = require("express");
const router = express.Router();
const accounts = require("./accounts.js");

router.get("/accounts", (req, res) => {
  res.json({ userData: accounts });
});

module.exports = router;
