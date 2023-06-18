const sequelize = require('../DB')
const { DataTypes } = require('sequelize')

const Review = sequelize.define('Review', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true
      },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    speciality_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'reviews',
    timestamps: false
  });

  module.exports = Review;
