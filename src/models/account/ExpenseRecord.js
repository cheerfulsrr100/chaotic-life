const { modelCreate } = require('../creator');
const { DataTypes, Model } = require('sequelize');

class ExpenseRecord extends Model {}

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
    amount: {
      type: DataTypes.DECIMAL(8, 2),
      field: 'amount',
    },
    expenseTypeId: {
      type: DataTypes.INTEGER,
      field: 'expense_type_id',
      references: {
        model: 'ExpenseType',
        key: 'id',
      },
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.TINYINT,
      field: 'payment_method',
    },
    expenseDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    expenseComment: {
      type: DataTypes.STRING,
      field: 'expense_comment',
    },
  },
  {
    tableName: 'chaotic_life_expense_record',
    modelName: 'ExpenseRecord',
  }
);
ExpenseRecord.init(attributes, options);

module.exports = ExpenseRecord;
