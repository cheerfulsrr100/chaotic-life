const { Model, DataTypes } = require('sequelize');
const { log } = require('debug');
const validator = require('validator');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_CHAOTIC_LIFE_USERNAME,
  process.env.DB_CHAOTIC_LIFE_PASSWORD,
  {
    host: process.env.DB_CHAOTIC_LIFE_HOST,
    port: process.env.DB_CHAOTIC_LIFE_PORT,
    dialect: 'mysql',
    logging: (...msg) => console.log(msg),
    timezone: '+08:00',
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('connect successfully');
  })
  .catch(() => {
    console.error('error to connect');
  });

Object.freeze(sequelize);

const baseField = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    field: 'id',
  },
  createTime: {
    type: DataTypes.DATE,
    field: 'create_time',
  },
  updateTime: {
    type: DataTypes.DATE,
    field: 'update_time',
  },
  isDelete: {
    type: DataTypes.TINYINT,
  },
};

const baseOptions = {
  sequelize,
  timestamps: true,
  underscored: true,
  createdAt: 'createTime',
  updatedAt: 'updateTime',
};

const modelCreate = (attributes, options) => {
  Object.assign(attributes, baseField);
  Object.assign(options, baseOptions);
  return [attributes, options];
};

module.exports = {
  sequelize,
  modelCreate,
};
