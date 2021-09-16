const Sequelize = require('sequelize');
const db = require('./db');

const Orcamento = db.define('orcamentos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    subject: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    
});

//Isso cria a tabela se ela não existir (e não faz nada se já existir)
//Orcamento.sync();

//verifica se há alguma diferença na tabela, realiza a alteração
//Orcamento.sync({alter: true});

module.exports = Orcamento;