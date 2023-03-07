const express = require('express')
const { genImage } = require('../controllers/openaiContoller')

const router = express.Router()

router.post('/image', genImage)

module.exports = router 