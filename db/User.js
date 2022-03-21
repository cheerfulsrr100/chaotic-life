const { modelCreate, sequelize } = require('./creator');
const { DataTypes, Model } = require('sequelize');

class User extends Model {
  exist() {}
}

const [attributes, options] = modelCreate(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      field: 'phone_number',
    },
    email: {
      type: DataTypes.STRING,
    },
    lastLoginTime: {
      type: DataTypes.DATE,
      field: 'last_login_time',
    },
  },
  {
    tableName: 'chaotic_life_user',
    modelName: 'User',
  }
);
User.init(attributes, options);

module.exports = User;
