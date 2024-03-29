const Sequelize = require('sequelize')

module.exports = app => () => {
  const Participante = app.sequelize.define('Participantes', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sorteios: {
      type: Sequelize.INTEGER,
      defaults: 0
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaults: true
    }
  })  

  return Participante
}
