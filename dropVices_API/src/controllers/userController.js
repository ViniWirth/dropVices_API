const db = require('../models/connect');

const registro = (req, res) => {
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

  let currentDate = new Date().toISOString().split('T')[0];
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

  const sql = `INSERT INTO apoiado (email, senha, nome, dataNascimento, tipoConsumo, quantidadeMacos, valorMaco, valorCigarroEletronico, duracaoCigarroEletronico, ultimoDiaQueFumou) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, values, (err) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).send('Erro ao inserir dados');
      return;
    }
    res.send('Usuário registrado!');
  });
};

const login = (req, res) => {
  const { email, senha } = req.body;
  const sql = 'SELECT * FROM apoiado WHERE email = ?';

  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).send('Erro ao executar a consulta');
      return;
    }
    if (results.length === 0) {
      return res.status(401).send('Email ou senha incorretos');
    }
    const apoiado = results[0];
    if (apoiado.senha !== senha) {
      return res.status(401).send('Email ou senha incorretos');
    }
    res.send({
      message: 'Login realizado com sucesso',
      idapoiado: apoiado.idapoiado,
    });
  });
};

const getUltimoDiaQueFumou = (req, res) => {
  const sql = 'SELECT ultimoDiaQueFumou FROM apoiado WHERE idapoiado = ?';

  db.query(sql, [req.query.idapoiado], (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).send('Erro ao executar a consulta');
      return;
    }
    if (results.length > 0) {
      res.json({ ultimoDiaQueFumou: results[0].ultimoDiaQueFumou });
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  });
};

const getValores = (req, res) => {
  const sql =
    'SELECT tipoConsumo, quantidadeMacos, valorMaco, valorCigarroEletronico, duracaoCigarroEletronico FROM apoiado WHERE idapoiado = ?';

  db.query(sql, [req.query.idapoiado], (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).send('Erro ao executar a consulta');
      return;
    }
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  });
};

const consultaDados = (req, res) => {
  const sql = 'SELECT * FROM apoiado';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).send('Erro ao executar a consulta');
      return;
    }
    res.json(results);
  });
};

module.exports = {
  registro,
  login,
  getUltimoDiaQueFumou,
  getValores,
  consultaDados,
};