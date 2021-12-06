const express = require("express");
const router = express.Router();
const accounts = require("./accounts.js");

//GET request
router.get("/accounts", (req, res) => {
  res.json({ userData: accounts });
});

//POST request - for adding data
router.post("/accounts", (req, res) => {
  var dataToBeIncludeded = req.body;
  accounts.push(dataToBeIncludeded);
  res.json({ userData: accounts });
});

//GET request for filtering and getting the specific data
router.get("/accounts/:id", (req, res) => {
  const accID = Number(req.params.id);
  const accInfo = accounts.find((item) => item.id === accID);
  if (accInfo) {
    res.send({ userData: accInfo });
  } else {
    res.status(500).send("No such ID present");
  }
});

//PUT request - for changing data
router.put("/accounts/:id", (req, res) => {
  var accID = Number(req.params.id);
  var accInfo = accounts.find((item) => item.id === accID);
  //   res.send({ userData: accInfo });
  if (accInfo) {
    var index = accounts.indexOf(accInfo);
    accounts[index] = { ...accInfo, ...req.body };
    res.send({ userData: accounts });
  } else {
    res.status(500).end("No such user exists! Hence data not Altered!");
  }
});

module.exports = router;
