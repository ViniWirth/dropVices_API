const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dropvicestop",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar com o banco", err);
    throw err;
  }
  console.log("Conexão com o banco realizada");
});

module.exports = db;
