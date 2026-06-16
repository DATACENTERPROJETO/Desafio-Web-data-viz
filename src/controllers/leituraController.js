const leituraModel = require("../models/leituraModel");

function listar(req, res) {
    leituraModel.listar()
        .then(([resultado]) => {
            res.json(resultado);
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    listar
};