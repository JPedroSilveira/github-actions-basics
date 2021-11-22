const express = require("express");
const app = express();
const port = 3000;

app.get("/health", (req, res) => {
  res.send("I'm fine, thank you!");
});

app.listen(port);
