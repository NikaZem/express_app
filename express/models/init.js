const User = require('./User')
const Review = require('./Review')


User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL', 
    onUpdate: 'CASCADE'
})
Review.belongsTo(User, {
    foreignKey: 'user_id'
})

const init = async () => {
    await User.sync({alter: true})
    await Review.sync({alert: true})
}

module.exports = { init, User, Review }