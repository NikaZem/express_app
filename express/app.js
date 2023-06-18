const express = require('express')
const { init, User, Review } = require('./models/init')
const app = express()


app.get('/', async (req, res) => {
  const items = await User.findAll({
    include: Review
  })
  return res.json(items)
})

app.get('/reviews/:id', async (req, res) => {
  const items = await Review.findOne({
    where: {
      id: req.params.id
    },
    include: User
  })
  return res.json(items)
})

app.listen(3000, async () => {
  await init()
})