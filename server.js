const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");
const accounts = require("./accounts");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

//homeRoute
app.get("/", (req, res) => {
  res.send("Routing App has started");
});

//creating api
app.use("/api", router);

app.listen(PORT, () => {
  console.log("App started at port 3000");
});
