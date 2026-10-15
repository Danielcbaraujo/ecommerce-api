const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "API da loja virtual funcionando!",
  });
});

module.exports = app;