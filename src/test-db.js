const pool = require("./config/database");

async function testConnection() {
  try {
    const result = await pool.query("SELECT NOW()");

    console.log("Conexão com PostgreSQL realizada!");
    console.log("Horário do banco:", result.rows[0].now);
  } catch (error) {
    console.error("Erro ao conectar ao PostgreSQL:", error.message);
  } finally {
    await pool.end();
  }
}

testConnection();