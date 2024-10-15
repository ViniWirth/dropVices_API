const mysql = require("mysql2");

const db = mysql.createConnection({

  host: "localhost",
  //host: 'mysql.infocimol.com.br',

  user: "root",
  //user: 'infocimol16',

  password: "",
  //password: 'dropVices321',

  database: "dropvicestop",
  //database: 'infocimol16',

  //connectTimeout: 10000


  //host: 'mysql.infocimol.com.br',
   //user: 'infocimol15',
   //password: 'zaqwer720',
   //database: 'infocimol15',
   //connectTimeout: 10000
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar com o banco", err);
    throw err;
  }
  console.log("Conexão com o banco realizada");
});

module.exports = db;
