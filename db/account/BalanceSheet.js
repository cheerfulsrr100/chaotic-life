const { modelCreate } = require('../creator');
const { DataTypes, Model } = require('sequelize');

class BalanceSheet extends Model {}

const [attributes, options] = modelCreate(
  {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    cash: DataTypes.DECIMAL(8, 2),
    accountReceivable: DataTypes.DECIMAL(8, 2),
    accountPayable: DataTypes.DECIMAL(8, 2),
    prepaidExpense: DataTypes.DECIMAL(8, 2),
    retainedEarning: DataTypes.DECIMAL(8, 2),
    profit: DataTypes.DECIMAL(8, 2),
  },
  {
    tableName: 'chaotic_life_balance_sheet',
    modelName: 'BalanceSheet',
  }
);
BalanceSheet.init(attributes, options);

module.exports = BalanceSheet;
