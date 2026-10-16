const productsService = require("../services/productsService.js");

async function findAll(req, res) {
  try {
    const products = await productsService.findAll();

    return res.status(200).json(products);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro interno do servidor",
    });
  }
}

module.exports = { findAll };
