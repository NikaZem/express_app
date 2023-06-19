const sequelize = require('../DB')
const { init, User, Review, University, Faculty } = require('../models/init')
const { Op } = require('sequelize')


const getReviews = async (req, res) => {
    try {
         const items = await Review.findOne({
        where: {
            id: req.params.id
        },
        include: User
        })
        return res.json(items)
    } catch (e) {
        throw e
    }
}

/* const getFaculty = async (req, res) => {
    try {
        const items = await Faculty.findAll({
            where: { id: 'university_id' }, 
            include:[
              { 
                model: University,
                attributes: ['name'],
                required: false,
              }
            ],
            attributes: ['name'],
          })
          return res.json(items)
    } catch (e) {
        throw e
    }
} */

const getFaculty = async (req, res) => {
    try {
        const items = await sequelize.query('SELECT f.name, s.name, s.passing_score FROM faculties f JOIN specialties s ON f.id = s.faculty_id WHERE s.passing_score > 230;')
        return res.json(items)
    } catch (e) {
        throw e
    }
}

module.exports = { getReviews, getFaculty };
   





