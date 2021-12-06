const express = require("express");
const router = express.Router();
const accounts = require("./accounts.js");

//GET request
router.get("/accounts", (req, res) => {
  res.json({ userData: accounts });
});

//POST request
router.post("/accounts", (req, res) => {
  var dataToBeIncludeded = req.body;
  accounts.push(dataToBeIncludeded);
  res.json({ userData: accounts });
});

router.get("/accounts/:id", (req, res) => {
  const accID = Number(req.params.id);
  const accInfo = accounts.find((item) => item.id === accID);
  if (accInfo) {
    res.send({ userData: accInfo });
  } else {
    res.status(500).send("No such ID present");
  }
});

module.exports = router;
