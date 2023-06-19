const User = require('./User')
const Review = require('./Review')
const University = require('./University')
const Faculty = require('./Faculty')


User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'RESTRICT', 
    onUpdate: 'CASCADE'
})
Review.belongsTo(User, {
    foreignKey: 'user_id'
})

University.hasMany(Faculty, {
    foreignKey: 'university_id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

Faculty.belongsTo(University, {
    foreignKey: 'university_id'
})

const init = async () => {
    await User.sync({alter: true})
    await Review.sync({alert: true})
}

module.exports = { init, User, Review, University, Faculty }