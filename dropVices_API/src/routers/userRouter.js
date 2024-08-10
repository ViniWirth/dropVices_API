const UserController = require("../controllers/userController");
const router = express.Router();

router.post("/inserirDadosConvencional", UserController.registroConvencional);
router.post("/inserirDadosEletronico", UserController.registroEletronico);
router.post("/login", UserController.login);
router.get("/dados", UserController.consultaDados);

module.exports = router;
