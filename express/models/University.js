const sequelize = require('../DB')
const { DataTypes } = require('sequelize')

const University = sequelize.define('University', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    type: {
        type: DataTypes.ENUM(['state', 'commercial']),
        allowNull: false
      },
    RU_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'universities',
    timestamps: false
  });

  module.exports = University;