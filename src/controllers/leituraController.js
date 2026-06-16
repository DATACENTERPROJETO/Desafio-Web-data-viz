var leituraModel = require("../models/leituraModel");

function listar(req, res) {
    leituraModel.listar()
        .then((resultado) => {
            res.status(200).json(resultado);
        })
        .catch((erro) => {
            console.error("Erro ao listar leituras:", erro);
            res.status(500).json({
                erro: erro.sqlMessage || erro.message
            });
        });
}

module.exports = {
    listar
};