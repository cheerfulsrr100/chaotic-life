const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME,
  process.env.DB_CHAOTIC_LIFE_USERNAME,
  process.env.DB_CHAOTIC_LIFE_PASSWORD, {
    host: process.env.DB_CHAOTIC_LIFE_HOST,
    port: process.env.DB_CHAOTIC_LIFE_PORT,
    dialect: 'mysql',
    logging: (...msg) => console.log(msg),
    timezone: '+08:00'
  });

sequelize
  .authenticate()
  .then(() => {
    console.log('connect successfully');
  })
  .catch(() => {
    console.error('error to connect');
  });

Object.freeze(sequelize)

module.exports = sequelize;