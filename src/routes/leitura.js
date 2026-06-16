var express = require("express");
var router = express.Router();

var leituraController = require("../controllers/leituraController");

router.get("/listar", leituraController.listar);

module.exports = router;