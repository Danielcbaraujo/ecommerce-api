const express = require("express");

const app = express();

app.use(express.json());

const productsRoutes = require("./routes/productsRoutes");

app.use("/products", productsRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "API da loja virtual funcionando!",
  });
});

module.exports = app;
