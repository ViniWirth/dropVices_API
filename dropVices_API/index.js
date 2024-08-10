express = require("express");
const app = express();
const port = 3000;
mysql = require("mysql2");
db = require("./src/models/connect");
const routes = require("./src/routers/userRouter");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Servidor iniciado");
});

app.use("/usuarios", routes);
