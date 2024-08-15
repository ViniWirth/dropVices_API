const db = mysql.createConnection({
  host: "viaduct.proxy.rlwy.net",
  user: "root",
  password: "AavzeFOUJWItVobkdZzxXsMrpidCKoeP",
  database: "railway",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar com o banco", err);
    throw err;
  }
  console.log("Conexão com o banco realizada");
});

module.exports = db;
