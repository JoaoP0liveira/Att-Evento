const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Evento = require('./eventos');


const Participante = sequelize.define('Participante', {
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  eventoId: {
    onDelete: 'CASCADE',
    type: DataTypes.INTEGER,
    references: {
      model: Evento,
      key: 'id'
    }
  }
});

module.exports = Participante;