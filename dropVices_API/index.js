const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
//const port = 16822;
const mysql = require("mysql2");
const db = require("./src/models/connect");
const routes = require("./src/routers/userRouter");

// Configuração do CORS
app.use(cors({
  origin: '*', // Permite qualquer origem
}));
app.options('*', cors()); // Habilita preflight requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Adicionar logs de requisição
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

app.use("/usuarios", routes);

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

// Exportar o app apenas se necessário para testes ou integração
module.exports = app;
