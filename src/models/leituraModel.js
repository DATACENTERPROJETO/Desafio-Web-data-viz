var database = require("../database/config");

function listar() {
    var instrucaoSql = `
        SELECT
            biblioteca,
            temperatura,
            umidade,
            statusLeitura,
            DATE_FORMAT(dataHora, '%d/%m/%Y %H:%i') AS dataHora
        FROM leitura
        ORDER BY dataHora DESC;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    listar
};