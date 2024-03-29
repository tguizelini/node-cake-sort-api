const express = require('express')
const consign = require('consign')

module.exports = () => {
  const app = express()

  consign({ cwd: 'config' })
    .include('middlewares.js')
    .into(app)

  consign({ cwd: 'database' })
    .include('sequelize.js')
    .include('entities')
    .into(app)

  consign({ cwd: 'app' })
    .include('services')
    .include('models')
    .include('controllers')
    .include('routes')
    .into(app)

  app.sequelize
    .authenticate()
    .then(() => console.log('DATABASE: Connection has been established successfully.'))
    .catch(err => console.error('Database: Unable to connect to the database:', err))

  app.sequelize
    .sync({ force: false })   
    .then(() => console.log(`DATABASE: Tables created!`))

  return app
}