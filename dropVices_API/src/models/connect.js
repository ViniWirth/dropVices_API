const mysql = require("mysql2"); // Importa o módulo mysql2

const db = mysql.createConnection({
  //host: "viaduct.proxy.rlwy.net",
  host: "localhost",
  user: "root",
  //password: "AavzeFOUJWItVobkdZzxXsMrpidCKoeP",
  password: "",
  //database: "railway",
  database: "dropvicestop",
  //port: 16822,
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar com o banco", err);
    throw err;
  }
  console.log("Conexão com o banco realizada");
});

module.exports = db;
