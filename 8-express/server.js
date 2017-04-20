const express = require("express");

const app = express();

app
  .get("/", (req, res) => {
  res.send("hello world");
  })
  .get("/profile", (req, res) => {
  var profile = {name: "Conrad"};
  res.send(profile);
  })
app.listen(3000);
