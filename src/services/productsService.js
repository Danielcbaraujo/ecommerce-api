const productsRepository = require("../repositories/productsRepository.js");

async function findAll() {
  const result = await productsRepository.findAll();
  return result;
}

module.exports = { findAll };
