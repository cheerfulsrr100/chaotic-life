const { modelCreate } = require('../creator');
const { DataTypes, Model } = require('sequelize');

class ExpenseType extends Model {}

const [attributes, options] = modelCreate(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    name: DataTypes.STRING,
  },
  {
    tableName: 'chaotic_life_expense_type',
    modelName: 'ExpenseType',
  }
);
ExpenseType.init(attributes, options);

module.exports = ExpenseType;
