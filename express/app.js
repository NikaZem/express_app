const express = require('express')
const { init, User, Review } = require('./models/init')
const app = express()
const router = require('./routes/main')

app.use(router);



app.listen(3000, async () => {
  await init()
})
