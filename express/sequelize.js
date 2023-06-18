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
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
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

      const user = await User.create({
        email: 'fffrer@mail.ru',
        password: 'ghjhg',
        first_name: 'Надежда',
        last_name: 'Васильева'
      })
      console.log('auto increment is:', user.id);
  } catch (error) {
        console.error(error);
  }
})()
