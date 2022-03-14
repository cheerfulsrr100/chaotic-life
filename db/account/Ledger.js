const { modelCreate } = require('../creator');
const { DataTypes, Model } = require('sequelize');

class Ledger extends Model {}

const [attributes, options] = modelCreate(
  {
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      references: {
        model: 'User',
        key: 'id',
      },
    },
    expenseAmount: {
      type: DataTypes.DECIMAL(8, 2),
      field: 'expense_amount',
    },
    expenseTypeId: {
      type: DataTypes.INTEGER,
      field: 'expense_type_id',
      references: {
        model: 'ExpenseType',
        key: 'id',
      },
    },
    paymentMethod: {
      type: DataTypes.TINYINT,
      field: 'payment_method',
    },
    expenseComment: {
      type: DataTypes.STRING,
      field: 'expense_comment',
    },
  },
  {
    tableName: 'chaotic_life_ledger',
    modelName: 'Ledger',
  }
);
Ledger.init(attributes, options);

module.exports = Ledger;
