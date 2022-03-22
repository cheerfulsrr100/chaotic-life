const { modelCreate } = require('../creator');
const { DataTypes, Model } = require('sequelize');

class InstallmentRecordDetail extends Model {}

const [attributes, options] = modelCreate(
  {
    expenseRecordId: {
      type: {
        type: DataTypes.INTEGER,
        references: {
          model: 'ExpenseRecord',
          key: 'id',
        },
      },
    },
    expenseRecordAmount: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    repaymentPeriod: DataTypes.INTEGER,
    remainingRepaymentPeriod: DataTypes.INTEGER,
    remainingRepayment: DataTypes.DECIMAL(8, 2),
  },
  {
    tableName: 'chaotic_life_installment_detail',
    modelName: 'InstallmentRecordDetail',
  }
);
InstallmentRecordDetail.init(attributes, options);

module.exports = InstallmentRecordDetail;
