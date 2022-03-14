const { modelCreate } = require('../creator');
const { DataTypes, Model } = require('sequelize');

class InstallmentDetail extends Model {}

const [attributes, options] = modelCreate(
  {
    ledgerId: {
      type: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Ledger',
          key: 'id',
        },
      },
    },
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    periodTotal: DataTypes.INTEGER,
    periodRemaining: DataTypes.INTEGER,
    remainingPayableAmount: DataTypes.DECIMAL(8, 2),
  },
  {
    tableName: 'chaotic_life_installment_detail',
    modelName: 'InstallmentDetail',
  }
);
InstallmentDetail.init(attributes, options);

module.exports = InstallmentDetail;
