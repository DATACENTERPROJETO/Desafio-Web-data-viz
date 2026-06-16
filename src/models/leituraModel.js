var database = require("../database/config");

function listar() {
    const sql = `
        SELECT
            biblioteca,
            temperatura,
            umidade,
            statusLeitura,
            DATE_FORMAT(dataHora, '%d/%m/%Y %H:%i') AS dataHora
        FROM leitura
        ORDER BY dataHora DESC
    `;

    return database.query(sql);
}

module.exports = {
    listar
};