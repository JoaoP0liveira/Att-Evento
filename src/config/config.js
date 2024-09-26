const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('eventos_participantes', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;