const UserController = require("../controllers/userController");
const router = express.Router();

router.post("/inserirDadosConvencional", UserController.registro);
router.post("/login", UserController.login);
router.get("/dados", UserController.consultaDados);
router.get("/getUltimoDiaQueFumou", UserController.getUltimoDiaQueFumou);

module.exports = router;
