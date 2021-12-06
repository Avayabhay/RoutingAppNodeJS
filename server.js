const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

//homeRoute
app.get("/", (req, res) => {
  res.send("Routing App has started");
});

app.listen(PORT, () => {
  console.log("App started at port 3000");
});
