var router = require('express').Router();
const { User, Review, University, Faculty } = require('../models/init')
const { getReviews, getFaculty } = require('../models/requests')

router.get('/', async (req, res) => {
  try {
    const items = await User.findAll({
      include: Review
    })
    return res.json(items)
  } catch (error) {
    console.log(error)
    return res.status(400).send('error1')
  }
})

router.get('/reviews/:id', async (req, res) => {
  try {
    await getReviews(req, res)
  } catch (error) {
    console.log(error)
    return res.status(400).send('error2')
  }
}) 

router.get('/faculties', async (req, res) => {
  try {
    await getFaculty(req, res)
  } catch (error) {
    console.log(error)
    return res.status(400).send('error3')
  }
}) 

module.exports = router;