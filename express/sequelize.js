const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('education_aggregator_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true
      },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      gender: {
        type: DataTypes.ENUM(['male', 'female']),
        allowNull: true
      }
  }, {
    tableName: 'users',
    timestamps: false 
  });
  
  // `sequelize.define` also returns the model
  console.log(User === sequelize.models.User); // true

;(async () => {
    try {
    await User.sync({
        alter: true,
        force: false
    })
  } catch (error) {
        console.error(error);
  }
})()
