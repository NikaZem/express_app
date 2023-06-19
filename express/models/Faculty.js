const sequelize = require('../DB')
const { DataTypes } = require('sequelize')

const Faculty = sequelize.define('Faculty', {
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
    university_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    minimum_score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'faculties',
    timestamps: false
  });

  module.exports = Faculty;