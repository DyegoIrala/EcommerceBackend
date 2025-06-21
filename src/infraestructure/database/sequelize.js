const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombre_de_tu_db', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;