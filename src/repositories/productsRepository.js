const pool = require("../config/database");

async function findAll() {
  const result = await pool.query("SELECT * FROM products");
  return result.rows;
}
module.exports = { findAll };