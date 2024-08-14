//FAZER TUDO EM SÓ UMA ROTA
const registro = async (req, res) => {
  const {
    email,
    senha,
    nome,
    dataNascimento,
    tipoConsumo,
    quantidadeMacos,
    valorMaco,
    valorCigarroEletronico,
    duracaoCigarroEletronico,

  } = req.body;

  let currentDate = new Date().toISOString().split("T")[0];
  console.log(currentDate);
  const ultimoDiaQueFumou = currentDate;

  const values = [
    email,
    senha,
    nome,
    dataNascimento,
    tipoConsumo,
    quantidadeMacos,
    valorMaco,
    valorCigarroEletronico,
    duracaoCigarroEletronico,
    ultimoDiaQueFumou,
  ];

  console.log(values);

  const sql = `INSERT INTO apoiado (email, senha, nome, dataNascimento, tipoConsumo, quantidadeMacos, valorMaco, valorCigarroEletronico, duracaoCigarroEletronico, ultimoDiaQueFumou) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Erro ao inserir dados:", err);
      res.status(500).send("Erro ao inserir dados");
      return;
    }
    res.send("Usuário registrado!");
  });
};

const login = async (req, res) => {
  const { email, senha } = req.body;
  const sql = "SELECT * FROM apoiado WHERE email = ?";

  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error("Erro ao executar a consulta:", err);
      res.status(500).send("Erro ao executar a consulta");
      return;
    }
    if (results.length === 0) {
      res.status(401).send("Email ou senha incorretos");
      return;
    }
    const apoiado = results[0];
    if (apoiado.senha !== senha) {
      res.status(401).send("Email ou senha incorretos");
      return;
    }
    res.send("Login realizado com sucesso");
  });
};



const getUltimoDiaQueFumou = async (req, res) => {
  const sql = "SELECT ultimoDiaQueFumou FROM apoiado WHERE idapoiado = 24";

  db.query(sql, [req.query.idapoiado], (err, results) => {
    if (err) {
      console.error("Erro ao executar a consulta:", err);
      res.status(500).send("Erro ao executar a consulta");
      return;
    }
    if (results.length > 0) {
      res.json({ ultimoDiaQueFumou: results[0].ultimoDiaQueFumou });
    } else {
      res.status(404).send("Usuário não encontrado");
    }
  });
};



const consultaDados = async (req, res) => {
  const sql = "SELECT * FROM apoiado";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Erro ao executar a consulta:", err);
      res.status(500).send("Erro ao executar a consulta");
      return;
    }
    res.json(results);
  });
};

module.exports = {
  registro,
  login,
  getUltimoDiaQueFumou,
  consultaDados,
};
