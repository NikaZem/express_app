const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('education_aggregator_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;