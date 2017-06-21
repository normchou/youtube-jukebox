const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.json({"message" : "Hi Melissa"})
})

module.exports = router
