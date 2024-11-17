const express = require('express'); // Importa o módulo express
const UserController = require('../controllers/userController');
const router = express.Router(); // Cria um roteador express

router.post('/inserirDadosConvencional', UserController.registro);
router.post('/login', UserController.login);
router.get('/dados', UserController.consultaDados);
router.get('/getUltimoDiaQueFumou', UserController.getUltimoDiaQueFumou);
router.get('/getValores', UserController.getValores);
router.post('/atualizarUltimoDiaQueFumou', UserController.atualizarUltimoDiaQueFumou);
router.post('/atualizarValores', UserController.atualizarValores);

module.exports = router;
