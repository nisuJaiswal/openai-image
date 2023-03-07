const express = require('express')
const router = require('./routes/openaiRoutes')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const cors = require('cors')
const errorHandler = require('./middleware/errorHandler')
const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/openai', router)

app.use(errorHandler)

app.listen(PORT, () => console.log("Running on PORT:", PORT))